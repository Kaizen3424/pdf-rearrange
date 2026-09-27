import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FileText, TriangleAlert, Upload } from 'lucide-react';
import type { PageItem, SourceDoc, Status, ToastMessage, Zoom } from '../organize/types';
import { uid, ZOOM_WIDTHS } from '../organize/types';
import { usePages } from '../organize/hooks/usePages';
import { useThumbnails } from '../organize/hooks/useThumbnails';
import { isPdfEncrypted, openPdf } from '../organize/lib/pdfService';
import { exportPageRanges, triggerDownload } from '../organize/lib/exportService';
import { ToolI18nProvider, useToolI18n } from '../organize/i18n';
import DropZone from '../organize/DropZone';
import PageGrid from '../organize/PageGrid';
import PreviewModal from '../organize/PreviewModal';
import PasswordModal from '../organize/PasswordModal';
import Toasts from '../organize/Toasts';
import RangePanel from './RangePanel';
import SplitResultPanel from './SplitResultPanel';
import { appendPage, planFor, type ParsedRanges, type RangeErrorKind } from './lib/rangeParser';
import { splitFileName } from './lib/splitFiles';

interface PasswordRequest {
  needsRetry: boolean;
  fileName: string;
  resolve: (password: string) => void;
  reject: () => void;
}

type Mode = 'range' | 'every';

/** Above this many output files a single click asks for confirmation first. */
const CONFIRM_THRESHOLD = 20;

export interface SplitOutcome {
  files: { name: string; size: number; pages: number }[];
  failed: { name: string }[];
}

/**
 * Split a PDF into separate documents, entirely in the browser.
 *
 * Two modes over the same loaded document: type page ranges and get one file
 * per range, or take every page as its own file. The grid is a read-only view
 * of the document — page numbers always mean their position in the original —
 * so nothing here can modify the file the user opened.
 */
export default function SplitTool({ locale = 'en' }: { locale?: string }) {
  return (
    <ToolI18nProvider locale={locale}>
      <SplitToolInner />
    </ToolI18nProvider>
  );
}

function SplitToolInner() {
  const { t } = useToolI18n();
  const [status, setStatus] = useState<Status>('empty');
  const [docs, setDocs] = useState<SourceDoc[]>([]);
  const docsRef = useRef<SourceDoc[]>([]);
  const { pages, hardSet, clearHistory } = usePages();
  const [mode, setMode] = useState<Mode>('range');
  const [rangeText, setRangeText] = useState('');
  const [zoom, setZoom] = useState<Zoom>('md');
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [liveMessage, setLiveMessage] = useState('');
  const [passwordRequest, setPasswordRequest] = useState<PasswordRequest | null>(null);
  const [loadLabel, setLoadLabel] = useState('');
  const [filesDragging, setFilesDragging] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [outcome, setOutcome] = useState<SplitOutcome | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounterRef = useRef(0);
  const toastTimers = useRef<number[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const thumbnails = useThumbnails();

  const total = pages.length;
  const plan = useMemo<ParsedRanges>(
    () => planFor(mode, rangeText, total),
    [mode, rangeText, total],
  );

  const announce = useCallback((message: string) => {
    setLiveMessage(message);
  }, []);

  const toast = useCallback((kind: ToastMessage['kind'], text: string) => {
    const id = uid();
    setToasts((prev) => [...prev.slice(-2), { id, kind, text }]);
    const timer = window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
      toastTimers.current = toastTimers.current.filter((value) => value !== timer);
    }, 5500);
    toastTimers.current.push(timer);
  }, []);

  const editorActive = status === 'ready' || status === 'exporting' || status === 'done';
  const gridVisible = status === 'ready' || status === 'exporting';
  const showResult = status === 'done' && outcome !== null;

  const prevStatusRef = useRef<Status>('empty');
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('organize:state', { detail: { active: status !== 'empty' } }),
    );
    if (status === 'ready' && prevStatusRef.current === 'loading') {
      rootRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    prevStatusRef.current = status;
  }, [status]);

  // pdf.js keeps the whole file in a worker-backed document; dropping it on
  // unmount is what actually frees the memory the copy promises goes away when
  // the tab closes.
  useEffect(() => {
    const held = docsRef.current;
    return () => {
      toastTimers.current.forEach((timer) => window.clearTimeout(timer));
      toastTimers.current = [];
      held.forEach((doc) => {
        if (doc.doc) void doc.doc.cleanup().catch(() => undefined);
      });
    };
  }, []);

  const promptForPassword = useCallback((needsRetry: boolean, fileName: string) => {
    return new Promise<string>((resolve, reject) => {
      setPasswordRequest({ needsRetry, fileName, resolve, reject });
    });
  }, []);

  const addFiles = useCallback(
    async (files: FileList | File[]) => {
      const list = Array.from(files);
      const pdfs = list.filter(
        (file) => file.type === 'application/pdf' || /\.pdf$/i.test(file.name),
      );
      const skipped = list.length - pdfs.length;
      if (skipped > 0) {
        toast('error', t.tool.filesSkippedPdf(skipped));
      }
      if (pdfs.length === 0) return;

      setStatus('loading');
      const newDocs: SourceDoc[] = [];
      const newItems: PageItem[] = [];
      let cancelledCount = 0;
      let encryptedCount = 0;

      for (let i = 0; i < pdfs.length; i++) {
        const file = pdfs[i]!;
        setLoadLabel(
          pdfs.length > 1
            ? t.tool.readingFileOf(file.name, i + 1, pdfs.length)
            : t.tool.readingFile(file.name),
        );

        let bytes: Uint8Array;
        try {
          bytes = new Uint8Array(await file.arrayBuffer());
        } catch {
          toast('error', t.tool.readFailed(file.name));
          continue;
        }

        let passwordUsed = false;
        let cancelled = false;
        let pdfDoc: Awaited<ReturnType<typeof openPdf>> | null = null;
        try {
          pdfDoc = await openPdf(bytes.slice(), async (needsRetry) => {
            passwordUsed = true;
            try {
              return await promptForPassword(needsRetry, file.name);
            } catch (error) {
              cancelled = true;
              throw error;
            }
          });
        } catch {
          if (cancelled) {
            cancelledCount += 1;
            continue;
          }
          toast('error', t.tool.openFailed(file.name));
          continue;
        }
        if (!pdfDoc) continue;

        const isEncrypted = passwordUsed || isPdfEncrypted(bytes);
        if (isEncrypted) encryptedCount += 1;

        const docId = uid();
        newDocs.push({
          id: docId,
          name: file.name,
          bytes,
          doc: pdfDoc,
          pageCount: pdfDoc.numPages,
          encrypted: isEncrypted,
        });
        for (let pageIndex = 0; pageIndex < pdfDoc.numPages; pageIndex++) {
          newItems.push({ id: uid(), sourceId: docId, sourcePageIndex: pageIndex, rotation: 0 });
        }
      }

      if (newDocs.length > 0) {
        const nextDocs = [...docsRef.current, ...newDocs];
        docsRef.current = nextDocs;
        setDocs(nextDocs);
        hardSet([...pages, ...newItems]);
        setRangeText('');
        setMode('range');
        setOutcome(null);
        setConfirming(false);
        setStatus('ready');
        announce(t.tool.pagesReady(newItems.length));
      } else {
        setStatus(docsRef.current.length > 0 ? 'ready' : 'empty');
      }

      if (cancelledCount > 0) {
        toast('info', t.tool.filesSkippedPassword(cancelledCount));
      }
      if (encryptedCount > 0) {
        toast('info', t.tool.encryptedInfo);
      }
    },
    [hardSet, pages, promptForPassword, toast, announce, t],
  );

  const openPicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const startOver = useCallback(() => {
    docsRef.current.forEach((doc) => {
      if (doc.doc) void doc.doc.cleanup().catch(() => undefined);
    });
    docsRef.current = [];
    setDocs([]);
    hardSet([]);
    clearHistory();
    setRangeText('');
    setMode('range');
    setPreviewIndex(null);
    setOutcome(null);
    setProgress(null);
    setConfirming(false);
    setStatus('empty');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [hardSet, clearHistory]);

  const errorMessage = useCallback(
    (error: RangeErrorKind | null, part: string | null, pageCount: number): string => {
      switch (error) {
        case 'empty':
          return t.split.errorEmpty;
        case 'zero':
          return t.split.errorZero;
        case 'syntax':
          return t.split.errorSyntax(part ?? '');
        case 'unfinished':
          return t.split.errorUnfinished(part ?? '');
        case 'trailing':
          return t.split.errorTrailing;
        case 'reversed':
          return t.split.errorReversed(part ?? '');
        case 'outOfBounds':
          return t.split.errorOutOfBounds(pageCount);
        default:
          return '';
      }
    },
    [t],
  );

  const rangeError =
    mode === 'range' ? errorMessage(plan.error, plan.part, total) : '';

  const runSplit = useCallback(async () => {
    if (total === 0) return;
    if (docsRef.current.some((doc) => doc.encrypted)) {
      toast('error', t.tool.encryptedDownloadToast);
      return;
    }
    if (plan.error !== null || plan.groups.length === 0) {
      toast('error', rangeError || t.split.errorEmpty);
      return;
    }

    setConfirming(false);
    setStatus('exporting');
    setProgress({ done: 0, total: plan.groups.length });

    const labels = plan.labels;
    const groups = plan.groups;
    const sourceName = docsRef.current[0]?.name ?? 'split';

    // `plan.groups` holds zero-based page indices; the exporter wants the
    // `PageItem`s behind them, in the order the ranges were typed.
    const groupsOfPages = groups.map((group) =>
      group.map((index) => pages[index]).filter((item): item is PageItem => Boolean(item)),
    );

    const files: SplitOutcome['files'] = [];
    const failed: SplitOutcome['failed'] = [];

    try {
      // One call for every range. `exportPageRanges` reports each finished file
      // through `onGroup` rather than returning it, so results are collected
      // from the callback as the groups are built.
      const nameFor = (index: number) =>
        splitFileName(sourceName, labels[index] ?? '', index, groups.length);

      await exportPageRanges(
        docsRef.current,
        groupsOfPages,
        (index) => nameFor(index),
        (built, index) => {
          const name = nameFor(index);
          if (built) {
            triggerDownload(built.blob, built.fileName);
            files.push({ name: built.fileName, size: built.blob.size, pages: built.pageCount });
          } else {
            failed.push({ name });
          }
          const done = files.length + failed.length;
          setProgress({ done, total: groups.length });
          announce(t.split.progress(done, groups.length));
        },
      );
    } catch (error) {
      console.error('Split failed:', error);
    }

    setProgress(null);
    setOutcome({ files, failed });
    setStatus('done');
    if (files.length === 0) {
      toast('error', t.split.allFailed);
    } else if (failed.length > 0) {
      toast('error', t.split.partialFailure(files.length, failed.length));
    }
  }, [total, plan, rangeError, toast, announce, t]);

  const handleSplit = useCallback(() => {
    if (total === 0) return;
    if (docsRef.current.some((doc) => doc.encrypted)) {
      toast('error', t.tool.encryptedDownloadToast);
      return;
    }
    if (plan.groups.length > CONFIRM_THRESHOLD && !confirming) {
      setConfirming(true);
      return;
    }
    void runSplit();
  }, [total, plan, confirming, runSplit, toast, t]);

  // Clicking a page appends it to the range list, which is what the panel's
  // hint text tells users to do. It is the only grid gesture that means
  // something here: splitting never modifies the document.
  const addPageToRanges = useCallback(
    (id: string) => {
      const index = pages.findIndex((page) => page.id === id);
      if (index < 0) return;
      const page = index + 1;
      setRangeText((current) => appendPage(current, page));
      announce(t.split.planItem(page, String(page), 1));
    },
    [pages, announce, t],
  );

  const onReorderBlocked = useCallback(() => {
    toast('info', t.split.pageControlsDisabled);
  }, [toast, t]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!gridVisible || previewIndex !== null || passwordRequest !== null) return;
      if (event.key === 'Escape' && confirming) {
        event.preventDefault();
        setConfirming(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [gridVisible, previewIndex, passwordRequest, confirming]);

  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      if (passwordRequest !== null) return;
      const files = Array.from(event.clipboardData?.files ?? []).filter(
        (file) => file.type === 'application/pdf' || /\.pdf$/i.test(file.name),
      );
      if (files.length > 0) {
        event.preventDefault();
        void addFiles(files);
      }
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, [addFiles, passwordRequest]);

  useEffect(() => {
    const hasFiles = (event: DragEvent) =>
      Array.from(event.dataTransfer?.types ?? []).includes('Files');

    const onDragEnter = (event: DragEvent) => {
      if (!hasFiles(event)) return;
      dragCounterRef.current += 1;
      if (status !== 'empty' && status !== 'loading') setFilesDragging(true);
    };
    const onDragOver = (event: DragEvent) => {
      if (hasFiles(event)) event.preventDefault();
    };
    const onDragLeave = () => {
      dragCounterRef.current = Math.max(0, dragCounterRef.current - 1);
      if (dragCounterRef.current === 0) setFilesDragging(false);
    };
    const onDrop = (event: DragEvent) => {
      event.preventDefault();
      dragCounterRef.current = 0;
      setFilesDragging(false);
      if (status === 'loading') return;
      if (event.dataTransfer?.files?.length) {
        void addFiles(event.dataTransfer.files);
      }
    };

    window.addEventListener('dragenter', onDragEnter);
    window.addEventListener('dragover', onDragOver);
    window.addEventListener('dragleave', onDragLeave);
    window.addEventListener('drop', onDrop);
    return () => {
      window.removeEventListener('dragenter', onDragEnter);
      window.removeEventListener('dragover', onDragOver);
      window.removeEventListener('dragleave', onDragLeave);
      window.removeEventListener('drop', onDrop);
    };
  }, [status, addFiles]);

  const realDocs = docs.filter((doc) => !doc.blank);

  return (
    <div ref={rootRef} className="split-root scroll-mt-28">
      <p aria-live="polite" className="sr-only">
        {liveMessage}
      </p>

      {(status === 'empty' || status === 'loading') && (
        <DropZone
          loading={status === 'loading'}
          loadLabel={loadLabel}
          onBrowse={openPicker}
        />
      )}

      {showResult && outcome ? (
        <SplitResultPanel
          outcome={outcome}
          onStartNew={startOver}
          onBackToEditing={() => setStatus('ready')}
        />
      ) : editorActive ? (
        <div>
          {realDocs.some((doc) => doc.encrypted) && (
            <div
              role="alert"
              className="mb-4 flex items-start gap-3 rounded-xl border border-accent-orange/60 bg-accent-orange/15 p-4"
            >
              <TriangleAlert className="mt-0.5 size-5 shrink-0 text-ink" />
              <div className="min-w-0">
                <p className="text-body-md-strong text-ink">{t.tool.encryptedTitle}</p>
                <p className="mt-1 text-body-sm text-body">
                  {t.tool.encryptedBody1}
                  <span className="font-semibold">{t.tool.encryptedStrong}</span>
                  {t.tool.encryptedBody2}
                </p>
              </div>
            </div>
          )}

          <RangePanel
            mode={mode}
            onModeChange={(next) => {
              setMode(next);
              setConfirming(false);
            }}
            rangeText={rangeText}
            onRangeTextChange={setRangeText}
            errorMessage={rangeError}
            plan={plan}
            pageCount={total}
            fileName={docs[0]?.name ?? ''}
            zoom={zoom}
            onZoomChange={setZoom}
            onAddFiles={openPicker}
            onStartOver={startOver}
            exporting={status === 'exporting'}
            progress={progress}
            confirming={confirming}
            onSplit={handleSplit}
            onCancelConfirm={() => setConfirming(false)}
          />

          {pages.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-ink/15 bg-canvas/60 p-10 text-center elev-1">
              <FileText className="mx-auto size-10 text-mute" strokeWidth={1.5} />
              <p className="mt-3 text-body-lg font-semibold text-ink">{t.tool.noPagesLeft}</p>
              <p className="mt-1 text-body-md text-body">{t.tool.noPagesHint}</p>
              <button type="button" className="btn btn-secondary mt-5" onClick={openPicker}>
                {t.tool.addPdfs}
              </button>
            </div>
          ) : (
            <PageGrid
              pages={pages}
              docs={docs}
              thumbnails={thumbnails}
              zoomWidth={ZOOM_WIDTHS[zoom]}
              selected={new Set<string>()}
              onReorder={onReorderBlocked}
              onToggleSelect={addPageToRanges}
              onRotate={onReorderBlocked}
              onDuplicate={onReorderBlocked}
              onDelete={onReorderBlocked}
              onPreview={setPreviewIndex}
            />
          )}
        </div>
      ) : null}

      {previewIndex !== null && (
        <PreviewModal
          pages={pages}
          docs={docs}
          index={Math.min(previewIndex, pages.length - 1)}
          thumbnails={thumbnails}
          onClose={() => setPreviewIndex(null)}
          onNavigate={(delta) =>
            setPreviewIndex((current) =>
              current === null ? current : Math.min(pages.length - 1, Math.max(0, current + delta)),
            )
          }
        />
      )}

      {passwordRequest && (
        <PasswordModal
          needsRetry={passwordRequest.needsRetry}
          fileName={passwordRequest.fileName}
          onSubmit={(password) => {
            passwordRequest.resolve(password);
            setPasswordRequest(null);
          }}
          onCancel={() => {
            passwordRequest.reject();
            setPasswordRequest(null);
          }}
        />
      )}

      {filesDragging && editorActive && (
        <div className="animate-fade-in pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-scrim/50 p-8 backdrop-blur-sm">
          <div className="animate-scale-in rounded-xl border-2 border-dashed border-primary bg-scrim/90 px-10 py-8 text-center elev-3">
            <Upload className="mx-auto size-10 text-primary" />
            <p className="mt-3 text-body-lg font-semibold text-on-solid">
              {t.tool.dropOverlay}
            </p>
          </div>
        </div>
      )}

      <Toasts
        toasts={toasts}
        onDismiss={(id) => setToasts((prev) => prev.filter((item) => item.id !== id))}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf,.pdf"
        multiple
        className="hidden"
        onChange={(event) => {
          if (event.target.files?.length) void addFiles(event.target.files);
          event.target.value = '';
        }}
      />
    </div>
  );
}

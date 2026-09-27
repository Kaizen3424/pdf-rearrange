import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { FileText, TriangleAlert, Upload } from 'lucide-react';
import type { PageItem, SourceDoc, Status, ToastMessage, Zoom } from '../organize/types';
import { uid, ZOOM_WIDTHS } from '../organize/types';
import { usePages } from '../organize/hooks/usePages';
import { useThumbnails } from '../organize/hooks/useThumbnails';
import { isPdfEncrypted, openPdf } from '../organize/lib/pdfService';
import { exportRearrangedPdf, triggerDownload } from '../organize/lib/exportService';
import { ToolI18nProvider, useToolI18n } from '../organize/i18n';
import DropZone from '../organize/DropZone';
import PageGrid from '../organize/PageGrid';
import PreviewModal from '../organize/PreviewModal';
import PasswordModal from '../organize/PasswordModal';
import Toasts from '../organize/Toasts';
import ExtractPanel from './ExtractPanel';
import ExtractResultPanel from './ExtractResultPanel';
import OrderTray from './OrderTray';
import { extractFileName } from './lib/extractFiles';

interface PasswordRequest {
  needsRetry: boolean;
  fileName: string;
  resolve: (password: string) => void;
  reject: () => void;
}

export interface ExtractOutcome {
  name: string;
  size: number;
  pages: number;
}

/**
 * Where a newly kept page belongs in the tray.
 *
 * Selection is additive, so without this a page picked after a reorder would
 * land at the end of the new document instead of where the reader expects it —
 * the tray is only out of document order where the user put it that way.
 */
function insertAt(list: PageItem[], id: string, order: Map<string, number>): number {
  const at = order.get(id) ?? list.length;
  for (let i = 0; i < list.length; i++) {
    if ((order.get(list[i]!.id) ?? 0) > at) return i;
  }
  return list.length;
}

/**
 * Keep chosen pages of a PDF and download them as one new document, entirely in
 * the browser.
 *
 * Two surfaces, one list. Selection happens on the thumbnails or on the picker;
 * the order of the new document is the tray underneath, which is the only place
 * the sequence can be changed. The file the user opened is never written to —
 * the export is a fresh document built from copies of the pages they kept.
 */
export default function ExtractTool({ locale = 'en' }: { locale?: string }) {
  return (
    <ToolI18nProvider locale={locale}>
      <ExtractToolInner />
    </ToolI18nProvider>
  );
}

function ExtractToolInner() {
  const { t } = useToolI18n();
  const [status, setStatus] = useState<Status>('empty');
  const [docs, setDocs] = useState<SourceDoc[]>([]);
  const docsRef = useRef<SourceDoc[]>([]);
  const { pages, hardSet, clearHistory } = usePages();
  const [kept, setKept] = useState<PageItem[]>([]);
  const [anchorId, setAnchorId] = useState<string | null>(null);
  const [zoom, setZoom] = useState<Zoom>('md');
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [liveMessage, setLiveMessage] = useState('');
  const [passwordRequest, setPasswordRequest] = useState<PasswordRequest | null>(null);
  const [loadLabel, setLoadLabel] = useState('');
  const [filesDragging, setFilesDragging] = useState(false);
  const [outcome, setOutcome] = useState<ExtractOutcome | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounterRef = useRef(0);
  const toastTimers = useRef<number[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const thumbnails = useThumbnails();

  const keptIds = useMemo(() => new Set(kept.map((page) => page.id)), [kept]);
  const pageOrder = useMemo(
    () => new Map(pages.map((page, index) => [page.id, index])),
    [pages],
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
  // the tab closes. `openPdf` hands back the document proxy rather than the
  // loading task that owns the worker, and the proxy's own teardown in pdfjs
  // 6 is `cleanup()`.
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
        setAnchorId(null);
        setOutcome(null);
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
    setKept([]);
    setAnchorId(null);
    setPreviewIndex(null);
    setOutcome(null);
    setStatus('empty');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [hardSet, clearHistory]);

  const insertKept = useCallback(
    (list: PageItem[], page: PageItem): PageItem[] => {
      const next = [...list];
      next.splice(insertAt(next, page.id, pageOrder), 0, page);
      return next;
    },
    [pageOrder],
  );

  const toggleKeep = useCallback(
    (id: string, shiftKey: boolean) => {
      const at = pageOrder.get(id);
      if (at === undefined) return;
      const anchorAt = anchorId ? pageOrder.get(anchorId) : undefined;

      if (shiftKey && anchorAt !== undefined) {
        const [start, end] = anchorAt < at ? [anchorAt, at] : [at, anchorAt];
        const next = [...kept];
        const have = new Set(kept.map((page) => page.id));
        for (let i = start; i <= end; i++) {
          const page = pages[i];
          if (!page || have.has(page.id)) continue;
          next.splice(insertAt(next, page.id, pageOrder), 0, page);
          have.add(page.id);
        }
        setKept(next);
        setAnchorId(id);
        announce(t.shared.selectedCount(next.length));
        return;
      }

      const wasKept = kept.some((page) => page.id === id);
      const next = wasKept ? kept.filter((page) => page.id !== id) : insertKept(kept, pages[at]!);
      setKept(next);
      setAnchorId(wasKept ? null : id);
      announce(wasKept ? t.extract.pickerOff(at + 1) : t.extract.pickerOn(at + 1));
    },
    [anchorId, announce, insertKept, kept, pageOrder, pages, t],
  );

  const keepAll = useCallback(() => {
    const have = new Set(kept.map((page) => page.id));
    let next = kept;
    for (const page of pages) {
      if (have.has(page.id)) continue;
      next = insertKept(next, page);
    }
    setKept(next);
    announce(t.tool.allSelected);
  }, [announce, insertKept, kept, pages, t]);

  const clearKept = useCallback(() => {
    setKept([]);
    setAnchorId(null);
    announce(t.shared.nothingSelected);
  }, [announce, t]);

  const removeKept = useCallback(
    (id: string) => {
      if (!kept.some((page) => page.id === id)) return;
      const next = kept.filter((page) => page.id !== id);
      setKept(next);
      if (anchorId === id) setAnchorId(null);
      announce(t.shared.selectedCount(next.length));
    },
    [anchorId, announce, kept, t],
  );

  const moveKept = useCallback(
    (from: number, to: number) => {
      if (from < 0 || to < 0 || to >= kept.length || from === to) return;
      setKept(arrayMove(kept, from, to));
      announce(t.extract.orderMoved(from + 1, to + 1));
    },
    [announce, kept, t],
  );

  // Dragging a thumbnail would reorder a grid the extraction does not own, and
  // rotating or duplicating would change a page the user only chose, so both
  // say where the operation actually lives instead of quietly doing nothing.
  const onGridReorderBlocked = useCallback(() => {
    toast('info', t.extract.orderInTray);
  }, [toast, t]);

  const onCardEditBlocked = useCallback(() => {
    toast('info', t.extract.deselectMeansLeaveOut);
  }, [toast, t]);

  const handleExtract = useCallback(async () => {
    if (kept.length === 0) {
      toast('error', t.extract.zeroSelected);
      announce(t.extract.zeroSelected);
      return;
    }
    if (docsRef.current.some((doc) => doc.encrypted)) {
      toast('error', t.tool.encryptedDownloadToast);
      return;
    }

    setStatus('exporting');
    const name = extractFileName(
      docsRef.current.length === 1 ? (docsRef.current[0]?.name ?? '') : '',
      kept.length,
    );
    try {
      const result = await exportRearrangedPdf(docsRef.current, kept);
      triggerDownload(result.blob, name);
      setOutcome({ name, size: result.blob.size, pages: kept.length });
      setStatus('done');
      announce(t.tool.downloaded(name));
    } catch (error) {
      console.error('Extract failed:', error);
      setStatus('ready');
      toast('error', t.tool.exportFailed);
    }
  }, [announce, kept, toast, t]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!gridVisible || previewIndex !== null || passwordRequest !== null) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

      const mod = event.ctrlKey || event.metaKey;
      if (mod && event.key.toLowerCase() === 'a') {
        event.preventDefault();
        keepAll();
      } else if (event.key === 'Escape' && kept.length > 0) {
        clearKept();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [gridVisible, previewIndex, passwordRequest, kept.length, keepAll, clearKept]);

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
  const fileLabel =
    realDocs.length === 1
      ? (realDocs[0]?.name ?? '')
      : realDocs.length === 0
        ? t.toolbar.noFile
        : t.toolbar.files(realDocs.length);

  return (
    <div ref={rootRef} className="extract-root scroll-mt-28">
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
        <ExtractResultPanel
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

          <ExtractPanel
            fileName={fileLabel}
            pageCount={pages.length}
            keptCount={kept.length}
            pages={pages}
            kept={keptIds}
            anchorId={anchorId}
            zoom={zoom}
            onZoomChange={setZoom}
            onToggle={toggleKeep}
            onSelectAll={keepAll}
            onClear={clearKept}
            onAddFiles={openPicker}
            onStartOver={startOver}
            exporting={status === 'exporting'}
            onExtract={() => {
              void handleExtract();
            }}
          />

          {pages.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-ink/15 bg-canvas/60 p-10 text-center elev-1">
              <FileText className="mx-auto size-10 text-mute" strokeWidth={1.5} />
              <p className="mt-3 text-body-lg font-semibold text-ink">{t.tool.noPagesLeft}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button type="button" className="btn btn-secondary" onClick={openPicker}>
                  {t.tool.addPdfs}
                </button>
                <button type="button" className="btn btn-tertiary" onClick={startOver}>
                  {t.toolbar.startNew}
                </button>
              </div>
            </div>
          ) : (
            <>
              <PageGrid
                pages={pages}
                docs={docs}
                thumbnails={thumbnails}
                zoomWidth={ZOOM_WIDTHS[zoom]}
                selected={keptIds}
                onReorder={onGridReorderBlocked}
                onToggleSelect={toggleKeep}
                onRotate={onCardEditBlocked}
                onDuplicate={onCardEditBlocked}
                onDelete={removeKept}
                onPreview={setPreviewIndex}
              />
              <OrderTray
                kept={kept}
                docs={docs}
                thumbnails={thumbnails}
                zoomWidth={ZOOM_WIDTHS[zoom]}
                onMove={moveKept}
                onRemove={removeKept}
              />
            </>
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

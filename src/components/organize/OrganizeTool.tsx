import { useCallback, useEffect, useRef, useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { FileText, TriangleAlert, Upload } from 'lucide-react';
import type { PageItem, SourceDoc, Status, ToastMessage, Zoom } from './types';
import { uid, ZOOM_WIDTHS } from './types';
import { usePages } from './hooks/usePages';
import { useThumbnails } from './hooks/useThumbnails';
import { isPdfEncrypted, openPdf } from './lib/pdfService';
import { exportRearrangedPdf, triggerDownload } from './lib/exportService';
import DropZone from './DropZone';
import Toolbar from './Toolbar';
import PageGrid from './PageGrid';
import BatchBar from './BatchBar';
import PreviewModal from './PreviewModal';
import PasswordModal from './PasswordModal';
import SuccessPanel from './SuccessPanel';
import Toasts from './Toasts';

interface PasswordRequest {
  needsRetry: boolean;
  fileName: string;
  resolve: (password: string) => void;
  reject: () => void;
}

export default function OrganizeTool() {
  const [status, setStatus] = useState<Status>('empty');
  const [docs, setDocs] = useState<SourceDoc[]>([]);
  const docsRef = useRef<SourceDoc[]>([]);
  const { pages, commit, undo, redo, canUndo, canRedo, hardSet, clearHistory } = usePages();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const selectedRef = useRef<Set<string>>(new Set());
  const lastSelectedRef = useRef<string | null>(null);
  const [zoom, setZoom] = useState<Zoom>('md');
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [liveMessage, setLiveMessage] = useState('');
  const [passwordRequest, setPasswordRequest] = useState<PasswordRequest | null>(null);
  const [loadLabel, setLoadLabel] = useState('');
  const [filesDragging, setFilesDragging] = useState(false);
  const [downloadResult, setDownloadResult] = useState<{ name: string; size: number } | null>(
    null,
  );
  const [reexporting, setReexporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounterRef = useRef(0);
  const thumbnails = useThumbnails();

  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  const announce = useCallback((message: string) => {
    setLiveMessage(message);
  }, []);

  const toast = useCallback((kind: ToastMessage['kind'], text: string) => {
    const id = uid();
    setToasts((prev) => [...prev.slice(-2), { id, kind, text }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 5500);
  }, []);

  const editorActive = status === 'ready' || status === 'exporting' || status === 'done';
  const gridVisible = status === 'ready' || status === 'exporting';
  const showSuccess = status === 'done' && downloadResult !== null;

  const prevStatusRef = useRef<Status>('empty');
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('organize:state', { detail: { active: status !== 'empty' } }),
    );
    if (status === 'ready' && prevStatusRef.current === 'loading') {
      document.getElementById('rearrange')?.scrollIntoView({ behavior: 'smooth' });
    }
    prevStatusRef.current = status;
  }, [status]);

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
        toast(
          'error',
          `${skipped} file${skipped > 1 ? 's were' : ' was'} skipped — only PDF files are supported.`,
        );
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
            ? `Reading ${file.name} (${i + 1} of ${pdfs.length})…`
            : `Reading ${file.name}…`,
        );

        let bytes: Uint8Array;
        try {
          bytes = new Uint8Array(await file.arrayBuffer());
        } catch {
          toast('error', `Couldn't read ${file.name}.`);
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
          toast(
            'error',
            `Couldn't open ${file.name} — it may be damaged or not a valid PDF.`,
          );
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
        commit((prev) => [...prev, ...newItems]);
        setSelected(new Set());
        lastSelectedRef.current = null;
        setDownloadResult(null);
        setStatus('ready');
        announce(
          `${newItems.length} page${newItems.length === 1 ? '' : 's'} ready to rearrange.`,
        );
      } else {
        setStatus(docsRef.current.length > 0 ? 'ready' : 'empty');
      }

      if (cancelledCount > 0) {
        toast(
          'info',
          `${cancelledCount} file${cancelledCount > 1 ? 's were' : ' was'} skipped — the password wasn't entered.`,
        );
      }
      if (encryptedCount > 0) {
        toast(
          'info',
          'This PDF is encrypted. You can rearrange it here, but encrypted files can\'t be rebuilt for download — the download button will explain how to fix that.',
        );
      }
    },
    [commit, promptForPassword, toast, announce],
  );

  const openPicker = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const markDirty = useCallback(() => {
    setStatus((prev) => (prev === 'done' ? 'ready' : prev));
  }, []);

  const toggleSelect = useCallback(
    (id: string, shiftKey: boolean) => {
      const next = new Set(selectedRef.current);
      if (shiftKey && lastSelectedRef.current) {
        const from = pages.findIndex((page) => page.id === lastSelectedRef.current);
        const to = pages.findIndex((page) => page.id === id);
        if (from >= 0 && to >= 0) {
          const [start, end] = from < to ? [from, to] : [to, from];
          for (let i = start; i <= end; i++) next.add(pages[i]!.id);
          selectedRef.current = next;
          setSelected(next);
          return;
        }
      }
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
        lastSelectedRef.current = id;
      }
      selectedRef.current = next;
      setSelected(next);
    },
    [pages],
  );

  const selectAll = useCallback(() => {
    const next = new Set(pages.map((page) => page.id));
    selectedRef.current = next;
    setSelected(next);
    announce('All pages selected.');
  }, [pages, announce]);

  const clearSelection = useCallback(() => {
    selectedRef.current = new Set();
    setSelected(new Set());
  }, []);

  const scopeIds = useCallback((id: string): string[] => {
    return selectedRef.current.has(id) ? [...selectedRef.current] : [id];
  }, []);

  const rotatePages = useCallback(
    (id: string, delta: 90 | 270) => {
      const ids = scopeIds(id);
      const idSet = new Set(ids);
      markDirty();
      commit((prev) =>
        prev.map((page) =>
          idSet.has(page.id)
            ? { ...page, rotation: (((page.rotation + delta) % 360) as 0 | 90 | 180 | 270) }
            : page,
        ),
      );
      announce(`Rotated ${ids.length} page${ids.length === 1 ? '' : 's'}.`);
    },
    [scopeIds, commit, markDirty, announce],
  );

  const duplicatePages = useCallback(
    (id: string) => {
      const ids = new Set(scopeIds(id));
      markDirty();
      commit((prev) => {
        const next: PageItem[] = [];
        for (const page of prev) {
          next.push(page);
          if (ids.has(page.id)) next.push({ ...page, id: uid() });
        }
        return next;
      });
      announce(`Duplicated ${ids.size} page${ids.size === 1 ? '' : 's'}.`);
    },
    [scopeIds, commit, markDirty, announce],
  );

  const deletePages = useCallback(
    (id: string) => {
      const ids = new Set(scopeIds(id));
      markDirty();
      commit((prev) => prev.filter((page) => !ids.has(page.id)));
      setSelected((prev) => {
        const next = new Set(prev);
        ids.forEach((deletedId) => next.delete(deletedId));
        selectedRef.current = next;
        return next;
      });
      announce(`Deleted ${ids.size} page${ids.size === 1 ? '' : 's'}.`);
    },
    [scopeIds, commit, markDirty, announce],
  );

  const deleteSelected = useCallback(() => {
    const ids = selectedRef.current;
    if (ids.size === 0) return;
    markDirty();
    commit((prev) => prev.filter((page) => !ids.has(page.id)));
    selectedRef.current = new Set();
    setSelected(new Set());
    announce(`Deleted ${ids.size} page${ids.size === 1 ? '' : 's'}.`);
  }, [commit, markDirty, announce]);

  const reversePages = useCallback(() => {
    markDirty();
    commit((prev) => [...prev].reverse());
    announce('Page order reversed.');
  }, [commit, markDirty, announce]);

  const reorderPages = useCallback(
    (from: number, to: number) => {
      markDirty();
      commit((prev) => arrayMove(prev, from, to));
    },
    [commit, markDirty],
  );

  const resetOrder = useCallback(() => {
    markDirty();
    const items: PageItem[] = [];
    for (const doc of docsRef.current) {
      for (let pageIndex = 0; pageIndex < doc.pageCount; pageIndex++) {
        items.push({ id: uid(), sourceId: doc.id, sourcePageIndex: pageIndex, rotation: 0 });
      }
    }
    commit(() => items);
    selectedRef.current = new Set();
    setSelected(new Set());
    announce('Restored the original page order.');
  }, [commit, markDirty, announce]);

  const addBlankPage = useCallback(() => {
    const docId = uid();
    const newDoc: SourceDoc = {
      id: docId,
      name: 'Blank page',
      bytes: new Uint8Array(0),
      doc: null,
      pageCount: 1,
      blank: true,
      blankSize: { width: 595.28, height: 841.89 },
    };
    const nextDocs = [...docsRef.current, newDoc];
    docsRef.current = nextDocs;
    setDocs(nextDocs);
    markDirty();
    commit((prev) => [
      ...prev,
      { id: uid(), sourceId: docId, sourcePageIndex: 0, rotation: 0 },
    ]);
    toast('info', 'Blank page added at the end — drag it anywhere.');
  }, [commit, markDirty, toast]);

  const startOver = useCallback(() => {
    docsRef.current = [];
    setDocs([]);
    hardSet([]);
    clearHistory();
    selectedRef.current = new Set();
    setSelected(new Set());
    lastSelectedRef.current = null;
    setPreviewIndex(null);
    setDownloadResult(null);
    setStatus('empty');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [hardSet, clearHistory]);

  const handleDownload = useCallback(async () => {
    if (pages.length === 0) return;
    if (docsRef.current.some((doc) => doc.encrypted)) {
      toast(
        'error',
        'This file is encrypted, so it can\'t be rebuilt locally. Remove its password (open it, choose Print → Save as PDF, or use your PDF app\'s "remove security" option), then add the copy here and download.',
      );
      return;
    }
    setStatus('exporting');
    try {
      const result = await exportRearrangedPdf(docsRef.current, pages);
      triggerDownload(result.blob, result.fileName);
      setDownloadResult({ name: result.fileName, size: result.blob.size });
      setStatus('done');
      selectedRef.current = new Set();
      setSelected(new Set());
      announce(`Downloaded ${result.fileName}.`);
    } catch (error) {
      console.error('Export failed:', error);
      setStatus('ready');
      toast(
        'error',
        'This PDF couldn\'t be rebuilt on your device. It may use encryption or a structure we can\'t copy. Try a PDF without a password, or export it again from your PDF app first.',
      );
    }
  }, [pages, toast, announce]);

  const downloadAgain = useCallback(async () => {
    if (reexporting || pages.length === 0) return;
    if (docsRef.current.some((doc) => doc.encrypted)) return;
    setReexporting(true);
    try {
      const result = await exportRearrangedPdf(docsRef.current, pages);
      triggerDownload(result.blob, result.fileName);
      setDownloadResult({ name: result.fileName, size: result.blob.size });
      announce(`Downloaded ${result.fileName}.`);
    } catch (error) {
      console.error('Export failed:', error);
      toast(
        'error',
        'This PDF couldn\'t be rebuilt on your device. It may use encryption or a structure we can\'t copy. Try a PDF without a password, or export it again from your PDF app first.',
      );
    } finally {
      setReexporting(false);
    }
  }, [pages, reexporting, toast, announce]);

  const backToEditing = useCallback(() => {
    setStatus('ready');
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!gridVisible || previewIndex !== null || passwordRequest !== null) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;

      const mod = event.ctrlKey || event.metaKey;
      const key = event.key.toLowerCase();

      if (mod && key === 'z') {
        event.preventDefault();
        if (event.shiftKey) {
          if (redo()) announce('Redone.');
        } else if (undo()) {
          announce('Undone.');
        }
      } else if (mod && key === 'y') {
        event.preventDefault();
        if (redo()) announce('Redone.');
      } else if (mod && key === 'a') {
        event.preventDefault();
        selectAll();
      } else if ((event.key === 'Delete' || event.key === 'Backspace') && selectedRef.current.size > 0) {
        event.preventDefault();
        deleteSelected();
      } else if (event.key === 'Escape' && selectedRef.current.size > 0) {
        clearSelection();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    gridVisible,
    previewIndex,
    passwordRequest,
    undo,
    redo,
    selectAll,
    deleteSelected,
    clearSelection,
    announce,
  ]);

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

  return (
    <div className="organize-root">
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

      {showSuccess && downloadResult ? (
        <SuccessPanel
          fileName={downloadResult.name}
          fileSize={downloadResult.size}
          pageCount={pages.length}
          downloading={reexporting}
          onDownloadAgain={() => {
            void downloadAgain();
          }}
          onStartNew={startOver}
          onBackToEditing={backToEditing}
        />
      ) : editorActive ? (
        <div>
          {docs.some((doc) => doc.encrypted) && (
            <div
              role="alert"
              className="mb-4 flex items-start gap-3 rounded-xl border border-accent-orange/60 bg-accent-orange/15 p-4"
            >
              <TriangleAlert className="mt-0.5 size-5 shrink-0 text-ink" />
              <div className="min-w-0">
                <p className="text-body-md-strong text-ink">
                  This PDF is encrypted, so it can&apos;t be downloaded.
                </p>
                <p className="mt-1 text-body-sm text-body">
                  You can rearrange, rotate and preview the pages, but an encrypted file
                  can&apos;t be rebuilt on your device. Remove its password first (open it and
                  use <span className="font-semibold">Print → Save as PDF</span>, or your PDF
                  app&apos;s &quot;remove security&quot; option), then add the unlocked copy here.
                </p>
              </div>
            </div>
          )}

          <Toolbar
            docs={docs}
            pageCount={pages.length}
            canUndo={canUndo}
            canRedo={canRedo}
            onUndo={undo}
            onRedo={redo}
            onReverse={reversePages}
            zoom={zoom}
            onZoomChange={setZoom}
            onAddFiles={openPicker}
            onAddBlank={addBlankPage}
            onReset={resetOrder}
            onStartOver={startOver}
            onDownload={handleDownload}
            status={status}
          />

          {pages.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-ink/15 bg-canvas/60 p-10 text-center">
              <FileText className="mx-auto size-10 text-mute" strokeWidth={1.5} />
              <p className="mt-3 text-body-lg font-semibold text-ink">No pages left</p>
              <p className="mt-1 text-body-md text-body">
                Undo the deletion, add more PDFs, or start new.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  className="btn btn-tertiary"
                  onClick={undo}
                  disabled={!canUndo}
                >
                  Undo
                </button>
                <button type="button" className="btn btn-secondary" onClick={openPicker}>
                  Add PDFs
                </button>
              </div>
            </div>
          ) : (
            <PageGrid
              pages={pages}
              docs={docs}
              thumbnails={thumbnails}
              zoomWidth={ZOOM_WIDTHS[zoom]}
              selected={selected}
              onReorder={reorderPages}
              onToggleSelect={toggleSelect}
              onRotate={(id) => rotatePages(id, 90)}
              onDuplicate={duplicatePages}
              onDelete={deletePages}
              onPreview={setPreviewIndex}
            />
          )}
        </div>
      ) : null}

      {selected.size > 0 && gridVisible && (
        <BatchBar
          count={selected.size}
          onRotate={() => rotatePages([...selected][0]!, 90)}
          onDuplicate={() => duplicatePages([...selected][0]!)}
          onDelete={() => deleteSelected()}
          onSelectAll={selectAll}
          onClear={clearSelection}
        />
      )}

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
        <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-ink/50 p-8">
          <div className="rounded-xl border-2 border-dashed border-primary bg-ink/90 px-10 py-8 text-center">
            <Upload className="mx-auto size-10 text-primary" />
            <p className="mt-3 text-body-lg font-semibold text-canvas">
              Drop PDFs to add their pages
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

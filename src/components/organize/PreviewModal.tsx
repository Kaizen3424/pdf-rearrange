import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, LoaderCircle, X } from 'lucide-react';
import type { PageItem, SourceDoc } from './types';
import { A4_RATIO, blankPageRatio } from './types';
import type { ThumbnailsApi } from './hooks/useThumbnails';
import { renderBlankThumbnail, renderThumbnail } from './lib/pdfService';
import { useToolI18n } from './i18n';

interface PreviewModalProps {
  pages: PageItem[];
  docs: SourceDoc[];
  index: number;
  thumbnails: ThumbnailsApi;
  onClose: () => void;
  onNavigate: (delta: number) => void;
}

const PREVIEW_WIDTH = 1000;

export default function PreviewModal({
  pages,
  docs,
  index,
  thumbnails,
  onClose,
  onNavigate,
}: PreviewModalProps) {
  const { t } = useToolI18n();
  const dialogRef = useRef<HTMLDivElement>(null);

  const item = pages[index];
  const source = item ? docs.find((doc) => doc.id === item.sourceId) : undefined;
  const key = item ? `preview:${item.sourceId}:${item.sourcePageIndex}:${item.rotation}` : '';
  const url = item ? thumbnails.get(key) : undefined;

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    return () => previouslyFocused?.focus();
  }, []);

  useEffect(() => {
    if (!item || !source) return;
    thumbnails.request(key, async () => {
      if (source.blank) {
        return renderBlankThumbnail(PREVIEW_WIDTH, blankPageRatio(item.rotation));
      }
      if (!source.doc) throw new Error('Document is not open');
      return renderThumbnail(source.doc, item.sourcePageIndex, PREVIEW_WIDTH, item.rotation);
    });
  }, [item, source, key, thumbnails]);

  if (!item || !source) return null;

  const ratio = thumbnails.getRatio(key) ?? (source.blank ? blankPageRatio(item.rotation) : A4_RATIO);

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-50 flex flex-col bg-ink/85 outline-none backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={t.preview.dialogLabel(index + 1, pages.length)}
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          onClose();
        } else if (event.key === 'ArrowLeft' && index > 0) {
          event.preventDefault();
          onNavigate(-1);
        } else if (event.key === 'ArrowRight' && index < pages.length - 1) {
          event.preventDefault();
          onNavigate(1);
        } else if (event.key === 'Tab') {
          const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );
          if (!focusables || focusables.length === 0) return;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          const active = document.activeElement;
          if (event.shiftKey && (active === first || active === dialogRef.current)) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 text-canvas sm:px-6">
        <p className="min-w-0 truncate text-body-sm-strong">
          {source.blank
            ? t.preview.headerBlank(index + 1, pages.length)
            : t.preview.headerFile(index + 1, pages.length, source.name)}
        </p>
        <button
          type="button"
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-canvas transition-colors hover:bg-canvas-soft/20"
          onClick={onClose}
          aria-label={t.preview.close}
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center gap-2 px-4 pb-6 sm:gap-4 sm:px-6">
        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center rounded-full text-canvas transition-colors hover:bg-canvas-soft/20 disabled:opacity-25"
          onClick={() => onNavigate(-1)}
          disabled={index === 0}
          aria-label={t.preview.prev}
        >
          <ChevronLeft className="size-6" />
        </button>

        {url ? (
          <img
            src={url}
            className="max-h-[calc(100vh-9rem)] max-w-full rounded-lg bg-canvas object-contain shadow-2xl"
            style={{ aspectRatio: `${ratio}` }}
            alt={t.preview.alt(index + 1)}
            draggable={false}
          />
        ) : (
          <div className="flex size-24 items-center justify-center">
            <LoaderCircle className="size-8 animate-spin text-canvas-soft" />
          </div>
        )}

        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center rounded-full text-canvas transition-colors hover:bg-canvas-soft/20 disabled:opacity-25"
          onClick={() => onNavigate(1)}
          disabled={index === pages.length - 1}
          aria-label={t.preview.next}
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
}

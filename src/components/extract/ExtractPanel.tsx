import {
  Check,
  Download,
  FilePlus,
  FileText,
  Info,
  LoaderCircle,
  Plus,
  ShieldCheck,
  X,
} from 'lucide-react';
import type { PageItem, Zoom } from '../organize/types';
import { useToolI18n } from '../organize/i18n';
import PagePicker from './PagePicker';

interface ExtractPanelProps {
  fileName: string;
  pageCount: number;
  keptCount: number;
  pages: PageItem[];
  kept: Set<string>;
  anchorId: string | null;
  zoom: Zoom;
  onZoomChange: (zoom: Zoom) => void;
  onToggle: (id: string, shiftKey: boolean) => void;
  onSelectAll: () => void;
  onClear: () => void;
  onAddFiles: () => void;
  onStartOver: () => void;
  exporting: boolean;
  onExtract: () => void;
}

const zoomOptions: Zoom[] = ['sm', 'md', 'lg'];

function ZoomToggle({ zoom, onZoomChange }: { zoom: Zoom; onZoomChange: (zoom: Zoom) => void }) {
  const { t } = useToolI18n();
  return (
    <div
      className="flex items-center rounded-lg bg-canvas-soft p-0.5"
      role="group"
      aria-label={t.toolbar.thumbnailSize}
    >
      {zoomOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onZoomChange(option)}
          aria-pressed={zoom === option}
          aria-label={
            option === 'sm'
              ? t.toolbar.zoomSm
              : option === 'md'
                ? t.toolbar.zoomMd
                : t.toolbar.zoomLg
          }
          className={[
            'tap-target min-w-9 rounded-md px-2.5 py-1.5 text-caption font-semibold uppercase transition-[background-color,color,box-shadow,transform] duration-150 ease-standard active:scale-95',
            zoom === option ? 'bg-canvas text-ink elev-1' : 'text-mute hover:text-ink',
          ].join(' ')}
        >
          {option === 'sm' ? 'S' : option === 'md' ? 'M' : 'L'}
        </button>
      ))}
    </div>
  );
}

/**
 * The extract control surface: which pages are kept, how many, and the one
 * button that builds the new document.
 *
 * The picker is the accessible twin of the thumbnail grid, so the count, the
 * select-all and the download never depend on a pointer or on a hover state.
 */
export default function ExtractPanel({
  fileName,
  pageCount,
  keptCount,
  pages,
  kept,
  anchorId,
  zoom,
  onZoomChange,
  onToggle,
  onSelectAll,
  onClear,
  onAddFiles,
  onStartOver,
  exporting,
  onExtract,
}: ExtractPanelProps) {
  const { t } = useToolI18n();

  return (
    <div className="mb-5 rounded-xl border border-hairline bg-canvas p-3 elev-1 sm:p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-canvas-soft">
          <FileText className="size-4 text-ink" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-body-sm-strong">{fileName}</p>
          <p className="text-caption text-mute">{t.toolbar.pages(pageCount)}</p>
        </div>
        <ZoomToggle zoom={zoom} onZoomChange={onZoomChange} />
        <button
          type="button"
          className="btn btn-secondary tap-target px-4 py-2 text-body-sm"
          onClick={onAddFiles}
        >
          <FilePlus className="size-4" />
          <span className="hidden sm:inline">{t.toolbar.addPdfs}</span>
        </button>
        <button
          type="button"
          className="btn btn-secondary tap-target px-4 py-2 text-body-sm"
          onClick={onStartOver}
        >
          <Plus className="size-4" />
          <span className="hidden sm:inline">{t.toolbar.startNew}</span>
        </button>
      </div>

      <div className="mt-4">
        <p className="text-caption font-semibold uppercase tracking-wide text-mute">
          {t.extract.keepLabel}
        </p>
        <p className="mt-1 text-body-sm text-body">{t.extract.keepHelp}</p>
        <PagePicker pages={pages} kept={kept} anchorId={anchorId} onToggle={onToggle} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="btn btn-secondary tap-target px-4 py-2 text-body-sm"
          onClick={onSelectAll}
          disabled={keptCount === pageCount}
        >
          <Check className="size-4" />
          {t.shared.selectAllPages}
        </button>
        <button
          type="button"
          className="btn btn-secondary tap-target px-4 py-2 text-body-sm"
          onClick={onClear}
          disabled={keptCount === 0}
        >
          <X className="size-4" />
          {t.shared.clearSelection}
        </button>
        <p aria-live="polite" className="text-body-sm font-semibold text-ink">
          {keptCount > 0 ? t.shared.selectedCount(keptCount) : t.shared.nothingSelected}
        </p>
      </div>

      <div className="mt-4 rounded-lg bg-canvas-soft p-3">
        <p className="flex items-start gap-1.5 text-body-sm text-body">
          <Info className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden="true" />
          <span>{t.shared.byteForByte}</span>
        </p>
        <p className="mt-1.5 flex items-start gap-1.5 text-body-sm text-mute">
          <ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{t.extract.deselectMeansLeaveOut}</span>
        </p>
        <p className="mt-1.5 flex items-start gap-1.5 text-body-sm text-mute">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{t.shared.memoryNote}</span>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="btn btn-primary px-6 py-2.5"
          onClick={onExtract}
          disabled={exporting || pageCount === 0}
        >
          {exporting ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <Download className="size-4" />
          )}
          {exporting ? t.toolbar.building : t.extract.action}
        </button>
        {keptCount === 0 && (
          <p className="text-body-sm text-mute">{t.extract.zeroSelected}</p>
        )}
      </div>
    </div>
  );
}

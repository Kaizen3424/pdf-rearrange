import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownUp,
  Download,
  FilePlus,
  FileText,
  LoaderCircle,
  Plus,
  Redo2,
  Undo2,
} from 'lucide-react';
import type { SourceDoc, Status, Zoom } from './types';
import { SOURCE_COLORS } from './types';
import { useToolI18n } from './i18n';

interface ToolbarProps {
  docs: SourceDoc[];
  pageCount: number;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onReverse: () => void;
  zoom: Zoom;
  onZoomChange: (zoom: Zoom) => void;
  onAddFiles: () => void;
  onAddBlank: () => void;
  onReset: () => void;
  onStartOver: () => void;
  onDownload: () => void;
  status: Status;
}

const zoomOptions: Zoom[] = ['sm', 'md', 'lg'];

function ToolButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className="tap-target flex size-9 items-center justify-center rounded-md text-ink transition-[background-color,transform] duration-150 ease-standard hover:bg-canvas-soft active:scale-95 disabled:opacity-35 disabled:hover:bg-transparent"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default function Toolbar({
  docs,
  pageCount,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onReverse,
  zoom,
  onZoomChange,
  onAddFiles,
  onAddBlank,
  onReset,
  onStartOver,
  onDownload,
  status,
}: ToolbarProps) {
  const { t } = useToolI18n();
  const [confirmReset, setConfirmReset] = useState(false);
  const confirmTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (confirmTimer.current !== null) window.clearTimeout(confirmTimer.current);
    };
  }, []);

  const handleStartOver = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      confirmTimer.current = window.setTimeout(() => setConfirmReset(false), 2600);
      return;
    }
    if (confirmTimer.current !== null) window.clearTimeout(confirmTimer.current);
    setConfirmReset(false);
    onStartOver();
  };

  const exporting = status === 'exporting';

  return (
    <div className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-2 rounded-xl border border-hairline bg-canvas p-2.5 elev-1 sm:gap-x-3 sm:p-3">
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-md bg-canvas-soft">
          <FileText className="size-4 text-ink" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-body-sm-strong">
            {docs.length === 1
              ? docs[0]!.name
              : docs.length === 0
                ? t.toolbar.noFile
                : t.toolbar.files(docs.length)}
          </p>
          <p className="text-caption text-mute">{t.toolbar.pages(pageCount)}</p>
        </div>
      </div>

      {docs.length > 1 && (
        <div className="hidden items-center gap-1.5 lg:flex" aria-hidden="true">
          {docs.slice(0, 3).map((doc, index) => (
            <span
              key={doc.id}
              title={doc.name}
              className="size-2.5 rounded-full"
              style={{ backgroundColor: SOURCE_COLORS[index % SOURCE_COLORS.length] }}
            />
          ))}
        </div>
      )}

      <div className="mx-1 hidden h-6 w-px bg-hairline sm:block" />

      <div className="flex items-center gap-0.5">
        <ToolButton label={t.toolbar.undo} onClick={onUndo} disabled={!canUndo}>
          <Undo2 className="size-4" />
        </ToolButton>
        <ToolButton label={t.toolbar.redo} onClick={onRedo} disabled={!canRedo}>
          <Redo2 className="size-4" />
        </ToolButton>
        <ToolButton label={t.toolbar.reverse} onClick={onReverse} disabled={pageCount < 2}>
          <ArrowDownUp className="size-4" />
        </ToolButton>
        <button
          type="button"
          title={t.toolbar.resetLabel}
          aria-label={t.toolbar.resetLabel}
          onClick={onReset}
          disabled={pageCount === 0}
          className="tap-target h-9 rounded-md px-2.5 text-body-sm font-semibold text-ink transition-[background-color,transform] duration-150 ease-standard hover:bg-canvas-soft active:scale-95 disabled:opacity-35 disabled:hover:bg-transparent"
        >
          {t.toolbar.reset}
        </button>
      </div>

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

      <div className="mx-1 hidden h-6 w-px bg-hairline sm:block" />

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="btn btn-secondary tap-target px-4 py-2 text-body-sm"
          onClick={onAddFiles}
        >
          <FilePlus className="size-4" />
          <span className="hidden sm:inline">{t.toolbar.addPdfs}</span>
        </button>
        <ToolButton label={t.toolbar.addBlank} onClick={onAddBlank}>
          <Plus className="size-4" />
        </ToolButton>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          className="btn btn-secondary tap-target px-4 py-2 text-body-sm"
          onClick={handleStartOver}
        >
          {confirmReset ? t.toolbar.confirm : t.toolbar.startNew}
        </button>
        <button
          type="button"
          className="btn btn-primary px-5 py-2.5"
          onClick={onDownload}
          disabled={pageCount === 0 || exporting}
        >
          {exporting ? <LoaderCircle className="size-4 animate-spin" /> : <Download className="size-4" />}
          {exporting ? t.toolbar.building : t.toolbar.download}
        </button>
      </div>
    </div>
  );
}

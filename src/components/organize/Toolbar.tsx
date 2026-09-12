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
      className="flex size-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-canvas-soft disabled:opacity-35 disabled:hover:bg-transparent"
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
    <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-ink/10 bg-canvas p-3 shadow-sm">
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-md bg-canvas-soft">
          <FileText className="size-4 text-ink" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-body-sm-strong">
            {docs.length === 1
              ? docs[0]!.name
              : docs.length === 0
                ? 'No file'
                : `${docs.length} files`}
          </p>
          <p className="text-caption text-mute">
            {pageCount} page{pageCount === 1 ? '' : 's'}
          </p>
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

      <div className="mx-1 hidden h-6 w-px bg-ink/10 sm:block" />

      <div className="flex items-center gap-0.5">
        <ToolButton label="Undo (Ctrl+Z)" onClick={onUndo} disabled={!canUndo}>
          <Undo2 className="size-4" />
        </ToolButton>
        <ToolButton label="Redo (Ctrl+Shift+Z)" onClick={onRedo} disabled={!canRedo}>
          <Redo2 className="size-4" />
        </ToolButton>
        <ToolButton label="Reverse page order" onClick={onReverse} disabled={pageCount < 2}>
          <ArrowDownUp className="size-4" />
        </ToolButton>
        <button
          type="button"
          title="Reset to original order"
          aria-label="Reset to original order"
          onClick={onReset}
          disabled={pageCount === 0}
          className="h-9 rounded-md px-2.5 text-body-sm font-semibold text-ink transition-colors hover:bg-canvas-soft disabled:opacity-35 disabled:hover:bg-transparent"
        >
          Reset
        </button>
      </div>

      <div className="flex items-center rounded-md bg-canvas-soft p-0.5" role="group" aria-label="Thumbnail size">
        {zoomOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onZoomChange(option)}
            aria-pressed={zoom === option}
            aria-label={
              option === 'sm'
                ? 'Small thumbnails'
                : option === 'md'
                  ? 'Medium thumbnails'
                  : 'Large thumbnails'
            }
            className={[
              'rounded-sm px-2.5 py-1 text-caption font-semibold uppercase transition-colors',
              zoom === option ? 'bg-canvas text-ink shadow-sm' : 'text-mute hover:text-ink',
            ].join(' ')}
          >
            {option === 'sm' ? 'S' : option === 'md' ? 'M' : 'L'}
          </button>
        ))}
      </div>

      <div className="mx-1 hidden h-6 w-px bg-ink/10 sm:block" />

      <div className="flex items-center gap-2">
        <button type="button" className="btn btn-secondary px-4 py-2 text-body-sm" onClick={onAddFiles}>
          <FilePlus className="size-4" />
          <span className="hidden sm:inline">Add PDFs</span>
        </button>
        <ToolButton label="Add a blank page" onClick={onAddBlank}>
          <Plus className="size-4" />
        </ToolButton>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          className="btn btn-secondary px-4 py-2 text-body-sm"
          onClick={handleStartOver}
        >
          {confirmReset ? 'Confirm?' : 'Start new'}
        </button>
        <button
          type="button"
          className="btn btn-primary px-5 py-2.5"
          onClick={onDownload}
          disabled={pageCount === 0 || exporting}
        >
          {exporting ? <LoaderCircle className="size-4 animate-spin" /> : <Download className="size-4" />}
          {exporting ? 'Building…' : 'Download PDF'}
        </button>
      </div>
    </div>
  );
}

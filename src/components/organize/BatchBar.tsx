import { Check, Copy, RotateCw, Trash2, X } from 'lucide-react';

interface BatchBarProps {
  count: number;
  onRotate: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onSelectAll: () => void;
  onClear: () => void;
}

export default function BatchBar({
  count,
  onRotate,
  onDuplicate,
  onDelete,
  onSelectAll,
  onClear,
}: BatchBarProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-fit max-w-[calc(100vw-2rem)] flex-wrap items-center justify-center gap-x-1 gap-y-2 rounded-xl bg-ink px-3 py-2 text-canvas shadow-lg"
      role="toolbar"
      aria-label="Actions for selected pages"
    >
      <span className="px-2 text-body-sm-strong">
        {count} page{count === 1 ? '' : 's'} selected
      </span>
      <span className="h-5 w-px bg-canvas-soft/25" aria-hidden="true" />
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-colors hover:bg-canvas-soft/15"
        onClick={onRotate}
      >
        <RotateCw className="size-4" />
        Rotate
      </button>
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-colors hover:bg-canvas-soft/15"
        onClick={onDuplicate}
      >
        <Copy className="size-4" />
        Duplicate
      </button>
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-colors hover:bg-negative/25"
        onClick={onDelete}
      >
        <Trash2 className="size-4" />
        Delete
      </button>
      <span className="h-5 w-px bg-canvas-soft/25" aria-hidden="true" />
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-colors hover:bg-canvas-soft/15"
        onClick={onSelectAll}
      >
        <Check className="size-4" />
        All
      </button>
      <button
        type="button"
        className="flex items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-colors hover:bg-canvas-soft/15"
        onClick={onClear}
      >
        <X className="size-4" />
        Clear
      </button>
    </div>
  );
}

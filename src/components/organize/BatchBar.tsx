import { Check, Copy, RotateCw, Trash2, X } from 'lucide-react';
import { useToolI18n } from './i18n';

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
  const { t } = useToolI18n();

  return (
    <div
      className="animate-toast-in fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 mx-auto flex w-fit max-w-[calc(100vw-2rem)] flex-wrap items-center justify-center gap-x-1 gap-y-1.5 rounded-xl border border-on-solid/15 bg-solid px-2.5 py-2 text-on-solid elev-3"
      role="toolbar"
      aria-label={t.batch.label}
    >
      <span className="px-2 text-body-sm-strong">{t.batch.selected(count)}</span>
      <span className="h-5 w-px bg-on-solid/25" aria-hidden="true" />
      <button
        type="button"
        className="tap-target flex min-h-10 items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-[background-color,transform] duration-150 ease-standard hover:bg-on-solid/15 active:scale-95"
        onClick={onRotate}
      >
        <RotateCw className="size-4" />
        {t.batch.rotate}
      </button>
      <button
        type="button"
        className="tap-target flex min-h-10 items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-[background-color,transform] duration-150 ease-standard hover:bg-on-solid/15 active:scale-95"
        onClick={onDuplicate}
      >
        <Copy className="size-4" />
        {t.batch.duplicate}
      </button>
      <button
        type="button"
        className="tap-target flex min-h-10 items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-[background-color,transform] duration-150 ease-standard hover:bg-negative/25 active:scale-95"
        onClick={onDelete}
      >
        <Trash2 className="size-4" />
        {t.batch.delete}
      </button>
      <span className="h-5 w-px bg-on-solid/25" aria-hidden="true" />
      <button
        type="button"
        className="tap-target flex min-h-10 items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-[background-color,transform] duration-150 ease-standard hover:bg-on-solid/15 active:scale-95"
        onClick={onSelectAll}
      >
        <Check className="size-4" />
        {t.batch.all}
      </button>
      <button
        type="button"
        className="tap-target flex min-h-10 items-center gap-1.5 rounded-md px-2.5 py-2 text-body-sm transition-[background-color,transform] duration-150 ease-standard hover:bg-on-solid/15 active:scale-95"
        onClick={onClear}
      >
        <X className="size-4" />
        {t.batch.clear}
      </button>
    </div>
  );
}

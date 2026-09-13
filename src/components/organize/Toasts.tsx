import { CircleAlert, CircleCheck, Info, X } from 'lucide-react';
import type { ToastMessage } from './types';
import { useToolI18n } from './i18n';

interface ToastsProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
  /** Lift above the batch bar when a selection is present. */
  raised?: boolean;
}

const icons = {
  success: <CircleCheck className="size-5 shrink-0 text-positive" />,
  error: <CircleAlert className="size-5 shrink-0 text-negative" />,
  info: <Info className="size-5 shrink-0 text-ink" />,
};

export default function Toasts({ toasts, onDismiss, raised = false }: ToastsProps) {
  const { t } = useToolI18n();
  if (toasts.length === 0) return null;

  return (
    <div
      className={[
        'pointer-events-none fixed right-4 z-50 flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2 transition-[bottom] duration-300 ease-standard',
        raised ? 'bottom-24' : 'bottom-[max(1rem,env(safe-area-inset-bottom))]',
      ].join(' ')}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="animate-toast-in pointer-events-auto flex items-start gap-3 rounded-xl border border-hairline bg-canvas p-4 elev-3"
          role={toast.kind === 'error' ? 'alert' : 'status'}
        >
          {icons[toast.kind]}
          <p className="flex-1 text-body-sm text-ink">{toast.text}</p>
          <button
            type="button"
            className="tap-target -m-1.5 rounded-md p-1.5 text-mute transition-colors duration-150 hover:text-ink"
            onClick={() => onDismiss(toast.id)}
            aria-label={t.toasts.dismiss}
          >
            <X className="size-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

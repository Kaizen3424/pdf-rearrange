import { CircleAlert, CircleCheck, Info, X } from 'lucide-react';
import type { ToastMessage } from './types';

interface ToastsProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

const icons = {
  success: <CircleCheck className="size-5 shrink-0 text-positive" />,
  error: <CircleAlert className="size-5 shrink-0 text-negative" />,
  info: <Info className="size-5 shrink-0 text-ink" />,
};

export default function Toasts({ toasts, onDismiss }: ToastsProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 rounded-lg border border-ink/10 bg-canvas p-4 shadow-lg"
          role={toast.kind === 'error' ? 'alert' : 'status'}
        >
          {icons[toast.kind]}
          <p className="flex-1 text-body-sm text-ink">{toast.text}</p>
          <button
            type="button"
            className="rounded-sm text-mute transition-colors hover:text-ink"
            onClick={() => onDismiss(toast.id)}
            aria-label="Dismiss notification"
          >
            <X className="size-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

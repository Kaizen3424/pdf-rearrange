import { useEffect, useRef, useState } from 'react';
import { KeyRound, TriangleAlert } from 'lucide-react';
import { useToolI18n } from './i18n';

interface PasswordModalProps {
  needsRetry: boolean;
  fileName?: string;
  onSubmit: (password: string) => void;
  onCancel: () => void;
}

export default function PasswordModal({
  needsRetry,
  fileName,
  onSubmit,
  onCancel,
}: PasswordModalProps) {
  const { t } = useToolI18n();
  const [password, setPassword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      ref={dialogRef}
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-scrim/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={t.password.dialogLabel}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          onCancel();
          return;
        }
        if (event.key !== 'Tab') return;
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [href]',
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0]!;
        const last = focusables[focusables.length - 1]!;
        const active = document.activeElement;
        if (event.shiftKey && (active === first || active === dialogRef.current)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }}
    >
      <div className="animate-scale-in w-full max-w-sm origin-center rounded-xl border border-hairline bg-canvas p-6 elev-3">
        <span className="flex size-11 items-center justify-center rounded-md bg-canvas-soft">
          <KeyRound className="size-5 text-ink" />
        </span>
        <h2 className="mt-4 text-display-xs font-semibold">{t.password.heading}</h2>
        <p className="mt-2 text-body-md text-body">
          {fileName ? <span className="font-semibold">{fileName}</span> : t.password.thisPdf}{' '}
          {t.password.bodySuffix}
        </p>
        {needsRetry && (
          <p
            id="password-error"
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-body-sm text-negative-deep"
          >
            <TriangleAlert className="size-4" />
            {t.password.retry}
          </p>
        )}
        <form
          className="mt-4"
          onSubmit={(event) => {
            event.preventDefault();
            if (password) onSubmit(password);
          }}
        >
          <input
            ref={inputRef}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-md border border-ink bg-canvas px-4 py-3 text-body-md text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            placeholder={t.password.placeholder}
            aria-label={t.password.placeholder}
            aria-invalid={needsRetry}
            aria-describedby={needsRetry ? 'password-error' : undefined}
            autoComplete="off"
          />
          <div className="mt-4 flex justify-end gap-2">
            <button type="button" className="btn btn-secondary px-4 py-2 text-body-sm" onClick={onCancel}>
              {t.password.cancel}
            </button>
            <button type="submit" className="btn btn-primary px-4 py-2 text-body-sm" disabled={!password}>
              {t.password.unlock}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

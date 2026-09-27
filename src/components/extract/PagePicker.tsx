import { useId } from 'react';
import { Check } from 'lucide-react';
import type { PageItem } from '../organize/types';
import { useToolI18n } from '../organize/i18n';

interface PagePickerProps {
  pages: PageItem[];
  kept: Set<string>;
  /** The page a shift-click range grows from, marked so the user can see it. */
  anchorId: string | null;
  onToggle: (id: string, shiftKey: boolean) => void;
}

/**
 * Every page as a numbered tap target.
 *
 * The thumbnails are the fast path on a big screen. This is the surface that
 * works with a keyboard, a screen reader or a thumb, and it stays usable on a
 * thousand-page document because it is text, not a thousand drag targets.
 */
export default function PagePicker({ pages, kept, anchorId, onToggle }: PagePickerProps) {
  const { t } = useToolI18n();
  const labelId = useId();
  const hintId = useId();

  return (
    <div
      className="mt-3"
      role="group"
      aria-labelledby={labelId}
      aria-describedby={hintId}
    >
      <p id={labelId} className="text-caption font-semibold uppercase tracking-wide text-mute">
        {t.extract.pickerLabel}
      </p>
      <p id={hintId} className="mt-1 text-body-sm text-mute">
        {t.extract.pickerHint}
      </p>
      <div className="mt-2 grid max-h-60 grid-cols-[repeat(auto-fill,minmax(2.75rem,1fr))] gap-1.5 overflow-y-auto pe-1">
        {pages.map((page, index) => {
          const on = kept.has(page.id);
          return (
            <button
              key={page.id}
              type="button"
              aria-pressed={on}
              aria-current={anchorId === page.id ? 'true' : undefined}
              aria-label={t.extract.pickerPage(index + 1, pages.length)}
              onClick={(event) => onToggle(page.id, event.shiftKey)}
              className={[
                'focus-ring tap-target flex min-h-11 items-center justify-center gap-0.5 rounded-lg px-2 py-1.5 text-body-sm font-semibold tabular-nums transition-[background-color,color,box-shadow,transform] duration-150 ease-standard active:scale-95',
                on ? 'bg-primary text-on-primary elev-1' : 'bg-canvas-soft text-body hover:text-ink',
                anchorId === page.id ? 'ring-2 ring-ink ring-offset-1 ring-offset-canvas' : '',
              ].join(' ')}
            >
              {on && <Check className="size-3 shrink-0" strokeWidth={3.5} aria-hidden="true" />}
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import { useRef, useState } from 'react';
import { Star } from 'lucide-react';

const STORAGE_KEY = 'rearrangepdf:rating';
const MAX_RATING = 5;

function loadStoredRating(): number | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const value = raw === null ? NaN : Number.parseInt(raw, 10);
    return Number.isInteger(value) && value >= 1 && value <= MAX_RATING ? value : null;
  } catch {
    return null;
  }
}

interface StarRatingProps {
  label?: string;
}

export default function StarRating({ label = 'Rate this tool out of 5 stars' }: StarRatingProps) {
  const [rating, setRating] = useState<number | null>(() => loadStoredRating());
  const [preview, setPreview] = useState(0);
  const [announced, setAnnounced] = useState('');
  const starRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const commit = (value: number) => {
    setRating(value);
    setAnnounced(`You rated ${value} out of 5 stars. Thanks for your feedback!`);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      /* storage unavailable — rating still applies to this visit */
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const current = rating ?? 0;
    let next: number | null = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      next = Math.min(MAX_RATING, current + 1 || 1);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      next = Math.max(1, current - 1);
    } else if (event.key === 'Home') {
      next = 1;
    } else if (event.key === 'End') {
      next = MAX_RATING;
    }
    if (next === null) return;
    event.preventDefault();
    commit(next);
    starRefs.current[next - 1]?.focus();
  };

  const filled = preview || rating || 0;

  return (
    <div>
      <div
        role="radiogroup"
        aria-label={label}
        className="flex items-center justify-center gap-1"
        onKeyDown={onKeyDown}
      >
        {Array.from({ length: MAX_RATING }, (_, index) => {
          const value = index + 1;
          return (
            <button
              key={value}
              ref={(element) => {
                starRefs.current[index] = element;
              }}
              type="button"
              role="radio"
              aria-checked={rating === value}
              aria-label={`${value} star${value > 1 ? 's' : ''}`}
              tabIndex={rating === value || (rating === null && value === 1) ? 0 : -1}
              className="focus-ring rounded-md p-1 text-gold transition-transform duration-150 hover:scale-110"
              onMouseEnter={() => setPreview(value)}
              onMouseLeave={() => setPreview(0)}
              onFocus={() => setPreview(value)}
              onBlur={() => setPreview(0)}
              onClick={() => commit(value)}
            >
              <Star
                className="size-7"
                fill={value <= filled ? 'currentColor' : 'none'}
                strokeWidth={1.5}
              />
            </button>
          );
        })}
      </div>
      <p aria-live="polite" className="sr-only">
        {announced}
      </p>
      <p className="mt-3 text-body-sm-strong text-ink">
        {rating ? 'Thanks for your feedback!' : 'How did we do?'}
      </p>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { Check, FileText, Plus, ScanLine } from 'lucide-react';
import { formatBytes } from '../organize/types';
import { useToolI18n } from '../organize/i18n';
import type { ExtractOutcome } from './ExtractTool';

interface ExtractResultPanelProps {
  outcome: ExtractOutcome;
  onStartNew: () => void;
  onBackToEditing: () => void;
}

/**
 * What the extraction produced.
 *
 * The page count is stated here because it is the only number that matters
 * about an extracted document, and because the copy claims the original was
 * left alone — which the panel repeats rather than leaving as a promise.
 */
export default function ExtractResultPanel({
  outcome,
  onStartNew,
  onBackToEditing,
}: ExtractResultPanelProps) {
  const { locale, t } = useToolI18n();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div ref={panelRef} className="scroll-mt-28">
      <div className="mx-auto max-w-2xl rounded-xl border border-hairline bg-canvas p-8 elev-2 sm:p-12">
        <span className="animate-pop-in mx-auto flex size-18 items-center justify-center rounded-full bg-primary elev-2">
          <Check className="size-9 text-on-primary" strokeWidth={3} />
        </span>

        <h2 className="animate-rise-in mt-6 text-display-xs font-semibold [animation-delay:80ms]">
          {t.extract.resultsHeading(outcome.pages)}
        </h2>
        <p className="animate-rise-in mx-auto mt-2 max-w-lg text-body-md text-body [animation-delay:140ms]">
          {t.extract.resultsBody}
        </p>

        <div className="animate-rise-in mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-canvas-soft px-4 py-3 [animation-delay:200ms]">
          <FileText className="size-5 shrink-0 text-ink" aria-hidden="true" />
          <span className="min-w-0 flex-1 truncate font-semibold text-ink" title={outcome.name}>
            {outcome.name}
          </span>
          <span className="shrink-0 text-caption text-mute">
            {t.toolbar.pages(outcome.pages)} · {formatBytes(outcome.size, locale)}
          </span>
        </div>

        <p className="mt-4 text-body-sm text-mute">{t.extract.deselectMeansLeaveOut}</p>
        <p className="mt-1.5 text-body-sm text-mute">{t.shared.memoryNote}</p>

        <div className="animate-rise-in mt-8 flex flex-col justify-center gap-3 sm:flex-row [animation-delay:260ms]">
          <button type="button" className="btn btn-secondary px-6" onClick={onBackToEditing}>
            <ScanLine className="size-4" />
            {t.success.backToEditing}
          </button>
          <button type="button" className="btn btn-primary px-6" onClick={onStartNew}>
            <Plus className="size-4" />
            {t.success.startNew}
          </button>
        </div>
      </div>
    </div>
  );
}

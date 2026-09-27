import { useEffect, useRef } from 'react';
import { Check, FileText, Plus, Scissors, TriangleAlert } from 'lucide-react';
import { formatBytes } from '../organize/types';
import { useToolI18n } from '../organize/i18n';
import type { SplitOutcome } from './SplitTool';

interface SplitResultPanelProps {
  outcome: SplitOutcome;
  onStartNew: () => void;
  onBackToEditing: () => void;
}

/**
 * What a split produced, file by file.
 *
 * A split is many downloads, so the count and any failure are stated outright
 * rather than left for the user to discover in a downloads folder.
 */
export default function SplitResultPanel({
  outcome,
  onStartNew,
  onBackToEditing,
}: SplitResultPanelProps) {
  const { locale, t } = useToolI18n();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const { files, failed } = outcome;

  return (
    <div ref={panelRef} className="scroll-mt-28">
      <div className="mx-auto max-w-2xl rounded-xl border border-hairline bg-canvas p-8 elev-2 sm:p-12">
        <span
          className={[
            'animate-pop-in mx-auto flex size-18 items-center justify-center rounded-full elev-2',
            files.length > 0 ? 'bg-primary' : 'bg-canvas-soft ring-1 ring-ink/15',
          ].join(' ')}
        >
          {files.length > 0 ? (
            <Check className="size-9 text-on-primary" strokeWidth={3} />
          ) : (
            <TriangleAlert className="size-9 text-negative" strokeWidth={2} />
          )}
        </span>

        <h2 className="animate-rise-in mt-6 text-display-xs font-semibold [animation-delay:80ms]">
          {files.length > 0
            ? t.split.resultsHeading(files.length)
            : t.split.resultsHeadingNone}
        </h2>
        <p
          className="animate-rise-in mx-auto mt-2 max-w-lg text-body-md text-body [animation-delay:140ms]"
        >
          {files.length > 0 ? t.split.resultsBody : t.split.allFailed}
        </p>

        <ul
          className="animate-rise-in mt-6 max-h-80 list-none space-y-1.5 overflow-y-auto p-0 [animation-delay:200ms]"
          aria-label={t.split.planLabel}
        >
          {files.map((file) => (
            <li
              key={file.name}
              className="flex items-center gap-2.5 rounded-lg bg-canvas-soft px-3 py-2 text-body-sm"
            >
              <FileText className="size-4 shrink-0 text-ink" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate font-semibold text-ink" title={file.name}>
                {file.name}
              </span>
              <span className="shrink-0 text-caption text-mute">
                {t.toolbar.pages(file.pages)} · {formatBytes(file.size, locale)}
              </span>
            </li>
          ))}
          {failed.map((file) => (
            <li
              key={file.name}
              className="flex items-center gap-2.5 rounded-lg bg-canvas-soft px-3 py-2 text-body-sm"
            >
              <TriangleAlert className="size-4 shrink-0 text-negative" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate text-ink" title={file.name}>
                {file.name}
              </span>
              <span className="shrink-0 text-caption text-negative-deep">
                {t.split.resultPending}
              </span>
            </li>
          ))}
        </ul>

        {failed.length > 0 && files.length > 0 && (
          <p className="mt-4 text-body-sm text-negative-deep">
            {t.split.resultsFailed(failed.length)}
          </p>
        )}

        <p className="mt-4 text-body-sm text-mute">{t.shared.memoryNote}</p>

        <div className="animate-rise-in mt-8 flex flex-col justify-center gap-3 sm:flex-row [animation-delay:260ms]">
          <button type="button" className="btn btn-secondary px-6" onClick={onBackToEditing}>
            <Scissors className="size-4" />
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

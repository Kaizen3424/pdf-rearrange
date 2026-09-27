import { useId } from 'react';
import {
  Check,
  Download,
  FilePlus,
  FileText,
  Info,
  LoaderCircle,
  Plus,
  TriangleAlert,
} from 'lucide-react';
import type { Zoom } from '../organize/types';
import { useToolI18n } from '../organize/i18n';
import type { ParsedRanges } from './lib/rangeParser';
import { splitFileName } from './lib/splitFiles';

interface RangePanelProps {
  mode: 'range' | 'every';
  onModeChange: (mode: 'range' | 'every') => void;
  rangeText: string;
  onRangeTextChange: (value: string) => void;
  /** Already translated by the tool, or `''` when the input is acceptable. */
  errorMessage: string;
  plan: ParsedRanges;
  pageCount: number;
  fileName: string;
  zoom: Zoom;
  onZoomChange: (zoom: Zoom) => void;
  onAddFiles: () => void;
  onStartOver: () => void;
  exporting: boolean;
  progress: { done: number; total: number } | null;
  confirming: boolean;
  onSplit: () => void;
  onCancelConfirm: () => void;
}

const zoomOptions: Zoom[] = ['sm', 'md', 'lg'];

function ZoomToggle({ zoom, onZoomChange }: { zoom: Zoom; onZoomChange: (zoom: Zoom) => void }) {
  const { t } = useToolI18n();
  return (
    <div
      className="flex items-center rounded-lg bg-canvas-soft p-0.5"
      role="group"
      aria-label={t.toolbar.thumbnailSize}
    >
      {zoomOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onZoomChange(option)}
          aria-pressed={zoom === option}
          aria-label={
            option === 'sm'
              ? t.toolbar.zoomSm
              : option === 'md'
                ? t.toolbar.zoomMd
                : t.toolbar.zoomLg
          }
          className={[
            'tap-target min-w-9 rounded-md px-2.5 py-1.5 text-caption font-semibold uppercase transition-[background-color,color,box-shadow,transform] duration-150 ease-standard active:scale-95',
            zoom === option ? 'bg-canvas text-ink elev-1' : 'text-mute hover:text-ink',
          ].join(' ')}
        >
          {option === 'sm' ? 'S' : option === 'md' ? 'M' : 'L'}
        </button>
      ))}
    </div>
  );
}

/**
 * The split control surface: mode switch, range field with live validation,
 * and the plan of files the current input will produce.
 *
 * The plan list is the honest part — it shows exactly which file comes from
 * which range before anything is built, so a range that was never meant to be
 * in the output is visible while it can still be corrected.
 */
export default function RangePanel({
  mode,
  onModeChange,
  rangeText,
  onRangeTextChange,
  errorMessage,
  plan,
  pageCount,
  fileName,
  zoom,
  onZoomChange,
  onAddFiles,
  onStartOver,
  exporting,
  progress,
  confirming,
  onSplit,
  onCancelConfirm,
}: RangePanelProps) {
  const { t } = useToolI18n();
  const rangeErrorId = useId();
  const helpId = useId();

  const hasError = errorMessage !== '';
  const groupCount = plan.groups.length;

  return (
    <div className="mb-5 rounded-xl border border-hairline bg-canvas p-3 elev-1 sm:p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-canvas-soft">
          <FileText className="size-4 text-ink" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-body-sm-strong">{fileName}</p>
          <p className="text-caption text-mute">{t.toolbar.pages(pageCount)}</p>
        </div>
        <ZoomToggle zoom={zoom} onZoomChange={onZoomChange} />
        <button
          type="button"
          className="btn btn-secondary tap-target px-4 py-2 text-body-sm"
          onClick={onAddFiles}
        >
          <FilePlus className="size-4" />
          <span className="hidden sm:inline">{t.toolbar.addPdfs}</span>
        </button>
        <button
          type="button"
          className="btn btn-secondary tap-target px-4 py-2 text-body-sm"
          onClick={onStartOver}
        >
          <Plus className="size-4" />
          <span className="hidden sm:inline">{t.toolbar.startNew}</span>
        </button>
      </div>

      <fieldset className="mt-4 border-0 p-0">
        <legend className="text-caption font-semibold uppercase tracking-wide text-mute">
          {t.split.modeLabel}
        </legend>
        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          {(['range', 'every'] as const).map((option) => {
            const active = mode === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onModeChange(option)}
                aria-pressed={active}
                className={[
                  'tap-target min-h-11 rounded-lg px-4 py-2 text-body-sm font-semibold transition-[background-color,color,box-shadow,transform] duration-150 ease-standard active:scale-95',
                  active
                    ? 'bg-primary-pale text-ink ring-2 ring-primary elev-1'
                    : 'bg-canvas-soft text-mute hover:text-ink',
                ].join(' ')}
              >
                {option === 'range' ? t.split.modeRange : t.split.modeEvery}
              </button>
            );
          })}
          <p className="w-full shrink-0 text-body-sm text-body sm:w-auto sm:flex-1">
            {t.split.orderLocked}
          </p>
        </div>
      </fieldset>

      {mode === 'range' && (
        <div className="mt-4">
          <label
            htmlFor="split-range-input"
            className="block text-caption font-semibold uppercase tracking-wide text-mute"
          >
            {t.split.rangeLabel}
          </label>
          <input
            id="split-range-input"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            spellCheck={false}
            value={rangeText}
            onChange={(event) => onRangeTextChange(event.target.value)}
            placeholder={t.split.rangePlaceholder}
            aria-describedby={hasError ? `${rangeErrorId} ${helpId}` : helpId}
            aria-invalid={hasError}
            className={[
              'mt-1.5 w-full rounded-lg border-2 bg-canvas px-4 py-3 text-body-md text-ink transition-colors duration-150 ease-standard placeholder:text-mute/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink',
              hasError ? 'border-negative' : 'border-ink/20 focus:border-ink/40',
            ].join(' ')}
          />
          {hasError && (
            <p
              id={rangeErrorId}
              role="alert"
              className="mt-2 flex items-start gap-1.5 text-body-sm text-negative-deep"
            >
              <TriangleAlert className="mt-0.5 size-4 shrink-0" />
              <span>{errorMessage}</span>
            </p>
          )}
          <p id={helpId} className="mt-2 text-body-sm text-mute">
            {t.split.rangeHelp}
          </p>
        </div>
      )}

      <div className="mt-4 rounded-lg bg-canvas-soft p-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-caption font-semibold uppercase tracking-wide text-mute">
            {t.split.planLabel}
          </p>
          {groupCount > 0 && (
            <p className="text-body-sm font-semibold text-ink">{t.split.planCount(groupCount)}</p>
          )}
        </div>

        <ol
          aria-live="polite"
          aria-relevant="additions text"
          className="mt-2 max-h-56 list-none space-y-1 overflow-y-auto p-0"
        >
          {groupCount === 0 ? (
            <li className="text-body-sm text-mute">
              {mode === 'range' ? t.split.planEmpty : t.tool.noPagesLeft}
            </li>
          ) : (
            plan.labels.map((label, index) => (
              <li
                key={`${index}-${label}`}
                className="flex items-center gap-2 rounded-md bg-canvas px-2.5 py-1.5 text-body-sm text-ink"
              >
                <Check className="size-4 shrink-0 text-positive" aria-hidden="true" />
                <span className="min-w-0 flex-1 truncate">
                  {t.split.planItem(index + 1, label, plan.groups[index]!.length)}
                </span>
                <span className="shrink-0 truncate text-caption text-mute">
                  {splitFileName(fileName, label, index, groupCount)}
                </span>
              </li>
            ))
          )}
        </ol>

        <p className="mt-3 flex items-start gap-1.5 text-body-sm text-body">
          <Info className="mt-0.5 size-4 shrink-0 text-ink" aria-hidden="true" />
          <span>{t.shared.byteForByte}</span>
        </p>
        <p className="mt-1.5 flex items-start gap-1.5 text-body-sm text-mute">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{t.shared.memoryNote}</span>
        </p>
      </div>

      {confirming ? (
        <div className="mt-4 rounded-lg border-2 border-primary bg-primary-pale p-4">
          <p className="text-body-md-strong text-ink">{t.split.confirmTitle(groupCount)}</p>
          <p className="mt-1 text-body-sm text-body">{t.split.confirmBody}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="btn btn-primary px-5 py-2.5"
              onClick={onSplit}
              autoFocus
            >
              <Download className="size-4" />
              {t.split.confirmAction(groupCount)}
            </button>
            <button type="button" className="btn btn-secondary px-4 py-2.5" onClick={onCancelConfirm}>
              {t.split.cancel}
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="btn btn-primary px-6 py-2.5"
            onClick={onSplit}
            disabled={exporting || pageCount === 0 || groupCount === 0 || hasError}
          >
            {exporting ? (
              <LoaderCircle className="size-4 animate-spin" />
            ) : (
              <Download className="size-4" />
            )}
            {exporting ? t.split.working : t.split.action}
          </button>
          <p aria-live="polite" className="text-body-sm font-semibold text-ink">
            {progress && exporting ? t.split.progress(progress.done, progress.total) : ''}
          </p>
        </div>
      )}
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { ArrowLeft, Check, Download, FileText, LoaderCircle, Plus } from 'lucide-react';
import { formatBytes } from './types';
import StarRating from './StarRating';

interface SuccessPanelProps {
  fileName: string;
  fileSize: number;
  pageCount: number;
  downloading: boolean;
  onDownloadAgain: () => void;
  onStartNew: () => void;
  onBackToEditing: () => void;
}

export default function SuccessPanel({
  fileName,
  fileSize,
  pageCount,
  downloading,
  onDownloadAgain,
  onStartNew,
  onBackToEditing,
}: SuccessPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div ref={panelRef} className="scroll-mt-28">
      <div className="mx-auto max-w-xl rounded-xl border border-ink/10 bg-canvas p-8 text-center shadow-sm sm:p-12">
        <span className="animate-pop-in mx-auto flex size-18 items-center justify-center rounded-full bg-primary shadow-md">
          <Check className="size-9 text-on-primary" strokeWidth={3} />
        </span>

        <h2 className="animate-rise-in mt-6 text-display-xs font-semibold [animation-delay:80ms]">
          Your PDF is ready
        </h2>
        <p
          className="animate-rise-in mx-auto mt-2 max-w-md text-body-md text-body [animation-delay:140ms]"
        >
          Your rearranged PDF has been downloaded to your device. Nothing was uploaded — everything
          happened right in your browser.
        </p>

        <div className="animate-rise-in mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-lg bg-canvas-soft px-4 py-3 [animation-delay:200ms]">
          <FileText className="size-5 shrink-0 text-ink" aria-hidden="true" />
          <p className="min-w-0 truncate text-body-sm-strong text-ink" title={fileName}>
            {fileName}
          </p>
          <span className="text-body-sm text-mute" aria-hidden="true">
            ·
          </span>
          <p className="text-body-sm text-mute">
            {pageCount} page{pageCount === 1 ? '' : 's'} · {formatBytes(fileSize)}
          </p>
        </div>

        <div className="animate-rise-in mt-8 flex flex-col justify-center gap-3 sm:flex-row [animation-delay:260ms]">
          <button
            type="button"
            className="btn btn-primary px-6"
            onClick={onDownloadAgain}
            disabled={downloading}
          >
            {downloading ? (
              <LoaderCircle className="size-4 animate-spin" />
            ) : (
              <Download className="size-4" />
            )}
            {downloading ? 'Building…' : 'Download again'}
          </button>
          <button type="button" className="btn btn-secondary px-6" onClick={onStartNew}>
            <Plus className="size-4" />
            Start new
          </button>
        </div>

        <button
          type="button"
          className="animate-rise-in mt-5 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-body-sm font-semibold text-body underline-offset-4 transition-colors hover:text-ink hover:underline [animation-delay:320ms]"
          onClick={onBackToEditing}
        >
          <ArrowLeft className="size-4" />
          Back to editing
        </button>

        <div className="animate-rise-in mt-8 border-t border-ink/10 pt-8 [animation-delay:380ms]">
          <StarRating />
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { FileText, LoaderCircle, ShieldCheck, Upload } from 'lucide-react';
import { useToolI18n } from './i18n';

interface DropZoneProps {
  loading: boolean;
  loadLabel: string;
  onBrowse: () => void;
}

export default function DropZone({ loading, loadLabel, onBrowse }: DropZoneProps) {
  const { t } = useToolI18n();
  const [dragOver, setDragOver] = useState(false);

  return (
    <div
      onDragEnter={() => setDragOver(true)}
      onDragOver={(event) => {
        event.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setDragOver(false);
        }
      }}
      onDrop={(event) => {
        event.preventDefault();
        setDragOver(false);
      }}
      className={[
        'relative rounded-xl border-2 border-dashed bg-canvas p-8 text-center shadow-sm transition-colors duration-150 sm:p-12',
        dragOver ? 'border-primary bg-primary-pale/50' : 'border-ink/20',
      ].join(' ')}
      aria-hidden={loading}
    >
      {loading ? (
        <div className="flex flex-col items-center gap-4 py-8">
          <LoaderCircle className="size-10 animate-spin text-ink" strokeWidth={1.5} />
          <p className="text-body-md-strong">{loadLabel || t.dropZone.reading}</p>
          <p className="text-body-sm text-mute">{t.dropZone.processingLocally}</p>
        </div>
      ) : (
        <>
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-canvas-soft">
            <Upload className="size-7 text-ink" strokeWidth={1.75} />
          </span>
          <h2 className="mt-6 text-display-xs font-semibold">{t.dropZone.heading}</h2>
          <p className="mt-2 text-body-md text-body">{t.dropZone.or}</p>
          <button type="button" className="btn btn-primary mt-3" onClick={onBrowse}>
            <FileText size={18} />
            {t.dropZone.selectFile}
          </button>
          <p className="mt-4 text-body-sm text-mute">{t.dropZone.hint}</p>
          <p className="mt-6 inline-flex items-center gap-2 text-body-sm-strong text-positive-deep">
            <ShieldCheck size={16} />
            {t.dropZone.privacy}
          </p>
        </>
      )}
    </div>
  );
}

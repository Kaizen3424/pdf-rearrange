import { useEffect } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Check, Copy, Eye, LoaderCircle, RotateCw, Trash2, TriangleAlert } from 'lucide-react';
import type { PageItem, SourceDoc } from './types';
import { blankPageRatio, A4_RATIO } from './types';
import type { ThumbnailsApi } from './hooks/useThumbnails';
import { useInView } from './hooks/useThumbnails';
import { renderBlankThumbnail, renderThumbnail } from './lib/pdfService';
import { useToolI18n } from './i18n';

interface PageCardProps {
  item: PageItem;
  index: number;
  total: number;
  source: SourceDoc;
  color: string;
  thumbnails: ThumbnailsApi;
  zoomWidth: number;
  selected: boolean;
  multipleSources: boolean;
  onToggleSelect: (id: string, shiftKey: boolean) => void;
  onRotate: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
  onPreview: (index: number) => void;
}

function CardAction({
  label,
  onClick,
  danger = false,
  children,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className={[
        'flex size-8 items-center justify-center rounded-md bg-scrim/75 text-on-solid elev-1 backdrop-blur transition-[background-color,transform] duration-150 ease-standard hover:bg-scrim active:scale-90',
        danger ? 'hover:bg-negative' : '',
      ].join(' ')}
      onPointerDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function PageCard({
  item,
  index,
  total,
  source,
  color,
  thumbnails,
  zoomWidth,
  selected,
  multipleSources,
  onToggleSelect,
  onRotate,
  onDuplicate,
  onDelete,
  onPreview,
}: PageCardProps) {
  const { t } = useToolI18n();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
  });
  const { ref: inViewRef, inView } = useInView<HTMLDivElement>();

  const key = `${item.sourceId}:${item.sourcePageIndex}:${zoomWidth}:${item.rotation}`;
  const url = thumbnails.get(key);
  const ratio =
    thumbnails.getRatio(key) ?? (source.blank ? blankPageRatio(item.rotation) : A4_RATIO);
  const failed = thumbnails.isFailed(key);

  const displayName = source.name.replace(/\.pdf$/i, '');
  const sourceLabel = source.blank
    ? t.pageCard.blankPage
    : t.pageCard.sourcePage(displayName, item.sourcePageIndex + 1);
  const rotationLabel = item.rotation ? t.pageCard.rotated(item.rotation) : '';
  const ariaLabel = `${t.pageCard.pageOf(index + 1, total)}: ${sourceLabel}${rotationLabel}`;

  useEffect(() => {
    if (!inView) return;
    thumbnails.request(key, async () => {
      if (source.blank) {
        return renderBlankThumbnail(zoomWidth, blankPageRatio(item.rotation));
      }
      if (!source.doc) throw new Error('Document is not open');
      return renderThumbnail(source.doc, item.sourcePageIndex, zoomWidth, item.rotation);
    });
  }, [inView, key, thumbnails, source, item.sourcePageIndex, item.rotation, zoomWidth]);

  return (
    <li
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        transition: transition ? 'transform 220ms var(--ease-standard)' : undefined,
      }}
      className={`relative list-none ${isDragging ? 'z-20 opacity-30' : ''}`}
    >
      <div
        {...attributes}
        {...listeners}
        onClick={(event) => {
          if (event.defaultPrevented) return;
          onToggleSelect(item.id, event.shiftKey);
        }}
        className={[
          'group relative cursor-grab touch-manipulation select-none rounded-lg border-2 bg-canvas p-2 transition-[border-color,box-shadow,transform] duration-200 ease-standard active:scale-[0.99] active:cursor-grabbing',
          selected
            ? 'border-primary elev-2'
            : 'border-transparent elev-1 hover:border-ink/15 hover:elev-2',
        ].join(' ')}
        aria-label={ariaLabel}
      >
        <div
          ref={inViewRef}
          className="relative overflow-hidden rounded-md bg-canvas-soft"
          style={{ aspectRatio: `${ratio}` }}
        >
          {url ? (
            <img src={url} alt="" draggable={false} className="h-full w-full object-contain" />
          ) : failed ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-2 text-mute">
              <TriangleAlert className="size-5" />
              <span className="text-center text-caption">{t.pageCard.renderFailed}</span>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoaderCircle
                className="size-5 animate-spin text-mute/70"
                strokeWidth={1.75}
                aria-label={t.pageCard.loadingThumbnail}
              />
            </div>
          )}

          <span
            className={[
              'absolute start-1.5 top-1.5 flex size-5 items-center justify-center rounded-full border-2 transition-colors',
              selected
                ? 'border-primary bg-primary text-on-primary'
                : 'border-on-solid/80 bg-scrim/35 text-transparent backdrop-blur-sm group-hover:border-on-solid',
            ].join(' ')}
            aria-hidden="true"
          >
            <Check className="size-3" strokeWidth={3.5} />
          </span>
        </div>

        <div className="mt-1.5 flex items-center justify-between gap-1 px-0.5">
          <span className="rounded-sm bg-canvas-soft px-1.5 py-0.5 text-caption font-semibold text-ink">
            {index + 1}
          </span>
          {multipleSources && (
            <span
              className="flex min-w-0 items-center gap-1 text-caption text-mute"
              title={t.pageCard.sourceTitle(source.name, item.sourcePageIndex + 1)}
            >
              <span
                className="size-1.5 shrink-0 rounded-full ring-1 ring-ink/25"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
              <span className="truncate">
                {source.blank ? t.pageCard.blank : source.name.replace(/\.pdf$/i, '')}
              </span>
            </span>
          )}
          {item.rotation !== 0 && (
            <span className="text-caption text-mute" title={t.pageCard.rotatedTitle(item.rotation)}>
              {item.rotation}°
            </span>
          )}
        </div>

        <div
          className={[
            'absolute end-1.5 top-1.5 flex flex-col gap-1.5 transition-opacity duration-150 focus-within:opacity-100 group-hover:opacity-100',
            selected ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          <CardAction label={t.pageCard.preview} onClick={() => onPreview(index)}>
            <Eye className="size-3.5" />
          </CardAction>
          <CardAction label={t.pageCard.rotate} onClick={() => onRotate(item.id)}>
            <RotateCw className="size-3.5" />
          </CardAction>
          <CardAction label={t.pageCard.duplicate} onClick={() => onDuplicate(item.id)}>
            <Copy className="size-3.5" />
          </CardAction>
          <CardAction label={t.pageCard.delete} danger onClick={() => onDelete(item.id)}>
            <Trash2 className="size-3.5" />
          </CardAction>
        </div>
      </div>
    </li>
  );
}

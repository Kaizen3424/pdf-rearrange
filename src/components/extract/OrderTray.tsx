import { useCallback, useEffect, useId, useRef, useState } from 'react';
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MeasuringFrequency,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  type Announcements,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ArrowDown, ArrowUp, GripVertical, X } from 'lucide-react';
import type { PageItem, SourceDoc } from '../organize/types';
import { A4_RATIO } from '../organize/types';
import type { ThumbnailsApi } from '../../lib/pdf/useThumbnails';
import { useInView } from '../../lib/pdf/useThumbnails';
import { renderThumbnail } from '../../lib/pdf/pdfService';
import { useToolI18n } from '../organize/i18n';
import { useReducedMotion } from './lib/useReducedMotion';

interface OrderTrayProps {
  kept: PageItem[];
  docs: SourceDoc[];
  thumbnails: ThumbnailsApi;
  zoomWidth: number;
  onMove: (from: number, to: number) => void;
  onRemove: (id: string) => void;
}

function TrayThumb({
  item,
  source,
  thumbnails,
  zoomWidth,
}: {
  item: PageItem;
  source: SourceDoc;
  thumbnails: ThumbnailsApi;
  zoomWidth: number;
}) {
  const { ref: inViewRef, inView } = useInView<HTMLDivElement>();
  const key = `${item.sourceId}:${item.sourcePageIndex}:${zoomWidth}:${item.rotation}`;
  const url = thumbnails.get(key);

  useEffect(() => {
    if (!inView) return;
    thumbnails.request(key, async () => {
      if (!source.doc) throw new Error('Document is not open');
      return renderThumbnail(source.doc, item.sourcePageIndex, zoomWidth, item.rotation);
    });
  }, [inView, key, thumbnails, source, item.sourcePageIndex, item.rotation, zoomWidth]);

  return (
    <div
      ref={inViewRef}
      className="w-9 shrink-0 overflow-hidden rounded-md bg-canvas-soft"
      style={{ aspectRatio: `${thumbnails.getRatio(key) ?? A4_RATIO}` }}
    >
      {url && <img src={url} alt="" draggable={false} className="h-full w-full object-contain" />}
    </div>
  );
}

function TrayAction({
  label,
  disabled = false,
  onClick,
  buttonRef,
  children,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  buttonRef?: React.Ref<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  return (
    <button
      ref={buttonRef}
      type="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="tap-target flex size-9 items-center justify-center rounded-md text-ink transition-[background-color,transform] duration-150 ease-standard hover:bg-canvas-soft active:scale-95 disabled:opacity-30 disabled:hover:bg-transparent"
    >
      {children}
    </button>
  );
}

function TrayRow({
  item,
  index,
  total,
  source,
  thumbnails,
  zoomWidth,
  onMove,
  onRemove,
  registerRemove,
}: {
  item: PageItem;
  index: number;
  total: number;
  source: SourceDoc;
  thumbnails: ThumbnailsApi;
  zoomWidth: number;
  onMove: (from: number, to: number) => void;
  onRemove: (id: string) => void;
  registerRemove: (id: string, element: HTMLButtonElement | null) => void;
}) {
  const { t } = useToolI18n();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
  });

  return (
    <li
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        transition: transition ? 'transform 200ms var(--ease-standard)' : undefined,
      }}
      className={['list-none', isDragging ? 'z-20 opacity-40' : ''].join(' ')}
    >
      <div className="flex items-center gap-1.5 rounded-lg border border-hairline bg-canvas p-1.5 elev-1">
        <button
          type="button"
          {...attributes}
          {...listeners}
          aria-label={t.extract.orderLabel}
          className="focus-ring flex size-9 shrink-0 cursor-grab touch-manipulation items-center justify-center rounded-md text-mute transition-[background-color,color,transform] duration-150 ease-standard hover:bg-canvas-soft hover:text-ink active:cursor-grabbing"
        >
          <GripVertical className="size-4" />
        </button>
        <TrayThumb item={item} source={source} thumbnails={thumbnails} zoomWidth={zoomWidth} />
        <p
          className="min-w-0 flex-1 truncate text-body-sm text-ink"
          title={t.pageCard.sourceTitle(source.name, item.sourcePageIndex + 1)}
        >
          {t.pageCard.pageOf(index + 1, total)}
        </p>
        <div className="flex shrink-0 items-center gap-0.5">
          <TrayAction
            label={t.extract.moveUp}
            disabled={index === 0}
            onClick={() => onMove(index, index - 1)}
          >
            <ArrowUp className="size-4" />
          </TrayAction>
          <TrayAction
            label={t.extract.moveDown}
            disabled={index === total - 1}
            onClick={() => onMove(index, index + 1)}
          >
            <ArrowDown className="size-4" />
          </TrayAction>
          <TrayAction
            label={t.extract.remove}
            onClick={() => onRemove(item.id)}
            buttonRef={(element) => registerRemove(item.id, element)}
          >
            <X className="size-4" />
          </TrayAction>
        </div>
      </div>
    </li>
  );
}

/**
 * The pages that will go into the new document, in the order they will go.
 *
 * Dragging is the fast way to reorder; the arrow buttons are the reliable one,
 * because they work from the keyboard and from a screen reader without a drag
 * simulation. Removing a page here never touches the file — it only takes the
 * page out of the new document.
 */
export default function OrderTray({
  kept,
  docs,
  thumbnails,
  zoomWidth,
  onMove,
  onRemove,
}: OrderTrayProps) {
  const { t } = useToolI18n();
  const [activeId, setActiveId] = useState<string | null>(null);
  const labelId = useId();
  const listRef = useRef<HTMLUListElement>(null);
  const removeRefs = useRef(new Map<string, HTMLButtonElement>());
  const pendingFocusRef = useRef<{ id: string | null } | null>(null);
  const reducedMotion = useReducedMotion();

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const docMap = new Map(docs.map((doc) => [doc.id, doc]));
  const indexOfId = (id: string) => kept.findIndex((page) => page.id === id);
  const activeIndex = activeId ? indexOfId(activeId) : -1;

  const announcements: Announcements = {
    onDragStart: ({ active }) => t.pageGrid.dragStart(indexOfId(String(active.id)) + 1),
    onDragOver: ({ over }) =>
      over ? t.pageGrid.dragOver(indexOfId(String(over.id)) + 1) : t.pageGrid.dragOut,
    // The drop itself is announced by the tool's own live region, which covers
    // the arrow buttons too, so it must not be announced twice.
    onDragEnd: () => undefined,
    onDragCancel: () => t.pageGrid.dragCancel,
  };

  const registerRemove = useCallback((id: string, element: HTMLButtonElement | null) => {
    if (element) removeRefs.current.set(id, element);
    else removeRefs.current.delete(id);
  }, []);

  const handleRemove = useCallback(
    (id: string) => {
      const index = kept.findIndex((page) => page.id === id);
      onRemove(id);
      if (index < 0) return;
      const rest = kept.filter((page) => page.id !== id);
      pendingFocusRef.current = { id: rest[Math.min(index, rest.length - 1)]?.id ?? null };
    },
    [kept, onRemove],
  );

  // Removing a row destroys the focused button, which would strand focus on the
  // document body, so the row that took its place is focused instead.
  useEffect(() => {
    const pending = pendingFocusRef.current;
    if (pending === null) return;
    pendingFocusRef.current = null;
    const element = pending.id === null ? null : removeRefs.current.get(pending.id);
    if (element) element.focus();
    else listRef.current?.focus();
  }, [kept]);

  return (
    <section
      className="mt-5 rounded-xl border border-hairline bg-canvas p-3 elev-1 sm:p-4"
      aria-labelledby={labelId}
    >
      <p
        id={labelId}
        className="text-caption font-semibold uppercase tracking-wide text-mute"
      >
        {t.extract.orderLabel}
      </p>
      <p className="mt-1 text-body-sm text-body">{t.extract.orderHelp}</p>

      {kept.length === 0 ? (
        <p className="mt-3 rounded-lg bg-canvas-soft p-3 text-body-sm text-mute">
          {t.extract.orderEmpty}
        </p>
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          measuring={{ droppable: { frequency: MeasuringFrequency.Optimized } }}
          accessibility={{
            announcements,
            screenReaderInstructions: { draggable: t.extract.orderInTray },
          }}
          onDragStart={(event) => setActiveId(String(event.active.id))}
          onDragEnd={(event) => {
            const { active, over } = event;
            if (over && active.id !== over.id) {
              const from = indexOfId(String(active.id));
              const to = indexOfId(String(over.id));
              if (from >= 0 && to >= 0) onMove(from, to);
            }
            setActiveId(null);
          }}
          onDragCancel={() => setActiveId(null)}
        >
          <SortableContext
            items={kept.map((page) => page.id)}
            strategy={verticalListSortingStrategy}
          >
            <ul
              ref={listRef}
              tabIndex={-1}
              className="focus-ring mt-3 flex max-h-96 list-none flex-col gap-1.5 overflow-y-auto p-0 pe-1"
            >
              {kept.map((item, index) => {
                const source = docMap.get(item.sourceId);
                if (!source) return null;
                return (
                  <TrayRow
                    key={item.id}
                    item={item}
                    index={index}
                    total={kept.length}
                    source={source}
                    thumbnails={thumbnails}
                    zoomWidth={zoomWidth}
                    onMove={onMove}
                    onRemove={handleRemove}
                    registerRemove={registerRemove}
                  />
                );
              })}
            </ul>
          </SortableContext>

          <DragOverlay
            dropAnimation={
              reducedMotion ? null : { duration: 220, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
            }
          >
            {activeIndex >= 0 ? (
              <div
                aria-hidden="true"
                className="rotate-2 rounded-lg border-2 border-primary bg-canvas px-3 py-2 text-body-sm-strong elev-3"
              >
                {t.pageCard.pageOf(activeIndex + 1, kept.length)}
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      )}
    </section>
  );
}

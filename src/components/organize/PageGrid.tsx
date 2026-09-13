import { useState } from 'react';
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
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import type { PageItem, SourceDoc } from './types';
import { SOURCE_COLORS } from './types';
import PageCard from './PageCard';
import type { ThumbnailsApi } from './hooks/useThumbnails';
import { useToolI18n } from './i18n';

interface PageGridProps {
  pages: PageItem[];
  docs: SourceDoc[];
  thumbnails: ThumbnailsApi;
  zoomWidth: number;
  selected: Set<string>;
  onReorder: (from: number, to: number) => void;
  onToggleSelect: (id: string, shiftKey: boolean) => void;
  onRotate: (id: string) => void;
  onDuplicate: (id: string) => void;
  onDelete: (id: string) => void;
  onPreview: (index: number) => void;
}

export default function PageGrid({
  pages,
  docs,
  thumbnails,
  zoomWidth,
  selected,
  onReorder,
  onToggleSelect,
  onRotate,
  onDuplicate,
  onDelete,
  onPreview,
}: PageGridProps) {
  const { t } = useToolI18n();
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const docMap = new Map(docs.map((doc) => [doc.id, doc]));
  const indexOfId = (id: string) => pages.findIndex((page) => page.id === id);

  const activeIndex = activeId ? indexOfId(activeId) : -1;
  const activeItem = activeIndex >= 0 ? pages[activeIndex] : null;
  const activeSource = activeItem ? docMap.get(activeItem.sourceId) : null;
  const activeKey = activeItem
    ? `${activeItem.sourceId}:${activeItem.sourcePageIndex}:${zoomWidth}:${activeItem.rotation}`
    : null;

  const announcements: Announcements = {
    onDragStart: ({ active }) =>
      t.pageGrid.dragStart(indexOfId(String(active.id)) + 1),
    onDragOver: ({ over }) =>
      over
        ? t.pageGrid.dragOver(indexOfId(String(over.id)) + 1)
        : t.pageGrid.dragOut,
    onDragEnd: ({ over }) =>
      over ? t.pageGrid.dragEnd(indexOfId(String(over.id)) + 1) : t.pageGrid.dragCancel,
    onDragCancel: () => t.pageGrid.dragCancel,
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      measuring={{ droppable: { frequency: MeasuringFrequency.Optimized } }}
      accessibility={{ announcements }}
      onDragStart={(event) => setActiveId(String(event.active.id))}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
          const from = indexOfId(String(active.id));
          const to = indexOfId(String(over.id));
          if (from >= 0 && to >= 0) onReorder(from, to);
        }
        setActiveId(null);
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={pages.map((page) => page.id)} strategy={rectSortingStrategy}>
        <ul
          className="grid list-none gap-4 p-0"
          style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${zoomWidth}px, 1fr))` }}
        >
          {pages.map((item, index) => {
            const source = docMap.get(item.sourceId);
            if (!source) return null;
            const docIndex = docs.indexOf(source);
            return (
              <PageCard
                key={item.id}
                item={item}
                index={index}
                total={pages.length}
                source={source}
                color={SOURCE_COLORS[docIndex % SOURCE_COLORS.length] ?? '#0e6e8c'}
                thumbnails={thumbnails}
                zoomWidth={zoomWidth}
                selected={selected.has(item.id)}
                multipleSources={docs.length > 1}
                onToggleSelect={onToggleSelect}
                onRotate={onRotate}
                onDuplicate={onDuplicate}
                onDelete={onDelete}
                onPreview={onPreview}
              />
            );
          })}
        </ul>
      </SortableContext>

      <DragOverlay dropAnimation={{ duration: 240, easing: 'cubic-bezier(0.2, 0, 0, 1)' }}>
        {activeItem && activeSource && activeKey ? (
          <div
            className="w-fit rotate-2 scale-105 rounded-lg border-2 border-primary bg-canvas p-2 shadow-2xl"
            aria-hidden="true"
          >
            <div
              className="overflow-hidden rounded-md bg-canvas-soft"
              style={{ width: zoomWidth, aspectRatio: thumbnails.getRatio(activeKey) ?? 0.7071 }}
            >
              {thumbnails.get(activeKey) && (
                <img
                  src={thumbnails.get(activeKey)}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-contain"
                />
              )}
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

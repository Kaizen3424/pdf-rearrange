import { useCallback, useRef, useState } from 'react';
import type { PageItem } from '../types';

const HISTORY_LIMIT = 80;

export interface PagesApi {
  pages: PageItem[];
  commit: (updater: (prev: PageItem[]) => PageItem[]) => void;
  undo: () => boolean;
  redo: () => boolean;
  canUndo: boolean;
  canRedo: boolean;
  hardSet: (next: PageItem[]) => void;
  clearHistory: () => void;
}

export function usePages(initial: PageItem[] = []): PagesApi {
  const [pages, setPagesState] = useState<PageItem[]>(initial);
  const pagesRef = useRef<PageItem[]>(initial);
  const pastRef = useRef<PageItem[][]>([]);
  const futureRef = useRef<PageItem[][]>([]);
  const [, forceRender] = useState(0);

  const apply = (next: PageItem[], record: boolean) => {
    if (record) {
      pastRef.current = [...pastRef.current, pagesRef.current].slice(-HISTORY_LIMIT);
      futureRef.current = [];
    }
    pagesRef.current = next;
    setPagesState(next);
    forceRender((n) => n + 1);
  };

  const commit = useCallback((updater: (prev: PageItem[]) => PageItem[]) => {
    apply(updater(pagesRef.current), true);
  }, []);

  const undo = useCallback(() => {
    const past = pastRef.current;
    const prev = past[past.length - 1];
    if (!prev) return false;
    pastRef.current = past.slice(0, -1);
    futureRef.current = [...futureRef.current, pagesRef.current];
    pagesRef.current = prev;
    setPagesState(prev);
    forceRender((n) => n + 1);
    return true;
  }, []);

  const redo = useCallback(() => {
    const future = futureRef.current;
    const next = future[future.length - 1];
    if (!next) return false;
    futureRef.current = future.slice(0, -1);
    pastRef.current = [...pastRef.current, pagesRef.current].slice(-HISTORY_LIMIT);
    pagesRef.current = next;
    setPagesState(next);
    forceRender((n) => n + 1);
    return true;
  }, []);

  const hardSet = useCallback((next: PageItem[]) => {
    apply(next, false);
  }, []);

  const clearHistory = useCallback(() => {
    pastRef.current = [];
    futureRef.current = [];
    forceRender((n) => n + 1);
  }, []);

  return {
    pages,
    commit,
    undo,
    redo,
    canUndo: pastRef.current.length > 0,
    canRedo: futureRef.current.length > 0,
    hardSet,
    clearHistory,
  };
}

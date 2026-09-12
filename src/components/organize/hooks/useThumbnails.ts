import { useCallback, useEffect, useRef, useState } from 'react';

type RenderFn = () => Promise<{ blob: Blob; ratio: number }>;

const MAX_CONCURRENT = 3;

export interface ThumbnailsApi {
  get: (key: string) => string | undefined;
  request: (key: string, fn: RenderFn) => void;
  getRatio: (key: string) => number | undefined;
  isFailed: (key: string) => boolean;
  version: number;
}

export function useThumbnails(): ThumbnailsApi {
  const cacheRef = useRef(new Map<string, string>());
  const ratioRef = useRef(new Map<string, number>());
  const failedRef = useRef(new Set<string>());
  const pendingRef = useRef(new Set<string>());
  const queueRef = useRef<Array<{ key: string; fn: RenderFn }>>([]);
  const activeRef = useRef(0);
  const [version, setVersion] = useState(0);

  const pump = useCallback(() => {
    while (activeRef.current < MAX_CONCURRENT && queueRef.current.length > 0) {
      const job = queueRef.current.shift()!;
      activeRef.current += 1;
      job
        .fn()
        .then(({ blob, ratio }) => {
          cacheRef.current.set(job.key, URL.createObjectURL(blob));
          ratioRef.current.set(job.key, ratio);
          setVersion((v) => v + 1);
        })
        .catch(() => {
          failedRef.current.add(job.key);
          setVersion((v) => v + 1);
        })
        .finally(() => {
          activeRef.current -= 1;
          pendingRef.current.delete(job.key);
          pump();
        });
    }
  }, []);

  const request = useCallback(
    (key: string, fn: RenderFn) => {
      if (cacheRef.current.has(key) || pendingRef.current.has(key) || failedRef.current.has(key)) {
        return;
      }
      pendingRef.current.add(key);
      queueRef.current.push({ key, fn });
      pump();
    },
    [pump],
  );

  const get = useCallback((key: string) => cacheRef.current.get(key), []);

  const getRatio = useCallback((key: string) => ratioRef.current.get(key), []);

  const isFailed = useCallback((key: string) => failedRef.current.has(key), []);

  useEffect(() => {
    const cache = cacheRef.current;
    return () => {
      cache.forEach((url) => URL.revokeObjectURL(url));
      cache.clear();
    };
  }, []);

  return { get, request, getRatio, isFailed, version };
}

export function useInView<T extends Element>(rootMargin = '400px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}

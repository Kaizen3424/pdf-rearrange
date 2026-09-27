import { useEffect, useState } from 'react';

/**
 * Live `prefers-reduced-motion` state.
 *
 * The stylesheet already neutralises CSS animation, transition and smooth
 * scrolling, but dnd-kit's drop animation is driven from JavaScript, so it has
 * to be told to stand down.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = () => setReduced(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

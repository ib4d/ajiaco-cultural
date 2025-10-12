import { useEffect, useMemo, useState } from 'react';

const LS_KEY = 'ajiaco_progress_v3';

export function useProgress(content) {
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch { return {}; }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(progress));
  }, [progress]);

  const overall = useMemo(() => {
    const totalCh = content.reduce((n, b) => n + b.chapters.length, 0);
    const done = Object.values(progress)
      .reduce((n, e) => n + Object.values(e?.done || {}).filter(Boolean).length, 0);
    return totalCh ? Math.round((done / totalCh) * 100) : 0;
  }, [progress, content]);

  const mark = (blockId, chapterId, passed) => setProgress(p => {
    const doneMap = { ...(p[blockId]?.done || {}), [chapterId]: !!passed };
    return {
      ...p,
      [blockId]: {
        ...(p[blockId] || {}),
        done: doneMap,
        stars: Object.values(doneMap).filter(Boolean).length,
      }
    };
  });

  const getBlockPct = (block) => {
    const total = block.chapters.length;
    const entry = progress[block.id] || { done: {} };
    const done = Object.values(entry.done).filter(Boolean).length;
    return total ? Math.round((done / total) * 100) : 0;
  };

  const resetAll = () => setProgress({});

  return { progress, overall, mark, getBlockPct, resetAll };
}

import { useEffect, useMemo, useState } from "react";

const LS_KEY = "ajiaco_progress_v4";
// We mark progress at the SUBTOPIC level with key `${chapterId}:${subtopicId}`

export function useProgress(content) {
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch { return {}; }
  });

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(progress));
  }, [progress]);

  // total subtopics in whole course
  const overall = useMemo(() => {
    const totalSubs = content.reduce((n, b) =>
      n + b.chapters.reduce((m, ch) => m + ch.subtopics.length, 0), 0);
    const done = Object.values(progress)
      .reduce((n, e) => n + Object.values(e?.done || {}).filter(Boolean).length, 0);
    return totalSubs ? Math.round((done / totalSubs) * 100) : 0;
  }, [progress, content]);

  const mark = (blockId, chapterId, subId, passed) => setProgress(p => {
    const key = `${chapterId}:${subId}`;
    const doneMap = { ...(p[blockId]?.done || {}), [key]: !!passed };
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
    const total = block.chapters.reduce((m, ch) => m + ch.subtopics.length, 0);
    const entry = progress[block.id] || { done: {} };
    const done = Object.values(entry.done).filter(Boolean).length;
    return total ? Math.round((done / total) * 100) : 0;
    // Note: this overestimates if you switch blocks a lot; good enough for visual progress.
  };

  const resetAll = () => setProgress({});

  return { progress, overall, mark, getBlockPct, resetAll };
}

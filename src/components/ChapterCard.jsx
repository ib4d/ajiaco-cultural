import React from 'react';
import Quiz from './Quiz';

export default function ChapterCard({
  block, chapter, isActive, setActiveIndex, idx, total, color, onPass, difficulty
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <article id={chapter.id} className="border rounded-xl p-4 bg-white/80">
      <div className="flex flex-wrap gap-2 text-xs text-slate-600">
        <span className="px-2 py-0.5 rounded-full border bg-indigo-50 border-indigo-200">Capítulo {idx + 1} / {total}</span>
        <span className="px-2 py-0.5 rounded-full border bg-indigo-50 border-indigo-200">Resumen</span>
        <span className="px-2 py-0.5 rounded-full border bg-indigo-50 border-indigo-200">Quiz</span>
      </div>

      <h3 className="font-bold mt-1">{chapter.title}</h3>
      <p className="mt-1">{chapter.summary}</p>

      <div className="flex gap-2 mt-3 flex-wrap">
        <button
          onClick={() => setActiveIndex(i => Math.max(0, i - 1))}
          disabled={idx === 0}
          className="border rounded-lg px-4 py-2 disabled:opacity-40 touch-manipulation"
          type="button"
        >
          ⟵ Anterior
        </button>
        <button
          onClick={() => setActiveIndex(i => Math.min(total - 1, i + 1))}
          disabled={idx === total - 1}
          className="border rounded-lg px-4 py-2 disabled:opacity-40 touch-manipulation"
          type="button"
        >
          Siguiente ⟶
        </button>
        <button
          onClick={() => setOpen(o => !o)}
          className="bg-red-600 text-white rounded-lg px-4 py-2 touch-manipulation"
          type="button"
        >
          {open ? 'Ocultar quiz' : 'Tomar quiz'}
        </button>
      </div>

      {open && (
        <div className="mt-3">
          <Quiz
            chapter={chapter}
            difficulty={difficulty}
            onResult={(passed) => { onPass(block.id, chapter.id, passed); }}
          />
        </div>
      )}
    </article>
  );
}

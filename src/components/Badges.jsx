import React from 'react';

export default function Badges({ content, progress }) {
  const blocks = content.map(b => {
    const entry = progress[b.id] || { done: {} };
    const passed = Object.values(entry.done).filter(Boolean).length;
    const total = b.chapters.length;
    const complete = passed === total && total > 0;
    return { id: b.id, title: b.title, emoji: b.emoji, passed, total, complete };
  });

  const totalStars = Object.values(progress).reduce((n, e) => n + (e?.stars || 0), 0);

  return (
    <div className="border rounded-xl p-4 bg-white">
      <h3 className="font-bold text-lg flex items-center gap-2">🏅 Insignias y estrellas</h3>
      <p className="text-sm text-slate-700">
        Consigue ⭐ aprobando capítulos (2/3). Completa todos los capítulos de un bloque para ganar una 🏅 insignia.
      </p>

      <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {blocks.map(b => (
          <div
            key={b.id}
            className={`border rounded-xl p-3 ${b.complete ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden>{b.emoji}</span>
              <div className="font-semibold text-sm flex-1">{b.title}</div>
              <span className="text-lg" aria-hidden>{b.complete ? '🏅' : '🎓'}</span>
            </div>
            <div className="text-xs text-slate-600 mt-1">
              {b.passed}/{b.total} capítulos aprobados
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-sm">⭐ Estrellas totales: <strong>{totalStars}</strong></div>
    </div>
  );
}

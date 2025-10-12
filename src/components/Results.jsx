import React from 'react';
import { colorFromPct } from '../lib/utils';

export default function Results({ content, progress, onReset }) {
  return (
    <section className="bg-white rounded-xl shadow-soft p-4">
      <h2 className="text-xl font-bold">Resultados</h2>
      <p className="text-slate-700">Resumen por bloque y capítulos aprobados.</p>

      <div className="mt-3 space-y-3">
        {content.map(b => {
          const entry = progress[b.id] || { done: {} };
          const total = b.chapters.length;
          const passed = Object.values(entry.done).filter(Boolean).length;
          const pct = total ? Math.round((passed / total) * 100) : 0;

          return (
            <article key={b.id} className="border rounded-xl p-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-hidden>{b.emoji}</span>
                <h3 className="font-bold flex-1">{b.title}</h3>
                <div className="text-sm">{pct}%</div>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden mt-2">
                <div className="h-full" style={{ width: `${pct}%`, background: colorFromPct(pct, b.color) }} />
              </div>
              <ul className="list-disc ml-6 mt-2 text-sm">
                {b.chapters.map(ch => (
                  <li key={ch.id} className={entry.done?.[ch.id] ? 'text-emerald-700' : 'text-slate-700'}>
                    {entry.done?.[ch.id] ? '✔' : '✖'} {ch.title}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="mt-4 flex gap-2">
        <button onClick={onReset} className="border rounded-lg px-3 py-2">Reiniciar progreso</button>
      </div>
    </section>
  );
}

import React from 'react';
import { colorFromPct } from '../lib/utils';

export default function Sidebar({
  blocks, onOpen, activeId, getBlockPct, search, setSearch
}) {
  return (
    <nav aria-label="Blocks" className="bg-white rounded-xl shadow-soft p-3">
      <div className="flex gap-2 mb-3">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="search"
          placeholder="Search…"
          aria-label="Search"
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button onClick={() => setSearch('')} className="px-3 py-2 rounded-lg border" type="button">✖</button>
      </div>

      <div role="list" className="space-y-2">
        {blocks.map(b => {
          const pct = getBlockPct(b);
          const q = (search || '').trim().toLowerCase();
          const match = !q || b.title.toLowerCase().includes(q) ||
            b.chapters.some(c => c.title.toLowerCase().includes(q));
          if (!match) return null;
          return (
            <button
              key={b.id}
              role="listitem"
              onClick={() => onOpen(b.id, 0)}
              className={`w-full text-left border rounded-xl p-2 flex gap-2 items-center ${
                activeId === b.id ? 'outline-2 outline-blue-900 bg-blue-50' : ''
              }`}
              type="button"
            >
              <span className="text-xl" aria-hidden>{b.emoji}</span>
              <div className="flex-1">
                <div className="font-bold">{b.title}</div>
                <div className="text-xs text-slate-600">{pct}%</div>
                <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full" style={{ width: `${pct}%`, background: colorFromPct(pct, b.color) }} />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-slate-600 mt-2">Tip: Tab + Enter. 📚</p>
    </nav>
  );
}

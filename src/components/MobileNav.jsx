import React from 'react';

export default function MobileNav({ blocks, activeBlockId, onChange, search, setSearch }) {
  return (
    <div className="md:hidden border rounded-xl p-3 bg-white shadow-soft">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Choose block</label>
        <select
          aria-label="Choose block"
          value={activeBlockId}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          {blocks.map(b => (
            <option key={b.id} value={b.id}>{b.emoji} {b.title}</option>
          ))}
        </select>

        <label className="text-sm font-semibold mt-2">Search</label>
        <input
          type="search"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          placeholder="Search topic…"
          className="border rounded-lg px-3 py-2"
        />
      </div>
    </div>
  );
}

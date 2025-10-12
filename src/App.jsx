import React from 'react';
import Sidebar from './components/Sidebar';
import ChapterCard from './components/ChapterCard';
import Results from './components/Results';
import Badges from './components/Badges';
import { CONTENT, BLOCK_ORDER } from './data/content';
import { useProgress } from './state/useProgress';
import { colorFromPct } from './lib/utils';

export default function App() {
  const { progress, overall, mark, getBlockPct, resetAll } = useProgress(CONTENT);
  const [activeBlockId, setActiveBlockId] = React.useState(BLOCK_ORDER[0]);
  const activeBlock = CONTENT.find(b => b.id === activeBlockId);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [search, setSearch] = React.useState('');
  const [difficulty, setDifficulty] = React.useState('easy'); // 'easy' | 'hard' | 'mixed'
  const [showResults, setShowResults] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false); // <— NEW

  React.useEffect(() => { setActiveIndex(0); }, [activeBlockId]);

  const pct = getBlockPct(activeBlock);
  const fillStyle = { width: `${pct}%`, background: colorFromPct(pct, activeBlock.color) };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-soft">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/40 px-2 py-1"
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <div className="text-2xl" aria-hidden>🇨🇺</div>
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight">
              Ajiaco Cultural: ¡Aprende y Juega con Cuba!
            </h1>
            <span className="ml-2 text-xs bg-white/15 px-2 py-0.5 rounded-full">Niños 7–12 · Accesible</span>
          </div>

          <div className="flex items-center gap-2">
            <div aria-live="polite" className="text-sm">
              Progreso general: <span className="font-bold">{overall}%</span>
            </div>
            <button
              onClick={() => setShowResults(s => !s)}
              className="hidden sm:inline-block ml-2 border border-white/60 text-white rounded-lg px-3 py-1.5"
            >
              {showResults ? 'Ocultar' : 'Ver resultados'}
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative max-w-6xl mx-auto px-4 py-4 grid gap-4 md:grid-cols-[300px_1fr]">
        {/* Desktop sidebar */}
        <div className="hidden md:block">
          <Sidebar
            blocks={CONTENT}
            onOpen={(id) => { setActiveBlockId(id); setShowResults(false); }}
            activeId={activeBlockId}
            getBlockPct={getBlockPct}
            search={search}
            setSearch={setSearch}
            onClose={() => {}}
            isMobile={false}
          />
        </div>

        {/* Mobile drawer sidebar */}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 z-50 flex"
            aria-modal="true"
            role="dialog"
          >
            {/* backdrop */}
            <button
              className="flex-1 bg-black/40"
              aria-label="Close menu backdrop"
              onClick={() => setSidebarOpen(false)}
            />
            {/* panel */}
            <div className="w-[85%] max-w-[320px] bg-white h-full shadow-2xl p-3 overflow-y-auto">
              <div className="flex items-center justify-between mb-2">
                <strong className="text-sm">Menú</strong>
                <button
                  className="rounded-lg border px-2 py-1"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close menu"
                >
                  ✖
                </button>
              </div>
              <Sidebar
                blocks={CONTENT}
                onOpen={(id) => { setActiveBlockId(id); setShowResults(false); setSidebarOpen(false); }}
                activeId={activeBlockId}
                getBlockPct={getBlockPct}
                search={search}
                setSearch={setSearch}
                onClose={() => setSidebarOpen(false)}
                isMobile
              />
            </div>
          </div>
        )}

        {/* Content */}
        <section className="space-y-4">
          <div className="bg-white rounded-xl shadow-soft p-4">
            <div className="border rounded-xl p-3 bg-gradient-to-tr from-blue-100 to-white">
              <div className="flex items-center gap-3">
                <div className="text-3xl" aria-hidden>🏝️🥁📖✨</div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold">{activeBlock.title}</h2>
                  <p className="text-slate-700">Progresión paso a paso con quizzes y retroalimentación inmediata.</p>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <div className="inline-flex items-center gap-2 text-xs border rounded-full px-2 py-0.5 bg-white">
                      Dificultad:
                      <select
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)}
                        className="border rounded px-1 py-0.5"
                      >
                        <option value="easy">Fácil</option>
                        <option value="hard">Difícil</option>
                        <option value="mixed">Mixta</option>
                      </select>
                    </div>

                    <button
                      onClick={() => setShowResults(s => !s)}
                      className="sm:hidden border border-slate-300 rounded-lg px-3 py-1.5 text-sm"
                    >
                      {showResults ? 'Ocultar resultados' : 'Ver resultados'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden mt-3">
                <div className="h-full transition-all" style={fillStyle} />
              </div>
            </div>
          </div>

          {showResults ? (
            <>
              <Results content={CONTENT} progress={progress} onReset={resetAll} />
              <Badges content={CONTENT} progress={progress} />
            </>
          ) : (
            <div className="space-y-3">
              {activeBlock.chapters.map((ch, idx) => (
                <ChapterCard
                  key={ch.id}
                  block={activeBlock}
                  chapter={ch}
                  isActive={idx === activeIndex}
                  setActiveIndex={setActiveIndex}
                  idx={idx}
                  total={activeBlock.chapters.length}
                  color={activeBlock.color}
                  onPass={mark}
                  difficulty={difficulty}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-8 text-slate-600">
        Hecho con ❤️ para niños curiosos. Accesible con teclado y lector de pantalla.
      </footer>
    </div>
  );
}

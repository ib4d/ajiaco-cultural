import React from "react";
import Quiz from "./Quiz";
import AudioButton from "./AudioButton";

export default function SubtopicCard({
  blockId,
  chapterId,
  subtopic,
  idx,
  total,
  setSubIndex,
  difficulty,
  onPass
}) {
  return (
    <article className="border rounded-xl p-4 bg-white/90">
      <div className="flex flex-wrap gap-2 text-xs text-slate-600">
        <span className="px-2 py-0.5 rounded-full border bg-indigo-50 border-indigo-200">
          Subtema {idx + 1} / {total}
        </span>
        <span className="px-2 py-0.5 rounded-full border bg-indigo-50 border-indigo-200">
          Resumen
        </span>
        <span className="px-2 py-0.5 rounded-full border bg-indigo-50 border-indigo-200">
          Quiz
        </span>
      </div>

      <h3 className="font-bold mt-1">{subtopic.title}</h3>
      <p className="mt-1">{subtopic.summary}</p>
      <div className="mt-2">
        <AudioButton text={`${subtopic.title}. ${subtopic.summary}`} />
      </div>

      {/* subtopic navigation */}
      <div className="flex gap-2 mt-3 flex-wrap">
        <button
          type="button"
          onClick={() => setSubIndex(i => Math.max(0, i - 1))}
          className="border rounded-lg px-4 py-2 disabled:opacity-40"
          disabled={idx === 0}
        >
          ⟵ Anterior
        </button>
        <button
          type="button"
          onClick={() => setSubIndex(i => Math.min(total - 1, i + 1))}
          className="border rounded-lg px-4 py-2 disabled:opacity-40"
          disabled={idx === total - 1}
        >
          Siguiente ⟶
        </button>
      </div>

      <div className="mt-4">
        <Quiz
          titleForAudio={`${subtopic.title}: preguntas`}
          quiz={subtopic.quiz}
          difficulty={difficulty}
          onResult={(passed) => onPass(blockId, chapterId, subtopic.id, passed)}
        />
      </div>
    </article>
  );
}

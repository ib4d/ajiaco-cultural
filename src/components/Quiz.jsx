import React, { useMemo, useState } from 'react';

function sampleThree(questions) {
  const arr = [...questions];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, 3);
}

export default function Quiz({ chapter, difficulty, onResult }) {
  const pool = useMemo(
    () => chapter.quiz.filter(q => difficulty === 'mixed' || q.difficulty === difficulty),
    [chapter, difficulty]
  );
  const questions = useMemo(() => sampleThree(pool.length ? pool : chapter.quiz), [pool, chapter]);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    let s = 0;
    questions.forEach((q, idx) => {
      const v = answers[idx];
      const corr = String(q.answer) === String(v);
      if (corr) s++;
    });
    setScore(s);
    setSubmitted(true);
    onResult?.(s >= 2);
  };

  return (
    <div className="border border-slate-200 rounded-xl p-3">
      <h4 className="font-bold">Quiz (3 preguntas)</h4>
      <form onSubmit={handleSubmit} className="space-y-3">
        {questions.map((q, i) => (
          <div key={i}>
            <div className="inline-block text-xs rounded-full border px-2 py-0.5 bg-cyan-50 border-cyan-200 text-cyan-800">
              Pregunta {i + 1}/3
            </div>
            <div className="mt-1">{q.question}</div>
            <div className="grid gap-2 mt-2">
              {q.type === 'tf' ? (
                ['true', 'false'].map((val, idx) => (
                  <label key={idx} className="flex gap-2 border rounded-lg p-2 items-start">
                    <input
                      type="radio"
                      name={`q${i}`}
                      value={val === 'true'}
                      onChange={(e) => setAnswers(a => ({ ...a, [i]: e.target.value }))}
                    />
                    <span>{val === 'true' ? 'Verdadero' : 'Falso'}</span>
                  </label>
                ))
              ) : (
                q.options.map((opt, idx) => (
                  <label key={idx} className="flex gap-2 border rounded-lg p-2 items-start">
                    <input
                      type="radio"
                      name={`q${i}`}
                      value={idx}
                      onChange={(e) => setAnswers(a => ({ ...a, [i]: e.target.value }))}
                    />
                    <span>{opt}</span>
                  </label>
                ))
              )}
            </div>
          </div>
        ))}
        <div className="flex gap-2">
          <button type="submit" className="bg-red-600 text-white rounded-lg px-3 py-2">Enviar respuestas</button>
          <button
            type="button"
            className="border rounded-lg px-3 py-2"
            onClick={() => { setAnswers({}); setSubmitted(false); setScore(0); }}
          >
            Reiniciar
          </button>
        </div>
      </form>

      {submitted && (
        <div className="border-t mt-3 pt-3">
          <p>
            <strong>Resultado:</strong> {score}/3 ({Math.round((score / 3) * 100)}%). {score >= 2 ? '¡Bien hecho! ⭐' : 'Sigue practicando 💪'}
          </p>
          <ul className="list-disc ml-6 mt-1">
            {questions.map((q, i) => (
              <li key={i}>
                {q.type === 'tf' ? (q.answer ? 'Verdadero' : 'Falso') : `Opción correcta: ${q.options[q.answer]}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

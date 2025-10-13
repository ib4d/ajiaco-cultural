import React, { useMemo, useState } from "react";
import AudioButton from "./AudioButton";

// Fisher–Yates shuffle (pure)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz({ quiz, difficulty = "mixed", onResult, titleForAudio = "Quiz" }) {
  // Build exactly 3 questions:
  // 1) Take as many as possible from the chosen difficulty (unless 'mixed').
  // 2) If fewer than 3, top up from the remaining questions.
  // 3) Shuffle the final set for variety.
  const questions = useMemo(() => {
    if (!Array.isArray(quiz) || quiz.length === 0) return [];

    const primary =
      difficulty === "mixed" ? [...quiz] : quiz.filter((q) => q.difficulty === difficulty);

    let out = shuffle(primary);

    if (out.length < 3) {
      const remainder = shuffle(quiz.filter((q) => !out.includes(q)));
      out = [...out, ...remainder].slice(0, 3);
    } else {
      out = out.slice(0, 3);
    }

    return out;
  }, [quiz, difficulty]);

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    let s = 0;
    questions.forEach((q, idx) => {
      const v = answers[idx];
      const correct =
        q.type === "tf"
          ? String(q.answer) === String(v) // boolean "true"/"false" vs true/false
          : String(q.answer) === String(v); // answer is index number
      if (correct) s++;
    });
    setScore(s);
    setSubmitted(true);
    onResult?.(s >= 2); // pass on 2/3
  };

  return (
    <div className="border border-slate-200 rounded-xl p-3">
      <div className="flex items-center justify-between">
        <h4 className="font-bold">Quiz (3 preguntas)</h4>
        <AudioButton text={titleForAudio} label="Leer título del quiz" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 mt-2">
        {questions.map((q, i) => (
          <div key={i}>
            <div className="inline-flex items-center gap-2">
              <div className="inline-block text-xs rounded-full border px-2 py-0.5 bg-cyan-50 border-cyan-200 text-cyan-800">
                Pregunta {i + 1}/3
              </div>
              <AudioButton
                text={q.type === "tf" ? `Verdadero o falso: ${q.question}` : q.question}
                label="Leer en voz alta"
              />
            </div>

            <div className="mt-1">{q.question}</div>

            <div className="grid gap-2 mt-2">
              {q.type === "tf" ? (
                ["true", "false"].map((val, idx) => (
                  <label key={idx} className="flex gap-2 border rounded-lg p-2 items-start">
                    <input
                      type="radio"
                      name={`q${i}`}
                      value={val}
                      onChange={(e) =>
                        setAnswers((a) => ({ ...a, [i]: e.target.value }))
                      }
                    />
                    <span>{val === "true" ? "Verdadero" : "Falso"}</span>
                  </label>
                ))
              ) : (
                q.options.map((opt, idx) => (
                  <label key={idx} className="flex gap-2 border rounded-lg p-2 items-start">
                    <input
                      type="radio"
                      name={`q${i}`}
                      value={idx}
                      onChange={(e) =>
                        setAnswers((a) => ({ ...a, [i]: e.target.value }))
                      }
                    />
                    <span>{opt}</span>
                  </label>
                ))
              )}
            </div>
          </div>
        ))}

        <div className="flex gap-2">
          <button type="submit" className="bg-red-600 text-white rounded-lg px-3 py-2">
            Enviar respuestas
          </button>
          <button
            type="button"
            className="border rounded-lg px-3 py-2"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
              setScore(0);
            }}
          >
            Reiniciar
          </button>
        </div>
      </form>

      {submitted && (
        <div className="border-t mt-3 pt-3">
          <p>
            <strong>Resultado:</strong> {score}/3 ({Math.round((score / 3) * 100)}%).{" "}
            {score >= 2 ? "¡Bien hecho! ⭐" : "Sigue practicando 💪"}
          </p>
          <ul className="list-disc ml-6 mt-1">
            {questions.map((q, i) => (
              <li key={i}>
                {q.type === "tf"
                  ? q.answer ? "Verdadero" : "Falso"
                  : `Opción correcta: ${q.options[q.answer]}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

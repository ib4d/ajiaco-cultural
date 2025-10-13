import React from "react";
import { useTTS } from "../hooks/useTTS";

export default function AudioButton({ text, label = "Leer en voz alta" }) {
  const { toggle, stop, supported } = useTTS();
  if (!supported) return null;

  return (
    <div className="inline-flex items-center gap-2">
      <button type="button" onClick={() => toggle(text)} className="border rounded-lg px-2 py-1 text-sm">
        🔊 {label}
      </button>
      <button type="button" onClick={stop} className="border rounded-lg px-2 py-1 text-sm">
        ⏹️ Detener
      </button>
    </div>
  );
}

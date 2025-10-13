import React from "react";

/** Small TTS helper using the browser's Web Speech API */
export default function SpeakButton({ text, label = "Escuchar" }) {
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

  const speak = () => {
    if (!canSpeak || !text) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    // Try Spanish voice if available
    const v = window.speechSynthesis.getVoices().find(vo => vo.lang?.startsWith("es"));
    if (v) u.voice = v;
    u.rate = 1; u.pitch = 1; u.volume = 1;
    window.speechSynthesis.speak(u);
  };

  return (
    <button
      type="button"
      onClick={speak}
      disabled={!canSpeak}
      className="border rounded-lg px-2 py-1 text-xs disabled:opacity-50"
      aria-label={label}
      title={label}
    >
      🔊 {label}
    </button>
  );
}

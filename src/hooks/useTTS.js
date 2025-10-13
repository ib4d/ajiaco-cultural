// Simple, offline-friendly TTS (Web Speech API) with queue support.
// Prefers Spanish voices. Polish hints will read with the same voice.
//
// API:
// const { supported, speak(text), speakMany(arrayOfStrings), stop, toggle(text) } = useTTS();

import { useEffect, useRef, useState } from "react";

export function useTTS() {
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
  const [ready, setReady] = useState(false);
  const voiceRef = useRef(null);
  const queueRef = useRef([]);

  useEffect(() => {
    if (!synth) return;
    const pick = () => {
      const voices = synth.getVoices();
      voiceRef.current =
        voices.find(v => /es-|Spanish/i.test(v.lang)) ||
        voices.find(v => /^es/i.test(v.lang)) ||
        voices[0] || null;
      setReady(true);
    };
    pick();
    synth.onvoiceschanged = pick;
  }, [synth]);

  const makeUtter = (text) => {
    const u = new SpeechSynthesisUtterance(text);
    if (voiceRef.current) u.voice = voiceRef.current;
    u.rate = 1; u.pitch = 1;
    return u;
  };

  const stop = () => {
    if (synth?.speaking) synth.cancel();
    queueRef.current = [];
  };

  const speak = (text = "") => {
    if (!synth || !ready || !text) return;
    stop();
    synth.speak(makeUtter(text));
  };

  const speakMany = (items = []) => {
    if (!synth || !ready || !items.length) return;
    stop();
    queueRef.current = items.filter(Boolean).map(makeUtter);

    const playNext = () => {
      const next = queueRef.current.shift();
      if (!next) return;
      next.onend = playNext;
      synth.speak(next);
    };
    playNext();
  };

  const toggle = (text) => {
    if (!synth) return;
    if (synth.speaking) stop();
    else speak(text);
  };

  return { supported: !!synth, speak, speakMany, stop, toggle };
}

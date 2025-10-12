export const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

export const colorFromPct = (pct, base) => {
  const hue = String(base).includes('rojo') ? 0 : 215; // red/blue-ish
  const light = 85 - (pct * 0.55);
  return `hsl(${hue} 90% ${light}%)`;
};

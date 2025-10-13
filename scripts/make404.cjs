// scripts/make404.cjs
// Copies dist/index.html -> dist/404.html for GitHub Pages SPA fallback.
// Works on Windows, macOS, Linux (pure Node).

import fs from 'fs';
import path from 'path';
const dist = path.resolve('dist');
const src = path.join(dist, 'index.html');
const dst = path.join(dist, '404.html');

if (!fs.existsSync(dist)) {
  console.error('dist/ not found. Did the build run?');
  process.exit(1);
}

fs.copyFileSync(src, dst);
console.log('Created dist/404.html');

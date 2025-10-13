// Copies dist/index.html -> dist/404.html for SPA fallback on GitHub Pages.
const fs = require('fs');
const path = require('path');

const dist = path.resolve('dist');
const src = path.join(dist, 'index.html');
const dst = path.join(dist, '404.html');

if (!fs.existsSync(dist)) {
  console.error('dist/ not found. Did the build run?');
  process.exit(1);
}
if (!fs.existsSync(src)) {
  console.error('dist/index.html not found.');
  process.exit(1);
}

fs.copyFileSync(src, dst);
console.log('Created dist/404.html');

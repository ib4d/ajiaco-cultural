## Deploying to GitHub Pages

This project is configured for `https://ib4d.github.io/ajiaco-cultural/`.

- `vite.config.js` sets: `base: '/ajiaco-cultural/'`
- After build we create `dist/404.html` for SPA fallback

### One-time GitHub repo setup
1. Push to a GitHub repo named **ajiaco-cultural** under **ib4d**.
2. In **Settings → Pages**, choose **Build and deployment: GitHub Actions**.
3. Ensure the workflow file exists: `.github/workflows/deploy.yml`.

### Deploy on every push to main
```bash
npm ci
npm run build
git add -A
git commit -m "Build ready"
git push

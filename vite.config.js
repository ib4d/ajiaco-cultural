import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// !!! change this to your repo name:
const repoName = 'ajiaco-cultural'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})

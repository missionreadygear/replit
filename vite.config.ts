import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Correct config for GitHub Pages deployment
export default defineConfig({
  base: './', // 👈 use relative paths, not /mrg-site-v2/
  build: {
    outDir: 'docs',       // output directly into docs/
    emptyOutDir: true,    // clears old builds safely
  },
  plugins: [react()],
})

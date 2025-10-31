import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mrg-site-v2/',   // 👈 this matches your GitHub Pages repo name
  build: {
    outDir: '.',           // 👈 output directly to root
    emptyOutDir: false,    // 👈 prevent deleting your source files
  },
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/calci/',
  server: { port: 6969 },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  },
})

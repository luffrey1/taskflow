import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/taskflow/', // Cambiado para luffrey1.github.io/taskflow
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    open: true
  }
})

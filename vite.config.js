// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
    extensions: ['.js', '.jsx'],
  },
  // Configuración para desarrollo
  server: {
    port: 3000,
    open: true
  },
  // Configuración para build
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
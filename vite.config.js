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
//Dios te bendiga y te guarde. Que el Señor haga resplandecer su rostro sobre ti y tenga de ti misericordia. Que el Señor alce sobre ti su rostro y ponga en ti paz. Números 6:24-26
//Dios me los bendiga a todos. Que tengan un excelente día.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://backend-port-1-r2t2.onrender.com/',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'https://backend-port-1-r2t2.onrender.com/',
        changeOrigin: true,
      }
    }
  }
})

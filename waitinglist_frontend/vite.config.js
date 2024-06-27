import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Using the proxy to bypass CORS issues
      '/emails': {
        target: 'https://waitinglist-backend.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/emails/, '')
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      '@assets': '/src/ui/assets',
      '@components': '/src/ui/components',
      '@pages': '/src/ui/pages',
      '@hooks': '/src/ui/hooks',
      '@domain': '/src/domain',
      '@data': '/src/data',
      '@api': '/src/data/api'
    }
  }
})

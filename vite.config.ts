import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  // Thêm vào để đưa về link chạy google từ 5173 về 3000
  server: {
    port: 5173,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      component: path.resolve(__dirname, './src/component'),
      constant: path.resolve(__dirname, './src/constant'),
      hooks: path.resolve(__dirname, './src/hooks'),
      pages: path.resolve(__dirname, './src/pages'),
      router: path.resolve(__dirname, './src/router'),
      schema: path.resolve(__dirname, './src/schema'),
      services: path.resolve(__dirname, './src/services'),
      store: path.resolve(__dirname, './src/store'),
      type: path.resolve(__dirname, './src/type'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [react()]
})

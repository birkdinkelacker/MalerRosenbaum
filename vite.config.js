import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  input: {
    home: resolve(import.meta.dirname, 'index.html'),
    impressum: resolve(import.meta.dirname, 'impressum.html'),
    datenschutz: resolve(import.meta.dirname, 'datenschutz.html'),
  },
})

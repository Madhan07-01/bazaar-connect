import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ❌ Do NOT set base for Netlify
  // base: './' → REMOVE this
})

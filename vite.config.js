import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // bind to IPv4 explicitly — the default (localhost -> ::1) is unreachable here
    host: '127.0.0.1',
    port: 8080,
    strictPort: true,
    open: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 8080,
    strictPort: true,
  },
})

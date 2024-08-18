import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['firebase/firestore'],
    },
  },
  resolve: {
    alias: {
      'firebase/firestore': resolve(__dirname, 'node_modules/firebase/firestore'),
    },
  },
  plugins: [react()],
  base: "/jessadaporn-portfolio/"
})

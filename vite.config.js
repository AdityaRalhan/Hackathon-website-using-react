import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Externalize framer-motion to avoid bundling issues
      external: ['framer-motion']
    }
  },
  resolve: {
    // Ensure framer-motion can be resolved correctly
    alias: {
      'framer-motion': 'node_modules/framer-motion'
    }
  }
})

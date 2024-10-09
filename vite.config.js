import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Ensure that the entry point is correctly specified
      input: '/src/main.jsx',
      // Optional: You can also externalize certain dependencies if needed
      external: [], // Add any external dependencies here, if applicable
    },
    // Optional: Specify the output directory if you need to change the default
    outDir: 'dist', // Change to your desired output directory
  },
  resolve: {
    alias: {
      // Optional: Set up aliases if you're using a complex file structure
      '@': '/src',
    },
  },
})

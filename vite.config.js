import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ============================================================
// GITHUB PAGES CONFIGURATION
// ============================================================
// STEP 1: Replace 'your-repo-name' below with your actual
//         GitHub repository name (NOT your username).
//
//         Example: if your repo URL is
//         https://github.com/nhatuyen-sec/fcaj-portfolio
//         then set base: '/fcaj-portfolio/'
//
// STEP 2: Push to GitHub and the Action will deploy automatically.
// ============================================================

const GITHUB_REPO_NAME = 'web-worklog-fcaj' // ← GitHub repository name

export default defineConfig({
  plugins: [react()],
  // Use '/' for local dev, '/repo-name/' for GitHub Pages
  base: process.env.NODE_ENV === 'production' ? `/${GITHUB_REPO_NAME}/` : '/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
        },
      },
    },
  },
})

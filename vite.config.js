import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'card-light': '#ffffff',
        'card-dark': '#1f2937'
      }
    }
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ]
})

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/gaable-meet-tailwindcss-learning/',
  plugins: [
    tailwindcss(),
  ],
})
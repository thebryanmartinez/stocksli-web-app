/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{tsx,ts}'],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['dark']
  }
}

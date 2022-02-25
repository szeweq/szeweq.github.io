import { defineConfig, transform } from 'windicss/helpers'

const palette = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
const sheets = Object.fromEntries(palette.map((p, i) => [
  `sheet-${i}`,
  `bg-gray-${p} dark:bg-gray-${palette[palette.length - i - 1]}`,
]))
const tint = (c: string) => `bg-${c}-100 text-${c}-800 dark:(bg-${c}-900 text-${c}-200) hover:(bg-${c}-300 dark:bg-${c}-700) active:(bg-${c}-400 dark:bg-${c}-600)`

export default defineConfig({
  darkMode: 'media',
  preflight: true,
  shortcuts: {
    ...sheets,
    'tint-teal': tint('teal'),
    'icon-btn': 'p-2 rounded-lg flex hover:bg-gray-300 dark:hover:bg-gray-700',
    'input-box': 'dark:bg-black',
    'nav-link': 'm-1 py-2 px-4 md:px-2 rounded-lg flex flex-col items-center hover:bg-gray-300 dark:hover:bg-gray-700',
    'nav-link-active': 'bg-gray-700 dark:bg-gray-300 text-white dark:text-black hover:bg-gray-600 dark:hover:bg-gray-400',
  },
  safelist: [
    'tint-teal',
    // ...Object.keys(sheets),
  ],
  plugins: [
    require('windicss/plugin/forms'),
    transform('daisyui')
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
})
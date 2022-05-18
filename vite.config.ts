import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}`
    }
  },
  plugins: [
    Vue(),
    createHtmlPlugin({
      minify: true,
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', {'@vueuse/core': ['useFetch', 'useToggle', 'useTimeAgo']}]
    }),
    VitePWA({
      registerType: 'autoUpdate',
    })
  ],
  optimizeDeps: {
    include: ['vue', '@vueuse/core']
  }
})

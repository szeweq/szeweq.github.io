import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}`
    }
  },
  plugins: [
    Vue(),
    Pages(),
    Components({
      dts: 'src/components.d.ts',
    }),
    Layouts(),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router', '@vueuse/core']
    }),
    WindiCSS(),
    VitePWA({
      registerType: 'autoUpdate',
    })
  ],
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core']
  }
})

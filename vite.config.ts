import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import generateSitemap from 'vite-plugin-pages-sitemap'
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
    Pages({
      onRoutesGenerated(routes) {
        generateSitemap({ routes, hostname: 'https://szeweq.github.io/' })
      }
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router', {'@vueuse/core': ['useFetch', 'useToggle', 'useTimeAgo']}]
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

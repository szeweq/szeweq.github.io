import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import pages from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles.css'
import 'virtual:windi-utilities.css'

const app = createApp(App)
const routes = setupLayouts(pages)
const router = createRouter({
    history: createWebHistory(),
    routes
})
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')

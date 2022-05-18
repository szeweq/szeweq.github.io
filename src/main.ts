import { createApp } from 'vue'
//import { createRouter, createWebHashHistory } from 'vue-router'
//import { createPinia } from 'pinia'
//import routes from '~pages'
//import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

import './styles.css'

const app = createApp(App)
//const routes = setupLayouts(pages)
//const router = createRouter({
//    history: createWebHashHistory(),
//    routes
//})
//const pinia = createPinia()
//app.use(router)
//app.use(pinia)
app.mount('#app')

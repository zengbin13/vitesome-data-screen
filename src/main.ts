import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import { setupPermissions } from '~/router/permissions'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

import 'echarts'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
setupPermissions(router)
app.use(router)
app.mount('#app')

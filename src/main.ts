import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import router from './router'
import App from './App.vue'
import { router } from './helpers'
import { fakeBackend } from './helpers'

const app = createApp(App)
// fakeBackend()
app.use(createPinia(), fakeBackend())
app.use(router)
app.mount('#app')

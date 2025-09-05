import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 方案B：通过 alias 直接指向源码
import ElementPlusX from 'vue-element-plus-x'
console.log(ElementPlusX);


const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(ElementPlusX)

app.mount('#app')

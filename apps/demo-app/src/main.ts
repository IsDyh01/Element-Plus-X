import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(ElementPlusX as unknown as ObjectPlugin, {
//     locale: zhCn,
//     elementPlusContext: {
//         locale: zhCnElementPlus
//     }
// })

app.mount('#app')

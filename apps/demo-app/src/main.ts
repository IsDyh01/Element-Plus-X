import './assets/main.css'

import { createApp, type ObjectPlugin } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 方案B：通过 alias 直接指向源码
import ElementPlusX from 'vue-element-plus-x'
import { zhCn, en } from 'vue-element-plus-x/locale'
import zhCnElementPlus from 'element-plus/es/locale/lang/zh-cn'
import enElementPlus from 'element-plus/es/locale/lang/en'
console.log(ElementPlusX);


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlusX as unknown as ObjectPlugin, {
    locale: en,
    elementPlusContext: {
        locale: enElementPlus
    }
})

app.mount('#app')

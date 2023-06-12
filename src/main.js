//import './assets/main.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import App from './App.vue'

// 创建实例
import router from './router'

import { createPinia } from 'pinia'


const app = createApp(App); //确保 _use_ 路由实例使整个应用支持路由。

const pinia = createPinia()

app.use(pinia)
app.use(router); // 挂载router,完成
app.mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
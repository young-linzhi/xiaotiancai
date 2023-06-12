//import './assets/main.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import App from './App.vue'

// ����ʵ��
import router from './router'

import { createPinia } from 'pinia'


const app = createApp(App); //ȷ�� _use_ ·��ʵ��ʹ����Ӧ��֧��·�ɡ�

const pinia = createPinia()

app.use(pinia)
app.use(router); // ����router,���
app.mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
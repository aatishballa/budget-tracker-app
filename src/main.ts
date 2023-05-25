import './assets/base.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, FaChartLine, FaUser} from "oh-vue-icons/icons";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


addIcons(FaFlag, FaChartLine, FaUser);

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component("VIcon", OhVueIcon);
app.mount('#app')

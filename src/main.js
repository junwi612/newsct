import router from './router'
import './assets/css/tailwind-dark.min.css'
import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(router); 
app.mount('#app');

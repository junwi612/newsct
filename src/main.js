import router from './router'
import './assets/tailwind-dark.min.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(router); 
app.mount('#app');

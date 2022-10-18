import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';

import './assets/app.scss'
import '@fortawesome/fontawesome-free/js/all.js';

const emitter = mitt();

const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.mount('#app')
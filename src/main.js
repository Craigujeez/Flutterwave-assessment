import './scss/fonts.scss';
import './scss/main.scss';
import './scss/global/colors.scss';
import './scss/global/normalize.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

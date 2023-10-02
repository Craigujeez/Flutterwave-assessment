import 'normalize.css/normalize.css';
import './scss/fonts.scss';
import './scss/main.scss';
import './scss/global/colors.scss';
import './scss/global/normalize.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Loader from './components/Loader.vue'; 

const app = createApp(App)

app.use(router)
app.component('Loader', Loader);

app.mount('#app')

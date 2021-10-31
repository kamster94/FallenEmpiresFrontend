import { createApp } from 'vue';

import router from './router';
import store from './store';
import App from './App.vue';

import FontAwesomeIcon from '@/plugins/FontAwesomeIcons';

import './assets/tailwind.css';

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');

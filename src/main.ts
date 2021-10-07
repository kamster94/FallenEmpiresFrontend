import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import FontAwesomeIcon from '@/plugins/fontawesome-icons';
import './assets/tailwind.css';

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
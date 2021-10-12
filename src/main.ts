import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import FontAwesomeIcon from '@/plugins/fontawesome-icons';
import './assets/tailwind.css';

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app');

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foundry',
    name: 'Foundry',
    component: Home,
    beforeEnter() {
      window.open('http://vtt.fallenempires.eu:30000/join', '_blank');
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Home
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    component: Home
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Home,
    children: [
      {
        path: 'character-creation',
        name: 'Character creation',
        component: Home
      },
      {
        path: 'ancestries',
        name: 'Ancestries',
        component: Home
      }
    ]
  },
  {
    path: '/setting',
    name: 'Setting',
    component: About
  },
  {
    path: '/misc',
    name: 'Misc',
    component: Home
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

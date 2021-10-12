import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Foundry from '../views/Foundry.vue';
import Error404 from '../views/Error404.vue';
import Rules from '../views/Rules.vue';
import Ancestries from '../views/Ancestries.vue';
import Ancestry from '../views/Ancestry.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foundry',
    name: 'Foundry',
    component: Foundry,
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
    component: Rules,
    children: [
      {
        path: 'character-creation',
        name: 'Character creation',
        component: Home
      },
      {
        path: 'ancestries',
        name: 'Ancestries',
        component: Ancestries,
        children: [
          {
            path: ':name',
            name: 'Ancestry',
            component: Ancestry
          }
        ]
      }
    ]
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Home
  },
  {
    path: '/misc',
    name: 'Misc',
    component: Home
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: Error404
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

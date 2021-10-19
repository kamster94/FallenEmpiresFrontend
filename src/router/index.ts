import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Foundry from '../views/Foundry.vue';
import Error404 from '../views/Error404.vue';
import CategoryRouter from '../views/CategoryRouter.vue';
import Ancestries from '../views/Ancestries.vue';
import Ancestry from '../views/Ancestry.vue';
import ContentPage from '../views/ContentPage.vue';
import Heritages from '../views/Heritages.vue';
import Feats from '../views/Feats.vue';

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
    component: CategoryRouter,
    redirect: '/',
    children: [
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
      },
      {
        path: 'heritages',
        name: 'Heritages',
        component: Heritages
      },
      {
        path: 'feats',
        name: 'Feats',
        component: Feats
      },
      {
        path: ':name',
        name: 'Rules Page',
        component: ContentPage
      }
    ]
  },
  {
    path: '/setting',
    name: 'Setting',
    component: CategoryRouter,
    redirect: '/',
    children: [
      {
        path: ':name',
        name: 'Setting Page',
        component: ContentPage
      }
    ]
  },
  {
    path: '/misc',
    name: 'Misc',
    component: CategoryRouter,
    redirect: '/'
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

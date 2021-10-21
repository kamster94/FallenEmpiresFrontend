import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Foundry from '../views/Foundry.vue';
import Error404 from '../views/Error404.vue';
import CategoryRouter from '../views/CategoryRouter.vue';
import Ancestries from '../views/Ancestries.vue';
import Ancestry from '../views/Ancestry.vue';
import ContentPage from '../views/ContentPage.vue';
import Heritages from '../views/Heritages.vue';
import Feats from '../views/Feats.vue';
import Blog from '../views/Blog.vue';
import Campaigns from '../views/Campaigns.vue';
import Backgrounds from '../views/Backgrounds.vue';
import Cultures from '../views/Cultures.vue';
import Languages from '../views/Languages.vue';
import Locations from '../views/Locations.vue';
import Releases from '../views/Releases.vue';

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
    component: Blog
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    component: Campaigns
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
        path: 'cultures',
        name: 'Cultures',
        component: Cultures
      },
      {
        path: 'backgrounds',
        name: 'Backgrounds',
        component: Backgrounds
      },
      {
        path: 'languages',
        name: 'Languages',
        component: Languages
      },
      {
        path: 'locations',
        name: 'Locations',
        component: Locations
      },
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
    redirect: '/',
    children: [
      {
        path: 'releases',
        name: 'Releases',
        component: Releases
      },
      {
        path: ':name',
        name: 'Misc Page',
        component: ContentPage
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    component: Error404
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

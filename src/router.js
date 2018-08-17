'use strict';

// Рабочие файлы
import Vue from 'vue';
import Router from 'vue-router';

// Компоненты
import Home from './views/Home.vue';
import Examples from './views/Examples.vue';
import Grid from './views/Grid.vue';
import FirebaseGallery from './views/FirebaseGallery.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'active-page',
  linkExactActiveClass: 'current-page',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/examples',
      name: 'examples',
      component: Examples,
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid,
    },
    {
      path: '/firebase-gallery',
      name: 'firebase-gallery',
      component: FirebaseGallery,
    },
  ],
});

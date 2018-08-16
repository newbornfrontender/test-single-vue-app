'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Examples from './views/Examples.vue';
import Grid from './views/Grid.vue';

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
  ],
});

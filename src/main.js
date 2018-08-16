'use strict';

// Стили
import './assets/main.css';

// Рабочие файлы
import Vue from 'vue';
import App from './App.vue';

// Роутер
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

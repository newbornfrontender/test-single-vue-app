'use strict';

// Стили
import './assets/main.css';

// Рабочие файлы
import Vue from 'vue';
import App from './App.vue';

// Роутер
import router from './router';

// Firebase
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire);

firebase.initializeApp({
  apiKey: 'AIzaSyAbrOXqjsQ2k78mp_TcY4BbA8FB4uG6L5U',
  authDomain: 'fir-gallery-fb577.firebaseapp.com',
  databaseURL: 'https://fir-gallery-fb577.firebaseio.com',
  projectId: 'fir-gallery-fb577',
  storageBucket: 'fir-gallery-fb577.appspot.com',
  messagingSenderId: '1073425977658',
});

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

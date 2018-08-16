<template>
  <section class="container">
    <Greeting class="component--first"/>
    <Todo class="component--second"/>
  </section>
</template>

<script>
'use strict';

import Greeting from '../components/Examples/Greeting.vue';
import Todo from '../components/Examples/Todo.vue';

export default {
  components: {
    Greeting,
    Todo,
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #42b983;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 15px;
  padding: 15px;
}

.component {
  padding: 10px;
  color: #fff;
  background-color: #35495d;
  border-radius: 10px;
  box-sizing: border-box;
}

.title {
  color: #fff;
}
</style>

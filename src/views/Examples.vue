<template>
  <section class="example-container">
    <Greeting class="example--first"/>
    <Todo class="example--second"/>
    <Users class="example--third"/>
  </section>
</template>

<script>
'use strict';

// Компоненты
import Greeting from '../components/Examples/Greeting.vue';
import Todo from '../components/Examples/Todo.vue';
import Users from '../components/Examples/Users.vue';

export default {
  components: {
    Greeting,
    Todo,
    Users,
  },
};
</script>

<style>
.example-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 15px;
  padding: 15px;
}

.card {
  padding: 10px;
  color: #fff;
  background-color: #35495d;
  border-radius: 10px;
  box-sizing: border-box;
}
</style>

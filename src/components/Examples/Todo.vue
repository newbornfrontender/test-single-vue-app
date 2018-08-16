<template>
  <article id="todo" class="card">
    <h2 class="title">{{ title }}</h2>
    <ol class="list todo-list">
      <li
        class="list__item todo-list__item"
        v-for="( item, index ) in todo"
        v-bind:key="item.id"
        v-bind:class="`todo-list__item--${ index + 1 }`"
      >
        <span class="todo-list__inner todo-list__inner--number">{{ index + 1 }}</span>
        <span class="todo-list__inner">{{ item.text }}</span>
      </li>
    </ol>
  </article>
</template>

<script>
'use strict';

export default {
  data() {
    return {
      title: 'ToDo список',
      todo: [
        {
          id: 'first-item',
          text: 'Изучить JavaScript',
        },
        {
          id: 'second-item',
          text: 'Изучить Vue',
        },
        {
          id: 'third-item',
          text: 'Создать что-нибудь классное',
        },
      ],
    };
  },
};
</script>

<style>
.todo-list {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.todo-list__item {
  display: flex;
  border: 1px solid #41b983;
  border-radius: 10px;
  box-sizing: border-box;
}

.todo-list__item:not(:last-of-type) {
  margin-bottom: 10px;
}

.todo-list__inner {
  padding: 10px;
}

.todo-list__inner--number {
  border-right: 1px solid #41b983;
}
</style>

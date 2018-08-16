<template>
  <article id="todo" class="component">
    <h2 class="title">{{ title }}</h2>
    <ol class="list">
      <li
        class="list__item"
        v-for="(item, index) in todo"
        v-bind:key="item.id"
        v-bind:class="`list__item--${index + 1}`"
      >
        <span>{{ index + 1 }}</span>
        <span>{{ item.text }}</span>
      </li>
    </ol>
  </article>
</template>

<script>
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
.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.list__item {
  display: flex;
}
</style>

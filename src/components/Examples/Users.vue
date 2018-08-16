<template>
  <article id="users" class="card">
    <span class="users-view">
      <h1 class="title">Колличество пользователей: {{ count }}</h1>
      <button v-on:click="show = !show">
        {{ show ? 'Скрыть' : 'Показать' }}
      </button>
    </span>
    <ul v-if="show">
      <li
        v-for="user in users"
        v-bind:key="user.id"
      >
        <p v-bind:class="user.img ? '' : 'no-avatar'">
          {{ FIO(user) }}
        </p>
        <img
          class="user-img"
          v-if="user.img"
          v-bind:src="user.img"
          alt="Изображение пользователя"
        >
        <span v-else>Нет изображения</span>
        <hr>
      </li>
    </ul>
  </article>
</template>

<script>
'use strict';

export default {
  data() {
    return {
      show: true,
      users: [
        {
          surname: 'Кузьменко',
          name: 'Алексей',
          middlename: 'Иванов',
          img: 'https://avatars2.githubusercontent.com/u/499550?s=460&v=4',
        },
        {
          surname: 'Агапов',
          name: 'Василий',
          middlename: 'Петров',
          img:
            'https://cdn.lynda.com/authors/3971655_250x250_thumb.jpg?v=912938515',
        },
        {
          surname: 'Кротов',
          name: 'Николай',
          middlename: 'Андреевич',
        },
      ],
    };
  },
  computed: {
    count() {
      return this.users.length;
    },
  },
  methods: {
    FIO(user) {
      return `${user.name} ${user.surname[0]}.${user.middlename[0]}.`;
    },
  },
};
</script>

<style>
.users-view {
  display: flex;
  justify-content: space-between;
}

.user-img {
  height: 60px;
}

.no-avatar {
  color: #f00;
}
</style>

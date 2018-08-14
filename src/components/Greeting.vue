<template>
  <section class="component">
    <h1 class="title title--main">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Заголовок',
    };
  },
};
</script>

<style>
.title--main {
  color: #42b983;
}
</style>

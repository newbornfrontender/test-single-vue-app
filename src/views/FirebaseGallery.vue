<template>
  <section>
    <div
      v-for="(location, idx) in locations"
      v-bind:key="idx"
    >
      <img
        v-bind:src="location.image"
        width="300"
      >
      <h1>{{ location.name }}</h1>
      <button @click="deleteLocation(location.id)">
        Delete
      </button>
    </div>
    <form @submit="addLocation(name, image)">
      <input v-model="name" placeholder="Location Name">
      <input v-model="image" placeholder="Location Image URL">
      <button type="submit">Add New Location</button>
    </form>
  </section>
</template>

<script>
'use strict';

import { db } from '../main';

export default {
  data() {
    return {
      locations: [],
      name: '',
      image: '',
    };
  },
  firestore() {
    return {
      locations: db.collection('locations').orderBy('createdAt'),
    };
  },
  methods: {
    addLocation(name, image) {
      const createdAt = new Date();
      db.collection('locations').add({
        name,
        image,
        createdAt,
      });
      this.name = '';
      this.image = '';
    },
    deleteLocation(id) {
      db.collection('locations')
        .doc(id)
        .delete();
    },
  },
};
</script>

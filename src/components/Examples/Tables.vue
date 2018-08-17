<template>
  <section id="greeting" class="card">
    <h1 class="title">{{ title }}</h1>

    <button
      v-on:click="showFirtsTable = true, showSecondTable = false"
    >Первая таблица</button>
    <button
      v-on:click="showFirtsTable = false, showSecondTable = true"
    >Вторая таблица</button>

    <table>
      <thead>
        <th
          v-if="showFirtsTable"
          v-for="header in table.first.header"
          v-bind:key="header.id"
        >
          {{ header.text }}
        </th>
        <th
          v-if="showSecondTable"
          v-for="header in table.second.header"
          v-bind:key="header.id"
        >
          {{ header.text }}
        </th>
      </thead>
      <tbody>
        <tr>
          <td
            v-if="showFirtsTable"
            v-for="cell in table.first.body.row"
            v-bind:key="cell.id"
          >
            {{ cell.text }}
          </td>
          <td
            v-if="showSecondTable"
            v-for="cell in table.second.body.row"
            v-bind:key="cell.id"
          >
            {{ cell.text }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
'use strict';

export default {
  data() {
    return {
      title: 'Таблицы',
      showFirtsTable: true,
      showSecondTable: false,
      table: {
        first: {
          header: [{ text: 'h 1-1' }, { text: 'h 1-2' }, { text: 'h 1-3' }],
          body: {
            row: [
              { text: 'b-1 1-1' },
              { text: 'b-1 1-2' },
              { text: 'b-1 1-3' },
            ],
          },
        },
        second: {
          header: [{ text: 'h 2-1' }, { text: 'h 2-2' }, { text: 'h 2-3' }],
          body: {
            row: [
              { text: 'b-1 2-1' },
              { text: 'b-1 2-2' },
              { text: 'b-1 2-3' },
            ],
          },
        },
      },
    };
  },
};
</script>

<style>
table {
  margin-top: 10px;
  border: 2px solid #fff;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #fff;
}
</style>

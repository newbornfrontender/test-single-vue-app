<template>
  <section id="app">
    <header class="main-header">
      <nav class="main-nav">
        <ul class="list list-nav">
          <li class="list__item list-nav__item">
            <router-link
              class="list__link list-nav__link"
              to="/"
            >Home</router-link>
          </li>
          <li class="list__item list-nav__item">
            <router-link
              class="list__link list-nav__link"
              to="/examples"
            >Examples</router-link>
          </li>
          <li class="list__item list-nav__item">
            <router-link
              class="list__link list-nav__link"
              to="/grid"
            >Grid</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main-content">
      <router-view/>
    </main>
  </section>
</template>

<style>
.main-nav::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: #35495d;
  box-shadow: #35495d 0 1px 2px 0px;
}

.list-nav__link {
  position: relative;
  margin-bottom: 2px;
  padding: 10px;
  font-size: 18px;
  color: #35495d;
}

.list-nav__link::after,
.active-page::after,
.current-page::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: transparent;
}

.list-nav__link:hover {
  color: #35495d;
}

.list-nav__link:hover::after {
  background-color: #35495d;
}

.active-page {
  color: #ffc400;
}

.current-page {
  color: #fff;
}

.active-page::after {
  background-color: #ffc400;
}

.current-page::after {
  background-color: #fff;
}
</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
      >Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarNav"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
            >Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >Features</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name:'newpage'}">新增頁面</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
  <button
    type="button"
    class="btn btn-primary"
  >Primary</button>
  {{name}}
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: process.env.VUE_APP_NAME
    }
  },
  methods: {
    onClick() {}
  },
  created() {
    console.log('App created!')
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/all';
</style>

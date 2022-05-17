<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <button
    type="button"
    class="btn btn-primary"
  >Primary</button>

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
@import 'bootstrap';
</style>

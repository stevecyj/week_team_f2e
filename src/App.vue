<template>
  <!-- <div class="container-fluid">
  </div> -->
  <router-view />
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

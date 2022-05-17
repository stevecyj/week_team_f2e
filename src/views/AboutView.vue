<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CardTest />
  </div>
</template>

<script>
// @ is an alias to /src
import CardTest from '@/components/Test/CardTest.vue'

export default {
  name: 'HomeView',
  components: {
    CardTest
  }
}
</script>

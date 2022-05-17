<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FormView />
  </div>
</template>

<script>
// @ is an alias to /src
import FormView from '@/components/Test/FormView.vue'

export default {
  name: 'HomeView',
  components: {
    FormView
  }
}
</script>

<template>
  <vue-droparea style="width: 500px; margin: 0 auto" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import VueDroparea from './components/VueDroparea.vue'

  export default defineComponent({
    components: {
      VueDroparea,
    },
  })
</script>

<template>
  <vue-file-drop style="width: 500px; margin: 0 auto" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import VueFileDrop from './components/VueFileDrop.vue'

  export default defineComponent({
    components: {
      VueFileDrop,
    },
  })
</script>

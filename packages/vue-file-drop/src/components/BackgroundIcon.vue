<template>
  <mdi-file :class="$style.icon" />
</template>

<script lang="ts">
  import MdiFile from '/@/components/base/icons/MdiFileDownload.vue'

  import { defineComponent } from 'vue'
  export default defineComponent({
    components: {
      MdiFile,
    },
  })
</script>

<style module lang="scss">
  .icon {
    @apply w-full h-full text-gray-200;
  }
</style>

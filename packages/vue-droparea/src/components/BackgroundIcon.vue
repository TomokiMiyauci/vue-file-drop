<template>
  <mdi-file :class="$style.icon" style="z-index: -1" />
</template>

<script lang="ts">
  import MdiFile from '/@/components/base/icons/MdiFile.vue'

  import { defineComponent } from 'vue'
  export default defineComponent({
    components: {
      MdiFile,
    },
  })
</script>

<style module lang="scss">
  .icon {
    @apply absolute w-full h-full object-none object-center text-gray-200;
  }
</style>

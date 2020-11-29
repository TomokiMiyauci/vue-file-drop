<template>
  <div :class="$style.div">Drop file here</div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({})
</script>

<style module lang="scss">
  .div {
    @apply text-center text-2xl;
  }
</style>

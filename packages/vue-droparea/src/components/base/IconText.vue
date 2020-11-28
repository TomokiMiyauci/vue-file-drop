<template>
  <slot />
  <slot name="text">
    <span :class="$style.span">{{ text }}</span>
  </slot>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    props: {
      text: {
        type: String,
        default: '',
      },
    },
  })
</script>

<style module lang="scss">
  .span {
    @apply align-middle ml-2;
  }
</style>

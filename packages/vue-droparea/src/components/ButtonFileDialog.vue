<template>
  <button :class="$style.button" @click="$emit('click')">
    <mdi-file />
    <span :class="$style.span">SELECT FILE</span>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MdiFile from '/@/components/base/icons/MdiFile.vue'
  export default defineComponent({
    components: { MdiFile },
    emits: ['click'],
  })
</script>

<style module lang="scss">
  .button {
    @apply bg-white outline-none transition duration-200 rounded shadow p-2 inline;

    &:hover {
      @apply shadow-md bg-gray-50;
    }

    &:active {
      @apply bg-gray-100 ring-2 ring-green-300;
    }

    &:focus {
      @apply outline-none;
    }
  }

  .span {
    @apply align-middle ml-2;
  }
</style>

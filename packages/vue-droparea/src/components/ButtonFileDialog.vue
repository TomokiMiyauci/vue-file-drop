<template>
  <button :class="$style.button" @click="$emit('click')">
    <mdi-file :class="$style.icon" />
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
    @apply bg-white transition duration-200 rounded shadow p-2 border-none text-gray-600;

    &:hover {
      @apply shadow-md bg-gray-100 cursor-pointer;
    }

    &:active {
      @apply ring-2 ring-green-300;
    }

    &:focus {
      @apply outline-none;
    }
  }

  .icon {
    @apply align-middle;
  }

  .span {
    @apply ml-2 align-middle;
  }
</style>

<template>
  <button :class="$style.button" @click="$emit('click')">
    <text-icon text="SELECT FILE">
      <mdi-file />
    </text-icon>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MdiFile from '/@/components/base/icons/MdiFile.vue'
  import TextIcon from '/@/components/base/IconText.vue'
  export default defineComponent({
    components: { MdiFile, TextIcon },
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
</style>

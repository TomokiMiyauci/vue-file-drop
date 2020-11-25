<template>
  <button class="button" @click="$emit('click')">
    <mdi-file />
    <span class="align-middle"> ファイルを選択 </span>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MdiFile from './base/icons/MdiFile.vue'
  export default defineComponent({
    components: { MdiFile },
    emits: ['click'],
  })
</script>

<style scoped lang="scss">
  .button {
    @apply bg-gray-50 outline-none rounded shadow p-2 inline;
  }
</style>

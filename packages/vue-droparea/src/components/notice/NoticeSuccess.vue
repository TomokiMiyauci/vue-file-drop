<template>
  <base-notice :message="message" :class="$style.color">
    <template #icon>
      <mdi-check-circle />
    </template>
  </base-notice>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MdiCheckCircle from '/@/components/base/icons/MdiCheckCircle.vue'
  import BaseNotice from '/@/components/notice/BaseNotice.vue'

  export default defineComponent({
    components: {
      MdiCheckCircle,
      BaseNotice,
    },

    props: {
      message: {
        type: String,
        default: '',
      },
    },
  })
</script>

<style module lang="scss">
  .color {
    @apply bg-green-400;
  }
</style>

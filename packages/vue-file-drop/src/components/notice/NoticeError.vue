<template>
  <base-notice :message="message" :class="$style.color">
    <template #icon>
      <mdi-alert />
    </template>
  </base-notice>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import BaseNotice from '/@/components/notice/BaseNotice.vue'
  import MdiAlert from '/@/components/base/icons/MdiAlert.vue'

  export default defineComponent({
    components: {
      MdiAlert,
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
    @apply bg-red-400;
  }
</style>

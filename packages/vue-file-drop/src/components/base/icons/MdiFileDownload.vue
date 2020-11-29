<template>
  <base-svg>
    <path :d="mdiFileDownload" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiFileDownload } from '@mdi/js'
  import { defineComponent } from 'vue'
  import BaseSvg from '/@/components/base/BaseSvg.vue'

  export default defineComponent({
    components: { BaseSvg },
    setup() {
      return { mdiFileDownload }
    },
  })
</script>

<template>
  <base-svg>
    <path :d="mdiFile" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiFile } from '@mdi/js'
  import { defineComponent } from 'vue'
  import BaseSvg from '/@/components/base/BaseSvg.vue'

  export default defineComponent({
    components: { BaseSvg },
    setup() {
      return { mdiFile }
    },
  })
</script>

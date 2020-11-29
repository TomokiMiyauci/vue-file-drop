<template>
  <base-svg>
    <path :d="mdiCheckCircle" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiCheckCircle } from '@mdi/js'
  import { defineComponent } from 'vue'
  import BaseSvg from '/@/components/base/BaseSvg.vue'

  export default defineComponent({
    components: { BaseSvg },
    setup() {
      return { mdiCheckCircle }
    },
  })
</script>

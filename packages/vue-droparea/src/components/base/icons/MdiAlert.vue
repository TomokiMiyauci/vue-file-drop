<template>
  <base-svg>
    <path :d="mdiAlert" />
  </base-svg>
</template>

<script lang="ts">
  import { mdiAlert } from '@mdi/js'
  import { defineComponent } from 'vue'
  import BaseSvg from '/@/components/base/BaseSvg.vue'

  export default defineComponent({
    components: { BaseSvg },
    setup() {
      return { mdiAlert }
    },
  })
</script>

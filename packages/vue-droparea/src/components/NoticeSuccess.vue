<template>
  <div class="bg-green-400 px-3 shadow">
    <div class="px-3">
      <mdi-check-circle class="align-middle mr-2" />
      <span class="align-middle">{{ message }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import MdiCheckCircle from '/@/components/base/icons/MdiCheckCircle.vue'

  export default defineComponent({
    components: {
      MdiCheckCircle,
    },

    props: {
      message: {
        type: String,
        default: '',
      },
    },
  })
</script>

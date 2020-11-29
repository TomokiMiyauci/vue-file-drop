<template>
  <div>
    <div :class="$style.div">
      <icon-text :text="message">
        <slot name="icon" />
      </icon-text>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import IconText from '/@/components/base/IconText.vue'

  export default defineComponent({
    components: {
      IconText,
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
  .div {
    @apply px-3;
  }
</style>

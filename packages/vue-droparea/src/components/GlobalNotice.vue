<template>
  <transition name="fade">
    <component
      :is="component"
      v-show="isShow"
      :message="message"
      class="absolute bottom-0 w-full py-3"
    />
  </transition>
</template>

<script lang="ts">
  import { defineComponent, inject, computed } from 'vue'
  import { UseNotice, key } from '/@/core/useNotice'
  import DropError from '/@/components/DropError.vue'
  import NoticeSuccess from '/@/components/NoticeSuccess.vue'
  export default defineComponent({
    components: { DropError, NoticeSuccess },

    setup() {
      const component = computed(() => {
        switch (type.value) {
          case 'success': {
            return NoticeSuccess
          }

          case 'error': {
            return DropError
          }
        }
        return DropError
      })
      const { isShow, message, type } = inject(key) as Pick<
        UseNotice,
        'message' | 'isShow' | 'type'
      >

      return { isShow, message, component }
    },
  })
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateY(100%);

    @apply opacity-0;
  }

  .fade-enter-to,
  .fade-leave-from {
    transform: translateY(0);

    @apply opacity-100;
  }
</style>

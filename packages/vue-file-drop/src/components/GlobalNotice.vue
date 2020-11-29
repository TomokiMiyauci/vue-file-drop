<template>
  <transition name="slide-up">
    <component
      :is="component"
      v-show="isShow"
      :message="message"
      :class="$style.component"
    />
  </transition>
</template>

<script lang="ts">
  import { defineComponent, inject, computed } from 'vue'
  import { UseNotice, key } from '/@/core/useNotice'
  import DropError from '/@/components/DropError.vue'
  import NoticeSuccess from '/@/components/notice/NoticeSuccess.vue'
  import NoticeError from '/@/components/notice/NoticeError.vue'
  export default defineComponent({
    components: { NoticeError, NoticeSuccess },

    setup() {
      const component = computed(() => {
        switch (type.value) {
          case 'success': {
            return NoticeSuccess
          }

          case 'error': {
            return NoticeError
          }
        }
      })
      const { isShow, message, type } = inject(key) as Pick<
        UseNotice,
        'message' | 'isShow' | 'type'
      >

      return { isShow, message, component }
    },
  })
</script>

<style scoped lang="scss">
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.5s ease;
  }

  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(100%);

    @apply opacity-0;
  }

  .slide-up-enter-to,
  .slide-up-leave-from {
    transform: translateY(0);

    @apply opacity-100;
  }
</style>

<style module>
  .component {
    @apply absolute bottom-0 w-full py-3;
  }
</style>

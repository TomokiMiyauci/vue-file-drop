<template>
  <div
    :class="[$style.drag, dragClass]"
    @drop.prevent="onDrap"
    @dragover.prevent
    @dragstart.prevent="onDragEnter"
    @dragleave.prevent="onDragLeave"
    @dragenter="onDragEnter"
  >
    <slot>
      <div :class="[$style.bg, pointerEventsNone]">
        <background-icon />
      </div>
      <div :class="[$style.div, pointerEventsNone]">
        <slot name="drop">
          <drop-navigation :class="pointerEventsNone" />
        </slot>

        <or />

        <slot name="button">
          <button-file-dialog :class="pointerEventsNone" @click="onClick" />
        </slot>
      </div>
    </slot>

    <global-notice />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, PropType, provide } from 'vue'
  import DropNavigation from '/@/components/DropNavigation.vue'
  import ButtonFileDialog from '/@/components/ButtonFileDialog.vue'
  import Or from '/@/components/Or.vue'
  import { fileDialog } from 'file-select-dialog'
  import BackgroundIcon from '/@/components/BackgroundIcon.vue'
  import { useNotice, key } from '/@/core/useNotice'
  import GlobalNotice from '/@/components/GlobalNotice.vue'

  export default defineComponent({
    components: {
      DropNavigation,
      ButtonFileDialog,
      BackgroundIcon,
      Or,
      GlobalNotice,
    },

    props: {
      accept: {
        type: [String, Array] as PropType<string | string[]>,
        default: '*',
      },

      multiple: {
        type: Boolean,
        default: true,
      },

      strict: {
        type: Boolean,
        default: true,
      },
    },

    setup(props) {
      const { setNotice, ...rest } = useNotice()

      provide(key, rest)

      const onClick = async () => {
        const file = await fileDialog({
          accept: props.accept,
          multiple: props.multiple,
        })
      }

      const onDrap = async ({ dataTransfer }: DragEvent) => {
        dragEnter.value = false
        const files = dataTransfer?.files

        if (!files) return
        console.log(files)

        if (props.multiple && files.length > 1) {
          setNotice({ message: 'Error', type: 'error' })
          return
        }

        setNotice({ message: 'success' })
      }

      const onDragEnter = () => {
        dragEnter.value = true
      }

      const onDragLeave = () => {
        dragEnter.value = false
      }

      const dragEnter = ref(false)

      const dragClass = computed(() => {
        return { 'drag-enter': dragEnter.value }
      })

      const pointerEventsNone = computed(() => ({
        'pointer-events-none': dragEnter.value,
      }))

      return {
        onClick,
        onDrap,
        onDragEnter,
        dragClass,
        onDragLeave,
        pointerEventsNone,
      }
    },
  })
</script>

<style module lang="scss">
  .drag {
    height: 500px;
    max-width: 500px;

    @apply transition-all bg-gradient-to-r shadow duration-300 border-dashed rounded-md flex flex-col items-center justify-center border border-gray-400 relative text-gray-500 antialiased uppercase overflow-hidden;

    &:hover {
      @apply shadow-xl ring-2 bg-gray-100 ring-green-300;
    }
  }

  .div {
    @apply gap-8 relative flex flex-col items-center justify-center;
  }

  .bg {
    @apply absolute w-3/5 h-3/5;
  }
</style>

<style scoped>
  .drag-enter {
    @apply bg-green-50 ring-inset ring-2 ring-green-300;
  }
</style>

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
      <div :class="$style.bg">
        <background-icon />
      </div>
      <div :class="$style.div">
        <slot name="drop">
          <drop-navigation :class="pointerEventsNone" />
        </slot>

        <or />

        <slot name="button">
          <button-file-dialog :class="pointerEventsNone" @click="onClick" />
        </slot>
      </div>
    </slot>

    <drop-error
      v-show="isShow"
      class="absolute bottom-0 w-full p-2"
      :message="message"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, PropType } from 'vue'
  import DropNavigation from '/@/components/DropNavigation.vue'
  import ButtonFileDialog from '/@/components/ButtonFileDialog.vue'
  import Or from '/@/components/Or.vue'
  import DropError from '/@/components/DropError.vue'
  import { fileDialog } from 'file-select-dialog'
  import BackgroundIcon from '/@/components/BackgroundIcon.vue'
  import { useError } from '/@/core/useError'
  export default defineComponent({
    components: {
      DropNavigation,
      ButtonFileDialog,
      DropError,
      BackgroundIcon,
      Or,
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
      const { setError, ...rest } = useError()
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
          setError('hogehoge')
        }
      }

      const onDragEnter = () => {
        dragEnter.value = true
        console.log(2)
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
        ...rest,
      }
    },
  })
</script>

<style module lang="scss">
  .drag {
    height: 500px;
    max-width: 500px;

    @apply transition-all bg-gradient-to-r shadow duration-300 border-dashed rounded-md flex flex-col items-center justify-center border border-gray-400 relative text-gray-500 antialiased uppercase;

    &:hover {
      @apply shadow-xl ring-2 ring-inset bg-gray-100 ring-green-300;
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
    @apply bg-green-50;
  }
</style>

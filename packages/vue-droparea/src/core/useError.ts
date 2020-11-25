import { reactive, toRefs, watch, Ref } from 'vue'

export const useError = (): {
  setError: (message: string) => void
  message: Ref<string>
  isShow: Ref<boolean>
} => {
  const state = reactive({
    message: '',
    isShow: false,
  })

  const setError = (message: string): void => {
    state.message = message
    state.isShow = true
  }

  watch(state, ({ isShow: nowIsShow }, { isShow: prevIsShow }) => {
    console.log(nowIsShow, prevIsShow)
    if (nowIsShow && prevIsShow) {
      setTimeout(() => {
        state.isShow = false
      }, 5000)
    }
  })

  return { ...toRefs(state), setError }
}

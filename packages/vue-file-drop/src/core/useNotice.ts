import { reactive, toRefs, watch, Ref } from 'vue'

type NoticeParams = {
  message: string
  type?: string | undefined
}

export const useNotice = (): {
  setNotice: (noticeParams: NoticeParams) => void
  message: Ref<string>
  isShow: Ref<boolean>
  type: Ref<string>
} => {
  const state = reactive({
    message: '',
    isShow: false,
    type: 'success',
  })

  const setNotice = ({ message, type = 'success' }: NoticeParams): void => {
    state.message = message
    state.type = type
    state.isShow = true
  }

  watch(state, ({ isShow: nowIsShow }, { isShow: prevIsShow }) => {
    if (nowIsShow && prevIsShow) {
      setTimeout(() => {
        state.isShow = false
      }, 5000)
    }
  })

  return { ...toRefs(state), setNotice }
}

export type UseNotice = ReturnType<typeof useNotice>
export const key = 'Notice'

import component from './components/VueDroparea.vue'

export default {
  install: (vue: any): void => {
    console.log(1111111)
    vue.component('VueDroparea', component)
  },
}

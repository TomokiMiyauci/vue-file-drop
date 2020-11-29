import { Plugin } from 'vue'
import VueFileDrop from '/@/components/VueFileDrop.vue'

const plugin: Plugin = {
  install: (app) => {
    app.component('VueFileDrop', VueFileDrop)
  },
}

export default plugin
export { VueFileDrop }

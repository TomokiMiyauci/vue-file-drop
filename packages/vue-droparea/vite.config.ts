import { join } from 'path'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  alias: {
    '/@/': join(__dirname, 'src'),
  },

  rollupInputOptions: {
    input: 'src/wrapper.ts',
  },

  rollupOutputOptions: {
    name: 'MyComponent',
    exports: 'named',
    entryFileNames: 'vue-droparea.js',
  },
}

export default config

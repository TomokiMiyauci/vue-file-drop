// import { RollupOptions } from 'rollup'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { join } from 'path'
import alias from '@rollup/plugin-alias'
import postcss from 'rollup-plugin-postcss'
import tailwind from 'tailwindcss'
import resolve from 'rollup-plugin-node-resolve'
import autoprefixer from 'autoprefixer'

const config = {
  input: 'src/components/VueDroparea.vue',

  output: [
    {
      format: 'umd',
      file: 'dist/vueFileDrop.js',
      name: 'VueFileDrop',
      globals: { vue: 'Vue' },
    },
  ],
  plugins: [
    alias({
      entries: [{ find: /^\/@\//, replacement: join(__dirname, 'src', '/') }],
    }),
    resolve(),
    typescript(),
    vue({
      preprocessStyles: true,
      cssModulesOptions: { scopeBehaviour: 'local' },
    }),
    postcss({ extract: false, plugins: [autoprefixer(), tailwind()] }),
  ],
  external: ['vue'],
}

export default config

// import { RollupOptions, OutputOptions } from 'rollup'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { join } from 'path'
import alias from '@rollup/plugin-alias'
import postcss from 'rollup-plugin-postcss'
import tailwind from 'tailwindcss'
import resolve from 'rollup-plugin-node-resolve'
import autoprefixer from 'autoprefixer'
import { unpkg, main, module } from './package.json'
import { terser } from 'rollup-plugin-terser'

const outputOptions = [
  {
    format: 'iife',
    file: unpkg,
    name: 'VueFileDrop',
    globals: { vue: 'Vue' },
  },
  {
    format: 'cjs',
    exports: 'default',
    file: main,
  },
  {
    format: 'es',
    file: module,
  },
]

const config = {
  input: 'src/components/VueDroparea.vue',

  output: [
    ...outputOptions,
    ...outputOptions.map((option) => ({
      ...option,
      file: option.file?.replace(/\.js$/, '.prod.js'),
      plugins: [terser()],
    })),
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

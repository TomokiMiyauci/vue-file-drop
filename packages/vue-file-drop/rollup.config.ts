// import { RollupOptions, OutputOptions } from 'rollup'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { join } from 'path'
import alias from '@rollup/plugin-alias'
import postcss from 'rollup-plugin-postcss'
import tailwind from 'tailwindcss'
import resolve from 'rollup-plugin-node-resolve'
import autoprefixer from 'autoprefixer'
import { unpkg, main, module, name } from './package.json'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import { pascalCase } from 'pascal-case'

const outputOptions = [
  {
    format: 'iife',
    file: unpkg,
    name: pascalCase(name),
    exports: 'named',
    globals: { vue: 'Vue' },
  },
  {
    format: 'cjs',
    file: main,
    exports: 'named',
  },
  {
    format: 'es',
    file: module,
  },
]

const config = {
  input: 'src/index.ts',

  output: [
    ...outputOptions,
    ...outputOptions.map((option) => ({
      ...option,
      file: option.file?.replace(/\.js$/, '.prod.js'),
      plugins: [terser()],
    })),
  ],
  plugins: [
    json(),
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

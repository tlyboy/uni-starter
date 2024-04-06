import { defineConfig } from 'vite'
import nested from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import tailwindcssConfig from './tailwind.config'
import postcssPresetEnv from 'postcss-preset-env'
import VueMacros from 'unplugin-vue-macros/vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UniTailwind from '@uni-helper/vite-plugin-uni-tailwind'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        nested(),
        tailwindcss({
          config: tailwindcssConfig,
        }),
        postcssPresetEnv({
          stage: 3,
          features: { 'nesting-rules': false },
        }),
      ],
    },
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Uni(),
      },
    }),
    UniTailwind(),
    AutoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/utils', 'src/stores', 'src/composables'],
      vueTemplate: true,
    }),
  ],
})

import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Uni(),
      },
    }),
    AutoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/utils', 'src/stores', 'src/composables'],
      vueTemplate: true,
    }),
  ],
})

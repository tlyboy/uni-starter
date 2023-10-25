import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue',
        'uni-app',
      ],
      dirs: [
        './src/composables',
        './src/stores',
      ],
      vueTemplate: true,
    }),
    uni(),
  ],
})

import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import tailwindcss from 'tailwindcss'
// @ts-ignore
import nested from 'tailwindcss/nesting'
import postcssPresetEnv from 'postcss-preset-env'
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind'
import tailwindcssConfig from './tailwind.config.ts' // 注意匹配实际文件
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
    uni(),
    uniTailwind(),
    AutoImport({
      imports: ['vue', 'uni-app', 'pinia'],
      dirs: ['src/composables', 'src/stores'],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
})

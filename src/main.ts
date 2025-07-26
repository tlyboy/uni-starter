import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'

import './styles/preflight.css'
import './styles/tailwind.css'
import './styles/main.css'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = Pinia.createPinia()

  pinia.use(
    createPersistedState({
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    }),
  )

  app.use(pinia)

  return {
    app,
    Pinia, // 此处必须将 Pinia 返回
  }
}

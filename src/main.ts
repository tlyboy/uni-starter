import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()

  pinia.use(
    createPersistedState({
      storage: {
        getItem: (key) => uni.getStorageSync(key),
        setItem: (key, value) => uni.setStorageSync(key, value),
      },
    }),
  )

  return {
    app,
    pinia,
  }
}

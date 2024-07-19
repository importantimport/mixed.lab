import { defineConfig } from '@farmfe/core'
// import { VitePWA } from 'vite-plugin-pwa'

// import pwaConfig from './pwa.config'

export default defineConfig({
  compilation: {
    output: {
      targetEnv: 'browser-esnext',
    },
  },
  plugins: ['@farmfe/plugin-react'],
  // vitePlugins: [VitePWA(pwaConfig)],
})

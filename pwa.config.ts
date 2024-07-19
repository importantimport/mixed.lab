import type { VitePWAOptions } from 'vite-plugin-pwa'

import pwaAssets from './pwa-assets.config'

const config = {
  base: '/',
  outDir: '/dist',
  registerType: 'autoUpdate',
  injectRegister: 'script-defer',
  pwaAssets,
  manifest: {
    theme_color: '#000',
  },
  injectManifest: {
    target: false,
    envOptions: {
      envDir: '',
      envPrefix: 'FARM_',
    },
  },
} as const satisfies Partial<VitePWAOptions>

export default config

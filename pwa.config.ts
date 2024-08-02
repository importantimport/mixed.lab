import type { VitePWAOptions } from 'vite-plugin-pwa'

import pwaAssets from './pwa-assets.config'

const config = {
  base: '/',
  injectManifest: {
    envOptions: {
      envDir: '',
      envPrefix: 'FARM_',
    },
    target: false,
  },
  injectRegister: 'script-defer',
  manifest: {
    theme_color: '#000',
  },
  outDir: '/dist',
  pwaAssets,
  registerType: 'autoUpdate',
} as const satisfies Partial<VitePWAOptions>

export default config

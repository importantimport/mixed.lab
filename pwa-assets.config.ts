import {
  defineConfig,
//   minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  headLinkOptions: { preset: '2023' },
  images: 'public/favicon.svg',
  preset: {
    apple: { sizes: [] },
    maskable: { sizes: [] },
    // ...minimal2023Preset,
    transparent: {
      favicons: [[48, 'favicon.ico']],
      sizes: [],
    },
  },
})

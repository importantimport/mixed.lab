import {
  defineConfig,
//   minimal2023Preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
  headLinkOptions: { preset: '2023' },
  preset: {
    // ...minimal2023Preset,
    transparent: {
      sizes: [],
      favicons: [[48, 'favicon.ico']],
    },
    maskable: { sizes: [] },
    apple: { sizes: [] },
  },
  images: 'public/favicon.svg',
})

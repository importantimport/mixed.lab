import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
}, {
  rules: {
    'antfu/top-level-function': 'off',
  },
})

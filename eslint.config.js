import antfu from '@antfu/eslint-config'
import ii from '@importantimport/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  typescript: true,
}, {
  // auto-generated files
  ignores: ['src/routes.gen.tsx'],
}).append(ii({ functional: false }))

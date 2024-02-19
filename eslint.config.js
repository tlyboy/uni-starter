// @ts-check
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    formatters: true,
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
)

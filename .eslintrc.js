module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['@nuxtjs', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier', 'vuetify'],
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': 'error',
    'vuetify/no-deprecated-classes': 'error'
  }
}

module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue'
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': '@vue/vue2-jest',
    // process js with `babel-jest`
    '^.+\\.js$': 'babel-jest',
    // Stub non js file
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/components/**/*.{js,vue}',
    '**/layouts/**/*.{js,vue}',
    '**/pages/**/*.{js,vue}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/.nuxt/**'
  ],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  snapshotSerializers: ['jest-serializer-vue'],
  transformIgnorePatterns: ['node_modules/(?!vee-validate/dist/rules)']
}

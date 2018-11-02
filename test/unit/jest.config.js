const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  testURL: "http://localhost",
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1",
    "^@/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js"
  },
  verbose: true,
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.vue$": "<rootDir>/node_modules/vue-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":
      "jest-transform-stub"
  },
  moduleFileExtensions: ["js", "json", "vue"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  testPathIgnorePatterns: ["<rootDir>/test/e2e", "<rootDir>/node_modules"],
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|js)$",
  coverageDirectory: "<rootDir>/test/unit/coverage",
  collectCoverageFrom: [
    "components/**/*.{js,ts,vue}",
    "layouts/**/*.{js,ts,vue}",
    "pages/**/*.{js,ts,vue}",
    "!**/node_modules/**"
  ]
};

const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  testURL: "http://localhost",
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/$1"
  },
  verbose: true,
  transform: {
    ".*?\\.vue$": "<rootDir>/node_modules/jest-vue-preprocessor",
    ".*": "babel-jest"
  },
  moduleFileExtensions: ["vue", "js", "jsx", "json", "node"],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  testPathIgnorePatterns: [
    "<rootDir>/test/e2e",
    "<rootDir>/components/*.vue",
    "<rootDir>/node_modules"
  ],
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|js)$",
  coverageDirectory: "<rootDir>/test/unit/coverage",
  collectCoverageFrom: [
    "components/**/*.{js,ts,vue}",
    "layouts/**/*.{js,ts,vue}",
    "pages/**/*.{js,ts,vue}",
    "!**/node_modules/**",
    "!components/**/*.story.js"
  ]
};

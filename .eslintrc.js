const path = require("path");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "airbnb-base",
    "plugin:vue/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["import", "vue", "prettier"],
  settings: {
    "import/resolver": {
      "babel-module": {},
      alias: {
        map: [
          ["^~", path.resolve(__dirname, "./")],
          ["^@", path.resolve(__dirname, "./")]
        ],
        extensions: [".vue", ".js"]
      },
      node: {
        moduleDirectory: ["node_modules"]
      }
    }
  },
  rules: {
    "no-console": "off",
    "no-param-reassign": "off",
    "no-unused-vars": "off",
    "inebreak-style": "off",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": "error"
  }
};

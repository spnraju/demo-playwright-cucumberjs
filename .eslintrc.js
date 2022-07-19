module.exports = {
  root: true,
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  env: {
    node: true,
    es6: true,
  },
  globals: {
    When: true,
    Given: true,
    Then: true,
    page: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};

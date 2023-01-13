module.exports = {
  env: {
    browser: true,
    ecmaVersion: 2020,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-undef': 'off',
  },
};

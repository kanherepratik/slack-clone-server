module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'none', ignoreRestSiblings: false }
    ]
  }
};

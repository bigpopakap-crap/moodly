module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'plugin:prettier/recommended',
    'react-app',
    'plugin:jsx-a11y/strict'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': 'typescript-eslint-parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'typescript',
    'prettier',
    'react',
    'jsx-a11y'
  ],
  'rules': {
    'import/order': 'error',

    'prettier/prettier': ['error', {
      'printWidth': 100,
      'singleQuote': true,
      'trailingComma': 'none',
      'tabWidth': 2,
      'semi': true
    }]
  }
};

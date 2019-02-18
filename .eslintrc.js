module.exports = {
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'json',
    'prettier'
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

module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:css-modules/recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:prettier/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    "project": "./tsconfig.json",
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'typescript', // TODO(#37) remove this and the eslint-plugin-typescript package
                  // becuase it's supposed to be replaced by @typescript-eslint
                  // but IntelliJ doesn't work with @typescript-eslint for some reason
    '@typescript-eslint',
    'import',
    'json',
    'css-modules',
    'react',
    'jsx-a11y',
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

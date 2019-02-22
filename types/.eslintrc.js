module.exports = {
  'env': {
    'browser': false,
    'es6': true
  },
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    "project": "./tsconfig.json",
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

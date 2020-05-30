module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:prettier/recommended',
    'plugin:security/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['import', 'security'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false,
        printWidth: 100,
      },
    ],
    'no-implied-eval': 2,
    'import/prefer-default-export': 0,
    'prefer-destructuring': 0,
    'import/no-unresolved': 0,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          ['internal', 'unknown'],
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'import/no-extraneous-dependencies': 0,
    quotes: ['error', 'single'],
    'function-paren-newline': 0,
    'consistent-return': 0,
    'no-case-declarations': 0,
    'no-extra-boolean-cast': 0,
    'no-async-promise-executor': 0,
    'max-classes-per-file': ['error', 2],
    'class-methods-use-this': 0,
    'security/detect-child-process': 0,
    'security/detect-object-injection': 0,
    'security/detect-non-literal-regexp': 0,
    'security/detect-non-literal-fs-filename': 0,
  },
};

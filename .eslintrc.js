module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true,
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    'parserOptions': {
        'sourceType': 'module',
    },
    'rules': {
    'comma-dangle': [
        'error',
        'always-multiline',
    ],
    'indent': [
        'error',
    2,
    ],
    'quotes': [
        'error',
        'single',
        ],
    'semi': [
        'error',
        'always',
        ],
    'no-unused-vars': [
        'warn',
        ],
    'no-console': 0,
    },
    'globals': {
        '$': true,
        'jQuery': true,
       },
};
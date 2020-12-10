module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/forbid-prop-types': 0,
    'react/default-props-match-prop-types': 0,
    'react/require-default-props': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  parser: 'babel-eslint'
}

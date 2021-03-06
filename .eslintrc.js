module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  extends: ['prettier', 'airbnb'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': 0,
    'import/no-absolute-path': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'no-useless-catch': 0,
    'operator-linebreak': 0,
    indent: 0,
    'react/prop-types': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': 0,
    'no-promise-executor-return': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/state-in-constructor': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
};

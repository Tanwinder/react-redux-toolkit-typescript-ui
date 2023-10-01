module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  overrides: [
    {
      files: ['src/**/*.test.[jt]s?(x)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'styled-components-a11y',
    'react-hooks',
    'jest-dom',
    'testing-library',
    'prettier',
  ],
  rules: {
    'linebreak-style': ['error', 'unix'],
    // 'import/prefer-default-export': 'off',
    "no-console": "warn",

    // Ensure stand-alone functions follow the same syntax, which is enforced by the above plugins
    'react/function-component-definition': [1, { namedComponents: 'arrow-function' }],

    // Assume the engineer knows what they're doing; `undefined` is sometimes an acceptable prop value
    // 'react/require-default-props': 'off',

    '@typescript-eslint/no-unused-vars': 'error',
    // 'react/destructuring-assignment': 'warn',

    // Ensure indenting between Prettier and ESLint works as expected, particularly in Typescript files
    '@typescript-eslint/indent': 'off',
    "react/react-in-jsx-scope": "off",
    'import/no-extraneous-dependencies': 0,

    // testing library additional rules
    'testing-library/no-await-sync-events': 'warn',
    'testing-library/prefer-user-event': 'warn',
    'testing-library/no-node-access': ['warn', { allowContainerFirstChild: true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // See webpack DefinePlugin
  globals: {
    APP_VERSION: 'readonly',
  },
};

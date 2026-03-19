//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import eslintPluginPath from 'eslint-plugin-path'
import eslintPluginReact from 'eslint-plugin-react'

export default [
  ...tanstackConfig,
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-indent-props': ['error', 2],
    },
  },
  {
    rules: {
      semi: ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',
    },
  },
  {
    ignores: [
      'eslint.config.js',
      'prettier.config.js',
      '.content-collections/**',
      '.output/**',
    ],
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      path: eslintPluginPath,
    },
    rules: {
      'path/no-relative-imports': ['error', { maxDepth: -1 }],
    },
    settings: {
      path: {
        config: 'tsconfig.json',
      },
    },
  },
]

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import { fileURLToPath } from 'url';
import path from 'path';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import storybookPlugin from 'eslint-plugin-storybook';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
});

export default [
  {
    files: [
      'src/**/*.ts',
      'src/**/*.tsx',
      '.storybook/**/*.ts',
      '.storybook/**/*.tsx'
    ],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      storybook: storybookPlugin
    },
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  },
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:@typescript-eslint/eslint-recommended'),
  ...compat.extends('plugin:prettier/recommended'),
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.extends('plugin:storybook/recommended')
];

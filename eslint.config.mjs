// @ts-check

import { defineConfig, globalIgnores } from 'eslint/config';

// Configs
import eslint from '@eslint/js';
import tslint from 'typescript-eslint';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, tslint.configs.recommended],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.vitest },
    },
  },
]);

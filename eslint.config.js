import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
    globalIgnores(['dist', 'node_modules', 'src-tauri']),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'unused-imports': unusedImports,
        },
        rules: {
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/consistent-type-exports': 'error',
            '@typescript-eslint/no-explicit-any': 'off',
            'no-console': ['warn', { allow: ['debug', 'warn', 'error'] }],
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
            'arrow-body-style': 'error',
            'unused-imports/no-unused-imports': 'error',
            '@typescript-eslint/no-empty-object-type': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            '@typescript-eslint/no-unused-expressions': [
                'error',
                { allowTernary: true, allowShortCircuit: true },
            ],
        },
    },
);

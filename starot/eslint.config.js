import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'

// Import the CommonJS module using default import
import tsPlugin from '@typescript-eslint/eslint-plugin'
const { configs: tsConfigs } = tsPlugin // Destructure to get the configs

export default [
  {
    ignores: ['dist', 'vite.config.ts']
  },
  {
    // Directly include the rules from the recommended configs
    ...js.configs.recommended, // JS recommended config
    ...tsConfigs.recommended, // TypeScript recommended config
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: 'module' // Ensure the source type is set to 'module'
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ]
    }
  }
]

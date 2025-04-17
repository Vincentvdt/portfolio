import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Support for extending ESLint configs in flat configuration format
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals', // Next.js-specific linting
      'next/typescript', // TypeScript linting for Next.js
      'prettier', // Integrate Prettier with ESLint
    ],

    rules: {
      'no-unused-vars': 'off', // Handled by @typescript-eslint
      '@typescript-eslint/no-unused-vars': [
        'error', // Error on unused vars
        {
          argsIgnorePattern: '^_', // Ignore variables prefixed with "_"
          varsIgnorePattern: '^_', // Ignore variables prefixed with "_"
          caughtErrorsIgnorePattern: '^_', // Ignore "_"-prefixed caught error parameters
          ignoreRestSiblings: true, // Ignore rest siblings in destructuring (rest properties)
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error', // Disallow usage of `any`
      'prefer-arrow-callback': 'error', // Enforce using arrow functions over traditional function expressions
      'arrow-body-style': ['error', 'as-needed'], // Allow concise arrow function bodies only when appropriate
      '@typescript-eslint/prefer-function-type': 'error', // Prefer function types over object types
    },
  }),
]

export default eslintConfig

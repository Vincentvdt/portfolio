
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals', // Next.js-specific linting
      'next/typescript', // TypeScript linting for Next.js
      'plugin:@next/next/recommended', // Recommended Next.js linting rules
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

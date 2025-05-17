import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import 'eslint-plugin-only-warn'
import stylistic from '@stylistic/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // Add the stylistic plugin
    plugins: {
      '@stylistic': stylistic,
    },
    // Apply the default stylistic rules.
    // The customize() factory function with no arguments provides a set of default stylistic rules.
    rules: {
      ...stylistic.configs.customize().rules,
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
    },
  },
]

export default eslintConfig

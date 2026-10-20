import prettier from 'eslint-config-prettier'
import astro from 'eslint-plugin-astro'
import neostandard from 'neostandard'

export default [
  {
    ignores: ['dist/', '.astro/']
  },
  ...neostandard({ ts: true, noStyle: true }),
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    rules: {
      'astro/jsx-a11y/anchor-is-valid': 'warn',
      'astro/jsx-a11y/html-has-lang': 'off'
    }
  },
  prettier
]

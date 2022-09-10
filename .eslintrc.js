module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'vuejs-accessibility',
  ],
  rules: {
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        required: {
          every: ['nesting', 'id'],
        },
      },
    ],
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1,
    }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'max-params': ['error', 5],
    'space-before-function-paren': ['error', 'always'],
    'no-debugger': 'warn',
    'no-console': 'warn',
  },
};

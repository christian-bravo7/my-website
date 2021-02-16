module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  rules: {
    'max-nesting-depth': 5,
    'color-hex-case': 'upper',
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'function',
        'if',
        'each',
        'include',
        'mixin',
        'return',
        'extend',
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen',
        'layer',
      ],
    }],
  },
};

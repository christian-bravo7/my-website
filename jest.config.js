module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    '.+\\.svg?.+$': '<rootDir>/test/__mocks__/svg-empty.vue',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/layouts/**/*.vue',
    '!**/node_modules/**',
  ],
  snapshotSerializers: ['jest-serializer-vue'],
  snapshotResolver: './snapshotResolver.js',
};

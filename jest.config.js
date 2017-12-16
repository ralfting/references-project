module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    'jest.mockBase.js',
  ],
  collectCoverageFrom: [
    '**/**/*.jsx',
    '/test/**',
    '!**/node_modules/**',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};

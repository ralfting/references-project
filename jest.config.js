module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    'jest.mockBase.js',
    'App.jsx',
  ],
  collectCoverageFrom: [
    '**/**/*.jsx',
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
  setupFiles: [
    './src/javascript/shim.js',
    './src/javascript/setupTest.js',
  ],
};

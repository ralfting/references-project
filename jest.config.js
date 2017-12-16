module.exports = {
  verbose: true,
  // collectCoverage: true,
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
};

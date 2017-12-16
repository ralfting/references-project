module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  globals: {
    describe: true,
    it: true,
    document: true,
    expect: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx'],
    }],
  },
};

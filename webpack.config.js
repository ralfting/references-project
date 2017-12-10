const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
require('webpack');

module.exports = {
  entry: {
    main: ['./src/javascript/main.js', './src/stylesheet/main.css'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'build.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
};

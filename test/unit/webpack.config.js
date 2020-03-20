const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');
const RTLPlugin = require('../../index');

const config = {
  context: __dirname,
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new RTLPlugin()
  ]
};

module.exports = config;

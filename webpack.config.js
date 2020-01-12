const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  entry: ['./src/js/index'],

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.js',
    publicPath: './..'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/assets'
        }
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};
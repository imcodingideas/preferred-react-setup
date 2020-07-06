const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const plugins = env => [
  new CleanWebpackPlugin(),
  new HTMLWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body',
  }),
  new webpack.HotModuleReplacementPlugin(),
];

module.exports = env => plugins(env);

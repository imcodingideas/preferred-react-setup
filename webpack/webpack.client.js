const rules = require('./config.module.rules');
const resolve = require('./config.resolve');
const output = require('./config.output');
const mode = require('./config.mode');
const plugins = require('./config.plugins');
const devServer = require('./config.devServer');

module.exports = env => ({
  entry: ['./src/index.js'],
  module: {
    rules,
  },
  resolve: resolve(env),
  devtool: 'source-map',
  output: output(env),
  mode: mode(env),
  plugins: plugins(env),
  optimization: {},
  devServer: devServer(env),
});

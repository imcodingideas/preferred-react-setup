const path = require('path');
const buildIdentifier = require('./util.buildIdentifier');
const isProduction = require('./util.isProduction');

const output = env => ({
  filename: `app/${buildIdentifier}/${fileChunkName(env)}`,
  path: path.resolve(__dirname, `./../build/${env.TARGET || 'dev'}/cdn`),
  publicPath: `/`,
});

const fileChunkName = env =>
  isProduction(env) ? '[name].[hash].js' : '[name].[hash].js';

module.exports = output;

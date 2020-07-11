const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const isProduction = require('./util.isProduction');

const production = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      parallel: true,
      sourceMap: true,
      extractComments: false,
    }),
    new OptimizeCssAssetsPlugin({}),
  ],
  usedExports: true,
  mergeDuplicateChunks: true,
  splitChunks: {
    chunks: 'all',
  },
  nodeEnv: 'production',
  mangleWasmImports: true,
  removeAvailableModules: true,
  removeEmptyChunks: true,
  occurrenceOrder: true,
};

const development = {
  splitChunks: {
    chunks: 'initial',
  },
};

module.exports = env => (isProduction(env) ? production : development);

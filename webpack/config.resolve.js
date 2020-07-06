const isProduction = require('./util.isProduction');

const development = {
  extensions: ['.js', '.jsx'],
};

const production = {
  extensions: ['.js', '.jsx'],
};

module.exports = env => (isProduction(env) ? production : development);

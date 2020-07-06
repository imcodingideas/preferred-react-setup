const isProduction = require('./util.isProduction');

module.exports = env => (isProduction(env) ? 'production' : 'development');

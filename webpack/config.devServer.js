const path = require('path');

module.exports = {
  contentBase: path.join(__dirname, 'build'),
  inline: true,
  hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  writeToDisk: true,
  disableHostCheck: true,
};

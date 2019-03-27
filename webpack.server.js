const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './public/',
    compress: true,
    port: 19005
  }
};

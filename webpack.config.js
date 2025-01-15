const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      querystring: require.resolve('querystring-es3'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      fs: false, // If fs is not needed in the frontend
      crypto: require.resolve('crypto-browserify'),
      zlib: require.resolve('browserify-zlib'),
      http: require.resolve('stream-http'),
      net: false // Optional: if you don't need "net" module
    }
  },
  // other webpack configuration...
};

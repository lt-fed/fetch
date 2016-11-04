/**
 * Created by fed on 2016/11/4.
 */
module.exports = {
  entry: './src/fetch',
  output: {
    path: './dist',
    filename: 'fetch.js',
    library: 'fetch',
    libraryTarget: 'umd'
  },
  externals: {
    promise: true,
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
      },
    ],
  },
};

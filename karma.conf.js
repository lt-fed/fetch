/**
 * Created by fed on 2016/11/4.
 */
module.exports = function (config) {
  config.set({
    basePath: './test',
    files: ['**/*.spec.js'],
    preprocessors: {
      '**/*.spec.js': ['webpack']
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js/,
            loaders: ['babel']
          }
        ],
      },
    },
    browsers : [
      'Chrome',
    ],
    frameworks: ['jasmine'],
    singleRun: true,
  })
};

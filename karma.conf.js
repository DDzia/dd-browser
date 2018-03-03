module.exports = (config) => {
  config.set({
    singleRun: true,
    frameworks: ["mocha", "chai", "karma-typescript"],
    browsers: [
      "PhantomJS"
    ],
    basePath: "",
    files: [
      'src/**/*.ts'
    ],
    logLevel: config.LOG_INFO,
    plugins: [
      "karma-*"
    ],
    reporters: ["mocha"],
    preprocessors: {
      "src/**/*.ts": "karma-typescript"
    },
    typescriptPreprocessor: {
      options: {
        sourceMap: true, // generate source maps
        noResolve: false // enforce type resolution
      },
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },
  });
}
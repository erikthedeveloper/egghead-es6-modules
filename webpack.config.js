module.exports = {
    entry: "./src/main.js",
    output: {filename: "./dist/bundle.js"},

    // Enables ES6 modules to be loaded w/ "root/project paths"
    resolve: {root: __dirname + '/src'},

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel",
          query: {
            optional: ['runtime'],
            stage: 1
          }
        }
      ]
    }
};
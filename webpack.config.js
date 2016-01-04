var webpack = require('webpack');

module.exports = {
  entry: {
    "calculator": "./src/Calculator.js",
    "calculator.min": "./src/Calculator.js",
  },
  devtool: "source-map",
  output: {
    path: "./dist",
    filename: "[name].js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};

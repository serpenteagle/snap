const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const dev = {
  mode: "development",
  entry: path.join(__dirname, "dev", "dev.js"),
  output: {
    path: path.join(__dirname, "dev"),
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, "dev"),
    port: 9000,
    hot: true
  }
};

module.exports = merge(common, dev);

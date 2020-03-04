const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const path = require("path");

const prod = {
  entry: path.join(__dirname, "src/Snap.js"),
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "Snap.min.js",
    library: "Snap",
    libraryTarget: "umd"
  }
};

module.exports = merge(prod, common);

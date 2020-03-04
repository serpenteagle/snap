const path = require("path");

module.exports = {
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
};

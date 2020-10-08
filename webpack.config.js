const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const { resolve } = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
    }),
  ],
};

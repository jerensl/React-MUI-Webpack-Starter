const path = require("path")

const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = () => ({
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "src"),
    compress: true,
    hot: true,
    port: 2202,
    publicPath: "/",
    historyApiFallback: true,
  },
})

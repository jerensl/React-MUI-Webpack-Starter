const path = require("path")

const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const modeConfig = env => require(`./config/webpack.${env}`)(env)
const loadPresets = require("./config/loadPresets")

module.exports = ({ mode = "production", presets = [] }) => {
  return merge(
    {
      mode,
      entry: "./src/index.js",
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"],
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"],
          },
        ],
      },
      plugins: [new CleanWebpackPlugin()],
    },
    modeConfig(mode),
    loadPresets({
      mode,
      presets,
    }),
  )
}

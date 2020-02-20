const path = require("path")

const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const modeConfig = env => require(`./config/webpack.${env}`)(env)
const loadPresets = require("./config/loadPresets")

module.exports = (
  { mode: mode = "production", presets: presets = [] } = { mode, presets },
) => {
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
            test: /\.module\.css$/i,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: false,
                },
              },
            ],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  outputPath: "./assets/images",
                },
              },
              {
                loader: "image-webpack-loader",
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
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

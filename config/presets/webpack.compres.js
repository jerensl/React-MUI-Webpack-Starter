const compress = require("compression-webpack-plugin");

module.exports = () => ({
  plugins: [new compress()]
});

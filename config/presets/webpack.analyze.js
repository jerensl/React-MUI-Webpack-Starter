const Analyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = () => ({
  plugins: [new Analyzer()]
});

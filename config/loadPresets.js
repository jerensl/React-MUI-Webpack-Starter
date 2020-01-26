const Merge = require("webpack-merge");

const applyMerge = env => {
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfig = mergedPresets.map(presetsName =>
    require(`./presets/webpack.${presetsName}`)(env)
  );

  return Merge({}, ...mergedConfig);
};

module.exports = applyMerge;

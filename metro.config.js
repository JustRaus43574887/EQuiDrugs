const MetroConfig = require("@ui-kitten/metro-config");
const { getDefaultConfig } = require("@expo/metro-config");

const evaConfig = {
  evaPackage: "@eva-design/eva",
  customMappingPath: "./mapping.json",
};

const metroConfig = getDefaultConfig(__dirname);

module.exports = MetroConfig.create(evaConfig, {
  ...metroConfig,
  resolver: {
    ...metroConfig.resolver,
    sourceExts: [...metroConfig.resolver.sourceExts, "cjs"],
  },
});

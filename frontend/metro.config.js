const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
module.exports = withNativeWind(config, { input: "./global.css" });

const config = getDefaultConfig(__dirname);

// Add this to your config
config.resolver.sourceExts.push("cjs");
config.resolver.assetExts.push("css");
config.resolver.unstable_enablePackageExports = false;

module.exports = config;

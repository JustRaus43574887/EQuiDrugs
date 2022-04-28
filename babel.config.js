module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module:react-native-dotenv"],
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".json"],
          alias: {
            "~components": "./src/components",
            "~icons": "./src/icons",
            "~images": "./src/images",
            "~navigator": "./src/navigator",
            "~types": "./src/types",
            "~utils": "./src/utils",
            "~redux": "./src/redux",
            "~hooks": "./src/hooks",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};

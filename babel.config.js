module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["module:react-native-dotenv"],
      [
        "module-resolver",
        {
          alias: {
            api: "./src/api",
            assets: "./assets",
            screens: "./src/screens",
            features: "./src/features",
            components: "./src/components",
            navigation: "./src/navigation",
          },
        },
      ],
    ],
  };
};

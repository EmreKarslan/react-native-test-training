module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ".",
          alias: {
            "@/components": "./src/components",
            "@/util": "./src/util",
            "@/screens": "./src/screens",
            "@/navigation": "./src/navigation",
            "@/constants": "./src/constants",
            "@/assets": "./src/assets",
            "@/hooks": "./src/hooks",
            "@/icons": "./src/icons",
            "@/store": "./src/store",
            "@/types": "./src/types",
          },
        },
      ],
    ],
  };
};

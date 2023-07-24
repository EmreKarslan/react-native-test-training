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
            "@": "./src",
            "@/hooks": "./src/hooks",
            "@/icons": "./src/icons",
            "@/store": "./src/store",
            "@/types": "./src/types",
            "@/utils": "./src/utils",
            "@/assets": "./src/assets",
            "@/screens": "./src/screens",
            "@/constants": "./src/constants",
            "@/components": "./src/components",
            "@/navigation": "./src/navigation",
          },
        },
      ],
    ],
  };
};

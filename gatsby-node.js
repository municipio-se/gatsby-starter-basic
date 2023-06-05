const path = require("path");

exports.onCreateWebpackConfig = ({
  // getConfig,
  // stage,
  // rules,
  loaders,
  // plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@emotion/react": path.resolve("./node_modules/@emotion/react"),
        "@emotion/styled": path.resolve("./node_modules/@emotion/styled"),
      },
    },
  });
  if (process.env.WSUI_USE_SOURCE) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "@wsui/base": path.resolve("./node_modules/@wsui/base/src"),
          "@wsui/municipio": path.resolve("./node_modules/@wsui/municipio/src"),
          "@wsui/theme-standard": path.resolve(
            "./node_modules/@wsui/theme-standard/src",
          ),
          "@wsui/theme-minimal": path.resolve(
            "./node_modules/@wsui/theme-minimal/src",
          ),
        },
      },
    });
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: (modulePath) =>
              /node_modules/.test(modulePath) &&
              !/node_modules/.test(/node_modules\/@wsui\/.*\/src\//),
            use: loaders.js(),
          },
        ],
      },
    });
  }
};

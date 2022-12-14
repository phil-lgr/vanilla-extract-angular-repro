// @ts-check

const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * @type {import('webpack').Configuration}
 */
const customWebpackConfig = {
  module: {
    rules: [
      {
        test: /\.vanilla\.css$/i, // Targets only CSS files generated by vanilla-extract
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve("css-loader"),
            options: {
              url: false, // Required as image imports should be handled via JS/TS import statements
            },
          },
        ],
      },
    ],
  },
  plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
};

module.exports = customWebpackConfig;

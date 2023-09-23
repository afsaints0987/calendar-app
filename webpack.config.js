const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  // - Use 'development' for local development with features and debugging.
  // - Use 'production' to generate optimized HTML, CSS, and JavaScript for deployment.
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
      }),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: "styles.css",
        }),
    ].filter(Boolean), // Filter out plugins that are falsy (only add MiniCssExtractPlugin in production)
    devServer: {
      static: path.join(__dirname, "public"),
      port: 7700,
    },
  };
};

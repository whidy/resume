const path = require('path')
const glob = require('glob')
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
const isDev = process.env.NODE_ENV === "development";

const PATHS = {
  src: path.join(__dirname, 'src')
}

module.exports = {
  entry: `${PATHS.src}/js/index.js`,
  mode: process.env.NODE_ENV,
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          isDev
            ? {
                loader: "style-loader",
              }
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};

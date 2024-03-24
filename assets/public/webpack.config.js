const path = require("path");
const webpack = require("webpack");

// const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


const entryJs = "./src/entry.js";
module.exports = {
    mode: process.env.NODE_ENV || "production",
    entry: entryJs,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts/",
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "image/",
                    esModule: false,
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),

        // new webpack.LoaderOptionsPlugin(),
        // new CleanWebpackPlugin(),
        // new CssMinimizerPlugin(),
    ],
};


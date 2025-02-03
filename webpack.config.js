const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require("html-loader");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {   
                test: /\.html$/i,
                loader: "html-loader",
            }
        ]
    }
};
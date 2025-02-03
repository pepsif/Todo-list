const { watch } = require("fs");
const path = require("path");

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "./main.js"
    },
    watch: true,

};
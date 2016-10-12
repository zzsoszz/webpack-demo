var path = require("path");
var webpack = require("webpack");
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    entry: "./example.amd.js",
    output: {
        path: path.join(__dirname, "amd"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    }
    // ,
    // module: {
    //     loaders: [
    //         {test: /\.css$/, loader: 'style-loader!css-loader'}
    //     ],
    //     preLoaders: [
    //         {test: /\.js$/, loader: "amdcss-loader"}
    //     ]
    // },
    // plugins: [commonsPlugin]
};
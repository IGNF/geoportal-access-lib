/* global module, __dirname, process */
var path    = require("path");
var webpack = require("webpack");

// plugin
var DefineWebpackPlugin = webpack.DefinePlugin;
var nodeExternals = require("webpack-node-externals");

module.exports = {
    target : "node",
    externals : [nodeExternals()],
    devtool : "eval-source-map",
    module :  {
        rules : [
        {
            test : /\.js$/,
            exclude : /node_modules/,
            loader : "babel-loader"
        }
      ]
    },
    plugins : [
        // on ne veut pas de logger !
        new DefineWebpackPlugin({
            __PRODUCTION__ : JSON.stringify(true)
        })
    ]
};

/* global module, __dirname, process */
var path    = require("path");
var webpack = require("webpack");

// plugin
var DefineWebpackPlugin = webpack.DefinePlugin;
var ReplaceWebpackPlugin = require("replace-bundle-webpack-plugin");
var nodeExternals = require("webpack-node-externals");

module.exports = {
    target : "node",
    externals : [nodeExternals()],
    devtool : "eval-source-map",
    module :  {
        rules : [
        {
            test: /\.js$/,
            include: path.resolve('src'), // instrument only testing sources with Istanbul, after ts-loader runs
            loader: 'istanbul-instrumenter-loader',
            query: {
                esModules: true
            }
        },
        {
            test : /\.js$/,
            exclude : /node_modules/,
            loader : "babel-loader"
        }
      ]
    },
    plugins : [
        // on ne veut pas de logger !
        // new DefineWebpackPlugin({
        //     __PRODUCTION__ : JSON.stringify(true)
        // })
        new ReplaceWebpackPlugin(
        [
            {
                partten : /__PRODUCTION__/g,
                replacement : function () {
                    return true;
                }
            }
        ])
    ]
};

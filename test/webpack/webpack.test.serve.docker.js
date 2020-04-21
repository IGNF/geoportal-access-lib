/* global module, __dirname, process */
var path    = require("path");
var webpack = require("webpack");

// plugin
var HtmlWebpackPlugin   = require("html-webpack-plugin");
var DefineWebpackPlugin = webpack.DefinePlugin;
var ReplaceWebpackPlugin = require("replace-bundle-webpack-plugin");

module.exports = {
    entry : {
        tests : path.join(__dirname, "../../test", "index.js")
    },
    output : {
        path : path.join(__dirname, "test"),
        filename : "test_bundle.js",
        libraryTarget : "umd"
    },
    externals : ["request", "xmldom"],
    devtool : "eval-source-map",
    devServer : {
        stats : "errors-only",
        host : "0.0.0.0",
        disableHostCheck: true,
        port : 9012,
        hot : true,
        watchOptions : {
            watch : true,
            poll : true
        },
        overlay : {
            errors : true,
            warnings : false
        }
    },
    plugins : [
        // on veut les logs !
        // new DefineWebpackPlugin({
        //     __PRODUCTION__ : JSON.stringify(false)
        // }),
        new ReplaceWebpackPlugin(
        [
            {
                partten : /__PRODUCTION__/g,
                replacement : function () {
                    return false;
                }
            }
        ]),
        new HtmlWebpackPlugin({
            title : "Mocha Tests Units",
            filename : "index.html",
            template : require.resolve(
                "html-webpack-plugin/default_index.ejs"
            )
        })
    ]
};

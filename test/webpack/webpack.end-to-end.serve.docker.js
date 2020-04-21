/* global module, __dirname, process */
var path    = require("path");
var webpack = require("webpack");

// plugin
var HtmlWebpackPlugin   = require("html-webpack-plugin");
var DefineWebpackPlugin = webpack.DefinePlugin;

module.exports = env => {

    // -- options : test en mode mock/connect
    // ex. webpack --env.mock
    //  par defaut, false - en mode connect.
    var mock = (env) ? env.mock : false;

    return {
        entry : {
            tests : path.join(__dirname, "../../test", "index-end-to-end.js")
        },
        output : {
            path : path.join(__dirname, "test"),
            filename : "test_end-to-end_bundle.js",
            libraryTarget : "umd"
        },
        externals : ["request", "xmldom"],
        devtool : "eval-source-map",
        devServer : {
            stats : "errors-only",
            host : "0.0.0.0",
            disableHostCheck: true,
            port : 9013,
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
            new DefineWebpackPlugin({
                __PRODUCTION__ : JSON.stringify(false),
                __MOCK__ : JSON.stringify(mock)
            }),
            new HtmlWebpackPlugin({
                title : "Mocha Tests Functionnals",
                filename : "index.html",
                template : require.resolve(
                    "html-webpack-plugin/default_index.ejs"
                )
            })
        ]
    };
};

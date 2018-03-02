/* global module, __dirname, process */

// FIXME
// -- Sur le plugin JsDocWebPackPlugin, on force la version en 0.0.1 car la
// version 0.0.2 semble buggée !?
// -- On ne supprime pas le logger lors de la minification, mais on le desactive...

// -- modules
var path    = require("path");
var fs      = require("fs");
var header  = require("string-template");
var webpack = require("webpack");

// -- plugins
var BannerWebPackPlugin   = webpack.BannerPlugin;
var UglifyJsWebPackPlugin = webpack.optimize.UglifyJsPlugin;
var JsDocWebPackPlugin    = require("jsdoc-webpack-plugin");
var IgnoreWebPackPlugin   = webpack.IgnorePlugin;
var CleanWebpackPlugin    = require("clean-webpack-plugin");
var DefineWebpackPlugin   = webpack.DefinePlugin;
var ReplaceWebpackPlugin  = require("replace-bundle-webpack-plugin");
var ShellWebpackPlugin    = require("webpack-shell-plugin");

// -- variables
var licence = path.join(__dirname, "utils", "licence.tmpl");
var date    = new Date().toISOString().split("T")[0];
var version = require(path.join(__dirname, "package.json")).version;

module.exports = env => {

    // -- options :
    // ex. webpack --env.production
    // par defaut, false - en mode debug|source.
    var production = (env) ? env.production : false;

    return {
        entry : [
            path.join(__dirname, "src", "Gp")
        ],
        output : {
            path : path.join(__dirname, "dist"),
            filename : (production) ? "GpServices.js" : "GpServices-src.js",
            library : "Gp",
            libraryTarget : "umd",
            libraryExport : "default",
            umdNamedDefine : true
        },
        // utilisation des lib pour nodeJs uniquement
        externals : {
            request : {
                commonjs2 : "request",
                commonjs : "request"
            },
            xmldom : {
                commonjs2 : "xmldom",
                commonjs : "xmldom"
            }
        },
        devtool : (production) ? false : "source-map",
        module : {
            loaders : [
                {
                    test : /\.js$/,
                    include : path.join(__dirname, "src"),
                    exclude : /node_modules/,
                    loader : "babel-loader",
                    query : {
                        presets : ["env"]
                    }
                }
            ],
            rules : [
                {
                    test : /\.js$/,
                    enforce : "pre",
                    include : path.join(__dirname, "src"),
                    exclude : /node_modules/,
                    use : [
                        {
                            loader : "jshint-loader"
                        }
                    ]
                }
            ]
        },
        plugins : [
            /** EXECUTION DE EXEMPLES ET TESTS UNITAIRES */
            new ShellWebpackPlugin({
                onBuildExit : [],
                onBuildStart : ["npm run test"],
                onBuildEnd : (production) ? ["npm run sample -- --env.production"] : ["npm run sample"],
                safe : true
            }),
            /** REPLACEMENT DE VALEURS */
            new ReplaceWebpackPlugin(
                [
                    {
                        partten : /__GPVERSION__/g,
                        /** replacement de la clef __GPVERSION__ par la version du package */
                        replacement : function () {
                            return version;
                        }
                    },
                    {
                        partten : /__GPDATE__/g,
                        /** replacement de la clef __GPDATE__ par la date du build */
                        replacement : function () {
                            return date;
                        }
                    }
                ]
            ),
            /** GESTION DU LOGGER */
            new DefineWebpackPlugin({
                __PRODUCTION__ : JSON.stringify(production)
            }),
            /** NETTOYAGE DES REPERTOIRES TEMPORAIRES */
            new CleanWebpackPlugin([
                "jsdoc",
                "samples"
            ], {
                verbose : true
            }),
            /** GENERATION DE LA JSDOC */
            new JsDocWebPackPlugin({
                conf : path.join(__dirname, "jsdoc.json")
            }),
            /** AJOUT DE LA LICENCE */
            new BannerWebPackPlugin({
                banner : header(fs.readFileSync(licence, "utf8"), {
                    __DATE__ : date,
                    __VERSION__ : version
                }),
                raw : true,
                entryOnly : true
            })
        ]
        .concat(
            (production) ?
                /** MINIFICATION */
                new UglifyJsWebPackPlugin({
                    uglifyOptions : {
                        mangle : true,
                        warnings : false,
                        compress : false
                    }
                }) : []
        )
    };
};

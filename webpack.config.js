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

    // -- options : minification du bundle
    // ex. webpack --env.production
    //  par defaut, false - en mode source.
    var _production = (env) ? env.production : false;
    // -- options : nettoyage des répertoires temporaires
    // ex. webpack --env.clean
    //  par defaut, false.
    var _clean = (env) ? env.clean : false;

    // -- construction des plugins
    var _plugins = [];

    // - ajout des plugins sur l'option clean
    if (_clean) {
        _plugins.push(
          /** NETTOYAGE DES REPERTOIRES TEMPORAIRES */
          new CleanWebpackPlugin([
              "dist",
              "jsdoc",
              "samples",
              "tests"
          ], {
            verbose : true
        })
      );
    }

    // - ajout des plugins communs
    _plugins.push(
        /** EXECUTION DE EXEMPLES ET TESTS UNITAIRES */
        new ShellWebpackPlugin({
            onBuildExit : [],
            onBuildStart : ["npm run test"],
            onBuildEnd : (_production) ? (_clean) ?
              ["npm run sample -- --env.production --env.clean"] :
              ["npm run sample -- --env.production"] :
              ["npm run sample"],
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
            __PRODUCTION__ : JSON.stringify(_production)
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
    );

    // - ajout des plugins sur l'option de production
    if (_production) {
        _plugins.push(
            /** MINIFICATION */
            new UglifyJsWebPackPlugin({
                uglifyOptions : {
                    mangle : true,
                    warnings : false,
                    compress : false
                }
            })
        );
    }

    return {
        entry : [
            path.join(__dirname, "src", "Gp")
        ],
        output : {
            path : path.join(__dirname, "dist"),
            filename : (_production) ? "GpServices.js" : "GpServices-src.js",
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
        devtool : (_production) ? false : "source-map",
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
        plugins : _plugins
    };
};

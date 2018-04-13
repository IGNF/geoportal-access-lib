/* global module, __dirname, require */

// FIXME
// -- Sur le plugin JsDocWebPackPlugin, on force la version en 0.0.1 car la
// version 0.0.2 semble buggée !?
// -- On ne supprime pas le logger lors de la minification, mais on le desactive...
// -- SourceMap ne fonctionne plus !?

// -- modules
var path    = require("path");
var fs      = require("fs");
var header  = require("string-template");
var glob    = require("glob");
var webpack = require("webpack");

// -- plugins
var BannerWebPackPlugin    = webpack.BannerPlugin;
var UglifyJsWebPackPlugin  = webpack.optimize.UglifyJsPlugin;
var JsDocWebPackPlugin     = require("jsdoc-webpack-plugin");
var IgnoreWebPackPlugin    = webpack.IgnorePlugin;
var CleanWebpackPlugin     = require("clean-webpack-plugin");
var DefineWebpackPlugin    = webpack.DefinePlugin;
var ReplaceWebpackPlugin   = require("replace-bundle-webpack-plugin");
var ShellWebpackPlugin     = require("webpack-shell-plugin");
var HandlebarsPlugin       = require("./scripts/webpackPlugins/handlebars-plugin");
var HandlebarsLayoutPlugin = require("handlebars-layouts");
var CopyWebpackPlugin      = require("copy-webpack-plugin");
// var SourceMapDevToolWebpackPlugin = webpack.SourceMapDevToolPlugin;

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
                commonjs : "request",
                amd : "require"
            },
            xmldom : {
                commonjs2 : "xmldom",
                commonjs : "xmldom",
                amd : "require"
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
                            loader : "eslint-loader",
                            options : {
                                emitWarning : true
                            }
                        }
                    ]
                }
            ]
        },
        plugins : []
            /** NETTOYAGE DES REPERTOIRES TEMPORAIRES */
            .concat(
                (_clean) ? [
                    new CleanWebpackPlugin([
                        "dist",
                        "jsdoc",
                        "samples",
                        "tests"
                    ], {
                        verbose : true
                    })] : []

            )
            /** EXECUTION TESTS UNITAIRES */
            /** REPLACEMENT DE VALEURS */
            /** GESTION DU LOGGER */
            /** GENERATION DE LA JSDOC */
            /** AJOUT DE LA LICENCE */
            /** HANDLEBARS TEMPLATES */
            /** TEMPLATES INDEX */
            /** RESOURCES COPY FOR SAMPLES */
            .concat(
                new ShellWebpackPlugin({
                    onBuildExit : [],
                    onBuildStart : ["npm run test"],
                    onBuildEnd : [],
                    safe : true
                }),
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
                new DefineWebpackPlugin({
                    __PRODUCTION__ : JSON.stringify(_production)
                }),
                new JsDocWebPackPlugin({
                    conf : path.join(__dirname, "jsdoc.json")
                }),
                new BannerWebPackPlugin({
                    banner : header(fs.readFileSync(licence, "utf8"), {
                        __DATE__ : date,
                        __VERSION__ : version
                    }),
                    raw : true,
                    entryOnly : true
                }),
                new HandlebarsPlugin(
                    {
                        entry : {
                            path : path.join(__dirname, "samples-src", "pages"),
                            pattern : "**/pages-*.html"
                        },
                        output : {
                            path : path.join(__dirname, "samples"),
                            flatten : false,
                            filename : (_production) ? "[name].html" : "[name]-src.html"
                        },
                        helpers : [
                            HandlebarsLayoutPlugin
                        ],
                        partials : [
                            path.join(__dirname, "samples-src", "templates", "*.hbs"),
                            path.join(__dirname, "samples-src", "templates", "partials", "*.hbs")
                        ],
                        context : [
                            path.join(__dirname, "samples-src", "config.json"),
                            {
                                mode : (_production) ? "" : "-src"
                            }
                        ]
                    }
                ),
                new HandlebarsPlugin(
                    {
                        entry : path.join(__dirname, "samples-src", "pages", "index.html"),
                        output : {
                            path : path.join(__dirname, "samples"),
                            filename : (_production) ? "[name].html" : "[name]-src.html"
                        },
                        context : {
                            samples : () => {
                                var root = path.join(__dirname, "samples-src", "pages");
                                var list = glob.sync(path.join(root, "**", "pages-*.html"));
                                list = list.map(function (filePath) {
                                    var relativePath = path.relative(root, filePath);
                                    var label = relativePath.replace("/", " -- ");
                                    var pathObj = path.parse(relativePath);
                                    return {
                                        filePath : path.join(pathObj.dir, pathObj.name.concat((_production) ? "" : "-src").concat(pathObj.ext)),
                                        label : label
                                    };
                                });
                                return list;
                            }
                        }
                    }
                ),
                new CopyWebpackPlugin([
                    {
                        from : path.join(__dirname, "samples-src", "resources", "**/*"),
                        to : path.join(__dirname, "samples", "resources"),
                        context : path.join(__dirname, "samples-src", "resources")
                    }
                ])
            )
            /** DEVTOOL */
            // .concat(
            //     (!_production) ? [
            //         new SourceMapDevToolWebpackPlugin({
            //             filename: 'GpServices-src.js.map'
            //         })] : []
            // )
            /** MINIFICATION */
            .concat(
                (_production) ? [
                    new UglifyJsWebPackPlugin({
                        output : {
                            comments : false,
                            beautify : false
                        },
                        uglifyOptions : {
                            mangle : true,
                            warnings : false,
                            compress : false
                        }
                    })] : []
            )
    };
};

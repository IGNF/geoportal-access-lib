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
var BannerWebPackPlugin      = webpack.BannerPlugin;
var TerserJsWebPackPlugin    = require("terser-webpack-plugin");
var JsDocWebPackPlugin       = require("jsdoc-webpack-plugin");
var IgnoreWebPackPlugin      = webpack.IgnorePlugin;
var CleanWebpackPlugin       = require("clean-webpack-plugin");
var DefineWebpackPlugin      = webpack.DefinePlugin;
var ReplaceWebpackPlugin   = require("replace-bundle-webpack-plugin");
var ShellWebpackPlugin     = require("webpack-shell-plugin");
var HandlebarsPlugin       = require("./scripts/webpackPlugins/handlebars-plugin");
var HandlebarsLayoutPlugin = require("handlebars-layouts");
var CopyWebpackPlugin      = require("copy-webpack-plugin");
// var SourceMapDevToolWebpackPlugin = webpack.SourceMapDevToolPlugin;

// -- performances
var SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
var smp = new SpeedMeasurePlugin();

// -- variables
var licence = path.join(__dirname, "utils", "licence.tmpl");
var date    = require(path.join(__dirname, "package.json")).date;
var version = require(path.join(__dirname, "package.json")).version;

module.exports = (env, argv) => {

    // -- options : minification du bundle
    // ex. webpack --mode=production
    var production = (argv.mode === "production") ? true : false;
    // -- options : sourcemap
    // ex. webpack --mode=development
    // sinon, mode none cad source sans optimisation
    var development = (argv.mode === "development") ? true : false;

    // -- options : nettoyage des répertoires temporaires
    // ex. webpack --env.clean
    //  par defaut, false.
    var clean = (env) ? env.clean : false;

    return smp.wrap({
        entry : [
            path.join(__dirname, "src", "Gp")
        ],
        output : {
            path : path.join(__dirname, "dist"),
            filename : (production) ? "GpServices.js" : (development) ? "GpServices-map.js" : "GpServices-src.js",
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
        devtool : (development) ? "eval-source-map" : false,
        stats : "none", // "verbose"
        optimization : {
            /** MINIFICATION */
            minimizer: [
                new TerserJsWebPackPlugin({
                    extractComments: false,
                    terserOptions: {
                        output: {
                            // FIXME avec les banner !
                            comments: "some",
                            // drop_console: true
                        },
                        mangle: true
                    }
                })
            ]
        },
        module : {
            rules : [
                {
                    /**
                    * transpilation avec babel des sources.
                    * (on exclut les dependances...)
                    */
                    test : /\.js$/,
                    include : [
                        path.join(__dirname, "src")
                    ],
                    exclude : /node_modules/,
                    use : {
                        loader : "babel-loader",
                        options : {
                            compact : false,
                            presets : [[
                                "@babel/preset-env", {
                                    // "useBuiltIns": "usage",
                                    "corejs": { version: '3.6', proposals: false },
                                    "debug": false
                                    // "loose": true,
                                    // "exclude": ['transform-typeof-symbol'],
                                    // "targets": {
                                    //     "ie" : "10"
                                    // }
                                }
                            ]]
                        }
                    }
                },
                {
                    /**
                    * controle des JS en mode warning.
                    * (on exclut les dependances)
                    */
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
                (clean) ? [
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
                    onBuildStart : [/* "npm run test" */],
                    onBuildEnd : [],
                    safe : true
                }),
                new ReplaceWebpackPlugin(
                    [
                        // {
                        //     partten : /__VERSION__/g,
                        //     /** replacement de la clef __VERSION__ par la version du package */
                        //     replacement : function () {
                        //         return version;
                        //     }
                        // },
                        // {
                        //     partten : /__DATE__/g,
                        //     /** replacement de la clef __DATE__ par la date du build */
                        //     replacement : function () {
                        //         return date;
                        //     }
                        // },
                        {
                            partten : /__PRODUCTION__/g,
                            replacement : function () {
                                /** replacement de la clef __PRODUCTION__ pour le LOGGER */
                                return production;
                            }
                        }
                    ]
                ),
                // new DefineWebpackPlugin({
                //     __PRODUCTION__ : JSON.stringify(production)
                // }),
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
                            filename : (production) ? "[name].html" : (development) ? "[name]-map.html" : "[name]-src.html"
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
                                mode : (production) ? "" : (development) ? "-map" : "-src"
                            }
                        ]
                    }
                ),
                new HandlebarsPlugin(
                    {
                        entry : path.join(__dirname, "samples-src", "pages", "index.html"),
                        output : {
                            path : path.join(__dirname, "samples"),
                            filename : (production) ? "[name]-prod.html" : (development) ? "[name]-map.html" : "[name]-src.html"
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
                                        filePath : path.join(pathObj.dir, pathObj.name.concat((production) ? "" : (development) ? "-map" : "-src").concat(pathObj.ext)),
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
                    },
                    {
                        from : path.join(__dirname, "samples-src", "pages-nodejs", "**/*.js"),
                        to : path.join(__dirname, "samples", "NodeJS"),
                        context : path.join(__dirname, "samples-src", "pages-nodejs")
                    }
                ])
            )
            /** DEVTOOL */
            // .concat(
            //     (!production) ? [
            //         new SourceMapDevToolWebpackPlugin({
            //             filename: 'GpServices-src.js.map'
            //         })] : []
            // )
    });
};

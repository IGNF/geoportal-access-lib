/* global process */

(function (gulp, gulpLoadPlugins) {
    "use strict";

    // gestion des paths
    var path  = require("path");

    var fs = require("fs");

    // load plugins
    var $ = gulpLoadPlugins({
        pattern : "*",
        lazy : true
    });

    // tests mocha
    $.mochaPhantomJS = require("gulp-mocha-phantomjs");

    var _ = {
        root :   $.shelljs.pwd(),
        src :    "./src",
        lib :    "./lib",
        test :   "./test",
        doc :    "./doc",
        sample : "./samples",
        dist :   "./dist",
        utils :  "./utils"
    };

    var build = {
        src   : "target/src",
        lib   : "target/lib",
        test  : "target/test",
        doc   : "target/doc",
        sample : "target/samples",
        js    : "target/js",
        umd   : "target/umd",
        dist  : "target/dist"
    };

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ Options
    // | > usage : gulp [task]
    // | > usage : gulp [task] --production
    // | > usage : gulp [task] --debug
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var opts = require("minimist")(process.argv.slice(2));
    var isProduction = opts.production;
    var distFileName = (isProduction ? "GpServices.js" : "GpServices-src.js") ;
    var isDebug = opts.debug;
    var distFileNameDebug = "GpServices-debug.js";
    var npmConf = require("./package.json") ;
    var buildDate = new Date().toISOString().split("T")[0] ;

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ jsonlint
    // | > Validation JSON (fichiers de configuration)
    // | > https:// www.npmjs.com/package/gulp-jsonlint
    // | > http:// jsonlint.com/
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("jsonlint", function () {

        return gulp.src([
            "package.json",
            "jsdoc.json",
            ".jshintrc",
            ".jscsrc"
            ])
            .pipe($.plumber())
            .pipe($.jsonminify())
            .pipe($.jsonlint())
            .pipe($.jsonlint.reporter());
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ jshint
    // | > Helps to detect errors and potential problems in code.
    // | > https:// www.npmjs.com/package/gulp-jshint
    // | > http:// jscs.info/rules.html
    // | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("jshint", function () {

        return gulp.src([
                path.join(_.src, "**/*.js")
             ])
            .pipe($.plumber())
            .pipe($.jshint(".jshintrc"))
            .pipe($.jshint.reporter("default"));
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ jscs
    // | > Coding conventions respect
    // | > https:// www.npmjs.com/package/gulp-jscs
    // | > http:// jscs.info/rules.html
    // |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("jscs", function () {

        return gulp.src([
                path.join(_.src, "**/*.js"),
                "gulpfile.js"
            ])
            .pipe($.plumber())
            .pipe($.jscs());
    });

    // *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ jsdoc
    // | > Documenting JavaScript with JSDoc.
    // | > http:// usejsdoc.org
    // | > cf. TODO
    // |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("jsdoc", function () {

        // TODO
        // find a plugin to do this !
        // cf. https:// www.npmjs.com/package/gulp-jsdoc
        // cf. https:// www.npmjs.com/package/gulp-jsdoc3

        var jsdoc = ["node_modules", ".bin", "jsdoc"].join(path.sep);
        var opts = " -c jsdoc.json";
        $.shelljs.exec(jsdoc + opts);

    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ mocha with phantomJS
    // | > JavaScript test framework running on node.js and the browser
    // | > http:// mochajs.org/
    // | > https:// www.npmjs.com/package/gulp-mocha-phantomjs
    // |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("mocha-phantomjs", function () {

        // pour information,
        // la ligne de commande est la suivante :
        // $.shelljs.exec("./node_modules/.bin/mocha --recursive -R list ./test/spec/");

        return gulp.src(path.join(_.test, "index-units.html"))
            .pipe($.mochaPhantomJS({
                reporter : "spec"
            }));
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ requirejs avec optimisation avec amdclean
    // | > Framework RequireJS
    // | > https:// github.com/gfranko/amdclean
    // | > principe -> http://requirejs.org/docs/optimization.html
    // | > options  -> https://github.com/jrburke/r.js/blob/master/build/example.build.js
    // | > astuces  -> http://stackoverflow.com/questions/23978361/using-gulp-to-build-requirejs-project-gulp-requirejs
    // |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("requirejs-amdclean", function (taskReady) {

        var requirejs = require("requirejs");

        // Pour information,
        // les valeurs possibles sont les suivantes :
        // uglify, uglify2, closure, or closure.keepLines
        var mode = "none";
        if (isProduction) {
            $.util.log("OK, mode optimisation...");
            mode = "uglify2";
        }

        requirejs.optimize({
            mainConfigFile : path.join(build.src,  "Config.js"),
            paths : {
                log4js : (isDebug) ? "../../node_modules/woodman/dist/woodman-amd" : "../lib/empty"
            },
            baseUrl : build.src,
            optimize : mode,
            uglify2 : {
                output : {
                    beautify : false
                },
                warnings : false,
                mangle : (isProduction) ? true : false
            },
            include : [
                "Gp"
            ],
            out : path.join(build.js, (isDebug ? distFileNameDebug : distFileName)),
            findNestedDependencies : false,
            preserveLicenseComments : false, // FIXME ne semble pas fonctionner !?
            useStrict : true,
            /** onBuildRead */
            onBuildRead : function (moduleName, path, contents) {

                console.log("Read module", moduleName, path);

                var _contentModified = null;

                if (!isDebug) {
                    var groundskeeper = require("groundskeeper");
                    var cleaner = groundskeeper({
                        console : true,                          // Keep console logs
                        debugger : false,                        // Keep debugger; statements
                        pragmas : ["development"],               // Keep pragmas with the following identifiers
                        namespace : [
                            "this.logger",
                            "self.logger",
                            "logger"
                       ] // Besides console also remove function calls in the given namespace,
                    });
                    cleaner.write(contents);

                    // entête du bundle "es6-promise" est à modifier !
                    // ex. es6Promise = typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define('es6-promise', factory) : global.ES6Promise = factory();
                    _contentModified = (moduleName === "es6-promise") ? cleaner.toString().replace("typeof exports === 'object'", "es6Promise = typeof exports === 'object'") : cleaner.toString();
                    
                } else {
                    _contentModified = contents;
                }

                return _contentModified;
            },
            /** onModuleBundleComplete */
            onModuleBundleComplete : function (data) {

                var amdclean = require("amdclean") ;
                var outputFile = data.path ;
                var dependencies = "var es6Promise;\n";

                fs.writeFileSync(outputFile, amdclean.clean({
                    filePath : outputFile,
                    transformAMDChecks : false,
                    prefixMode : "camelCase",
                    wrap : {
                        // on ajoute la dependance interne "es6Promise"
                        start : dependencies,
                        end  : ""
                    },
                    escodegen : {
                        comment : false,
                        format : {
                            indent : {
                                style : "    ",
                                adjustMultilineComment : true
                            }
                        }
                    }
                }));
            }
        }, function () {
            taskReady();
        }, function (error) {
            console.error("requirejs task failed", JSON.stringify(error));
            process.exit(1);
        });
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ requirejs avec optimisation (Not yet used !)
    // | > Framework RequireJS
    // | > https://www.npmjs.com/package/gulp-requirejs-optimize
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    // REMOVED (please browse history)

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ umd
    // | > Framework UMD
    // | > https://github.com/umdjs/umd
    // | > https://www.npmjs.com/package/gulp-umd
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("umd", ["requirejs-amdclean"], function () {

        var umd = require("gulp-umd");

        return gulp.src( path.join(build.js, (isDebug ? distFileNameDebug : distFileName)) )
            .pipe(umd({
                /** exports */
                exports : function (file) {
                    return "Gp";
                },
                /** namespace */
                namespace : function (file) {
                    return "Gp";
                },
                /** dependencies */
                dependencies : function (file) {
                    return [
                        {
                            name : "request",
                            global : "request",
                            cjs : "request",
                            param : "request",
                            amd : "require"
                        },
                        {
                            name : "xmldom",
                            global : "xmldom",
                            cjs : "xmldom",
                            param : "xmldom",
                            amd : "require"
                        }
                    ];
                }
            }))
            .pipe(gulp.dest( build.umd ))
            .pipe($.plumber())
            .pipe($.size());
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ licence
    // | > ajout d"une licence au bundle
    // | > https://www.npmjs.com/package/gulp-header
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("licence", function () {

        // pour information,
        // le fichier de licence peut être un template,
        // les balises en nottion ES6-style : ${date}
        var licence = path.join(_.utils, "licence-template.txt");

        return gulp.src([ path.join(build.umd, (isDebug ? distFileNameDebug : distFileName)) ])
                .pipe($.header(fs.readFileSync(licence, "utf8"), {
                    date : buildDate,
                    version : npmConf.version
                }))
                .pipe(gulp.dest(build.dist))
                .pipe($.plumber())
                .pipe($.size()) ;
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ sources
    // | > copie des sources js
    // | > https://www.npmjs.com/package/gulp-replace
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("sources", function () {

        return gulp.src([ path.join(_.src, "**/*.js") ])
                .pipe($.replace(/__GPVERSION__/g,npmConf.version))
                .pipe($.replace(/__GPDATE__/g,buildDate))
                .pipe(gulp.dest(build.src))
                .pipe($.plumber())
                .pipe($.size()) ;
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ template-sample
    // | > construction de la page principale des exemples
    // | > https:// www.npmjs.com/package/gulp-template
    // | > FIXME les dependances des exemples !
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("template-sample", function () {

        // var tmpl = require("gulp-template");
        var glob = require("glob");
        var rename = require("gulp-rename") ;

        // uniquement les html !
        var lstSources = glob.sync("**/*.html" , {
            cwd : "samples" , nodir : true, ignore : "index-samples.*"
        });

        console.log(lstSources);

        return gulp.src(path.join(_.sample, "index-samples.tpl"))
            .pipe($.template({
                files : lstSources
            }))
            .pipe(rename({
                extname : ".html"
            }))
            .pipe(gulp.dest(_.sample));
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ lib
    // | > copie des pages d"exemples
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("lib", function () {
        return gulp.src([ path.join(_.lib, "**") ])
                .pipe(gulp.dest(build.lib))
                .pipe($.plumber())
                .pipe($.size());
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ libdoc
    // | > copie du template jaguarjs-jsdoc
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("libdoc", function () {
        return gulp.src([ path.join(_.doc, "**") ])
                .pipe(gulp.dest(build.doc))
                .pipe($.plumber())
                .pipe($.size());
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ publish
    // | > copie du bundle pour distribution
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("publish", function () {
        return gulp.src([ path.join(build.dist, "**/*") ])
                .pipe(gulp.dest(_.dist))
                .pipe($.plumber())
                .pipe($.size()) ;
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ connect to web server for test
    // | > https://www.npmjs.com/package/gulp-connect
    // | > http://localhost:9001
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("connect", function () {
        $.connect.server({
            root : [_.root],
            livereload : true,
            port : 9001

        }) ;
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ server web test
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("server-test", ["connect"], function () {
        var open = require("open");
        open("http://localhost:9001/test/index-units.html");
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ server web test-fonctionnels
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("server-func", ["connect"], function () {
        var open = require("open");
        open("http://localhost:9001/test/index-functional-xhr.html?mock=false");
        open("http://localhost:9001/test/index-functional-jsonp.html?mock=false");
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ server web sample
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("server-sample", ["template-sample","connect"], function () {
        var open = require("open");
        open("http://localhost:9001/samples/index-samples.html");
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ watch test change
    // | > https://www.npmjs.com/package/gulp-watch
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("watch", ["server-test"], function () {
        $.watch({
            glob : [ path.join(_.test, "spec/**/*.js") ]
        }, function () {
            gulp.start("mocha-phantomjs");
        });
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ clean
    // | > nettoyage
    // | > https://www.npmjs.com/package/del
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("clean", [], function (cb) {
        var del = require("del");
        return del([
            build.dist + "/**",
            build.js + "/**",
            build.umd + "/**",
            build.doc + "/**",
            build.src + "/**",
            build.lib + "/**",
            build.sample + "/**"
        ]);
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ clean
    // | > nettoyage
    // | > https://www.npmjs.com/package/gulp-clean
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    // REMOVED (please browse history)

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ clean
    // | > nettoyage brutal
    // | > https://github.com/robrich/gulp-rimraf
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    // REMOVED (please browse history)

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ help
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("help", function () {
        $.util.log("Liste des target principales :");
        $.util.log(" - build : construction complète du projet.");
        $.util.log(" -- dist : construction de la librairie.");
        $.util.log(" -- check: controle des sources.");
        $.util.log(" -- test : execution des tests unitaires.");
        $.util.log(" -- sample : construction des exemples.");
        $.util.log(" -- doc  : construction de la JSDOC.");
        $.util.log(" -- clean  : suppression du répertoire 'target'.");
        $.util.log("Autres target :");
        $.util.log(" -- server-test : affichage des tests dans un navigateur.");
        $.util.log(" -- server-sample : affichage des exemples dans un navigateur.");
        $.util.log(" -- watch : mode developpement des tests.");
        $.util.log(" -- publish : publication de la librairie.");
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ tâche = alias
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("test", ["mocha-phantomjs"]);
    gulp.task("test-cloud", ["server-test"]);
    gulp.task("doc", ["build-doc"]); // sync
    gulp.task("check", ["jsonlint", "jshint", "jscs"]);
    gulp.task("src", ["sources", "lib"]);
    gulp.task("sample", ["template-sample"]);
    gulp.task("sample-cloud", ["server-sample"]);
    gulp.task("dist", ["build-only"]); // sync

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ synchronisation des tâches
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var runSequence = require("run-sequence");

    gulp.task("build", function (callback) {
        runSequence("check", "test", "sample", "dist", "doc", callback);
    });

    gulp.task("build-only", function (callback) {
        runSequence("src", "umd", "licence", callback);
    });

    gulp.task("build-doc", function (callback) {
        runSequence("libdoc", "jsdoc", callback);
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ tâche par default
    // "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("default", ["clean"], function () {
        gulp.start("build");
    });

}(require("gulp"), require("gulp-load-plugins")));

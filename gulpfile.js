/* global process */

(function (gulp, gulpLoadPlugins) {
    'use strict';

    // gestion des paths
    var path  = require("path");

    var $ = gulpLoadPlugins({pattern: '*', lazy: true});

    var _ = {
        root:   '.',
        src:    './src',
        lib:    './lib',
        test:   './test',
        doc:    './doc',
        sample: './samples',
        dist:   './dist',
        utils:  './utils'
    };

    var build = {
        src   : 'target/src',
        lib   : 'target/lib',
        test  : 'target/test',
        doc   : 'target/doc',
        sample: 'target/samples',
        js    : 'target/js',
        umd   : 'target/umd',
        dist  : 'target/dist'
    };

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ Options
    //| > usage : gulp [task]
    //| > usage : gulp [task] --production
    //| > usage : gulp [task] --debug
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var opts = require('minimist')(process.argv.slice(2));
    var isProduction = opts.production;
    var distFileName = (isProduction ? 'GpServices.js' : 'GpServices-src.js') ;
    var isDebug = opts.debug;
    var distFileNameDebug = 'GpServices-debug.js';
    var npmConf = require("./package.json") ;
    var buildDate = new Date().toISOString().split("T")[0] ;

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ jsonlint
    //| > Validation JSON (fichiers de configuration)
    //| > http://jsonlint.com/
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('jsonlint', function () {

        return gulp.src([
            'package.json',
            'jsdoc.json',
            '.jshintrc',
            '.jscsrc'
        ])
            .pipe($.plumber())
            .pipe($.jsonminify())
            .pipe($.jsonlint())
            .pipe($.jsonlint.reporter());
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ jshint
    //| > Helps to detect errors and potential problems in code.
    //| > http://jscs.info/rules.html
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('jshint', function () {

        return gulp.src([ path.join(_.src, '**/*.js') ])
            .pipe($.plumber())
            .pipe($.jshint('.jshintrc'))
            .pipe($.jshint.reporter('default'));
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ jscs
    //| > Coding conventions respect
    //| > http://jscs.info/rules.html
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    //var jscs = require('gulp-jscs');
    gulp.task('jscs', function () {

        return gulp.src([ path.join(_.src, '**/*.js') ])
            .pipe($.plumber())
            .pipe($.jscs());
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ jsdoc
    //| > Documenting JavaScript with JSDoc.
    //| > http://usejsdoc.org
    //| > cf. TODO
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('jsdoc', function () {

        // TODO
        // find a plugin to do this !
        // cf. https://www.npmjs.com/package/gulp-jsdoc
        // cf. https://www.npmjs.com/package/gulp-jsdoc3

        $.shelljs.exec('./node_modules/.bin/jsdoc -c jsdoc.json');

    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ mocha with phantomJS
    //| > JavaScript test framework running on node.js and the browser
    //| > http://mochajs.org/
    //| > https://www.npmjs.com/package/gulp-mocha-phantomjs
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('mocha-phantomjs', function () {

        // pour information,
        // la ligne de commande est la suivante :
        // $.shelljs.exec('./node_modules/.bin/mocha --recursive -R list ./test/spec/');

        var gmochaPhantomJS = require('gulp-mocha-phantomjs');

        return gulp.src(path.join(_.test, 'index.html'))
            .pipe(gmochaPhantomJS({reporter: 'spec'}));
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ requirejs avec optimisation avec amdclean
    //| > Framework RequireJS
    //| > https://github.com/gfranko/amdclean
    //| > principe -> http://requirejs.org/docs/optimization.html
    //| > options  -> https://github.com/jrburke/r.js/blob/master/build/example.build.js
    //| > astuces  -> http://stackoverflow.com/questions/23978361/using-gulp-to-build-requirejs-project-gulp-requirejs
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('requirejs-amdclean', function (taskReady) {

        var requirejs = require('requirejs');

        // Pour information,
        // les valeurs possibles sont les suivantes :
        // uglify, uglify2, closure, or closure.keepLines
        var mode = 'none';
        if (isProduction) {
            $.util.log("OK, mode optimisation...");
            mode = 'uglify2';
        }

        requirejs.optimize({
            mainConfigFile: path.join(build.src,  'Config.js'),
            paths : {
                log4js : (isDebug) ? "../lib/external/woodman/woodman-amd" : "../lib/external/empty"
            },
            baseUrl: build.src,
            optimize: mode,
            uglify2: {
                output: {
                    beautify: false
                },
                warnings: false,
                mangle: (isProduction)?true:false
            },
            include: [
                'Gp'
            ],
            out: path.join(build.js, (isDebug ? distFileNameDebug : distFileName)),
            findNestedDependencies: false,
            preserveLicenseComments: false, // FIXME ne semble pas fonctionner !?
            useStrict: true,
            onBuildRead: function (moduleName, path, contents) {

                if (!isDebug) {
                    var groundskeeper = require('groundskeeper');
                    var cleaner = groundskeeper({
                        console: true,                          // Keep console logs
                        debugger: false,                        // Keep debugger; statements
                        pragmas: ['development'],               // Keep pragmas with the following identifiers
                        namespace: [
                            'this.logger',
                            'self.logger',
                            'logger'
                       ] // Besides console also remove function calls in the given namespace,
                    });
                    cleaner.write(contents);
                    return cleaner.toString();
                }
                return contents;
            },
            onModuleBundleComplete: function (data) {

                var fs = require('fs'),
                         amdclean = require('amdclean'),
                         outputFile = data.path;

                fs.writeFileSync(outputFile, amdclean.clean({
                    'filePath': outputFile,
                    'prefixMode': 'camelCase',
                    'wrap': {
                         'start': '\n/* BEGIN CODE */\n',
                         'end'  : '\n/* END CODE   */\n'
                       },
                       'escodegen': {
                         'comment': false,
                         'format': {
                           'indent': {
                             'style': '    ',
                             'adjustMultilineComment': true
                           }
                         }
                       }
                }));
            }
        }, function () {
            taskReady();
        }, function (error) {
            console.error('requirejs task failed', JSON.stringify(error));
            process.exit(1);
        });
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ requirejs avec optimisation (Not yet used !)
    //| > Framework RequireJS
    //| > https://www.npmjs.com/package/gulp-requirejs-optimize
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    // REMOVED (please browse history)

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ umd
    //| > Framework UMD
    //| > https://github.com/umdjs/umd
    //| > https://www.npmjs.com/package/gulp-umd
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('umd', ['requirejs-amdclean'], function () {

        var umd = require('gulp-umd');

        return gulp.src( path.join(build.js, (isDebug ? distFileNameDebug : distFileName)) )
            .pipe(umd({
                exports: function (file) {
                    return 'Gp';
                },
                namespace: function (file) {
                    return 'Gp';
                }
            }))
            .pipe(gulp.dest( build.umd ))
            .pipe($.plumber())
            .pipe($.size());
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ licence
    //| > ajout d'une licence au bundle
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('licence', function () {

        // pour information,
        // le fichier de licence peut être un template,
        // les balises en nottion ES6-style : ${date}
        var fs      = require('fs');
        var header  = require('gulp-header');
        var licence = path.join(_.utils, "licence-template.txt");

        return gulp.src([ path.join(build.umd, (isDebug?  distFileNameDebug : distFileName)) ])
                .pipe(header(fs.readFileSync(licence, 'utf8'), {
                     date : buildDate,
                     version : npmConf.version
                }))
                .pipe(gulp.dest(build.dist))
                .pipe($.plumber())
                .pipe($.size()) ;
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ sources
    //| > copie des sources js
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('sources', function () {

        var replace = require('gulp-replace');

        return gulp.src([ path.join(_.src, '**/*.js') ])
                .pipe(replace(/__GPVERSION__/g,npmConf.version))
                .pipe(replace(/__GPDATE__/g,buildDate))
                .pipe(gulp.dest(build.src))
                .pipe($.plumber())
                .pipe($.size()) ;
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ copy-sample
    //| > copie des pages d'exemples
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('copy-sample', function () {
        return gulp.src([ path.join(_.sample, '**/*.html'), path.join(_.sample, '**/*.js') ])
                .pipe(gulp.dest(build.sample))
                .pipe($.plumber())
                .pipe($.size());
    });

    // |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // | ✓ template-sample
    // | > construction de la page principale des exemples leaflet ou ol3
    // | > https://www.npmjs.com/package/gulp-template
    // | > FIXME les dependances des exemples !
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task("template-sample", ['copy-sample'], function () {

        var tmpl = require("gulp-template");
        var glob = require("glob");

        // uniquement les html !
        var lstSources = glob.sync("**/*.html" , {
            cwd : build.sample , nodir : true, ignore : "index-samples.html"
        });

        console.log(lstSources);

        return gulp.src(path.join(_.sample, "index-samples.html"))
            .pipe(tmpl({
                'files' : lstSources
            }))
            .pipe(gulp.dest(build.sample));
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ lib
    //| > copie des pages d'exemples
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('lib', function () {
        return gulp.src([ path.join(_.lib, '**') ])
                .pipe(gulp.dest(build.lib))
                .pipe($.plumber())
                .pipe($.size());
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ libdoc
    //| > copie du template jaguarjs-jsdoc
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('libdoc', function () {
        return gulp.src([ path.join(_.doc, '**') ])
                .pipe(gulp.dest(build.doc))
                .pipe($.plumber())
                .pipe($.size());
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ publish
    //| > copie du bundle pour distribution
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('publish', function () {
        return gulp.src([ path.join(build.dist, '**/*') ])
                .pipe(gulp.dest(_.dist))
                .pipe($.plumber())
                .pipe($.size()) ;
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ connect to web server for test
    //| > http://localhost:9001
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('connect', $.connect.server({
        root: [_.root],
        livereload: true,
        port: 9001
    }));

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ server web test
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('server-test', ['connect'], function () {
        var open = require('open');
        open("http://localhost:9001/test/index.html");
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ server web sample
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('server-sample', ['connect'], function () {
        var open = require('open');
        open("http://localhost:9001/target/samples/index-samples.html");
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ watch test change
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('watch', ['server-test'], function () {
        $.watch({glob: [ path.join(_.test, 'spec/**/*.js') ]}, function () {
            gulp.start('mocha-phantomjs');
        });
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ clean
    //| > nettoyage
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('clean', [], function () {

        var stream = gulp.src([
            build.dist,
            build.js,
            build.umd,
            build.doc,
            build.src,
            build.sample,
            build.lib
        ], {force: true});
        return stream.pipe($.clean());
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ clean
    //| > nettoyage brutal
    //| > https://github.com/robrich/gulp-rimraf
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('clean-rimraf', [], function (cb) {
        var rimraf = require('rimraf');
        rimraf("./target", cb);
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ help
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('help', function () {
        $.util.log("Liste des 'target' principales :");
        $.util.log(" - build : construction complète du projet 'services'.");
        $.util.log(" -- dist : construction de la librairie des 'services'.");
        $.util.log(" -- check: controle des sources.");
        $.util.log(" -- test : execution des tests unitaires.");
        $.util.log(" -- doc  : construction de la JSDOC.");
        $.util.log(" -- publish : publication de la librairie des 'services'.");
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ tâche = alias
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('test', ['mocha-phantomjs']);
    gulp.task('test-cloud', ['server-test']);
    gulp.task('doc', ['build-doc']); // sync
    gulp.task('check', ['jsonlint', 'jshint', 'jscs']);
    gulp.task('src', ['sources', 'lib']);
    gulp.task('sample', ['template-sample']);
    gulp.task('sample-cloud', ['server-sample']);
    gulp.task('dist', ['build-only']); // sync

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ synchronisation des tâches
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var runSequence = require('run-sequence');

    gulp.task('build', function(callback) {
        runSequence('check', 'test', 'sample', 'dist', 'doc', callback);
    });

    gulp.task('build-only', function(callback) {
        runSequence('src', 'umd', 'licence', callback);
    });

    gulp.task('build-doc', function(callback) {
        runSequence('libdoc', 'jsdoc', callback);
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ tâche par default
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('default', ['clean'], function () {
        gulp.start('build');
    });

}(require('gulp'), require('gulp-load-plugins')));

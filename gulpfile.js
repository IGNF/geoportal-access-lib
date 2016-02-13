/* global process */

(function (gulp, gulpLoadPlugins) {
    'use strict';

    var $ = gulpLoadPlugins({pattern: '*', lazy: true}),
        _ = {
            root:   '.',
            src:    './src',
            lib:    './lib',
            test:   './test',
            doc:    './doc',
            sample: './samples',
            dist:   './dist'
        };

    var build = {
        src   : 'target/src',
        lib   : 'target/lib',
        test  : 'target/test', // not use
        doc   : 'target/doc',
        sample: 'target/samples',
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
    var distFileName= (isProduction ? 'GpServices.js' : 'GpServices-src.js' ) ;
    var isDebug = opts.debug;
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

        // pour information,
        // on ne controle que les sources
        //   '!' + 'gulpfile.js',
        //   '!' + _.lib + '/**/*.js',
        //   '!' + _.test + '/**/*.js'

        return gulp.src([ _.src + '/**/*.js'])
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

        // pour information,
        // on ne controle que les sources
        //   '!' + 'gulpfile.js',
        //   '!' + _.lib + '/**/*.js',
        //   '!' + _.test + '/**/*.js'

        return gulp.src([ _.src + '/**/*.js'])
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

        // FIXME
        // trouver un plugin to do this !
        // cf. https://www.npmjs.com/package/gulp-jsdoc

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

        return gulp
                .src('./test/index.html')
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
            mainConfigFile: build.src + '/Config.js',
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
            out: build.dist + (isDebug ? '/js/debug/' : '/js/' ) + distFileName,
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

        var umd    = require('gulp-umd');

        return gulp.src( build.dist + (isDebug ? '/js/debug/' : '/js/') + distFileName)
            .pipe(umd({
                exports: function (file) {
                    return 'Gp';
                },
                namespace: function (file) {
                    return 'Gp';
                }
            }))
            .pipe(gulp.dest( build.dist + (isDebug ? '/umd/debug/' : '/umd/')))
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
        var licence = "./utils/licence-template.txt";

        return gulp.src([build.dist + '/**/' + (isDebug? 'debug/' : '' ) + distFileName])
                .pipe(header(fs.readFileSync(licence, 'utf8'), { 
                     date : buildDate,
                     version : npmConf.version
                }))
                .pipe(gulp.dest(build.dist))
                .pipe($.plumber())
                .pipe($.size()) ;
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ publish
    //| > copie du bundle pour distribution
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('publish', function () {
        return gulp.src([build.dist + '/**'])
                .pipe(gulp.dest(_.dist))
                .pipe($.plumber())
                .pipe($.size()) ;
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ sources
    //| > copie des sources js
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('sources', function () {

        var replace = require('gulp-replace');
        
        return gulp.src([_.src + '/**/*.js'])
                .pipe(replace(/__GPVERSION__/g,npmConf.version))
                .pipe(replace(/__GPDATE__/g,buildDate))
                .pipe(gulp.dest(build.src))
                .pipe($.plumber())
                .pipe($.size()) ;
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ samples
    //| > copie des pages d'exemples
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('samples', function () {
        return gulp.src([_.sample + '/**/*.html', _.sample + '/**/*.js'])
                .pipe(gulp.dest(build.sample))
                .pipe($.plumber())
                .pipe($.size());
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ lib
    //| > copie des pages d'exemples
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('lib', function () {
        return gulp.src([_.lib + '/**'])
                .pipe(gulp.dest(build.lib))
                .pipe($.plumber())
                .pipe($.size());
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ libdoc
    //| > copie du template jaguarjs-jsdoc
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('libdoc', function () {
        return gulp.src([_.doc + '/**'])
                .pipe(gulp.dest(build.doc))
                .pipe($.plumber())
                .pipe($.size());
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ connect to web server for test
    //| > http://localhost:9001
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('connect', $.connect.server({
        root: [".."], // [_.test],
        livereload: true,
        port: 9001
    }));

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ server web test
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('server', ['connect'], function () {
        gulp.start('webtest');
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ environnement
    //| > open web server
    //| > FIXME Linux : Impossible d'obtenir le descripteur de fichier faisant
    //|                 référence à la console
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('webtest', function () {
        $.shelljs.exec('open http://localhost:9001');
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ watch test change
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('watch', ['server'], function () {
        $.watch({glob: [_.test + '/spec/**/*.js']}, function () {
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
        $.util.log(" -- src  : construction de la librairie des 'services'.");
        $.util.log(" -- test : execution des tests unitaires.");
        $.util.log(" -- doc  : construction de la JSDOC.");
        $.util.log(" -- publish : publication de la librairie des 'services'.");
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ tâche = alias
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('mocha', ['mocha-phantomjs']);
    gulp.task('test', ['mocha']);
    gulp.task('test-cloud', ['server']);
    gulp.task('check', ['jsonlint', 'jshint', 'jscs']);
    gulp.task('src', ['sources', 'samples', 'lib']);

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ synchronisation des tâches
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var runSequence = require('run-sequence');
    gulp.task('doc', function(callback) {
        runSequence('libdoc', 'jsdoc', callback);
    });
    gulp.task('build', function(callback) {
        runSequence('check', 'test', 'src', 'umd', 'doc', 'licence', callback);
    });
    gulp.task('build-only', function(callback) {
        runSequence('src', 'umd', 'licence', callback);
    });

    //|**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //| ✓ tâche par default
    //'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    gulp.task('default', ['clean'], function () {
        gulp.start('build');
    });

}(require('gulp'), require('gulp-load-plugins')));

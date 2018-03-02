/* global process */
var gulp  = require("gulp");
var path  = require("path");
var tmpl  = require("gulp-template");
var clean = require("gulp-clean");
var glob  = require("glob");
var hb    = require("gulp-hb");
var rename = require("gulp-rename");

var opts = require("minimist")(process.argv.slice(2));
var optsProduction = (opts.env && opts.env.production) ? true : false;
var optsClean = (opts.env && opts.env.clean) ? true : false;

// |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// | ✓ template
// | > gestion des exemples à base de templates with handlebars
// | > https://github.com/shannonmoeller/gulp-hb
// | > https://github.com/shannonmoeller/handlebars-layouts
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("template", function (cb) {

    var builddir = path.join("samples", "pages");
    var srcdir   = path.join("samples-src");

    var hbStream = hb({
        cwd : process.cwd(),
        debug : false
    })
    .partials(path.join(srcdir, "templates", "partials", "*.hbs"))
    .partials(path.join(srcdir, "templates", "*.hbs"))
    .helpers(require("handlebars-layouts"))
    .data({ // .data(path.join(srcdir, "config.json"));
        config : {
            baseurl : "../..",
            bundle : (optsProduction) ? "GpServices.js" : "GpServices-src.js",
            resources : "../../res",
            apiKey : "jhyvi0fgmnuxvfv0zjzorvdn" // FIXME autoconf local !
        }
    });

    return gulp
        .src(path.join(srcdir, "pages", "**", "pages-*.html"))
        .pipe(hbStream)
        .pipe(gulp.dest(builddir));
});

// |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// | ✓ resources
// | > copie des ressources des exemples
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("resources", function () {
    var builddir = path.join("samples", "res");
    var resdir   = path.join("samples-src", "resources");

    var resources  = [];
    resources.push(path.join(resdir, "**"));

    return gulp.src(resources)
        .pipe(gulp.dest(builddir));
});

// |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// | ✓ bundle
// | > copie des bundles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("bundle", function () {
    var builddir = path.join("samples", "lib");
    var distdir  = path.join("dist");

    var bundles  = [];
    bundles.push(path.join(distdir, "**"));

    return gulp.src(bundles)
        .pipe(gulp.dest(builddir));
});

// |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// | ✓ index
// | > construction de la page principale des exemples
// | > https:// ww.npmjs.com/package/gulp-template
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("index", function () {

    var builddir = path.join("samples");
    var srcfiles = path.join("pages", "**", "*.html");
    var index    = path.join("samples-src", "pages", "index.html");

    return gulp.src(index)
        .pipe(tmpl({
            files : glob.sync(srcfiles , {
                cwd : builddir,
                nodir : true
            })
        }))
        .pipe(gulp.dest(builddir));
});

// **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ✓ clean
//  > nettoyage du répertoire des exemples (_samples)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("clean", function () {

    var builddir = path.join("samples");

    var stream = gulp.src([
        builddir
    ], {
        force : true
    });
    return stream.pipe(clean());
});

// **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ✓ tâche principale
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
var runSequence = require("run-sequence");

gulp.task("sample", function (cb) {
    if (optsClean) {
        runSequence("clean", "template", "resources", "bundle",  "index", cb);
    } else {
        runSequence("template", "resources", "bundle",  "index", cb);
    }
});

// **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ✓ tâche par default
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("default", function () {
    gulp.start("sample");
});

/* global process */
var gulp  = require("gulp");
var path  = require("path");
var tmpl  = require("gulp-template");
var clean = require("gulp-clean");
var glob  = require("glob");
var hb    = require("gulp-hb");
var rename= require("gulp-rename");

// |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// | ✓ samples-process-template
// | > gestion des exemples à base de templates with handlebars
// | > https://github.com/shannonmoeller/gulp-hb
// | > https://github.com/shannonmoeller/handlebars-layouts
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("samples-process-template", function (cb) {

    var builddir = path.join("_samples", "pages");
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
            bundle : "GpServices-src.js", // FIXME param !
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
// | ✓ samples-copy-resources
// | > copie des ressources des exemples
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("samples-copy-resources", function () {
    var builddir = path.join("_samples", "res");
    var resdir   = path.join("samples-src", "resources");

    var resources  = [];
    resources.push(path.join(resdir, "**"));

    return gulp.src(resources)
        .pipe(gulp.dest(builddir));
});

// |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// | ✓ samples-copy-bundle
// | > copie des bundles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("samples-copy-bundle", function () {
    var builddir = path.join("_samples", "lib");
    var distdir  = path.join("dist");

    var bundles  = [];
    bundles.push(path.join(distdir, "**"));

    return gulp.src(bundles)
        .pipe(gulp.dest(builddir));
});

// |**~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// | ✓ samples-process-index
// | > construction de la page principale des exemples
// | > https:// ww.npmjs.com/package/gulp-template
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("samples-process-index", function () {

    var builddir = path.join("_samples");
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
//  ✓ samples-clean
//  > nettoyage du répertoire des exemples (_samples)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("samples-clean", function () {

    var builddir = path.join("_samples");

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
    runSequence("samples-clean", "samples-process-template", "samples-copy-resources", "samples-copy-bundle",  "samples-process-index", cb);
});

// **~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ✓ tâche par default
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
gulp.task("default", function () {
    gulp.start("sample");
});

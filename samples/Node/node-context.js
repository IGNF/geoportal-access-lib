/* global module, require, __dirname */

var requirejs = require('requirejs');

requirejs.config({
    baseUrl : __dirname + '/../../src',
    nodeRequire : require,
    paths : {
        // lib external
        "log4js" : "../node_modules/woodman/dist/woodman-amd",
        'es6-promise' : '../node_modules/es6-promise/dist/es6-promise',
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

var Gp = requirejs('Gp');

console.log("Loading context...", Gp);

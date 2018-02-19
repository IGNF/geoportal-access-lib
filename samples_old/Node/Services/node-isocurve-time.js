/* global module, require, __dirname */

var requirejs = require("requirejs");

requirejs.config({
    baseUrl : __dirname + "/../../../src",
    nodeRequire : require,
    paths : {
        // lib external
        log4js : "../node_modules/woodman/dist/woodman-amd",
        'es6-promise' : "../node_modules/es6-promise/dist/es6-promise",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

var Gp = requirejs("Gp");

var options = {
    apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
    // httpMethod : 'GET',
    // outputFormat : 'json',
    onSuccess : function (response) {
        console.log(response);
    },
    onFailure : function (error) {
        console.log(eror);
    },
    // spécifique au service
    position : {
        x : 2.35,
        y : 48.87
    },
    time : 10
};

Gp.Services.isoCurve(options);

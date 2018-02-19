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
        console.log(error);
    },
    // spécifique au service
    text : process.argv[2] || "Saint-Mandé",
    maximumResponses : process.argv[3] || 10,
    filterOptions : {
        type : (process.argv[4]) ? [process.argv[4]] : ["StreetAddress"],
        territory : (process.argv[5]) ? [process.argv[5]] : ["METROPOLE"]
    },
};

Gp.Services.autoComplete(options);

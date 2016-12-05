/* global module, require, __dirname */

var requirejs = require("requirejs");

requirejs.config({
    baseUrl : __dirname + "/../../../src",
    nodeRequire : require,
    paths : {
        // lib external
        log4js : "../lib/external/woodman/woodman-amd",
        promise : "../lib/external/promise",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

var Geocode = requirejs("Services/Geocode/Geocode");

var options = {
    apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
    // httpMethod : 'GET',
    // outputFormat : 'json',
    protocol : 'XHR',
    onSuccess : function (response) {
        console.log(response);
    },
    onFailure : function (error) {
        console.log(eror);
    },
    // spécifique au service
    location : "2 avenue de paris, 94166 Saint-Mandée"
};

var obj = new Geocode(options);
obj.call();

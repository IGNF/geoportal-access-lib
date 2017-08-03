/* global module, require, __dirname */

var requirejs = require("requirejs");

requirejs.config({
    baseUrl : __dirname + "/../../../src",
    nodeRequire : require,
    paths : {
        // lib external
        log4js : "../lib/external/woodman/woodman-amd",
        'es6-promise' : "../lib/external/es6-promise-4.1.0",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

var Protocol = requirejs("Protocols/Protocol");

var options = {
    url        : "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/alti/rest/elevation.json?lon=3.30&lat=49.97",
    method     : "GET",
    protocol   : 'XHR',
    onResponse : function (response) {
        console.log("Reponse :", response);
    },
    onFailure  : function (error) {
        console.log("Erreur :", error);
    }
};

Protocol.send(options);

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

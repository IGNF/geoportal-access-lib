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

var Route = requirejs("Services/Route/Route");

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
    startPoint : {
        x : 2.3,
        y : 48.8
    },
    endPoint : {
        x : 2.4,
        y : 48.9
    }
};

var obj = new Route(options);
obj.call();

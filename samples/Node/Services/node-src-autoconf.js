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

var AutoConf = requirejs("Services/AutoConf/AutoConf");

var options = {
    apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
    protocol : 'XHR',
    onSuccess : function (response) {
        console.log(response);
    }
};

var obj = new AutoConf(options);
obj.call();

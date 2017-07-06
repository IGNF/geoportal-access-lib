/* global module, require, __dirname */

var requirejs = require("requirejs");

requirejs.config({
    baseUrl : __dirname + "/../../../src",
    nodeRequire : require,
    paths : {
        // lib external
        log4js : "../node_modules/woodman/dist/woodman-amd",
        'es6-promise' : "../lib/es6-promise/es6-promise-4.1.0",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

var AutoComplete = requirejs("Services/AutoComplete/AutoComplete");

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
    text : "Brie-Co"
};

var obj = new AutoComplete(options);
obj.call();

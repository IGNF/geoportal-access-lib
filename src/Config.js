/* global requirejs */

requirejs.config({
    baseUrl : "",
    paths : {
        // lib external
        log4js : "../../node_modules/woodman/dist/woodman-amd", // en mode 'production', log4js : "../lib/empty"
        "es6-promise" : "../lib/es6-promise/es6-promise-4.1.0",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

/* global requirejs */

requirejs.config({
    baseUrl : "",
    paths : {
        // lib external
        log4js : "../lib/external/woodman/woodman-amd", // en mode 'production', log4js : "../lib/external/empty"
        "es6-promise" : "../lib/external/es6-promise-4.1.0",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

/* global requirejs */

requirejs.config({
    baseUrl : "",
    paths : {
        // lib external
        log4js : "../lib/external/woodman/woodman-amd", // en mode 'production', log4js : "../lib/external/empty"
        promise : "../lib/external/es6-promise", // version auto !
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

/* global requirejs */

requirejs.config({
    baseUrl : "",
    paths : {
        // lib external
        log4js : "../lib/external/woodman/woodman-amd", // en mode 'production', log4js : "../lib/external/empty"
        promise : "../lib/external/promise",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});
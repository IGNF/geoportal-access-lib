/* global requirejs */

requirejs.config({
    baseUrl : "",
    paths : {
        // lib external
        log4js : "../../node_modules/woodman/dist/woodman-amd", // en mode 'production', log4js : "../lib/empty"
        "es6-promise" : "../../node_modules/es6-promise/dist/es6-promise",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

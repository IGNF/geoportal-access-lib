/* global requirejs */

requirejs.config({
    baseUrl : "",
    paths : {
        // lib external
        log4js : "../../node_modules/woodman/dist/woodman-amd", // en mode 'production', log4js : "../lib/external/empty"
        // FIXME : still needs es6-promise in lib/external
        //         Latest npm release header does not fit ; causes following the  error :
        // 15:19:51,413 ReferenceError: es6Promise is not defined 1 GpServices-src.js:815:1
        // "es6-promise" : "../../node_modules/es6-promise/dist/es6-promise",
        "es6-promise" : "../lib/external/es6-promise-4.1.0",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

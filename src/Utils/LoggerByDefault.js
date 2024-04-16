import * as Log from "loglevel";

var LoggerByDefault = {
    /**
     * logger statique
     *
     * @static
     * @param {String} name - nom du logger
     * @returns {Object} retourne un logger
     */
    getLogger : function (name) {
        // Substitute global constants configured at compile time
        // cf. webpack.config.js
        // on définit process si non défini dans l'environnement
        // eslint-disable-next-line no-use-before-define
        if (typeof process === "undefined") {
            var process = {};
            process.env = {
                VERBOSE : false
            };
        }
        (process.env.VERBOSE) ? Log.enableAll() : Log.disableAll();
        var logname = name || "default";
        return Log.getLogger(logname);
    }
};

export default LoggerByDefault;

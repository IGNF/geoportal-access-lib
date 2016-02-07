define(["log4js", "logger-cfg"], function (Log4js, Config) {

    "use strict";

    var LoggerByDefault = {
        /** logger statique */
        getLogger : function (name) {
            Log4js.load(Config, function (error) {
                if (error) {
                    // FIXME comment traite t on cette exception !?
                    throw error;
                }
            });
            var logname = name || "default";
            return Log4js.getLogger(logname);
        }
    };

    return LoggerByDefault;
});


define(["log4js", "logger-cfg"], function (Log4js, Config) {

    "use strict";

    /**
     * @classdesc
     * Description Logger
     * @constructor
     * @alias Gp.Utils.Logger
     * @param {String} name - nom du logger
     * @private
     */
    function Logger (name) {

        if (!(this instanceof Logger)) {
            throw new TypeError("Logger constructor cannot be called as a function.");
        }

        Log4js.load(Config, function (err) {
            if (err) {
                throw err;
            }
        });

        this.logger = Log4js.getLogger(name || "logger");
    }

    /** settings */
    Logger.getSettings = function () {
        return Config;
    };

    /**
     * @lends module:Logger#
     */
    Logger.prototype = {

        /**
         * Constructeur (alias)
         */
        constructor : Logger,
        /**
         * Description
         *
         * @param {String} message - message
         */
        log : function (message) {
            this.logger.log("<!% " + message + " %!>");
        },

        /**
         * Description
         *
         * @param {String} message - message
         */
        debug : function (message) {
            this.logger.trace("<!% " + message + " %!>");
        },

        /**
         * Description
         *
         * @param {String} message - message
         */
        trace : function (message) {
            this.logger.trace("<!% " + message + " %!>");
        },

        /**
         * Description
         *
         * @param {String} message - message
         */
        info : function (message) {
            this.logger.info("<!% " + message + " %!>");
        },

        /**
         * Description
         *
         * @param {String} message - message
         */
        warn : function (message) {
            this.logger.warn("<!% " + message + " %!>");
        },
        
        /**
         * Description
         *
         * @param {String} message - message
         */
        error : function (message) {
            this.logger.error("<!% " + message + " %!>");
        }

    };

    return Logger;
});

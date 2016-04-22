/* global Promise */

/**
 * Requêtes Ajax (utilisation des Promises)
 * cf. https://xhr.spec.whatwg.org/
 * cf. https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 *
 * @module XHR
 * @private
 * @alias Gp.Protocols.XHR
 * @see dependance 'promise'
 */

define([
    "Utils/LoggerByDefault",
    "Utils/Helper",
    "promise"
],
function (Logger, Helper, ES6Promise) {

    "use strict";

    // TODO
    // gestion du DELETE, PUT, ...
    // ...

    var XHR = {

        /**
         * Interface unique d'envoi d'une requête.
         *
         * @method call
         * @static
         * @param {Object} settings - options generales
         * @param {String} settings.url    - url du service
         * @param {String} settings.method - GET, POST, PUT, DELETE
         * @param {String} settings.format - format de la reponse du service : json, xml ou null (brute)
         * @param {String} settings.data   - content (post) ou param (get)
         * @param {Object|String} settings.headers - (post) ex. referer
         * @param {Object|String} settings.content - (post) ex. 'application/json'
         * @param {String} settings.timeOut - timeout = 0 par defaut
         * @param {String} settings.scope          - this (TODO)
         * @param {Function} settings.onResponse - callback
         * @param {Function} settings.onFailure  - callback
         */
        call : function (settings) {

            // logger
            var logger = Logger.getLogger("XHR");
            logger.trace("[XHR::call()]");

            // To polyfill the global environment
            ES6Promise.polyfill();

            // test sur les settings obligatoires
            if (! settings.url) {
                throw new Error("missing parameter : url is not defined !");
            }

            if (! settings.method) {
                throw new Error("missing parameter : method is not defined !");
            }

            if (! settings.format) {
                settings.format = "text"; // reponse brute !
            }

            var options = {};
            options.url    = settings.url;
            options.data   = settings.data ? settings.data : null;
            options.method = settings.method;
            options.timeOut  = settings.timeOut || 0;
            // options.scope  = settings.scope || this;

            // test sur les valeurs de 'settings.method'
            switch (settings.method) {
                case "GET" :
                    break;
                case "POST"  :
                    // params spécifiques au mode POST
                    options.content = settings.content ? settings.content : "application/x-www-form-urlencoded"; // FIXME en attente des services : bascule en "application/xml" ou "application/json"
                    options.headers = settings.headers ? settings.headers : {
                        referer : "http://localhost" // todo ...
                    };
                    break;
                case "DELETE":
                case "PUT"   :
                    throw new Error("HTTP method not yet supported !");
                default :
                    throw new Error("HTTP method unknown !");
            }

            // test sur les valeurs de 'settings.format'
            switch (settings.format) {
                case "text":
                    this.__call(options)
                            .then( function (response) {
                                logger.trace(response);
                                settings.onResponse.call(this, response);
                            })
                            .catch( function (error) {
                                settings.onFailure.call(this, error);
                            });
                    break;
                case "json":
                    this.__callJSON(options)
                            .then( function (response) {
                                logger.trace(response);
                                settings.onResponse.call(this, response);
                            })
                            .catch( function (error) {
                                settings.onFailure.call(this, error);
                            });
                    break;
                case "xml":
                    this.__callXML(options)
                            .then( function (response) {
                                logger.trace(response);
                                settings.onResponse.call(this, response);
                            })
                            .catch( function (error) {
                                settings.onFailure.call(this, error);
                            });
                    break;
                default:
                    throw new Error("This output Format is not yet supported !");
            }
        },

        /**
         * Requete
         *
         * @method __call
         * @private
         * @param  {Object} options - options
         * @return {Object} promise
         */
        __call : function (options) {

            var logger = Logger.getLogger("XHR");
            logger.trace("[XHR::__call()]");

            var promise = new Promise(
                function (resolve, reject) {

                    // traitement des params 'data' en mode GET
                    if (options.data && options.method == "GET") {
                        options.url = Helper.normalyzeUrl(options.url, options.data);
                    }

                    logger.trace("URL = ", options.url);

                    var hXHR = null;

                    if (window.XDomainRequest) {
                        // worked in Internet Explorer 8–10 only !
                        logger.trace("XDomainRequest");

                        hXHR = new XDomainRequest();
                        hXHR.open(options.method, options.url);

                        hXHR.overrideMimeType = options.content;

                        if (options.timeOut > 0) {
                            hXHR.timeout = options.timeout;
                            logger.trace("XHR - TimeOut actif !");
                        }

                        if (options.method !== "GET") {
                            // headers, data, content of data
                            // cf. https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html#dom-xmlhttprequest-setrequestheader
                            hXHR.setRequestHeader("Content-type", options.content);
                            // FIXME refused to set unsafe header content-length javascript
                            // hXHR.setRequestHeader("Content-length", options.data.length);
                            // hXHR.setRequestHeader("Referer", options.headers.referer);
                        }

                        /**
                         * Description
                         *
                         * @method onerror
                         * @private
                         */
                        hXHR.onerror = function () {
                            reject(new Error("Errors Occured on Http Request with XMLHttpRequest !"));
                        };

                        /**
                         * Description
                         *
                         * @method ontimeout
                         * @private
                         */
                        hXHR.ontimeout = function () {
                            reject(new Error("TimeOut Occured on Http Request with XMLHttpRequest !"));
                        };

                        /**
                         * Description
                         *
                         * @method onload
                         * @private
                         */
                        hXHR.onload  = function () {

                            if (hXHR.status == 200) {
                                resolve(hXHR.response);
                            } else {
                                var message = "Errors Occured on Http Request (status : '" + hXHR.status + "' | response : '" + hXHR.response + "')";
                                var status  = hXHR.status;
                                reject({
                                    message : message,
                                    status  : status
                                });
                            }
                        };

                        var data4xdr = (options.data && options.method == "POST") ? options.data : null;

                        hXHR.send(data4xdr);
                    } else if (window.XMLHttpRequest) {

                        logger.trace("XMLHttpRequest");

                        hXHR = new XMLHttpRequest();
                        hXHR.open(options.method, options.url, true); // async
                        hXHR.overrideMimeType = options.content;

                        // gestion du timeout
                        var onTimeOutTrigger = null;
                        if (options.timeOut > 0) {
                            // FIXME le timeout interne ne me permet pas de declencher le bon message...
                            // hXHR.timeout = options.timeOut;
                            logger.trace("XHR - TimeOut actif !");
                            /**
                             * Description
                             *
                             * @method onTimeOutTrigger
                             * @private
                             */
                            onTimeOutTrigger = window.setTimeout(
                                function () {
                                    var message = "TimeOut Occured on Http Request with XMLHttpRequest !";
                                    reject({
                                        message : message,
                                        status  : -1
                                    });
                                }, options.timeOut);
                        }

                        if (options.method !== "GET") {
                            // headers, data, content of data
                            // cf. https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html#dom-xmlhttprequest-setrequestheader
                            logger.trace("data = ", options.data);
                            hXHR.setRequestHeader("Content-type", options.content);
                            // FIXME refused to set unsafe header content-length javascript
                            // hXHR.setRequestHeader("Content-length", options.data.length);
                            // hXHR.setRequestHeader("Referer", options.headers.referer);
                        }

                        /**
                         * Description
                         * FIXME ne se declenche pas !?
                         *
                         * @method onerror
                         * @private
                         */
                        hXHR.onerror = function (e) {
                            console.log(e);
                            reject(new Error("Errors Occured on Http Request with XMLHttpRequest !"));
                        };

                        /**
                         * Description
                         * FIXME ne se declenche pas !?
                         *
                         * @method ontimeout
                         * @private
                         */
                        hXHR.ontimeout = function () {
                            reject(new Error("TimeOut Occured on Http Request with XMLHttpRequest !"));
                        };

                        /**
                         * Description
                         *
                         * @method onreadystatechange
                         * @private
                         */
                        hXHR.onreadystatechange = function () {

                            if (hXHR.readyState == 4) { // DONE
                                if (hXHR.status == 200) {
                                    window.clearTimeout(onTimeOutTrigger);
                                    resolve(hXHR.response);
                                } else {
                                    var message = "Errors Occured on Http Request (status : '" + hXHR.status + "' | response : '" + hXHR.response + "')";
                                    var status  = hXHR.status;
                                    reject({
                                        message : message,
                                        status  : status
                                    });
                                }
                            }

                        };

                        // gestion du content data
                        var data4xhr = (options.data && options.method == "POST") ? options.data : null;

                        hXHR.send(data4xhr);
                    } else {
                        throw new Error("CORS not supported");
                    }
                }
            );

            return promise;
        },

        /**
         * Requete avec parser JSON
         *
         * @method __callJSON
         * @private
         * @param  {Object} options - options
         * @return {Object} promise
         */
        __callJSON : function (options) {
            return this.__call(options)
                    .then(JSON.parse)
                    .catch( function (error) {
                        console.log("_callJSON failed on : ", options.url, error);
                        throw error;
                    });
        },

        /**
         * Requete avec parser XML
         *
         * @method __callXML
         * @private
         * @param  {Object} options - options
         * @return {Object} promise
         */
        __callXML : function (options) {
            return this.__call(options)
                    .then( function (response) {
                        var xmlDoc;

                        if (window.DOMParser) {
                            var parser = new DOMParser();
                            xmlDoc = parser.parseFromString(response, "text/xml");
                        } else { // IE
                            xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                            xmlDoc.async = false;
                            xmlDoc.loadXML(response);
                        }

                        return xmlDoc;
                    })
                    .catch( function (error) {
                        console.log("__callXML failed on : ", options.url, error);
                        throw error;
                    });
        }

    };

    return XHR;
});

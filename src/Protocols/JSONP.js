/**
 * JSONP : Implémentation du protocole JSONP de la plateforme Géoportail (cf. {@link https://github.com/sobstel/jsonp.js}).
 *
 * @module JSONP
 * @private
 * @alias Gp.Protocols.JSONP
 */
define(["Utils/LoggerByDefault"], function (Logger) {

    "use strict";

    var JSONP = {

        /**
         * Cette fonction réalise l'appel du service fourni via le paramètre "options.url"
         * en mettant en œuvre le protocole JSONP.
         *
         * @method call
         * @static
         * @param {Object} options - parametres d'invocation du service en JSONP
         * @param {String} options.url - URL du service à invoquer (indépendamment du protocole JSONP).
         *  Cette URL contient déjà les paramètres du service.
         *  Si le paramètre dédié à la mise en oeuvre du protocole JSONP (callback=xxx) n'est pas présent, il est rajouté par la fonction ;
         *  sa valeur est déterminée en fonction du paramètre callbackName.
         * @param {Number} [options.timeOut = 0] - Nombre de ms au bout duquel on considère que le service n'a pas répondu.
         *  Une valeur de 0 pour ce paramètre permet de désactiver la gestion du timeOut.
         * @param {String} [options.callbackName = gp.protocol.jsonp] - Valeur du paramètre callback à rajouter sur l'URL.
         *  Si l'URL fournie contient déjà le paramètre callback, le paramètre callbackName ne sera pas pris en compte.
         *  La fonction de callback est créée dynamiquement par la fonction JSONP ;
         *  elle a deux fonctions :
         *    elle annule la condition de timeOut
         *    puis appelle la fonction fournie par l'utilisateur via le paramètre onResponse.
         * @param {Function} options.onResponse - Nom de la fonction qui sera appelée lors de la réception des résultats du service.
         *  Ce paramètre sera ignoré si l'URL contient déjà le paramètre callback.
         *  La fonction de rappel appelée sera alors celle ayant pour nom la valeur de ce paramètre.
         * @param {Function} [options.onTimeOut] - Nom de la fonction qui sera appelée en cas de non réponse du service.
         *  Le temps au bout duquel on considère que le service n'a pas répondu est déterminé par le paramètre timeOut.
         *  @example
         *  var options = {
         *      url : 'http://localhost/some/test.json&callback=myResults',
         *      timeOut : 100,
         *      callbackName : 'myResults',
         *      onResponse : function (response) {
         *          console.log('results : ', response);
         *      },
         *
         *   };
         *   JSONP.call(options);
         */
        call : function (options) {

            // logger
            var logger = Logger.getLogger("JSONP");
            logger.trace("[JSONP::call()]");

            // analyse parametres

            if ( !options ) {
                logger.error("missing parameter : options !");
                throw new Error("missing parameter : options !");
            }

            if ( !options.url ) {
                logger.error("missing parameter : options.url !");
                throw new Error("missing parameter : options.url !");
            }

            if ( !options.timeOut ) {
                logger.info("setting 'options.timeOut' default value");
                options.timeOut = 0;
            }

            if ( !options.onResponse ) {
                logger.error("missing parameter : options.onResponse !");
                throw new Error("missing parameter : options.onResponse !");
                // FIXME doit on definir un callback interne par defaut !?
                // options.onResponse = function (data) {
                //    console.log("response callback (inner) : ", data);
                // };
            }

            // on recherche le parametre callback et son nom de fonction dans l'url
            var urlHasCallbackKey  = false ;
            var urlHasCallbackName = false ;

            var idx = options.url.indexOf("callback=");

            if (idx != -1 ) {
                urlHasCallbackKey = true ;
                // extraction callbackName de l'url : entre "callback=" et "&" ou fin de ligne
                var j = options.url.indexOf("&", idx) ;
                if ( j === -1 ) {
                    j = options.url.length ;
                }

                // on ecrase le parametre options.callbackName s'il avait été défini
                var callbackName = options.url.substring(idx + 9 , j);

                if (callbackName) {
                    urlHasCallbackName = true;
                    options.callbackName = callbackName;
                    logger.info("setting 'options.callbackName' value (" + options.callbackName + ") from 'options.url' parameter");
                }
            }

            // on ajoute le parametre callback dans l'URL s'il n'existe pas
            if (!urlHasCallbackKey) {
                // gestion des autres param. et "?"
                var k = options.url.indexOf("?");
                if (k === -1) {
                    // aucun param., ni de '?'
                    options.url = options.url + "?" + "callback=";
                } else if (k === options.url.length) {
                    // uniquement le '?'
                    options.url = options.url + "callback=";
                } else {
                    // le '?' et les param. existent
                    options.url = options.url + "&" + "callback=";
                }
                logger.info("setting callback default key in 'options.url' : " + options.url);
            }

            // utilisation de la fonction callback coté client ?
            var HasCallbackName = options.callbackName ? true : urlHasCallbackName;

            // on ajoute le nom de la fonction callback dans l'URL si elle n'existe pas
            if ( !urlHasCallbackName ) {
                // fonction callback par defaut
                if ( !options.callbackName ) {
                    logger.info("setting 'options.callbackName' default value");
                    options.callbackName = "callback"; // ou "gp.protocol.jsonp" ?
                }
                options.url = options.url.replace("callback=", "callback=" + options.callbackName);
                logger.info("setting callback function name in 'options.url' : " + options.url);
            }

            // timeOut par defaut
            if ( !options.onTimeOut ) {
                logger.info("setting 'options.onTimeOut' default value");
                /** callback timeout par defaut */
                options.onTimeOut = function (/* error */) {
                    console.log("TimeOut while invoking url : " + options.url);
                };
            }

            if ( !HasCallbackName ) {
                // event du timeout
                var onTimeOutTrigger = null;

                // declenche le timeout si > à 0 !
                if (options.timeOut > 0) {
                    onTimeOutTrigger = window.setTimeout(
                        function () {
                            /** fonction de reponse du service */
                            window[options.callbackName] = function () {};
                            options.onTimeOut();
                        }, options.timeOut);
                }

                /** fonction de reponse du service */
                window[options.callbackName] = function (data) {
                    window.clearTimeout(onTimeOutTrigger);
                    options.onResponse(data);
                };
            }

            // script
            var scriptu;
            var scripto = document .getElementById("results");

            scriptu = document.createElement("script");
            scriptu.setAttribute("type", "text/javascript");
            scriptu.setAttribute("src", options.url);
            scriptu.setAttribute("charset", "UTF-8");
            scriptu.setAttribute("id", "results");
            scriptu.setAttribute("async", "true"); // FIXME async ?
            // head ou body ou autres ?
            var node = document.documentElement || document.getElementsByTagName("head")[0];
            if (scripto === null) {
                node.appendChild(scriptu);
            } else {
                // s'il existe déjà, on le remplace !
                node.replaceChild(scriptu, scripto);
            }
        }
    };

    return JSONP;
});

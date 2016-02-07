
define([
    "Utils/LoggerByDefault",
    "Utils/MessagesResources",
    "Services/Route/Request/model/RouteParamREST"
],
function (
    Logger, _,
    RouteParamREST
) {

    "use strict";

    /**
     * @classdesc
     * Classe de gestion des requêtes de type REST sur le service de calcul d'itineraire
     * (uniquement en GET)
     *
     * @constructor
     * @alias Gp.Services.Route.Request.RouteRequestREST
     * @param {Object} options - options definies dans le composant Route
     *
     * @example
     * var options = {
     *      (...)
     * };
     *
     * @private
     */
    function RouteRequestREST (options) {

        this.logger = Logger.getLogger("RouteRequestREST");
        this.logger.trace("[Constructeur RouteRequestREST()]");

        if (!(this instanceof RouteRequestREST)) {
            throw new TypeError("RouteRequestREST constructor cannot be called as a function.");
        }

        // existance des options
        if (! options) {
            throw new Error(_.getMessage("PARAM_EMPTY", "options"));
        }

        /** liste des options */
        this.settings = options;
    }

    RouteRequestREST.prototype = {

        /**
         * @lends module:RouteRequestREST#
         */

        /**
         * request
         * @type {String}
         */
        requestString : null,

        /**
         * Constructeur (alias)
         */
        constructor : RouteRequestREST,

        /**
         * Construction de la requête.
         *
         * @example
         * // GET  out : origin=2.416907353809513,48.8465772142297&destination=2.4248037771493673,48.84591353161838
         * // POST out : Not yet supported method POST !
         * @returns {String}
         */
        processRequestString : function () {
            // INFO
            // construction simple sans template...,
            // mais en attendant que les services soient fixés, on taggue ce composant en mode PROTOTYPE !
            this.logger.warn("FIXME : PROTOTYPE !");

            // Mapping des options avec le service de l'API REST
            var oParams = new RouteParamREST(this.settings);

            var params  = oParams.getParams();
            var request = "";
            for ( var idx in params ) {
                if (request) {
                    request += "&";
                }
                request += params[idx].k  + "=" + params[idx].v;
            }

            // Exemple :
            //  http://wxs.ign.fr/KEY/itineraire/rest/route.json?
            //  origin=&
            //  destination=&
            //  waypoints=&
            //  method=DISTANCE&
            //  graph=Pieton&
            //  graphName=Pieton&
            //  exclusions=&
            //  tolerance=10&
            //  srs=

            this.logger.trace(request);
            this.requestString = request;

            return this.requestString;
        }
    };

    return RouteRequestREST;

});

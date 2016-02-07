define([
    "Services/CommonService",
    "Services/AutoComplete/Response/AutoCompleteResponseFactory",
    "Utils/LoggerByDefault",
    "Utils/MessagesResources",
    "Exceptions/ErrorService",
    "Utils/Helper"
],
function (
    CommonService,
    AutoCompleteResponseFactory,
    Logger,
    MR,
    ErrorService,
    Helper
) {

    "use strict";

    /**
     * @classdesc
     * Appel du service d'autocomplétion du Géoportail :
     * envoi de la requête construite selon les paramètres en options,
     * éventuellement parsing et analyse  de la réponse,
     * retour d'une réponse en paramètre de la fonction onSuccess.
     * @constructor
     * @extends {Gp.Services.CommonService}
     * @alias Gp.Services.AutoComplete
     *
     * @param {Object} options - options spécifiques au service (+ les options heritées)
     *
     * @param {String} options.text - La chaîne de caractère à compléter.
     *      Cette chaîne n'est pas "URL encodée".
     *      C'est l'API qui s'occupe de l'encoder pour l'inclure dans la requête.
     *
     * @param {Array.<String>} [options.filterOptions.type = "StreetAddress"] - Type de l'objet recherché.
     *      Le service d'autocomplétion du Géoportail permet de rechercher des toponymes 'PostionOfInterest' et/ou des adresses postales 'StreetAddress'.
     *      D'autres types pourront être rajoutés selon l'évolution du service.
     *      Par défaut, type = ['StreetAddress'].
     *
     * @param {Array.<String>} [options.filterOptions.territory] - Limitation de la zone de recherche de localisants.
     *      Le service d'autocomplétion du Géoportail permet de limiter la recherche à la métropole et la Corse 'METROPOLE',
     *      aux DOMS TOMS 'DOMSTOMS', à une liste de codes de départements ou codes INSEE de communes.
     *      Pas de valeur par défaut.
     *      La valeur par défaut est donc celle du service.
     *      Le service d'autocomplétion du Géoportail renvoie toutes les informations quand aucun territoire n'est spécifié.
     *
     * @param {Number} [options.maximumResponses = 10] - Nombre de réponses maximal que l'on souhaite recevoir.
     *      Pas de valeur par défaut.
     *      La valeur par défaut sera donc celle du service : 10.
     *
     * @example
     *   var options = {
     *      // options communes aux services
     *      apiKey : null,
     *      serverUrl : 'http://localhost/service/',
     *      protocol : 'JSONP', // JSONP|XHR
     *      proxyURL : null,
     *      httpMethod : 'GET', // GET|POST
     *      timeOut : 10000, // ms
     *      rawResponse : false, // true|false
     *      scope : null, // this
     *      onSuccess : function (response) {},
     *      onFailure : function (error) {},
     *      // spécifique au service
     *      text : "",
     *      filterOptions : {
     *          type : ["StreetAddress"],
     *          territory : ['METROPOLE', 'DOMSTOMS']
     *      },
     *      maximumResponses : 10
     *   };
     * @private
     */
    function AutoComplete (options) {

        if ( !(this instanceof AutoComplete) ) {
            throw new TypeError(MR.getMessage("CLASS_CONSTRUCTOR", "AutoComplete"));
        }

        /**
         * Nom de la classe (heritage)
         * FIXME instance ou classe ?
         */
        this.CLASSNAME = "AutoComplete";

        // appel du constructeur par heritage
        CommonService.apply(this, arguments);

        this.logger = Logger.getLogger("Gp.Services.AutoComplete");
        this.logger.trace("[Constructeur AutoComplete(options)]");

        if ( !options.text ) {
            throw new Error(MR.getMessage("PARAM_MISSING", "text"));
        }

        // ajout des options spécifiques au service
        this.options.text = options.text;

        // on definit des filtres par defaut
        if (! options.filterOptions) {
            this.options.filterOptions = options.filterOptions = {
                territory : [],
                type : ["StreetAddress"]
            };
        }

        // FIXME ECMAScript 5 support (valable pour un objet uniquement !)
        // ceci permet de tester le cas où : object = {}
        if (Object.keys(options.filterOptions).length === 0) {
            this.options.filterOptions = {
                territory : [],
                type : ["StreetAddress"]
            };
        }

        this.options.filterOptions.type      = options.filterOptions.type || ["StreetAddress"];
        this.options.filterOptions.territory = options.filterOptions.territory || [];
        this.options.maximumResponses        = options.maximumResponses || 10;

        // INFO
        // le service ne repond pas en mode POST (405 Method Not Allowed)
        if (this.options.protocol === "XHR" && this.options.httpMethod === "POST") {
            this.logger.warn("Le service ne gére pas le mode d'interrogation en POST, on bascule sur du GET !");
            this.options.httpMethod = "GET"; // on surcharge !
        }

        // attributs d'instances

        /**
         * Format de réponse du service : JSON
         */
        this.options.outputFormat = "json";

    }

    /**
     * @lends module:AutoComplete#
     */

    AutoComplete.prototype = Object.create(CommonService.prototype, {
        // todo
        // getter/setter
    });

    /*
     * Constructeur (alias)
     */
    AutoComplete.prototype.constructor = AutoComplete;

    /**
     * (overwrite)
     * Création de la requête
     *
     * @param {Function} error   - callback des erreurs
     * @param {Function} success - callback
     */
    AutoComplete.prototype.buildRequest = function (error, success) {

        // ex.
        // http://wxs.ign.fr/CLEF/ols/apis/completion?
        // text=Brie-Comt&
        // type=StreetAddress,PositionOfInterest&
        // territory=METROPOLE&
        // maximumResponses=10

        // traitement des param KPV sous forme de tableau
        var territories = "";
        if (this.options.filterOptions.territory) {
            territories = this.options.filterOptions.territory.join(",");
        }

        var types = "";
        if (this.options.filterOptions.type) {
            types = this.options.filterOptions.type.join(",");
        }

        // normalisation de la requete avec param KPV
        this.request = Helper.normalyzeParameters({
            text : encodeURIComponent(this.options.text),
            type : types,
            terr : territories,
            maximumResponses : this.options.maximumResponses
        });

        success.call(this, this.request);
    };

    /**
     * (overwrite)
     * Analyse de la reponse
     *
     * @param {Function} error   - callback des erreurs
     * @param {Function} success - callback de succès de l'analyse de la réponse
     */
    AutoComplete.prototype.analyzeResponse = function (error, success) {

        if ( this.response ) {

            var options = {
                response : this.response,
                rawResponse : this.options.rawResponse,
                onSuccess : success,
                onError : error,
                scope : this
            };

            AutoCompleteResponseFactory.build(options);

        } else {
            error.call(this, new ErrorService(MR.getMessage("SERVICE_RESPONSE_EMPTY")));
        }

    };

    return AutoComplete;
});

import Logger from "../../Utils/LoggerByDefault";
import _ from "../../Utils/MessagesResources";
import ErrorService from "../../Exceptions/ErrorService";
import CommonService from "../CommonService";
import GeocodeRequestFactory from "./Request/GeocodeRequestFactory";
import GeocodeResponseFactory from "./Response/GeocodeResponseFactory";

/**
 * @classdesc
 * Appel du service de géocodage direct du Géoportail :
 *     envoi de la requête construite selon les paramètres en options,
 *     éventuellement parsing et analyse  de la réponse,
 *     retour d'une réponse en paramètre de la fonction onSuccess.
 *
 *
 * @constructor
 * @extends {Gp.Services.CommonService}
 * @alias Gp.Services.Geocode
 *
 * @param {Object} options - options spécifiques au service (+ les options heritées)
 *
 * @param {String|Object} options.query - Nom de l'adresse, du toponyme, de l'unité administrative ou de la parcelle cadastrale recherchée.
 *
 * @param {Object} [options.filters] - Les propriétés possibles de cet objet sont décrites ci-après.
 * @param {String} [options.filters.[proprietes du filtre]] - Critère supplémentaire pour filtrer la recherche sous la forme
 *      d'un couple clé/valeur à définir selon les possibilités du serveur ajouté à la requête.
 *      Le service de géocodage du Géoportail permet de filtrer les adresses postales avec les propriétés :
 *          "postalCode", "inseeCode", "city".
 *      Il permet également de filtrer les toponymes avec les propriétés :
 *          "postalCode", "inseeCode", "type".
 *      Enfin, il permet de filtrer les parcelles cadastrales avec les propriétés :
 *          "codeDepartement", "codeCommune", "nomCommune", "codeCommuneAbs", "codeArrondissement", "section", "numero", "feuille".
 *
 * @param {Array.<String>} [options.index = "StreetAddress"] - Type de l'objet recherché.
 *      Le service de géocodage du Géoportail permet de rechercher des 'PositionOfInterest' pour des toponymes, des 'StreetAddress'
 *      pour des adresses postales ou des 'CadastralParcel' pour des parcelles cadastrales.
 *      D'autres types pourront être rajoutés selon l'évolution du service.
 *      Par défaut, index = 'StreetAddress'.
 * 
 * @param {Object} options.position - Position du point de référence pour le calcul de proximité exprimée dans le système de référence spécifié par le srs.
 *      @param {Float} options.position.lon - Longitude du point de référence pour le calcul de proximité.
 *      @param {Float} options.position.lat - Latitude du point de référence pour le calcul de proximité.
 *
 * @param {Number} [options.maximumResponses] - Nombre de réponses maximal que l'on souhaite recevoir.
 *      Pas de valeur par défaut.
 *      Si le serveur consulté est celui du Géoportail, la valeur par défaut sera donc celle du service : 20.
 * 
 * @param {Boolean} [options.returnTrueGeometry] - Booléen indiquant si l'on souhaite récupérer la géométrie vraie des objects géolocalisés.
 *      false par défaut.
 * 
 *
 * @example
 *   var options = {
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
 *      position : {lon:, lat:},
 *      (...)
 *   };
 * @private
 */
function Geocode (options) {
    if (!(this instanceof Geocode)) {
        throw new TypeError(_.getMessage("CLASS_CONSTRUCTOR", "Geocode"));
    }

    /**
     * Nom de la classe (heritage)
     * FIXME instance ou classe ?
     */
    this.CLASSNAME = "Geocode";

    options.serverUrl = options.serverUrl || "https://geocodage.ign.fr/look4";

    // appel du constructeur par heritage
    CommonService.apply(this, arguments);

    this.logger = Logger.getLogger("Gp.Services.Geocode");
    this.logger.trace("[Constructeur Geocode (options)]");

    if (!options.query) {
        throw new Error(_.getMessage("PARAM_MISSING", "query"));
    }

    // FIXME ECMAScript 5 support
    if (typeof options.query === "object" && Object.keys(options.query).length === 0) {
        throw new Error(_.getMessage("PARAM_EMPTY", "query"));
    } else if (typeof options.query === "string" && options.query.length === 0) {
        throw new Error(_.getMessage("PARAM_EMPTY", "query"));
    }

    // ajout des options spécifiques au service
    this.options.query = options.query;

    // on definit l'index par defaut
    if (!options.index) {
        this.options.index = options.index = "StreetAddress";
    }

    var filter = Object.keys(options.filters);
    for (var i = 0; i < filter.length; i++) {
        var key = filter[i];
        // on supprime les filtres vides
        if (!options.filters[key]) {
            delete this.options.filters[key];
        }
    }

    this.options.index = options.index || "StreetAddress";
    this.options.maximumResponses = options.maximumResponses || 20;
}

/**
 * @lends module:Geocode#
 */
Geocode.prototype = Object.create(CommonService.prototype, {
    // todo
    // getter/setter
});

/*
 * Constructeur (alias)
 */
Geocode.prototype.constructor = Geocode;

/**
 * Création de la requête (overwrite)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Geocode.prototype.buildRequest = function (error, success) {
    var options = {
        httpMethod : this.options.httpMethod,
        // options specifiques du service
        geocodeMethod : "search",
        query : this.options.query,
        index : this.options.index,
        returnTrueGeometry : this.options.returnTrueGeometry,
        position : this.options.position,
        maximumResponses : this.options.maximumResponses,
        filters : this.options.filters
    };

    this.request = GeocodeRequestFactory.build(options);

    // on teste si la requete a bien été construite !
    (!this.request)
        ? error.call(this, new ErrorService(_.getMessage("SERVICE_REQUEST_BUILD")))
        : success.call(this, this.request);
};

/**
 * Analyse de la reponse (overwrite)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Geocode.prototype.analyzeResponse = function (error, success) {
    /* INFO :
         Etape 1 : Création de la requête
            -> Appel du format OpenLS pour créer une requête à partir des paramètres (par exemple)
              (soit directement une URL si GET, soit une requête XML si POST)
            /!\ tester si apiKey && serverUrl => on ne garde que serverUrl
            -> stockage de la requête dans this.request
         Etape 2 : Envoi de la requête selon le bon protocole
            -> appel du protocol JSONP ou XHR, et envoi (par ex send ()) (this.protocol)
            -> récupération de la réponse xml dans la fonction onSuccess () (this.response)
            -> si code HTTP 200 et pas de message d'erreur : etape 3
            -> si code HTTP != 200 : lancement de la fonction de callback onFailure avec le message d'erreur
         Etape 3 : Analyse de la réponse xml et construction du JSON (si rawResponse === false )
            -> appel du parser pour récupérer le xmlDocument
            -> appel du reader OpenLS pour lire les éléments et récupérer l'objet JSON
               correspondant au type de géocodage (défini dans les specs)
         Etape 4 : Lancement de la fonction de callback onSuccess avec la réponse :
            -> xmlResponse (si rawResponse === true)
            -> ou geocodedLocations
    */

    if (this.response) {
        var options = {
            response : this.response,
            rawResponse : this.options.rawResponse,
            onError : error,
            onSuccess : success,
            scope : this
        };

        GeocodeResponseFactory.build(options);
    } else {
        error.call(this, new ErrorService(_.getMessage("SERVICE_RESPONSE_EMPTY")));
    }
};

export default Geocode;

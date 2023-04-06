import Logger from "../../Utils/LoggerByDefault";
import _ from "../../Utils/MessagesResources";
import ErrorService from "../../Exceptions/ErrorService";
import CommonService from "../CommonService";
import DefaultUrlService from "../DefaultUrlService";
import ConfigRequestFactory from "./Request/ConfigRequestFactory";

/**
 * @classdesc
 *
 * Recupération de la configuration de clés Géoportail sous forme de JSON
 *
 *
 * @constructor
 * @extends {Gp.Services.CommonService}
 * @alias Gp.Services.Config
 * @param {Object} options - options spécifiques au service (+ les options heritées)
 *
 * @param {Sting} options.apiKey - clé(s) dont on veut obtenir la configuration. Si plusieurs clés, séparer chacune par une virgule
 *
 * @param {String} options.customConfigFile - chemin vers un fichier de configuration personnalisé. Surcharge le paramètre apiKey.
 *
 *
 * @example
 *   var options = {
 *      apiKey : "cartes,ortho",
 *      onSuccess : function (response) {},
 *      onFailure : function (error) {},
 *   };
 *
 */
function Config(options) {
    if (!(this instanceof Config)) {
        throw new TypeError(_.getMessage("CLASS_CONSTRUCTOR", "Alti"));
    }

    /**
     * Nom de la classe (heritage)
     * FIXME instance ou classe ?
     */
    this.CLASSNAME = "Config";

    this.logger = Logger.getLogger("Gp.Services.Config");
    this.logger.trace("[Constructeur Config (options)]");

    // #####################
    // analyse des options
    // #####################

    // gestion du callback onSuccess
    var bOnSuccess = !!(options.onSuccess !== null && typeof options.onSuccess === "function");
    if (!bOnSuccess) {
        throw new Error(_.getMessage("PARAM_MISSING", "onSuccess()"));
    }
    if (!options.apiKey && !options.customConfigFile) {
        throw new Error(_.getMessage("PARAM_MISSING", "apiKey", "customConfigFile"));
    }
    this.options = {};
    this.options.onSuccess = options.onSuccess;
    this.options.onFailure = options.onFailure;

    // gestion de l'url du service par defaut (on prend un tableau d'urls vers les fichiers)
    if (!options.customConfigFile) {
        var urlFound = DefaultUrlService.Config.url(options.apiKey.split(','));
        if (!urlFound) {
            throw new Error("Url by default not found !");
        }
        this.options.serverUrl = urlFound;
        this.logger.trace("Config file by default : " + this.options.serverUrl);
    } else {
        this.options.serverUrl = [options.customConfigFile];
        this.logger.trace("Custom config file : " + this.options.serverUrl);
    }
}

/**
 * @lends module:Config#
 */
Config.prototype = Object.create(CommonService.prototype, {
    // todo
    // getter/setter
});

/**
 * Constructeur (alias)
 */
Config.prototype.constructor = Config;

/**
 * Création de la requête (overwrite)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Config.prototype.buildRequest = function (error, success) {
    // utilisation en mode callback
    var options = {
        serverUrl: this.options.serverUrl,
        // callback
        onSuccess: function (result) {
            // sauvegarde de la requete !
            this.request = result;
            success.call(this, this.request);
        },
        onFailure: error,
        scope: this
    };

    ConfigRequestFactory.build(options);
};

/**
 * Récupération des configuration (overwrite)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Config.prototype.callService = function (error, success) {
    // tableau des configuration json récupérées
    var configArray = [];
    Promise.all(this.request).then(
        (results) => results.forEach(result => configArray.push(result))
    ).then(() => {
        this.result = configArray;
        success.call(this, this.result);
    });
};

/**
 * Analyse et mise en forme de la réponse (fusion des configurations)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Config.prototype.analyzeResponse = function (error, success) {

    var mergeArray = function (objectsArray) {
        // objet fusion des couches
        var allLayersConfig = {};
        // objet fusion des clés
        var allKeysConfig = {};
        // objet fusion des TMS
        var allTMSConfig = {};

        // on fusionne les résultat
        for (var i = 0; i < objectsArray.length; i++) {
            if (!objectsArray[i].generalOptions || !objectsArray[i].layers) {
                // si le fichier de configuration donné en entré ne correspond pas à la structure attendue
                throw new Error("Configuration non récupérée : structure de la configuration non conforme");
            }
            allKeysConfig = { ...allKeysConfig, ...objectsArray[i].generalOptions.apiKeys };
            allLayersConfig = { ...allLayersConfig, ...objectsArray[i].layers };
            allTMSConfig = { ...allTMSConfig, ...objectsArray[i].tileMatrixSets };
        }

        var mergedConfig = {
            generalOptions: {
                apiKeys: allKeysConfig
            },
            layers: allLayersConfig,
            tileMatrixSets: allTMSConfig
        }
        return mergedConfig;
    };

    if (this.result) {
        var mergedConfig = mergeArray(this.result);
        // on remplace Gp.Config
        Gp.Config = mergedConfig;
        // on appelle le callback utilisateur en renvoyant la configuration récupérée
        success.call(this, Gp.Config);
    } else {
        error.call(this, new ErrorService(MR.getMessage("SERVICE_RESPONSE_EMPTY")));
    }

};

Config.prototype.call = function () {
    /* jshint validthis : true */
    this.logger.trace("CommonService::call ()");

    var context = this;
    /** fonction d'execution */
    function run() {
        this.logger.trace("CommonService::run ()");
        this.buildRequest.call(context, onError, onBuildRequest);
    }

    run.call(context);

    // callback de fin de construction de la requête
    function onBuildRequest(result) {
        this.logger.trace("CommonService::onBuildRequest : ", result);
        this.callService.call(context, onError, onCallService);
    }

    // callback de fin d'appel au service
    function onCallService(result) {
        this.logger.trace("CommonService::onCallService : ", result);
        this.analyzeResponse.call(context, onError, onAnalyzeResponse);
    }

    // callback de fin de lecture de la reponse
    function onAnalyzeResponse(result) {
        this.logger.trace("CommonService::onAnalyzeResponse : ", result);
        if (result) {
            this.options.onSuccess.call(this, result);
        } else {
            return onError.call(this, new ErrorService("Analyse de la reponse en échec !?"));
        }
    }

    // callback de gestion des erreurs : renvoit un objet de type ErrorService
    function onError(error) {
        this.logger.trace("CommonService::onError()");
        // error : l'objet est du type ErrorService ou Error
        var e = error;
        if (!(e instanceof ErrorService)) {
            e = new ErrorService(error.message);
        }
        if (this.options.onFailure) {
            this.options.onFailure.call(this, e);
        }
    }
};

export default Config;

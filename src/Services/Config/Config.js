import Logger from "../../Utils/LoggerByDefault";
import _ from "../../Utils/MessagesResources";
import CommonService from "../CommonService";
import DefaultUrlService from "../DefaultUrlService";
import ConfigInterface from "./ConfigInterface";

/**
 * @classdesc
 *
 * Recupération de la configuration de clés Géoportail sous forme de JSON
 *
 * @constructor
 * @extends {Gp.Services.CommonService}
 * @alias Gp.Services.Config
 * @param {Object} options - options spécifiques au service (+ les options heritées)
 * @param {Sting} options.apiKey - clé(s) dont on veut obtenir la configuration. Si plusieurs clés, séparer chacune par une virgule
 * @param {Boolean} [options.sync=false] - force le mode synchrone
 * @param {String} options.customConfigFile - chemin vers un fichier de configuration personnalisé. Surcharge le paramètre apiKey.
 * @see Gp.Services.GetConfigInterface
 *
 * @example
 *   var options = {
 *      apiKey : "cartes,ortho",
 *      sync : false,
 *      onSuccess : function (response) {},
 *      onFailure : function (error) {},
 *   };
 *
 */
function Config (options) {
    if (!(this instanceof Config)) {
        throw new TypeError(_.getMessage("CLASS_CONSTRUCTOR", "Config"));
    }

    /**
     * Nom de la classe (heritage)
     */
    this.CLASSNAME = "Config";

    this.logger = Logger.getLogger("Gp.Config");
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
        // si pas de thème spécifié, on récupère toutes les ressources possibles dans l'objet Config
        options.apiKey = "full";
    }
    this.options = {};
    this.options.onSuccess = options.onSuccess;
    this.options.onFailure = options.onFailure;

    // mode sync
    this.options.sync = options.sync || false;

    // gestion d'un tableau d'url des fichiers de configuration
    this.options.listConfigUrls = (options.customConfigFile)
        ? [options.customConfigFile]
        : !Array.isArray(options.apiKey)
            ? DefaultUrlService.Config.url(options.apiKey.split(","))
            : DefaultUrlService.Config.url(options.apiKey);
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
 * Création de la requête
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 * @overload
 */
Config.prototype.buildRequest = function (error, success) {
    // liste des urls des fichiers de configuration en JSON
    this.listConfigUrls = this.options.listConfigUrls;

    if (!this.listConfigUrls) {
        error.call(this, new Error("url by default not found !"));
        return;
    }

    // INFO :
    // il n'y a pas de construction de requête,
    // on passe directement à l'appel des requêtes
    success.call(this, this.listConfigUrls);
};

/**
 * Récupération des configuration
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 * @overload
 */
Config.prototype.callService = function (error, success) {
    if (this.options.sync) {
        __callServiceSync.call(this, error, success);
    } else {
        __callService.call(this, error, success);
    }
};

/**
 * Requêtes en mode asynchrone
 *
 * @param {*} error
 * @param {*} success
 * @private
 */
var __callService = function (error, success) {
    // liste des resultats au format JSON
    this.listConfigResults = [];

    // test on env. nodejs or browser
    let Fetch = null;
    if (typeof window === "undefined") {
        var nodefetch = require("node-fetch");
        Fetch = nodefetch;
    } else {
        Fetch = window.fetch;
    }

    // the factory of fetch !
    var fetchFactory = (url) => {
        return Fetch(url, { credentials : "same-origin" })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then((json) => {
                            // TODO :
                            // tester le contenu !
                            return json;
                        })
                        .catch((error) => {
                            throw new Error("Exception Json : " + error);
                        });
                } else {
                    throw new Error("Exception HTTP : " + response.status + " (status code) !");
                }
            })
            .catch((error) => {
                return new Promise((resolve, reject) => {
                    // eslint-disable-line no-unused-vars
                    reject(error);
                });
            });
    };

    // construction des promises fetch
    var promises = [];
    for (let index = 0; index < this.listConfigUrls.length; index++) {
        const url = this.listConfigUrls[index];
        promises.push(fetchFactory(url));
    }

    Promise.all(promises)
        .then((results) => {
            if (!results) {
                throw new Error("results config empty !?");
            }
            results.forEach((result) => {
                // TODO :
                // verification des resultats
                this.listConfigResults.push(result);
            });
        })
        .then(() => {
            success.call(this, this.listConfigResults);
        })
        .catch((e) => {
            // TODO :
            // construction d'un message
            error.call(this, e);
        });
};

/**
 * Requêtes en mode synchrone
 *
 * @param {*} error
 * @param {*} success
 * @private
 */
var __callServiceSync = function (error, success) {
    // liste des resultats au format JSON
    this.listConfigResults = [];

    // FIXME :
    // boucle synchrone !
    for (var i = 0; i < this.listConfigUrls.length; i++) {
        const url = this.listConfigUrls[i];
        // TODO :
        // prévoir le CORS, headers, ...
        const request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.send(null);
        if (request.status === 200) {
            // TODO :
            // tester la reponse !
            var response = JSON.parse(request.responseText);
            this.listConfigResults.push(response);
        }
    }
    // callback
    if (this.listConfigResults.length !== 0) {
        success.call(this, this.listConfigResults);
    } else {
        error.call(this, new Error("..."));
    }
};

/**
 * Analyse et mise en forme de la réponse en fusionnant les configurations
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 * @overload
 */
Config.prototype.analyzeResponse = function (error, success) {
    // fonction de merge des objects JSON
    var mergeConfig = function (objects) {
        // objet fusion des couches
        var allLayersConfig = {};
        // objet fusion des clés
        var allKeysConfig = {};
        // objet fusion des TMS
        var allTMSConfig = {};

        // on fusionne les résultat
        for (var i = 0; i < objects.length; i++) {
            if (!objects[i].generalOptions || !objects[i].layers) {
                return;
            }
            allKeysConfig = {
                ...allKeysConfig,
                ...objects[i].generalOptions.apiKeys
            };
            allLayersConfig = {
                ...allLayersConfig,
                ...objects[i].layers
            };
            allTMSConfig = {
                ...allTMSConfig,
                ...objects[i].tileMatrixSets
            };
        }

        var mergedConfig = {
            generalOptions : {
                apiKeys : allKeysConfig
            },
            layers : allLayersConfig,
            tileMatrixSets : allTMSConfig
        };
        return mergedConfig;
    };

    // fusion des configurations JSON
    var ConfigJSON = mergeConfig(this.listConfigResults);
    if (!ConfigJSON) {
        error.call(this, new Error("configuration structure not conforme !"));
        return;
    }

    // creation des interfaces
    var IConfig = new ConfigInterface();
    // ajout des interfaces avec la configuration JSON
    Object.assign(IConfig, ConfigJSON);

    // définition de la variable globale Gp.Config
    var scope = typeof window !== "undefined" ? window : {};
    if (!scope.Gp) {
        scope.Gp = {};
    }

    // enregistrement
    if (scope.Gp.Config) {
        Object.assign(scope.Gp.Config, IConfig);
        // dans le doute..., ceinture et bretelles !
        for (var property in IConfig) {
            scope.Gp.Config[property] = IConfig[property];
        }
    } else {
        scope.Gp.Config = IConfig;
    }

    // INFO :
    // il n'y a pas d'analyse des résultats,
    // on passe directement à l'appel de la callback utilisateur
    success.call(this, scope.Gp.Config);
};

export default Config;

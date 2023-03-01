/**
 * Creation des requêtes fetch vers les fichiers de config distants
 * (Factory)
 *
 * @module ConfigRequestFactory
 * @alias Gp.Services.Config.Request.ConfigRequestFactory
 * @private
 */
import Logger from "../../../Utils/LoggerByDefault";

var ConfigRequestFactory = {

    /**
     * interface unique
     *
     * @method build
     * @static
     * @param {Object} options - options definies dans le composant Alti
     *
     * @example
     *   var options = {
     *      onSuccess : function (response) {},
     *      onError : function (error) {},
     *   };
     *
     */
    build: function (options) {
        // logger
        var logger = Logger.getLogger("ConfigRequestFactory");
        logger.trace(["ConfigRequestFactory::build()"]);

        // on parse le fichier de config associé à la clé
        // TODO : gérer fichier distants + multiples parsing (multikeys)
        // TODO : gestion du timeOut ?

        // chemin vers le ou les fichiers de configuration
        var configFilePath;
        // tableau des promesses fetch
        var fetchPromises = [];
        // chemin par défaut des fichiers de configuration des clés Géoportail
        var defaultConfigPath = "https://raw.githubusercontent.com/IGNF/geoportal-configuration/main/dist/"
        // par défaut
        configFilePath = defaultConfigPath + "fullConfig.json";
        if (options.customConfigFile) {
            // si un fichier custom est donné
            configFilePath = options.customConfigFile
        } else if (options.apiKey) {
            // si une clé est donnée
            configFilePath = defaultConfigPath + options.apiKey + "Config.json";
        }

        if ((typeof options.apiKey === "string" || options.apiKey instanceof String) && Array.isArray(options.apiKey.split(",")) && options.apiKey.split(",").length > 1) {
            // si on a une liste de plusieurs clés en options, on traite la chaine de caractères et on la transforme en tableau (multiKeys)
            options.apiKey = options.apiKey.split(",");
            configFilePath = [];
            for (var i = 0; i < options.apiKey.length; i++) {
                configFilePath.push(defaultConfigPath + options.apiKey[i] + "Config.json");
            }
        }

        // Pour la suite, le traitement prend un tableau en entrée
        if (!Array.isArray(configFilePath)) {
            configFilePath = [configFilePath];
        }

        // remplissage de tableau de promesses fetchPromises
        for (var i = 0; i < configFilePath.length; i++) {
            fetchPromises.push(fetch(configFilePath[i]).then((result) => result.json()).catch((error) => {
                if (options.onFailure) {
                    options.onFailure.call(options.scope, error);
                }
                throw new Error("Erreur dans la lecture du fichier de configuration : " + error.message);
            }));
        }
        options.onSuccess.call(options.scope, fetchPromises);
        return fetchPromises;
    }
};

export default ConfigRequestFactory;

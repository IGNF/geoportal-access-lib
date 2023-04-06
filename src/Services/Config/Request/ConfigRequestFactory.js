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
    build : function (options) {
        // logger
        var logger = Logger.getLogger("ConfigRequestFactory");
        logger.trace(["ConfigRequestFactory::build()"]);

        // tableau des URLs vers les fichiers de config
        var configFilePath = options.serverUrl;
        // tableau des promesses fetch
        var fetchFiles = [];

        // remplissage du tableau des config
        for (var i = 0; i < configFilePath.length; i++) {
            const request = new XMLHttpRequest();
            // requête synchrone
            request.open("GET", configFilePath[i], false);
            request.send(null);

            if (request.status === 200) {
                fetchFiles.push(JSON.parse(request.response));
            } else {
                logger.trace("Fichier " + request.responseURL + " : " + request.responseText);
            }
        }
        options.onSuccess.call(options.scope, fetchFiles);
        return fetchFiles;
    }
};

export default ConfigRequestFactory;


/**
 * Response object for {@link module:Services~getConfig Gp.Services.getConfig ()} invocation when successful. Received as the argument of onSuccess callback function.
 *
 * @property {Object} generalOptions - General properties for default map configuration resources.
 * @property {Object} generalOptions.apiKeys - Object that associates apiKey (s) with an array of resources IDs availables with that key.
 * @property {String} generalOptions.title - Underlying web service Title.
 * @property {String} generalOptions.defaultGMLGFIStyle - XSL URL used by default to translate an XML GetFeatureInfo response into an HTML array.
 * @property {String} generalOptions.theme - default theme (FIXME : for what ?)
 * @property {Array.<Float>} generalOptions.wgs84Resolutions - geographical resolutions Array for each [zoom level of the Geoportal platform]{@link http://api.ign.fr/tech-docs-js/webmaster/layers.html#Geoportal_resolutions} from 0 to 21. Expressed in degrees/pixel.
 * @property {Object} layers - Associative array mapping resources availables IDs (keys) with their properties (values given as {@link Gp.Services.Config.Layer}).
 * @property {Object} tileMatrixSets - Associative Array mapping TileMatrixSets IDs (keys) availables with their properties (values given as {@link Gp.Services.Config.TileMatrixSet}).
 *
 * @namespace
 * @alias Gp.Services.GetConfigInterface
 */
function ConfigInterface () {
    if (!(this instanceof ConfigInterface)) {
        throw new TypeError("ConfigInterface constructor cannot be called as a function.");
    }

    this.generalOptions = {
        apiKeys : {},
        title : null,
        defaultGMLGFIStyle : null,
        theme : null,
        wgs84Resolutions : []
    };

    this.layers = {};

    this.tileMatrixSets = {};
}

ConfigInterface.prototype = {

    /*
     * Constructor (alias)
     */
    constructor : ConfigInterface,

    /**
     * Check if config is loaded for a given key
     *
     * @param {String} apiKey - Access key to Geoportal platform
     * @returns {Boolean} isKeyConfLoaded - true if config of the key is already loaded, false otherwise
     */
    isKeyConfLoaded : function (apiKey) {
        if (!apiKey) {
            return;
        }
        if (this.generalOptions.apiKeys[apiKey]) {
            return true;
        }
        return false;
    },

    /**
     * Returns an array of Geoportal layers identifiers, corresponding to an API contract key.
     *
     * @param {String} apiKey - Access key to Geoportal platform
     * @returns {Array} apiKeys - Array of geoportal layers identifiers
     */
    getLayersId : function (apiKey) {
        return this.generalOptions.apiKeys[apiKey];
    },

    /**
     * Returns the id of a Geoportal layer with its name and its service.
     *
     * @param {String} layerName - name of the layer (ex. "ORTHOIMAGERY.ORTHOPHOTOS")
     * @param {String} service   - name of the service (ex. "WMS" ou "WMTS")
     * @returns {String} Id of the layer (ex. "ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS")
     */
    getLayerId : function (layerName, service) {
        if (!layerName || !service) {
            return;
        }
        var layerId = null;

        // layer
        // key : [layerName]$[contexte]:OGC:[service]
        // ex : "ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS"

        // service
        // key : [layerName]$[contexte];[service]
        // ex : PositionOfInterest$OGC:OPENLS;ReverseGeocode

        if (this.layers) {
            var layers = this.layers;
            for (var key in layers) {
                if (layers.hasOwnProperty(key)) {
                    var parts = key.split("$");
                    if (layerName === parts[0]) {
                        if (parts[1]) {
                            var servicePartsLayer = parts[1].split(":");
                            var servicePartsService = parts[1].split(";");

                            if (servicePartsService[1] === service.toUpperCase()) {
                                layerId = key;
                                break;
                            }
                            if (servicePartsLayer[2] === service.toUpperCase()) {
                                layerId = key;
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (!layerId) {
            return;
        }
        return layerId;
    },

    /**
     * Returns an associative array of Geoportal layers configurations, corresponding to an API contract key.
     * If no key is specified, all layers from configuration are returned.
     *
     * @param {String} apiKey - Access key to Geoportal platform
     * @returns {Object} layers - Object which properties are layers identifiers.
     */
    getLayersConf : function (apiKey) {
        var layers = {};
        var layersIdArray = this.getLayersId(apiKey);
        if (layersIdArray) {
            for (var i = 0; i < layersIdArray.length; i++) {
                var lyrId = layersIdArray[i];
                layers[lyrId] = this.layers[lyrId];
            }
        }
        return layers;
    },

    /**
     * Returns a geoportal layer configuration, given its identifier
     *
     * @param {String} layerId - Geoportal layer identifier (e.g. "GEOGRAPHICALGRIDSYSTEMS.MAPS$GEOPORTAIL:OGC:WMTS")
     * @return {Object} layer - Layer configuration
     * @see Gp.Services.Config.Layer
     */
    getLayerConf : function (layerId) {
        if (!this.layers) {
            return;
        }
        return this.layers[layerId];
    },

    /**
     * Get all parameters needed to display a WFS, WMS or WMTS layer given its name, its service and its key
     *
     * @param {String} layerName - name of the layer (ex. "ORTHOIMAGERY.ORTHOPHOTOS")
     * @param {String} service   - name of the service (ex. "WMS" ou "WMTS")
     * @param {String} [apiKey]  - Contract API key
     * @returns {Object} params  - params of the service (WFS, WMS or WMTS) for the given layer
     * @returns {String} params.url        - Url of the service to reach to display the layer
     * @returns {String} params.version    - Version of the service
     * @returns {String} params.styles     - Default style of the layer
     * @returns {String} params.format     - Default format of the layer
     * @returns {String} params.projection - Default projection of the layer
     * @returns {Number} params.minScale   - Min scale denominator of the layer
     * @returns {Number} params.maxScale   - Max scale denominator of the layer
     * @returns {Gp.BBox} params.extent    - Extent of the layer, in the projection of the layer
     * @returns {Array} params.legends     - Array of legends associated to the layer
     * @returns {Array} params.title       - Name of the layer, readable by a human
     * @returns {Array} params.description - Description of the layer
     * @returns {String} params.[TMSLink]          - Id of the Tile Matrix Set (TMS), in the case of WMTS layer
     * @returns {Gp.Point} params.[matrixOrigin]   - Originof the tile matrix (top left corner), in the case of WMTS layer
     * @returns {Array} params.[nativeResolutions] - Array with the resolution of each level of the tile matrix set, in the case of WMTS layer
     * @returns {Array} params.[matrixIds]         - Array with the ID of each level of the tile matrix set, in the case of WMTS layer
     */
    getLayerParams : function (layerName, service) {
        var params = {};

        if ((service === "WMS" || Object.keys(this.tileMatrixSets).length !== 0) && Object.keys(this.layers).length !== 0) {
            // get the layerId of the layer
            var layerId = this.getLayerId(layerName, service);

            if (layerId) {
                // get the layer Conf Object
                var layerConf = this.getLayerConf(layerId);

                var keys = this.getLayerKey(layerId);
                if (keys.length === 0) {
                    return;
                }

                // get services params
                for (var i = 0; i < keys.length; i++) {
                    // only one serverUrl is saved in Gp.Config : with multiKeys, we have to retrieve the key used in the serverUrl property
                    if (layerConf.serviceParams.serverUrl[keys[i]]) {
                        params.url = layerConf.serviceParams.serverUrl[keys[i]];
                    }
                }

                if (service !== "WFS") {
                    const wmsTypeRegex = /\/v\//;
                    // WMS vector style always empty (not in getCap)
                    if (wmsTypeRegex.test(params.url)) {
                        params.styles = " ";
                    } else {
                        // WMS raster style is defined in getCap
                        params.styles = layerConf.styles[0].name;
                    }
                }

                params.version = layerConf.serviceParams.version;
                params.format = (layerConf.formats && layerConf.formats.length) ? layerConf.formats[0].name : "";
                params.projection = layerConf.defaultProjection;

                // get layer info and constraints
                params.minScale = layerConf.globalConstraint.minScaleDenominator;
                params.maxScale = layerConf.globalConstraint.maxScaleDenominator;
                params.extent = layerConf.globalConstraint.bbox;
                params.legends = layerConf.legends;
                params.title = layerConf.title;
                params.description = layerConf.description;

                if (service === "WMS") {
                    params.metadata = layerConf.metadata;
                }

                // Informations  non disponibles avec les getCap
                // params.metadata = layerConf.getMetadata();
                // params.originators = layerConf.getOriginators();
                // params.quicklookUrl = layerConf.getQuicklookUrl();

                // WMTS : get the tileMatrixSetLimits
                if (layerConf.wmtsOptions) {
                    params.tileMatrixSetLimits = layerConf.wmtsOptions.tileMatrixSetLimits;
                    var TMSLink = layerConf.wmtsOptions.tileMatrixSetLink;
                    if (TMSLink) {
                        params.TMSLink = TMSLink;
                        var tmsConf = this.getTMSConf(TMSLink);
                        // Get matrix origin : Gp.Point = Object{x:Float, y:Float}
                        // params.matrixOrigin = tmsConf.getTopLeftCorner();
                        params.matrixIds = Object.keys(tmsConf.tileMatrices);
                        params.tileMatrices = tmsConf.tileMatrices;
                        // by default, pseudo mercator resolutions
                        params.nativeResolutions = tmsConf.nativeResolutions || this.getTMSConf("PM").nativeResolutions;
                    }
                }
            }
        }
        return params;
    },

    /**
     * Get the contract key(s) associated to a given layer.
     *
     * @param {String} layerId - Geoportal layer identifier (e.g. "GEOGRAPHICALGRIDSYSTEMS.MAPS$GEOPORTAIL:OGC:WMTS")
     * @return {Array} layerKey - array of key(s) associated to the given layer
     */
    getLayerKey : function (layerId) {
        var layerKey = [];
        if (this.generalOptions && this.generalOptions.apiKeys && Object.keys(this.generalOptions.apiKeys).length !== 0) {
            var resourcesByKey = this.generalOptions.apiKeys;
            for (var key in resourcesByKey) {
                var resourcesArray = resourcesByKey[key];
                resourcesArray.forEach(function (arrayLayerId) {
                    if (arrayLayerId === layerId) {
                        layerKey.push(key);
                    }
                });
            }
        }
        return layerKey;
    },

    /**
     * Returns an associative array of Tile Matrix Sets configurations.
     *
     * @return {Object} tileMatrixSets - Object which properties are TMS identifiers
     *
     */
    getTileMatrixSets : function () {
        return this.tileMatrixSets;
    },

    /**
     * Returns a Tile Matrix Sets configuration, given its identifier.
     *
     * @param {String} tmsID - Tile Matrix Set identifier (e.g. : "PM")
     * @return {Object} tileMatrixSet - Tile Matrix Set configuration
     * @see Gp.Services.Config.TileMatrixSet
     */
    getTMSConf : function (tmsID) {
        if (!this.tileMatrixSets) {
            return;
        }
        return this.tileMatrixSets[tmsID];
    },

    /**
     * Get global constraints for a given Layer : extent, minScale, maxScale, projection
     *
     * @param {String} layerId - Geoportal layer identifier (e.g. "GEOGRAPHICALGRIDSYSTEMS.MAPS$GEOPORTAIL:OGC:WMTS")
     * @returns {Object} params - layer constraints
     * @returns {String} params.projection - default layer projection
     * @returns {Number} params.minScale   - layer min scale denominator
     * @returns {Number} params.maxScale   - layer max scale denominator
     * @returns {Gp.BBox} params.extent    - layer extent expressed in the layer projection
     */
    getGlobalConstraints : function (layerId) {
        var params = {};

        if (layerId) {
            // get layer configuration object
            var layerConf = this.getLayerConf(layerId);
            params.projection = layerConf.defaultProjection;
            params.minScale = layerConf.globalConstraint.minScaleDenominator;
            params.maxScale = layerConf.globalConstraint.maxScaleDenominator;
            params.extent = layerConf.globalConstraint.bbox;
        }

        return params;
    }

};

export default ConfigInterface;

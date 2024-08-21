/* eslint-disable no-unused-vars */
/**
 * Object used to describe geoportal resource (WMTS, WMS, WFS layers, geocoding resources or elevation service) parameters. Properties may be used or not depending on the resource type.
 *
 * @property {String} name - name of the resource to use with the webservice that serves it (eg : "GEOGRAPHICALGRIDSYSTEMS.MAPS").
 * @property {String} title - Human readable name for the resource.
 * @property {String} description - Resource description.
 * @property {String} layerId - Unique resource Identifier (eg : "GEOGRAPHICALGRIDSYSTEMS.MAPS$GEOPORTAIL:OGC:WMTS")
 * @property {String} quicklookUrl - Image URL for the resource.
 * @property {Object} serviceParams - Informations about the webservice that serves the resource (OpenLS, WFS, WMTS)
 * @property {String} serviceParams.id - Web Service identifier ("OGC:WMTS", "OGC:OPENLS;ReverseGeocode", etc...)
 * @property {Object} serviceParams.serverUrl - Associative array mapping geoportal access key (keys) with their properties (URLs of the web service, with the geoportal access key).
 * @property {String} serviceParams.version - webservice version.
 * @property {String} defaultProjection - coordinates system ID used by default for the resource (WMS or WFS layer) or of the TileMatrixSet used by the WMTS layer.
 * @property {Array.<String>} additionalProjections - additional coordinates systems IDs availables for the resource, others than the default one (see defaultProjection) (WMS and WFS layers only).
 * @property {Array.<Gp.Services.Config.Format>} formats - Formats availables for the resource.
 * @property {Array.<Gp.Services.Config.Legend>} legends - Informations about legends associated to the resource.
 * @property {Array.<Gp.Services.Config.Metadata>} metadata - Informations about metadata associated to the resource.
 * @property {Array.<Gp.Services.Config.Style>} styles - Informations about styles availables for the resources (WMS, WFS and WMTS only).
 * @property {Array.<Gp.Services.Config.Thematic>} thematics - Informations about thematics associated to the resource.
 * @property {Gp.Services.Config.Constraint} globalConstraint - geographical constraint for the resource.
 * @property {Array.<Gp.Services.Config.Constraint>} constraints - additionnal geographical constraints for the resource.
 * @property {Array.<Gp.Services.Config.Originator>} originators - Informations about originator of the resource.
 * @property {Object} wmtsOptions - Informations associated to WMTS resources.
 * @property {String} wmtsOptions.tileMatrixSetLink - TileMatrixSet identifier used by the resource (see {@link Gp.Services.Config.TileMatrixSet})
 * @property {Gp.Services.Config.TileMatrixLimit} wmtsOptions.tileMatrixSetLimits - limits of the resource for that TileMAtrixSet.
 * @property {Boolean} queryable - true if a getFeatureInfo request may be done for the resource (WMS or WMTS only).
 * @property {Boolean} hidden - true if the resource is not visible.
 * @property {Boolean} isAggregate - true if the resource is an aggregate of other resources (@see aggregatedLayers).
 * @property {Array.<String>} aggregatedLayers - Layers IDs composing the being described aggregated layer.
 * @property {Array.<String>} apiKeys - Array of access keys that grant access to that resource.
 * @property {Object} dimensions - Dimensions informations associated with the resource.
 * @property {String} dimensions.type
 * @property {String} dimensions.visibilityRange
 * @property {String} dimensions.visibilityMode
 * @property {String} dimensions.noDataValue
 * @property {String} dimensions.geometricType
 *
 * @namespace
 * @alias Gp.Services.Config.Layer
 */
var Layer = {};

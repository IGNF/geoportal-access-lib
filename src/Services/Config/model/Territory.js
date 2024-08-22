/* eslint-disable no-unused-vars */

/**
 * Object used to describe properties of a french territory covered by geoportal resources.
 *
 * @property {Boolean} isDefault - if this territory is to use by default.
 * @property {String} defaultCRS - Identifier of the coordinates system to use by default for that territory.
 * @property {Array.<String>} additionalCRS - Identifiers of additional coordinates systems availables for that territory.
 * @property {Array.<String>} defaultLayers - Identifiers of layers to load by default for that territory.
 * @property {Object} defaultOptions - options to use by default for that territory.
 * @property {Number} defaultOptions.resolution - resolution to use by default for that territory (in meter per pixel).
 * @property {Number} defaultOptions.minScaleDenominator - minimum scaleDenominator accessible for that territory.
 * @property {Number} defaultOptions.maxScaleDenominator - maximum scaleDenominator accessible for that territory.
 * @property {Gp.BBox} geoBBox - Bounding Box of the territory (expressed in geographical coordinates)
 * @property {Object} geoCenter - center of the territory (expressed in geographical coordinates)
 * @property {Float} geoCenter.lon - center longitude
 * @property {Float} geoCenter.lat - center latitude
 *
 * @namespace
 * @alias Gp.Services.Config.Territory
 */
var Territory = {};

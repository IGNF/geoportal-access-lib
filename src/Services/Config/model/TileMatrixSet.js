/* eslint-disable no-unused-vars */

/**
 *
 * Object used to describe a TileMatrix set (for WMTS use).
 *
 * @property {Array.<String>} matrixIds - Array of IDs for each TileMatrix of the set.
 * @property {Array.<Gp.Services.Config.TileMatrix>} tileMatrices - Array of TileMatrix descriptions.
 * @property {Array.<Float>} nativeResolutions - Array of resolutions (in meter per pixel) applying for each TileMatrix of the set.
 * @property {String} projection - Identifier of the Cordinates System used for the tileMatrixSet.
 *
 * @namespace
 * @alias Gp.Services.Config.TileMatrixSet
*/
var TileMatrixSet = {};

/*!
 * @brief Geoportal resources access library
 *
 * This software is released under the licence CeCILL-B (Free BSD compatible)
 * @see http://www.cecill.info/licences/Licence_CeCILL-B_V1-en.txt
 * @see http://www.cecill.info/licences/Licence_CeCILL-B_V1-fr.txt
 * @see http://www.cecill.info/
 *
 * copyright CeCILL-B
 * copyright IGN
 * @author IGN
 * @version 3.4.6
 * @date 19/12/2024
 *
 */
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("node-fetch"));
	else if(typeof define === 'function' && define.amd)
		define("Gp", ["require"], factory);
	else if(typeof exports === 'object')
		exports["Gp"] = factory(require("node-fetch"));
	else
		root["Gp"] = factory(root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicesVersion", function() { return servicesVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicesDate", function() { return servicesDate; });
/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Services_DefaultUrlService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _Services_Alti_Response_model_AltiResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _Services_Alti_Response_model_Elevation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _Services_AutoComplete_Response_model_AutoCompleteResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var _Services_AutoComplete_Response_model_SuggestedLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54);
/* harmony import */ var _Services_ProcessIsoCurve_Response_model_ProcessIsoCurveResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66);
/* harmony import */ var _Services_Route_Response_model_RouteResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60);
/* harmony import */ var _Services_Route_Response_model_RouteInstruction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61);
/* harmony import */ var _Services_Config_Config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _Protocols_XHR__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25);
var _package_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(25, 1);
/**
* Global variable Gp.
*
* @module Gp
* @alias Gp
* @description
*
* This is the global variable that is exposed in the browser environment.
* Content is composed of constructor, functions and properties...
*
* > {@link Gp.Error Error()}
*     - .TYPE_SRVERR : "SERVICE_ERROR"
*     - .TYPE_UNKERR : "UNKNOWN_ERROR"
*     - .TYPE_USEERR : "USAGE_ERROR"
*
* > {@link module:Helper Helper}
*     - .indent()
*     - .normalyzeParameters()
*     - .normalyzeUrl()
*
* > {@link module:XHR Protocols.XHR}
*     - .call()
*
* > {@link module:Services Services (objects)}
*     - .Alti
*         - {@link Gp.Services.Alti.Elevation .Elevation()}
*     - {@link Gp.Services.AltiResponse .AltiResponse()}
*     - .AutoComplete
*         - {@link Gp.Services.AutoComplete.SuggestedLocation .SuggestedLocation()}
*     - {@link Gp.Services.AutoCompleteResponse .AutoCompleteResponse()}
*     - {@link Gp.Services.Config .Config()}
*     - {@link Gp.Services.DefaultUrl .DefaultUrl()}
*     - {@link Gp.Services.GeocodeResponse .GeocodeResponse()}
*     - {@link Gp.Services.GetConfigResponse .GetConfigResponse()}
*     - {@link Gp.Services.IsoCurveResponse .IsoCurveResponse()}
*     - .Route
*         - {@link Gp.Services.Route.RouteInstruction .RouteInstruction()}
*     - {@link Gp.Services.RouteResponse .RouteResponse()}
*
* > Services (factory)
*     - {@link module:Services~autoComplete .autoComplete()}
*     - {@link module:Services~geocode .geocode()}
*     - {@link module:Services~getAltitude .getAltitude()}
*     - {@link module:Services~getConfig .getConfig()}
*     - {@link module:Services~isoCurve .isoCurve()}
*     - {@link module:Services~reverseGeocode .reverseGeocode()}
*     - {@link module:Services~route .route()}
*
* > servicesDate : "YYYY-MM-DD"
*
* > servicesVersion : "X.X.X"
*
*/
















/** Version */
var servicesVersion = _package_json__WEBPACK_IMPORTED_MODULE_13__.version;
/** Publication date */
var servicesDate = _package_json__WEBPACK_IMPORTED_MODULE_13__.date;

// on declare les ns dans root global
var Gp = {};
Gp.servicesVersion = servicesVersion;
Gp.servicesDate = servicesDate;

// Export Protocols
Gp.Protocols = {};
Gp.Protocols.XHR = _Protocols_XHR__WEBPACK_IMPORTED_MODULE_10__["default"];
// Export services
Gp.Services = _Services_Services__WEBPACK_IMPORTED_MODULE_0__["default"];
// Export DefaultUrls
Gp.Services.DefaultUrl = _Services_DefaultUrlService__WEBPACK_IMPORTED_MODULE_1__["default"];
// Export Alti
Gp.Services.AltiResponse = _Services_Alti_Response_model_AltiResponse__WEBPACK_IMPORTED_MODULE_2__["default"];
Gp.Services.Alti = {};
Gp.Services.Alti.Elevation = _Services_Alti_Response_model_Elevation__WEBPACK_IMPORTED_MODULE_3__["default"];
// Export Autocomplete
Gp.Services.AutoCompleteResponse = _Services_AutoComplete_Response_model_AutoCompleteResponse__WEBPACK_IMPORTED_MODULE_4__["default"];
Gp.Services.AutoComplete = {};
Gp.Services.AutoComplete.SuggestedLocation = _Services_AutoComplete_Response_model_SuggestedLocation__WEBPACK_IMPORTED_MODULE_5__["default"];
// Export Config
Gp.Services.Config = _Services_Config_Config__WEBPACK_IMPORTED_MODULE_9__["default"];
// Export IsoCurve
Gp.Services.IsoCurveResponse = _Services_ProcessIsoCurve_Response_model_ProcessIsoCurveResponse__WEBPACK_IMPORTED_MODULE_6__["default"];
// Export Route
Gp.Services.RouteResponse = _Services_Route_Response_model_RouteResponse__WEBPACK_IMPORTED_MODULE_7__["default"];
Gp.Services.Route = {};
Gp.Services.Route.RouteInstruction = _Services_Route_Response_model_RouteInstruction__WEBPACK_IMPORTED_MODULE_8__["default"];
// Export Erreurs et Outils
Gp.Error = _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_11__["default"];
Gp.Helper = _Utils_Helper__WEBPACK_IMPORTED_MODULE_12__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Gp);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _Alti_Alti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _Geocode_Geocode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _Geocode_ReverseGeocode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _AutoComplete_AutoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _Route_Route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55);
/* harmony import */ var _ProcessIsoCurve_ProcessIsoCurve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62);
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "point|circle|bbox" }] */

/**
* Geoportal web services invocation namespace.
*
* @module Services
* @alias Gp.Services
*/







var Services = {
  /**
   * Access to Geoportal resources metadata availables with one ore several keys
   *
   * @method getConfig
   * @param {Object} options - Options for function call.
   * @param {String} [options.apiKey] - Access key(s) ("," as separator, no spaces) to Geoportal platform, obtained [here]{@link https://geoservices.ign.fr/services-web}
   * @param {String} [options.customConfigFile] - path to a local config file. Overload the apiKey parameter
   * @param {Function} options.onSuccess - Callback function for getting successful service response. Takes a {@link Gp.Services.GetConfigResponse} object as a parameter except if "rawResponse" parameter is set to true : a String will be returned.
   * @param {Function} [options.onFailure] - Callback function for handling unsuccessful service responses (timeOut, missing rights, ...). Takes a {@link Gp.Error} object as parameter.
   * @param {Number} [options.timeOut=0] - Number of milliseconds above which a timeOut response will be returned with onFailure callback (see above). Default value is 0 which means timeOut will not be handled.
   */
  getConfig: function getConfig(options) {
    var configService = new _Config_Config__WEBPACK_IMPORTED_MODULE_0__["default"](options);
    configService.call();
  },
  /**
   * Getting elevations in or along of one or several points on french territories using the [elevation services of the Geoportal Platform]{@link https://geoservices.ign.fr/documentation/geoservices/alti.html}.<br/>
   * Two use cases are availables :<br/>
   * 1. getting elevations of the given points : don't use the options.sampling parameter ;<br/>
   * 2. getting a regular set of elevations along the given points : use the options.sampling parameter.
   *
   * @method getAltitude
   * @param {Object} options - Options for function call.
   * @param {String} options.apiKey - Access key to Geoportal platform, obtained [here]{@link https://geoservices.ign.fr/services-web}.
   * @param {Array.<Object>} options.positions - Array of positions ({lon:float, lat:float}) expressed in CRS:84 coordinates system, where to get elevations. 50 positions maximum may be given. 2 positions minimum are required if you use the options.sampling parameter.
   * @param {Number} [options.sampling] - Number of points to use (between 2 and 5000) in order to compute an elevation path. The points given with the options.positions parameter are used to fix the planimetric path along which the elevations will be computed.<br/>
   * If not used, only elevations of these positions will be returned.
   * @param {Boolean} [options.zonly=false] - Set this parameter to true if you only want to have elevations returned without corresponding coordinates.
   * @param {Function} options.onSuccess - Callback function for getting successful service response. Takes a {@link Gp.Services.AltiResponse} object as a parameter, except if "rawResponse" is set to true.
   * @param {Function} [options.onFailure] - Callback function for handling unsuccessful service responses (timeOut, missing rights, ...). Takes a {@link Gp.Error} object as parameter.
   * @param {Number} [options.timeOut=0] - Number of milliseconds above which a timeOut response will be returned with onFailure callback (see above). Default value is 0 which means timeOut will not be handled.
   * @param {String} [options.serverUrl=https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.json] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
   * @param {Boolean} [options.ssl = true] - Use of HTTPS or HTTP protocol to request the services. HTTPS by default (ssl=true).
   * @param {String} [options.protocol=XHR] - Protocol used to handle dialog with web service. Possible values are 'JSONP' ({@link https://en.wikipedia.org/wiki/JSONP}) and 'XHR' ({@link https://en.wikipedia.org/wiki/XMLHttpRequest}). Only XHR protocol is supported in a NodeJS environment. Only use if you know what you're doing.
   * @param {String} [options.proxyURL] - Proxy URL to use when requesting underlying web service. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you're doing.
   * @param {String} [options.callbackSuffix] - Callback function name suffix to use in case of a JSONP protocol use (see above), to set your own suffix instead of auto-increment. Ignored when options.protocol is set to 'XHR' value. Only use if you know what you're doing.
   * @param {String} [options.httpMethod=GET] - HTTP method to use when requesting underlying web service in case of a XHR protocol use (see above). Possible values are 'GET' and 'POST'. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {String} [options.contentType="application/xml"] - Content-Type to use when requesting underlying web service in case of a XHR protocol use (see above) and if method HTTP is POST. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {Boolean} [options.rawResponse=false] - Setting this parameter to true implies you want to handle the service response by yourself : it will be returned as an unparsed String in onSuccess callback parameter. Only use if you know what you are doing.
   * @param {Function} [options.onBeforeParse] - Callback function for handling service response before parsing (as an unparsed String). Takes a String as a parameter (the raw service response). Returns a String that will be parsed as the service response. Only use if you know what you are doing.
   * @param {String} [options.api='REST'] - What API to use for interacting with underlying web service : 'REST'. Only use if you know what you are doing.
   * @param {String} [options.outputFormat='xml'] - Output format for underlying web service response : 'xml' or 'json'. Only use if you know what you are doing.
   */
  getAltitude: function getAltitude(options) {
    var altiService = new _Alti_Alti__WEBPACK_IMPORTED_MODULE_1__["default"](options);
    altiService.call();
  },
  /**
   * Getting positon of a geographic identifier (places names, address, cadastral parcel, other...) using the [geocoding web service of the Geoportal Platform]{@link https://geoservices.ign.fr/documentation/geoservices/geocodage.html}.
   *
   * @example
   * Gp.Services.geocode ({
   *     apiKey : "carte",
   *     location : "73 avenue de Paris, Saint-Mandé",
   *     // traitement des resultats
   *     onSuccess  : function (result) {
   *         console.log("found (x:"+result.position.x+", y:"+result.position.y+")") ;
   *     }
   * }) ;
   *
   *
   * @method geocode
   * @param {Object} options - Options for function call.
   * @param {String} options.apiKey - Access key to Geoportal platform, obtained [here]{@link https://geoservices.ign.fr/services-web}.
   * @param {String} [options.index="StreetAddress"] - Geographical identifier type to search. Values currently availables are : "PositionOfInterest" for place names, "StreetAddress" for address search, "CadastralParcel" for Cadastral parcels search, "location" for a multi-index search on "StreetAddress" and "PositionOfInterest". Default is "StreetAddress".
   * @param {String} options.query - Geographic identifier to locate.
   * @param {Object} [options.filters] - Additional filters to apply to search. The following properties may be given.
   *      @param {String} [options.filters.[prop]] - Additionnal properties to filter search. Properties depends on options.index, and values type should be "String".
   *      <br/><br/>
   *      Properties availables for address search :<br/>
   *      "postalCode", "inseeCode" and "city".
   *      <br/><br/>
   *      Properties availables for place names search :<br/>
   *      "postalCode", "inseeCode" and "type".
   *      <br/><br/>
   *      Properties availables for cadastral parcels search :<br/>
   *      "codeDepartement", "codeCommune", "nomCommune", "codeCommuneAbs", "codeArrondissement", "section", "numero", "feuille".
   * @param {Number} [options.maximumResponses=20] - Maximum number of responses. Default underlying service value applies (20) if not provided.
   * @param {Boolean} [options.returnTrueGeometry=false] - Set this parameter to true if you wish to have the true geometrie returned.
   * @param {Function} options.onSuccess - Callback function for getting successful service response. Takes a {@link Gp.Services.GeocodeResponse} object as a parameter except if "rawResponse" is set to true.
   * @param {Function} [options.onFailure] - Callback function for handling unsuccessful service responses (timeOut, missing rights, ...). Takes a {@link Gp.Error} object as parameter.
   * @param {Number} [options.timeOut=0] - Number of milliseconds above which a timeOut response will be returned with onFailure callback (see above). Default value is 0 which means timeOut will not be handled.
   * @param {String} [options.serverUrl=http (s)://data.geopf.fr/geocodage/search] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
   * @param {Boolean} [options.ssl = true] - Use of HTTPS or HTTP protocol to request the services. HTTPS by default (ssl=true).
   * @param {String} [options.proxyURL] - Proxy URL to use when requesting underlying web service. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you're doing.
   * @param {String} [options.callbackSuffix] - Callback function name suffix to use in case of a JSONP protocol use (see above), to set your own suffix instead of auto-increment. Ignored when options.protocol is set to 'XHR' value. Only use if you know what you're doing.
   * @param {Boolean} [options.rawResponse=false] - Setting this parameter to true implies you want to handle the service response by yourself : it will be returned as an unparsed String in onSuccess callback parameter. Only use if you know what you are doing.
   * @param {Function} [options.onBeforeParse] - Callback function for handling service response before parsing (as an unparsed String). Takes a String as a parameter (the raw service response). Returns a String that will be parsed as the service response. Only use if you know what you are doing.
   */
  geocode: function geocode(options) {
    var geocodeService = new _Geocode_Geocode__WEBPACK_IMPORTED_MODULE_2__["default"](options);
    geocodeService.call();
  },
  /**
   * Retrieving geographical identifiers (place names, address, cadastral parcels, ...) near a given position, using the [reverse geocoding web service of the Geoportal Platform]{@link https://geoservices.ign.fr/documentation/geoservices/geocodage-inverse.html}.
   *
   * @method reverseGeocode
   * @param {Object} options - Options for function call.
   * @param {String} options.apiKey - Access key to Geoportal platform, obtained [here]{@link https://geoservices.ign.fr/services-web}.
   * @param {String} [options.index="StreetAddress"] - Geographical identifier type to search. Values currently availables are : "PositionOfInterest" for place names, "StreetAddress" for address search, "CadastralParcel" for Cadastral parcels search, "location" for a multi-index search on "StreetAddress" and "PositionOfInterest". Default is "StreetAddress".
   * @param {Object} options.position - Reference position where to search geographical identifiers.
   *      @param {Float} options.position.lon - Longitude
   *      @param {Float} options.position.lat - Latitude
   * @param {Object} [options.filters] - Additional filters to apply to search. The following properties may be given.
   *      @param {String} [options.filters.[prop]] - Additionnal properties to filter search. Properties depends on options.index, and values type should be "String".
   *      <br/><br/>
   *      Properties availables for address search :<br/>
   *      "postalCode", "inseeCode" and "city".
   *      <br/><br/>
   *      Properties availables for place names search :<br/>
   *      "postalCode", "inseeCode" and "type".
   *      <br/><br/>
   *      Properties availables for cadastral parcels search :<br/>
   *      "codeDepartement", "codeCommune", "nomCommune", "codeCommuneAbs", "codeArrondissement", "section", "numero", "feuille".
   * @param {Object} [options.searchGeometry] - Location where to perform the search.
   *      @param {String} options.searchGeometry.type - Geometry type (Point|Circle|Linestring|Polygon)
   *      @param {Array.<Float>|Array.Array.<Float>} options.searchGeometry.coordinates - Coordinates
   *      @param {Float} [options.searchGeometry.radius] - Radius (only for type 'Circle')
   * @param {Number} [options.maximumResponses=20] - Maximum number of responses. Default underlying service value applies (20) if not provided.
   * @param {Function} options.onSuccess - Callback function for getting successful service response. Takes a {@link Gp.Services.GeocodeResponse} object as a parameter except if "rawResponse" is set to true.
   * @param {Function} [options.onFailure] - Callback function for handling unsuccessful service responses (timeOut, missing rights, ...). Takes a {@link Gp.Error} object as parameter.
   * @param {Number} [options.timeOut=0] - Number of milliseconds above which a timeOut response will be returned with onFailure callback (see above). Default value is 0 which means timeOut will not be handled.
   * @param {String} [options.serverUrl=https://data.geopf.fr/geocodage/reverse] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
   * @param {Boolean} [options.ssl = true] - Use of HTTPS or HTTP protocol to request the services. HTTPS by default (ssl=true).
   * @param {String} [options.proxyURL] - Proxy URL to use when requesting underlying web service. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you're doing.
   * @param {String} [options.callbackSuffix] - Callback function name suffix to use in case of a JSONP protocol use (see above), to set your own suffix instead of auto-increment. Ignored when options.protocol is set to 'XHR' value. Only use if you know what you're doing.
   * @param {Boolean} [options.rawResponse=false] - Setting this parameter to true implies you want to handle the service response by yourself : it will be returned as an unparsed String in onSuccess callback parameter. Only use if you know what you are doing.
   * @param {Function} [options.onBeforeParse] - Callback function for handling service response before parsing (as an unparsed String). Takes a String as a parameter (the raw service response). Returns a String that will be parsed as the service response. Only use if you know what you are doing.
   */
  reverseGeocode: function reverseGeocode(options) {
    var reverseGeocodeService = new _Geocode_ReverseGeocode__WEBPACK_IMPORTED_MODULE_3__["default"](options);
    reverseGeocodeService.call();
  },
  /**
   * Getting suggestions of probable places names or address based on uncomplete texts, using the [autocompletion service of the Geoportal Platform]{@link https://geoservices.ign.fr/documentation/geoservices/autocompletion.html}
   *
   * @method autoComplete
   * @param {Object} options - Options for function call.
   * @param {String} options.apiKey - Access key to Geoportal platform, obtained [here]{@link https://geoservices.ign.fr/services-web}.
   * @param {String} options.text - Text input to complete.
   * @param {Array.<String>} [options.filterOptions.type = "StreetAddress"] - Suggestion types to provide : address ("StreetAddress") and/or place name ("PositionOfInterest").
   * @param {Array.<String>} [options.filterOptions.territory] - Places where to limit the search of suggestions : "METROPOLE" (Corsica and metropolitan France), "DOMTOM" (French overseas departments and territories), or an INSEE code of a department. No limitation by default. For instance : ['METROPOLE', '31']
   * @param {Number} [options.maximumResponses = 10] - Maximum number of responses.
   * @param {Function} options.onSuccess - Callback function for getting successful service response. Takes a {@link Gp.Services.AutoCompleteResponse} object as a parameter except if "rawResponse" is set to true.
   * @param {Function} [options.onFailure] - Callback function for handling unsuccessful service responses (timeOut, missing rights, ...). Takes a {@link Gp.Error} object as parameter.
   * @param {Number} [options.timeOut=0] - Number of milliseconds above which a timeOut response will be returned with onFailure callback (see above). Default value is 0 which means timeOut will not be handled.
   * @param {String} [options.serverUrl=https://data.geopf.fr/geocodage/completion] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
   * @param {Boolean} [options.ssl = true] - Use of HTTPS or HTTP protocol to request the services. HTTPS by default (ssl=true).
   * @param {String} [options.protocol=XHR] - Protocol used to handle dialog with web service. Possible values are 'JSONP' ({@link https://en.wikipedia.org/wiki/JSONP}) and 'XHR' ({@link https://en.wikipedia.org/wiki/XMLHttpRequest}). Only XHR protocol is supported in a NodeJS environment. Only use if you know what you're doing.
   * @param {String} [options.proxyURL] - Proxy URL to use when requesting underlying web service. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you're doing.
   * @param {String} [options.callbackSuffix] - Callback function name suffix to use in case of a JSONP protocol use (see above), to set your own suffix instead of auto-increment. Ignored when options.protocol is set to 'XHR' value. Only use if you know what you're doing.
   * @param {String} [options.httpMethod=GET] - HTTP method to use when requesting underlying web service in case of a XHR protocol use (see above). Possible values are 'GET' and 'POST'. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {String} [options.contentType="application/xml"] - Content-Type to use when requesting underlying web service in case of a XHR protocol use (see above) and if method HTTP is POST. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {Boolean} [options.rawResponse=false] - Setting this parameter to true implies you want to handle the service response by yourself : it will be returned as an unparsed String in onSuccess callback parameter. Only use if you know what you are doing.
   * @param {Function} [options.onBeforeParse] - Callback function for handling service response before parsing (as an unparsed String). Takes a String as a parameter (the raw service response). Returns a String that will be parsed as the service response. Only use if you know what you are doing.
   */
  autoComplete: function autoComplete(options) {
    var autoCompleteService = new _AutoComplete_AutoComplete__WEBPACK_IMPORTED_MODULE_4__["default"](options);
    autoCompleteService.call();
  },
  /**
   * Getting a route from one point to another using the [route service of the Geoportal Platform]{@link https://geoservices.ign.fr/documentation/geoservices/itineraires.html}.
   *
   * @method route
   * @param {Object} options - Options for function call.
   * @param {String} options.resource - Resource used to compute the route. Available values are in the GetCapabilities.
   * @param {String} options.apiKey - Access key to Geoportal platform, obtained [here]{@link https://geoservices.ign.fr/services-web}.
   * @param {String} [options.routePreference = "fastest"] - Indicates the way to compute the route : "fastest" (time optimisation) or "shortest" (distance optimisation). Available values are in the GetCapabilities.
   * @param {Gp.Point} options.startPoint - Start point of the route. Expressed in CRS:84 coordinates system (startPoint.x corresponds to longitude, startPoint.y corresponds to latitude). Available bbox are in the GetCapabilities.
   * @param {Gp.Point} options.endPoint - End point of the route. Expressed in CRS:84 coordinates system (endPoint.x corresponds to longitude, endPoint.y corresponds to latitude). Available bbox are in the GetCapabilities.
   * @param {Array.<Gp.Point>} [options.viaPoints] - Ordered via Points of the route. Expressed in CRS:84 coordinates system (viaPoints[i].x corresponds to longitude, viaPoints[i].y corresponds to latitude). Available bbox are in the GetCapabilities.
   * @param {String} [options.graph = "Voiture"] - User profile to use to compute the route : "Voiture" (using a vehicule) or "Pieton" (pedestrian). Has an influence on the kind of roads the route may use and the average speed. Available bbox are in the GetCapabilities.
   * @param {Array.<String>} [options.exclusions] - DEPRECATED: use options.constraints. Indicates if route has to avoid some features ("toll", "bridge" or "tunnel").
   * @param {Boolean} [options.geometryInInstructions = false] - Indicates if route geometry has to be also returned with route instructions.
   * @param {Boolean} [options.provideBoundingBox = true] - Indicates if route instructions has to be localised with a BBOX in the response.
   * @param {String} [options.distanceUnit = "m"] - The unit used to provide distances in the response ("meter" or "kilometer").
   * @param {String} [options.timeUnit = "second"] - The unit used to provide duration in the response ("standard", "second", "minute", "hour").
   * @param {Array.<String>} [options.waysAttributes] - Way Attributes to add in the response. Available values are in the GetCapabilities.
   * @param {Array.<Object>} [options.constraints] - Constraints used ({'constraintType':'banned','key':'ways_type','operator':'=','value':'autoroute'}). Available values are in the GetCapabilities.
   * @param {Function} options.onSuccess - Callback function for getting successful service response. Takes a {@link Gp.Services.RouteResponse} object as a parameter except if "rawResponse" is set to true.
   * @param {Function} [options.onFailure] - Callback function for handling unsuccessful service responses (timeOut, missing rights, ...). Takes a {@link Gp.Error} object as parameter.
   * @param {Number} [options.timeOut=0] - Number of milliseconds above which a timeOut response will be returned with onFailure callback (see above). Default value is 0 which means timeOut will not be handled.
   * @param {String} [options.outputFormat='json'] - Output format ("json" or "xml") to use for underlying webService. Only use if you know what you are doing.
   * @param {String} [options.serverUrl=https://data.geopf.fr/navigation/itineraire] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
   * @param {Boolean} [options.ssl = true] - Use of HTTPS or HTTP protocol to request the services. HTTPS by default (ssl=true).
   * @param {String} [options.protocol=XHR] - Protocol used to handle dialog with web service. Possible values are 'JSONP' ({@link https://en.wikipedia.org/wiki/JSONP}) and 'XHR' ({@link https://en.wikipedia.org/wiki/XMLHttpRequest}). Only XHR protocol is supported in a NodeJS environment. Only use if you know what you're doing.
   * @param {String} [options.proxyURL] - Proxy URL to use when requesting underlying web service. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you're doing.
   * @param {String} [options.callbackSuffix] - Callback function name suffix to use in case of a JSONP protocol use (see above), to set your own suffix instead of auto-increment. Ignored when options.protocol is set to 'XHR' value. Only use if you know what you're doing.
   * @param {String} [options.httpMethod=GET] - HTTP method to use when requesting underlying web service in case of a XHR protocol use (see above). Possible values are 'GET' and 'POST'. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {String} [options.contentType="application/xml"] - Content-Type to use when requesting underlying web service in case of a XHR protocol use (see above) and if method HTTP is POST. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {Boolean} [options.rawResponse=false] - Setting this parameter to true implies you want to handle the service response by yourself : it will be returned as an unparsed String in onSuccess callback parameter. Only use if you know what you are doing.
   * @param {Function} [options.onBeforeParse] - Callback function for handling service response before parsing (as an unparsed String). Takes a String as a parameter (the raw service response). Returns a String that will be parsed as the service response. Only use if you know what you are doing.
   */
  route: function route(options) {
    var routeService = new _Route_Route__WEBPACK_IMPORTED_MODULE_5__["default"](options);
    routeService.call();
  },
  /**
   * Computing a set of places (curve) reachable from a given point (or from where to start to reach a given point) within a time or distance constraint using the [isochrone service of the Geoportal Platform]{@link https://geoservices.ign.fr/documentation/geoservices/isochrones.html}.
   *
   * @method isoCurve
   * @param {Object} options - Options for function call.
   * @param {String} options.apiKey - Access key to Geoportal platform, obtained [here]{@link https://geoservices.ign.fr/services-web}.
   * @param {String} options.resource - Resource used to compute the route. Available values are in the GetCapabilities.
   * @param {Gp.Point} options.position - Start or Arrival (options.reverse===true) Point for the computing. Expressed in CRS:84 coordinates system (position.x corresponds to longitude, position.y corresponds to latitude).
   * @param {String} [options.graph = "Voiture"] - User profile to use to compute the isoCurve : "Voiture" (using a vehicule) or "Pieton" (pedestrian). Has an influence on the kind of roads to use and the average speed. Available values are in the GetCapabilities.
   * @param {Array.<String>} [options.exclusions] - DEPRECATED: use options.constraints. Indicates if route has to avoid some features ("toll", "bridge" or "tunnel").
   * @param {Array.<Object>} [options.constraints] - Constraints used ({'constraintType':'banned','key':'ways_type','operator':'=','value':'autoroute'}). Available values are in the GetCapabilities.
   * @param {String} [options.method = "time"] - Computing method to use : "time" (using a duration as a constraint) or "distance" (using a distance as a constraint). Available values are in the GetCapabilities.
   * @param {Float} options.time - Maximum duration (expressed in seconds) to use when options.method is set to "time".
   * @param {Float} options.distance - Maximum distance (expressed in meters) to use when options.method is set to "distance".
   * @param {Boolean} [options.reverse = false] - Set this parameter to true if you want options.position to be the destination (instead of departure) for the computing.
   * @param {String} [options.distanceUnit = "km"] - The unit used to provide distances in the response ("m" or "km").
   * @param {String} [options.timeUnit = "second"] - The unit used to provide duration in the response ("standard", "second", "minute", "hour").
   * @param {Boolean} [options.smoothing = false] - DEPRECATED: Set this parameter to true if you want the resulting geometry to be smoothed.
   * @param {Boolean} [options.holes = false] - DEPRECATED: Set this parameter to true if you want the resulting geometry (polygon) to have holes if pertinent.
   * @param {Function} options.onSuccess - Callback function for getting successful service response. Takes a {@link Gp.Services.IsoCurveResponse} object as a parameter except if "rawResponse" is set to true.
   * @param {Function} [options.onFailure] - Callback function for handling unsuccessful service responses (timeOut, missing rights, ...). Takes a {@link Gp.Error} object as parameter.
   * @param {Number} [options.timeOut=0] - Number of milliseconds above which a timeOut response will be returned with onFailure callback (see above). Default value is 0 which means timeOut will not be handled.
   * @param {String} [options.outputFormat='json'] - Output format ("json") to use for underlying webService. Only use if you know what you are doing.
   * @param {String} [options.serverUrl=https://data.geopf.fr/navigation/isochrone] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
   * @param {Boolean} [options.ssl = true] - Use of HTTPS or HTTP protocol to request the services. HTTPS by default (ssl=true).
   * @param {String} [options.protocol=XHR] - Protocol used to handle dialog with web service. Possible values are 'JSONP' ({@link https://en.wikipedia.org/wiki/JSONP}) and 'XHR' ({@link https://en.wikipedia.org/wiki/XMLHttpRequest}). Only XHR protocol is supported in a NodeJS environment. Only use if you know what you're doing.
   * @param {String} [options.proxyURL] - Proxy URL to use when requesting underlying web service. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you're doing.
   * @param {String} [options.callbackSuffix] - Callback function name suffix to use in case of a JSONP protocol use (see above), to set your own suffix instead of auto-increment. Ignored when options.protocol is set to 'XHR' value. Only use if you know what you're doing.
   * @param {String} [options.httpMethod=GET] - HTTP method to use when requesting underlying web service in case of a XHR protocol use (see above). Possible values are 'GET' and 'POST'. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {String} [options.contentType="application/xml"] - Content-Type to use when requesting underlying web service in case of a XHR protocol use (see above) and if method HTTP is POST. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {Boolean} [options.rawResponse=false] - Setting this parameter to true implies you want to handle the service response by yourself : it will be returned as an unparsed String in onSuccess callback parameter. Only use if you know what you are doing.
   * @param {Function} [options.onBeforeParse] - Callback function for handling service response before parsing (as an unparsed String). Takes a String as a parameter (the raw service response). Returns a String that will be parsed as the service response. Only use if you know what you are doing.
   */
  isoCurve: function isoCurve(options) {
    var processIsoCurveService = new _ProcessIsoCurve_ProcessIsoCurve__WEBPACK_IMPORTED_MODULE_6__["default"](options);
    processIsoCurveService.call();
  }
};

/**
 * Point object.
 *
 * @namespace
 * @alias Gp.Point
 *
 * @property {Float} x - Point abscissa
 * @property {Float} y - Point ordinate
 */
var point = {};

/**
 * Circle object.
 *
 * @namespace
 * @alias Gp.Circle
 *
 * @property {Float} x - Circle center abscissa.
 * @property {Float} y - Circle center ordinate.
 * @property {Float} radius - Circle radius.
 */
var circle = {};

/**
 * Bounding box object, expressed with four coordinates.
 *
 * @namespace
 * @alias Gp.BBox
 *
 * @property {Float} left - minimum abscissa
 * @property {Float} right - maximum abscissa
 * @property {Float} bottom - minimum ordinate
 * @property {Float} top - maximum ordinate
 */
var bbox = {};
/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _ConfigInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






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
function Config(options) {
  if (!(this instanceof Config)) {
    throw new TypeError(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("CLASS_CONSTRUCTOR", "Config"));
  }

  /**
   * Nom de la classe (heritage)
   */
  this.CLASSNAME = "Config";
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("Gp.Config");
  this.logger.trace("[Constructeur Config (options)]");

  // #####################
  // analyse des options
  // #####################

  // gestion du callback onSuccess
  var bOnSuccess = !!(options.onSuccess !== null && typeof options.onSuccess === "function");
  if (!bOnSuccess) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "onSuccess()"));
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
  this.options.listConfigUrls = options.customConfigFile ? [options.customConfigFile] : !Array.isArray(options.apiKey) ? _DefaultUrlService__WEBPACK_IMPORTED_MODULE_3__["default"].Config.url(options.apiKey.split(",")) : _DefaultUrlService__WEBPACK_IMPORTED_MODULE_3__["default"].Config.url(options.apiKey);
}

/**
 * @lends module:Config#
 */
Config.prototype = Object.create(_CommonService__WEBPACK_IMPORTED_MODULE_2__["default"].prototype, {
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
var __callService = function __callService(error, success) {
  var _this = this;
  // liste des resultats au format JSON
  this.listConfigResults = [];

  // test on env. nodejs or browser
  var Fetch = null;
  if (typeof window === "undefined") {
    var nodefetch = __webpack_require__(14);
    Fetch = nodefetch;
  } else {
    Fetch = window.fetch;
  }

  // the factory of fetch !
  var fetchFactory = function fetchFactory(url) {
    return Fetch(url, {
      credentials: "same-origin"
    }).then(function (response) {
      if (response.ok) {
        return response.json().then(function (json) {
          // TODO :
          // tester le contenu !
          return json;
        })["catch"](function (error) {
          throw new Error("Exception Json : " + error);
        });
      } else {
        throw new Error("Exception HTTP : " + response.status + " (status code) !");
      }
    })["catch"](function (error) {
      return new Promise(function (resolve, reject) {
        // eslint-disable-line no-unused-vars
        reject(error);
      });
    });
  };

  // construction des promises fetch
  var promises = [];
  for (var index = 0; index < this.listConfigUrls.length; index++) {
    var url = this.listConfigUrls[index];
    promises.push(fetchFactory(url));
  }
  Promise.all(promises).then(function (results) {
    if (!results) {
      throw new Error("results config empty !?");
    }
    results.forEach(function (result) {
      // TODO :
      // verification des resultats
      _this.listConfigResults.push(result);
    });
  }).then(function () {
    success.call(_this, _this.listConfigResults);
  })["catch"](function (e) {
    // TODO :
    // construction d'un message
    error.call(_this, e);
  });
};

/**
 * Requêtes en mode synchrone
 *
 * @param {*} error
 * @param {*} success
 * @private
 */
var __callServiceSync = function __callServiceSync(error, success) {
  // liste des resultats au format JSON
  this.listConfigResults = [];

  // FIXME :
  // boucle synchrone !
  for (var i = 0; i < this.listConfigUrls.length; i++) {
    var url = this.listConfigUrls[i];
    // TODO :
    // prévoir le CORS, headers, ...
    var request = new XMLHttpRequest();
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
  var mergeConfig = function mergeConfig(objects) {
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
      allKeysConfig = _objectSpread(_objectSpread({}, allKeysConfig), objects[i].generalOptions.apiKeys);
      allLayersConfig = _objectSpread(_objectSpread({}, allLayersConfig), objects[i].layers);
      allTMSConfig = _objectSpread(_objectSpread({}, allTMSConfig), objects[i].tileMatrixSets);
    }
    var mergedConfig = {
      generalOptions: {
        apiKeys: allKeysConfig
      },
      layers: allLayersConfig,
      tileMatrixSets: allTMSConfig
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
  var IConfig = new _ConfigInterface__WEBPACK_IMPORTED_MODULE_4__["default"]();
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
/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_0__);

var LoggerByDefault = {
  /**
   * logger statique
   *
   * @static
   * @param {String} name - nom du logger
   * @returns {Object} retourne un logger
   */
  getLogger: function getLogger(name) {
    // Substitute global constants configured at compile time
    // cf. webpack.config.js
    // on définit process si non défini dans l'environnement
    // eslint-disable-next-line no-use-before-define
    if (typeof process === "undefined") {
      var process = {};
      process.env = {
        VERBOSE: false
      };
    }
    process.env.VERBOSE ? loglevel__WEBPACK_IMPORTED_MODULE_0__["enableAll"]() : loglevel__WEBPACK_IMPORTED_MODULE_0__["disableAll"]();
    var logname = name || "default";
    return loglevel__WEBPACK_IMPORTED_MODULE_0__["getLogger"](logname);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (LoggerByDefault);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    var _loggersByName = {};
    var defaultLogger = null;

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods() {
        /*jshint validthis:true */
        var level = this.getLevel();

        // Replace the actual methods.
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, this.name);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;

        // Return any important warnings.
        if (typeof console === undefinedType && level < this.levels.SILENT) {
            return "No console available for logging";
        }
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, _level, _loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, factory) {
      // Private instance variables.
      var self = this;
      /**
       * The level inherited from a parent logger (or a global default). We
       * cache this here rather than delegating to the parent so that it stays
       * in sync with the actual logging methods that we have installed (the
       * parent could change levels but we might not have rebuilt the loggers
       * in this child yet).
       * @type {number}
       */
      var inheritedLevel;
      /**
       * The default level for this logger, if any. If set, this overrides
       * `inheritedLevel`.
       * @type {number|null}
       */
      var defaultLevel;
      /**
       * A user-specific level for this logger. If set, this overrides
       * `defaultLevel`.
       * @type {number|null}
       */
      var userLevel;

      var storageKey = "loglevel";
      if (typeof name === "string") {
        storageKey += ":" + name;
      } else if (typeof name === "symbol") {
        storageKey = undefined;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType || !storageKey) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var cookieName = encodeURIComponent(storageKey);
                  var location = cookie.indexOf(cookieName + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(
                          cookie.slice(location + cookieName.length + 1)
                      )[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      function clearPersistedLevel() {
          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage.removeItem(storageKey);
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch (ignore) {}
      }

      function normalizeLevel(input) {
          var level = input;
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              return level;
          } else {
              throw new TypeError("log.setLevel() called with invalid level: " + input);
          }
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          if (userLevel != null) {
            return userLevel;
          } else if (defaultLevel != null) {
            return defaultLevel;
          } else {
            return inheritedLevel;
          }
      };

      self.setLevel = function (level, persist) {
          userLevel = normalizeLevel(level);
          if (persist !== false) {  // defaults to true
              persistLevelIfPossible(userLevel);
          }

          // NOTE: in v2, this should call rebuild(), which updates children.
          return replaceLoggingMethods.call(self);
      };

      self.setDefaultLevel = function (level) {
          defaultLevel = normalizeLevel(level);
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.resetLevel = function () {
          userLevel = null;
          clearPersistedLevel();
          replaceLoggingMethods.call(self);
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      self.rebuild = function () {
          if (defaultLogger !== self) {
              inheritedLevel = normalizeLevel(defaultLogger.getLevel());
          }
          replaceLoggingMethods.call(self);

          if (defaultLogger === self) {
              for (var childName in _loggersByName) {
                _loggersByName[childName].rebuild();
              }
          }
      };

      // Initialize all the internal levels.
      inheritedLevel = normalizeLevel(
          defaultLogger ? defaultLogger.getLevel() : "WARN"
      );
      var initialLevel = getPersistedLevel();
      if (initialLevel != null) {
          userLevel = normalizeLevel(initialLevel);
      }
      replaceLoggingMethods.call(self);
    }

    /*
     *
     * Top-level API
     *
     */

    defaultLogger = new Logger();

    defaultLogger.getLogger = function getLogger(name) {
        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
            throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
            logger = _loggersByName[name] = new Logger(
                name,
                defaultLogger.methodFactory
            );
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    // ES6 default export, for compatibility
    defaultLogger['default'] = defaultLogger;

    return defaultLogger;
}));


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Classe de gestion des erreurs qui permer d'associer un message d'erreur à l'exception lancée.
 *
 * @example
 * MessagesResources.getMessage("ERROR_PARAM_MISSING", "x", "y", "z")));
 * // --> output : Parameter(s) 'x - y - z' missing
 *
 * @module MessagesResources
 * @alias Gp.Utils.MessagesResources
 * @private
 */
var MessagesResources = {
  // Paramètres
  PARAM_MISSING: "Parameter(s) '%var%' missing",
  PARAM_EMPTY: "Parameter(s) '%var%' empty",
  PARAM_TYPE: "Wrong type(s) for parameter(s) '%var%'",
  PARAM_FORMAT: "Parameter(s) '%var%' not correctly formatted",
  PARAM_NOT_SUPPORT: "Value(s) for parameter(s) '%var%' not supported",
  PARAM_NOT_SUPPORT_NODEJS: "Value(s) for parameter(s) '%var%' not supported to NodeJS",
  PARAM_UNKNOWN: "Value(s) for parameter(s) '%var%' unknown",
  // Services
  // Requête
  SERVICE_REQUEST_BUILD: "An error occurred during the request building of the service",
  SERVICE_REQUEST_EMPTY: "The request sent to the service is empty",
  // Réponse
  SERVICE_RESPONSE_EXCEPTION: "The service returned an exception : '%var%'",
  SERVICE_RESPONSE_EXCEPTION_2: "The service returned an exception",
  SERVICE_RESPONSE_ANALYSE: "An error occurred while parsing the response '%var%' of the service",
  SERVICE_RESPONSE_ANALYSE_2: "An unknown error occurred while parsing the response",
  SERVICE_RESPONSE_EMPTY: "The response of the service is empty",
  SERVICE_RESPONSE_EMPTY_2: "The response from the service could not be analyzed or is empty",
  SERVICE_RESPONSE_FORMAT: "The format of the service response is not supported (handled format(s) : '%var%')",
  SERVICE_RESPONSE_FORMAT_2: "The format of the service response is not supported",
  SERVICE_RESPONSE_FORMAT_3: "No suggestion matching the search",
  // Classes
  CLASS_CONSTRUCTOR: "'%var%' constructor cannot be called as a function.",
  /**
   * Fonction qui va retourner le message d'erreur associé à la clé donnée
   *
   * @method getMessage
   * @param {String} clef - Clef de l'erreur (ex : ERROR_PARAM)
   * @param {String[]} parametres - Paramètres/variables concernés par le message d'erreur associé à la clef donnée
   * @return {String} message - String contenant le message de l'exception
   */
  getMessage: function getMessage(clef, parametres) {
    // param de la fonction uniquement pour la documentation...

    if (Object.keys(arguments).length === 0) {
      return "Message indefined !";
    }
    var params = Array.prototype.slice.call(arguments);
    var key = params.shift();
    var args = params;
    var message = this[key];
    try {
      if (Array.isArray(args) && args.length > 0) {
        message = message.replace("%var%", args.join(" - "));
      } else {
        message = message.replace("%var%", "%var% (not specified)");
      }
    } catch (e) {
      // error de string.replace()
    }
    return message;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MessagesResources);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _Protocols_Protocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
var _package_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(25, 1);





// import DefaultUrlService from "./DefaultUrlService";
// package.json (extract version)


/**
 * @classdesc
 * Composant Service
 *
 * @constructor
 * @alias Gp.Services.CommonService
 * @param {Object} options - options communes à tous les services
 *
 * @param {String} [options.serverUrl] - URL d'accès au service. Par défaut "https://data.geopf.fr/SERVICE/".
 *      Permet de forcer l'utilisation d'un service équivalent déployé derrière une éventuelle autre URL d'accès.
 *      Si ce paramètre est renseigné alors, le paramètre par défaut est ignoré.
 *
 * @param {String} [options.protocol] - Le protocole à utiliser pour récupérer les informations du service :
 *      peut valoir 'JSONP' ou 'XHR'.
 *      Par défaut, c'est le protocole XHR qui sera utilisé.
 *      Attention, le protocole JSONP n'est pas valide dans un environnement NodeJS (Utilisation du mode XHR).
 *
 * @param {Boolean} [options.ssl] - Indique si l'on souhaite intérroger les services en https.
 *      Ce paramètre ne fonctionne que pour une utilisation hors navigateur (ex. NodeJS).
 *      Sur un navigateur, le protocole est automatiquement extrait de l'url du site...
 *      Par défaut, on utilise le protocole http (ssl=false).
 *
 * @param {String} [options.proxyURL] - Le proxy à utiliser pour pallier au problème de cross-domain dans le cas d'une requête XHR.
 *      Utile si le paramètre 'protocol' vaut 'XHR', il ne sera pas pris en compte si protocol vaut JSONP.
 *
 * @param {String} [options.callbackSuffix] - Suffixe de la fonction de callback à utiliser, dans le cas du protocole JSONP.
 *      Par défaut, la fonction de callback portera un nom du type "callback"+ID, où ID est soit un identifiant unique généré à chaque requête,
 *      soit le paramètre callbackSuffix s'il est spécifié. Par exemple, si callbackSuffix="_2", la fonction sera "callback_2 ()".
 *      Utile pour utiliser une réponse déjà encapsulée dans une fonction de callback, dont le nom est connu
 *      Utile seulement si le paramètre 'protocol' vaut 'JSONP', il ne sera pas pris en compte si protocol vaut 'XHR'.
 *
 * @param {String} [options.httpMethod] - La méthode HTTP
 *      à utiliser dans le cas d'une requête XHR : peut valoir 'GET' ou 'POST'.
 *      Non pris en compte si 'protocol' vaut JSONP qui fonctionne obligatoirement en GET.
 *      Par défaut, c'est la méthode GET qui est utilisée.
 *
 * @param {String} [options.contentType] - Content-Type de la requete
 *      à utiliser dans le cas d'une requête XHR en mode POST.
 *      Non pris en compte si 'protocol' vaut JSONP et/ou la méthode HTTP vaut GET.
 *      Par défaut, c'est la méthode GET qui est utilisée donc on n'utilise pas de Content-Type.
 *
 * @param {Number} [options.timeOut] - Délai d'attente maximal (en ms) de la réponse du service (à partir de l'envoi de la requête).
 *      Par défaut, aucun timeOut n'est pris en compte (timeoutDelay= 0).
 *
 * @param {Boolean} [options.rawResponse] - Indique si l'on souhaite que la réponse du service ne soit pas parsée par l'API avant d'être restituée.
 *      (Cf. paramètre « onSuccess » pour plus de détails).
 *
 * @param {Function} [options.onSuccess] - Fonction appelée lorsque le service répond correctement à la requête
 *      (code HTTP 200, sans message d'erreur).
 *      Cette fonction prend en paramètre la réponse du service,
 *      soit sous la forme d'un Object Javascript formaté par le parseur dédié à la syntaxe du service (comportement par défaut) ;
 *      soit brute au format String non prétraité si le paramètre « rawResponse » a été précisé avec la valeur « true ».
 *
 * @param {Function} [options.onFailure] - Fonction appelée lorsque le service ne répond pas correctement
 *      (code HTTP de retour différent de 200 ou pas de réponse).
 *
 * @param {Function} [options.onBeforeParse] - Fonction appelée avant le parsing de la réponse
 *      Permet de modifier la réponse avant parsing et la fonction doit retourner une String.
 *      Cette fonction prend en paramètre la réponse telle que renvoyée par le service
 *      (cad au format json ou xml).
 *      Pour le JSONP, si le paramètre "rawResponse" a été précisé avec la valeur "true",
 *      la fonction prend en paramètre un Object JavaScript contenant la réponse XML.
 *
 * @example
 *   var options = {
 *      serverUrl : 'http://localhost/service/',
 *      protocol : 'JSONP', // JSONP|XHR
 *      ssl : false,
 *      proxyURL : null,
 *      callbackName : null,
 *      httpMethod : 'GET', // GET|POST
 *      timeOut : 10000, // ms
 *      rawResponse : false, // true|false
 *      scope : null, // this
 *      onSuccess : function (response) {},
 *      onFailure : function (error) {},
 *      onBeforeParse : function (rawResponse) {}
 *   };
 */
function CommonService(options) {
  if (!(this instanceof CommonService)) {
    throw new TypeError(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_2__["default"].getMessage("CLASS_CONSTRUCTOR"));
  }
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("CommonService");
  this.logger.trace("[Constructeur CommonService (options)]");

  // #####################
  // récupération des options par défaut pour les paramètres optionnels
  // #####################

  /**
   * Options du service
   * @type {Object}
   */
  this.options = {
    // protocol : "JSONP",
    protocol: "XHR",
    ssl: true,
    proxyURL: "",
    // callbackName : "",
    callbackSuffix: null,
    httpMethod: "GET",
    timeOut: 0,
    rawResponse: false,
    scope: this,
    /**
    * callback par defaut pour la reponse
    * @param {Object} response - response
    * @private
    */
    onSuccess: function onSuccess(response) {
      console.log("onSuccess - la reponse est la suivante : ", response);
    },
    /**
    * callback par defaut pour les erreurs
    * @param {Object} error - error
    * @private
    */
    onFailure: function onFailure(error) {
      if (error.status === 200 || !error.status) {
        console.log("onFailure : ", error.message);
      } else {
        console.log("onFailure - Erreur (", error.status, ") : ", error.message);
      }
    }
  };

  // et on ajoute les options en paramètre aux options par défaut
  for (var opt in options) {
    if (options.hasOwnProperty(opt)) {
      this.options[opt] = options[opt];
    }
  }

  // #####################
  // analyse des options
  // #####################

  // modification de la fonction de callback onSuccess dans le cas où la réponse brute est demandée
  if (this.options.rawResponse && !this.options.onSuccess) {
    /**
    * callback par defaut pour la reponse
    * @param {Object} response - response
    * @private
    */
    this.options.onSuccess = function (response) {
      console.log("onSuccess - la réponse brute du service est la suivante : ", response);
    };
  }

  // gestion du callback onSuccess
  var bOnSuccess = !!(this.options.onSuccess !== null && typeof this.options.onSuccess === "function");
  if (!bOnSuccess) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_2__["default"].getMessage("PARAM_MISSING", "onSuccess()"));
  }

  // gestion de la methode HTTP
  this.options.httpMethod = typeof options.httpMethod === "string" ? options.httpMethod.toUpperCase() : "GET";
  switch (this.options.httpMethod) {
    case "POST":
    case "GET":
      break;
    case "PUT":
    case "DELETE":
    case "HEAD":
    case "OPTIONS":
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_2__["default"].getMessage("PARAM_NOT_SUPPORT", "httpMethod"));
    default:
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_2__["default"].getMessage("PARAM_UNKNOWN", "httpMethod"));
  }

  // gestion du protocole
  // this.options.protocol = (typeof options.protocol === "string" ) ? options.protocol.toUpperCase() : "JSONP";
  this.options.protocol = typeof options.protocol === "string" ? options.protocol.toUpperCase() : "XHR";
  switch (this.options.protocol) {
    case "JSONP":
    case "XHR":
      break;
    default:
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_2__["default"].getMessage("PARAM_UNKNOWN", "protocol"));
  }

  // on determine l'environnement d'execution : browser ou non ?
  // et on lance une exception sur l'utilisation du protocole JSONP pour nodeJS...
  if (typeof window === "undefined" && this.options.protocol === "JSONP") {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_2__["default"].getMessage("PARAM_NOT_SUPPORT_NODEJS", "protocol=JSONP (instead use XHR)"));
  }

  // le protocole JSONP ne fonctionne qu'en GET.
  if (this.options.protocol === "JSONP") {
    this.options.httpMethod = "GET";
  }

  // gestion du cache
  this.options.nocache = options.nocache || false;

  // #####################
  // attributs d'instances
  // #####################

  /**
   * Format de réponse du service
   */
  this.options.outputFormat = null;
  /**
   * Requête envoyée au service
   */
  this.request = null;
  /**
   * Reponse du service
   */
  this.response = null;
}

/**
 * @lends module:CommonService
 */
CommonService.prototype = {
  /*
   * Constructeur (alias)
   */
  constructor: CommonService,
  /**
   * Appel du service Géoportail
   */
  call: function call() {
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
        return onError.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__["default"]("Analyse de la reponse en échec !?"));
      }
    }

    // callback de gestion des erreurs : renvoit un objet de type ErrorService
    function onError(error) {
      this.logger.trace("CommonService::onError()");
      // error : l'objet est du type ErrorService ou Error
      var e = error;
      if (!(e instanceof _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__["default"])) {
        e = new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__["default"](error.message);
      }
      this.options.onFailure.call(this, e);
    }
  },
  /**
   * Création de la requête
   * @param {Function} error - callback
   * @param {Function} success - callback
   */
  buildRequest: function buildRequest(error, success) {
    // INFO
    this.logger.error("overwritten method !");
    // retourne l'objet 'this.request'
    if (error) {
      error.call(this, "This method must be overwritten !");
    }
    success.call(this, "This method must be overwritten !");
  },
  /**
   * Appel du service
   * @param {Function} error - callback
   * @param {Function} success - callback
   */
  callService: function callService(error, success) {
    // INFO
    // retourne l'objet 'this.response'

    // NOTES
    //  Pour le mode XHR, on recupère une reponse sous forme d'un json ou xml (#document).
    //  Pour le mode JSONP, on a toujours un objet JSON mais sous 2 formes :
    //      - natif
    //      - XML encapsulé :
    //          {http : {status:200, error:null},xml :'réponse du service'}
    //          {http : {status:400, error:'reponse du service'},xml :null}
    //  En XHR, la reponse est directement sauvegardée dans 'this.response'.
    //  Par contre, en JSONP, on doit analyser la reponse (status ou non vide),
    //  et ne renvoyer que le contenu (xml ou l'objet)

    // gestion de la proxification du service
    var strUrlProxified = null;
    var strData = this.request;

    // a t on mis en place un proxy ?
    // la proxyfication est valable uniquement en mode XHR !
    var bUrlProxified = !!(this.options.proxyURL && this.options.protocol === "XHR");

    // rajout de l'option gpbibaccess
    // INFO : acces au numero de version de package.conf aprés compilation !
    var requestMetaOptions = {
      "gp-access-lib": _package_json__WEBPACK_IMPORTED_MODULE_5__.version
    };
    if (this.options.apiKey) {
      requestMetaOptions.apiKey = this.options.apiKey;
    }
    this.options.serverUrl = _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["default"].normalyzeUrl(this.options.serverUrl, requestMetaOptions, false);

    // si le proxy est renseigné, on proxifie l'url du service
    if (bUrlProxified) {
      if (this.options.httpMethod === "GET") {
        strUrlProxified = this.options.proxyURL + _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["default"].normalyzeUrl(this.options.serverUrl, this.request, true);
        strData = null;
      }
      if (this.options.httpMethod === "POST") {
        strUrlProxified = this.options.proxyURL + _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["default"].normalyzeUrl(this.options.serverUrl, null, true);
        strData = this.request;
      }
    }

    // contexte du composant spécifique !
    var self = this;
    var options = {
      url: strUrlProxified || this.options.serverUrl,
      method: this.options.httpMethod,
      protocol: this.options.protocol,
      timeOut: this.options.timeOut || 0,
      format: this.options.outputFormat,
      // ceci declenche le parsing de la reponse du service, mais on souhaite toujours une reponse brute (string) !
      nocache: this.options.nocache || false,
      // ceci permet d'ajouter un timestamp dans la requête
      wrap: this.options.protocol !== "XHR",
      // ceci declenche l'encapsulation de la reponse XML du service dans du JSON, mais pas en mode XHR !
      callbackSuffix: this.options.callbackSuffix,
      // callbackName : this.options.callbackName || null,
      data: strData,
      headers: null,
      // TODO...
      content: this.options.contentType || "application/xml",
      scope: this.options.scope || this,
      // callback de reponse
      onResponse: function onResponse(response) {
        self.logger.trace("callService::onResponse()");

        // le contenu de la reponse à renvoyer !
        var content = null;

        // XHR : on renvoie toujours la reponse brute du service (json ou xml)
        // au parser du composant...
        if (self.options.protocol === "XHR") {
          self.logger.trace("Response XHR", response);
          content = response; // par defaut, la reponse du service  !
        }

        // JSONP : on pre-analyse la reponse brute du service (encapsuler ou pas)
        // avant de l'envoyer au parser du composant...
        if (self.options.protocol === "JSONP") {
          self.logger.trace("Response JSON", response);
          if (response) {
            if (response.http) {
              // reponse encapsulée :
              // ex. reponse du service en xml
              // > {http : {status:200, error:null},xml :'réponse du service'}
              if (response.http.status !== 200) {
                error.call(self, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__["default"]({
                  status: response.http.status,
                  message: response.http.error,
                  type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__["default"].TYPE_SRVERR
                }));
                return;
              } else {
                content = response.xml; // par defaut !
                if (self.options.rawResponse) {
                  content = response;
                }
              }
            } else {
              // reponse non encapsulée :
              // ex. reponse du service en json ou xml
              content = response;
            }
          } else {
            error.call(self, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__["default"]("Le contenu de la reponse est vide !?"));
            return;
          }
        }

        // si on souhaite parser la reponse du service
        if (typeof self.options.onBeforeParse === "function") {
          var newResponse = self.options.onBeforeParse(content);
          if (typeof newResponse === "string") {
            // la reponse parsée par l'utilisateur est retournée sous
            // forme de string !
            content = newResponse;
          }
        }
        // sauvegarde de la reponse dans l'objet parent (CommonService)
        self.response = content;
        // on renvoie la reponse...
        success.call(self, content);
      },
      // callback des erreurs
      onFailure: function onFailure(e) {
        self.logger.trace("callService::onFailure()");
        // on est forcement sur une erreur levée par un service !
        e.type = _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__["default"].TYPE_SRVERR;
        error.call(self, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__["default"](e));
      },
      // callback de timeOut
      onTimeOut: function onTimeOut() {
        self.logger.trace("callService::onTimeOut()");
        error.call(self, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__["default"]("TimeOut!"));
      }
    };
    _Protocols_Protocol__WEBPACK_IMPORTED_MODULE_3__["default"].send(options);
  },
  /**
   * Analyse de la réponse
   * @param {Function} error - callback
   * @param {Function} success - callback
   */
  analyzeResponse: function analyzeResponse(error, success) {
    // INFO
    this.logger.error("overwritten method !");
    // retourne l'objet spécifique au type de composant (json)
    if (error) {
      error.call(this, "This method must be overwritten !");
    }
    success.call(this, "This method must be overwritten !");
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CommonService);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Classe utilitaire
 *
 * @module Helper
 * @alias Gp.Helper
 */
var Helper = {
  /**
   * concatenation des parametres key/value dans les urls
   *
   * @method normalyzeParameters
   * @static
   * @param {Object} params - tableau de clef/valeur
   *
   * @example
   *  Gp.Utils.Helper.normalyzeParameters ({
   *         key1:value1,
   *         key2:value2,
   *         key3:value3
   *  });
   *  // out : "key1=value1&key2=value2&key3=value3"
   *
   * @returns {String} retourne les paramètres concaténés
   */
  normalyzeParameters: function normalyzeParameters(params) {
    var myParams = null;
    if (params) {
      var tabParams = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          var value = params[key];
          if (!value) {
            value = "";
          }
          tabParams.push(key + "=" + value);
        }
      }
      myParams = tabParams.join("&");
    }
    return myParams;
  },
  /**
   * Concaténation et encodage des urls.
   *
   * @method normalyzeUrl
   * @static
   * @param {String} url - url
   * @param {Object|String} params - tableau de clef/valeur ou string
   * @param {Boolean} encode - true|false, false par defaut
   *
   * @example
   *  Gp.Utils.Helper.normalyzeUrl (url, {
   *         key1:value1,
   *         key2=:value2,
   *         key3:value3
   *  });
   *  // out : "url?key1=value1&key2=value2&key3=value3"
   *
   * @returns {String} retourne une url normalisée
   */
  normalyzeUrl: function normalyzeUrl(url, params, encode) {
    var myUrl = url;
    if (url) {
      if (url.split("?").length - 1 >= 2) {
        // S'il y a plusieurs "?" dans l'URL, on garde le premier et on remplace les autres par des &
        var firstOccuranceIndex = url.search(/\?/) + 1;
        myUrl = url.substring(0, firstOccuranceIndex) + url.slice(firstOccuranceIndex).replace(/\?/g, "&");
      }
      var k = url.indexOf("?");
      if (k === -1) {
        // pas de ? et KVP
        myUrl += "?";
      }
      if (k !== -1 && k !== url.length - 1) {
        // KVP
        myUrl += "&";
      }
    }
    if (params) {
      if (typeof params === "string") {
        params = params.replace("?", "");
        myUrl += params;
      } else {
        myUrl += this.normalyzeParameters(params);
      }
    }
    if (encode) {
      // FIXME bonne idée ?
      myUrl = encodeURIComponent(myUrl);
    }
    return myUrl;
  },
  /**
   * Indentation d'une chaine
   *
   * @method indent
   * @static
   * @param {Number} n - nombre de tabulation
   * @param {String} msg - chaine
   *
   * @example
   * Gp.Utils.Helper.indent (2, "message à indenter")
   * // out
   * // ........message à indenter
   *
   * @returns {String} retourne une chaine indentée
   */
  indent: function indent(n, msg) {
    var num = n || 0;
    return new Array(num + 1).join("\t") + msg;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Helper);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _XHR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _JSONP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/**
 * Interface de dialogue avec les webservices
 *
 * @module Protocols
 * @private
 * @alias Gp.Protocols
 */



var Protocol = {
  /**
   * Interface unique d"envoi d"une requête.
   *
   * @method send
   * @static
   * @param {Object} options - options generales
   * @param {String} options.url      - url du service
   * @param {String} options.method   - GET, POST, PUT, DELETE
   * @param {String} options.protocol - XHR | JSONP
   * @param {String} options.format   - format de la reponse du service : json, xml ou null (brute)...
   * @param {String} options.wrap     - encapsuler la reponse du service dans du JSON : true|false (true par defaut sur le protocole JSONP)
   * @param {String} options.callbackSuffix - suffixe de la fonction de callback (JSONP uniquement) (ex: si callbackSuffix="", la fonction s'appellera "callback")
   * @param {String} options.timeOut  - 0 ms
   * @param {Boolean} options.nocache  - true|false
   * @param {Object|String} options.data        - content (post) ou param (get)
   * @param {Object|String} options.headers     - (post) ex. referer
   * @param {Object|String} options.content - (post) ex. "application/json"
   * @param {String} options.scope       - this (TODO)
   * @param {Function} options.onResponse - callback
   * @param {Function} options.onFailure - callback
   * @param {Function} options.onTimeOut - callback
   * @param {String} options.proxyUrl -  (TODO)
   */
  send: function send(options) {
    // INFO
    // "output" - param est interne à la classe "Protocol" (parametrable via "wrap"), et à ajouter à l"url
    //      ce param est independant du service car il est géré par le filtre LUA :
    //          ex. json|xml (json par defaut).
    //          Ce param. permet d"encapsuler du XML dans du JSON :
    //              {http : {status:200, error:null},xml :"réponse du service"}
    //          Utile pour les services qui ne repondent que du XML (ex. Geocodage)
    //
    // |-------------------------------------------------|
    // |      \service |      |     |                    |
    // | output\ format| json | xml |     remarques      |
    // |--------\------|------|-----|--------------------|
    // |    json       | json | json| json/xml encapsulé |
    // |    xml        | json | xml | param inactif      |
    // |-------------------------------------------------|
    // ex. le service demande une reponse native au "format" json et avec un "output" json.
    // on a donc une reponse json encapsulé dans un json : ce qu'on ne souhaite pas !
    // dans ce cas on ne renseigne pas output=json

    // INFO
    // "wrap" - choix d"encapsuler ou non les reponses dans du JSON.
    //      Par defaut, on encapsule uniquement les reponses sur le protocole JSONP (et qui sont en xml) !

    // INFO
    // "callback" - param est interne à la classe "Protocol" (non parametrable), et à ajouter à l"url
    //      ce param est independant du service car il est géré aussi par le filtre LUA :
    //          ex. callback|null
    //          Ce param. permet de renvoyer une reponse javascript :
    //              callback ({http : {status:200, error:null},xml :"réponse du service"})
    //          Ce param. est non renseigné par defaut car pour du JSONP, on utilise le
    //          le protocol JSONP, et ce dernier implemente déjà le callback !

    // settings par defaut
    var settings = options || {
      method: "GET",
      // protocol : "JSONP",
      protocol: "XHR",
      timeOut: 0,
      format: null,
      wrap: true,
      nocache: true,
      output: "json",
      callback: null,
      callbackSuffix: null
    };

    // on determine l'environnement d'execution : browser ou non ?
    // et on stoppe pour nodeJS... sur un protocole JSONP !
    if (typeof window === "undefined" && options.protocol === "JSONP") {
      console.log("Value (s) for parameter (s) 'protocol=JSONP (instead use XHR)' not supported to NodeJS");
      return;
    }
    if (options.protocol === "XHR" || options.format === "json") {
      settings.wrap = false;
    } else if (options.protocol === "JSONP" && options.format === "xml") {
      settings.wrap = true;
    }
    settings.callback = null; // FIXME non géré !?
    settings.output = settings.wrap ? "json" : null;

    // on encapsule les reponses dans un objet JSON
    if (settings.wrap) {
      var params = {};
      params.output = settings.output;
      params.callback = settings.callback;
      delete params.callback; // FIXME non géré !?
      settings.url = _Utils_Helper__WEBPACK_IMPORTED_MODULE_0__["default"].normalyzeUrl(options.url, params);
    }

    // choix de l"implementation :
    // XHR ou JSONP
    switch (settings.protocol) {
      case "XHR":
        // on normalise l'url (gestion du cache)
        if (options.method === "GET" && options.nocache) {
          settings.url = _Utils_Helper__WEBPACK_IMPORTED_MODULE_0__["default"].normalyzeUrl(settings.url, {
            t: new Date().getTime()
          });
        }
        // appel du service en XHR
        _XHR__WEBPACK_IMPORTED_MODULE_1__["default"].call(settings);
        break;
      case "JSONP":
        // on normalise l'url si les params. sont renseignés dans la string|object "data"
        if (settings.data) {
          settings.url = _Utils_Helper__WEBPACK_IMPORTED_MODULE_0__["default"].normalyzeUrl(settings.url, settings.data);
        }

        // appel du service en JSONP
        _JSONP__WEBPACK_IMPORTED_MODULE_2__["default"].call(settings);
        break;
      default:
        throw new Error("protocol not supported (XHR|JSONP) !");
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Protocol);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* global Promise, require, XDomainRequest */




// import __request from "request";
// import __xmldom from "xmldom";

/**
 * Ajax Request (use of Promises)
 *
 * @module XHR
 * @alias Gp.Protocols.XHR
 * @see dependance 'es6-promise'
 */

// cf. https://xhr.spec.whatwg.org/
// cf. https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

var XHR = {
  /**
   * Interface unique d'envoi d'une requête.
   *
   * @method call
   * @static
   * @param {Object} settings - options generales
   * @param {String} settings.url    - url du service
   * @param {String} settings.method - GET, POST, PUT, DELETE
   * @param {String} settings.format - format de la reponse du service : json, xml ou null (brute)
   * @param {String} settings.data   - content (post) ou param (get)
   * @param {String} settings.proxy  - proxy url
   * @param {Object|String} settings.headers - (post) ex. referer
   * @param {Object|String} settings.content - (post) ex. 'application/json'
   * @param {String} settings.timeOut - timeout = 0 par defaut
   * @param {String} settings.scope - this
   * @param {Function} settings.onResponse - callback
   * @param {Function} settings.onFailure  - callback
   */
  call: function call(settings) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("XHR");
    logger.trace("[XHR::call()]");

    // FIXME
    // To polyfill the global environment
    es6_promise__WEBPACK_IMPORTED_MODULE_2___default.a.polyfill();

    // test sur les settings obligatoires
    if (!settings.url) {
      throw new Error("missing parameter : url is not defined !");
    }
    if (!settings.method) {
      throw new Error("missing parameter : method is not defined !");
    }
    if (!settings.format) {
      settings.format = "text"; // reponse brute !
    }
    var options = {};
    options.url = settings.url;
    options.data = settings.data ? settings.data : null;
    options.method = settings.method;
    options.timeOut = settings.timeOut || 0;
    options.scope = settings.scope || this;
    options.proxy = settings.proxy || null;
    options.content = settings.content || null;
    options.headers = settings.headers || {
      referer: "http://localhost"
    };

    // test sur les valeurs de 'settings.method'
    switch (settings.method) {
      case "DELETE":
      case "GET":
        break;
      case "PUT":
      case "POST":
        // on force sur ces params spécifiques au mode POST
        options.content = settings.content ? settings.content : "application/x-www-form-urlencoded"; // FIXME en attente des services : bascule en "application/xml" ou "application/json"
        options.headers = settings.headers ? settings.headers : {
          referer: "http://localhost"
        }; // FIXME parametrable...
        break;
      case "HEAD":
      case "OPTIONS":
        throw new Error("HTTP method not yet supported !");
      default:
        throw new Error("HTTP method unknown !");
    }

    // test sur les valeurs de 'settings.format'
    switch (settings.format) {
      case "text":
        this.__call(options).then(function (response) {
          logger.trace(response);
          settings.onResponse.call(this, response);
        })["catch"](function (error) {
          settings.onFailure.call(this, error);
        });
        break;
      case "json":
        this.__callJSON(options).then(function (response) {
          logger.trace(response);
          settings.onResponse.call(this, response);
        })["catch"](function (error) {
          settings.onFailure.call(this, error);
        });
        break;
      case "xml":
        this.__callXML(options).then(function (response) {
          logger.trace(response);
          settings.onResponse.call(this, response);
        })["catch"](function (error) {
          settings.onFailure.call(this, error);
        });
        break;
      default:
        throw new Error("This output Format is not yet supported !");
    }
  },
  /**
   * Requete
   *
   * @method __call
   * @private
   * @param  {Object} options - options
   * @return {Object} promise
   */
  __call: function __call(options) {
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("XHR");
    logger.trace("[XHR::__call()]");
    var promise = new Promise(function (resolve, reject) {
      // traitement du corps de la requête
      var corps = options.method === "POST" || options.method === "PUT" ? 1 : 0;

      // seulement si options.data n'est pas vide (peut être un objet ou une chaine de caractères)
      if (options.data && (_typeof(options.data) === "object" && Object.keys(options.data).length || typeof options.data === "string" && options.data.length) && !corps) {
        options.url = _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["default"].normalyzeUrl(options.url, options.data);
      }
      logger.trace("URL = ", options.url);
      var hXHR = null;

      // test on env. nodejs or browser
      if (typeof window === "undefined") {
        var nodefetch = __webpack_require__(14);
        var opts = {
          headers: {
            Referer: "https://localhost"
          }
        };
        if (options.data && typeof options.data === "string" && corps) {
          opts = {
            method: options.method,
            body: options.data,
            headers: {
              "Content-Type": options.content,
              Referer: "https://localhost"
            }
          };
        }
        return nodefetch(options.url, opts).then(function (response) {
          if (response.ok) {
            // res.status >= 200 && res.status < 300
            resolve(response.text());
          } else {
            var message = "Errors Occured on Http Request (status : '" + response.statusText + "' | url : '" + response.url + "')";
            var status = response.status;
            reject({
              message: message,
              status: status
            });
          }
        })["catch"](function (e) {
          reject({
            message: e,
            status: -1
          });
        });
      } else {
        if (window.XMLHttpRequest) {
          logger.trace("XMLHttpRequest");
          hXHR = new XMLHttpRequest();
          hXHR.open(options.method, options.url, true); // async
          hXHR.overrideMimeType = options.content;

          // gestion du timeout
          var onTimeOutTrigger = null;
          if (options.timeOut > 0) {
            // FIXME le timeout interne ne me permet pas de declencher le bon message...
            // hXHR.timeout = options.timeOut;
            logger.trace("XHR - TimeOut actif !");
            /**
             * Description
             *
             * @method onTimeOutTrigger
             * @private
             */
            onTimeOutTrigger = window.setTimeout(function () {
              var message = "TimeOut Occured on Http Request with XMLHttpRequest !";
              reject({
                message: message,
                status: -1
              });
            }, options.timeOut);
          }
          if (corps) {
            // headers, data, content of data
            // cf. https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html#dom-xmlhttprequest-setrequestheader
            logger.trace("data = ", options.data);
            hXHR.setRequestHeader("Content-type", options.content);
            // FIXME refused to set unsafe header content-length javascript
            // hXHR.setRequestHeader ("Content-length", options.data.length);
            // hXHR.setRequestHeader ("Referer", options.headers.referer);
          }

          /**
           * On Error
           * FIXME ne se declenche pas !?
           *
           * @param {Object} e - Event
           * @method onerror
           * @private
           */
          hXHR.onerror = function (e) {
            console.log(e);
            reject(new Error("Errors Occured on Http Request with XMLHttpRequest !"));
          };

          /**
           * On Timeout
           * FIXME ne se declenche pas !?
           *
           * @param {Object} e - Event
           * @method ontimeout
           * @private
           */
          hXHR.ontimeout = function (e) {
            console.log(e);
            reject(new Error("TimeOut Occured on Http Request with XMLHttpRequest !"));
          };

          /**
           * Description
           *
           * @method onreadystatechange
           * @private
           */
          hXHR.onreadystatechange = function (e) {
            if (hXHR.readyState === 4) {
              // DONE
              if (hXHR.status === 200) {
                window.clearTimeout(onTimeOutTrigger);
                resolve(hXHR.response);
              } else {
                var message = "Errors Occured on Http Request (status : '" + e.target.statusText + "' | url : '" + e.target.responseURL + "' | response : '" + e.target.response + "')";
                var status = e.target.status;
                reject({
                  message: message,
                  status: status
                });
              }
            }
          };

          // gestion du content data
          var data4xhr = options.data && corps ? options.data : null;
          hXHR.send(data4xhr);
        } else if (window.XDomainRequest) {
          // worked in Internet Explorer 8–10 only !
          logger.trace("XDomainRequest");
          hXHR = new XDomainRequest();
          hXHR.open(options.method, options.url);
          hXHR.overrideMimeType = options.content;
          if (options.timeOut > 0) {
            hXHR.timeout = options.timeout;
            logger.trace("XHR - TimeOut actif !");
          }
          if (corps) {
            // headers, data, content of data
            // cf. https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html#dom-xmlhttprequest-setrequestheader
            hXHR.setRequestHeader("Content-type", options.content);
            // FIXME refused to set unsafe header content-length javascript
            // hXHR.setRequestHeader ("Content-length", options.data.length);
            // hXHR.setRequestHeader ("Referer", options.headers.referer);
          }

          /**
           * Description
           *
           * @method onerror
           * @private
           */
          hXHR.onerror = function () {
            reject(new Error("Errors Occured on Http Request with XMLHttpRequest !"));
          };

          /**
           * Description
           *
           * @method ontimeout
           * @private
           */
          hXHR.ontimeout = function () {
            reject(new Error("TimeOut Occured on Http Request with XMLHttpRequest !"));
          };

          /**
           * On Load
           *
           * @method onload
           * @private
           */
          hXHR.onload = function (e) {
            if (hXHR.status === 200) {
              resolve(hXHR.responseText);
            } else {
              var message = "Errors Occured on Http Request (status : '" + e.target.statusText + "' | url : '" + e.target.responseURL + "')";
              var status = e.target.status;
              reject({
                message: message,
                status: status
              });
            }
          };
          var data4xdr = options.data && corps ? options.data : null;
          hXHR.send(data4xdr);
        } else {
          throw new Error("CORS not supported");
        }
      }
    });
    return promise;
  },
  /**
   * Requete avec parser JSON
   *
   * @method __callJSON
   * @private
   * @param  {Object} options - options
   * @return {Object} promise
   */
  __callJSON: function __callJSON(options) {
    return this.__call(options).then(JSON.parse)["catch"](function (error) {
      console.log("_callJSON failed on : ", options.url, error);
      // FIXME pas d'exception, laissons le fil se derouler...
      // throw error;
    });
  },
  /**
   * Requete avec parser XML
   *
   * @method __callXML
   * @private
   * @param  {Object} options - options
   * @return {Object} promise
   */
  __callXML: function __callXML(options) {
    return this.__call(options).then(function (response) {
      var xmlDoc;

      // test on env. nodejs or browser
      if (typeof window === "undefined") {
        var DOMParser = __webpack_require__(15).DOMParser; // __xmldom.DOMParser
        xmlDoc = new DOMParser().parseFromString(response, "text/xml");
      } else {
        if (window.DOMParser) {
          var parser = new window.DOMParser();
          xmlDoc = parser.parseFromString(response, "text/xml");
        } else {
          // IE
          xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async = false;
          xmlDoc.loadXML(response);
        }
      }
      return xmlDoc;
    })["catch"](function (error) {
      console.log("__callXML failed on : ", options.url, error);
      // FIXME pas d'exception, laissons le fil se derouler...
      // throw error;
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (XHR);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12), __webpack_require__(13)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var conventions = __webpack_require__(16);
exports.assign = conventions.assign;
exports.hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
exports.isHTMLMimeType = conventions.isHTMLMimeType;
exports.isValidMimeType = conventions.isValidMimeType;
exports.MIME_TYPE = conventions.MIME_TYPE;
exports.NAMESPACE = conventions.NAMESPACE;

var errors = __webpack_require__(17);
exports.DOMException = errors.DOMException;
exports.DOMExceptionName = errors.DOMExceptionName;
exports.ExceptionCode = errors.ExceptionCode;
exports.ParseError = errors.ParseError;

var dom = __webpack_require__(18);
exports.Attr = dom.Attr;
exports.CDATASection = dom.CDATASection;
exports.CharacterData = dom.CharacterData;
exports.Comment = dom.Comment;
exports.Document = dom.Document;
exports.DocumentFragment = dom.DocumentFragment;
exports.DocumentType = dom.DocumentType;
exports.DOMImplementation = dom.DOMImplementation;
exports.Element = dom.Element;
exports.Entity = dom.Entity;
exports.EntityReference = dom.EntityReference;
exports.LiveNodeList = dom.LiveNodeList;
exports.NamedNodeMap = dom.NamedNodeMap;
exports.Node = dom.Node;
exports.NodeList = dom.NodeList;
exports.Notation = dom.Notation;
exports.ProcessingInstruction = dom.ProcessingInstruction;
exports.Text = dom.Text;
exports.XMLSerializer = dom.XMLSerializer;

var domParser = __webpack_require__(20);
exports.DOMParser = domParser.DOMParser;
exports.onErrorStopParsing = domParser.onErrorStopParsing;
exports.onWarningStopParsing = domParser.onWarningStopParsing;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
 *
 * Works with anything that has a `length` property and index access properties,
 * including NodeList.
 *
 * @param {T[] | { length: number; [number]: T }} list
 * @param {function (item: T, index: number, list:T[]):boolean} predicate
 * @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac
 * Allows injecting a custom implementation in tests (`Array.prototype` by default).
 * @returns {T | undefined}
 * @template {unknown} T
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
 */
function find(list, predicate, ac) {
	if (ac === undefined) {
		ac = Array.prototype;
	}
	if (list && typeof ac.find === 'function') {
		return ac.find.call(list, predicate);
	}
	for (var i = 0; i < list.length; i++) {
		if (hasOwn(list, i)) {
			var item = list[i];
			if (predicate.call(undefined, item, i, list)) {
				return item;
			}
		}
	}
}

/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * If `Object.getOwnPropertyDescriptors` is available,
 * a new object with all properties of object but without any prototype is created and returned
 * after freezing it.
 *
 * @param {T} object
 * The object to freeze.
 * @param {Pick<ObjectConstructor, 'create' | 'freeze' | 'getOwnPropertyDescriptors'>} [oc=Object]
 * `Object` by default,
 * allows to inject custom object constructor for tests.
 * @returns {Readonly<T>}
 * @template {Object} T
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * @prettierignore
 */
function freeze(object, oc) {
	if (oc === undefined) {
		oc = Object;
	}
	if (oc && typeof oc.getOwnPropertyDescriptors === 'function') {
		object = oc.create(null, oc.getOwnPropertyDescriptors(object));
	}
	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object;
}

/**
 * Implementation for `Object.hasOwn` but ES5 compatible.
 *
 * @param {any} object
 * @param {string | number} key
 * @returns {boolean}
 */
function hasOwn(object, key) {
	return Object.prototype.hasOwnProperty.call(object, key);
}

/**
 * Since xmldom can not rely on `Object.assign`,
 * it uses/provides a simplified version that is sufficient for its needs.
 *
 * @param {Object} target
 * @param {Object | null | undefined} source
 * @returns {Object}
 * The target with the merged/overridden properties.
 * @throws {TypeError}
 * If target is not an object.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
 */
function assign(target, source) {
	if (target === null || typeof target !== 'object') {
		throw new TypeError('target is not an object');
	}
	for (var key in source) {
		if (hasOwn(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
}

/**
 * A number of attributes are boolean attributes.
 * The presence of a boolean attribute on an element represents the `true` value,
 * and the absence of the attribute represents the `false` value.
 *
 * If the attribute is present, its value must either be the empty string, or a value that is
 * an ASCII case-insensitive match for the attribute's canonical name,
 * with no leading or trailing whitespace.
 *
 * Note: The values `"true"` and `"false"` are not allowed on boolean attributes.
 * To represent a `false` value, the attribute has to be omitted altogether.
 *
 * @see https://html.spec.whatwg.org/#boolean-attributes
 * @see https://html.spec.whatwg.org/#attributes-3
 */
var HTML_BOOLEAN_ATTRIBUTES = freeze({
	allowfullscreen: true,
	async: true,
	autofocus: true,
	autoplay: true,
	checked: true,
	controls: true,
	default: true,
	defer: true,
	disabled: true,
	formnovalidate: true,
	hidden: true,
	ismap: true,
	itemscope: true,
	loop: true,
	multiple: true,
	muted: true,
	nomodule: true,
	novalidate: true,
	open: true,
	playsinline: true,
	readonly: true,
	required: true,
	reversed: true,
	selected: true,
});

/**
 * Check if `name` is matching one of the HTML boolean attribute names.
 * This method doesn't check if such attributes are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} name
 * @returns {boolean}
 * @see {@link HTML_BOOLEAN_ATTRIBUTES}
 * @see https://html.spec.whatwg.org/#boolean-attributes
 * @see https://html.spec.whatwg.org/#attributes-3
 */
function isHTMLBooleanAttribute(name) {
	return hasOwn(HTML_BOOLEAN_ATTRIBUTES, name.toLowerCase());
}

/**
 * Void elements only have a start tag; end tags must not be specified for void elements.
 * These elements should be written as self-closing like this: `<area />`.
 * This should not be confused with optional tags that HTML allows to omit the end tag for
 * (like `li`, `tr` and others), which can have content after them,
 * so they can not be written as self-closing.
 * xmldom does not have any logic for optional end tags cases,
 * and will report them as a warning.
 * Content that would go into the unopened element,
 * will instead be added as a sibling text node.
 *
 * @type {Readonly<{
 * 	area: boolean;
 * 	col: boolean;
 * 	img: boolean;
 * 	wbr: boolean;
 * 	link: boolean;
 * 	hr: boolean;
 * 	source: boolean;
 * 	br: boolean;
 * 	input: boolean;
 * 	param: boolean;
 * 	meta: boolean;
 * 	embed: boolean;
 * 	track: boolean;
 * 	base: boolean;
 * }>}
 * @see https://html.spec.whatwg.org/#void-elements
 * @see https://html.spec.whatwg.org/#optional-tags
 */
var HTML_VOID_ELEMENTS = freeze({
	area: true,
	base: true,
	br: true,
	col: true,
	embed: true,
	hr: true,
	img: true,
	input: true,
	link: true,
	meta: true,
	param: true,
	source: true,
	track: true,
	wbr: true,
});

/**
 * Check if `tagName` is matching one of the HTML void element names.
 * This method doesn't check if such tags are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} tagName
 * @returns {boolean}
 * @see {@link HTML_VOID_ELEMENTS}
 * @see https://html.spec.whatwg.org/#void-elements
 */
function isHTMLVoidElement(tagName) {
	return hasOwn(HTML_VOID_ELEMENTS, tagName.toLowerCase());
}

/**
 * Tag names that are raw text elements according to HTML spec.
 * The value denotes whether they are escapable or not.
 *
 * @see {@link isHTMLEscapableRawTextElement}
 * @see {@link isHTMLRawTextElement}
 * @see https://html.spec.whatwg.org/#raw-text-elements
 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
 */
var HTML_RAW_TEXT_ELEMENTS = freeze({
	script: false,
	style: false,
	textarea: true,
	title: true,
});

/**
 * Check if `tagName` is matching one of the HTML raw text element names.
 * This method doesn't check if such tags are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} tagName
 * @returns {boolean}
 * @see {@link isHTMLEscapableRawTextElement}
 * @see {@link HTML_RAW_TEXT_ELEMENTS}
 * @see https://html.spec.whatwg.org/#raw-text-elements
 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
 */
function isHTMLRawTextElement(tagName) {
	var key = tagName.toLowerCase();
	return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && !HTML_RAW_TEXT_ELEMENTS[key];
}
/**
 * Check if `tagName` is matching one of the HTML escapable raw text element names.
 * This method doesn't check if such tags are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} tagName
 * @returns {boolean}
 * @see {@link isHTMLRawTextElement}
 * @see {@link HTML_RAW_TEXT_ELEMENTS}
 * @see https://html.spec.whatwg.org/#raw-text-elements
 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
 */
function isHTMLEscapableRawTextElement(tagName) {
	var key = tagName.toLowerCase();
	return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && HTML_RAW_TEXT_ELEMENTS[key];
}
/**
 * Only returns true if `value` matches MIME_TYPE.HTML, which indicates an HTML document.
 *
 * @param {string} mimeType
 * @returns {mimeType is 'text/html'}
 * @see https://www.iana.org/assignments/media-types/text/html
 * @see https://en.wikipedia.org/wiki/HTML
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
 */
function isHTMLMimeType(mimeType) {
	return mimeType === MIME_TYPE.HTML;
}
/**
 * For both the `text/html` and the `application/xhtml+xml` namespace the spec defines that the
 * HTML namespace is provided as the default.
 *
 * @param {string} mimeType
 * @returns {boolean}
 * @see https://dom.spec.whatwg.org/#dom-document-createelement
 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument
 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
 */
function hasDefaultHTMLNamespace(mimeType) {
	return isHTMLMimeType(mimeType) || mimeType === MIME_TYPE.XML_XHTML_APPLICATION;
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02
 *      MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype
 *      WHATWG HTML Spec
 * @see {@link DOMParser.prototype.parseFromString}
 */
var MIME_TYPE = freeze({
	/**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
	 *      WHATWG HTML Spec
	 */
	HTML: 'text/html',

	/**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType
	 *      registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_APPLICATION: 'application/xml',

	/**
	 * `text/html`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_TEXT: 'text/xml',

	/**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType
	 *      registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */
	XML_XHTML_APPLICATION: 'application/xhtml+xml',

	/**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */
	XML_SVG_IMAGE: 'image/svg+xml',
});
/**
 * @typedef {'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' | 'text/html' | 'text/xml'}
 * MimeType
 */
/**
 * @type {MimeType[]}
 * @private
 * Basically `Object.values`, which is not available in ES5.
 */
var _MIME_TYPES = Object.keys(MIME_TYPE).map(function (key) {
	return MIME_TYPE[key];
});

/**
 * Only returns true if `mimeType` is one of the allowed values for
 * `DOMParser.parseFromString`.
 *
 * @param {string} mimeType
 * @returns {mimeType is 'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' |  'text/html' | 'text/xml'}
 *
 */
function isValidMimeType(mimeType) {
	return _MIME_TYPES.indexOf(mimeType) > -1;
}
/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
	/**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */
	HTML: 'http://www.w3.org/1999/xhtml',

	/**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */
	SVG: 'http://www.w3.org/2000/svg',

	/**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */
	XML: 'http://www.w3.org/XML/1998/namespace',

	/**
	 * The `xmlns:` namespace.
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */
	XMLNS: 'http://www.w3.org/2000/xmlns/',
});

exports.assign = assign;
exports.find = find;
exports.freeze = freeze;
exports.HTML_BOOLEAN_ATTRIBUTES = HTML_BOOLEAN_ATTRIBUTES;
exports.HTML_RAW_TEXT_ELEMENTS = HTML_RAW_TEXT_ELEMENTS;
exports.HTML_VOID_ELEMENTS = HTML_VOID_ELEMENTS;
exports.hasDefaultHTMLNamespace = hasDefaultHTMLNamespace;
exports.hasOwn = hasOwn;
exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
exports.isHTMLRawTextElement = isHTMLRawTextElement;
exports.isHTMLEscapableRawTextElement = isHTMLEscapableRawTextElement;
exports.isHTMLMimeType = isHTMLMimeType;
exports.isHTMLVoidElement = isHTMLVoidElement;
exports.isValidMimeType = isValidMimeType;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var conventions = __webpack_require__(16);

function extendError(constructor, writableName) {
	constructor.prototype = Object.create(Error.prototype, {
		constructor: { value: constructor },
		name: { value: constructor.name, enumerable: true, writable: writableName },
	});
}

var DOMExceptionName = conventions.freeze({
	/**
	 * the default value as defined by the spec
	 */
	Error: 'Error',
	/**
	 * @deprecated
	 * Use RangeError instead.
	 */
	IndexSizeError: 'IndexSizeError',
	/**
	 * @deprecated
	 * Just to match the related static code, not part of the spec.
	 */
	DomstringSizeError: 'DomstringSizeError',
	HierarchyRequestError: 'HierarchyRequestError',
	WrongDocumentError: 'WrongDocumentError',
	InvalidCharacterError: 'InvalidCharacterError',
	/**
	 * @deprecated
	 * Just to match the related static code, not part of the spec.
	 */
	NoDataAllowedError: 'NoDataAllowedError',
	NoModificationAllowedError: 'NoModificationAllowedError',
	NotFoundError: 'NotFoundError',
	NotSupportedError: 'NotSupportedError',
	InUseAttributeError: 'InUseAttributeError',
	InvalidStateError: 'InvalidStateError',
	SyntaxError: 'SyntaxError',
	InvalidModificationError: 'InvalidModificationError',
	NamespaceError: 'NamespaceError',
	/**
	 * @deprecated
	 * Use TypeError for invalid arguments,
	 * "NotSupportedError" DOMException for unsupported operations,
	 * and "NotAllowedError" DOMException for denied requests instead.
	 */
	InvalidAccessError: 'InvalidAccessError',
	/**
	 * @deprecated
	 * Just to match the related static code, not part of the spec.
	 */
	ValidationError: 'ValidationError',
	/**
	 * @deprecated
	 * Use TypeError instead.
	 */
	TypeMismatchError: 'TypeMismatchError',
	SecurityError: 'SecurityError',
	NetworkError: 'NetworkError',
	AbortError: 'AbortError',
	/**
	 * @deprecated
	 * Just to match the related static code, not part of the spec.
	 */
	URLMismatchError: 'URLMismatchError',
	QuotaExceededError: 'QuotaExceededError',
	TimeoutError: 'TimeoutError',
	InvalidNodeTypeError: 'InvalidNodeTypeError',
	DataCloneError: 'DataCloneError',
	EncodingError: 'EncodingError',
	NotReadableError: 'NotReadableError',
	UnknownError: 'UnknownError',
	ConstraintError: 'ConstraintError',
	DataError: 'DataError',
	TransactionInactiveError: 'TransactionInactiveError',
	ReadOnlyError: 'ReadOnlyError',
	VersionError: 'VersionError',
	OperationError: 'OperationError',
	NotAllowedError: 'NotAllowedError',
	OptOutError: 'OptOutError',
});
var DOMExceptionNames = Object.keys(DOMExceptionName);

function isValidDomExceptionCode(value) {
	return typeof value === 'number' && value >= 1 && value <= 25;
}
function endsWithError(value) {
	return typeof value === 'string' && value.substring(value.length - DOMExceptionName.Error.length) === DOMExceptionName.Error;
}
/**
 * DOM operations only raise exceptions in "exceptional" circumstances, i.e., when an operation
 * is impossible to perform (either for logical reasons, because data is lost, or because the
 * implementation has become unstable). In general, DOM methods return specific error values in
 * ordinary processing situations, such as out-of-bound errors when using NodeList.
 *
 * Implementations should raise other exceptions under other circumstances. For example,
 * implementations should raise an implementation-dependent exception if a null argument is
 * passed when null was not expected.
 *
 * This implementation supports the following usages:
 * 1. according to the living standard (both arguments are optional):
 * ```
 * new DOMException("message (can be empty)", DOMExceptionNames.HierarchyRequestError)
 * ```
 * 2. according to previous xmldom implementation (only the first argument is required):
 * ```
 * new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "optional message")
 * ```
 * both result in the proper name being set.
 *
 * @class DOMException
 * @param {number | string} messageOrCode
 * The reason why an operation is not acceptable.
 * If it is a number, it is used to determine the `name`, see
 * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-258A00AF ExceptionCode}
 * @param {string | keyof typeof DOMExceptionName | Error} [nameOrMessage]
 * The `name` to use for the error.
 * If `messageOrCode` is a number, this arguments is used as the `message` instead.
 * @augments Error
 * @see https://webidl.spec.whatwg.org/#idl-DOMException
 * @see https://webidl.spec.whatwg.org/#dfn-error-names-table
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-17189187
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(messageOrCode, nameOrMessage) {
	// support old way of passing arguments: first argument is a valid number
	if (isValidDomExceptionCode(messageOrCode)) {
		this.name = DOMExceptionNames[messageOrCode];
		this.message = nameOrMessage || '';
	} else {
		this.message = messageOrCode;
		this.name = endsWithError(nameOrMessage) ? nameOrMessage : DOMExceptionName.Error;
	}
	if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
}
extendError(DOMException, true);
Object.defineProperties(DOMException.prototype, {
	code: {
		enumerable: true,
		get: function () {
			var code = DOMExceptionNames.indexOf(this.name);
			if (isValidDomExceptionCode(code)) return code;
			return 0;
		},
	},
});

var ExceptionCode = {
	INDEX_SIZE_ERR: 1,
	DOMSTRING_SIZE_ERR: 2,
	HIERARCHY_REQUEST_ERR: 3,
	WRONG_DOCUMENT_ERR: 4,
	INVALID_CHARACTER_ERR: 5,
	NO_DATA_ALLOWED_ERR: 6,
	NO_MODIFICATION_ALLOWED_ERR: 7,
	NOT_FOUND_ERR: 8,
	NOT_SUPPORTED_ERR: 9,
	INUSE_ATTRIBUTE_ERR: 10,
	INVALID_STATE_ERR: 11,
	SYNTAX_ERR: 12,
	INVALID_MODIFICATION_ERR: 13,
	NAMESPACE_ERR: 14,
	INVALID_ACCESS_ERR: 15,
	VALIDATION_ERR: 16,
	TYPE_MISMATCH_ERR: 17,
	SECURITY_ERR: 18,
	NETWORK_ERR: 19,
	ABORT_ERR: 20,
	URL_MISMATCH_ERR: 21,
	QUOTA_EXCEEDED_ERR: 22,
	TIMEOUT_ERR: 23,
	INVALID_NODE_TYPE_ERR: 24,
	DATA_CLONE_ERR: 25,
};

var entries = Object.entries(ExceptionCode);
for (var i = 0; i < entries.length; i++) {
	var key = entries[i][0];
	DOMException[key] = entries[i][1];
}

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @class
 * @param {string} message
 * @param {any} [locator]
 */
function ParseError(message, locator) {
	this.message = message;
	this.locator = locator;
	if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
extendError(ParseError);

exports.DOMException = DOMException;
exports.DOMExceptionName = DOMExceptionName;
exports.ExceptionCode = ExceptionCode;
exports.ParseError = ParseError;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var conventions = __webpack_require__(16);
var find = conventions.find;
var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
var hasOwn = conventions.hasOwn;
var isHTMLMimeType = conventions.isHTMLMimeType;
var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
var isHTMLVoidElement = conventions.isHTMLVoidElement;
var MIME_TYPE = conventions.MIME_TYPE;
var NAMESPACE = conventions.NAMESPACE;

/**
 * Private DOM Constructor symbol
 *
 * Internal symbol used for construction of all classes whose constructors should be private.
 * Currently used for checks in `Node`, `Document`, `Element`, `Attr`, `CharacterData`, `Text`, `Comment`,
 * `CDATASection`, `DocumentType`, `Notation`, `Entity`, `EntityReference`, `DocumentFragment`, `ProcessingInstruction`
 * so the constructor can't be used from outside the module.
 */
var PDC = Symbol();

var errors = __webpack_require__(17);
var DOMException = errors.DOMException;
var DOMExceptionName = errors.DOMExceptionName;

var g = __webpack_require__(19);

/**
 * Checks if the given symbol equals the Private DOM Constructor symbol (PDC)
 * and throws an Illegal constructor exception when the symbols don't match.
 * This ensures that the constructor remains private and can't be used outside this module.
 */
function checkSymbol(symbol) {
	if (symbol !== PDC) {
		throw new TypeError('Illegal constructor');
	}
}

/**
 * A prerequisite for `[].filter`, to drop elements that are empty.
 *
 * @param {string} input
 * The string to be checked.
 * @returns {boolean}
 * Returns `true` if the input string is not empty, `false` otherwise.
 */
function notEmptyString(input) {
	return input !== '';
}
/**
 * Splits a string on ASCII whitespace characters (U+0009 TAB, U+000A LF, U+000C FF, U+000D CR,
 * U+0020 SPACE).
 * It follows the definition from the infra specification from WHATWG.
 *
 * @param {string} input
 * The string to be split.
 * @returns {string[]}
 * An array of the split strings. The array can be empty if the input string is empty or only
 * contains whitespace characters.
 * @see {@link https://infra.spec.whatwg.org/#split-on-ascii-whitespace}
 * @see {@link https://infra.spec.whatwg.org/#ascii-whitespace}
 */
function splitOnASCIIWhitespace(input) {
	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * The current record object to which the element will be added as a key.
 * The object's keys are string types and values are either boolean or undefined.
 * @param {string} element
 * The string to be added as a key to the current record.
 * @returns {Record<string, boolean | undefined>}
 * The updated record object after the addition of the new element.
 */
function orderedSetReducer(current, element) {
	if (!hasOwn(current, element)) {
		current[element] = true;
	}
	return current;
}

/**
 * Converts a string into an ordered set by splitting the input on ASCII whitespace and
 * ensuring uniqueness of elements.
 * This follows the definition of an ordered set from the infra specification by WHATWG.
 *
 * @param {string} input
 * The input string to be transformed into an ordered set.
 * @returns {string[]}
 * An array of unique strings obtained from the input, preserving the original order.
 * The array can be empty if the input string is empty or only contains whitespace characters.
 * @see {@link https://infra.spec.whatwg.org/#ordered-set}
 */
function toOrderedSet(input) {
	if (!input) return [];
	var list = splitOnASCIIWhitespace(input);
	return Object.keys(list.reduce(orderedSetReducer, {}));
}

/**
 * Uses `list.indexOf` to implement a function that behaves like `Array.prototype.includes`.
 * This function is used in environments where `Array.prototype.includes` may not be available.
 *
 * @param {any[]} list
 * The array in which to search for the element.
 * @returns {function(any): boolean}
 * A function that accepts an element and returns a boolean indicating whether the element is
 * included in the provided list.
 */
function arrayIncludes(list) {
	return function (element) {
		return list && list.indexOf(element) !== -1;
	};
}

/**
 * Validates a qualified name based on the criteria provided in the DOM specification by
 * WHATWG.
 *
 * @param {string} qualifiedName
 * The qualified name to be validated.
 * @throws {DOMException}
 * With code {@link DOMException.INVALID_CHARACTER_ERR} if the qualified name contains an
 * invalid character.
 * @see {@link https://dom.spec.whatwg.org/#validate}
 */
function validateQualifiedName(qualifiedName) {
	if (!g.QName_exact.test(qualifiedName)) {
		throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in qualified name "' + qualifiedName + '"');
	}
}

/**
 * Validates a qualified name and the namespace associated with it,
 * based on the criteria provided in the DOM specification by WHATWG.
 *
 * @param {string | null} namespace
 * The namespace to be validated. It can be a string or null.
 * @param {string} qualifiedName
 * The qualified name to be validated.
 * @returns {[namespace: string | null, prefix: string | null, localName: string]}
 * Returns a tuple with the namespace,
 * prefix and local name of the qualified name.
 * @throws {DOMException}
 * Throws a DOMException if the qualified name or the namespace is not valid.
 * @see {@link https://dom.spec.whatwg.org/#validate-and-extract}
 */
function validateAndExtract(namespace, qualifiedName) {
	validateQualifiedName(qualifiedName);
	namespace = namespace || null;
	/**
	 * @type {string | null}
	 */
	var prefix = null;
	var localName = qualifiedName;
	if (qualifiedName.indexOf(':') >= 0) {
		var splitResult = qualifiedName.split(':');
		prefix = splitResult[0];
		localName = splitResult[1];
	}
	if (prefix !== null && namespace === null) {
		throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is non-null and namespace is null');
	}
	if (prefix === 'xml' && namespace !== conventions.NAMESPACE.XML) {
		throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is "xml" and namespace is not the XML namespace');
	}
	if ((prefix === 'xmlns' || qualifiedName === 'xmlns') && namespace !== conventions.NAMESPACE.XMLNS) {
		throw new DOMException(
			DOMException.NAMESPACE_ERR,
			'either qualifiedName or prefix is "xmlns" and namespace is not the XMLNS namespace'
		);
	}
	if (namespace === conventions.NAMESPACE.XMLNS && prefix !== 'xmlns' && qualifiedName !== 'xmlns') {
		throw new DOMException(
			DOMException.NAMESPACE_ERR,
			'namespace is the XMLNS namespace and neither qualifiedName nor prefix is "xmlns"'
		);
	}
	return [namespace, prefix, localName];
}

/**
 * Copies properties from one object to another.
 * It only copies the object's own (not inherited) properties.
 *
 * @param {Object} src
 * The source object from which properties are copied.
 * @param {Object} dest
 * The destination object to which properties are copied.
 */
function copy(src, dest) {
	for (var p in src) {
		if (hasOwn(src, p)) {
			dest[p] = src[p];
		}
	}
}

/**
 * Extends a class with the properties and methods of a super class.
 * It uses a form of prototypal inheritance, and establishes the `constructor` property
 * correctly(?).
 *
 * It is not clear to the current maintainers if this implementation is making sense,
 * since it creates an intermediate prototype function,
 * which all properties of `Super` are copied onto using `_copy`.
 *
 * @param {Object} Class
 * The class that is to be extended.
 * @param {Object} Super
 * The super class from which properties and methods are inherited.
 * @private
 */
function _extends(Class, Super) {
	var pt = Class.prototype;
	if (!(pt instanceof Super)) {
		function t() {}
		t.prototype = Super.prototype;
		t = new t();
		copy(pt, t);
		Class.prototype = pt = t;
	}
	if (pt.constructor != Class) {
		if (typeof Class != 'function') {
			console.error('unknown Class:' + Class);
		}
		pt.constructor = Class;
	}
}

var NodeType = {};
var ELEMENT_NODE = (NodeType.ELEMENT_NODE = 1);
var ATTRIBUTE_NODE = (NodeType.ATTRIBUTE_NODE = 2);
var TEXT_NODE = (NodeType.TEXT_NODE = 3);
var CDATA_SECTION_NODE = (NodeType.CDATA_SECTION_NODE = 4);
var ENTITY_REFERENCE_NODE = (NodeType.ENTITY_REFERENCE_NODE = 5);
var ENTITY_NODE = (NodeType.ENTITY_NODE = 6);
var PROCESSING_INSTRUCTION_NODE = (NodeType.PROCESSING_INSTRUCTION_NODE = 7);
var COMMENT_NODE = (NodeType.COMMENT_NODE = 8);
var DOCUMENT_NODE = (NodeType.DOCUMENT_NODE = 9);
var DOCUMENT_TYPE_NODE = (NodeType.DOCUMENT_TYPE_NODE = 10);
var DOCUMENT_FRAGMENT_NODE = (NodeType.DOCUMENT_FRAGMENT_NODE = 11);
var NOTATION_NODE = (NodeType.NOTATION_NODE = 12);

var DocumentPosition = conventions.freeze({
	DOCUMENT_POSITION_DISCONNECTED: 1,
	DOCUMENT_POSITION_PRECEDING: 2,
	DOCUMENT_POSITION_FOLLOWING: 4,
	DOCUMENT_POSITION_CONTAINS: 8,
	DOCUMENT_POSITION_CONTAINED_BY: 16,
	DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32,
});

//helper functions for compareDocumentPosition
/**
 * Constructs a parent chain for a node.
 *
 * @param {Node} node
 * The start node from which the parent chain will be constructed.
 * @returns {Node[]}
 * The array of nodes representing the parent chain from the root to the specified node.
 */
function parentChain(node) {
	var chain = [];
	while (node.parentNode || node.ownerElement) {
		node = node.parentNode || node.ownerElement;
		chain.unshift(node);
	}
	return chain;
}

/**
 * Finds the common ancestor in two parent chains.
 *
 * @param {Node[]} a
 * The first parent chain.
 * @param {Node[]} b
 * The second parent chain.
 * @returns {Node}
 * The common ancestor node if it exists. If there is no common ancestor, the function will
 * return `null`.
 */
function commonAncestor(a, b) {
	if (b.length < a.length) return commonAncestor(b, a);
	var c = null;
	for (var n in a) {
		if (a[n] !== b[n]) return c;
		c = a[n];
	}
	return c;
}

/**
 * Assigns a unique identifier to a document to ensure consistency while comparing unrelated
 * nodes.
 *
 * @param {Document} doc
 * The document to which a unique identifier is to be assigned.
 * @returns {string}
 * The unique identifier of the document. If the document already had a unique identifier, the
 * function will return the existing one.
 */
function docGUID(doc) {
	if (!doc.guid) doc.guid = Math.random();
	return doc.guid;
}
//-- end of helper functions

/**
 * The NodeList interface provides the abstraction of an ordered collection of nodes,
 * without defining or constraining how this collection is implemented.
 * NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 * You can also access the items of the NodeList with a `for...of` loop.
 *
 * @class NodeList
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * @constructs NodeList
 */
function NodeList() {}
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1
	 * inclusive.
	 *
	 * @type {number}
	 */
	length: 0,
	/**
	 * Returns the item at `index`. If index is greater than or equal to the number of nodes in
	 * the list, this returns null.
	 *
	 * @param index
	 * Unsigned long Index into the collection.
	 * @returns {Node | null}
	 * The node at position `index` in the NodeList,
	 * or null if that is not a valid index.
	 */
	item: function (index) {
		return index >= 0 && index < this.length ? this[index] : null;
	},
	/**
	 * Returns a string representation of the NodeList.
	 *
	 * @param {unknown} nodeFilter
	 * __A filter function? Not implemented according to the spec?__.
	 * @returns {string}
	 * A string representation of the NodeList.
	 */
	toString: function (nodeFilter) {
		for (var buf = [], i = 0; i < this.length; i++) {
			serializeToString(this[i], buf, nodeFilter);
		}
		return buf.join('');
	},
	/**
	 * Filters the NodeList based on a predicate.
	 *
	 * @param {function(Node): boolean} predicate
	 * - A predicate function to filter the NodeList.
	 * @returns {Node[]}
	 * An array of nodes that satisfy the predicate.
	 * @private
	 */
	filter: function (predicate) {
		return Array.prototype.filter.call(this, predicate);
	},
	/**
	 * Returns the first index at which a given node can be found in the NodeList, or -1 if it is
	 * not present.
	 *
	 * @param {Node} item
	 * - The Node item to locate in the NodeList.
	 * @returns {number}
	 * The first index of the node in the NodeList; -1 if not found.
	 * @private
	 */
	indexOf: function (item) {
		return Array.prototype.indexOf.call(this, item);
	},
};
NodeList.prototype[Symbol.iterator] = function () {
	var me = this;
	var index = 0;

	return {
		next: function () {
			if (index < me.length) {
				return {
					value: me[index++],
					done: false,
				};
			} else {
				return {
					done: true,
				};
			}
		},
		return: function () {
			return {
				done: true,
			};
		},
	};
};

/**
 * Represents a live collection of nodes that is automatically updated when its associated
 * document changes.
 *
 * @class LiveNodeList
 * @param {Node} node
 * The associated node.
 * @param {function} refresh
 * The function to refresh the live node list.
 * @augments NodeList
 * @constructs LiveNodeList
 */
function LiveNodeList(node, refresh) {
	this._node = node;
	this._refresh = refresh;
	_updateLiveList(this);
}
/**
 * Updates the live node list.
 *
 * @param {LiveNodeList} list
 * The live node list to update.
 * @private
 */
function _updateLiveList(list) {
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if (list._inc !== inc) {
		var ls = list._refresh(list._node);
		__set__(list, 'length', ls.length);
		if (!list.$$length || ls.length < list.$$length) {
			for (var i = ls.length; i in list; i++) {
				if (hasOwn(list, i)) {
					delete list[i];
				}
			}
		}
		copy(ls, list);
		list._inc = inc;
	}
}
/**
 * Returns the node at position `index` in the LiveNodeList, or null if that is not a valid
 * index.
 *
 * @param {number} i
 * Index into the collection.
 * @returns {Node | null}
 * The node at position `index` in the LiveNodeList, or null if that is not a valid index.
 */
LiveNodeList.prototype.item = function (i) {
	_updateLiveList(this);
	return this[i] || null;
};

_extends(LiveNodeList, NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes
 * that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal
 * index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities
 *
 * This implementation only supports property indices, but does not support named properties,
 * as specified in the living standard.
 *
 * @class NamedNodeMap
 * @see https://dom.spec.whatwg.org/#interface-namednodemap
 * @see https://webidl.spec.whatwg.org/#dfn-supported-property-names
 * @constructs NamedNodeMap
 */
function NamedNodeMap() {}
/**
 * Returns the index of a node within the list.
 *
 * @param {Array} list
 * The list of nodes.
 * @param {Node} node
 * The node to find.
 * @returns {number}
 * The index of the node within the list, or -1 if not found.
 * @private
 */
function _findNodeIndex(list, node) {
	var i = 0;
	while (i < list.length) {
		if (list[i] === node) {
			return i;
		}
		i++;
	}
}
/**
 * Adds a new attribute to the list and updates the owner element of the attribute.
 *
 * @param {Element} el
 * The element which will become the owner of the new attribute.
 * @param {NamedNodeMap} list
 * The list to which the new attribute will be added.
 * @param {Attr} newAttr
 * The new attribute to be added.
 * @param {Attr} oldAttr
 * The old attribute to be replaced, or null if no attribute is to be replaced.
 * @returns {void}
 * @private
 */
function _addNamedNode(el, list, newAttr, oldAttr) {
	if (oldAttr) {
		list[_findNodeIndex(list, oldAttr)] = newAttr;
	} else {
		list[list.length] = newAttr;
		list.length++;
	}
	if (el) {
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if (doc) {
			oldAttr && _onRemoveAttribute(doc, el, oldAttr);
			_onAddAttribute(doc, el, newAttr);
		}
	}
}
/**
 * Removes an attribute from the list and updates the owner element of the attribute.
 *
 * @param {Element} el
 * The element which is the current owner of the attribute.
 * @param {NamedNodeMap} list
 * The list from which the attribute will be removed.
 * @param {Attr} attr
 * The attribute to be removed.
 * @returns {void}
 * @private
 */
function _removeNamedNode(el, list, attr) {
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list, attr);
	if (i >= 0) {
		var lastIndex = list.length - 1;
		while (i <= lastIndex) {
			list[i] = list[++i];
		}
		list.length = lastIndex;
		if (el) {
			var doc = el.ownerDocument;
			if (doc) {
				_onRemoveAttribute(doc, el, attr);
			}
			attr.ownerElement = null;
		}
	}
}
NamedNodeMap.prototype = {
	length: 0,
	item: NodeList.prototype.item,

	/**
	 * Get an attribute by name. Note: Name is in lower case in case of HTML namespace and
	 * document.
	 *
	 * @param {string} localName
	 * The local name of the attribute.
	 * @returns {Attr | null}
	 * The attribute with the given local name, or null if no such attribute exists.
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name
	 */
	getNamedItem: function (localName) {
		if (this._ownerElement && this._ownerElement._isInHTMLDocumentAndNamespace()) {
			localName = localName.toLowerCase();
		}
		var i = 0;
		while (i < this.length) {
			var attr = this[i];
			if (attr.nodeName === localName) {
				return attr;
			}
			i++;
		}
		return null;
	},

	/**
	 * Set an attribute.
	 *
	 * @param {Attr} attr
	 * The attribute to set.
	 * @returns {Attr | null}
	 * The old attribute with the same local name and namespace URI as the new one, or null if no
	 * such attribute exists.
	 * @throws {DOMException}
	 * With code:
	 * - {@link INUSE_ATTRIBUTE_ERR} - If the attribute is already an attribute of another
	 * element.
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
	 */
	setNamedItem: function (attr) {
		var el = attr.ownerElement;
		if (el && el !== this._ownerElement) {
			throw new DOMException(DOMException.INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
		if (oldAttr === attr) {
			return attr;
		}
		_addNamedNode(this._ownerElement, this, attr, oldAttr);
		return oldAttr;
	},

	/**
	 * Set an attribute, replacing an existing attribute with the same local name and namespace
	 * URI if one exists.
	 *
	 * @param {Attr} attr
	 * The attribute to set.
	 * @returns {Attr | null}
	 * The old attribute with the same local name and namespace URI as the new one, or null if no
	 * such attribute exists.
	 * @throws {DOMException}
	 * Throws a DOMException with the name "InUseAttributeError" if the attribute is already an
	 * attribute of another element.
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
	 */
	setNamedItemNS: function (attr) {
		return this.setNamedItem(attr);
	},

	/**
	 * Removes an attribute specified by the local name.
	 *
	 * @param {string} localName
	 * The local name of the attribute to be removed.
	 * @returns {Attr}
	 * The attribute node that was removed.
	 * @throws {DOMException}
	 * With code:
	 * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given name is found.
	 * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditem
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name
	 */
	removeNamedItem: function (localName) {
		var attr = this.getNamedItem(localName);
		if (!attr) {
			throw new DOMException(DOMException.NOT_FOUND_ERR, localName);
		}
		_removeNamedNode(this._ownerElement, this, attr);
		return attr;
	},

	/**
	 * Removes an attribute specified by the namespace and local name.
	 *
	 * @param {string | null} namespaceURI
	 * The namespace URI of the attribute to be removed.
	 * @param {string} localName
	 * The local name of the attribute to be removed.
	 * @returns {Attr}
	 * The attribute node that was removed.
	 * @throws {DOMException}
	 * With code:
	 * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given namespace URI and local
	 * name is found.
	 * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditemns
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace
	 */
	removeNamedItemNS: function (namespaceURI, localName) {
		var attr = this.getNamedItemNS(namespaceURI, localName);
		if (!attr) {
			throw new DOMException(DOMException.NOT_FOUND_ERR, namespaceURI ? namespaceURI + ' : ' + localName : localName);
		}
		_removeNamedNode(this._ownerElement, this, attr);
		return attr;
	},

	/**
	 * Get an attribute by namespace and local name.
	 *
	 * @param {string | null} namespaceURI
	 * The namespace URI of the attribute.
	 * @param {string} localName
	 * The local name of the attribute.
	 * @returns {Attr | null}
	 * The attribute with the given namespace URI and local name, or null if no such attribute
	 * exists.
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace
	 */
	getNamedItemNS: function (namespaceURI, localName) {
		if (!namespaceURI) {
			namespaceURI = null;
		}
		var i = 0;
		while (i < this.length) {
			var node = this[i];
			if (node.localName === localName && node.namespaceURI === namespaceURI) {
				return node;
			}
			i++;
		}
		return null;
	},
};
NamedNodeMap.prototype[Symbol.iterator] = function () {
	var me = this;
	var index = 0;

	return {
		next: function () {
			if (index < me.length) {
				return {
					value: me[index++],
					done: false,
				};
			} else {
				return {
					done: true,
				};
			}
		},
		return: function () {
			return {
				done: true,
			};
		},
	};
};

/**
 * The DOMImplementation interface provides a number of methods for performing operations that
 * are independent of any particular instance of the document object model.
 *
 * The DOMImplementation interface represents an object providing methods which are not
 * dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * **The individual methods describe the differences compared to the specs**.
 *
 * @class DOMImplementation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core
 *      (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 * @constructs DOMImplementation
 */
function DOMImplementation() {}

DOMImplementation.prototype = {
	/**
	 * Test if the DOM implementation implements a specific feature and version, as specified in
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#DOMFeatures DOM Features}.
	 *
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given
	 * feature is supported. The different implementations fairly diverged in what kind of
	 * features were reported. The latest version of the spec settled to force this method to
	 * always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated
	 * It is deprecated and modern browsers return true in all cases.
	 * @function DOMImplementation#hasFeature
	 * @param {string} feature
	 * The name of the feature to test.
	 * @param {string} [version]
	 * This is the version number of the feature to test.
	 * @returns {boolean}
	 * Always returns true.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-5CED94D7 DOM Level 3 Core
	 */
	hasFeature: function (feature, version) {
		return true;
	},
	/**
	 * Creates a DOM Document object of the specified type with its document element. Note that
	 * based on the {@link DocumentType}
	 * given to create the document, the implementation may instantiate specialized
	 * {@link Document} objects that support additional features than the "Core", such as "HTML"
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML}.
	 * On the other hand, setting the {@link DocumentType} after the document was created makes
	 * this very unlikely to happen. Alternatively, specialized {@link Document} creation methods,
	 * such as createHTMLDocument
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML},
	 * can be used to obtain specific types of {@link Document} objects.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document`
	 * instance (with it's `type` set to `'xml'`).
	 * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 *
	 * @function DOMImplementation.createDocument
	 * @param {string | null} namespaceURI
	 * The
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-namespaceURI namespace URI}
	 * of the document element to create or null.
	 * @param {string | null} qualifiedName
	 * The
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified name}
	 * of the document element to be created or null.
	 * @param {DocumentType | null} [doctype=null]
	 * The type of document to be created or null. When doctype is not null, its
	 * {@link Node#ownerDocument} attribute is set to the document being created. Default is
	 * `null`
	 * @returns {Document}
	 * A new {@link Document} object with its document element. If the NamespaceURI,
	 * qualifiedName, and doctype are null, the returned {@link Document} is empty with no
	 * document element.
	 * @throws {DOMException}
	 * With code:
	 *
	 * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
	 * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
	 * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed, if the qualifiedName has a
	 * prefix and the namespaceURI is null, or if the qualifiedName is null and the namespaceURI
	 * is different from null, or if the qualifiedName has a prefix that is "xml" and the
	 * namespaceURI is different from "{@link http://www.w3.org/XML/1998/namespace}"
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#Namespaces XML Namespaces},
	 * or if the DOM implementation does not support the "XML" feature but a non-null namespace
	 * URI was provided, since namespaces were defined by XML.
	 * - `WRONG_DOCUMENT_ERR`: Raised if doctype has already been used with a different document
	 * or was created from a different implementation.
	 * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
	 * "XML" and the language exposed through the Document does not support XML Namespaces (such
	 * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
	 * @since DOM Level 2.
	 * @see {@link #createHTMLDocument}
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument DOM Living Standard
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-2-Core-DOM-createDocument DOM
	 *      Level 3 Core
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM
	 *      Level 2 Core (initial)
	 */
	createDocument: function (namespaceURI, qualifiedName, doctype) {
		var contentType = MIME_TYPE.XML_APPLICATION;
		if (namespaceURI === NAMESPACE.HTML) {
			contentType = MIME_TYPE.XML_XHTML_APPLICATION;
		} else if (namespaceURI === NAMESPACE.SVG) {
			contentType = MIME_TYPE.XML_SVG_IMAGE;
		}
		var doc = new Document(PDC, { contentType: contentType });
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype || null;
		if (doctype) {
			doc.appendChild(doctype);
		}
		if (qualifiedName) {
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	/**
	 * Creates an empty DocumentType node. Entity declarations and notations are not made
	 * available. Entity reference expansions and default attribute additions do not occur.
	 *
	 * **This behavior is slightly different from the one in the specs**:
	 * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - `publicId` and `systemId` contain the raw data including any possible quotes,
	 *   so they can always be serialized back to the original value
	 * - `internalSubset` contains the raw string between `[` and `]` if present,
	 *   but is not parsed or validated in any form.
	 *
	 * @function DOMImplementation#createDocumentType
	 * @param {string} qualifiedName
	 * The {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified
	 * name} of the document type to be created.
	 * @param {string} [publicId]
	 * The external subset public identifier.
	 * @param {string} [systemId]
	 * The external subset system identifier.
	 * @param {string} [internalSubset]
	 * the internal subset or an empty string if it is not present
	 * @returns {DocumentType}
	 * A new {@link DocumentType} node with {@link Node#ownerDocument} set to null.
	 * @throws {DOMException}
	 * With code:
	 *
	 * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
	 * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
	 * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed.
	 * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
	 * "XML" and the language exposed through the Document does not support XML Namespaces (such
	 * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
	 * @since DOM Level 2.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType
	 *      MDN
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living
	 *      Standard
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-3-Core-DOM-createDocType DOM
	 *      Level 3 Core
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM
	 *      Level 2 Core
	 * @see https://github.com/xmldom/xmldom/blob/master/CHANGELOG.md#050
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-Core-DocType-internalSubset
	 * @prettierignore
	 */
	createDocumentType: function (qualifiedName, publicId, systemId, internalSubset) {
		validateQualifiedName(qualifiedName);
		var node = new DocumentType(PDC);
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId || '';
		node.systemId = systemId || '';
		node.internalSubset = internalSubset || '';
		node.childNodes = new NodeList();

		return node;
	},
	/**
	 * Returns an HTML document, that might already have a basic DOM structure.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - If the first argument is `false` no initial nodes are added (steps 3-7 in the specs are
	 * omitted)
	 * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 *
	 * @param {string | false} [title]
	 * A string containing the title to give the new HTML document.
	 * @returns {Document}
	 * The HTML document.
	 * @since WHATWG Living Standard.
	 * @see {@link #createDocument}
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
	 * @see https://dom.spec.whatwg.org/#html-document
	 */
	createHTMLDocument: function (title) {
		var doc = new Document(PDC, { contentType: MIME_TYPE.HTML });
		doc.implementation = this;
		doc.childNodes = new NodeList();
		if (title !== false) {
			doc.doctype = this.createDocumentType('html');
			doc.doctype.ownerDocument = doc;
			doc.appendChild(doc.doctype);
			var htmlNode = doc.createElement('html');
			doc.appendChild(htmlNode);
			var headNode = doc.createElement('head');
			htmlNode.appendChild(headNode);
			if (typeof title === 'string') {
				var titleNode = doc.createElement('title');
				titleNode.appendChild(doc.createTextNode(title));
				headNode.appendChild(titleNode);
			}
			htmlNode.appendChild(doc.createElement('body'));
		}
		return doc;
	},
};

/**
 * The DOM Node interface is an abstract base class upon which many other DOM API objects are
 * based, thus letting those object types to be used similarly and often interchangeably. As an
 * abstract class, there is no such thing as a plain Node object. All objects that implement
 * Node functionality are based on one of its subclasses. Most notable are Document, Element,
 * and DocumentFragment.
 *
 * In addition, every kind of DOM node is represented by an interface based on Node. These
 * include Attr, CharacterData (which Text, Comment, CDATASection and ProcessingInstruction are
 * all based on), and DocumentType.
 *
 * In some cases, a particular feature of the base Node interface may not apply to one of its
 * child interfaces; in that case, the inheriting node may return null or throw an exception,
 * depending on circumstances. For example, attempting to add children to a node type that
 * cannot have children will throw an exception.
 *
 * **This behavior is slightly different from the in the specs**:
 * - unimplemented interfaces: `EventTarget`
 *
 * @class
 * @abstract
 * @param {Symbol} symbol
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 * @see https://dom.spec.whatwg.org/#node
 * @prettierignore
 */
function Node(symbol) {
	checkSymbol(symbol);
}

Node.prototype = {
	/**
	 * The first child of this node.
	 *
	 * @type {Node | null}
	 */
	firstChild: null,
	/**
	 * The last child of this node.
	 *
	 * @type {Node | null}
	 */
	lastChild: null,
	/**
	 * The previous sibling of this node.
	 *
	 * @type {Node | null}
	 */
	previousSibling: null,
	/**
	 * The next sibling of this node.
	 *
	 * @type {Node | null}
	 */
	nextSibling: null,
	/**
	 * The parent node of this node.
	 *
	 * @type {Node | null}
	 */
	parentNode: null,
	/**
	 * The parent element of this node.
	 *
	 * @type {Element | null}
	 */
	get parentElement() {
		return this.parentNode && this.parentNode.nodeType === this.ELEMENT_NODE ? this.parentNode : null;
	},
	/**
	 * The child nodes of this node.
	 *
	 * @type {NodeList}
	 */
	childNodes: null,
	/**
	 * The document object associated with this node.
	 *
	 * @type {Document | null}
	 */
	ownerDocument: null,
	/**
	 * The value of this node.
	 *
	 * @type {string | null}
	 */
	nodeValue: null,
	/**
	 * The namespace URI of this node.
	 *
	 * @type {string | null}
	 */
	namespaceURI: null,
	/**
	 * The prefix of the namespace for this node.
	 *
	 * @type {string | null}
	 */
	prefix: null,
	/**
	 * The local part of the qualified name of this node.
	 *
	 * @type {string | null}
	 */
	localName: null,
	/**
	 * The baseURI is currently always `about:blank`,
	 * since that's what happens when you create a document from scratch.
	 *
	 * @type {'about:blank'}
	 */
	baseURI: 'about:blank',
	/**
	 * Is true if this node is part of a document.
	 *
	 * @type {boolean}
	 */
	get isConnected() {
		var rootNode = this.getRootNode();
		return rootNode && rootNode.nodeType === rootNode.DOCUMENT_NODE;
	},
	/**
	 * Checks whether `other` is an inclusive descendant of this node.
	 *
	 * @param {Node | null | undefined} other
	 * The node to check.
	 * @returns {boolean}
	 * True if `other` is an inclusive descendant of this node; false otherwise.
	 * @see https://dom.spec.whatwg.org/#dom-node-contains
	 */
	contains: function (other) {
		if (!other) return false;
		var parent = other;
		do {
			if (this === parent) return true;
			parent = other.parentNode;
		} while (parent);
		return false;
	},
	/**
	 * @typedef GetRootNodeOptions
	 * @property {boolean} [composed=false]
	 */
	/**
	 * Searches for the root node of this node.
	 *
	 * **This behavior is slightly different from the in the specs**:
	 * - ignores `options.composed`, since `ShadowRoot`s are unsupported, always returns root.
	 *
	 * @param {GetRootNodeOptions} [options]
	 * @returns {Node}
	 * Root node.
	 * @see https://dom.spec.whatwg.org/#dom-node-getrootnode
	 * @see https://dom.spec.whatwg.org/#concept-shadow-including-root
	 */
	getRootNode: function (options) {
		var parent = this;
		do {
			if (!parent.parentNode) {
				return parent;
			}
			parent = parent.parentNode;
		} while (parent);
	},
	/**
	 * Checks whether the given node is equal to this node.
	 *
	 * @param {Node} [otherNode]
	 * @see https://dom.spec.whatwg.org/#concept-node-equals
	 */
	isEqualNode: function (otherNode) {
		if (!otherNode) return false;

		if (this.nodeType !== otherNode.nodeType) return false;

		switch (this.nodeType) {
			case this.DOCUMENT_TYPE_NODE:
				if (this.name !== otherNode.name) return false;
				if (this.publicId !== otherNode.publicId) return false;
				if (this.systemId !== otherNode.systemId) return false;
				break;
			case this.ELEMENT_NODE:
				if (this.namespaceURI !== otherNode.namespaceURI) return false;
				if (this.prefix !== otherNode.prefix) return false;
				if (this.localName !== otherNode.localName) return false;
				if (this.attributes.length !== otherNode.attributes.length) return false;
				for (var i = 0; i < this.attributes.length; i++) {
					var attr = this.attributes.item(i);
					if (!attr.isEqualNode(otherNode.getAttributeNodeNS(attr.namespaceURI, attr.localName))) {
						return false;
					}
				}
				break;
			case this.ATTRIBUTE_NODE:
				if (this.namespaceURI !== otherNode.namespaceURI) return false;
				if (this.localName !== otherNode.localName) return false;
				if (this.value !== otherNode.value) return false;

				break;
			case this.PROCESSING_INSTRUCTION_NODE:
				if (this.target !== otherNode.target || this.data !== otherNode.data) {
					return false;
				}
				break;
			case this.TEXT_NODE:
			case this.COMMENT_NODE:
				if (this.data !== otherNode.data) return false;
				break;
		}

		if (this.childNodes.length !== otherNode.childNodes.length) {
			return false;
		}

		for (var i = 0; i < this.childNodes.length; i++) {
			if (!this.childNodes[i].isEqualNode(otherNode.childNodes[i])) {
				return false;
			}
		}

		return true;
	},
	/**
	 * Checks whether or not the given node is this node.
	 *
	 * @param {Node} [otherNode]
	 */
	isSameNode: function (otherNode) {
		return this === otherNode;
	},
	/**
	 * Inserts a node before a reference node as a child of this node.
	 *
	 * @param {Node} newChild
	 * The new child node to be inserted.
	 * @param {Node | null} refChild
	 * The reference node before which newChild will be inserted.
	 * @returns {Node}
	 * The new child node successfully inserted.
	 * @throws {DOMException}
	 * Throws a DOMException if inserting the node would result in a DOM tree that is not
	 * well-formed, or if `child` is provided but is not a child of `parent`.
	 * See {@link _insertBefore} for more details.
	 * @since Modified in DOM L2
	 */
	insertBefore: function (newChild, refChild) {
		return _insertBefore(this, newChild, refChild);
	},
	/**
	 * Replaces an old child node with a new child node within this node.
	 *
	 * @param {Node} newChild
	 * The new node that is to replace the old node.
	 * If it already exists in the DOM, it is removed from its original position.
	 * @param {Node} oldChild
	 * The existing child node to be replaced.
	 * @returns {Node}
	 * Returns the replaced child node.
	 * @throws {DOMException}
	 * Throws a DOMException if replacing the node would result in a DOM tree that is not
	 * well-formed, or if `oldChild` is not a child of `this`.
	 * This can also occur if the pre-replacement validity assertion fails.
	 * See {@link _insertBefore}, {@link Node.removeChild}, and
	 * {@link assertPreReplacementValidityInDocument} for more details.
	 * @see https://dom.spec.whatwg.org/#concept-node-replace
	 */
	replaceChild: function (newChild, oldChild) {
		_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
		if (oldChild) {
			this.removeChild(oldChild);
		}
	},
	/**
	 * Removes an existing child node from this node.
	 *
	 * @param {Node} oldChild
	 * The child node to be removed.
	 * @returns {Node}
	 * Returns the removed child node.
	 * @throws {DOMException}
	 * Throws a DOMException if `oldChild` is not a child of `this`.
	 * See {@link _removeChild} for more details.
	 */
	removeChild: function (oldChild) {
		return _removeChild(this, oldChild);
	},
	/**
	 * Appends a child node to this node.
	 *
	 * @param {Node} newChild
	 * The child node to be appended to this node.
	 * If it already exists in the DOM, it is removed from its original position.
	 * @returns {Node}
	 * Returns the appended child node.
	 * @throws {DOMException}
	 * Throws a DOMException if appending the node would result in a DOM tree that is not
	 * well-formed, or if `newChild` is not a valid Node.
	 * See {@link insertBefore} for more details.
	 */
	appendChild: function (newChild) {
		return this.insertBefore(newChild, null);
	},
	/**
	 * Determines whether this node has any child nodes.
	 *
	 * @returns {boolean}
	 * Returns true if this node has any child nodes, and false otherwise.
	 */
	hasChildNodes: function () {
		return this.firstChild != null;
	},
	/**
	 * Creates a copy of the calling node.
	 *
	 * @param {boolean} deep
	 * If true, the contents of the node are recursively copied.
	 * If false, only the node itself (and its attributes, if it is an element) are copied.
	 * @returns {Node}
	 * Returns the newly created copy of the node.
	 * @throws {DOMException}
	 * May throw a DOMException if operations within {@link Element#setAttributeNode} or
	 * {@link Node#appendChild} (which are potentially invoked in this method) do not meet their
	 * specific constraints.
	 * @see {@link cloneNode}
	 */
	cloneNode: function (deep) {
		return cloneNode(this.ownerDocument || this, this, deep);
	},
	/**
	 * Puts the specified node and all of its subtree into a "normalized" form. In a normalized
	 * subtree, no text nodes in the subtree are empty and there are no adjacent text nodes.
	 *
	 * Specifically, this method merges any adjacent text nodes (i.e., nodes for which `nodeType`
	 * is `TEXT_NODE`) into a single node with the combined data. It also removes any empty text
	 * nodes.
	 *
	 * This method operates recursively, so it also normalizes any and all descendent nodes within
	 * the subtree.
	 *
	 * @throws {DOMException}
	 * May throw a DOMException if operations within removeChild or appendData (which are
	 * potentially invoked in this method) do not meet their specific constraints.
	 * @since Modified in DOM Level 2
	 * @see {@link Node.removeChild}
	 * @see {@link CharacterData.appendData}
	 */
	normalize: function () {
		var child = this.firstChild;
		while (child) {
			var next = child.nextSibling;
			if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
				this.removeChild(next);
				child.appendData(next.data);
			} else {
				child.normalize();
				child = next;
			}
		}
	},
	/**
	 * Checks whether the DOM implementation implements a specific feature and its version.
	 *
	 * @deprecated
	 * Since `DOMImplementation.hasFeature` is deprecated and always returns true.
	 * @param {string} feature
	 * The package name of the feature to test. This is the same name that can be passed to the
	 * method `hasFeature` on `DOMImplementation`.
	 * @param {string} version
	 * This is the version number of the package name to test.
	 * @returns {boolean}
	 * Returns true in all cases in the current implementation.
	 * @since Introduced in DOM Level 2
	 * @see {@link DOMImplementation.hasFeature}
	 */
	isSupported: function (feature, version) {
		return this.ownerDocument.implementation.hasFeature(feature, version);
	},
	/**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * **This behavior is different from the in the specs**:
	 * - no node type specific handling
	 * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
	 *
	 * @param {string | null} namespaceURI
	 * The namespace URI for which to find the associated prefix.
	 * @returns {string | null}
	 * The associated prefix, if found; otherwise, null.
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 * @prettierignore
	 */
	lookupPrefix: function (namespaceURI) {
		var el = this;
		while (el) {
			var map = el._nsMap;
			//console.dir(map)
			if (map) {
				for (var n in map) {
					if (hasOwn(map, n) && map[n] === namespaceURI) {
						return n;
					}
				}
			}
			el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
		}
		return null;
	},
	/**
	 * This function is used to look up the namespace URI associated with the given prefix,
	 * starting from this node.
	 *
	 * **This behavior is different from the in the specs**:
	 * - no node type specific handling
	 * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
	 *
	 * @param {string | null} prefix
	 * The prefix for which to find the associated namespace URI.
	 * @returns {string | null}
	 * The associated namespace URI, if found; otherwise, null.
	 * @since DOM Level 3
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupnamespaceuri
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespaceURI
	 * @prettierignore
	 */
	lookupNamespaceURI: function (prefix) {
		var el = this;
		while (el) {
			var map = el._nsMap;
			//console.dir(map)
			if (map) {
				if (hasOwn(map, prefix)) {
					return map[prefix];
				}
			}
			el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
		}
		return null;
	},
	/**
	 * Determines whether the given namespace URI is the default namespace.
	 *
	 * The function works by looking up the prefix associated with the given namespace URI. If no
	 * prefix is found (i.e., the namespace URI is not registered in the namespace map of this
	 * node or any of its ancestors), it returns `true`, implying the namespace URI is considered
	 * the default.
	 *
	 * **This behavior is different from the in the specs**:
	 * - no node type specific handling
	 * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
	 *
	 * @param {string | null} namespaceURI
	 * The namespace URI to be checked.
	 * @returns {boolean}
	 * Returns true if the given namespace URI is the default namespace, false otherwise.
	 * @since DOM Level 3
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isDefaultNamespace
	 * @see https://dom.spec.whatwg.org/#dom-node-isdefaultnamespace
	 * @prettierignore
	 */
	isDefaultNamespace: function (namespaceURI) {
		var prefix = this.lookupPrefix(namespaceURI);
		return prefix == null;
	},
	/**
	 * Compares the reference node with a node with regard to their position in the document and
	 * according to the document order.
	 *
	 * @param {Node} other
	 * The node to compare the reference node to.
	 * @returns {number}
	 * Returns how the node is positioned relatively to the reference node according to the
	 * bitmask. 0 if reference node and given node are the same.
	 * @since DOM Level 3
	 * @see https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-compare
	 * @see https://dom.spec.whatwg.org/#dom-node-comparedocumentposition
	 */
	compareDocumentPosition: function (other) {
		if (this === other) return 0;
		var node1 = other;
		var node2 = this;
		var attr1 = null;
		var attr2 = null;
		if (node1 instanceof Attr) {
			attr1 = node1;
			node1 = attr1.ownerElement;
		}
		if (node2 instanceof Attr) {
			attr2 = node2;
			node2 = attr2.ownerElement;
			if (attr1 && node1 && node2 === node1) {
				for (var i = 0, attr; (attr = node2.attributes[i]); i++) {
					if (attr === attr1)
						return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
					if (attr === attr2)
						return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
				}
			}
		}
		if (!node1 || !node2 || node2.ownerDocument !== node1.ownerDocument) {
			return (
				DocumentPosition.DOCUMENT_POSITION_DISCONNECTED +
				DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC +
				(docGUID(node2.ownerDocument) > docGUID(node1.ownerDocument)
					? DocumentPosition.DOCUMENT_POSITION_FOLLOWING
					: DocumentPosition.DOCUMENT_POSITION_PRECEDING)
			);
		}
		var chain1 = parentChain(node1);
		var chain2 = parentChain(node2);
		if ((!attr1 && chain2.indexOf(node1) >= 0) || (attr2 && node1 === node2)) {
			return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
		}
		if ((!attr2 && chain1.indexOf(node2) >= 0) || (attr1 && node1 === node2)) {
			return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
		}
		var ca = commonAncestor(chain2, chain1);
		for (var n in ca.childNodes) {
			var child = ca.childNodes[n];
			if (child === node2) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
			if (child === node1) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
			if (chain2.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
			if (chain1.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
		}
		return 0;
	},
};

/**
 * Encodes special XML characters to their corresponding entities.
 *
 * @param {string} c
 * The character to be encoded.
 * @returns {string}
 * The encoded character.
 * @private
 */
function _xmlEncoder(c) {
	return (
		(c == '<' && '&lt;') || (c == '>' && '&gt;') || (c == '&' && '&amp;') || (c == '"' && '&quot;') || '&#' + c.charCodeAt() + ';'
	);
}

copy(NodeType, Node);
copy(NodeType, Node.prototype);
copy(DocumentPosition, Node);
copy(DocumentPosition, Node.prototype);

/**
 * @param callback
 * Return true for continue,false for break.
 * @returns
 * boolean true: break visit;
 */
function _visitNode(node, callback) {
	if (callback(node)) {
		return true;
	}
	if ((node = node.firstChild)) {
		do {
			if (_visitNode(node, callback)) {
				return true;
			}
		} while ((node = node.nextSibling));
	}
}

/**
 * @typedef DocumentOptions
 * @property {string} [contentType=MIME_TYPE.XML_APPLICATION]
 */
/**
 * The Document interface describes the common properties and methods for any kind of document.
 *
 * It should usually be created using `new DOMImplementation().createDocument(...)`
 * or `new DOMImplementation().createHTMLDocument(...)`.
 *
 * The constructor is considered a private API and offers to initially set the `contentType`
 * property via it's options parameter.
 *
 * @class
 * @param {Symbol} symbol
 * @param {DocumentOptions} [options]
 * @augments Node
 * @private
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document
 * @see https://dom.spec.whatwg.org/#interface-document
 */
function Document(symbol, options) {
	checkSymbol(symbol);

	var opt = options || {};
	this.ownerDocument = this;
	/**
	 * The mime type of the document is determined at creation time and can not be modified.
	 *
	 * @type {string}
	 * @see https://dom.spec.whatwg.org/#concept-document-content-type
	 * @see {@link DOMImplementation}
	 * @see {@link MIME_TYPE}
	 * @readonly
	 */
	this.contentType = opt.contentType || MIME_TYPE.XML_APPLICATION;
	/**
	 * @type {'html' | 'xml'}
	 * @see https://dom.spec.whatwg.org/#concept-document-type
	 * @see {@link DOMImplementation}
	 * @readonly
	 */
	this.type = isHTMLMimeType(this.contentType) ? 'html' : 'xml';
}

/**
 * Updates the namespace mapping of an element when a new attribute is added.
 *
 * @param {Document} doc
 * The document that the element belongs to.
 * @param {Element} el
 * The element to which the attribute is being added.
 * @param {Attr} newAttr
 * The new attribute being added.
 * @private
 */
function _onAddAttribute(doc, el, newAttr) {
	doc && doc._inc++;
	var ns = newAttr.namespaceURI;
	if (ns === NAMESPACE.XMLNS) {
		//update namespace
		el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
	}
}

/**
 * Updates the namespace mapping of an element when an attribute is removed.
 *
 * @param {Document} doc
 * The document that the element belongs to.
 * @param {Element} el
 * The element from which the attribute is being removed.
 * @param {Attr} newAttr
 * The attribute being removed.
 * @param {boolean} remove
 * Indicates whether the attribute is to be removed.
 * @private
 */
function _onRemoveAttribute(doc, el, newAttr, remove) {
	doc && doc._inc++;
	var ns = newAttr.namespaceURI;
	if (ns === NAMESPACE.XMLNS) {
		//update namespace
		delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
	}
}

/**
 * Updates `parent.childNodes`, adjusting the indexed items and its `length`.
 * If `newChild` is provided and has no nextSibling, it will be appended.
 * Otherwise, it's assumed that an item has been removed or inserted,
 * and `parent.firstNode` and its `.nextSibling` to re-indexing all child nodes of `parent`.
 *
 * @param {Document} doc
 * The parent document of `el`.
 * @param {Node} parent
 * The parent node whose childNodes list needs to be updated.
 * @param {Node} [newChild]
 * The new child node to be appended. If not provided, the function assumes a node has been
 * removed.
 * @private
 */
function _onUpdateChild(doc, parent, newChild) {
	if (doc && doc._inc) {
		doc._inc++;
		var childNodes = parent.childNodes;
		// assumes nextSibling and previousSibling were already configured upfront
		if (newChild && !newChild.nextSibling) {
			// if an item has been appended, we only need to update the last index and the length
			childNodes[childNodes.length++] = newChild;
		} else {
			// otherwise we need to reindex all items,
			// which can take a while when processing nodes with a lot of children
			var child = parent.firstChild;
			var i = 0;
			while (child) {
				childNodes[i++] = child;
				child = child.nextSibling;
			}
			childNodes.length = i;
			delete childNodes[childNodes.length];
		}
	}
}

/**
 * Removes the connections between `parentNode` and `child`
 * and any existing `child.previousSibling` or `child.nextSibling`.
 *
 * @param {Node} parentNode
 * The parent node from which the child node is to be removed.
 * @param {Node} child
 * The child node to be removed from the parentNode.
 * @returns {Node}
 * Returns the child node that was removed.
 * @throws {DOMException}
 * With code:
 * - {@link DOMException.NOT_FOUND_ERR} If the parentNode is not the parent of the child node.
 * @private
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 */
function _removeChild(parentNode, child) {
	if (parentNode !== child.parentNode) {
		throw new DOMException(DOMException.NOT_FOUND_ERR, "child's parent is not parent");
	}
	var oldPreviousSibling = child.previousSibling;
	var oldNextSibling = child.nextSibling;
	if (oldPreviousSibling) {
		oldPreviousSibling.nextSibling = oldNextSibling;
	} else {
		parentNode.firstChild = oldNextSibling;
	}
	if (oldNextSibling) {
		oldNextSibling.previousSibling = oldPreviousSibling;
	} else {
		parentNode.lastChild = oldPreviousSibling;
	}
	_onUpdateChild(parentNode.ownerDocument, parentNode);
	child.parentNode = null;
	child.previousSibling = null;
	child.nextSibling = null;
	return child;
}

/**
 * Returns `true` if `node` can be a parent for insertion.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function hasValidParentNodeType(node) {
	return (
		node &&
		(node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE)
	);
}

/**
 * Returns `true` if `node` can be inserted according to it's `nodeType`.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function hasInsertableNodeType(node) {
	return (
		node &&
		(node.nodeType === Node.CDATA_SECTION_NODE ||
			node.nodeType === Node.COMMENT_NODE ||
			node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
			node.nodeType === Node.DOCUMENT_TYPE_NODE ||
			node.nodeType === Node.ELEMENT_NODE ||
			node.nodeType === Node.PROCESSING_INSTRUCTION_NODE ||
			node.nodeType === Node.TEXT_NODE)
	);
}

/**
 * Returns true if `node` is a DOCTYPE node.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function isDocTypeNode(node) {
	return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
}

/**
 * Returns true if the node is an element.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function isElementNode(node) {
	return node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Returns true if `node` is a text node.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function isTextNode(node) {
	return node && node.nodeType === Node.TEXT_NODE;
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Document} doc
 * The document node.
 * @param {Node} child
 * The node that would become the nextSibling if the element would be inserted.
 * @returns {boolean}
 * `true` if an element can be inserted before child.
 * @private
 */
function isElementInsertionPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];
	if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Node} doc
 * The document node.
 * @param {Node} child
 * The node that would become the nextSibling if the element would be inserted.
 * @returns {boolean}
 * `true` if an element can be inserted before child.
 * @private
 */
function isElementReplacementPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];

	function hasElementChildThatIsNotChild(node) {
		return isElementNode(node) && node !== child;
	}

	if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Asserts pre-insertion validity of a node into a parent before a child.
 * Throws errors for invalid node combinations that would result in an ill-formed DOM.
 *
 * @param {Node} parent
 * The parent node to insert `node` into.
 * @param {Node} node
 * The node to insert.
 * @param {Node | null} child
 * The node that should become the `nextSibling` of `node`. If null, no sibling is considered.
 * @throws {DOMException}
 * With code:
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `parent` is not a Document,
 * DocumentFragment, or Element node.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a host-including inclusive
 * ancestor of `parent`. (Currently not implemented)
 * - {@link DOMException.NOT_FOUND_ERR} If `child` is non-null and its `parent` is not
 * `parent`.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is not a DocumentFragment,
 * DocumentType, Element, or CharacterData node.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If either `node` is a Text node and `parent` is
 * a document, or if `node` is a doctype and `parent` is not a document.
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidity1to5(parent, node, child) {
	// 1. If `parent` is not a Document, DocumentFragment, or Element node, then throw a "HierarchyRequestError" DOMException.
	if (!hasValidParentNodeType(parent)) {
		throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Unexpected parent node type ' + parent.nodeType);
	}
	// 2. If `node` is a host-including inclusive ancestor of `parent`, then throw a "HierarchyRequestError" DOMException.
	// not implemented!
	// 3. If `child` is non-null and its parent is not `parent`, then throw a "NotFoundError" DOMException.
	if (child && child.parentNode !== parent) {
		throw new DOMException(DOMException.NOT_FOUND_ERR, 'child not in parent');
	}
	if (
		// 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
		!hasInsertableNodeType(node) ||
		// 5. If either `node` is a Text node and `parent` is a document,
		// the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
		// || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
		// or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
		(isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE)
	) {
		throw new DOMException(
			DOMException.HIERARCHY_REQUEST_ERR,
			'Unexpected node type ' + node.nodeType + ' for parent node type ' + parent.nodeType
		);
	}
}

/**
 * Asserts pre-insertion validity of a node into a document before a child.
 * Throws errors for invalid node combinations that would result in an ill-formed DOM.
 *
 * @param {Document} parent
 * The parent node to insert `node` into.
 * @param {Node} node
 * The node to insert.
 * @param {Node | undefined} child
 * The node that should become the `nextSibling` of `node`. If undefined, no sibling is
 * considered.
 * @returns {Node}
 * @throws {DOMException}
 * With code:
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with more than
 * one element child or has a Text node child.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with one
 * element child and either `parent` has an element child, `child` is a doctype, or `child` is
 * non-null and a doctype is following `child`.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is an Element and `parent` has an
 * element child, `child` is a doctype, or `child` is non-null and a doctype is following
 * `child`.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentType and `parent` has a
 * doctype child, `child` is non-null and an element is preceding `child`, or `child` is null
 * and `parent` has an element child.
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If node has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child,
		// `child` is a doctype, or `child` is non-null and a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child, `child` is a doctype,
		// or `child` is non-null and a doctype is following `child`.
		if (!isElementInsertionPossible(parent, child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		// `parent` has a doctype child,
		if (find(parentChildNodes, isDocTypeNode)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// `child` is non-null and an element is preceding `child`,
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
		// or `child` is null and `parent` has an element child.
		if (!child && parentElementChild) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can not be appended since element is present');
		}
	}
}

/**
 * @param {Document} parent
 * The parent node to insert `node` into.
 * @param {Node} node
 * The node to insert.
 * @param {Node | undefined} child
 * the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws {DOMException}
 * For several node combinations that would create a DOM that is not well-formed.
 * @throws {DOMException}
 * If `child` is provided but is not a child of `parent`.
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreReplacementValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If `node` has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child that is not `child` or a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child that is not `child` or a doctype is following `child`.
		if (!isElementReplacementPossible(parent, child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		function hasDoctypeChildThatIsNotChild(node) {
			return isDocTypeNode(node) && node !== child;
		}

		// `parent` has a doctype child that is not `child`,
		if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// or an element is preceding `child`.
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
	}
}

/**
 * Inserts a node into a parent node before a child node.
 *
 * @param {Node} parent
 * The parent node to insert the node into.
 * @param {Node} node
 * The node to insert into the parent.
 * @param {Node | null} child
 * The node that should become the next sibling of the node.
 * If null, the function inserts the node at the end of the children of the parent node.
 * @param {Function} [_inDocumentAssertion]
 * An optional function to check pre-insertion validity if parent is a document node.
 * Defaults to {@link assertPreInsertionValidityInDocument}
 * @returns {Node}
 * Returns the inserted node.
 * @throws {DOMException}
 * Throws a DOMException if inserting the node would result in a DOM tree that is not
 * well-formed. See {@link assertPreInsertionValidity1to5},
 * {@link assertPreInsertionValidityInDocument}.
 * @throws {DOMException}
 * Throws a DOMException if child is provided but is not a child of the parent. See
 * {@link Node.removeChild}
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function _insertBefore(parent, node, child, _inDocumentAssertion) {
	// To ensure pre-insertion validity of a node into a parent before a child, run these steps:
	assertPreInsertionValidity1to5(parent, node, child);

	// If parent is a document, and any of the statements below, switched on the interface node implements,
	// are true, then throw a "HierarchyRequestError" DOMException.
	if (parent.nodeType === Node.DOCUMENT_NODE) {
		(_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
	}

	var cp = node.parentNode;
	if (cp) {
		cp.removeChild(node); //remove and update
	}
	if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
		var newFirst = node.firstChild;
		if (newFirst == null) {
			return node;
		}
		var newLast = node.lastChild;
	} else {
		newFirst = newLast = node;
	}
	var pre = child ? child.previousSibling : parent.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = child;

	if (pre) {
		pre.nextSibling = newFirst;
	} else {
		parent.firstChild = newFirst;
	}
	if (child == null) {
		parent.lastChild = newLast;
	} else {
		child.previousSibling = newLast;
	}
	do {
		newFirst.parentNode = parent;
	} while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
	_onUpdateChild(parent.ownerDocument || parent, parent, node);
	if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
		node.firstChild = node.lastChild = null;
	}

	return node;
}

Document.prototype = {
	/**
	 * The implementation that created this document.
	 *
	 * @type DOMImplementation
	 * @readonly
	 */
	implementation: null,
	nodeName: '#document',
	nodeType: DOCUMENT_NODE,
	/**
	 * The DocumentType node of the document.
	 *
	 * @type DocumentType
	 * @readonly
	 */
	doctype: null,
	documentElement: null,
	_inc: 1,

	insertBefore: function (newChild, refChild) {
		//raises
		if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
			var child = newChild.firstChild;
			while (child) {
				var next = child.nextSibling;
				this.insertBefore(child, refChild);
				child = next;
			}
			return newChild;
		}
		_insertBefore(this, newChild, refChild);
		newChild.ownerDocument = this;
		if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
			this.documentElement = newChild;
		}

		return newChild;
	},
	removeChild: function (oldChild) {
		var removed = _removeChild(this, oldChild);
		if (removed === this.documentElement) {
			this.documentElement = null;
		}
		return removed;
	},
	replaceChild: function (newChild, oldChild) {
		//raises
		_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
		newChild.ownerDocument = this;
		if (oldChild) {
			this.removeChild(oldChild);
		}
		if (isElementNode(newChild)) {
			this.documentElement = newChild;
		}
	},
	// Introduced in DOM Level 2:
	importNode: function (importedNode, deep) {
		return importNode(this, importedNode, deep);
	},
	// Introduced in DOM Level 2:
	getElementById: function (id) {
		var rtv = null;
		_visitNode(this.documentElement, function (node) {
			if (node.nodeType == ELEMENT_NODE) {
				if (node.getAttribute('id') == id) {
					rtv = node;
					return true;
				}
			}
		});
		return rtv;
	},

	/**
	 * Creates a new `Element` that is owned by this `Document`.
	 * In HTML Documents `localName` is the lower cased `tagName`,
	 * otherwise no transformation is being applied.
	 * When `contentType` implies the HTML namespace, it will be set as `namespaceURI`.
	 *
	 * __This implementation differs from the specification:__ - The provided name is not checked
	 * against the `Name` production,
	 * so no related error will be thrown.
	 * - There is no interface `HTMLElement`, it is always an `Element`.
	 * - There is no support for a second argument to indicate using custom elements.
	 *
	 * @param {string} tagName
	 * @returns {Element}
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
	 * @see https://dom.spec.whatwg.org/#dom-document-createelement
	 * @see https://dom.spec.whatwg.org/#concept-create-element
	 */
	createElement: function (tagName) {
		var node = new Element(PDC);
		node.ownerDocument = this;
		if (this.type === 'html') {
			tagName = tagName.toLowerCase();
		}
		if (hasDefaultHTMLNamespace(this.contentType)) {
			node.namespaceURI = NAMESPACE.HTML;
		}
		node.nodeName = tagName;
		node.tagName = tagName;
		node.localName = tagName;
		node.childNodes = new NodeList();
		var attrs = (node.attributes = new NamedNodeMap());
		attrs._ownerElement = node;
		return node;
	},
	/**
	 * @returns {DocumentFragment}
	 */
	createDocumentFragment: function () {
		var node = new DocumentFragment(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	/**
	 * @param {string} data
	 * @returns {Text}
	 */
	createTextNode: function (data) {
		var node = new Text(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.appendData(data);
		return node;
	},
	/**
	 * @param {string} data
	 * @returns {Comment}
	 */
	createComment: function (data) {
		var node = new Comment(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.appendData(data);
		return node;
	},
	/**
	 * @param {string} data
	 * @returns {CDATASection}
	 */
	createCDATASection: function (data) {
		var node = new CDATASection(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.appendData(data);
		return node;
	},
	/**
	 * @param {string} target
	 * @param {string} data
	 * @returns {ProcessingInstruction}
	 */
	createProcessingInstruction: function (target, data) {
		var node = new ProcessingInstruction(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.nodeName = node.target = target;
		node.nodeValue = node.data = data;
		return node;
	},
	/**
	 * Creates an `Attr` node that is owned by this document.
	 * In HTML Documents `localName` is the lower cased `name`,
	 * otherwise no transformation is being applied.
	 *
	 * __This implementation differs from the specification:__ - The provided name is not checked
	 * against the `Name` production,
	 * so no related error will be thrown.
	 *
	 * @param {string} name
	 * @returns {Attr}
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute
	 * @see https://dom.spec.whatwg.org/#dom-document-createattribute
	 */
	createAttribute: function (name) {
		if (!g.QName_exact.test(name)) {
			throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in name "' + name + '"');
		}
		if (this.type === 'html') {
			name = name.toLowerCase();
		}
		return this._createAttribute(name);
	},
	_createAttribute: function (name) {
		var node = new Attr(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.name = name;
		node.nodeName = name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	/**
	 * Creates an EntityReference object.
	 * The current implementation does not fill the `childNodes` with those of the corresponding
	 * `Entity`
	 *
	 * @deprecated
	 * In DOM Level 4.
	 * @param {string} name
	 * The name of the entity to reference. No namespace well-formedness checks are performed.
	 * @returns {EntityReference}
	 * @throws {DOMException}
	 * With code `INVALID_CHARACTER_ERR` when `name` is not valid.
	 * @throws {DOMException}
	 * with code `NOT_SUPPORTED_ERR` when the document is of type `html`
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE
	 */
	createEntityReference: function (name) {
		if (!g.Name.test(name)) {
			throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'not a valid xml name "' + name + '"');
		}
		if (this.type === 'html') {
			throw new DOMException('document is an html document', DOMExceptionName.NotSupportedError);
		}

		var node = new EntityReference(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.nodeName = name;
		return node;
	},
	// Introduced in DOM Level 2:
	/**
	 * @param {string} namespaceURI
	 * @param {string} qualifiedName
	 * @returns {Element}
	 */
	createElementNS: function (namespaceURI, qualifiedName) {
		var validated = validateAndExtract(namespaceURI, qualifiedName);
		var node = new Element(PDC);
		var attrs = (node.attributes = new NamedNodeMap());
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = validated[0];
		node.prefix = validated[1];
		node.localName = validated[2];
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	/**
	 * @param {string} namespaceURI
	 * @param {string} qualifiedName
	 * @returns {Attr}
	 */
	createAttributeNS: function (namespaceURI, qualifiedName) {
		var validated = validateAndExtract(namespaceURI, qualifiedName);
		var node = new Attr(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.specified = true;
		node.namespaceURI = validated[0];
		node.prefix = validated[1];
		node.localName = validated[2];
		return node;
	},
};
_extends(Document, Node);

function Element(symbol) {
	checkSymbol(symbol);

	this._nsMap = Object.create(null);
}
Element.prototype = {
	nodeType: ELEMENT_NODE,
	/**
	 * The attributes of this element.
	 *
	 * @type {NamedNodeMap | null}
	 */
	attributes: null,
	getQualifiedName: function () {
		return this.prefix ? this.prefix + ':' + this.localName : this.localName;
	},
	_isInHTMLDocumentAndNamespace: function () {
		return this.ownerDocument.type === 'html' && this.namespaceURI === NAMESPACE.HTML;
	},
	hasAttribute: function (name) {
		return !!this.getAttributeNode(name);
	},
	/**
	 * Returns element’s first attribute whose qualified name is `name`, and `null`
	 * if there is no such attribute.
	 *
	 * @param {string} name
	 * @returns {string | null}
	 */
	getAttribute: function (name) {
		var attr = this.getAttributeNode(name);
		return attr ? attr.value : null;
	},
	getAttributeNode: function (name) {
		if (this._isInHTMLDocumentAndNamespace()) {
			name = name.toLowerCase();
		}
		return this.attributes.getNamedItem(name);
	},
	/**
	 * Sets the value of element’s first attribute whose qualified name is qualifiedName to value.
	 *
	 * @param {string} name
	 * @param {string} value
	 */
	setAttribute: function (name, value) {
		if (this._isInHTMLDocumentAndNamespace()) {
			name = name.toLowerCase();
		}
		var attr = this.getAttributeNode(name);
		if (attr) {
			attr.value = attr.nodeValue = '' + value;
		} else {
			attr = this.ownerDocument._createAttribute(name);
			attr.value = attr.nodeValue = '' + value;
			this.setAttributeNode(attr);
		}
	},
	removeAttribute: function (name) {
		var attr = this.getAttributeNode(name);
		attr && this.removeAttributeNode(attr);
	},
	setAttributeNode: function (newAttr) {
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS: function (newAttr) {
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode: function (oldAttr) {
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS: function (namespaceURI, localName) {
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},

	hasAttributeNS: function (namespaceURI, localName) {
		return this.getAttributeNodeNS(namespaceURI, localName) != null;
	},
	/**
	 * Returns element’s attribute whose namespace is `namespaceURI` and local name is
	 * `localName`,
	 * or `null` if there is no such attribute.
	 *
	 * @param {string} namespaceURI
	 * @param {string} localName
	 * @returns {string | null}
	 */
	getAttributeNS: function (namespaceURI, localName) {
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr ? attr.value : null;
	},
	/**
	 * Sets the value of element’s attribute whose namespace is `namespaceURI` and local name is
	 * `localName` to value.
	 *
	 * @param {string} namespaceURI
	 * @param {string} qualifiedName
	 * @param {string} value
	 * @see https://dom.spec.whatwg.org/#dom-element-setattributens
	 */
	setAttributeNS: function (namespaceURI, qualifiedName, value) {
		var validated = validateAndExtract(namespaceURI, qualifiedName);
		var localName = validated[2];
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		if (attr) {
			attr.value = attr.nodeValue = '' + value;
		} else {
			attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
			attr.value = attr.nodeValue = '' + value;
			this.setAttributeNode(attr);
		}
	},
	getAttributeNodeNS: function (namespaceURI, localName) {
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},

	/**
	 * Returns a LiveNodeList of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classNames` is an empty string or only contains HTML white space
	 * characters.
	 *
	 * Warning: This returns a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames
	 * Is a string representing the class name(s) to match; multiple class names are separated by
	 * (ASCII-)whitespace.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */
	getElementsByClassName: function (classNames) {
		var classNamesSet = toOrderedSet(classNames);
		return new LiveNodeList(this, function (base) {
			var ls = [];
			if (classNamesSet.length > 0) {
				_visitNode(base, function (node) {
					if (node !== base && node.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node.getAttribute('class');
						// can be null if the attribute does not exist
						if (nodeClassNames) {
							// before splitting and iterating just compare them for the most common case
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames);
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
							}
							if (matches) {
								ls.push(node);
							}
						}
					}
				});
			}
			return ls;
		});
	},

	/**
	 * Returns a LiveNodeList of elements with the given qualifiedName.
	 * Searching for all descendants can be done by passing `*` as `qualifiedName`.
	 *
	 * All descendants of the specified element are searched, but not the element itself.
	 * The returned list is live, which means it updates itself with the DOM tree automatically.
	 * Therefore, there is no need to call `Element.getElementsByTagName()`
	 * with the same element and arguments repeatedly if the DOM changes in between calls.
	 *
	 * When called on an HTML element in an HTML document,
	 * `getElementsByTagName` lower-cases the argument before searching for it.
	 * This is undesirable when trying to match camel-cased SVG elements (such as
	 * `<linearGradient>`) in an HTML document.
	 * Instead, use `Element.getElementsByTagNameNS()`,
	 * which preserves the capitalization of the tag name.
	 *
	 * `Element.getElementsByTagName` is similar to `Document.getElementsByTagName()`,
	 * except that it only searches for elements that are descendants of the specified element.
	 *
	 * @param {string} qualifiedName
	 * @returns {LiveNodeList}
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbytagname
	 */
	getElementsByTagName: function (qualifiedName) {
		var isHTMLDocument = (this.nodeType === DOCUMENT_NODE ? this : this.ownerDocument).type === 'html';
		var lowerQualifiedName = qualifiedName.toLowerCase();
		return new LiveNodeList(this, function (base) {
			var ls = [];
			_visitNode(base, function (node) {
				if (node === base || node.nodeType !== ELEMENT_NODE) {
					return;
				}
				if (qualifiedName === '*') {
					ls.push(node);
				} else {
					var nodeQualifiedName = node.getQualifiedName();
					var matchingQName = isHTMLDocument && node.namespaceURI === NAMESPACE.HTML ? lowerQualifiedName : qualifiedName;
					if (nodeQualifiedName === matchingQName) {
						ls.push(node);
					}
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS: function (namespaceURI, localName) {
		return new LiveNodeList(this, function (base) {
			var ls = [];
			_visitNode(base, function (node) {
				if (
					node !== base &&
					node.nodeType === ELEMENT_NODE &&
					(namespaceURI === '*' || node.namespaceURI === namespaceURI) &&
					(localName === '*' || node.localName == localName)
				) {
					ls.push(node);
				}
			});
			return ls;
		});
	},
};
Document.prototype.getElementsByClassName = Element.prototype.getElementsByClassName;
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;

_extends(Element, Node);
function Attr(symbol) {
	checkSymbol(symbol);

	this.namespaceURI = null;
	this.prefix = null;
	this.ownerElement = null;
}
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr, Node);

function CharacterData(symbol) {
	checkSymbol(symbol);
}
CharacterData.prototype = {
	data: '',
	substringData: function (offset, count) {
		return this.data.substring(offset, offset + count);
	},
	appendData: function (text) {
		text = this.data + text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function (offset, text) {
		this.replaceData(offset, 0, text);
	},
	deleteData: function (offset, count) {
		this.replaceData(offset, count, '');
	},
	replaceData: function (offset, count, text) {
		var start = this.data.substring(0, offset);
		var end = this.data.substring(offset + count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
};
_extends(CharacterData, Node);
function Text(symbol) {
	checkSymbol(symbol);
}
Text.prototype = {
	nodeName: '#text',
	nodeType: TEXT_NODE,
	splitText: function (offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if (this.parentNode) {
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	},
};
_extends(Text, CharacterData);
function Comment(symbol) {
	checkSymbol(symbol);
}
Comment.prototype = {
	nodeName: '#comment',
	nodeType: COMMENT_NODE,
};
_extends(Comment, CharacterData);

function CDATASection(symbol) {
	checkSymbol(symbol);
}
CDATASection.prototype = {
	nodeName: '#cdata-section',
	nodeType: CDATA_SECTION_NODE,
};
_extends(CDATASection, Text);

function DocumentType(symbol) {
	checkSymbol(symbol);
}
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType, Node);

function Notation(symbol) {
	checkSymbol(symbol);
}
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation, Node);

function Entity(symbol) {
	checkSymbol(symbol);
}
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity, Node);

function EntityReference(symbol) {
	checkSymbol(symbol);
}
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference, Node);

function DocumentFragment(symbol) {
	checkSymbol(symbol);
}
DocumentFragment.prototype.nodeName = '#document-fragment';
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment, Node);

function ProcessingInstruction(symbol) {
	checkSymbol(symbol);
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction, CharacterData);
function XMLSerializer() {}
XMLSerializer.prototype.serializeToString = function (node, nodeFilter) {
	return nodeSerializeToString.call(node, nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(nodeFilter) {
	var buf = [];
	var refNode = (this.nodeType === DOCUMENT_NODE && this.documentElement) || this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;

	if (uri && prefix == null) {
		var prefix = refNode.lookupPrefix(uri);
		if (prefix == null) {
			var visibleNamespaces = [
				{ namespace: uri, prefix: null },
				//{namespace:uri,prefix:''}
			];
		}
	}
	serializeToString(this, buf, nodeFilter, visibleNamespaces);
	return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
	// > [...] Furthermore, the attribute value [...] must not be an empty string.
	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
	if (!uri) {
		return false;
	}
	if ((prefix === 'xml' && uri === NAMESPACE.XML) || uri === NAMESPACE.XMLNS) {
		return false;
	}

	var i = visibleNamespaces.length;
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		if (ns.prefix === prefix) {
			return ns.namespace !== uri;
		}
	}
	return true;
}
/**
 * Literal whitespace other than space that appear in attribute values are serialized as
 * their entity references, so they will be preserved.
 * (In contrast to whitespace literals in the input which are normalized to spaces).
 *
 * Well-formed constraint: No < in Attribute Values:
 * > The replacement text of any entity referred to directly or indirectly
 * > in an attribute value must not contain a <.
 *
 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
 * @see https://www.w3.org/TR/xml11/#NT-AttValue
 * @see https://www.w3.org/TR/xml11/#AVNormalize
 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
 * @prettierignore
 */
function addSerializedAttribute(buf, qualifiedName, value) {
	buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
}

function serializeToString(node, buf, nodeFilter, visibleNamespaces) {
	if (!visibleNamespaces) {
		visibleNamespaces = [];
	}
	var doc = node.nodeType === DOCUMENT_NODE ? node : node.ownerDocument;
	var isHTML = doc.type === 'html';

	if (nodeFilter) {
		node = nodeFilter(node);
		if (node) {
			if (typeof node == 'string') {
				buf.push(node);
				return;
			}
		} else {
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}

	switch (node.nodeType) {
		case ELEMENT_NODE:
			var attrs = node.attributes;
			var len = attrs.length;
			var child = node.firstChild;
			var nodeName = node.tagName;

			var prefixedNodeName = nodeName;
			if (!isHTML && !node.prefix && node.namespaceURI) {
				var defaultNS;
				// lookup current default ns from `xmlns` attribute
				for (var ai = 0; ai < attrs.length; ai++) {
					if (attrs.item(ai).name === 'xmlns') {
						defaultNS = attrs.item(ai).value;
						break;
					}
				}
				if (!defaultNS) {
					// lookup current default ns in visibleNamespaces
					for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
						var namespace = visibleNamespaces[nsi];
						if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
							defaultNS = namespace.namespace;
							break;
						}
					}
				}
				if (defaultNS !== node.namespaceURI) {
					for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
						var namespace = visibleNamespaces[nsi];
						if (namespace.namespace === node.namespaceURI) {
							if (namespace.prefix) {
								prefixedNodeName = namespace.prefix + ':' + nodeName;
							}
							break;
						}
					}
				}
			}

			buf.push('<', prefixedNodeName);

			for (var i = 0; i < len; i++) {
				// add namespaces for attributes
				var attr = attrs.item(i);
				if (attr.prefix == 'xmlns') {
					visibleNamespaces.push({
						prefix: attr.localName,
						namespace: attr.value,
					});
				} else if (attr.nodeName == 'xmlns') {
					visibleNamespaces.push({ prefix: '', namespace: attr.value });
				}
			}

			for (var i = 0; i < len; i++) {
				var attr = attrs.item(i);
				if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
					var prefix = attr.prefix || '';
					var uri = attr.namespaceURI;
					addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : 'xmlns', uri);
					visibleNamespaces.push({ prefix: prefix, namespace: uri });
				}
				serializeToString(attr, buf, nodeFilter, visibleNamespaces);
			}

			// add namespace for current node
			if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
				var prefix = node.prefix || '';
				var uri = node.namespaceURI;
				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : 'xmlns', uri);
				visibleNamespaces.push({ prefix: prefix, namespace: uri });
			}
			// in XML elements can be closed when they have no children
			var canCloseTag = !child;
			if (canCloseTag && (isHTML || node.namespaceURI === NAMESPACE.HTML)) {
				// in HTML (doc or ns) only void elements can be closed right away
				canCloseTag = isHTMLVoidElement(nodeName);
			}
			if (canCloseTag) {
				buf.push('/>');
			} else {
				buf.push('>');
				//if is cdata child node
				if (isHTML && isHTMLRawTextElement(nodeName)) {
					while (child) {
						if (child.data) {
							buf.push(child.data);
						} else {
							serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
						}
						child = child.nextSibling;
					}
				} else {
					while (child) {
						serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
						child = child.nextSibling;
					}
				}
				buf.push('</', prefixedNodeName, '>');
			}
			// remove added visible namespaces
			//visibleNamespaces.length = startVisibleNamespaces;
			return;
		case DOCUMENT_NODE:
		case DOCUMENT_FRAGMENT_NODE:
			var child = node.firstChild;
			while (child) {
				serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
				child = child.nextSibling;
			}
			return;
		case ATTRIBUTE_NODE:
			return addSerializedAttribute(buf, node.name, node.value);
		case TEXT_NODE:
			/*
			 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
			 * except when used as markup delimiters, or within a comment, a processing instruction,
			 * or a CDATA section.
			 * If they are needed elsewhere, they must be escaped using either numeric character
			 * references or the strings `&amp;` and `&lt;` respectively.
			 * The right angle bracket (>) may be represented using the string " &gt; ",
			 * and must, for compatibility, be escaped using either `&gt;`,
			 * or a character reference when it appears in the string `]]>` in content,
			 * when that string is not marking the end of a CDATA section.
			 *
			 * In the content of elements, character data is any string of characters which does not
			 * contain the start-delimiter of any markup and does not include the CDATA-section-close
			 * delimiter, `]]>`.
			 *
			 * @see https://www.w3.org/TR/xml/#NT-CharData
			 * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
			 */
			return buf.push(node.data.replace(/[<&>]/g, _xmlEncoder));
		case CDATA_SECTION_NODE:
			return buf.push(g.CDATA_START, node.data, g.CDATA_END);
		case COMMENT_NODE:
			return buf.push(g.COMMENT_START, node.data, g.COMMENT_END);
		case DOCUMENT_TYPE_NODE:
			var pubid = node.publicId;
			var sysid = node.systemId;
			buf.push(g.DOCTYPE_DECL_START, ' ', node.name);
			if (pubid) {
				buf.push(' ', g.PUBLIC, ' ', pubid);
				if (sysid && sysid !== '.') {
					buf.push(' ', sysid);
				}
			} else if (sysid && sysid !== '.') {
				buf.push(' ', g.SYSTEM, ' ', sysid);
			}
			if (node.internalSubset) {
				buf.push(' [', node.internalSubset, ']');
			}
			buf.push('>');
			return;
		case PROCESSING_INSTRUCTION_NODE:
			return buf.push('<?', node.target, ' ', node.data, '?>');
		case ENTITY_REFERENCE_NODE:
			return buf.push('&', node.nodeName, ';');
		//case ENTITY_NODE:
		//case NOTATION_NODE:
		default:
			buf.push('??', node.nodeName);
	}
}
function importNode(doc, node, deep) {
	var node2;
	switch (node.nodeType) {
		case ELEMENT_NODE:
			node2 = node.cloneNode(false);
			node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
		//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
		case DOCUMENT_FRAGMENT_NODE:
			break;
		case ATTRIBUTE_NODE:
			deep = true;
			break;
		//case ENTITY_REFERENCE_NODE:
		//case PROCESSING_INSTRUCTION_NODE:
		////case TEXT_NODE:
		//case CDATA_SECTION_NODE:
		//case COMMENT_NODE:
		//	deep = false;
		//	break;
		//case DOCUMENT_NODE:
		//case DOCUMENT_TYPE_NODE:
		//cannot be imported.
		//case ENTITY_NODE:
		//case NOTATION_NODE：
		//can not hit in level3
		//default:throw e;
	}
	if (!node2) {
		node2 = node.cloneNode(false); //false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if (deep) {
		var child = node.firstChild;
		while (child) {
			node2.appendChild(importNode(doc, child, deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

/**
 * Creates a copy of a node from an existing one.
 *
 * @param {Document} doc
 * The Document object representing the document that the new node will belong to.
 * @param {Node} node
 * The node to clone.
 * @param {boolean} deep
 * If true, the contents of the node are recursively copied.
 * If false, only the node itself (and its attributes, if it is an element) are copied.
 * @returns {Node}
 * Returns the newly created copy of the node.
 * @throws {DOMException}
 * May throw a DOMException if operations within setAttributeNode or appendChild (which are
 * potentially invoked in this function) do not meet their specific constraints.
 */
function cloneNode(doc, node, deep) {
	var node2 = new node.constructor(PDC);
	for (var n in node) {
		if (hasOwn(node, n)) {
			var v = node[n];
			if (typeof v != 'object') {
				if (v != node2[n]) {
					node2[n] = v;
				}
			}
		}
	}
	if (node.childNodes) {
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
		case ELEMENT_NODE:
			var attrs = node.attributes;
			var attrs2 = (node2.attributes = new NamedNodeMap());
			var len = attrs.length;
			attrs2._ownerElement = node2;
			for (var i = 0; i < len; i++) {
				node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
			}
			break;
		case ATTRIBUTE_NODE:
			deep = true;
	}
	if (deep) {
		var child = node.firstChild;
		while (child) {
			node2.appendChild(cloneNode(doc, child, deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object, key, value) {
	object[key] = value;
}
//do dynamic
try {
	if (Object.defineProperty) {
		Object.defineProperty(LiveNodeList.prototype, 'length', {
			get: function () {
				_updateLiveList(this);
				return this.$$length;
			},
		});

		Object.defineProperty(Node.prototype, 'textContent', {
			get: function () {
				return getTextContent(this);
			},

			set: function (data) {
				switch (this.nodeType) {
					case ELEMENT_NODE:
					case DOCUMENT_FRAGMENT_NODE:
						while (this.firstChild) {
							this.removeChild(this.firstChild);
						}
						if (data || String(data)) {
							this.appendChild(this.ownerDocument.createTextNode(data));
						}
						break;

					default:
						this.data = data;
						this.value = data;
						this.nodeValue = data;
				}
			},
		});

		function getTextContent(node) {
			switch (node.nodeType) {
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					var buf = [];
					node = node.firstChild;
					while (node) {
						if (node.nodeType !== 7 && node.nodeType !== 8) {
							buf.push(getTextContent(node));
						}
						node = node.nextSibling;
					}
					return buf.join('');
				default:
					return node.nodeValue;
			}
		}

		__set__ = function (object, key, value) {
			//console.log(value)
			object['$$' + key] = value;
		};
	}
} catch (e) {
	//ie8
}

exports._updateLiveList = _updateLiveList;
exports.Attr = Attr;
exports.CDATASection = CDATASection;
exports.CharacterData = CharacterData;
exports.Comment = Comment;
exports.Document = Document;
exports.DocumentFragment = DocumentFragment;
exports.DocumentType = DocumentType;
exports.DOMImplementation = DOMImplementation;
exports.Element = Element;
exports.Entity = Entity;
exports.EntityReference = EntityReference;
exports.LiveNodeList = LiveNodeList;
exports.NamedNodeMap = NamedNodeMap;
exports.Node = Node;
exports.NodeList = NodeList;
exports.Notation = Notation;
exports.Text = Text;
exports.ProcessingInstruction = ProcessingInstruction;
exports.XMLSerializer = XMLSerializer;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Detects relevant unicode support for regular expressions in the runtime.
 * Should the runtime not accepts the flag `u` or unicode ranges,
 * character classes without unicode handling will be used.
 *
 * @param {typeof RegExp} [RegExpImpl=RegExp]
 * For testing: the RegExp class.
 * @returns {boolean}
 * @see https://node.green/#ES2015-syntax-RegExp--y--and--u--flags
 */
function detectUnicodeSupport(RegExpImpl) {
	try {
		if (typeof RegExpImpl !== 'function') {
			RegExpImpl = RegExp;
		}
		// eslint-disable-next-line es5/no-unicode-regex,es5/no-unicode-code-point-escape
		var match = new RegExpImpl('\u{1d306}', 'u').exec('𝌆');
		return !!match && match[0].length === 2;
	} catch (error) {}
	return false;
}
var UNICODE_SUPPORT = detectUnicodeSupport();

/**
 * Removes `[`, `]` and any trailing quantifiers from the source of a RegExp.
 *
 * @param {RegExp} regexp
 */
function chars(regexp) {
	if (regexp.source[0] !== '[') {
		throw new Error(regexp + ' can not be used with chars');
	}
	return regexp.source.slice(1, regexp.source.lastIndexOf(']'));
}

/**
 * Creates a new character list regular expression,
 * by removing `search` from the source of `regexp`.
 *
 * @param {RegExp} regexp
 * @param {string} search
 * The character(s) to remove.
 * @returns {RegExp}
 */
function chars_without(regexp, search) {
	if (regexp.source[0] !== '[') {
		throw new Error('/' + regexp.source + '/ can not be used with chars_without');
	}
	if (!search || typeof search !== 'string') {
		throw new Error(JSON.stringify(search) + ' is not a valid search');
	}
	if (regexp.source.indexOf(search) === -1) {
		throw new Error('"' + search + '" is not is /' + regexp.source + '/');
	}
	if (search === '-' && regexp.source.indexOf(search) !== 1) {
		throw new Error('"' + search + '" is not at the first postion of /' + regexp.source + '/');
	}
	return new RegExp(regexp.source.replace(search, ''), UNICODE_SUPPORT ? 'u' : '');
}

/**
 * Combines and Regular expressions correctly by using `RegExp.source`.
 *
 * @param {...(RegExp | string)[]} args
 * @returns {RegExp}
 */
function reg(args) {
	var self = this;
	return new RegExp(
		Array.prototype.slice
			.call(arguments)
			.map(function (part) {
				var isStr = typeof part === 'string';
				if (isStr && self === undefined && part === '|') {
					throw new Error('use regg instead of reg to wrap expressions with `|`!');
				}
				return isStr ? part : part.source;
			})
			.join(''),
		UNICODE_SUPPORT ? 'mu' : 'm'
	);
}

/**
 * Like `reg` but wraps the expression in `(?:`,`)` to create a non tracking group.
 *
 * @param {...(RegExp | string)[]} args
 * @returns {RegExp}
 */
function regg(args) {
	if (arguments.length === 0) {
		throw new Error('no parameters provided');
	}
	return reg.apply(regg, ['(?:'].concat(Array.prototype.slice.call(arguments), [')']));
}

// /**
//  * Append ^ to the beginning of the expression.
//  * @param {...(RegExp | string)[]} args
//  * @returns {RegExp}
//  */
// function reg_start(args) {
// 	if (arguments.length === 0) {
// 		throw new Error('no parameters provided');
// 	}
// 	return reg.apply(reg_start, ['^'].concat(Array.prototype.slice.call(arguments)));
// }

// https://www.w3.org/TR/xml/#document
// `[1] document ::= prolog element Misc*`
// https://www.w3.org/TR/xml11/#NT-document
// `[1] document ::= ( prolog element Misc* ) - ( Char* RestrictedChar Char* )`

/**
 * A character usually appearing in wrongly converted strings.
 *
 * @type {string}
 * @see https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character
 * @see https://nodejs.dev/en/api/v18/buffer/#buffers-and-character-encodings
 * @see https://www.unicode.org/faq/utf_bom.html#BOM
 * @readonly
 */
var UNICODE_REPLACEMENT_CHARACTER = '\uFFFD';
// https://www.w3.org/TR/xml/#NT-Char
// any Unicode character, excluding the surrogate blocks, FFFE, and FFFF.
// `[2] Char ::= #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]`
// https://www.w3.org/TR/xml11/#NT-Char
// `[2] Char ::= [#x1-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]`
// https://www.w3.org/TR/xml11/#NT-RestrictedChar
// `[2a] RestrictedChar ::= [#x1-#x8] | [#xB-#xC] | [#xE-#x1F] | [#x7F-#x84] | [#x86-#x9F]`
// https://www.w3.org/TR/xml11/#charsets
var Char = /[-\x09\x0A\x0D\x20-\x2C\x2E-\uD7FF\uE000-\uFFFD]/; // without \u10000-\uEFFFF
if (UNICODE_SUPPORT) {
	// eslint-disable-next-line es5/no-unicode-code-point-escape
	Char = reg('[', chars(Char), '\\u{10000}-\\u{10FFFF}', ']');
}

var _SChar = /[\x20\x09\x0D\x0A]/;
var SChar_s = chars(_SChar);
// https://www.w3.org/TR/xml11/#NT-S
// `[3] S ::= (#x20 | #x9 | #xD | #xA)+`
var S = reg(_SChar, '+');
// optional whitespace described as `S?` in the grammar,
// simplified to 0-n occurrences of the character class
// instead of 0-1 occurrences of a non-capturing group around S
var S_OPT = reg(_SChar, '*');

// https://www.w3.org/TR/xml11/#NT-NameStartChar
// `[4] NameStartChar ::= ":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]`
var NameStartChar =
	/[:_a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/; // without \u10000-\uEFFFF
if (UNICODE_SUPPORT) {
	// eslint-disable-next-line es5/no-unicode-code-point-escape
	NameStartChar = reg('[', chars(NameStartChar), '\\u{10000}-\\u{10FFFF}', ']');
}
var NameStartChar_s = chars(NameStartChar);

// https://www.w3.org/TR/xml11/#NT-NameChar
// `[4a] NameChar ::= NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]`
var NameChar = reg('[', NameStartChar_s, chars(/[-.0-9\xB7]/), chars(/[\u0300-\u036F\u203F-\u2040]/), ']');
// https://www.w3.org/TR/xml11/#NT-Name
// `[5] Name ::= NameStartChar (NameChar)*`
var Name = reg(NameStartChar, NameChar, '*');
/*
https://www.w3.org/TR/xml11/#NT-Names
`[6] Names ::= Name (#x20 Name)*`
*/

// https://www.w3.org/TR/xml11/#NT-Nmtoken
// `[7] Nmtoken ::= (NameChar)+`
var Nmtoken = reg(NameChar, '+');
/*
https://www.w3.org/TR/xml11/#NT-Nmtokens
`[8] Nmtokens ::= Nmtoken (#x20 Nmtoken)*`
var Nmtokens = reg(Nmtoken, regg(/\x20/, Nmtoken), '*');
*/

// https://www.w3.org/TR/xml11/#NT-EntityRef
// `[68] EntityRef ::= '&' Name ';'` [WFC: Entity Declared] [VC: Entity Declared] [WFC: Parsed Entity] [WFC: No Recursion]
var EntityRef = reg('&', Name, ';');
// https://www.w3.org/TR/xml11/#NT-CharRef
// `[66] CharRef ::= '&#' [0-9]+ ';' | '&#x' [0-9a-fA-F]+ ';'` [WFC: Legal Character]
var CharRef = regg(/&#[0-9]+;|&#x[0-9a-fA-F]+;/);

/*
https://www.w3.org/TR/xml11/#NT-Reference
- `[67] Reference ::= EntityRef | CharRef`
- `[66] CharRef ::= '&#' [0-9]+ ';' | '&#x' [0-9a-fA-F]+ ';'` [WFC: Legal Character]
- `[68] EntityRef ::= '&' Name ';'` [WFC: Entity Declared] [VC: Entity Declared] [WFC: Parsed Entity] [WFC: No Recursion]
*/
var Reference = regg(EntityRef, '|', CharRef);

// https://www.w3.org/TR/xml11/#NT-PEReference
// `[69] PEReference ::= '%' Name ';'`
// [VC: Entity Declared] [WFC: No Recursion] [WFC: In DTD]
var PEReference = reg('%', Name, ';');

// https://www.w3.org/TR/xml11/#NT-EntityValue
// `[9] EntityValue ::= '"' ([^%&"] | PEReference | Reference)* '"' | "'" ([^%&'] | PEReference | Reference)* "'"`
var EntityValue = regg(
	reg('"', regg(/[^%&"]/, '|', PEReference, '|', Reference), '*', '"'),
	'|',
	reg("'", regg(/[^%&']/, '|', PEReference, '|', Reference), '*', "'")
);

// https://www.w3.org/TR/xml11/#NT-AttValue
// `[10] AttValue ::= '"' ([^<&"] | Reference)* '"' | "'" ([^<&'] | Reference)* "'"`
var AttValue = regg('"', regg(/[^<&"]/, '|', Reference), '*', '"', '|', "'", regg(/[^<&']/, '|', Reference), '*', "'");

// https://www.w3.org/TR/xml-names/#ns-decl
// https://www.w3.org/TR/xml-names/#ns-qualnames
// NameStartChar without ":"
var NCNameStartChar = chars_without(NameStartChar, ':');
// https://www.w3.org/TR/xml-names/#orphans
// `[5] NCNameChar ::= NameChar - ':'`
// An XML NameChar, minus the ":"
var NCNameChar = chars_without(NameChar, ':');
// https://www.w3.org/TR/xml-names/#NT-NCName
// `[4] NCName ::= Name - (Char* ':' Char*)`
// An XML Name, minus the ":"
var NCName = reg(NCNameStartChar, NCNameChar, '*');

/**
https://www.w3.org/TR/xml-names/#ns-qualnames

```
[7] QName ::= PrefixedName | UnprefixedName
				  === (NCName ':' NCName) | NCName
				  === NCName (':' NCName)?
[8] PrefixedName ::= Prefix ':' LocalPart
								 === NCName ':' NCName
[9] UnprefixedName ::= LocalPart
									 === NCName
[10] Prefix ::= NCName
[11] LocalPart ::= NCName
```
*/
var QName = reg(NCName, regg(':', NCName), '?');
var QName_exact = reg('^', QName, '$');
var QName_group = reg('(', QName, ')');

// https://www.w3.org/TR/xml11/#NT-SystemLiteral
// `[11] SystemLiteral ::= ('"' [^"]* '"') | ("'" [^']* "'")`
var SystemLiteral = regg(/"[^"]*"|'[^']*'/);

/*
 https://www.w3.org/TR/xml11/#NT-PI
 ```
 [17] PITarget    ::= Name - (('X' | 'x') ('M' | 'm') ('L' | 'l'))
 [16] PI    ::= '<?' PITarget (S (Char* - (Char* '?>' Char*)))? '?>'
 ```
 target /xml/i is not excluded!
*/
var PI = reg(/^<\?/, '(', Name, ')', regg(S, '(', Char, '*?)'), '?', /\?>/);

// https://www.w3.org/TR/xml11/#NT-PubidChar
// `[13] PubidChar ::= #x20 | #xD | #xA | [a-zA-Z0-9] | [-'()+,./:=?;!*#@$_%]`
var PubidChar = /[\x20\x0D\x0Aa-zA-Z0-9-'()+,./:=?;!*#@$_%]/;

// https://www.w3.org/TR/xml11/#NT-PubidLiteral
// `[12] PubidLiteral ::= '"' PubidChar* '"' | "'" (PubidChar - "'")* "'"`
var PubidLiteral = regg('"', PubidChar, '*"', '|', "'", chars_without(PubidChar, "'"), "*'");

// https://www.w3.org/TR/xml11/#NT-CharData
// `[14] CharData    ::= [^<&]* - ([^<&]* ']]>' [^<&]*)`

var COMMENT_START = '<!--';
var COMMENT_END = '-->';
// https://www.w3.org/TR/xml11/#NT-Comment
// `[15] Comment ::= '<!--' ((Char - '-') | ('-' (Char - '-')))* '-->'`
var Comment = reg(COMMENT_START, regg(chars_without(Char, '-'), '|', reg('-', chars_without(Char, '-'))), '*', COMMENT_END);

var PCDATA = '#PCDATA';
// https://www.w3.org/TR/xml11/#NT-Mixed
// `[51] Mixed ::= '(' S? '#PCDATA' (S? '|' S? Name)* S? ')*' | '(' S? '#PCDATA' S? ')'`
// https://www.w3.org/TR/xml-names/#NT-Mixed
// `[51] Mixed ::= '(' S? '#PCDATA' (S? '|' S? QName)* S? ')*' | '(' S? '#PCDATA' S? ')'`
// [VC: Proper Group/PE Nesting] [VC: No Duplicate Types]
var Mixed = regg(
	reg(/\(/, S_OPT, PCDATA, regg(S_OPT, /\|/, S_OPT, QName), '*', S_OPT, /\)\*/),
	'|',
	reg(/\(/, S_OPT, PCDATA, S_OPT, /\)/)
);

var _children_quantity = /[?*+]?/;
/*
 `[49] choice ::= '(' S? cp ( S? '|' S? cp )+ S? ')'` [VC: Proper Group/PE Nesting]
 `[50] seq ::= '(' S? cp ( S? ',' S? cp )* S? ')'` [VC: Proper Group/PE Nesting]
 simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
 var _choice_or_seq = reg('[', NameChar_s, SChar_s, chars(_children_quantity), '()|,]*');
 ```
 [48] cp ::= (Name | choice | seq) ('?' | '*' | '+')?
         === (Name | '(' S? cp ( S? '|' S? cp )+ S? ')' | '(' S? cp ( S? ',' S? cp )* S? ')') ('?' | '*' | '+')?
         !== (Name | [_choice_or_seq]*) ('?' | '*' | '+')?
 ```
 simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
 var cp = reg(regg(Name, '|', _choice_or_seq), _children_quantity);
*/
/*
Inefficient regular expression (High)
This part of the regular expression may cause exponential backtracking on strings starting with '(|' and containing many repetitions of '|'.
https://github.com/xmldom/xmldom/security/code-scanning/91
var choice = regg(/\(/, S_OPT, cp, regg(S_OPT, /\|/, S_OPT, cp), '+', S_OPT, /\)/);
*/
/*
Inefficient regular expression (High)
This part of the regular expression may cause exponential backtracking on strings starting with '(,' and containing many repetitions of ','.
https://github.com/xmldom/xmldom/security/code-scanning/92
var seq = regg(/\(/, S_OPT, cp, regg(S_OPT, /,/, S_OPT, cp), '*', S_OPT, /\)/);
*/

// `[47] children ::= (choice | seq) ('?' | '*' | '+')?`
// simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
var children = reg(/\([^>]+\)/, _children_quantity /*regg(choice, '|', seq), _children_quantity*/);

// https://www.w3.org/TR/xml11/#NT-contentspec
// `[46] contentspec ::= 'EMPTY' | 'ANY' | Mixed | children`
var contentspec = regg('EMPTY', '|', 'ANY', '|', Mixed, '|', children);

var ELEMENTDECL_START = '<!ELEMENT';
// https://www.w3.org/TR/xml11/#NT-elementdecl
// `[45] elementdecl ::= '<!ELEMENT' S Name S contentspec S? '>'`
// https://www.w3.org/TR/xml-names/#NT-elementdecl
// `[17] elementdecl ::= '<!ELEMENT' S QName S contentspec S? '>'`
// because of https://www.w3.org/TR/xml11/#NT-PEReference
// since xmldom is not supporting replacements of PEReferences in the DTD
// this also supports PEReference in the possible places
var elementdecl = reg(ELEMENTDECL_START, S, regg(QName, '|', PEReference), S, regg(contentspec, '|', PEReference), S_OPT, '>');

// https://www.w3.org/TR/xml11/#NT-NotationType
// `[58] NotationType ::= 'NOTATION' S '(' S? Name (S? '|' S? Name)* S? ')'`
// [VC: Notation Attributes] [VC: One Notation Per Element Type] [VC: No Notation on Empty Element] [VC: No Duplicate Tokens]
var NotationType = reg('NOTATION', S, /\(/, S_OPT, Name, regg(S_OPT, /\|/, S_OPT, Name), '*', S_OPT, /\)/);
// https://www.w3.org/TR/xml11/#NT-Enumeration
// `[59] Enumeration ::= '(' S? Nmtoken (S? '|' S? Nmtoken)* S? ')'`
// [VC: Enumeration] [VC: No Duplicate Tokens]
var Enumeration = reg(/\(/, S_OPT, Nmtoken, regg(S_OPT, /\|/, S_OPT, Nmtoken), '*', S_OPT, /\)/);

// https://www.w3.org/TR/xml11/#NT-EnumeratedType
// `[57] EnumeratedType ::= NotationType | Enumeration`
var EnumeratedType = regg(NotationType, '|', Enumeration);

/*
```
[55] StringType ::= 'CDATA'
[56] TokenizedType ::= 'ID' [VC: ID] [VC: One ID per Element Type] [VC: ID Attribute Default]
   | 'IDREF' [VC: IDREF]
   | 'IDREFS' [VC: IDREF]
	 | 'ENTITY' [VC: Entity Name]
	 | 'ENTITIES' [VC: Entity Name]
	 | 'NMTOKEN' [VC: Name Token]
	 | 'NMTOKENS' [VC: Name Token]
 [54] AttType ::= StringType | TokenizedType | EnumeratedType
```*/
var AttType = regg(/CDATA|ID|IDREF|IDREFS|ENTITY|ENTITIES|NMTOKEN|NMTOKENS/, '|', EnumeratedType);

// `[60] DefaultDecl ::= '#REQUIRED' | '#IMPLIED' | (('#FIXED' S)? AttValue)`
// [WFC: No < in Attribute Values] [WFC: No External Entity References]
// [VC: Fixed Attribute Default] [VC: Required Attribute] [VC: Attribute Default Value Syntactically Correct]
var DefaultDecl = regg(/#REQUIRED|#IMPLIED/, '|', regg(regg('#FIXED', S), '?', AttValue));

// https://www.w3.org/TR/xml11/#NT-AttDef
// [53] AttDef ::= S Name S AttType S DefaultDecl
// https://www.w3.org/TR/xml-names/#NT-AttDef
// [1] NSAttName ::= PrefixedAttName | DefaultAttName
// [2] PrefixedAttName ::= 'xmlns:' NCName [NSC: Reserved Prefixes and Namespace Names]
// [3] DefaultAttName ::= 'xmlns'
// [21] AttDef ::= S (QName | NSAttName) S AttType S DefaultDecl
// 						 === S Name S AttType S DefaultDecl
// xmldom is not distinguishing between QName and NSAttName on this level
// to support XML without namespaces in DTD we can not restrict it to QName
var AttDef = regg(S, Name, S, AttType, S, DefaultDecl);

var ATTLIST_DECL_START = '<!ATTLIST';
// https://www.w3.org/TR/xml11/#NT-AttlistDecl
// `[52] AttlistDecl ::= '<!ATTLIST' S Name AttDef* S? '>'`
// https://www.w3.org/TR/xml-names/#NT-AttlistDecl
// `[20] AttlistDecl ::= '<!ATTLIST' S QName AttDef* S? '>'`
// to support XML without namespaces in DTD we can not restrict it to QName
var AttlistDecl = reg(ATTLIST_DECL_START, S, Name, AttDef, '*', S_OPT, '>');

var SYSTEM = 'SYSTEM';
var PUBLIC = 'PUBLIC';
// https://www.w3.org/TR/xml11/#NT-ExternalID
// `[75] ExternalID ::= 'SYSTEM' S SystemLiteral | 'PUBLIC' S PubidLiteral S SystemLiteral`
var ExternalID = regg(regg(SYSTEM, S, SystemLiteral), '|', regg(PUBLIC, S, PubidLiteral, S, SystemLiteral));
var ExternalID_match = reg(
	'^',
	regg(
		regg(SYSTEM, S, '(?<SystemLiteralOnly>', SystemLiteral, ')'),
		'|',
		regg(PUBLIC, S, '(?<PubidLiteral>', PubidLiteral, ')', S, '(?<SystemLiteral>', SystemLiteral, ')')
	)
);

// https://www.w3.org/TR/xml11/#NT-NDataDecl
// `[76] NDataDecl ::= S 'NDATA' S Name` [VC: Notation Declared]
var NDataDecl = regg(S, 'NDATA', S, Name);

// https://www.w3.org/TR/xml11/#NT-EntityDef
// `[73] EntityDef ::= EntityValue | (ExternalID NDataDecl?)`
var EntityDef = regg(EntityValue, '|', regg(ExternalID, NDataDecl, '?'));

var ENTITY_DECL_START = '<!ENTITY';
// https://www.w3.org/TR/xml11/#NT-GEDecl
// `[71] GEDecl ::= '<!ENTITY' S Name S EntityDef S? '>'`
var GEDecl = reg(ENTITY_DECL_START, S, Name, S, EntityDef, S_OPT, '>');
// https://www.w3.org/TR/xml11/#NT-PEDef
// `[74] PEDef ::= EntityValue | ExternalID`
var PEDef = regg(EntityValue, '|', ExternalID);
// https://www.w3.org/TR/xml11/#NT-PEDecl
// `[72] PEDecl ::= '<!ENTITY' S '%' S Name S PEDef S? '>'`
var PEDecl = reg(ENTITY_DECL_START, S, '%', S, Name, S, PEDef, S_OPT, '>');
// https://www.w3.org/TR/xml11/#NT-EntityDecl
// `[70] EntityDecl ::= GEDecl | PEDecl`
var EntityDecl = regg(GEDecl, '|', PEDecl);

// https://www.w3.org/TR/xml11/#NT-PublicID
// `[83] PublicID    ::= 'PUBLIC' S PubidLiteral`
var PublicID = reg(PUBLIC, S, PubidLiteral);
// https://www.w3.org/TR/xml11/#NT-NotationDecl
// `[82] NotationDecl    ::= '<!NOTATION' S Name S (ExternalID | PublicID) S? '>'` [VC: Unique Notation Name]
var NotationDecl = reg('<!NOTATION', S, Name, S, regg(ExternalID, '|', PublicID), S_OPT, '>');

// https://www.w3.org/TR/xml11/#NT-Eq
// `[25] Eq ::= S? '=' S?`
var Eq = reg(S_OPT, '=', S_OPT);
// https://www.w3.org/TR/xml/#NT-VersionNum
// `[26] VersionNum ::= '1.' [0-9]+`
// https://www.w3.org/TR/xml11/#NT-VersionNum
// `[26] VersionNum ::= '1.1'`
var VersionNum = /1[.]\d+/;
// https://www.w3.org/TR/xml11/#NT-VersionInfo
// `[24] VersionInfo ::= S 'version' Eq ("'" VersionNum "'" | '"' VersionNum '"')`
var VersionInfo = reg(S, 'version', Eq, regg("'", VersionNum, "'", '|', '"', VersionNum, '"'));
// https://www.w3.org/TR/xml11/#NT-EncName
// `[81] EncName ::= [A-Za-z] ([A-Za-z0-9._] | '-')*`
var EncName = /[A-Za-z][-A-Za-z0-9._]*/;
// https://www.w3.org/TR/xml11/#NT-EncDecl
// `[80] EncodingDecl ::= S 'encoding' Eq ('"' EncName '"' | "'" EncName "'" )`
var EncodingDecl = regg(S, 'encoding', Eq, regg('"', EncName, '"', '|', "'", EncName, "'"));
// https://www.w3.org/TR/xml11/#NT-SDDecl
// `[32] SDDecl ::= S 'standalone' Eq (("'" ('yes' | 'no') "'") | ('"' ('yes' | 'no') '"'))`
var SDDecl = regg(S, 'standalone', Eq, regg("'", regg('yes', '|', 'no'), "'", '|', '"', regg('yes', '|', 'no'), '"'));
// https://www.w3.org/TR/xml11/#NT-XMLDecl
// [23] XMLDecl ::= '<?xml' VersionInfo EncodingDecl? SDDecl? S? '?>'
var XMLDecl = reg(/^<\?xml/, VersionInfo, EncodingDecl, '?', SDDecl, '?', S_OPT, /\?>/);

/*
 https://www.w3.org/TR/xml/#NT-markupdecl
 https://www.w3.org/TR/xml11/#NT-markupdecl
 `[29] markupdecl ::= elementdecl | AttlistDecl | EntityDecl | NotationDecl | PI | Comment`
 var markupdecl = regg(elementdecl, '|', AttlistDecl, '|', EntityDecl, '|', NotationDecl, '|', PI_unsafe, '|', Comment);
*/
/*
 https://www.w3.org/TR/xml-names/#NT-doctypedecl
`[28a] DeclSep   ::= PEReference | S`
 https://www.w3.org/TR/xml11/#NT-intSubset
```
 [28b] intSubset ::= (markupdecl | DeclSep)*
                 === (markupdecl | PEReference | S)*
```
 [WFC: PE Between Declarations]
 var intSubset = reg(regg(markupdecl, '|', PEReference, '|', S), '*');
*/
var DOCTYPE_DECL_START = '<!DOCTYPE';
/*
 https://www.w3.org/TR/xml11/#NT-doctypedecl
 `[28] doctypedecl ::= '<!DOCTYPE' S Name (S ExternalID)? S? ('[' intSubset ']' S?)? '>'`
 https://www.afterwardsw3.org/TR/xml-names/#NT-doctypedecl
 `[16] doctypedecl ::= '<!DOCTYPE' S QName (S ExternalID)? S? ('[' (markupdecl | PEReference | S)* ']' S?)? '>'`
 var doctypedecl = reg('<!DOCTYPE', S, Name, regg(S, ExternalID), '?', S_OPT, regg(/\[/, intSubset, /]/, S_OPT), '?', '>');
*/

var CDATA_START = '<![CDATA[';
var CDATA_END = ']]>';
var CDStart = /<!\[CDATA\[/;
var CDEnd = /\]\]>/;
var CData = reg(Char, '*?', CDEnd);
/*
 https://www.w3.org/TR/xml/#dt-cdsection
 `[18]   	CDSect	   ::=   	CDStart CData CDEnd`
 `[19]   	CDStart	   ::=   	'<![CDATA['`
 `[20]   	CData	   ::=   	(Char* - (Char* ']]>' Char*))`
 `[21]   	CDEnd	   ::=   	']]>'`
*/
var CDSect = reg(CDStart, CData);

// unit tested
exports.chars = chars;
exports.chars_without = chars_without;
exports.detectUnicodeSupport = detectUnicodeSupport;
exports.reg = reg;
exports.regg = regg;
exports.AttlistDecl = AttlistDecl;
exports.CDATA_START = CDATA_START;
exports.CDATA_END = CDATA_END;
exports.CDSect = CDSect;
exports.Char = Char;
exports.Comment = Comment;
exports.COMMENT_START = COMMENT_START;
exports.COMMENT_END = COMMENT_END;
exports.DOCTYPE_DECL_START = DOCTYPE_DECL_START;
exports.elementdecl = elementdecl;
exports.EntityDecl = EntityDecl;
exports.EntityValue = EntityValue;
exports.ExternalID = ExternalID;
exports.ExternalID_match = ExternalID_match;
exports.Name = Name;
exports.NotationDecl = NotationDecl;
exports.Reference = Reference;
exports.PEReference = PEReference;
exports.PI = PI;
exports.PUBLIC = PUBLIC;
exports.PubidLiteral = PubidLiteral;
exports.QName = QName;
exports.QName_exact = QName_exact;
exports.QName_group = QName_group;
exports.S = S;
exports.SChar_s = SChar_s;
exports.S_OPT = S_OPT;
exports.SYSTEM = SYSTEM;
exports.SystemLiteral = SystemLiteral;
exports.UNICODE_REPLACEMENT_CHARACTER = UNICODE_REPLACEMENT_CHARACTER;
exports.UNICODE_SUPPORT = UNICODE_SUPPORT;
exports.XMLDecl = XMLDecl;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var conventions = __webpack_require__(16);
var dom = __webpack_require__(18);
var errors = __webpack_require__(17);
var entities = __webpack_require__(21);
var sax = __webpack_require__(22);

var DOMImplementation = dom.DOMImplementation;

var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
var isHTMLMimeType = conventions.isHTMLMimeType;
var isValidMimeType = conventions.isValidMimeType;
var MIME_TYPE = conventions.MIME_TYPE;
var NAMESPACE = conventions.NAMESPACE;
var ParseError = errors.ParseError;

var XMLReader = sax.XMLReader;

/**
 * Normalizes line ending according to <https://www.w3.org/TR/xml11/#sec-line-ends>:
 *
 * > XML parsed entities are often stored in computer files which,
 * > for editing convenience, are organized into lines.
 * > These lines are typically separated by some combination
 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
 * >
 * > To simplify the tasks of applications, the XML processor must behave
 * > as if it normalized all line breaks in external parsed entities (including the document entity)
 * > on input, before parsing, by translating all of the following to a single #xA character:
 * >
 * > 1. the two-character sequence #xD #xA,
 * > 2. the two-character sequence #xD #x85,
 * > 3. the single character #x85,
 * > 4. the single character #x2028,
 * > 5. any #xD character that is not immediately followed by #xA or #x85.
 *
 * @param {string} input
 * @returns {string}
 * @prettierignore
 */
function normalizeLineEndings(input) {
	return input.replace(/\r[\n\u0085]/g, '\n').replace(/[\r\u0085\u2028]/g, '\n');
}

/**
 * @typedef Locator
 * @property {number} [columnNumber]
 * @property {number} [lineNumber]
 */

/**
 * @typedef DOMParserOptions
 * @property {typeof assign} [assign]
 * The method to use instead of `conventions.assign`, which is used to copy values from
 * `options` before they are used for parsing.
 * @property {typeof DOMHandler} [domHandler]
 * For internal testing: The class for creating an instance for handling events from the SAX
 * parser.
 * *****Warning: By configuring a faulty implementation, the specified behavior can completely
 * be broken.*****.
 * @property {Function} [errorHandler]
 * DEPRECATED! use `onError` instead.
 * @property {function(level:ErrorLevel, message:string, context: DOMHandler):void}
 * [onError]
 * A function that is invoked for every error that occurs during parsing.
 *
 * If it is not provided, all errors are reported to `console.error`
 * and only `fatalError`s are thrown as a `ParseError`,
 * which prevents any further processing.
 * If the provided method throws, a `ParserError` is thrown,
 * which prevents any further processing.
 *
 * Be aware that many `warning`s are considered an error that prevents further processing in
 * most implementations.
 * @property {boolean} [locator=true]
 * Configures if the nodes created during parsing will have a `lineNumber` and a `columnNumber`
 * attribute describing their location in the XML string.
 * Default is true.
 * @property {(string) => string} [normalizeLineEndings]
 * used to replace line endings before parsing, defaults to `normalizeLineEndings`
 * @property {Object} [xmlns]
 * The XML namespaces that should be assumed when parsing.
 * The default namespace can be provided by the key that is the empty string.
 * When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
 * the default namespace that will be used,
 * will be overridden according to the specification.
 * @see {@link normalizeLineEndings}
 */

/**
 * The DOMParser interface provides the ability to parse XML or HTML source code from a string
 * into a DOM `Document`.
 *
 * ***xmldom is different from the spec in that it allows an `options` parameter,
 * to control the behavior***.
 *
 * @class
 * @param {DOMParserOptions} [options]
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
 */
function DOMParser(options) {
	options = options || { locator: true };

	/**
	 * The method to use instead of `conventions.assign`, which is used to copy values from
	 * `options`
	 * before they are used for parsing.
	 *
	 * @type {conventions.assign}
	 * @private
	 * @see {@link conventions.assign}
	 * @readonly
	 */
	this.assign = options.assign || conventions.assign;

	/**
	 * For internal testing: The class for creating an instance for handling events from the SAX
	 * parser.
	 * *****Warning: By configuring a faulty implementation, the specified behavior can completely
	 * be broken*****.
	 *
	 * @type {typeof DOMHandler}
	 * @private
	 * @readonly
	 */
	this.domHandler = options.domHandler || DOMHandler;

	/**
	 * A function that is invoked for every error that occurs during parsing.
	 *
	 * If it is not provided, all errors are reported to `console.error`
	 * and only `fatalError`s are thrown as a `ParseError`,
	 * which prevents any further processing.
	 * If the provided method throws, a `ParserError` is thrown,
	 * which prevents any further processing.
	 *
	 * Be aware that many `warning`s are considered an error that prevents further processing in
	 * most implementations.
	 *
	 * @type {function(level:ErrorLevel, message:string, context: DOMHandler):void}
	 * @see {@link onErrorStopParsing}
	 * @see {@link onWarningStopParsing}
	 */
	this.onError = options.onError || options.errorHandler;
	if (options.errorHandler && typeof options.errorHandler !== 'function') {
		throw new TypeError('errorHandler object is no longer supported, switch to onError!');
	} else if (options.errorHandler) {
		options.errorHandler('warning', 'The `errorHandler` option has been deprecated, use `onError` instead!', this);
	}

	/**
	 * used to replace line endings before parsing, defaults to `normalizeLineEndings`
	 *
	 * @type {(string) => string}
	 * @readonly
	 */
	this.normalizeLineEndings = options.normalizeLineEndings || normalizeLineEndings;

	/**
	 * Configures if the nodes created during parsing will have a `lineNumber` and a
	 * `columnNumber`
	 * attribute describing their location in the XML string.
	 * Default is true.
	 *
	 * @type {boolean}
	 * @readonly
	 */
	this.locator = !!options.locator;

	/**
	 * The default namespace can be provided by the key that is the empty string.
	 * When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
	 * the default namespace that will be used,
	 * will be overridden according to the specification.
	 *
	 * @type {Readonly<Object>}
	 * @readonly
	 */
	this.xmlns = this.assign(Object.create(null), options.xmlns);
}

/**
 * Parses `source` using the options in the way configured by the `DOMParserOptions` of `this`
 * `DOMParser`. If `mimeType` is `text/html` an HTML `Document` is created,
 * otherwise an XML `Document` is created.
 *
 * __It behaves different from the description in the living standard__:
 * - Uses the `options` passed to the `DOMParser` constructor to modify the behavior.
 * - Any unexpected input is reported to `onError` with either a `warning`,
 * `error` or `fatalError` level.
 * - Any `fatalError` throws a `ParseError` which prevents further processing.
 * - Any error thrown by `onError` is converted to a `ParseError` which prevents further
 * processing - If no `Document` was created during parsing it is reported as a `fatalError`.
 * *****Warning: By configuring a faulty DOMHandler implementation,
 * the specified behavior can completely be broken*****.
 *
 * @param {string} source
 * The XML mime type only allows string input!
 * @param {string} [mimeType='application/xml']
 * the mimeType or contentType of the document to be created determines the `type` of document
 * created (XML or HTML)
 * @returns {Document}
 * The `Document` node.
 * @throws {ParseError}
 * for any `fatalError` or anything that is thrown by `onError`
 * @throws {TypeError}
 * for any invalid `mimeType`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
 * @see https://html.spec.whatwg.org/#dom-domparser-parsefromstring-dev
 */
DOMParser.prototype.parseFromString = function (source, mimeType) {
	if (!isValidMimeType(mimeType)) {
		throw new TypeError('DOMParser.parseFromString: the provided mimeType "' + mimeType + '" is not valid.');
	}
	var defaultNSMap = this.assign(Object.create(null), this.xmlns);
	var entityMap = entities.XML_ENTITIES;
	var defaultNamespace = defaultNSMap[''] || null;
	if (hasDefaultHTMLNamespace(mimeType)) {
		entityMap = entities.HTML_ENTITIES;
		defaultNamespace = NAMESPACE.HTML;
	} else if (mimeType === MIME_TYPE.XML_SVG_IMAGE) {
		defaultNamespace = NAMESPACE.SVG;
	}
	defaultNSMap[''] = defaultNamespace;
	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;

	var domBuilder = new this.domHandler({
		mimeType: mimeType,
		defaultNamespace: defaultNamespace,
		onError: this.onError,
	});
	var locator = this.locator ? {} : undefined;
	if (this.locator) {
		domBuilder.setDocumentLocator(locator);
	}

	var sax = new XMLReader();
	sax.errorHandler = domBuilder;
	sax.domBuilder = domBuilder;
	var isXml = !conventions.isHTMLMimeType(mimeType);
	if (isXml && typeof source !== 'string') {
		sax.errorHandler.fatalError('source is not a string');
	}
	sax.parse(this.normalizeLineEndings(String(source)), defaultNSMap, entityMap);
	if (!domBuilder.doc.documentElement) {
		sax.errorHandler.fatalError('missing root element');
	}
	return domBuilder.doc;
};

/**
 * @typedef DOMHandlerOptions
 * @property {string} [mimeType=MIME_TYPE.XML_APPLICATION]
 * @property {string | null} [defaultNamespace=null]
 */
/**
 * The class that is used to handle events from the SAX parser to create the related DOM
 * elements.
 *
 * Some methods are only implemented as an empty function,
 * since they are (at least currently) not relevant for xmldom.
 *
 * @class
 * @param {DOMHandlerOptions} [options]
 * @see http://www.saxproject.org/apidoc/org/xml/sax/ext/DefaultHandler2.html
 */
function DOMHandler(options) {
	var opt = options || {};
	/**
	 * The mime type is used to determine if the DOM handler will create an XML or HTML document.
	 * Only if it is set to `text/html` it will create an HTML document.
	 * It defaults to MIME_TYPE.XML_APPLICATION.
	 *
	 * @type {string}
	 * @see {@link MIME_TYPE}
	 * @readonly
	 */
	this.mimeType = opt.mimeType || MIME_TYPE.XML_APPLICATION;

	/**
	 * The namespace to use to create an XML document.
	 * For the following reasons this is required:
	 * - The SAX API for `startDocument` doesn't offer any way to pass a namespace,
	 * since at that point there is no way for the parser to know what the default namespace from
	 * the document will be.
	 * - When creating using `DOMImplementation.createDocument` it is required to pass a
	 * namespace,
	 * to determine the correct `Document.contentType`, which should match `this.mimeType`.
	 * - When parsing an XML document with the `application/xhtml+xml` mimeType,
	 * the HTML namespace needs to be the default namespace.
	 *
	 * @type {string | null}
	 * @private
	 * @readonly
	 */
	this.defaultNamespace = opt.defaultNamespace || null;

	/**
	 * @type {boolean}
	 * @private
	 */
	this.cdata = false;

	/**
	 * The last `Element` that was created by `startElement`.
	 * `endElement` sets it to the `currentElement.parentNode`.
	 *
	 * Note: The sax parser currently sets it to white space text nodes between tags.
	 *
	 * @type {Element | Node | undefined}
	 * @private
	 */
	this.currentElement = undefined;

	/**
	 * The Document that is created as part of `startDocument`,
	 * and returned by `DOMParser.parseFromString`.
	 *
	 * @type {Document | undefined}
	 * @readonly
	 */
	this.doc = undefined;

	/**
	 * The locator is stored as part of setDocumentLocator.
	 * It is controlled and mutated by the SAX parser to store the current parsing position.
	 * It is used by DOMHandler to set `columnNumber` and `lineNumber`
	 * on the DOM nodes.
	 *
	 * @type {Readonly<Locator> | undefined}
	 * @private
	 * @readonly (the
	 * sax parser currently sometimes set's it)
	 */
	this.locator = undefined;
	/**
	 * @type {function (level:ErrorLevel ,message:string, context:DOMHandler):void}
	 * @readonly
	 */
	this.onError = opt.onError;
}

function position(locator, node) {
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}

DOMHandler.prototype = {
	/**
	 * Either creates an XML or an HTML document and stores it under `this.doc`.
	 * If it is an XML document, `this.defaultNamespace` is used to create it,
	 * and it will not contain any `childNodes`.
	 * If it is an HTML document, it will be created without any `childNodes`.
	 *
	 * @see http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
	 */
	startDocument: function () {
		var impl = new DOMImplementation();
		this.doc = isHTMLMimeType(this.mimeType) ? impl.createHTMLDocument(false) : impl.createDocument(this.defaultNamespace, '');
	},
	startElement: function (namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
		var el = doc.createElementNS(namespaceURI, qName || localName);
		var len = attrs.length;
		appendElement(this, el);
		this.currentElement = el;

		this.locator && position(this.locator, el);
		for (var i = 0; i < len; i++) {
			var namespaceURI = attrs.getURI(i);
			var value = attrs.getValue(i);
			var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator && position(attrs.getLocator(i), attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr);
		}
	},
	endElement: function (namespaceURI, localName, qName) {
		this.currentElement = this.currentElement.parentNode;
	},
	startPrefixMapping: function (prefix, uri) {},
	endPrefixMapping: function (prefix) {},
	processingInstruction: function (target, data) {
		var ins = this.doc.createProcessingInstruction(target, data);
		this.locator && position(this.locator, ins);
		appendElement(this, ins);
	},
	ignorableWhitespace: function (ch, start, length) {},
	characters: function (chars, start, length) {
		chars = _toString.apply(this, arguments);
		//console.log(chars)
		if (chars) {
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if (this.currentElement) {
				this.currentElement.appendChild(charNode);
			} else if (/^\s*$/.test(chars)) {
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator, charNode);
		}
	},
	skippedEntity: function (name) {},
	endDocument: function () {
		this.doc.normalize();
	},
	/**
	 * Stores the locator to be able to set the `columnNumber` and `lineNumber`
	 * on the created DOM nodes.
	 *
	 * @param {Locator} locator
	 */
	setDocumentLocator: function (locator) {
		if (locator) {
			locator.lineNumber = 0;
		}
		this.locator = locator;
	},
	//LexicalHandler
	comment: function (chars, start, length) {
		chars = _toString.apply(this, arguments);
		var comm = this.doc.createComment(chars);
		this.locator && position(this.locator, comm);
		appendElement(this, comm);
	},

	startCDATA: function () {
		//used in characters() methods
		this.cdata = true;
	},
	endCDATA: function () {
		this.cdata = false;
	},

	startDTD: function (name, publicId, systemId, internalSubset) {
		var impl = this.doc.implementation;
		if (impl && impl.createDocumentType) {
			var dt = impl.createDocumentType(name, publicId, systemId, internalSubset);
			this.locator && position(this.locator, dt);
			appendElement(this, dt);
			this.doc.doctype = dt;
		}
	},
	reportError: function (level, message) {
		if (typeof this.onError === 'function') {
			try {
				this.onError(level, message, this);
			} catch (e) {
				throw new ParseError('Reporting ' + level + ' "' + message + '" caused ' + e, this.locator);
			}
		} else {
			console.error('[xmldom ' + level + ']\t' + message, _locator(this.locator));
		}
	},
	/**
	 * @see http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning: function (message) {
		this.reportError('warning', message);
	},
	error: function (message) {
		this.reportError('error', message);
	},
	/**
	 * This function reports a fatal error and throws a ParseError.
	 *
	 * @param {string} message
	 * - The message to be used for reporting and throwing the error.
	 * @returns {never}
	 * This function always throws an error and never returns a value.
	 * @throws {ParseError}
	 * Always throws a ParseError with the provided message.
	 */
	fatalError: function (message) {
		this.reportError('fatalError', message);
		throw new ParseError(message, this.locator);
	},
};

function _locator(l) {
	if (l) {
		return '\n@#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
	}
}

function _toString(chars, start, length) {
	if (typeof chars == 'string') {
		return chars.substr(start, length);
	} else {
		//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if (chars.length >= start + length || start) {
			return new java.lang.String(chars, start, length) + '';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'.replace(
	/\w+/g,
	function (key) {
		DOMHandler.prototype[key] = function () {
			return null;
		};
	}
);

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement(handler, node) {
	if (!handler.currentElement) {
		handler.doc.appendChild(node);
	} else {
		handler.currentElement.appendChild(node);
	}
}

/**
 * A method that prevents any further parsing when an `error`
 * with level `error` is reported during parsing.
 *
 * @see {@link DOMParserOptions.onError}
 * @see {@link onWarningStopParsing}
 */
function onErrorStopParsing(level) {
	if (level === 'error') throw 'onErrorStopParsing';
}

/**
 * A method that prevents any further parsing when any `error` is reported during parsing.
 *
 * @see {@link DOMParserOptions.onError}
 * @see {@link onErrorStopParsing}
 */
function onWarningStopParsing() {
	throw 'onWarningStopParsing';
}

exports.__DOMHandler = DOMHandler;
exports.DOMParser = DOMParser;
exports.normalizeLineEndings = normalizeLineEndings;
exports.onErrorStopParsing = onErrorStopParsing;
exports.onWarningStopParsing = onWarningStopParsing;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var freeze = __webpack_require__(16).freeze;

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML
 *      Wikipedia
 */
exports.XML_ENTITIES = freeze({
	amp: '&',
	apos: "'",
	gt: '>',
	lt: '<',
	quot: '"',
});

/**
 * A map of all entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see {@link XML_ENTITIES}
 * @see {@link DOMParser.parseFromString}
 * @see {@link DOMImplementation.prototype.createHTMLDocument}
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5)
 *      Spec
 * @see https://html.spec.whatwg.org/entities.json JSON
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML
 *      Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML
 *      Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
	Aacute: '\u00C1',
	aacute: '\u00E1',
	Abreve: '\u0102',
	abreve: '\u0103',
	ac: '\u223E',
	acd: '\u223F',
	acE: '\u223E\u0333',
	Acirc: '\u00C2',
	acirc: '\u00E2',
	acute: '\u00B4',
	Acy: '\u0410',
	acy: '\u0430',
	AElig: '\u00C6',
	aelig: '\u00E6',
	af: '\u2061',
	Afr: '\uD835\uDD04',
	afr: '\uD835\uDD1E',
	Agrave: '\u00C0',
	agrave: '\u00E0',
	alefsym: '\u2135',
	aleph: '\u2135',
	Alpha: '\u0391',
	alpha: '\u03B1',
	Amacr: '\u0100',
	amacr: '\u0101',
	amalg: '\u2A3F',
	AMP: '\u0026',
	amp: '\u0026',
	And: '\u2A53',
	and: '\u2227',
	andand: '\u2A55',
	andd: '\u2A5C',
	andslope: '\u2A58',
	andv: '\u2A5A',
	ang: '\u2220',
	ange: '\u29A4',
	angle: '\u2220',
	angmsd: '\u2221',
	angmsdaa: '\u29A8',
	angmsdab: '\u29A9',
	angmsdac: '\u29AA',
	angmsdad: '\u29AB',
	angmsdae: '\u29AC',
	angmsdaf: '\u29AD',
	angmsdag: '\u29AE',
	angmsdah: '\u29AF',
	angrt: '\u221F',
	angrtvb: '\u22BE',
	angrtvbd: '\u299D',
	angsph: '\u2222',
	angst: '\u00C5',
	angzarr: '\u237C',
	Aogon: '\u0104',
	aogon: '\u0105',
	Aopf: '\uD835\uDD38',
	aopf: '\uD835\uDD52',
	ap: '\u2248',
	apacir: '\u2A6F',
	apE: '\u2A70',
	ape: '\u224A',
	apid: '\u224B',
	apos: '\u0027',
	ApplyFunction: '\u2061',
	approx: '\u2248',
	approxeq: '\u224A',
	Aring: '\u00C5',
	aring: '\u00E5',
	Ascr: '\uD835\uDC9C',
	ascr: '\uD835\uDCB6',
	Assign: '\u2254',
	ast: '\u002A',
	asymp: '\u2248',
	asympeq: '\u224D',
	Atilde: '\u00C3',
	atilde: '\u00E3',
	Auml: '\u00C4',
	auml: '\u00E4',
	awconint: '\u2233',
	awint: '\u2A11',
	backcong: '\u224C',
	backepsilon: '\u03F6',
	backprime: '\u2035',
	backsim: '\u223D',
	backsimeq: '\u22CD',
	Backslash: '\u2216',
	Barv: '\u2AE7',
	barvee: '\u22BD',
	Barwed: '\u2306',
	barwed: '\u2305',
	barwedge: '\u2305',
	bbrk: '\u23B5',
	bbrktbrk: '\u23B6',
	bcong: '\u224C',
	Bcy: '\u0411',
	bcy: '\u0431',
	bdquo: '\u201E',
	becaus: '\u2235',
	Because: '\u2235',
	because: '\u2235',
	bemptyv: '\u29B0',
	bepsi: '\u03F6',
	bernou: '\u212C',
	Bernoullis: '\u212C',
	Beta: '\u0392',
	beta: '\u03B2',
	beth: '\u2136',
	between: '\u226C',
	Bfr: '\uD835\uDD05',
	bfr: '\uD835\uDD1F',
	bigcap: '\u22C2',
	bigcirc: '\u25EF',
	bigcup: '\u22C3',
	bigodot: '\u2A00',
	bigoplus: '\u2A01',
	bigotimes: '\u2A02',
	bigsqcup: '\u2A06',
	bigstar: '\u2605',
	bigtriangledown: '\u25BD',
	bigtriangleup: '\u25B3',
	biguplus: '\u2A04',
	bigvee: '\u22C1',
	bigwedge: '\u22C0',
	bkarow: '\u290D',
	blacklozenge: '\u29EB',
	blacksquare: '\u25AA',
	blacktriangle: '\u25B4',
	blacktriangledown: '\u25BE',
	blacktriangleleft: '\u25C2',
	blacktriangleright: '\u25B8',
	blank: '\u2423',
	blk12: '\u2592',
	blk14: '\u2591',
	blk34: '\u2593',
	block: '\u2588',
	bne: '\u003D\u20E5',
	bnequiv: '\u2261\u20E5',
	bNot: '\u2AED',
	bnot: '\u2310',
	Bopf: '\uD835\uDD39',
	bopf: '\uD835\uDD53',
	bot: '\u22A5',
	bottom: '\u22A5',
	bowtie: '\u22C8',
	boxbox: '\u29C9',
	boxDL: '\u2557',
	boxDl: '\u2556',
	boxdL: '\u2555',
	boxdl: '\u2510',
	boxDR: '\u2554',
	boxDr: '\u2553',
	boxdR: '\u2552',
	boxdr: '\u250C',
	boxH: '\u2550',
	boxh: '\u2500',
	boxHD: '\u2566',
	boxHd: '\u2564',
	boxhD: '\u2565',
	boxhd: '\u252C',
	boxHU: '\u2569',
	boxHu: '\u2567',
	boxhU: '\u2568',
	boxhu: '\u2534',
	boxminus: '\u229F',
	boxplus: '\u229E',
	boxtimes: '\u22A0',
	boxUL: '\u255D',
	boxUl: '\u255C',
	boxuL: '\u255B',
	boxul: '\u2518',
	boxUR: '\u255A',
	boxUr: '\u2559',
	boxuR: '\u2558',
	boxur: '\u2514',
	boxV: '\u2551',
	boxv: '\u2502',
	boxVH: '\u256C',
	boxVh: '\u256B',
	boxvH: '\u256A',
	boxvh: '\u253C',
	boxVL: '\u2563',
	boxVl: '\u2562',
	boxvL: '\u2561',
	boxvl: '\u2524',
	boxVR: '\u2560',
	boxVr: '\u255F',
	boxvR: '\u255E',
	boxvr: '\u251C',
	bprime: '\u2035',
	Breve: '\u02D8',
	breve: '\u02D8',
	brvbar: '\u00A6',
	Bscr: '\u212C',
	bscr: '\uD835\uDCB7',
	bsemi: '\u204F',
	bsim: '\u223D',
	bsime: '\u22CD',
	bsol: '\u005C',
	bsolb: '\u29C5',
	bsolhsub: '\u27C8',
	bull: '\u2022',
	bullet: '\u2022',
	bump: '\u224E',
	bumpE: '\u2AAE',
	bumpe: '\u224F',
	Bumpeq: '\u224E',
	bumpeq: '\u224F',
	Cacute: '\u0106',
	cacute: '\u0107',
	Cap: '\u22D2',
	cap: '\u2229',
	capand: '\u2A44',
	capbrcup: '\u2A49',
	capcap: '\u2A4B',
	capcup: '\u2A47',
	capdot: '\u2A40',
	CapitalDifferentialD: '\u2145',
	caps: '\u2229\uFE00',
	caret: '\u2041',
	caron: '\u02C7',
	Cayleys: '\u212D',
	ccaps: '\u2A4D',
	Ccaron: '\u010C',
	ccaron: '\u010D',
	Ccedil: '\u00C7',
	ccedil: '\u00E7',
	Ccirc: '\u0108',
	ccirc: '\u0109',
	Cconint: '\u2230',
	ccups: '\u2A4C',
	ccupssm: '\u2A50',
	Cdot: '\u010A',
	cdot: '\u010B',
	cedil: '\u00B8',
	Cedilla: '\u00B8',
	cemptyv: '\u29B2',
	cent: '\u00A2',
	CenterDot: '\u00B7',
	centerdot: '\u00B7',
	Cfr: '\u212D',
	cfr: '\uD835\uDD20',
	CHcy: '\u0427',
	chcy: '\u0447',
	check: '\u2713',
	checkmark: '\u2713',
	Chi: '\u03A7',
	chi: '\u03C7',
	cir: '\u25CB',
	circ: '\u02C6',
	circeq: '\u2257',
	circlearrowleft: '\u21BA',
	circlearrowright: '\u21BB',
	circledast: '\u229B',
	circledcirc: '\u229A',
	circleddash: '\u229D',
	CircleDot: '\u2299',
	circledR: '\u00AE',
	circledS: '\u24C8',
	CircleMinus: '\u2296',
	CirclePlus: '\u2295',
	CircleTimes: '\u2297',
	cirE: '\u29C3',
	cire: '\u2257',
	cirfnint: '\u2A10',
	cirmid: '\u2AEF',
	cirscir: '\u29C2',
	ClockwiseContourIntegral: '\u2232',
	CloseCurlyDoubleQuote: '\u201D',
	CloseCurlyQuote: '\u2019',
	clubs: '\u2663',
	clubsuit: '\u2663',
	Colon: '\u2237',
	colon: '\u003A',
	Colone: '\u2A74',
	colone: '\u2254',
	coloneq: '\u2254',
	comma: '\u002C',
	commat: '\u0040',
	comp: '\u2201',
	compfn: '\u2218',
	complement: '\u2201',
	complexes: '\u2102',
	cong: '\u2245',
	congdot: '\u2A6D',
	Congruent: '\u2261',
	Conint: '\u222F',
	conint: '\u222E',
	ContourIntegral: '\u222E',
	Copf: '\u2102',
	copf: '\uD835\uDD54',
	coprod: '\u2210',
	Coproduct: '\u2210',
	COPY: '\u00A9',
	copy: '\u00A9',
	copysr: '\u2117',
	CounterClockwiseContourIntegral: '\u2233',
	crarr: '\u21B5',
	Cross: '\u2A2F',
	cross: '\u2717',
	Cscr: '\uD835\uDC9E',
	cscr: '\uD835\uDCB8',
	csub: '\u2ACF',
	csube: '\u2AD1',
	csup: '\u2AD0',
	csupe: '\u2AD2',
	ctdot: '\u22EF',
	cudarrl: '\u2938',
	cudarrr: '\u2935',
	cuepr: '\u22DE',
	cuesc: '\u22DF',
	cularr: '\u21B6',
	cularrp: '\u293D',
	Cup: '\u22D3',
	cup: '\u222A',
	cupbrcap: '\u2A48',
	CupCap: '\u224D',
	cupcap: '\u2A46',
	cupcup: '\u2A4A',
	cupdot: '\u228D',
	cupor: '\u2A45',
	cups: '\u222A\uFE00',
	curarr: '\u21B7',
	curarrm: '\u293C',
	curlyeqprec: '\u22DE',
	curlyeqsucc: '\u22DF',
	curlyvee: '\u22CE',
	curlywedge: '\u22CF',
	curren: '\u00A4',
	curvearrowleft: '\u21B6',
	curvearrowright: '\u21B7',
	cuvee: '\u22CE',
	cuwed: '\u22CF',
	cwconint: '\u2232',
	cwint: '\u2231',
	cylcty: '\u232D',
	Dagger: '\u2021',
	dagger: '\u2020',
	daleth: '\u2138',
	Darr: '\u21A1',
	dArr: '\u21D3',
	darr: '\u2193',
	dash: '\u2010',
	Dashv: '\u2AE4',
	dashv: '\u22A3',
	dbkarow: '\u290F',
	dblac: '\u02DD',
	Dcaron: '\u010E',
	dcaron: '\u010F',
	Dcy: '\u0414',
	dcy: '\u0434',
	DD: '\u2145',
	dd: '\u2146',
	ddagger: '\u2021',
	ddarr: '\u21CA',
	DDotrahd: '\u2911',
	ddotseq: '\u2A77',
	deg: '\u00B0',
	Del: '\u2207',
	Delta: '\u0394',
	delta: '\u03B4',
	demptyv: '\u29B1',
	dfisht: '\u297F',
	Dfr: '\uD835\uDD07',
	dfr: '\uD835\uDD21',
	dHar: '\u2965',
	dharl: '\u21C3',
	dharr: '\u21C2',
	DiacriticalAcute: '\u00B4',
	DiacriticalDot: '\u02D9',
	DiacriticalDoubleAcute: '\u02DD',
	DiacriticalGrave: '\u0060',
	DiacriticalTilde: '\u02DC',
	diam: '\u22C4',
	Diamond: '\u22C4',
	diamond: '\u22C4',
	diamondsuit: '\u2666',
	diams: '\u2666',
	die: '\u00A8',
	DifferentialD: '\u2146',
	digamma: '\u03DD',
	disin: '\u22F2',
	div: '\u00F7',
	divide: '\u00F7',
	divideontimes: '\u22C7',
	divonx: '\u22C7',
	DJcy: '\u0402',
	djcy: '\u0452',
	dlcorn: '\u231E',
	dlcrop: '\u230D',
	dollar: '\u0024',
	Dopf: '\uD835\uDD3B',
	dopf: '\uD835\uDD55',
	Dot: '\u00A8',
	dot: '\u02D9',
	DotDot: '\u20DC',
	doteq: '\u2250',
	doteqdot: '\u2251',
	DotEqual: '\u2250',
	dotminus: '\u2238',
	dotplus: '\u2214',
	dotsquare: '\u22A1',
	doublebarwedge: '\u2306',
	DoubleContourIntegral: '\u222F',
	DoubleDot: '\u00A8',
	DoubleDownArrow: '\u21D3',
	DoubleLeftArrow: '\u21D0',
	DoubleLeftRightArrow: '\u21D4',
	DoubleLeftTee: '\u2AE4',
	DoubleLongLeftArrow: '\u27F8',
	DoubleLongLeftRightArrow: '\u27FA',
	DoubleLongRightArrow: '\u27F9',
	DoubleRightArrow: '\u21D2',
	DoubleRightTee: '\u22A8',
	DoubleUpArrow: '\u21D1',
	DoubleUpDownArrow: '\u21D5',
	DoubleVerticalBar: '\u2225',
	DownArrow: '\u2193',
	Downarrow: '\u21D3',
	downarrow: '\u2193',
	DownArrowBar: '\u2913',
	DownArrowUpArrow: '\u21F5',
	DownBreve: '\u0311',
	downdownarrows: '\u21CA',
	downharpoonleft: '\u21C3',
	downharpoonright: '\u21C2',
	DownLeftRightVector: '\u2950',
	DownLeftTeeVector: '\u295E',
	DownLeftVector: '\u21BD',
	DownLeftVectorBar: '\u2956',
	DownRightTeeVector: '\u295F',
	DownRightVector: '\u21C1',
	DownRightVectorBar: '\u2957',
	DownTee: '\u22A4',
	DownTeeArrow: '\u21A7',
	drbkarow: '\u2910',
	drcorn: '\u231F',
	drcrop: '\u230C',
	Dscr: '\uD835\uDC9F',
	dscr: '\uD835\uDCB9',
	DScy: '\u0405',
	dscy: '\u0455',
	dsol: '\u29F6',
	Dstrok: '\u0110',
	dstrok: '\u0111',
	dtdot: '\u22F1',
	dtri: '\u25BF',
	dtrif: '\u25BE',
	duarr: '\u21F5',
	duhar: '\u296F',
	dwangle: '\u29A6',
	DZcy: '\u040F',
	dzcy: '\u045F',
	dzigrarr: '\u27FF',
	Eacute: '\u00C9',
	eacute: '\u00E9',
	easter: '\u2A6E',
	Ecaron: '\u011A',
	ecaron: '\u011B',
	ecir: '\u2256',
	Ecirc: '\u00CA',
	ecirc: '\u00EA',
	ecolon: '\u2255',
	Ecy: '\u042D',
	ecy: '\u044D',
	eDDot: '\u2A77',
	Edot: '\u0116',
	eDot: '\u2251',
	edot: '\u0117',
	ee: '\u2147',
	efDot: '\u2252',
	Efr: '\uD835\uDD08',
	efr: '\uD835\uDD22',
	eg: '\u2A9A',
	Egrave: '\u00C8',
	egrave: '\u00E8',
	egs: '\u2A96',
	egsdot: '\u2A98',
	el: '\u2A99',
	Element: '\u2208',
	elinters: '\u23E7',
	ell: '\u2113',
	els: '\u2A95',
	elsdot: '\u2A97',
	Emacr: '\u0112',
	emacr: '\u0113',
	empty: '\u2205',
	emptyset: '\u2205',
	EmptySmallSquare: '\u25FB',
	emptyv: '\u2205',
	EmptyVerySmallSquare: '\u25AB',
	emsp: '\u2003',
	emsp13: '\u2004',
	emsp14: '\u2005',
	ENG: '\u014A',
	eng: '\u014B',
	ensp: '\u2002',
	Eogon: '\u0118',
	eogon: '\u0119',
	Eopf: '\uD835\uDD3C',
	eopf: '\uD835\uDD56',
	epar: '\u22D5',
	eparsl: '\u29E3',
	eplus: '\u2A71',
	epsi: '\u03B5',
	Epsilon: '\u0395',
	epsilon: '\u03B5',
	epsiv: '\u03F5',
	eqcirc: '\u2256',
	eqcolon: '\u2255',
	eqsim: '\u2242',
	eqslantgtr: '\u2A96',
	eqslantless: '\u2A95',
	Equal: '\u2A75',
	equals: '\u003D',
	EqualTilde: '\u2242',
	equest: '\u225F',
	Equilibrium: '\u21CC',
	equiv: '\u2261',
	equivDD: '\u2A78',
	eqvparsl: '\u29E5',
	erarr: '\u2971',
	erDot: '\u2253',
	Escr: '\u2130',
	escr: '\u212F',
	esdot: '\u2250',
	Esim: '\u2A73',
	esim: '\u2242',
	Eta: '\u0397',
	eta: '\u03B7',
	ETH: '\u00D0',
	eth: '\u00F0',
	Euml: '\u00CB',
	euml: '\u00EB',
	euro: '\u20AC',
	excl: '\u0021',
	exist: '\u2203',
	Exists: '\u2203',
	expectation: '\u2130',
	ExponentialE: '\u2147',
	exponentiale: '\u2147',
	fallingdotseq: '\u2252',
	Fcy: '\u0424',
	fcy: '\u0444',
	female: '\u2640',
	ffilig: '\uFB03',
	fflig: '\uFB00',
	ffllig: '\uFB04',
	Ffr: '\uD835\uDD09',
	ffr: '\uD835\uDD23',
	filig: '\uFB01',
	FilledSmallSquare: '\u25FC',
	FilledVerySmallSquare: '\u25AA',
	fjlig: '\u0066\u006A',
	flat: '\u266D',
	fllig: '\uFB02',
	fltns: '\u25B1',
	fnof: '\u0192',
	Fopf: '\uD835\uDD3D',
	fopf: '\uD835\uDD57',
	ForAll: '\u2200',
	forall: '\u2200',
	fork: '\u22D4',
	forkv: '\u2AD9',
	Fouriertrf: '\u2131',
	fpartint: '\u2A0D',
	frac12: '\u00BD',
	frac13: '\u2153',
	frac14: '\u00BC',
	frac15: '\u2155',
	frac16: '\u2159',
	frac18: '\u215B',
	frac23: '\u2154',
	frac25: '\u2156',
	frac34: '\u00BE',
	frac35: '\u2157',
	frac38: '\u215C',
	frac45: '\u2158',
	frac56: '\u215A',
	frac58: '\u215D',
	frac78: '\u215E',
	frasl: '\u2044',
	frown: '\u2322',
	Fscr: '\u2131',
	fscr: '\uD835\uDCBB',
	gacute: '\u01F5',
	Gamma: '\u0393',
	gamma: '\u03B3',
	Gammad: '\u03DC',
	gammad: '\u03DD',
	gap: '\u2A86',
	Gbreve: '\u011E',
	gbreve: '\u011F',
	Gcedil: '\u0122',
	Gcirc: '\u011C',
	gcirc: '\u011D',
	Gcy: '\u0413',
	gcy: '\u0433',
	Gdot: '\u0120',
	gdot: '\u0121',
	gE: '\u2267',
	ge: '\u2265',
	gEl: '\u2A8C',
	gel: '\u22DB',
	geq: '\u2265',
	geqq: '\u2267',
	geqslant: '\u2A7E',
	ges: '\u2A7E',
	gescc: '\u2AA9',
	gesdot: '\u2A80',
	gesdoto: '\u2A82',
	gesdotol: '\u2A84',
	gesl: '\u22DB\uFE00',
	gesles: '\u2A94',
	Gfr: '\uD835\uDD0A',
	gfr: '\uD835\uDD24',
	Gg: '\u22D9',
	gg: '\u226B',
	ggg: '\u22D9',
	gimel: '\u2137',
	GJcy: '\u0403',
	gjcy: '\u0453',
	gl: '\u2277',
	gla: '\u2AA5',
	glE: '\u2A92',
	glj: '\u2AA4',
	gnap: '\u2A8A',
	gnapprox: '\u2A8A',
	gnE: '\u2269',
	gne: '\u2A88',
	gneq: '\u2A88',
	gneqq: '\u2269',
	gnsim: '\u22E7',
	Gopf: '\uD835\uDD3E',
	gopf: '\uD835\uDD58',
	grave: '\u0060',
	GreaterEqual: '\u2265',
	GreaterEqualLess: '\u22DB',
	GreaterFullEqual: '\u2267',
	GreaterGreater: '\u2AA2',
	GreaterLess: '\u2277',
	GreaterSlantEqual: '\u2A7E',
	GreaterTilde: '\u2273',
	Gscr: '\uD835\uDCA2',
	gscr: '\u210A',
	gsim: '\u2273',
	gsime: '\u2A8E',
	gsiml: '\u2A90',
	Gt: '\u226B',
	GT: '\u003E',
	gt: '\u003E',
	gtcc: '\u2AA7',
	gtcir: '\u2A7A',
	gtdot: '\u22D7',
	gtlPar: '\u2995',
	gtquest: '\u2A7C',
	gtrapprox: '\u2A86',
	gtrarr: '\u2978',
	gtrdot: '\u22D7',
	gtreqless: '\u22DB',
	gtreqqless: '\u2A8C',
	gtrless: '\u2277',
	gtrsim: '\u2273',
	gvertneqq: '\u2269\uFE00',
	gvnE: '\u2269\uFE00',
	Hacek: '\u02C7',
	hairsp: '\u200A',
	half: '\u00BD',
	hamilt: '\u210B',
	HARDcy: '\u042A',
	hardcy: '\u044A',
	hArr: '\u21D4',
	harr: '\u2194',
	harrcir: '\u2948',
	harrw: '\u21AD',
	Hat: '\u005E',
	hbar: '\u210F',
	Hcirc: '\u0124',
	hcirc: '\u0125',
	hearts: '\u2665',
	heartsuit: '\u2665',
	hellip: '\u2026',
	hercon: '\u22B9',
	Hfr: '\u210C',
	hfr: '\uD835\uDD25',
	HilbertSpace: '\u210B',
	hksearow: '\u2925',
	hkswarow: '\u2926',
	hoarr: '\u21FF',
	homtht: '\u223B',
	hookleftarrow: '\u21A9',
	hookrightarrow: '\u21AA',
	Hopf: '\u210D',
	hopf: '\uD835\uDD59',
	horbar: '\u2015',
	HorizontalLine: '\u2500',
	Hscr: '\u210B',
	hscr: '\uD835\uDCBD',
	hslash: '\u210F',
	Hstrok: '\u0126',
	hstrok: '\u0127',
	HumpDownHump: '\u224E',
	HumpEqual: '\u224F',
	hybull: '\u2043',
	hyphen: '\u2010',
	Iacute: '\u00CD',
	iacute: '\u00ED',
	ic: '\u2063',
	Icirc: '\u00CE',
	icirc: '\u00EE',
	Icy: '\u0418',
	icy: '\u0438',
	Idot: '\u0130',
	IEcy: '\u0415',
	iecy: '\u0435',
	iexcl: '\u00A1',
	iff: '\u21D4',
	Ifr: '\u2111',
	ifr: '\uD835\uDD26',
	Igrave: '\u00CC',
	igrave: '\u00EC',
	ii: '\u2148',
	iiiint: '\u2A0C',
	iiint: '\u222D',
	iinfin: '\u29DC',
	iiota: '\u2129',
	IJlig: '\u0132',
	ijlig: '\u0133',
	Im: '\u2111',
	Imacr: '\u012A',
	imacr: '\u012B',
	image: '\u2111',
	ImaginaryI: '\u2148',
	imagline: '\u2110',
	imagpart: '\u2111',
	imath: '\u0131',
	imof: '\u22B7',
	imped: '\u01B5',
	Implies: '\u21D2',
	in: '\u2208',
	incare: '\u2105',
	infin: '\u221E',
	infintie: '\u29DD',
	inodot: '\u0131',
	Int: '\u222C',
	int: '\u222B',
	intcal: '\u22BA',
	integers: '\u2124',
	Integral: '\u222B',
	intercal: '\u22BA',
	Intersection: '\u22C2',
	intlarhk: '\u2A17',
	intprod: '\u2A3C',
	InvisibleComma: '\u2063',
	InvisibleTimes: '\u2062',
	IOcy: '\u0401',
	iocy: '\u0451',
	Iogon: '\u012E',
	iogon: '\u012F',
	Iopf: '\uD835\uDD40',
	iopf: '\uD835\uDD5A',
	Iota: '\u0399',
	iota: '\u03B9',
	iprod: '\u2A3C',
	iquest: '\u00BF',
	Iscr: '\u2110',
	iscr: '\uD835\uDCBE',
	isin: '\u2208',
	isindot: '\u22F5',
	isinE: '\u22F9',
	isins: '\u22F4',
	isinsv: '\u22F3',
	isinv: '\u2208',
	it: '\u2062',
	Itilde: '\u0128',
	itilde: '\u0129',
	Iukcy: '\u0406',
	iukcy: '\u0456',
	Iuml: '\u00CF',
	iuml: '\u00EF',
	Jcirc: '\u0134',
	jcirc: '\u0135',
	Jcy: '\u0419',
	jcy: '\u0439',
	Jfr: '\uD835\uDD0D',
	jfr: '\uD835\uDD27',
	jmath: '\u0237',
	Jopf: '\uD835\uDD41',
	jopf: '\uD835\uDD5B',
	Jscr: '\uD835\uDCA5',
	jscr: '\uD835\uDCBF',
	Jsercy: '\u0408',
	jsercy: '\u0458',
	Jukcy: '\u0404',
	jukcy: '\u0454',
	Kappa: '\u039A',
	kappa: '\u03BA',
	kappav: '\u03F0',
	Kcedil: '\u0136',
	kcedil: '\u0137',
	Kcy: '\u041A',
	kcy: '\u043A',
	Kfr: '\uD835\uDD0E',
	kfr: '\uD835\uDD28',
	kgreen: '\u0138',
	KHcy: '\u0425',
	khcy: '\u0445',
	KJcy: '\u040C',
	kjcy: '\u045C',
	Kopf: '\uD835\uDD42',
	kopf: '\uD835\uDD5C',
	Kscr: '\uD835\uDCA6',
	kscr: '\uD835\uDCC0',
	lAarr: '\u21DA',
	Lacute: '\u0139',
	lacute: '\u013A',
	laemptyv: '\u29B4',
	lagran: '\u2112',
	Lambda: '\u039B',
	lambda: '\u03BB',
	Lang: '\u27EA',
	lang: '\u27E8',
	langd: '\u2991',
	langle: '\u27E8',
	lap: '\u2A85',
	Laplacetrf: '\u2112',
	laquo: '\u00AB',
	Larr: '\u219E',
	lArr: '\u21D0',
	larr: '\u2190',
	larrb: '\u21E4',
	larrbfs: '\u291F',
	larrfs: '\u291D',
	larrhk: '\u21A9',
	larrlp: '\u21AB',
	larrpl: '\u2939',
	larrsim: '\u2973',
	larrtl: '\u21A2',
	lat: '\u2AAB',
	lAtail: '\u291B',
	latail: '\u2919',
	late: '\u2AAD',
	lates: '\u2AAD\uFE00',
	lBarr: '\u290E',
	lbarr: '\u290C',
	lbbrk: '\u2772',
	lbrace: '\u007B',
	lbrack: '\u005B',
	lbrke: '\u298B',
	lbrksld: '\u298F',
	lbrkslu: '\u298D',
	Lcaron: '\u013D',
	lcaron: '\u013E',
	Lcedil: '\u013B',
	lcedil: '\u013C',
	lceil: '\u2308',
	lcub: '\u007B',
	Lcy: '\u041B',
	lcy: '\u043B',
	ldca: '\u2936',
	ldquo: '\u201C',
	ldquor: '\u201E',
	ldrdhar: '\u2967',
	ldrushar: '\u294B',
	ldsh: '\u21B2',
	lE: '\u2266',
	le: '\u2264',
	LeftAngleBracket: '\u27E8',
	LeftArrow: '\u2190',
	Leftarrow: '\u21D0',
	leftarrow: '\u2190',
	LeftArrowBar: '\u21E4',
	LeftArrowRightArrow: '\u21C6',
	leftarrowtail: '\u21A2',
	LeftCeiling: '\u2308',
	LeftDoubleBracket: '\u27E6',
	LeftDownTeeVector: '\u2961',
	LeftDownVector: '\u21C3',
	LeftDownVectorBar: '\u2959',
	LeftFloor: '\u230A',
	leftharpoondown: '\u21BD',
	leftharpoonup: '\u21BC',
	leftleftarrows: '\u21C7',
	LeftRightArrow: '\u2194',
	Leftrightarrow: '\u21D4',
	leftrightarrow: '\u2194',
	leftrightarrows: '\u21C6',
	leftrightharpoons: '\u21CB',
	leftrightsquigarrow: '\u21AD',
	LeftRightVector: '\u294E',
	LeftTee: '\u22A3',
	LeftTeeArrow: '\u21A4',
	LeftTeeVector: '\u295A',
	leftthreetimes: '\u22CB',
	LeftTriangle: '\u22B2',
	LeftTriangleBar: '\u29CF',
	LeftTriangleEqual: '\u22B4',
	LeftUpDownVector: '\u2951',
	LeftUpTeeVector: '\u2960',
	LeftUpVector: '\u21BF',
	LeftUpVectorBar: '\u2958',
	LeftVector: '\u21BC',
	LeftVectorBar: '\u2952',
	lEg: '\u2A8B',
	leg: '\u22DA',
	leq: '\u2264',
	leqq: '\u2266',
	leqslant: '\u2A7D',
	les: '\u2A7D',
	lescc: '\u2AA8',
	lesdot: '\u2A7F',
	lesdoto: '\u2A81',
	lesdotor: '\u2A83',
	lesg: '\u22DA\uFE00',
	lesges: '\u2A93',
	lessapprox: '\u2A85',
	lessdot: '\u22D6',
	lesseqgtr: '\u22DA',
	lesseqqgtr: '\u2A8B',
	LessEqualGreater: '\u22DA',
	LessFullEqual: '\u2266',
	LessGreater: '\u2276',
	lessgtr: '\u2276',
	LessLess: '\u2AA1',
	lesssim: '\u2272',
	LessSlantEqual: '\u2A7D',
	LessTilde: '\u2272',
	lfisht: '\u297C',
	lfloor: '\u230A',
	Lfr: '\uD835\uDD0F',
	lfr: '\uD835\uDD29',
	lg: '\u2276',
	lgE: '\u2A91',
	lHar: '\u2962',
	lhard: '\u21BD',
	lharu: '\u21BC',
	lharul: '\u296A',
	lhblk: '\u2584',
	LJcy: '\u0409',
	ljcy: '\u0459',
	Ll: '\u22D8',
	ll: '\u226A',
	llarr: '\u21C7',
	llcorner: '\u231E',
	Lleftarrow: '\u21DA',
	llhard: '\u296B',
	lltri: '\u25FA',
	Lmidot: '\u013F',
	lmidot: '\u0140',
	lmoust: '\u23B0',
	lmoustache: '\u23B0',
	lnap: '\u2A89',
	lnapprox: '\u2A89',
	lnE: '\u2268',
	lne: '\u2A87',
	lneq: '\u2A87',
	lneqq: '\u2268',
	lnsim: '\u22E6',
	loang: '\u27EC',
	loarr: '\u21FD',
	lobrk: '\u27E6',
	LongLeftArrow: '\u27F5',
	Longleftarrow: '\u27F8',
	longleftarrow: '\u27F5',
	LongLeftRightArrow: '\u27F7',
	Longleftrightarrow: '\u27FA',
	longleftrightarrow: '\u27F7',
	longmapsto: '\u27FC',
	LongRightArrow: '\u27F6',
	Longrightarrow: '\u27F9',
	longrightarrow: '\u27F6',
	looparrowleft: '\u21AB',
	looparrowright: '\u21AC',
	lopar: '\u2985',
	Lopf: '\uD835\uDD43',
	lopf: '\uD835\uDD5D',
	loplus: '\u2A2D',
	lotimes: '\u2A34',
	lowast: '\u2217',
	lowbar: '\u005F',
	LowerLeftArrow: '\u2199',
	LowerRightArrow: '\u2198',
	loz: '\u25CA',
	lozenge: '\u25CA',
	lozf: '\u29EB',
	lpar: '\u0028',
	lparlt: '\u2993',
	lrarr: '\u21C6',
	lrcorner: '\u231F',
	lrhar: '\u21CB',
	lrhard: '\u296D',
	lrm: '\u200E',
	lrtri: '\u22BF',
	lsaquo: '\u2039',
	Lscr: '\u2112',
	lscr: '\uD835\uDCC1',
	Lsh: '\u21B0',
	lsh: '\u21B0',
	lsim: '\u2272',
	lsime: '\u2A8D',
	lsimg: '\u2A8F',
	lsqb: '\u005B',
	lsquo: '\u2018',
	lsquor: '\u201A',
	Lstrok: '\u0141',
	lstrok: '\u0142',
	Lt: '\u226A',
	LT: '\u003C',
	lt: '\u003C',
	ltcc: '\u2AA6',
	ltcir: '\u2A79',
	ltdot: '\u22D6',
	lthree: '\u22CB',
	ltimes: '\u22C9',
	ltlarr: '\u2976',
	ltquest: '\u2A7B',
	ltri: '\u25C3',
	ltrie: '\u22B4',
	ltrif: '\u25C2',
	ltrPar: '\u2996',
	lurdshar: '\u294A',
	luruhar: '\u2966',
	lvertneqq: '\u2268\uFE00',
	lvnE: '\u2268\uFE00',
	macr: '\u00AF',
	male: '\u2642',
	malt: '\u2720',
	maltese: '\u2720',
	Map: '\u2905',
	map: '\u21A6',
	mapsto: '\u21A6',
	mapstodown: '\u21A7',
	mapstoleft: '\u21A4',
	mapstoup: '\u21A5',
	marker: '\u25AE',
	mcomma: '\u2A29',
	Mcy: '\u041C',
	mcy: '\u043C',
	mdash: '\u2014',
	mDDot: '\u223A',
	measuredangle: '\u2221',
	MediumSpace: '\u205F',
	Mellintrf: '\u2133',
	Mfr: '\uD835\uDD10',
	mfr: '\uD835\uDD2A',
	mho: '\u2127',
	micro: '\u00B5',
	mid: '\u2223',
	midast: '\u002A',
	midcir: '\u2AF0',
	middot: '\u00B7',
	minus: '\u2212',
	minusb: '\u229F',
	minusd: '\u2238',
	minusdu: '\u2A2A',
	MinusPlus: '\u2213',
	mlcp: '\u2ADB',
	mldr: '\u2026',
	mnplus: '\u2213',
	models: '\u22A7',
	Mopf: '\uD835\uDD44',
	mopf: '\uD835\uDD5E',
	mp: '\u2213',
	Mscr: '\u2133',
	mscr: '\uD835\uDCC2',
	mstpos: '\u223E',
	Mu: '\u039C',
	mu: '\u03BC',
	multimap: '\u22B8',
	mumap: '\u22B8',
	nabla: '\u2207',
	Nacute: '\u0143',
	nacute: '\u0144',
	nang: '\u2220\u20D2',
	nap: '\u2249',
	napE: '\u2A70\u0338',
	napid: '\u224B\u0338',
	napos: '\u0149',
	napprox: '\u2249',
	natur: '\u266E',
	natural: '\u266E',
	naturals: '\u2115',
	nbsp: '\u00A0',
	nbump: '\u224E\u0338',
	nbumpe: '\u224F\u0338',
	ncap: '\u2A43',
	Ncaron: '\u0147',
	ncaron: '\u0148',
	Ncedil: '\u0145',
	ncedil: '\u0146',
	ncong: '\u2247',
	ncongdot: '\u2A6D\u0338',
	ncup: '\u2A42',
	Ncy: '\u041D',
	ncy: '\u043D',
	ndash: '\u2013',
	ne: '\u2260',
	nearhk: '\u2924',
	neArr: '\u21D7',
	nearr: '\u2197',
	nearrow: '\u2197',
	nedot: '\u2250\u0338',
	NegativeMediumSpace: '\u200B',
	NegativeThickSpace: '\u200B',
	NegativeThinSpace: '\u200B',
	NegativeVeryThinSpace: '\u200B',
	nequiv: '\u2262',
	nesear: '\u2928',
	nesim: '\u2242\u0338',
	NestedGreaterGreater: '\u226B',
	NestedLessLess: '\u226A',
	NewLine: '\u000A',
	nexist: '\u2204',
	nexists: '\u2204',
	Nfr: '\uD835\uDD11',
	nfr: '\uD835\uDD2B',
	ngE: '\u2267\u0338',
	nge: '\u2271',
	ngeq: '\u2271',
	ngeqq: '\u2267\u0338',
	ngeqslant: '\u2A7E\u0338',
	nges: '\u2A7E\u0338',
	nGg: '\u22D9\u0338',
	ngsim: '\u2275',
	nGt: '\u226B\u20D2',
	ngt: '\u226F',
	ngtr: '\u226F',
	nGtv: '\u226B\u0338',
	nhArr: '\u21CE',
	nharr: '\u21AE',
	nhpar: '\u2AF2',
	ni: '\u220B',
	nis: '\u22FC',
	nisd: '\u22FA',
	niv: '\u220B',
	NJcy: '\u040A',
	njcy: '\u045A',
	nlArr: '\u21CD',
	nlarr: '\u219A',
	nldr: '\u2025',
	nlE: '\u2266\u0338',
	nle: '\u2270',
	nLeftarrow: '\u21CD',
	nleftarrow: '\u219A',
	nLeftrightarrow: '\u21CE',
	nleftrightarrow: '\u21AE',
	nleq: '\u2270',
	nleqq: '\u2266\u0338',
	nleqslant: '\u2A7D\u0338',
	nles: '\u2A7D\u0338',
	nless: '\u226E',
	nLl: '\u22D8\u0338',
	nlsim: '\u2274',
	nLt: '\u226A\u20D2',
	nlt: '\u226E',
	nltri: '\u22EA',
	nltrie: '\u22EC',
	nLtv: '\u226A\u0338',
	nmid: '\u2224',
	NoBreak: '\u2060',
	NonBreakingSpace: '\u00A0',
	Nopf: '\u2115',
	nopf: '\uD835\uDD5F',
	Not: '\u2AEC',
	not: '\u00AC',
	NotCongruent: '\u2262',
	NotCupCap: '\u226D',
	NotDoubleVerticalBar: '\u2226',
	NotElement: '\u2209',
	NotEqual: '\u2260',
	NotEqualTilde: '\u2242\u0338',
	NotExists: '\u2204',
	NotGreater: '\u226F',
	NotGreaterEqual: '\u2271',
	NotGreaterFullEqual: '\u2267\u0338',
	NotGreaterGreater: '\u226B\u0338',
	NotGreaterLess: '\u2279',
	NotGreaterSlantEqual: '\u2A7E\u0338',
	NotGreaterTilde: '\u2275',
	NotHumpDownHump: '\u224E\u0338',
	NotHumpEqual: '\u224F\u0338',
	notin: '\u2209',
	notindot: '\u22F5\u0338',
	notinE: '\u22F9\u0338',
	notinva: '\u2209',
	notinvb: '\u22F7',
	notinvc: '\u22F6',
	NotLeftTriangle: '\u22EA',
	NotLeftTriangleBar: '\u29CF\u0338',
	NotLeftTriangleEqual: '\u22EC',
	NotLess: '\u226E',
	NotLessEqual: '\u2270',
	NotLessGreater: '\u2278',
	NotLessLess: '\u226A\u0338',
	NotLessSlantEqual: '\u2A7D\u0338',
	NotLessTilde: '\u2274',
	NotNestedGreaterGreater: '\u2AA2\u0338',
	NotNestedLessLess: '\u2AA1\u0338',
	notni: '\u220C',
	notniva: '\u220C',
	notnivb: '\u22FE',
	notnivc: '\u22FD',
	NotPrecedes: '\u2280',
	NotPrecedesEqual: '\u2AAF\u0338',
	NotPrecedesSlantEqual: '\u22E0',
	NotReverseElement: '\u220C',
	NotRightTriangle: '\u22EB',
	NotRightTriangleBar: '\u29D0\u0338',
	NotRightTriangleEqual: '\u22ED',
	NotSquareSubset: '\u228F\u0338',
	NotSquareSubsetEqual: '\u22E2',
	NotSquareSuperset: '\u2290\u0338',
	NotSquareSupersetEqual: '\u22E3',
	NotSubset: '\u2282\u20D2',
	NotSubsetEqual: '\u2288',
	NotSucceeds: '\u2281',
	NotSucceedsEqual: '\u2AB0\u0338',
	NotSucceedsSlantEqual: '\u22E1',
	NotSucceedsTilde: '\u227F\u0338',
	NotSuperset: '\u2283\u20D2',
	NotSupersetEqual: '\u2289',
	NotTilde: '\u2241',
	NotTildeEqual: '\u2244',
	NotTildeFullEqual: '\u2247',
	NotTildeTilde: '\u2249',
	NotVerticalBar: '\u2224',
	npar: '\u2226',
	nparallel: '\u2226',
	nparsl: '\u2AFD\u20E5',
	npart: '\u2202\u0338',
	npolint: '\u2A14',
	npr: '\u2280',
	nprcue: '\u22E0',
	npre: '\u2AAF\u0338',
	nprec: '\u2280',
	npreceq: '\u2AAF\u0338',
	nrArr: '\u21CF',
	nrarr: '\u219B',
	nrarrc: '\u2933\u0338',
	nrarrw: '\u219D\u0338',
	nRightarrow: '\u21CF',
	nrightarrow: '\u219B',
	nrtri: '\u22EB',
	nrtrie: '\u22ED',
	nsc: '\u2281',
	nsccue: '\u22E1',
	nsce: '\u2AB0\u0338',
	Nscr: '\uD835\uDCA9',
	nscr: '\uD835\uDCC3',
	nshortmid: '\u2224',
	nshortparallel: '\u2226',
	nsim: '\u2241',
	nsime: '\u2244',
	nsimeq: '\u2244',
	nsmid: '\u2224',
	nspar: '\u2226',
	nsqsube: '\u22E2',
	nsqsupe: '\u22E3',
	nsub: '\u2284',
	nsubE: '\u2AC5\u0338',
	nsube: '\u2288',
	nsubset: '\u2282\u20D2',
	nsubseteq: '\u2288',
	nsubseteqq: '\u2AC5\u0338',
	nsucc: '\u2281',
	nsucceq: '\u2AB0\u0338',
	nsup: '\u2285',
	nsupE: '\u2AC6\u0338',
	nsupe: '\u2289',
	nsupset: '\u2283\u20D2',
	nsupseteq: '\u2289',
	nsupseteqq: '\u2AC6\u0338',
	ntgl: '\u2279',
	Ntilde: '\u00D1',
	ntilde: '\u00F1',
	ntlg: '\u2278',
	ntriangleleft: '\u22EA',
	ntrianglelefteq: '\u22EC',
	ntriangleright: '\u22EB',
	ntrianglerighteq: '\u22ED',
	Nu: '\u039D',
	nu: '\u03BD',
	num: '\u0023',
	numero: '\u2116',
	numsp: '\u2007',
	nvap: '\u224D\u20D2',
	nVDash: '\u22AF',
	nVdash: '\u22AE',
	nvDash: '\u22AD',
	nvdash: '\u22AC',
	nvge: '\u2265\u20D2',
	nvgt: '\u003E\u20D2',
	nvHarr: '\u2904',
	nvinfin: '\u29DE',
	nvlArr: '\u2902',
	nvle: '\u2264\u20D2',
	nvlt: '\u003C\u20D2',
	nvltrie: '\u22B4\u20D2',
	nvrArr: '\u2903',
	nvrtrie: '\u22B5\u20D2',
	nvsim: '\u223C\u20D2',
	nwarhk: '\u2923',
	nwArr: '\u21D6',
	nwarr: '\u2196',
	nwarrow: '\u2196',
	nwnear: '\u2927',
	Oacute: '\u00D3',
	oacute: '\u00F3',
	oast: '\u229B',
	ocir: '\u229A',
	Ocirc: '\u00D4',
	ocirc: '\u00F4',
	Ocy: '\u041E',
	ocy: '\u043E',
	odash: '\u229D',
	Odblac: '\u0150',
	odblac: '\u0151',
	odiv: '\u2A38',
	odot: '\u2299',
	odsold: '\u29BC',
	OElig: '\u0152',
	oelig: '\u0153',
	ofcir: '\u29BF',
	Ofr: '\uD835\uDD12',
	ofr: '\uD835\uDD2C',
	ogon: '\u02DB',
	Ograve: '\u00D2',
	ograve: '\u00F2',
	ogt: '\u29C1',
	ohbar: '\u29B5',
	ohm: '\u03A9',
	oint: '\u222E',
	olarr: '\u21BA',
	olcir: '\u29BE',
	olcross: '\u29BB',
	oline: '\u203E',
	olt: '\u29C0',
	Omacr: '\u014C',
	omacr: '\u014D',
	Omega: '\u03A9',
	omega: '\u03C9',
	Omicron: '\u039F',
	omicron: '\u03BF',
	omid: '\u29B6',
	ominus: '\u2296',
	Oopf: '\uD835\uDD46',
	oopf: '\uD835\uDD60',
	opar: '\u29B7',
	OpenCurlyDoubleQuote: '\u201C',
	OpenCurlyQuote: '\u2018',
	operp: '\u29B9',
	oplus: '\u2295',
	Or: '\u2A54',
	or: '\u2228',
	orarr: '\u21BB',
	ord: '\u2A5D',
	order: '\u2134',
	orderof: '\u2134',
	ordf: '\u00AA',
	ordm: '\u00BA',
	origof: '\u22B6',
	oror: '\u2A56',
	orslope: '\u2A57',
	orv: '\u2A5B',
	oS: '\u24C8',
	Oscr: '\uD835\uDCAA',
	oscr: '\u2134',
	Oslash: '\u00D8',
	oslash: '\u00F8',
	osol: '\u2298',
	Otilde: '\u00D5',
	otilde: '\u00F5',
	Otimes: '\u2A37',
	otimes: '\u2297',
	otimesas: '\u2A36',
	Ouml: '\u00D6',
	ouml: '\u00F6',
	ovbar: '\u233D',
	OverBar: '\u203E',
	OverBrace: '\u23DE',
	OverBracket: '\u23B4',
	OverParenthesis: '\u23DC',
	par: '\u2225',
	para: '\u00B6',
	parallel: '\u2225',
	parsim: '\u2AF3',
	parsl: '\u2AFD',
	part: '\u2202',
	PartialD: '\u2202',
	Pcy: '\u041F',
	pcy: '\u043F',
	percnt: '\u0025',
	period: '\u002E',
	permil: '\u2030',
	perp: '\u22A5',
	pertenk: '\u2031',
	Pfr: '\uD835\uDD13',
	pfr: '\uD835\uDD2D',
	Phi: '\u03A6',
	phi: '\u03C6',
	phiv: '\u03D5',
	phmmat: '\u2133',
	phone: '\u260E',
	Pi: '\u03A0',
	pi: '\u03C0',
	pitchfork: '\u22D4',
	piv: '\u03D6',
	planck: '\u210F',
	planckh: '\u210E',
	plankv: '\u210F',
	plus: '\u002B',
	plusacir: '\u2A23',
	plusb: '\u229E',
	pluscir: '\u2A22',
	plusdo: '\u2214',
	plusdu: '\u2A25',
	pluse: '\u2A72',
	PlusMinus: '\u00B1',
	plusmn: '\u00B1',
	plussim: '\u2A26',
	plustwo: '\u2A27',
	pm: '\u00B1',
	Poincareplane: '\u210C',
	pointint: '\u2A15',
	Popf: '\u2119',
	popf: '\uD835\uDD61',
	pound: '\u00A3',
	Pr: '\u2ABB',
	pr: '\u227A',
	prap: '\u2AB7',
	prcue: '\u227C',
	prE: '\u2AB3',
	pre: '\u2AAF',
	prec: '\u227A',
	precapprox: '\u2AB7',
	preccurlyeq: '\u227C',
	Precedes: '\u227A',
	PrecedesEqual: '\u2AAF',
	PrecedesSlantEqual: '\u227C',
	PrecedesTilde: '\u227E',
	preceq: '\u2AAF',
	precnapprox: '\u2AB9',
	precneqq: '\u2AB5',
	precnsim: '\u22E8',
	precsim: '\u227E',
	Prime: '\u2033',
	prime: '\u2032',
	primes: '\u2119',
	prnap: '\u2AB9',
	prnE: '\u2AB5',
	prnsim: '\u22E8',
	prod: '\u220F',
	Product: '\u220F',
	profalar: '\u232E',
	profline: '\u2312',
	profsurf: '\u2313',
	prop: '\u221D',
	Proportion: '\u2237',
	Proportional: '\u221D',
	propto: '\u221D',
	prsim: '\u227E',
	prurel: '\u22B0',
	Pscr: '\uD835\uDCAB',
	pscr: '\uD835\uDCC5',
	Psi: '\u03A8',
	psi: '\u03C8',
	puncsp: '\u2008',
	Qfr: '\uD835\uDD14',
	qfr: '\uD835\uDD2E',
	qint: '\u2A0C',
	Qopf: '\u211A',
	qopf: '\uD835\uDD62',
	qprime: '\u2057',
	Qscr: '\uD835\uDCAC',
	qscr: '\uD835\uDCC6',
	quaternions: '\u210D',
	quatint: '\u2A16',
	quest: '\u003F',
	questeq: '\u225F',
	QUOT: '\u0022',
	quot: '\u0022',
	rAarr: '\u21DB',
	race: '\u223D\u0331',
	Racute: '\u0154',
	racute: '\u0155',
	radic: '\u221A',
	raemptyv: '\u29B3',
	Rang: '\u27EB',
	rang: '\u27E9',
	rangd: '\u2992',
	range: '\u29A5',
	rangle: '\u27E9',
	raquo: '\u00BB',
	Rarr: '\u21A0',
	rArr: '\u21D2',
	rarr: '\u2192',
	rarrap: '\u2975',
	rarrb: '\u21E5',
	rarrbfs: '\u2920',
	rarrc: '\u2933',
	rarrfs: '\u291E',
	rarrhk: '\u21AA',
	rarrlp: '\u21AC',
	rarrpl: '\u2945',
	rarrsim: '\u2974',
	Rarrtl: '\u2916',
	rarrtl: '\u21A3',
	rarrw: '\u219D',
	rAtail: '\u291C',
	ratail: '\u291A',
	ratio: '\u2236',
	rationals: '\u211A',
	RBarr: '\u2910',
	rBarr: '\u290F',
	rbarr: '\u290D',
	rbbrk: '\u2773',
	rbrace: '\u007D',
	rbrack: '\u005D',
	rbrke: '\u298C',
	rbrksld: '\u298E',
	rbrkslu: '\u2990',
	Rcaron: '\u0158',
	rcaron: '\u0159',
	Rcedil: '\u0156',
	rcedil: '\u0157',
	rceil: '\u2309',
	rcub: '\u007D',
	Rcy: '\u0420',
	rcy: '\u0440',
	rdca: '\u2937',
	rdldhar: '\u2969',
	rdquo: '\u201D',
	rdquor: '\u201D',
	rdsh: '\u21B3',
	Re: '\u211C',
	real: '\u211C',
	realine: '\u211B',
	realpart: '\u211C',
	reals: '\u211D',
	rect: '\u25AD',
	REG: '\u00AE',
	reg: '\u00AE',
	ReverseElement: '\u220B',
	ReverseEquilibrium: '\u21CB',
	ReverseUpEquilibrium: '\u296F',
	rfisht: '\u297D',
	rfloor: '\u230B',
	Rfr: '\u211C',
	rfr: '\uD835\uDD2F',
	rHar: '\u2964',
	rhard: '\u21C1',
	rharu: '\u21C0',
	rharul: '\u296C',
	Rho: '\u03A1',
	rho: '\u03C1',
	rhov: '\u03F1',
	RightAngleBracket: '\u27E9',
	RightArrow: '\u2192',
	Rightarrow: '\u21D2',
	rightarrow: '\u2192',
	RightArrowBar: '\u21E5',
	RightArrowLeftArrow: '\u21C4',
	rightarrowtail: '\u21A3',
	RightCeiling: '\u2309',
	RightDoubleBracket: '\u27E7',
	RightDownTeeVector: '\u295D',
	RightDownVector: '\u21C2',
	RightDownVectorBar: '\u2955',
	RightFloor: '\u230B',
	rightharpoondown: '\u21C1',
	rightharpoonup: '\u21C0',
	rightleftarrows: '\u21C4',
	rightleftharpoons: '\u21CC',
	rightrightarrows: '\u21C9',
	rightsquigarrow: '\u219D',
	RightTee: '\u22A2',
	RightTeeArrow: '\u21A6',
	RightTeeVector: '\u295B',
	rightthreetimes: '\u22CC',
	RightTriangle: '\u22B3',
	RightTriangleBar: '\u29D0',
	RightTriangleEqual: '\u22B5',
	RightUpDownVector: '\u294F',
	RightUpTeeVector: '\u295C',
	RightUpVector: '\u21BE',
	RightUpVectorBar: '\u2954',
	RightVector: '\u21C0',
	RightVectorBar: '\u2953',
	ring: '\u02DA',
	risingdotseq: '\u2253',
	rlarr: '\u21C4',
	rlhar: '\u21CC',
	rlm: '\u200F',
	rmoust: '\u23B1',
	rmoustache: '\u23B1',
	rnmid: '\u2AEE',
	roang: '\u27ED',
	roarr: '\u21FE',
	robrk: '\u27E7',
	ropar: '\u2986',
	Ropf: '\u211D',
	ropf: '\uD835\uDD63',
	roplus: '\u2A2E',
	rotimes: '\u2A35',
	RoundImplies: '\u2970',
	rpar: '\u0029',
	rpargt: '\u2994',
	rppolint: '\u2A12',
	rrarr: '\u21C9',
	Rrightarrow: '\u21DB',
	rsaquo: '\u203A',
	Rscr: '\u211B',
	rscr: '\uD835\uDCC7',
	Rsh: '\u21B1',
	rsh: '\u21B1',
	rsqb: '\u005D',
	rsquo: '\u2019',
	rsquor: '\u2019',
	rthree: '\u22CC',
	rtimes: '\u22CA',
	rtri: '\u25B9',
	rtrie: '\u22B5',
	rtrif: '\u25B8',
	rtriltri: '\u29CE',
	RuleDelayed: '\u29F4',
	ruluhar: '\u2968',
	rx: '\u211E',
	Sacute: '\u015A',
	sacute: '\u015B',
	sbquo: '\u201A',
	Sc: '\u2ABC',
	sc: '\u227B',
	scap: '\u2AB8',
	Scaron: '\u0160',
	scaron: '\u0161',
	sccue: '\u227D',
	scE: '\u2AB4',
	sce: '\u2AB0',
	Scedil: '\u015E',
	scedil: '\u015F',
	Scirc: '\u015C',
	scirc: '\u015D',
	scnap: '\u2ABA',
	scnE: '\u2AB6',
	scnsim: '\u22E9',
	scpolint: '\u2A13',
	scsim: '\u227F',
	Scy: '\u0421',
	scy: '\u0441',
	sdot: '\u22C5',
	sdotb: '\u22A1',
	sdote: '\u2A66',
	searhk: '\u2925',
	seArr: '\u21D8',
	searr: '\u2198',
	searrow: '\u2198',
	sect: '\u00A7',
	semi: '\u003B',
	seswar: '\u2929',
	setminus: '\u2216',
	setmn: '\u2216',
	sext: '\u2736',
	Sfr: '\uD835\uDD16',
	sfr: '\uD835\uDD30',
	sfrown: '\u2322',
	sharp: '\u266F',
	SHCHcy: '\u0429',
	shchcy: '\u0449',
	SHcy: '\u0428',
	shcy: '\u0448',
	ShortDownArrow: '\u2193',
	ShortLeftArrow: '\u2190',
	shortmid: '\u2223',
	shortparallel: '\u2225',
	ShortRightArrow: '\u2192',
	ShortUpArrow: '\u2191',
	shy: '\u00AD',
	Sigma: '\u03A3',
	sigma: '\u03C3',
	sigmaf: '\u03C2',
	sigmav: '\u03C2',
	sim: '\u223C',
	simdot: '\u2A6A',
	sime: '\u2243',
	simeq: '\u2243',
	simg: '\u2A9E',
	simgE: '\u2AA0',
	siml: '\u2A9D',
	simlE: '\u2A9F',
	simne: '\u2246',
	simplus: '\u2A24',
	simrarr: '\u2972',
	slarr: '\u2190',
	SmallCircle: '\u2218',
	smallsetminus: '\u2216',
	smashp: '\u2A33',
	smeparsl: '\u29E4',
	smid: '\u2223',
	smile: '\u2323',
	smt: '\u2AAA',
	smte: '\u2AAC',
	smtes: '\u2AAC\uFE00',
	SOFTcy: '\u042C',
	softcy: '\u044C',
	sol: '\u002F',
	solb: '\u29C4',
	solbar: '\u233F',
	Sopf: '\uD835\uDD4A',
	sopf: '\uD835\uDD64',
	spades: '\u2660',
	spadesuit: '\u2660',
	spar: '\u2225',
	sqcap: '\u2293',
	sqcaps: '\u2293\uFE00',
	sqcup: '\u2294',
	sqcups: '\u2294\uFE00',
	Sqrt: '\u221A',
	sqsub: '\u228F',
	sqsube: '\u2291',
	sqsubset: '\u228F',
	sqsubseteq: '\u2291',
	sqsup: '\u2290',
	sqsupe: '\u2292',
	sqsupset: '\u2290',
	sqsupseteq: '\u2292',
	squ: '\u25A1',
	Square: '\u25A1',
	square: '\u25A1',
	SquareIntersection: '\u2293',
	SquareSubset: '\u228F',
	SquareSubsetEqual: '\u2291',
	SquareSuperset: '\u2290',
	SquareSupersetEqual: '\u2292',
	SquareUnion: '\u2294',
	squarf: '\u25AA',
	squf: '\u25AA',
	srarr: '\u2192',
	Sscr: '\uD835\uDCAE',
	sscr: '\uD835\uDCC8',
	ssetmn: '\u2216',
	ssmile: '\u2323',
	sstarf: '\u22C6',
	Star: '\u22C6',
	star: '\u2606',
	starf: '\u2605',
	straightepsilon: '\u03F5',
	straightphi: '\u03D5',
	strns: '\u00AF',
	Sub: '\u22D0',
	sub: '\u2282',
	subdot: '\u2ABD',
	subE: '\u2AC5',
	sube: '\u2286',
	subedot: '\u2AC3',
	submult: '\u2AC1',
	subnE: '\u2ACB',
	subne: '\u228A',
	subplus: '\u2ABF',
	subrarr: '\u2979',
	Subset: '\u22D0',
	subset: '\u2282',
	subseteq: '\u2286',
	subseteqq: '\u2AC5',
	SubsetEqual: '\u2286',
	subsetneq: '\u228A',
	subsetneqq: '\u2ACB',
	subsim: '\u2AC7',
	subsub: '\u2AD5',
	subsup: '\u2AD3',
	succ: '\u227B',
	succapprox: '\u2AB8',
	succcurlyeq: '\u227D',
	Succeeds: '\u227B',
	SucceedsEqual: '\u2AB0',
	SucceedsSlantEqual: '\u227D',
	SucceedsTilde: '\u227F',
	succeq: '\u2AB0',
	succnapprox: '\u2ABA',
	succneqq: '\u2AB6',
	succnsim: '\u22E9',
	succsim: '\u227F',
	SuchThat: '\u220B',
	Sum: '\u2211',
	sum: '\u2211',
	sung: '\u266A',
	Sup: '\u22D1',
	sup: '\u2283',
	sup1: '\u00B9',
	sup2: '\u00B2',
	sup3: '\u00B3',
	supdot: '\u2ABE',
	supdsub: '\u2AD8',
	supE: '\u2AC6',
	supe: '\u2287',
	supedot: '\u2AC4',
	Superset: '\u2283',
	SupersetEqual: '\u2287',
	suphsol: '\u27C9',
	suphsub: '\u2AD7',
	suplarr: '\u297B',
	supmult: '\u2AC2',
	supnE: '\u2ACC',
	supne: '\u228B',
	supplus: '\u2AC0',
	Supset: '\u22D1',
	supset: '\u2283',
	supseteq: '\u2287',
	supseteqq: '\u2AC6',
	supsetneq: '\u228B',
	supsetneqq: '\u2ACC',
	supsim: '\u2AC8',
	supsub: '\u2AD4',
	supsup: '\u2AD6',
	swarhk: '\u2926',
	swArr: '\u21D9',
	swarr: '\u2199',
	swarrow: '\u2199',
	swnwar: '\u292A',
	szlig: '\u00DF',
	Tab: '\u0009',
	target: '\u2316',
	Tau: '\u03A4',
	tau: '\u03C4',
	tbrk: '\u23B4',
	Tcaron: '\u0164',
	tcaron: '\u0165',
	Tcedil: '\u0162',
	tcedil: '\u0163',
	Tcy: '\u0422',
	tcy: '\u0442',
	tdot: '\u20DB',
	telrec: '\u2315',
	Tfr: '\uD835\uDD17',
	tfr: '\uD835\uDD31',
	there4: '\u2234',
	Therefore: '\u2234',
	therefore: '\u2234',
	Theta: '\u0398',
	theta: '\u03B8',
	thetasym: '\u03D1',
	thetav: '\u03D1',
	thickapprox: '\u2248',
	thicksim: '\u223C',
	ThickSpace: '\u205F\u200A',
	thinsp: '\u2009',
	ThinSpace: '\u2009',
	thkap: '\u2248',
	thksim: '\u223C',
	THORN: '\u00DE',
	thorn: '\u00FE',
	Tilde: '\u223C',
	tilde: '\u02DC',
	TildeEqual: '\u2243',
	TildeFullEqual: '\u2245',
	TildeTilde: '\u2248',
	times: '\u00D7',
	timesb: '\u22A0',
	timesbar: '\u2A31',
	timesd: '\u2A30',
	tint: '\u222D',
	toea: '\u2928',
	top: '\u22A4',
	topbot: '\u2336',
	topcir: '\u2AF1',
	Topf: '\uD835\uDD4B',
	topf: '\uD835\uDD65',
	topfork: '\u2ADA',
	tosa: '\u2929',
	tprime: '\u2034',
	TRADE: '\u2122',
	trade: '\u2122',
	triangle: '\u25B5',
	triangledown: '\u25BF',
	triangleleft: '\u25C3',
	trianglelefteq: '\u22B4',
	triangleq: '\u225C',
	triangleright: '\u25B9',
	trianglerighteq: '\u22B5',
	tridot: '\u25EC',
	trie: '\u225C',
	triminus: '\u2A3A',
	TripleDot: '\u20DB',
	triplus: '\u2A39',
	trisb: '\u29CD',
	tritime: '\u2A3B',
	trpezium: '\u23E2',
	Tscr: '\uD835\uDCAF',
	tscr: '\uD835\uDCC9',
	TScy: '\u0426',
	tscy: '\u0446',
	TSHcy: '\u040B',
	tshcy: '\u045B',
	Tstrok: '\u0166',
	tstrok: '\u0167',
	twixt: '\u226C',
	twoheadleftarrow: '\u219E',
	twoheadrightarrow: '\u21A0',
	Uacute: '\u00DA',
	uacute: '\u00FA',
	Uarr: '\u219F',
	uArr: '\u21D1',
	uarr: '\u2191',
	Uarrocir: '\u2949',
	Ubrcy: '\u040E',
	ubrcy: '\u045E',
	Ubreve: '\u016C',
	ubreve: '\u016D',
	Ucirc: '\u00DB',
	ucirc: '\u00FB',
	Ucy: '\u0423',
	ucy: '\u0443',
	udarr: '\u21C5',
	Udblac: '\u0170',
	udblac: '\u0171',
	udhar: '\u296E',
	ufisht: '\u297E',
	Ufr: '\uD835\uDD18',
	ufr: '\uD835\uDD32',
	Ugrave: '\u00D9',
	ugrave: '\u00F9',
	uHar: '\u2963',
	uharl: '\u21BF',
	uharr: '\u21BE',
	uhblk: '\u2580',
	ulcorn: '\u231C',
	ulcorner: '\u231C',
	ulcrop: '\u230F',
	ultri: '\u25F8',
	Umacr: '\u016A',
	umacr: '\u016B',
	uml: '\u00A8',
	UnderBar: '\u005F',
	UnderBrace: '\u23DF',
	UnderBracket: '\u23B5',
	UnderParenthesis: '\u23DD',
	Union: '\u22C3',
	UnionPlus: '\u228E',
	Uogon: '\u0172',
	uogon: '\u0173',
	Uopf: '\uD835\uDD4C',
	uopf: '\uD835\uDD66',
	UpArrow: '\u2191',
	Uparrow: '\u21D1',
	uparrow: '\u2191',
	UpArrowBar: '\u2912',
	UpArrowDownArrow: '\u21C5',
	UpDownArrow: '\u2195',
	Updownarrow: '\u21D5',
	updownarrow: '\u2195',
	UpEquilibrium: '\u296E',
	upharpoonleft: '\u21BF',
	upharpoonright: '\u21BE',
	uplus: '\u228E',
	UpperLeftArrow: '\u2196',
	UpperRightArrow: '\u2197',
	Upsi: '\u03D2',
	upsi: '\u03C5',
	upsih: '\u03D2',
	Upsilon: '\u03A5',
	upsilon: '\u03C5',
	UpTee: '\u22A5',
	UpTeeArrow: '\u21A5',
	upuparrows: '\u21C8',
	urcorn: '\u231D',
	urcorner: '\u231D',
	urcrop: '\u230E',
	Uring: '\u016E',
	uring: '\u016F',
	urtri: '\u25F9',
	Uscr: '\uD835\uDCB0',
	uscr: '\uD835\uDCCA',
	utdot: '\u22F0',
	Utilde: '\u0168',
	utilde: '\u0169',
	utri: '\u25B5',
	utrif: '\u25B4',
	uuarr: '\u21C8',
	Uuml: '\u00DC',
	uuml: '\u00FC',
	uwangle: '\u29A7',
	vangrt: '\u299C',
	varepsilon: '\u03F5',
	varkappa: '\u03F0',
	varnothing: '\u2205',
	varphi: '\u03D5',
	varpi: '\u03D6',
	varpropto: '\u221D',
	vArr: '\u21D5',
	varr: '\u2195',
	varrho: '\u03F1',
	varsigma: '\u03C2',
	varsubsetneq: '\u228A\uFE00',
	varsubsetneqq: '\u2ACB\uFE00',
	varsupsetneq: '\u228B\uFE00',
	varsupsetneqq: '\u2ACC\uFE00',
	vartheta: '\u03D1',
	vartriangleleft: '\u22B2',
	vartriangleright: '\u22B3',
	Vbar: '\u2AEB',
	vBar: '\u2AE8',
	vBarv: '\u2AE9',
	Vcy: '\u0412',
	vcy: '\u0432',
	VDash: '\u22AB',
	Vdash: '\u22A9',
	vDash: '\u22A8',
	vdash: '\u22A2',
	Vdashl: '\u2AE6',
	Vee: '\u22C1',
	vee: '\u2228',
	veebar: '\u22BB',
	veeeq: '\u225A',
	vellip: '\u22EE',
	Verbar: '\u2016',
	verbar: '\u007C',
	Vert: '\u2016',
	vert: '\u007C',
	VerticalBar: '\u2223',
	VerticalLine: '\u007C',
	VerticalSeparator: '\u2758',
	VerticalTilde: '\u2240',
	VeryThinSpace: '\u200A',
	Vfr: '\uD835\uDD19',
	vfr: '\uD835\uDD33',
	vltri: '\u22B2',
	vnsub: '\u2282\u20D2',
	vnsup: '\u2283\u20D2',
	Vopf: '\uD835\uDD4D',
	vopf: '\uD835\uDD67',
	vprop: '\u221D',
	vrtri: '\u22B3',
	Vscr: '\uD835\uDCB1',
	vscr: '\uD835\uDCCB',
	vsubnE: '\u2ACB\uFE00',
	vsubne: '\u228A\uFE00',
	vsupnE: '\u2ACC\uFE00',
	vsupne: '\u228B\uFE00',
	Vvdash: '\u22AA',
	vzigzag: '\u299A',
	Wcirc: '\u0174',
	wcirc: '\u0175',
	wedbar: '\u2A5F',
	Wedge: '\u22C0',
	wedge: '\u2227',
	wedgeq: '\u2259',
	weierp: '\u2118',
	Wfr: '\uD835\uDD1A',
	wfr: '\uD835\uDD34',
	Wopf: '\uD835\uDD4E',
	wopf: '\uD835\uDD68',
	wp: '\u2118',
	wr: '\u2240',
	wreath: '\u2240',
	Wscr: '\uD835\uDCB2',
	wscr: '\uD835\uDCCC',
	xcap: '\u22C2',
	xcirc: '\u25EF',
	xcup: '\u22C3',
	xdtri: '\u25BD',
	Xfr: '\uD835\uDD1B',
	xfr: '\uD835\uDD35',
	xhArr: '\u27FA',
	xharr: '\u27F7',
	Xi: '\u039E',
	xi: '\u03BE',
	xlArr: '\u27F8',
	xlarr: '\u27F5',
	xmap: '\u27FC',
	xnis: '\u22FB',
	xodot: '\u2A00',
	Xopf: '\uD835\uDD4F',
	xopf: '\uD835\uDD69',
	xoplus: '\u2A01',
	xotime: '\u2A02',
	xrArr: '\u27F9',
	xrarr: '\u27F6',
	Xscr: '\uD835\uDCB3',
	xscr: '\uD835\uDCCD',
	xsqcup: '\u2A06',
	xuplus: '\u2A04',
	xutri: '\u25B3',
	xvee: '\u22C1',
	xwedge: '\u22C0',
	Yacute: '\u00DD',
	yacute: '\u00FD',
	YAcy: '\u042F',
	yacy: '\u044F',
	Ycirc: '\u0176',
	ycirc: '\u0177',
	Ycy: '\u042B',
	ycy: '\u044B',
	yen: '\u00A5',
	Yfr: '\uD835\uDD1C',
	yfr: '\uD835\uDD36',
	YIcy: '\u0407',
	yicy: '\u0457',
	Yopf: '\uD835\uDD50',
	yopf: '\uD835\uDD6A',
	Yscr: '\uD835\uDCB4',
	yscr: '\uD835\uDCCE',
	YUcy: '\u042E',
	yucy: '\u044E',
	Yuml: '\u0178',
	yuml: '\u00FF',
	Zacute: '\u0179',
	zacute: '\u017A',
	Zcaron: '\u017D',
	zcaron: '\u017E',
	Zcy: '\u0417',
	zcy: '\u0437',
	Zdot: '\u017B',
	zdot: '\u017C',
	zeetrf: '\u2128',
	ZeroWidthSpace: '\u200B',
	Zeta: '\u0396',
	zeta: '\u03B6',
	Zfr: '\u2128',
	zfr: '\uD835\uDD37',
	ZHcy: '\u0416',
	zhcy: '\u0436',
	zigrarr: '\u21DD',
	Zopf: '\u2124',
	zopf: '\uD835\uDD6B',
	Zscr: '\uD835\uDCB5',
	zscr: '\uD835\uDCCF',
	zwj: '\u200D',
	zwnj: '\u200C',
});

/**
 * @deprecated
 * Use `HTML_ENTITIES` instead.
 * @see {@link HTML_ENTITIES}
 */
exports.entityMap = exports.HTML_ENTITIES;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var conventions = __webpack_require__(16);
var g = __webpack_require__(19);
var errors = __webpack_require__(17);

var isHTMLEscapableRawTextElement = conventions.isHTMLEscapableRawTextElement;
var isHTMLMimeType = conventions.isHTMLMimeType;
var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
var hasOwn = conventions.hasOwn;
var NAMESPACE = conventions.NAMESPACE;
var ParseError = errors.ParseError;
var DOMException = errors.DOMException;

//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0; //tag name offerring
var S_ATTR = 1; //attr name offerring
var S_ATTR_SPACE = 2; //attr name end and space offer
var S_EQ = 3; //=space?
var S_ATTR_NOQUOT_VALUE = 4; //attr value(no quot value only)
var S_ATTR_END = 5; //attr value end and no space(quot end)
var S_TAG_SPACE = 6; //(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7; //closed el<el />

function XMLReader() {}

XMLReader.prototype = {
	parse: function (source, defaultNSMap, entityMap) {
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap, (defaultNSMap = Object.create(null)));
		parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
		domBuilder.endDocument();
	},
};

/**
 * Detecting everything that might be a reference,
 * including those without ending `;`, since those are allowed in HTML.
 * The entityReplacer takes care of verifying and transforming each occurrence,
 * and reports to the errorHandler on those that are not OK,
 * depending on the context.
 */
var ENTITY_REG = /&#?\w+;?/g;

function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
	var isHTML = isHTMLMimeType(domBuilder.mimeType);
	if (source.indexOf(g.UNICODE_REPLACEMENT_CHARACTER) >= 0) {
		errorHandler.warning('Unicode replacement character detected, source encoding issues?');
	}

	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10),
				surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}

	function entityReplacer(a) {
		var complete = a[a.length - 1] === ';' ? a : a + ';';
		if (!isHTML && complete !== a) {
			errorHandler.error('EntityRef: expecting ;');
			return a;
		}
		var match = g.Reference.exec(complete);
		if (!match || match[0].length !== complete.length) {
			errorHandler.error('entity not matching Reference production: ' + a);
			return a;
		}
		var k = complete.slice(1, -1);
		if (hasOwn(entityMap, k)) {
			return entityMap[k];
		} else if (k.charAt(0) === '#') {
			return fixedFromCharCode(parseInt(k.substr(1).replace('x', '0x')));
		} else {
			errorHandler.error('entity not found:' + a);
			return a;
		}
	}

	function appendText(end) {
		//has some bugs
		if (end > start) {
			var xt = source.substring(start, end).replace(ENTITY_REG, entityReplacer);
			locator && position(start);
			domBuilder.characters(xt, 0, end - start);
			start = end;
		}
	}

	function position(p, m) {
		while (p >= lineEnd && (m = linePattern.exec(source))) {
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
		}
		locator.columnNumber = p - lineStart + 1;
	}

	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g;
	var locator = domBuilder.locator;

	var parseStack = [{ currentNSMap: defaultNSMapCopy }];
	var unclosedTags = [];
	var start = 0;
	while (true) {
		try {
			var tagStart = source.indexOf('<', start);
			if (tagStart < 0) {
				if (!isHTML && unclosedTags.length > 0) {
					return errorHandler.fatalError('unclosed xml tag(s): ' + unclosedTags.join(', '));
				}
				if (!source.substring(start).match(/^\s*$/)) {
					var doc = domBuilder.doc;
					var text = doc.createTextNode(source.substr(start));
					if (doc.documentElement) {
						return errorHandler.error('Extra content at the end of the document');
					}
					doc.appendChild(text);
					domBuilder.currentElement = text;
				}
				return;
			}
			if (tagStart > start) {
				var fromSource = source.substring(start, tagStart);
				if (!isHTML && unclosedTags.length === 0) {
					fromSource = fromSource.replace(new RegExp(g.S_OPT.source, 'g'), '');
					fromSource && errorHandler.error("Unexpected content outside root element: '" + fromSource + "'");
				}
				appendText(tagStart);
			}
			switch (source.charAt(tagStart + 1)) {
				case '/':
					var end = source.indexOf('>', tagStart + 2);
					var tagNameRaw = source.substring(tagStart + 2, end > 0 ? end : undefined);
					if (!tagNameRaw) {
						return errorHandler.fatalError('end tag name missing');
					}
					var tagNameMatch = end > 0 && g.reg('^', g.QName_group, g.S_OPT, '$').exec(tagNameRaw);
					if (!tagNameMatch) {
						return errorHandler.fatalError('end tag name contains invalid characters: "' + tagNameRaw + '"');
					}
					if (!domBuilder.currentElement && !domBuilder.doc.documentElement) {
						// not enough information to provide a helpful error message,
						// but parsing will throw since there is no root element
						return;
					}
					var currentTagName =
						unclosedTags[unclosedTags.length - 1] ||
						domBuilder.currentElement.tagName ||
						domBuilder.doc.documentElement.tagName ||
						'';
					if (currentTagName !== tagNameMatch[1]) {
						var tagNameLower = tagNameMatch[1].toLowerCase();
						if (!isHTML || currentTagName.toLowerCase() !== tagNameLower) {
							return errorHandler.fatalError('Opening and ending tag mismatch: "' + currentTagName + '" != "' + tagNameRaw + '"');
						}
					}
					var config = parseStack.pop();
					unclosedTags.pop();
					var localNSMap = config.localNSMap;
					domBuilder.endElement(config.uri, config.localName, currentTagName);
					if (localNSMap) {
						for (var prefix in localNSMap) {
							if (hasOwn(localNSMap, prefix)) {
								domBuilder.endPrefixMapping(prefix);
							}
						}
					}

					end++;
					break;
				// end element
				case '?': // <?...?>
					locator && position(tagStart);
					end = parseProcessingInstruction(source, tagStart, domBuilder, errorHandler);
					break;
				case '!': // <!doctype,<![CDATA,<!--
					locator && position(tagStart);
					end = parseDoctypeCommentOrCData(source, tagStart, domBuilder, errorHandler, isHTML);
					break;
				default:
					locator && position(tagStart);
					var el = new ElementAttributes();
					var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
					//elStartEnd
					var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler, isHTML);
					var len = el.length;

					if (!el.closed) {
						if (isHTML && conventions.isHTMLVoidElement(el.tagName)) {
							el.closed = true;
						} else {
							unclosedTags.push(el.tagName);
						}
					}
					if (locator && len) {
						var locator2 = copyLocator(locator, {});
						//try{//attribute position fixed
						for (var i = 0; i < len; i++) {
							var a = el[i];
							position(a.offset);
							a.locator = copyLocator(locator, {});
						}
						domBuilder.locator = locator2;
						if (appendElement(el, domBuilder, currentNSMap)) {
							parseStack.push(el);
						}
						domBuilder.locator = locator;
					} else {
						if (appendElement(el, domBuilder, currentNSMap)) {
							parseStack.push(el);
						}
					}

					if (isHTML && !el.closed) {
						end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
					} else {
						end++;
					}
			}
		} catch (e) {
			if (e instanceof ParseError) {
				throw e;
			} else if (e instanceof DOMException) {
				throw new ParseError(e.name + ': ' + e.message, domBuilder.locator, e);
			}
			errorHandler.error('element parse error: ' + e);
			end = -1;
		}
		if (end > start) {
			start = end;
		} else {
			//Possible sax fallback here, risk of positional error
			appendText(Math.max(tagStart, start) + 1);
		}
	}
}

function copyLocator(f, t) {
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @returns
 * end of the elementStartPart(end of elementEndPart for selfClosed el)
 * @see {@link #appendElement}
 */
function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler, isHTML) {
	/**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */
	function addAttribute(qname, value, startIndex) {
		if (hasOwn(el.attributeNames, qname)) {
			return errorHandler.fatalError('Attribute ' + qname + ' redefined');
		}
		if (!isHTML && value.indexOf('<') >= 0) {
			return errorHandler.fatalError("Unescaped '<' not allowed in attributes values");
		}
		el.addValue(
			qname,
			// @see https://www.w3.org/TR/xml/#AVNormalize
			// since the xmldom sax parser does not "interpret" DTD the following is not implemented:
			// - recursive replacement of (DTD) entity references
			// - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
			value.replace(/[\t\n\r]/g, ' ').replace(ENTITY_REG, entityReplacer),
			startIndex
		);
	}

	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG; //status
	while (true) {
		var c = source.charAt(p);
		switch (c) {
			case '=':
				if (s === S_ATTR) {
					//attrName
					attrName = source.slice(start, p);
					s = S_EQ;
				} else if (s === S_ATTR_SPACE) {
					s = S_EQ;
				} else {
					//fatalError: equal must after attrName or space after attrName
					throw new Error('attribute equal must after attrName'); // No known test case
				}
				break;
			case "'":
			case '"':
				if (
					s === S_EQ ||
					s === S_ATTR //|| s == S_ATTR_SPACE
				) {
					//equal
					if (s === S_ATTR) {
						errorHandler.warning('attribute value must after "="');
						attrName = source.slice(start, p);
					}
					start = p + 1;
					p = source.indexOf(c, start);
					if (p > 0) {
						value = source.slice(start, p);
						addAttribute(attrName, value, start - 1);
						s = S_ATTR_END;
					} else {
						//fatalError: no end quot match
						throw new Error("attribute value no end '" + c + "' match");
					}
				} else if (s == S_ATTR_NOQUOT_VALUE) {
					value = source.slice(start, p);
					addAttribute(attrName, value, start);
					errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
					start = p + 1;
					s = S_ATTR_END;
				} else {
					//fatalError: no equal before
					throw new Error('attribute value must after "="'); // No known test case
				}
				break;
			case '/':
				switch (s) {
					case S_TAG:
						el.setTagName(source.slice(start, p));
					case S_ATTR_END:
					case S_TAG_SPACE:
					case S_TAG_CLOSE:
						s = S_TAG_CLOSE;
						el.closed = true;
					case S_ATTR_NOQUOT_VALUE:
					case S_ATTR:
						break;
					case S_ATTR_SPACE:
						el.closed = true;
						break;
					//case S_EQ:
					default:
						throw new Error("attribute invalid close char('/')"); // No known test case
				}
				break;
			case '': //end document
				errorHandler.error('unexpected end of input');
				if (s == S_TAG) {
					el.setTagName(source.slice(start, p));
				}
				return p;
			case '>':
				switch (s) {
					case S_TAG:
						el.setTagName(source.slice(start, p));
					case S_ATTR_END:
					case S_TAG_SPACE:
					case S_TAG_CLOSE:
						break; //normal
					case S_ATTR_NOQUOT_VALUE: //Compatible state
					case S_ATTR:
						value = source.slice(start, p);
						if (value.slice(-1) === '/') {
							el.closed = true;
							value = value.slice(0, -1);
						}
					case S_ATTR_SPACE:
						if (s === S_ATTR_SPACE) {
							value = attrName;
						}
						if (s == S_ATTR_NOQUOT_VALUE) {
							errorHandler.warning('attribute "' + value + '" missed quot(")!');
							addAttribute(attrName, value, start);
						} else {
							if (!isHTML) {
								errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
							}
							addAttribute(value, value, start);
						}
						break;
					case S_EQ:
						if (!isHTML) {
							return errorHandler.fatalError('AttValue: \' or " expected');
						}
				}
				return p;
			/*xml space '\x20' | #x9 | #xD | #xA; */
			case '\u0080':
				c = ' ';
			default:
				if (c <= ' ') {
					//space
					switch (s) {
						case S_TAG:
							el.setTagName(source.slice(start, p)); //tagName
							s = S_TAG_SPACE;
							break;
						case S_ATTR:
							attrName = source.slice(start, p);
							s = S_ATTR_SPACE;
							break;
						case S_ATTR_NOQUOT_VALUE:
							var value = source.slice(start, p);
							errorHandler.warning('attribute "' + value + '" missed quot(")!!');
							addAttribute(attrName, value, start);
						case S_ATTR_END:
							s = S_TAG_SPACE;
							break;
						//case S_TAG_SPACE:
						//case S_EQ:
						//case S_ATTR_SPACE:
						//	void();break;
						//case S_TAG_CLOSE:
						//ignore warning
					}
				} else {
					//not space
					//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
					//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
					switch (s) {
						//case S_TAG:void();break;
						//case S_ATTR:void();break;
						//case S_ATTR_NOQUOT_VALUE:void();break;
						case S_ATTR_SPACE:
							if (!isHTML) {
								errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
							}
							addAttribute(attrName, attrName, start);
							start = p;
							s = S_ATTR;
							break;
						case S_ATTR_END:
							errorHandler.warning('attribute space is required"' + attrName + '"!!');
						case S_TAG_SPACE:
							s = S_ATTR;
							start = p;
							break;
						case S_EQ:
							s = S_ATTR_NOQUOT_VALUE;
							start = p;
							break;
						case S_TAG_CLOSE:
							throw new Error("elements closed character '/' and '>' must be connected to");
					}
				}
		} //end outer switch
		p++;
	}
}

/**
 * @returns
 * `true` if a new namespace has been defined.
 */
function appendElement(el, domBuilder, currentNSMap) {
	var tagName = el.tagName;
	var localNSMap = null;
	var i = el.length;
	while (i--) {
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if (nsp > 0) {
			var prefix = (a.prefix = qName.slice(0, nsp));
			var localName = qName.slice(nsp + 1);
			var nsPrefix = prefix === 'xmlns' && localName;
		} else {
			localName = qName;
			prefix = null;
			nsPrefix = qName === 'xmlns' && '';
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName;
		//prefix == null for no ns prefix attribute
		if (nsPrefix !== false) {
			//hack!!
			if (localNSMap == null) {
				localNSMap = Object.create(null);
				_copy(currentNSMap, (currentNSMap = Object.create(null)));
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = NAMESPACE.XMLNS;
			domBuilder.startPrefixMapping(nsPrefix, value);
		}
	}
	var i = el.length;
	while (i--) {
		a = el[i];
		if (a.prefix) {
			//no prefix attribute has no namespace
			if (a.prefix === 'xml') {
				a.uri = NAMESPACE.XML;
			}
			if (a.prefix !== 'xmlns') {
				a.uri = currentNSMap[a.prefix];
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if (nsp > 0) {
		prefix = el.prefix = tagName.slice(0, nsp);
		localName = el.localName = tagName.slice(nsp + 1);
	} else {
		prefix = null; //important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = (el.uri = currentNSMap[prefix || '']);
	domBuilder.startElement(ns, localName, tagName, el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if (el.closed) {
		domBuilder.endElement(ns, localName, tagName);
		if (localNSMap) {
			for (prefix in localNSMap) {
				if (hasOwn(localNSMap, prefix)) {
					domBuilder.endPrefixMapping(prefix);
				}
			}
		}
	} else {
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}

function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
	// https://html.spec.whatwg.org/#raw-text-elements
	// https://html.spec.whatwg.org/#escapable-raw-text-elements
	// https://html.spec.whatwg.org/#cdata-rcdata-restrictions:raw-text-elements
	// TODO: https://html.spec.whatwg.org/#cdata-rcdata-restrictions
	var isEscapableRaw = isHTMLEscapableRawTextElement(tagName);
	if (isEscapableRaw || isHTMLRawTextElement(tagName)) {
		var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
		var text = source.substring(elStartEnd + 1, elEndStart);

		if (isEscapableRaw) {
			text = text.replace(ENTITY_REG, entityReplacer);
		}
		domBuilder.characters(text, 0, text.length);
		return elEndStart;
	}
	return elStartEnd + 1;
}

function _copy(source, target) {
	for (var n in source) {
		if (hasOwn(source, n)) {
			target[n] = source[n];
		}
	}
}

/**
 * @typedef ParseUtils
 * @property {function(relativeIndex: number?): string | undefined} char
 * Provides look ahead access to a singe character relative to the current index.
 * @property {function(): number} getIndex
 * Provides read-only access to the current index.
 * @property {function(reg: RegExp): string | null} getMatch
 * Applies the provided regular expression enforcing that it starts at the current index and
 * returns the complete matching string,
 * and moves the current index by the length of the matching string.
 * @property {function(): string} getSource
 * Provides read-only access to the complete source.
 * @property {function(places: number?): void} skip
 * moves the current index by places (defaults to 1)
 * @property {function(): number} skipBlanks
 * Moves the current index by the amount of white space that directly follows the current index
 * and returns the amount of whitespace chars skipped (0..n),
 * or -1 if the end of the source was reached.
 * @property {function(): string} substringFromIndex
 * creates a substring from the current index to the end of `source`
 * @property {function(compareWith: string): boolean} substringStartsWith
 * Checks if source contains `compareWith`,
 * starting from the current index.
 * @see {@link parseUtils}
 */

/**
 * A temporary scope for parsing and look ahead operations in `source`,
 * starting from index `start`.
 *
 * Some operations move the current index by a number of positions,
 * after which `getIndex` returns the new index.
 *
 * @param {string} source
 * @param {number} start
 * @returns {ParseUtils}
 */
function parseUtils(source, start) {
	var index = start;

	function char(n) {
		n = n || 0;
		return source.charAt(index + n);
	}

	function skip(n) {
		n = n || 1;
		index += n;
	}

	function skipBlanks() {
		var blanks = 0;
		while (index < source.length) {
			var c = char();
			if (c !== ' ' && c !== '\n' && c !== '\t' && c !== '\r') {
				return blanks;
			}
			blanks++;
			skip();
		}
		return -1;
	}
	function substringFromIndex() {
		return source.substring(index);
	}
	function substringStartsWith(text) {
		return source.substring(index, index + text.length) === text;
	}

	function getMatch(args) {
		var expr = g.reg('^', args);
		var match = expr.exec(substringFromIndex());
		if (match) {
			skip(match[0].length);
			return match[0];
		}
		return null;
	}
	return {
		char: char,
		getIndex: function () {
			return index;
		},
		getMatch: getMatch,
		getSource: function () {
			return source;
		},
		skip: skip,
		skipBlanks: skipBlanks,
		substringFromIndex: substringFromIndex,
		substringStartsWith: substringStartsWith,
	};
}

/**
 * @param {ParseUtils} p
 * @param {DOMHandler} errorHandler
 * @returns {string}
 */
function parseDoctypeInternalSubset(p, errorHandler) {
	/**
	 * @param {ParseUtils} p
	 * @param {DOMHandler} errorHandler
	 * @returns {string}
	 */
	function parsePI(p, errorHandler) {
		var match = g.PI.exec(p.substringFromIndex());
		if (!match) {
			return errorHandler.fatalError('processing instruction is not well-formed at position ' + p.getIndex());
		}
		if (match[1].toLowerCase() === 'xml') {
			return errorHandler.fatalError(
				'xml declaration is only allowed at the start of the document, but found at position ' + p.getIndex()
			);
		}
		p.skip(match[0].length);
		return match[0];
	}
	// Parse internal subset
	var source = p.getSource();
	if (p.char() === '[') {
		p.skip(1);
		var intSubsetStart = p.getIndex();
		while (p.getIndex() < source.length) {
			p.skipBlanks();
			if (p.char() === ']') {
				var internalSubset = source.substring(intSubsetStart, p.getIndex());
				p.skip(1);
				return internalSubset;
			}
			var current = null;
			// Only in external subset
			// if (char() === '<' && char(1) === '!' && char(2) === '[') {
			// 	parseConditionalSections(p, errorHandler);
			// } else
			if (p.char() === '<' && p.char(1) === '!') {
				switch (p.char(2)) {
					case 'E': // ELEMENT | ENTITY
						if (p.char(3) === 'L') {
							current = p.getMatch(g.elementdecl);
						} else if (p.char(3) === 'N') {
							current = p.getMatch(g.EntityDecl);
						}
						break;
					case 'A': // ATTRIBUTE
						current = p.getMatch(g.AttlistDecl);
						break;
					case 'N': // NOTATION
						current = p.getMatch(g.NotationDecl);
						break;
					case '-': // COMMENT
						current = p.getMatch(g.Comment);
						break;
				}
			} else if (p.char() === '<' && p.char(1) === '?') {
				current = parsePI(p, errorHandler);
			} else if (p.char() === '%') {
				current = p.getMatch(g.PEReference);
			} else {
				return errorHandler.fatalError('Error detected in Markup declaration');
			}
			if (!current) {
				return errorHandler.fatalError('Error in internal subset at position ' + p.getIndex());
			}
		}
		return errorHandler.fatalError('doctype internal subset is not well-formed, missing ]');
	}
}

/**
 * Called when the parser encounters an element starting with '<!'.
 *
 * @param {string} source
 * The xml.
 * @param {number} start
 * the start index of the '<!'
 * @param {DOMHandler} domBuilder
 * @param {DOMHandler} errorHandler
 * @param {boolean} isHTML
 * @returns {number | never}
 * The end index of the element.
 * @throws {ParseError}
 * In case the element is not well-formed.
 */
function parseDoctypeCommentOrCData(source, start, domBuilder, errorHandler, isHTML) {
	var p = parseUtils(source, start);

	switch (p.char(2)) {
		case '-':
			// should be a comment
			var comment = p.getMatch(g.Comment);
			if (comment) {
				domBuilder.comment(comment, g.COMMENT_START.length, comment.length - g.COMMENT_START.length - g.COMMENT_END.length);
				return p.getIndex();
			} else {
				return errorHandler.fatalError('comment is not well-formed at position ' + p.getIndex());
			}
		case '[':
			// should be CDATA
			var cdata = p.getMatch(g.CDSect);
			if (cdata) {
				if (!isHTML && !domBuilder.currentElement) {
					return errorHandler.fatalError('CDATA outside of element');
				}
				domBuilder.startCDATA();
				domBuilder.characters(cdata, g.CDATA_START.length, cdata.length - g.CDATA_START.length - g.CDATA_END.length);
				domBuilder.endCDATA();
				return p.getIndex();
			} else {
				return errorHandler.fatalError('Invalid CDATA starting at position ' + start);
			}
		case 'D': {
			// should be DOCTYPE
			if (domBuilder.doc && domBuilder.doc.documentElement) {
				return errorHandler.fatalError('Doctype not allowed inside or after documentElement at position ' + p.getIndex());
			}
			if (!p.substringStartsWith(g.DOCTYPE_DECL_START)) {
				return errorHandler.fatalError('Expected ' + g.DOCTYPE_DECL_START + ' at position ' + p.getIndex());
			}
			p.skip(g.DOCTYPE_DECL_START.length);
			if (p.skipBlanks() < 1) {
				return errorHandler.fatalError('Expected whitespace after ' + g.DOCTYPE_DECL_START + ' at position ' + p.getIndex());
			}

			var doctype = {
				name: undefined,
				publicId: undefined,
				systemId: undefined,
				internalSubset: undefined,
			};
			// Parse the DOCTYPE name
			doctype.name = p.getMatch(g.Name);
			if (!doctype.name)
				return errorHandler.fatalError('doctype name missing or contains unexpected characters at position ' + p.getIndex());
			p.skipBlanks();

			// Check for ExternalID
			if (p.substringStartsWith(g.PUBLIC) || p.substringStartsWith(g.SYSTEM)) {
				var match = g.ExternalID_match.exec(p.substringFromIndex());
				if (!match) {
					return errorHandler.fatalError('doctype external id is not well-formed at position ' + p.getIndex());
				}
				if (match.groups.SystemLiteralOnly !== undefined) {
					doctype.systemId = match.groups.SystemLiteralOnly;
				} else {
					doctype.systemId = match.groups.SystemLiteral;
					doctype.publicId = match.groups.PubidLiteral;
				}
				p.skip(match[0].length);
			}

			p.skipBlanks();
			doctype.internalSubset = parseDoctypeInternalSubset(p, errorHandler);
			p.skipBlanks();
			if (p.char() !== '>') {
				return errorHandler.fatalError('doctype not terminated with > at position ' + p.getIndex());
			}
			p.skip(1);
			domBuilder.startDTD(doctype.name, doctype.publicId, doctype.systemId, doctype.internalSubset);
			domBuilder.endDTD();
			return p.getIndex();
		}
		default:
			return errorHandler.fatalError('Not well-formed XML starting with "<!" at position ' + start);
	}
}

function parseProcessingInstruction(source, start, domBuilder, errorHandler) {
	var match = source.substring(start).match(g.PI);
	if (!match) {
		return errorHandler.fatalError('Invalid processing instruction starting at position ' + start);
	}
	if (match[1].toLowerCase() === 'xml') {
		if (start > 0) {
			return errorHandler.fatalError(
				'processing instruction at position ' + start + ' is an xml declaration which is only at the start of the document'
			);
		}
		if (!g.XMLDecl.test(source.substring(start))) {
			return errorHandler.fatalError('xml declaration is not well-formed');
		}
	}
	domBuilder.processingInstruction(match[1], match[2]);
	return start + match[0].length;
}

function ElementAttributes() {
	this.attributeNames = Object.create(null);
}

ElementAttributes.prototype = {
	setTagName: function (tagName) {
		if (!g.QName_exact.test(tagName)) {
			throw new Error('invalid tagName:' + tagName);
		}
		this.tagName = tagName;
	},
	addValue: function (qName, value, offset) {
		if (!g.QName_exact.test(qName)) {
			throw new Error('invalid attribute:' + qName);
		}
		this.attributeNames[qName] = this.length;
		this[this.length++] = { qName: qName, value: value, offset: offset };
	},
	length: 0,
	getLocalName: function (i) {
		return this[i].localName;
	},
	getLocator: function (i) {
		return this[i].locator;
	},
	getQName: function (i) {
		return this[i].qName;
	},
	getURI: function (i) {
		return this[i].uri;
	},
	getValue: function (i) {
		return this[i].value;
	},
	//	,getIndex:function(uri, localName)){
	//		if(localName){
	//
	//		}else{
	//			var qName = uri
	//		}
	//	},
	//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
	//	getType:function(uri,localName){}
	//	getType:function(i){},
};

exports.XMLReader = XMLReader;
exports.parseUtils = parseUtils;
exports.parseDoctypeCommentOrCData = parseDoctypeCommentOrCData;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/**
 * JSONP : Implémentation du protocole JSONP de la plateforme Géoportail
 *
 * @module JSONP
 * @private
 * @alias Gp.Protocols.JSONP
 */


// cf. https://github.com/sobstel/jsonp.js
var JSONP = {
  /**
   * Construction d'un identifiant statique basé sur le timestamp,
   * et qui s'incremente de +1 à chaque appel
   */
  uuid: function () {
    var id = Math.floor(Date.now());
    return function () {
      return id++;
    };
  }(),
  /**
   * Cette fonction réalise l'appel du service fourni via le paramètre "options.url"
   * en mettant en œuvre le protocole JSONP.
   *
   * @method call
   * @static
   * @param {Object} options - parametres d'invocation du service en JSONP
   * @param {String} options.url - URL du service à invoquer (indépendamment du protocole JSONP).
   *  Cette URL contient déjà les paramètres du service.
   *  Si le paramètre dédié à la mise en oeuvre du protocole JSONP (callback=xxx) n'est pas présent, il est rajouté par la fonction ;
   *  sa valeur est déterminée en fonction du paramètre callbackName.
   * @param {Number} [options.timeOut = 0] - Nombre de ms au bout duquel on considère que le service n'a pas répondu.
   *  Une valeur de 0 pour ce paramètre permet de désactiver la gestion du timeOut.
   * @param {String} [options.callbackSuffix = null] - Suffixe de la fonction de callback à rajouter sur l'URL.
   *  Si aucun suffixe n'est spécifié (cas par défaut), on utilisera l'identifiant this.uuid () comme suffixe. Ex: "callback1458574396582 ()"
   * @param {String} [options.callbackName = gp.protocol.jsonp] - Valeur du paramètre callback à rajouter sur l'URL.
   *  Si l'URL fournie contient déjà le paramètre callback, le paramètre callbackName ne sera pas pris en compte.
   *  La fonction de callback est créée dynamiquement par la fonction JSONP ;
   *  elle a deux fonctions :
   *    elle annule la condition de timeOut
   *    puis appelle la fonction fournie par l'utilisateur via le paramètre onResponse.
   * @param {Function} options.onResponse - Nom de la fonction qui sera appelée lors de la réception des résultats du service.
   *  Ce paramètre sera ignoré si l'URL contient déjà le paramètre callback.
   *  La fonction de rappel appelée sera alors celle ayant pour nom la valeur de ce paramètre.
   * @param {Function} [options.onTimeOut] - Nom de la fonction qui sera appelée en cas de non réponse du service.
   *  Le temps au bout duquel on considère que le service n'a pas répondu est déterminé par le paramètre timeOut.
   *  @example
   *  var options = {
   *      url : 'http://localhost/some/test.json&callback=myResults',
   *      timeOut : 100,
   *      callbackName : 'myResults',
   *      callbackSuffix : "",
   *      onResponse : function (response) {
   *          console.log('results : ', response);
   *      },
   *
   *   };
   *   JSONP.call(options);
   */
  call: function call(options) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("JSONP");
    logger.trace("[JSONP::call ()]");

    // analyse parametres

    if (!options) {
      logger.error("missing parameter : options !");
      throw new Error("missing parameter : options !");
    }
    if (!options.url) {
      logger.error("missing parameter : options.url !");
      throw new Error("missing parameter : options.url !");
    }
    if (!options.timeOut) {
      logger.info("setting 'options.timeOut' default value");
      options.timeOut = 0;
    }

    // FIXME si un callback coté client a été mis en place,
    // cette condition sur cette methode n'a pas de sens !?
    if (!options.onResponse) {
      logger.error("missing parameter : options.onResponse !");
      throw new Error("missing parameter : options.onResponse !");
      // FIXME doit on definir un callback interne par defaut !?
      // options.onResponse = function (data) {
      //    console.log("response callback (inner) : ", data);
      // };
    }

    // ID du callback à utiliser : null ou string.
    // si l'utilisateur a spécifié un suffixe pour le callback, on le récupère comme un ID (ex: options.callbackSuffix = "")
    // sinon, on utilise un timestamp : this.uuid ()
    var callbackId = typeof options.callbackSuffix === "string" ? options.callbackSuffix : this.uuid();

    // on recherche le parametre callback et son nom de fonction dans l'url
    var urlHasCallbackKey = false;
    var urlHasCallbackName = false;
    var idx = options.url.indexOf("callback=");
    if (idx !== -1) {
      urlHasCallbackKey = true;
      // extraction callbackName de l'url : entre "callback=" et "&" ou fin de ligne
      var j = options.url.indexOf("&", idx);
      if (j === -1) {
        j = options.url.length;
      }

      // on ecrase le parametre options.callbackName s'il avait été défini
      var callbackName = options.url.substring(idx + 9, j);
      if (callbackName) {
        urlHasCallbackName = true;
        options.callbackName = callbackName;
        logger.info("setting 'options.callbackName' value (" + options.callbackName + ") from 'options.url' parameter");
      }
    }

    // on ajoute le parametre callback dans l'URL s'il n'existe pas
    if (!urlHasCallbackKey) {
      // gestion des autres param. et "?"
      var k = options.url.indexOf("?");
      if (k === -1) {
        // aucun param., ni de '?'
        options.url = options.url + "?" + "callback=";
      } else if (k === options.url.length) {
        // uniquement le '?'
        options.url = options.url + "callback=";
      } else {
        // le '?' et les param. existent
        options.url = options.url + "&" + "callback=";
      }
      logger.info("setting callback default key in 'options.url' : " + options.url);
    }

    // utilisation de la fonction callback coté client ?
    var HasCallbackName = options.callbackName ? true : urlHasCallbackName;

    // on ajoute le nom de la fonction callback dans l'URL si elle n'existe pas
    if (!urlHasCallbackName) {
      // fonction callback par defaut
      if (!options.callbackName) {
        logger.info("setting 'options.callbackName' default value");
        options.callbackName = "callback"; // ou "gp.protocol.jsonp" ?
        // info : si on ne veut pas gerer d'ID dans le callback,
        // options.callbackSuffix = ""
        if (callbackId || callbackId === "") {
          options.callbackName += callbackId;
        }
      }
      options.url = options.url.replace("callback=", "callback=" + options.callbackName);
      logger.info("setting callback function name in 'options.url' : " + options.url);
    }

    // timeOut par defaut
    if (!options.onTimeOut) {
      logger.info("setting 'options.onTimeOut' default value");
      /** callback timeout par defaut */
      options.onTimeOut = function /* error */
      () {
        console.log("TimeOut while invoking url : " + options.url);
      };
    }
    if (!HasCallbackName) {
      var self = this;

      // event du timeout
      var onTimeOutTrigger = null;

      // declenche le timeout si > à 0 !
      if (options.timeOut > 0) {
        onTimeOutTrigger = window.setTimeout(function () {
          /** fonction de reponse du service */
          window[options.callbackName] = function () {};
          options.onTimeOut();
          self._deleteScript(callbackId);
        }, options.timeOut);
      }

      // FIXME le nom de la fonction n'accepte pas de namespace !
      // ex. Gp.Function.callback
      /**
      * fonction de reponse du service
      * @param {Object} data - data
      * @private
      */
      window[options.callbackName] = function (data) {
        window.clearTimeout(onTimeOutTrigger);
        options.onResponse(data);
        self._deleteScript(callbackId);
      };
    }
    this._createScript(callbackId, options.url);
  },
  /**
  * create Script
  * @param {String} callbackId - callback Id
  * @param {String} url - url
  * @private
  */
  _createScript: function _createScript(callbackId, url) {
    var scriptu;
    var scripto = document.getElementById("results" + callbackId);
    scriptu = document.createElement("script");
    scriptu.setAttribute("type", "text/javascript");
    scriptu.setAttribute("src", url);
    scriptu.setAttribute("charset", "UTF-8");
    scriptu.setAttribute("id", "results" + callbackId);
    scriptu.setAttribute("async", "true"); // FIXME async ?
    // head ou body ou autres ?
    var node = document.documentElement || document.getElementsByTagName("head")[0];
    if (scripto === null) {
      node.appendChild(scriptu);
    } else {
      // s'il existe déjà, on le remplace !
      node.replaceChild(scriptu, scripto);
    }
  },
  /**
  * delete Script
  * @param {String} callbackId - callback Id
  * @private
  */
  _deleteScript: function _deleteScript(callbackId) {
    var script = document.getElementById("results" + callbackId);
    if (script) {
      var node = script.parentNode || document.documentElement;
      if (!node) {
        return;
      }
      node.removeChild(script);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (JSONP);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Errors raised by API for one among three reasons : wrong API usage, underlying service error or unknown reason.
 *
 * @property {String} message - Error message
 * @property {Number} status - Error status : when {@link Gp.Error.TYPE_SRVERR}, gives the [HTTP status of the underlying web service response]{@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes} ; -1 otherwise.
 * @property {String} type - Error type ({@link Gp.Error.TYPE_SRVERR}, {@link Gp.Error.TYPE_USEERR} or {@link Gp.Error.TYPE_UNKERR}).
 *
 * @namespace
 * @alias Gp.Error
 * @param {Object|String} error - Options for creating error object. Can be a String (message) or an Object.
 * @param {String} error.message - Error message to return to user.
 * @param {enum} [error.type=TYPE_UNKERR] - Error type
 * @param {status} [error.status=-1] - Error status : when {@link Gp.Error.TYPE_SRVERR}, gives the [HTTP status of the underlying web service response]{@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}.
 *
 */
function ErrorService(error) {
  if (!(this instanceof ErrorService)) {
    throw new TypeError("ErrorService constructor cannot be called as a function.");
  }
  var e = error;
  if (typeof error === "string" || error instanceof String) {
    this.message = error;
    this.status = -1;
    this.type = ErrorService.TYPE_UNKERR;
  } else {
    this.message = e.message || "undefined!?";
    this.type = e.type;
    this.status = e.status || -1;
  }
  this.name = "ErrorService";
  this.stack = new Error().stack;
}

/**
 * Error raised when underlying geoportal service answers on error.
 *
 * @type {String}
 * @constant
 * @static
 */
ErrorService.TYPE_SRVERR = "SERVICE_ERROR";
/**
 * Error raised when funcion use is inappropriate
 *
 * @type {String}
 * @constant
 * @static
 */
ErrorService.TYPE_USEERR = "USAGE_ERROR";
/**
 * Error raised when API can't perform the job for a reason other than the two other ones.
 *
 * @type {String}
 * @constant
 * @static
 */
ErrorService.TYPE_UNKERR = "UNKNOWN_ERROR";

/**
 * @lends module:ErrorService
 */
ErrorService.prototype = Object.create(Error.prototype, {
  constructor: {
    value: ErrorService,
    writable: true,
    configurable: true
  }
});
/* harmony default export */ __webpack_exports__["default"] = (ErrorService);

/***/ }),
/* 25 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"geoportal-access-lib\",\"version\":\"3.4.6\",\"date\":\"19/12/2024\",\"description\":\"French Geoportal resources access library\",\"module\":\"src/Gp.js\",\"main\":\"dist/GpServices-src.js\",\"homepage\":\"https://github.com/IGNF/geoportal-access-lib#readme\",\"scripts\":{\"clean\":\"echo \\\"Warning: no yet implemented!\\\" && exit 0\",\"setup\":\"npm install\",\"cover\":\"nyc --reporter=lcov --reporter=text npm run test\",\"eslint\":\"eslint src/\",\"build\":\"webpack --mode=none\",\"build:prod\":\"webpack --mode=production\",\"build:dev\":\"webpack --mode=development\",\"test\":\"npx instant-mocha --mode=development --reporter mochawesome --reporter-options reportDir=test-report,reportFilename=index --webpack-config ./test/webpack/webpack.test.js --glob \\\"test_*.js\\\" test/spec/\",\"test:serve\":\"webpack-dev-server --hot --config ./test/webpack/webpack.test.serve.js\",\"test:serve:docker\":\"webpack-dev-server --hot --config ./test/webpack/webpack.test.serve.docker.js\",\"test:end-to-end:serve\":\"webpack-dev-server --hot --config ./test/webpack/webpack.end-to-end.serve.js\",\"test:end-to-end:serve:docker\":\"webpack-dev-server --hot --config ./test/webpack/webpack.end-to-end.serve.docker.js\",\"sample\":\"npm run sample:serve\",\"sample:serve\":\"webpack-dev-server --mode=none --open-page samples/index-src.html --https --content-base . --output-public-path '/dist/' --port 9001 --open\",\"sample:serve:prod\":\"webpack-dev-server --mode=production --open-page samples/index-prod.html --content-base . --output-public-path '/dist/' --port 9001 --open\",\"sample:serve:dev\":\"webpack-dev-server --mode=development --open-page samples/index-map.html --content-base . --output-public-path '/dist/' --port 9001 --open\",\"doc\":\"npm run doc:serve\",\"doc:serve\":\"webpack-dev-server --content-base jsdoc --port 9001 --open\"},\"engines\":{\"node\":\">=20\"},\"nyc\":{\"include\":[\"src/**/*.js\"],\"instrument\":false,\"sourceMap\":false},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/IGNF/geoportal-access-lib.git\"},\"keywords\":[\"geoplateforme\",\"geoportail\",\"webservice\",\"javascript\",\"es6\"],\"author\":\"IGNF\",\"license\":\"CECILL-B\",\"dependencies\":{\"@xmldom/xmldom\":\"^0.9.6\",\"es6-promise\":\"^4.2.4\",\"node-fetch\":\"^2.6.1\"},\"devDependencies\":{\"@babel/core\":\"^7.12.10\",\"@babel/plugin-transform-template-literals\":\"^7.12.1\",\"@babel/preset-env\":\"^7.12.11\",\"babel-loader\":\"^8.2.2\",\"chai\":\"^4.1.2\",\"clean-webpack-plugin\":\"^4.0.0\",\"copy-webpack-plugin\":\"^5.1.2\",\"eslint\":\"^7.18.0\",\"eslint-config-standard\":\"^16.0.2\",\"eslint-loader\":\"^4.0.2\",\"eslint-plugin-import\":\"^2.22.1\",\"eslint-plugin-node\":\"^11.1.0\",\"eslint-plugin-promise\":\"^4.2.1\",\"eslint-plugin-standard\":\"^5.0.0\",\"glob\":\"^7.1.2\",\"handlebars-layouts\":\"^3.1.4\",\"handlebars-webpack-plugin\":\"^1.4.1\",\"html-webpack-plugin\":\"^4.5.2\",\"instant-mocha\":\"^1.5.3\",\"istanbul-instrumenter-loader\":\"^3.0.1\",\"jsdoc-webpack-plugin\":\"^0.3.0\",\"loglevel\":\"^1.6.1\",\"mocha\":\"^8.4.0\",\"mocha-loader\":\"^5.1.5\",\"mochawesome\":\"^6.2.1\",\"nyc\":\"^15.1.0\",\"path\":\"^0.12.7\",\"replace-bundle-webpack-plugin\":\"^1.0.0\",\"sinon\":\"^9.2.4\",\"sinon-es6\":\"0.0.3\",\"speed-measure-webpack-plugin\":\"^1.4.2\",\"string-template\":\"^1.0.0\",\"terser-webpack-plugin\":\"^4.2.3\",\"webpack\":\"^4.47.0\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-server\":\"^3.11.2\",\"webpack-node-externals\":\"^2.5.2\",\"webpack-shell-plugin\":\"^0.5.0\"},\"bundleDependencies\":[]}");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// cette classe contient les URLs par defaut des services.
//  DefaultUrlService.Alti.url(key)[elevation-json]
//  DefaultUrlService.Alti.url(key)[elevation-xml]
//  DefaultUrlService.Alti.url(key)[profil-json]
//  DefaultUrlService.Alti.url(key)[profil-xml]
//  DefaultUrlService.ProcessIsoCurve.url(key)
//  DefaultUrlService.AutoComplete.url(key)
//  DefaultUrlService.ReverseGeocode.url(key)
//  DefaultUrlService.Geocode.url(key)
//  DefaultUrlService.Route.url(key)

// Example :
//
// DefaultUrlService.Alti.url('alti')[elevation-json]
//  output {String} -> http://wxs.ign.fr/calcul/alti/rest/elevation.json
//
// DefaultUrlService.Alti.url('calcul')
// output {Object|String}
// -> http://wxs.ign.fr/calcul/alti/rest/elevation.json
// -> http://wxs.ign.fr/calcul/alti/rest/elevation.xml
// -> http://wxs.ign.fr/calcul/alti/rest/elevationLine.json
// -> http://wxs.ign.fr/calcul/alti/rest/elevationLine.xml
//
// ssl by default.
//
// Force to not do ssl :
// DefaultUrlService.ssl = false;
//
// DefaultUrlService.AutoComplete.url('calcul')
// output {Object|String}
// -> https://wxs.ign.fr/calcul/ols/apis/completion

/**
 * Default Geoportal web services URLs access.
 *
 * @namespace
 * @alias Gp.Services.DefaultUrl
 */
var DefaultUrlService = {
  /** if set true, require the use of https protocol */
  ssl: true,
  /**
  * base new-url of geoplateforme services (ssl protocol management)
  * @param {String} path - path
  * @returns {String} url
  */
  newUrl: function newUrl(path) {
    var NEW_GPF_HOSTNAME = "data.geopf.fr";

    // comportement par défaut => https
    // sinon, il est fixé par l'option 'ssl' (false => http)
    var _protocol;
    if (DefaultUrlService.ssl === false) {
      _protocol = "http://";
    } else {
      _protocol = "https://";
    }
    return _protocol + NEW_GPF_HOSTNAME + path;
  },
  /**
   * Elevation web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns elevation service default urls with or without geoportal access key given as a parameter. The result is a javascript object with different urls given used protocols ("elevation-json", "elevation-xml", "profil-json" or "profil-xml").
   */
  Alti: {
    new_key: {
      // rest
      "elevation-json": "/altimetrie/1.0/calcul/alti/rest/elevation.json",
      "elevation-xml": "/altimetrie/1.0/calcul/alti/rest/elevation.xml",
      "profil-json": "/altimetrie/1.0/calcul/alti/rest/elevationLine.json",
      "profil-xml": "/altimetrie/1.0/calcul/alti/rest/elevationLine.xml"
    },
    /**
    * newurl from geoplateforme service
    * @param {String} key - key
    * @returns {String} url
    */
    newUrl: function newUrl() {
      return {
        // rest
        "elevation-json": DefaultUrlService.newUrl(this.new_key["elevation-json"]),
        "elevation-xml": DefaultUrlService.newUrl(this.new_key["elevation-xml"]),
        "profil-json": DefaultUrlService.newUrl(this.new_key["profil-json"]),
        "profil-xml": DefaultUrlService.newUrl(this.new_key["profil-xml"])
      };
    }
  },
  /**
   * IsoCurve web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns isocurve service default urls with or without geoportal access key given as a parameter. The result is a javascript object with different urls given used protocols ("iso-json" or "iso-xml").
   */
  ProcessIsoCurve: {
    new_key: "/navigation/isochrone",
    /**
    * url from geoplateforme service
    * @returns {String} url
    */
    newUrl: function newUrl() {
      return DefaultUrlService.newUrl(this.new_key);
    }
  },
  /**
   * Config web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns config service default urls with or without geoportal access key given as a parameter.
   */
  Config: {
    _key: "https://raw.githubusercontent.com/IGNF/geoportal-configuration/new-url/dist/",
    /**
    * url
    * @param {String} key - key
    * @returns {String} url
    */
    url: function url(key) {
      // key must be an array of one or several keys
      if (!Array.isArray(key)) {
        key = key.split(",");
      }
      // not homogeneous with others geoportal services URLs
      var url = [];
      for (var i = 0; i < key.length; i++) {
        url[i] = this._key + key[i] + "Config.json";
      }
      return url;
    }
  },
  /**
   * Autocompletion web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns autocomplete service default urls with or without geoportal access key given as a parameter. The result is a String.
   */
  AutoComplete: {
    new_key: "/geocodage/completion",
    /**
    * url from geoplateforme service
    * @returns {String} url
    */
    newUrl: function newUrl() {
      return DefaultUrlService.newUrl(this.new_key);
    }
  },
  /**
   * Reverse geocoding web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns reverse geocoding service default urls with or without geoportal access key given as a parameter. The result is a String.
   */
  ReverseGeocode: {
    new_key: "/geocodage/reverse",
    /**
    * url from geoplateforme service
    * @returns {String} url
    */
    newUrl: function newUrl() {
      return DefaultUrlService.newUrl(this.new_key);
    }
  },
  /**
   * Geocoding web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns geocoding service default urls with or without geoportal access key given as a parameter. The result is a String.
   */
  Geocode: {
    new_key: "/geocodage/search",
    /**
    * url from geoplateforme service
    * @returns {String} url
    */
    newUrl: function newUrl() {
      return DefaultUrlService.newUrl(this.new_key);
    }
  },
  /**
   * Routing web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns routing service default urls with or without geoportal access key given as a parameter. The result is a javascript object with different urls given used protocols.
   */
  Route: {
    new_key: "/navigation/itineraire",
    /**
    * url from geoplateforme service
    * @returns {String} url
    */
    newUrl: function newUrl() {
      return DefaultUrlService.newUrl(this.new_key);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DefaultUrlService);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
function ConfigInterface() {
  if (!(this instanceof ConfigInterface)) {
    throw new TypeError("ConfigInterface constructor cannot be called as a function.");
  }
  this.generalOptions = {
    apiKeys: {},
    title: null,
    defaultGMLGFIStyle: null,
    theme: null,
    wgs84Resolutions: []
  };
  this.layers = {};
  this.tileMatrixSets = {};
}
ConfigInterface.prototype = {
  /*
   * Constructor (alias)
   */
  constructor: ConfigInterface,
  /**
   * Check if config is loaded for a given key
   *
   * @param {String} apiKey - Access key to Geoportal platform
   * @returns {Boolean} isKeyConfLoaded - true if config of the key is already loaded, false otherwise
   */
  isKeyConfLoaded: function isKeyConfLoaded(apiKey) {
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
  getLayersId: function getLayersId(apiKey) {
    return this.generalOptions.apiKeys[apiKey];
  },
  /**
   * Returns the id of a Geoportal layer with its name and its service.
   *
   * @param {String} layerName - name of the layer (ex. "ORTHOIMAGERY.ORTHOPHOTOS")
   * @param {String} service   - name of the service (ex. "WMS" ou "WMTS")
   * @returns {String} Id of the layer (ex. "ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS")
   */
  getLayerId: function getLayerId(layerName, service) {
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
  getLayersConf: function getLayersConf(apiKey) {
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
  getLayerConf: function getLayerConf(layerId) {
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
  getLayerParams: function getLayerParams(layerName, service) {
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
          var wmsTypeRegex = /\/v\//;
          // WMS vector style always empty (not in getCap)
          if (wmsTypeRegex.test(params.url)) {
            params.styles = " ";
          } else {
            // WMS raster style is defined in getCap
            params.styles = layerConf.styles[0].name;
          }
        }
        params.version = layerConf.serviceParams.version;
        params.format = layerConf.formats && layerConf.formats.length ? layerConf.formats[0].name : "";
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
  getLayerKey: function getLayerKey(layerId) {
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
  getTileMatrixSets: function getTileMatrixSets() {
    return this.tileMatrixSets;
  },
  /**
   * Returns a Tile Matrix Sets configuration, given its identifier.
   *
   * @param {String} tmsID - Tile Matrix Set identifier (e.g. : "PM")
   * @return {Object} tileMatrixSet - Tile Matrix Set configuration
   * @see Gp.Services.Config.TileMatrixSet
   */
  getTMSConf: function getTMSConf(tmsID) {
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
  getGlobalConstraints: function getGlobalConstraints(layerId) {
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
/* harmony default export */ __webpack_exports__["default"] = (ConfigInterface);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _Request_AltiRequestFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _Response_AltiResponseFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);








/**
 * @classdesc
 *
 * Appel du service d'altimétrie du Géoportail
 *
 * @todo gestion du parma. output et callback
 * @todo outputFormat (REST) et format (WPS)
 * @todo La reponse JSON peut encapsuler un XML !
 *
 * @constructor
 * @extends {Gp.Services.CommonService}
 * @alias Gp.Services.Alti
 * @param {Object} options - options spécifiques au service (+ les options heritées)
 *
 * @param {Array.<Object>} options.positions - Tableau ({lon:float,lat:float}) contenant les coordonnées des points (CRS:84)
 *      dont on veut connaître les altitudes (ou à partir desquelles on va calculer le profil).
 *      Chaque élément du tableau est un objet JavaScript avec deux attributs : lon et lat, qui sont des flottants.
 *      Minimum 2 éléments si on souhaite calculer un profil altimétrique (ElevationLine).
 *      Maximum 50 éléments.
 *
 * @param {String} options.outputFormat - Le format de la réponse du service alti : 'xml' ou 'json'.
 *      Ce paramètre déterminera l'extension '.xml' ou '.json' du service dans le cas de l'API REST,
 *      ou la valeur du paramètre 'format' dans le cas de la norme WPS.
 *      Nécessaire si serverUrl est renseigné, et qu'on souhaite passer par l'API REST,
 *      pour connaître le format dans lequel sera fournie la réponse (pour son traitement).
 *      Non nécessaire pour la norme WPS. Par défaut, ce paramètre vaut 'json'.
 *
 * @param {Number} [options.sampling] - Nombre de points à utiliser pour déterminer le tracé d'un profil altimétrique, compris entre 2 et 5000.
 *      A spécifier lorsqu'on souhaite accéder à cette fonctionnalité.
 *      Dans ce cas, les points fournis en entrée (au minimum de deux) servent à déterminer l'axe planimétrique
 *      le long duquel le profil doit être calculé.
 *      Si le paramètre sampling n'est pas spécifié ou moins de deux points sont fournis,
 *      c'est le service Elevation qui sera interrogé (altitudes simples calculées pour les points fournis).
 *      Une valeur de sampling strictement inférieure à 2 déclenchera un échantillonnage avec la valeur par défaut du service (3 points).
 *
 * @param {String} [options.api] - Manière d'accéder au service : 'REST' (via l'API REST) ou 'WPS' (via la norme WPS).
 *      Par défaut, on utilise l'API REST.
 *
 * @param {Boolean} [options.zonly] - Permet de ne récupérer que les altitudes en sortie s'il vaut 'true'.
 *      Vaut 'false' par défaut.
 *
 * @param {String} [options.resource] - Resource utilisée pour réaliser le calcul.
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
 *      positions : [{lon:, lat:}, {lon:, lat:}],
 *      outputFormat : 'json' // json|xml
 *      sampling : 3,
 *      api : 'REST', // REST|WPS
 *      zonly : false // false|true,
 *      resource : "resource-par-defaut"
 *   };
 *
 */
function Alti(options) {
  if (!(this instanceof Alti)) {
    throw new TypeError(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("CLASS_CONSTRUCTOR", "Alti"));
  }

  /**
   * Nom de la classe (heritage)
   * FIXME instance ou classe ?
   */
  this.CLASSNAME = "Alti";

  // appel du constructeur par heritage
  _CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].apply(this, arguments);
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("Gp.Services.Alti");
  this.logger.trace("[Constructeur Alti (options)]");

  // #####################
  // analyse des options
  // #####################

  if (!options.positions) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "positions"));
  }
  if (options.positions.length === 0) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_EMPTY", "positions"));
  }

  // ajout des options spécifiques au service
  this.options.positions = options.positions;

  // format de réponse du service : "json" ou "xml" (valeur par défaut), en minuscule !
  this.options.outputFormat = typeof options.outputFormat === "string" ? options.outputFormat.toLowerCase() : "xml";

  // ressource utilisée pour le calcul altimétrique
  this.options.resource = options.resource || "ign_rge_alti_wld";

  // sampling
  this.options.sampling = options.sampling || null;

  // type d'api utilisé pour requeter le service, en majuscule !
  this.options.api = typeof options.api === "string" ? options.api.toUpperCase() : "REST";

  // l'api ne peut être interrogée qu'en GET.
  if (this.options.api === "REST") {
    this.options.httpMethod = "GET";
  }

  // param. zonly
  this.options.zonly = options.zonly || false;

  // param. measures
  this.options.measures = options.measures || false;

  // gestion de l'url du service par defaut
  // si l'url n'est pas renseignée, il faut utiliser les urls par defaut
  // en fonction du type d'api, REST ou WPS, du format de reponse demandé (outputFormat)
  // ainsi que sur le type de service (profil ou elevation)
  if (!this.options.serverUrl) {
    var lstUrlByDefault = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__["default"].Alti.newUrl();
    var urlFound = null;
    switch (this.options.api) {
      case "WPS":
        urlFound = lstUrlByDefault.wps;
        break;
      case "REST":
        var key = (options.sampling ? "profil" : "elevation") + "-" + this.options.outputFormat;
        urlFound = lstUrlByDefault[key];
        break;
      default:
        throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_UNKNOWN", "api"));
    }
    if (!urlFound) {
      throw new Error("Url by default not found !");
    }
    this.options.serverUrl = urlFound;
    this.logger.trace("Server URL by default : " + this.options.serverUrl);
  }

  // gestion du type de service
  // si l'extension de l'url est .json ou .xml, on surcharge le format de sortie (outputFormat)
  var idx = this.options.serverUrl.lastIndexOf(".");
  if (idx !== -1) {
    var extension = this.options.serverUrl.substring(idx + 1);
    if (extension && extension.length < 5) {
      // FIXME extension de moins de 4 car. ...
      this.logger.trace("Server Extension URL : " + extension);
      switch (extension.toLowerCase()) {
        case "json":
        case "xml":
          this.options.outputFormat = extension.toLowerCase();
          break;
        default:
          throw new Error("type of service : unknown or unsupported (json or xml) !");
      }
    }
  }
}

/**
 * @lends module:Alti#
 */
Alti.prototype = Object.create(_CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].prototype, {
  // todo
  // getter/setter
});

/**
 * Constructeur (alias)
 */
Alti.prototype.constructor = Alti;

/**
 * Création de la requête (overwrite)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Alti.prototype.buildRequest = function (error, success) {
  // utilisation en mode callback
  var options = {
    httpMethod: this.options.httpMethod,
    // callback
    onSuccess: function onSuccess(result) {
      // sauvegarde de la requete !
      this.request = result;
      success.call(this, this.request);
    },
    onError: error,
    scope: this,
    // spécifique au service :
    resource: this.options.resource,
    positions: this.options.positions,
    outputFormat: this.options.outputFormat,
    sampling: this.options.sampling,
    api: this.options.api,
    zonly: this.options.zonly,
    measures: this.options.measures
  };
  _Request_AltiRequestFactory__WEBPACK_IMPORTED_MODULE_5__["default"].build(options);
};

/**
 * Analyse de la reponse (overwrite)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Alti.prototype.analyzeResponse = function (error, success) {
  // INFO
  // Factory pour masquer la complexité du retour du service qui renvoie soit
  //  - une 'string' qui contient du XML ou JSON natif en mode XHR
  //  - un objet JSON qui est natif ou encapsulé

  if (this.response) {
    var options = {
      response: this.response,
      outputFormat: this.options.outputFormat,
      // utile pour parser la string en mode XHR : JSON ou XML !
      rawResponse: this.options.rawResponse,
      onError: error,
      onSuccess: success,
      scope: this
    };
    _Response_AltiResponseFactory__WEBPACK_IMPORTED_MODULE_6__["default"].build(options);
  } else {
    error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Alti);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _AltiRequestREST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _AltiRequestWPS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/**
 * Creation d'une requête en REST ou WPS
 * (Factory)
 *
 * @module AltiRequestFactory
 * @alias Gp.Services.Alti.Request.AltiRequestFactory
 * @private
 */




var AltiRequestFactory = {
  /**
   * interface unique
   *
   * @method build
   * @static
   * @param {Object} options - options definies dans le composant Alti
   *
   * @example
   *   var options = {
   *      httpMethod : 'GET', // GET|POST
   *      onSuccess : function (response) {},
   *      onError : function (error) {},
   *      scope : this,
   *      positions : [{lon:, lat:}, {lon:, lat:}],
   *      outputFormat : 'json' // json|xml
   *      sampling : 3,
   *      api : 'REST', // REST|WPS
   *      zonly : false // false|true
   *   };
   *
   */
  build: function build(options) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("AltiRequestFactory");
    logger.trace(["AltiRequestFactory::build()"]);
    var request = null;

    // on factorise les options par groupe;
    // - global,
    // - param, les params pour les data inputs
    // - wps, les param du service
    // - callback

    var settings = {
      // ajout des valeurs par defaut spécifiques au service
      type: options.sampling ? "Profil" : "Elevation",
      method: options.httpMethod,
      param: {
        positions: null,
        delimiter: null,
        // FIXME par defaut, on ne le met pas en place car ça fait planter la requête !?
        indent: null,
        // par defaut
        crs: null,
        // par defaut
        format: null,
        // (only to POST)
        sampling: null,
        // (only use by Profil)
        zonly: null,
        // (only use by Elevation)
        measures: null // (only use by Elevation)
      }
    };

    // surcharge des valeurs obligatoires
    settings.param.positions = options.positions;
    settings.param.format = options.outputFormat;
    settings.param.sampling = options.sampling;
    settings.param.zonly = options.zonly;
    settings.param.measures = options.measures;
    settings.param.resource = options.resource;

    // gestion des callback
    var bOnError = !!(options.onError !== null && typeof options.onError === "function"); // cast variable to boolean
    var bOnSuccess = !!(options.onSuccess !== null && typeof options.onSuccess === "function");
    var message = null;
    switch (options.api) {
      case "REST":
        // FIXME les exceptions ne sont pas 'catchées' sur le constructeur !
        var myReq = new _AltiRequestREST__WEBPACK_IMPORTED_MODULE_2__["default"](settings);
        if (!myReq.processRequestString()) {
          message = "Error in process request (rest) !";
          if (bOnError) {
            options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__["default"](message));
            return;
          }
          throw new Error(message);
        }
        request = myReq.requestString;
        break;
      case "WPS":
        // ajout des valeurs par defaut spécifiques au service WPS
        settings.wps = {
          service: null,
          // par defaut
          version: null,
          // par defaut
          identifier: null,
          // par defaut
          rawdataoutput: null,
          // par defaut
          request: null // par defaut
        };
        request = _AltiRequestWPS__WEBPACK_IMPORTED_MODULE_3__["default"].build(settings);
        if (!request) {
          message = "Error in process request (wps) !";
          if (bOnError) {
            options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__["default"](message));
            return;
          }
          throw new Error(message);
        }
        break;
      default:
        message = "Type of API is not supported by service (REST or WPS) !";
        if (bOnError) {
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__["default"](message));
          return;
        }
        throw new Error(message);
    }
    if (bOnSuccess) {
      options.onSuccess.call(options.scope, request);
    }
    return request;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AltiRequestFactory);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _model_AltiElevationRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _model_AltiProfilRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* jshint multistr : true */






/**
 * @classdesc
 * Classe de gestion des requêtes de type REST sur le service altimetrique.
 *
 * @todo Le service Alti n'implemente pas le POST !?
 * @constructor
 * @alias Gp.Services.Alti.Request.AltiRequestREST
 * @param {Object} options - options
 * @param {Object}   options.param.positions - tableau de coordonnées lon/lat
 * @param {String}   options.param.delimiter - '|'
 * @param {Boolean}  options.param.indent - false|true
 * @param {String}   options.param.crs - 'CRS:84'
 * @param {String}   options.param.sampling - 3
 * @param {String}   options.param.resource - 'rge_alti_corse2a_float32_zip_lamb93'
 * @param {Boolean}  options.param.zonly - false|true
 * @param {Boolean}  options.param.measures - false|true
 * @param {String}   options.param.format - "JSON|XML"
 * @param {String}   options.type - "Profil|Elevation"
 * @param {String}   options.method - GET|POST
 *
 * @example
 *      var options = {
 *           type : 'Profil', // Elevation
 *           method : 'GET',  // par defaut
 *           param : {
 *               positions : [
 *                   {lon:'1.11', lat:'1.11'},
 *                   {lon:'1.10', lat:'1.10'},
 *                   {lon:'1.12', lat:'1.12'}
 *               ],
 *               delimiter : ";",         // par defaut
 *               indent    : true,        // par defaut
 *               crs       : 'EPSG:4326', // par defaut
 *               format    : 'json',      // par defaut (only to POST)
 *               sampling  : 3 ,          // par defaut (only use by Profil)
 *               zonly     : false        // par defaut (only use by Elevation)
 *               measures  : false        // par defaut (only use by Elevation)
 *           }
 *      };
 *
 *      var result;
 *      try {
 *          var obj = new AltiRequestREST (options);
 *          if (! obj.processRequestString ()) {
 *              throw new Error("Request empty !?")
 *          }
 *          result = obj.requestString;
 *      } catch (e) {
 *          // exceptions...
 *      }
 * @private
 */
function AltiRequestREST(options) {
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("AltiRequestREST");
  this.logger.trace("[Constructeur AltiRequestREST ()]");
  if (!(this instanceof AltiRequestREST)) {
    throw new TypeError("AltiRequestREST constructor cannot be called as a function.");
  }
  this.options = options || {};

  // existance des options
  if (!this.options) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_EMPTY", "options"));
  }

  // type de requete : Altitude ou Profil
  // (param. à determiner en fonction des parametres d'entrée)
  if (!this.options.type) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_EMPTY", "type (Elevation or Profil)"));
  }

  // construction du modele de requête
  // (test du type d'objet candidat)
  this.DataObject = null;
  switch (this.options.type) {
    case "Elevation":
      this.DataObject = new _model_AltiElevationRequest__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.param);
      break;
    case "Profil":
      this.DataObject = new _model_AltiProfilRequest__WEBPACK_IMPORTED_MODULE_3__["default"](this.options.param);
      break;
    default:
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_TYPE", "type (Elevation or Profil)"));
  }

  /**
   * methode.
   * Par defaut, "GET".
   */
  this.method = this.options.method || "GET";
}
AltiRequestREST.prototype = {
  /**
   * request
   * @type {String}
   */
  requestString: null,
  /**
   * Constructeur (alias)
   */
  constructor: AltiRequestREST,
  /**
   * Template de la requête.
   */
  template: {
    get: {
      // FIXME on retire le param 'delimiter' : &delimiter='__DELIMITER__'
      value: "lon=__LON__&lat=__LAT__&indent=__INDENT__&crs='__CRS__'&resource=__RESOURCE__&measures=__MEASURES__",
      input: {
        point: "&zonly=__ZONLY__",
        profil: "&sampling=__SAMPLING__"
      }
    },
    post: {
      // FIXME on retire le param 'delimiter' : delimiter='__DELIMITER__'\n\
      value: "lon=__LON__\n" + "lat=__LAT__\n" + "indent=__INDENT__\n" + "crs='__CRS__'\n" + "resource='__RESOURCE__'\n" + "measures='__MEASURES__'\n",
      input: {
        point: "zonly=__ZONLY__\n",
        profil: "sampling=__SAMPLING__"
      }
    }
  },
  /**
   * Construction de la requête.
   *
   * @example
   * // GET  out : lon=0.2367,2.1570&lat=48.0551,46.6077&delimiter=,&indent=true&zonly=true&crs='CRS:84'
   * // POST out : Not yet supported method POST !
   * @returns {String}
   */
  processRequestString: function processRequestString() {
    this.logger.trace("AltiRequestREST::processRequestString ()");
    var template = "";
    if (this.method === "POST") {
      template = this.template.post.value;
    } else if (this.method === "GET") {
      template = this.template.get.value;
    }
    template = template.replace(/__LON__/g, this.DataObject.getLon());
    template = template.replace(/__LAT__/g, this.DataObject.getLat());
    // FIXME on retire le param 'delimiter'
    // template = template.replace(/__DELIMITER__/g, this.DataObject.delimiter);
    template = template.replace(/__INDENT__/g, this.DataObject.indent);
    template = template.replace(/__CRS__/g, this.DataObject.crs);
    template = template.replace(/__RESOURCE__/g, this.DataObject.resource);
    template = template.replace(/__MEASURES__/g, this.DataObject.measures);

    // ajout +
    template = template + this.__addDataInputs();
    this.logger.trace("traduction tmpl", template);

    // sauvegarde
    this.requestString = template;
    return this.requestString;
  },
  /**
   * Ajout de parametres spécifiques (ex. zonly)
   *
   * @returns {String}
   */
  __addDataInputs: function __addDataInputs() {
    this.logger.trace("AltiRequestREST::addDataInput ()");
    var myTemplate;
    if (this.method === "POST") {
      myTemplate = this.template.post;
    } else if (this.method === "GET") {
      myTemplate = this.template.get;
    } else {
      throw new Error("No other HTTP method supported by the service !");
    }
    var tmpl = null;
    if (this.DataObject.CLASSNAME === "AltiElevationRequest") {
      tmpl = myTemplate.input.point;
      return tmpl.replace(/__ZONLY__/g, this.DataObject.zonly.toString());
    } else if (this.DataObject.CLASSNAME === "AltiProfilRequest") {
      tmpl = myTemplate.input.profil;
      return tmpl.replace(/__SAMPLING__/g, this.DataObject.sampling);
    } else {
      throw new Error("No other object supported than elevation or profil !?");
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AltiRequestREST);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _AltiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);



/**
 * @classdesc
 *
 * Classe de gestion des param. des requêtes de type POINT du service altimetrique.
 *
 * @constructor
 * @alias Gp.Services.Alti.Request.AltiElevationRequest
 * @param {Object} options - options
 * @param {Boolean}  options.zonly - false|true
 *
 * @private
 */
function AltiElevationRequest(options) {
  if (!(this instanceof AltiElevationRequest)) {
    throw new TypeError("AltiElevationRequest constructor cannot be called as a function.");
  }

  /**
   * Nom de la classe (heritage)
   */
  this.CLASSNAME = "AltiElevationRequest";

  // appel du constructeur par heritage
  _AltiRequest__WEBPACK_IMPORTED_MODULE_1__["default"].apply(this, arguments);
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger();
  this.logger.trace("[Constructeur AltiElevationRequest ()]");

  /**
   * Z uniquement.
   * true|false
   */
  this.zonly = this.options.zonly || false; // test des options héritées !
}

/**
 * @lends module:AltiElevationRequest#
 */

AltiElevationRequest.prototype = Object.create(_AltiRequest__WEBPACK_IMPORTED_MODULE_1__["default"].prototype, {
  /**
   * Setter/getter pour "zonly"
   */
  zonly: {
    /** getter */
    get: function get() {
      return this._zonly;
    },
    /** setter */
    set: function set(z) {
      this._zonly = z;
    }
  }
});

/**
 * Constructeur (alias)
 */
AltiElevationRequest.prototype.constructor = AltiElevationRequest;

/**
 * Tableau de clefs/valeurs pour param.
 *
 * @returns {Array}
 */
AltiElevationRequest.prototype.getData = function () {
  // par glop..., appel de AltiRequest::getData () !
  var map = [];
  map.push({
    k: "lon",
    v: this.getLon()
  });
  map.push({
    k: "lat",
    v: this.getLat()
  });
  // map.push({k : "delimiter", v : this.delimiter}); // FIXME on retire le param "delimiter"
  map.push({
    k: "indent",
    v: this.indent
  });
  map.push({
    k: "crs",
    v: this.crs
  });
  map.push({
    k: "zonly",
    v: this.zonly
  });
  map.push({
    k: "format",
    v: this.format
  });
  map.push({
    k: "resource",
    v: this.resource
  });
  return map;
};
/* harmony default export */ __webpack_exports__["default"] = (AltiElevationRequest);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/**
 * @classdesc
 * Classe de gestion des param. des requêtes du service altimetrique.
 *
 * @constructor
 * @alias Gp.Services.Alti.Request.AltiRequest
 * @param {Object} options - options
 * @param {Object}   options.positions - tableau de coordonnées lon/lat
 * @param {String}   options.delimiter - "|"
 * @param {Boolean}  options.indent - false|true
 * @param {String}   options.crs - "CRS:84"
 * @param {String}   options.format - "JSON|XML"
 *
 * @private
 */
function AltiRequest(options) {
  if (!(this instanceof AltiRequest)) {
    throw new TypeError("AltiRequest constructor cannot be called as a function.");
  }
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger();
  this.logger.trace("[Constructeur AltiRequest ()]");

  /**
   * Options en paramêtres du constructeur.
   */
  this.options = options || {};

  /**
   * Liste des coordonnées.
   * @example
   * var c = [{lon : "", lat : ""}, {lon : "", lat : ""}];
   */
  this.positions = this.options.positions || [];

  /**
   * Caractère de séparation.
   * Par defaut, "|".
   */
  this.delimiter = this.options.delimiter || "|";

  /**
   * Indentation.
   * true|false
   */
  this.indent = this.options.indent || false;

  /**
   * Projection.
   * Par defaut, CRS:84.
   */
  this.crs = this.options.crs || "CRS:84";

  /**
   * format de sortie.
   * Par defaut, "json".
   */
  this.format = this.options.format || "json";

  /*
   * Ressource utilisée
  */
  this.resource = this.options.resource;

  /**
   * Réponse détaillée (source & accuracy)
   * true|false
  */
  this.measures = this.options.measures || false;
}

/**
 * CLASSNAME
 */
AltiRequest.CLASSNAME = "AltiRequest";
AltiRequest.prototype = {
  /**
   * @lends module:AltiRequest#
   */

  /**
   * Constructeur (alias)
   */
  constructor: AltiRequest,
  /**
   * Ajout d"une liste de coordonnées.
   *
   * @param {Object[]} lstPosition - liste de positions
   * @example
   * obj.setPositions ([{lon : "0.15", lat : "0.15"}, {lon : "1.15", lat : "1.15"}]);
   */
  setPositions: function setPositions(lstPosition) {
    var positions = [];
    for (var i = 0; i < lstPosition.length; i++) {
      var o = lstPosition[i];
      if (o.lon && o.lat) {
        positions.push(o);
      }
    }
    this.positions = positions;
  },
  /**
   * Liste des coordonnées.
   *
   * @param {Int} pos - position
   * @returns {positions}
   * @example
   * obj.getPositions ();  // [{lon : "", lat : ""}, {lon : "", lat : ""}]
   * obj.getPositions (0); // [{lon : "", lat : ""}]
   */
  getPositions: function getPositions(pos) {
    // FIXME test if not a number !?
    if (!pos) {
      return this.positions;
    }
    var index = this.positions.length - 1;
    if (pos > index || pos < index) {
      this.logger.warn("index out of range !");
      return this.positions;
    }
    return this.positions[pos];
  },
  /**
   * Ajout d"une liste de coordonnées.
   *
   * @param {Object[]} lstPosition - liste de positions
   * @example
   * obj.addPositions ([{lon : "0.15", lat : "0.15"}, {lon : "1.15", lat : "1.15"}]);
   */
  addPositions: function addPositions(lstPosition) {
    for (var i = 0; i < lstPosition.length; i++) {
      var o = lstPosition[i];
      if (o.lon && o.lat) {
        this.positions.push(lstPosition[i]);
      }
    }
  },
  /**
   * Retourne la liste des longitudes avec un caractère de séparation.
   *
   * @returns {String} - une liste de longitudes
   * @example
   * // out : 0.2367|2.1570|43.789|...
   */
  getLon: function getLon() {
    var lstLon = [];
    for (var i = 0; i < this.positions.length; i++) {
      lstLon.push(this.positions[i].lon);
    }
    this.logger.trace(lstLon);
    return lstLon.join(this.delimiter);
  },
  /**
   * Retourne la liste des lattitudes avec un caractère de séparation.
   *
   * @returns {String} - une liste de lattitudes
   * @example
   * // out : 0.2367|2.1570|43.789|...
   */
  getLat: function getLat() {
    var lstLat = [];
    for (var i = 0; i < this.positions.length; i++) {
      lstLat.push(this.positions[i].lat);
    }
    this.logger.trace(lstLat);
    return lstLat.join(this.delimiter);
  }
};

/**
 * Tableau de clefs/valeurs pour param.
 *
 * @returns {Object[]}
 */
AltiRequest.prototype.getData = function () {
  var map = [];
  map.push({
    k: "lon",
    v: this.getLon()
  });
  map.push({
    k: "lat",
    v: this.getLat()
  });
  map.push({
    k: "delimiter",
    v: this.delimiter
  });
  map.push({
    k: "indent",
    v: this.indent
  });
  map.push({
    k: "crs",
    v: this.crs
  });
  map.push({
    k: "format",
    v: this.format
  });
  return map;
};
/* harmony default export */ __webpack_exports__["default"] = (AltiRequest);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _AltiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);



/**
 * @classdesc
 * Classe de gestion des param. des requêtes de type PROFIL du service altimetrique.
 *
 * @constructor
 * @alias Gp.Services.Alti.Request.AltiProfilRequest
 * @param {Object}   options - options
 * @param {String}   options.sampling - 3
 *
 * @private
 */
function AltiProfilRequest(options) {
  if (!(this instanceof AltiProfilRequest)) {
    throw new TypeError("AltiProfilRequest constructor cannot be called as a function.");
  }

  /**
   * Nom de la classe (heritage)
   */
  this.CLASSNAME = "AltiProfilRequest";

  // appel du constructeur par heritage
  _AltiRequest__WEBPACK_IMPORTED_MODULE_1__["default"].apply(this, arguments);
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger();
  this.logger.trace("[Constructeur AltiProfilRequest ()]");

  /**
   * Sampling
   * Par defaut, 3
   */
  this.sampling = this.options.sampling || 3; // test des options héritées !
}

/**
 * @lends module:AltiProfilRequest#
 */

AltiProfilRequest.prototype = Object.create(_AltiRequest__WEBPACK_IMPORTED_MODULE_1__["default"].prototype, {
  /**
   * Setter/getter pour "sampling"
   */
  sampling: {
    /** getter */
    get: function get() {
      return this._sampling;
    },
    /** setter */
    set: function set(value) {
      this._sampling = value;
    }
  }
});

/**
 * Constructeur (alias)
 */
AltiProfilRequest.prototype.constructor = AltiProfilRequest;

/**
 * Tableau de clefs/valeurs pour param.
 *
 * @returns {Object[]}
 */
AltiProfilRequest.prototype.getData = function () {
  // par glop..., appel de AltiRequest::getData () !
  var map = [];
  map.push({
    k: "lon",
    v: this.getLon()
  });
  map.push({
    k: "lat",
    v: this.getLat()
  });
  // map.push({k : "delimiter", v : this.delimiter}); // FIXME on retire le param "delimiter"
  map.push({
    k: "indent",
    v: this.indent
  });
  map.push({
    k: "crs",
    v: this.crs
  });
  map.push({
    k: "sampling",
    v: this.sampling
  });
  map.push({
    k: "format",
    v: this.format
  });
  map.push({
    k: "resource",
    v: this.resource
  });
  return map;
};
/* harmony default export */ __webpack_exports__["default"] = (AltiProfilRequest);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Formats_WPS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _model_AltiElevationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _model_AltiProfilRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/**
 * Classe d'interface des requêtes de type WPS sur le service altimetrique.
 * (Factory)
 *
 * @module Gp.Services.Alti.Request.AltiRequestWPS
 * @alias Gp.Services.Alti.Request.AltiRequestWPS
 * @private
 */





var AltiRequestWPS = {
  /**
   * Interface unique de construction de la requête.
   *
   * @method build
   * @param {Object} options - options
   * @param {Object}   options.param.positions - tableau de coordonnées lon/lat
   * @param {String}   options.param.delimiter - '|'
   * @param {Boolean}  options.param.indent - false|true
   * @param {String}   options.param.crs - 'CRS:84'
   * @param {String}   options.param.sampling - 3
   * @param {Boolean}  options.param.zonly - false|true
   * @param {String}   options.param.format - "JSON|XML" (only to POST)
   * @param {String}   options.wps.service - "WPS"
   * @param {String}   options.wps.version - "1.0.0"
   * @param {String}   options.wps.identifier - "gs:WPSElevation|gs:WPSLineElevation"
   * @param {String}   options.wps.rawdataoutput - "result"
   * @param {String}   options.wps.request - "Execute"
   * @param {String}   options.type - "Profil|Elevation"
   * @param {String}   options.method - GET|POST
   * @example
   *      var options = {
   *           type : 'Profil', // Elevation
   *           method : 'GET',  // par defaut
   *           param : {
   *               positions : [
   *                   {lon:'1.11', lat:'1.11'},
   *                   {lon:'1.10', lat:'1.10'},
   *                   {lon:'1.12', lat:'1.12'}
   *               ],
   *               delimiter : ";",         // par defaut
   *               indent    : true,        // par defaut
   *               crs       : 'EPSG:4326', // par defaut
   *               format    : 'json',      // par defaut (only to POST)
   *               sampling  : 3 ,          // par defaut (only use by Profil)
   *               zonly     : false,       // par defaut (only use by Elevation)
   *           },
   *           wps : {
   *                 service : 'WPS',         // par defaut
   *                 version : '1.0.0',       // par defaut
   *                 identifier : 'gs:WPS',   // par defaut, Elevation = gs:WPSElevation, Profil = gs:WPSLineElevation
   *                 rawdataoutput : 'result',// par defaut
   *                 request : 'Execute'      // par defaut
   *           }
   *       };
   */
  build: function build(options) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("AltiRequestWPS");
    logger.trace(["AltiRequestWPS::build()"]);

    // existance des options
    if (!options) {
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_EMPTY", "options"));
    }

    // type de requete : Altitude ou Profil
    // (param. à determiner en fonction des parametres d'entrée)
    if (!options.type) {
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_EMPTY", "type (Elevation or Profil)"));
    }

    // construction du modele de requête
    // (test du type d'objet candidat)
    var DataObject = null;
    switch (options.type) {
      case "Elevation":
        // surcharge
        options.wps.identifier = "gs:WPSElevation";
        DataObject = new _model_AltiElevationRequest__WEBPACK_IMPORTED_MODULE_3__["default"](options.param);
        break;
      case "Profil":
        // surcharge
        options.wps.identifier = "gs:WPSLineElevation";
        DataObject = new _model_AltiProfilRequest__WEBPACK_IMPORTED_MODULE_4__["default"](options.param);
        break;
      default:
        throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_TYPE", "type (Elevation or Profil)"));
    }

    // construction de la requête WPS
    var settings = {
      data: DataObject,
      method: options.method,
      param: options.wps
    };
    var rqstWPS = new _Formats_WPS__WEBPACK_IMPORTED_MODULE_2__["default"](settings);
    if (!rqstWPS.processRequestString()) {
      throw new Error("Enable to process request !");
    }
    return rqstWPS.requestString;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AltiRequestWPS);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/**
 * @classdesc
 * Standard WPS
 *
 * @constructor
 * @alias Gp.Formats.WPS
 * @param {Object} options - options
 * @param {Object}   options.data - objet
 * @param {String}   options.method - POST|GET
 * @param {String}   options.param.service - "WPS"
 * @param {String}   options.param.version - "1.0.0"
 * @param {String}   options.param.identifier - "gs:WPSElevation|gs:WPSLineElevation"
 * @param {String}   options.param.rawdataoutput - "result"
 * @param {String}   options.param.request - "Execute"
 * @param {Function} options.onsuccess - function callback success (TODO)
 * @param {Function} options.onerror   - function callback error   (TODO)
 * @private
 */
function WPS(options) {
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger();
  this.logger.trace("[Constructeur WPS()]");
  if (!(this instanceof WPS)) {
    throw new TypeError("WPS constructor cannot be called as a function.");
  }
  this.options = options || {};

  /**
   * Objet DATA
   */
  this.DataObject = this.options.data;
  if (!this.DataObject) {
    throw new TypeError("This data object is not defined !");
  }

  /**
   * param service.
   * Par defaut, "WPS".
   */
  this.paramservice = this.options.param.service || "WPS";

  /**
   * param version.
   * Par defaut, "1.0.0".
   */
  this.paramversion = this.options.param.version || "1.0.0";

  /**
   * param identifier
   * Par defaut, "gs:WPS"
   */
  this.paramidentifier = this.options.param.identifier || "gs:WPS";

  /**
   * param rawdataoutput
   * Par defaut, "result".
   */
  this.paramrawdataoutput = this.options.param.rawdataoutput || "result";

  /**
   * param request
   * Par defaut, "Execute".
   */
  this.paramrequest = this.options.param.request || "Execute";

  /**
   * methode.
   * Par defaut, "GET".
   */
  this.method = this.options.method || "GET";
}
WPS.prototype = {
  /**
   * @lends module:WPS#
   */

  /**
   * request
   * @type {String}
   */
  requestString: null,
  /**
   * Constructeur (alias)
   */
  constructor: WPS,
  /**
   * Template de la requête.
   */
  template: {
    get: {
      value: "service=__SERVICE__" + "&version=__VERSION__" + "&rawdataoutput=__RAWDATAOUTPUT__" + "&identifier=__IDENTIFIER__" + "&request=__REQUEST__" + "&datainputs=<!-- __DATAINPUTS__ -->",
      input: "__KEY__=__DATA__"
    },
    post: {
      value: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + "<wps:__REQUEST__ version=\"__VERSION__\" service=\"__SERVICE__\" " + "__NAMESPACE__ __SCHEMALOCATION__>" + "<ows:Identifier>__IDENTIFIER__</ows:Identifier>" + "<wps:DataInputs>" + "<!-- __DATAINPUTS__ -->" + "</wps:DataInputs>" + "<wps:ResponseForm>" + "<wps:RawDataOutput>" + "<ows:Identifier>__RAWDATAOUTPUT__</ows:Identifier>" + "</wps:RawDataOutput>" + "</wps:ResponseForm>" + "</wps:__REQUEST__>",
      input: "<wps:Input>" + "<ows:Identifier>__KEY__</ows:Identifier>" + "<wps:Data>" + "<wps:LiteralData>__DATA__</wps:LiteralData>" + "</wps:Data>" + "</wps:Input>"
    }
  },
  /**
   * Namespace par defaut de la requete POST.
   *
   * @returns {String} namespace
   */
  namespaceByDefault: function namespaceByDefault() {
    var ns = ["xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"", "xmlns=\"http://www.opengis.net/wps/1.0.0\"", "xmlns:wfs=\"http://www.opengis.net/wfs\"", "xmlns:wps=\"http://www.opengis.net/wps/1.0.0\"", "xmlns:ows=\"http://www.opengis.net/ows/1.1\"", "xmlns:gml=\"http://www.opengis.net/gml\"", "xmlns:ogc=\"http://www.opengis.net/ogc\"", "xmlns:wcs=\"http://www.opengis.net/wcs/1.1.1\"", "xmlns:xlink=\"http://www.w3.org/1999/xlink\""];
    return ns.join(" ");
  },
  /**
   * Schemalocation par defaut.
   *
   * @returns {String} schemaLocation
   */
  schemaLocationByDefault: function schemaLocationByDefault() {
    return "xsi:schemaLocation=\"http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd\"";
  },
  /**
   * Construction de la requête.
   *
   * @example
   * // GET  out :
   * //  service=__SERVICE__
   * //  &version=__VERSION__
   * //  &rawdataoutput=__RAWDATAOUTPUT__
   * //  &identifier=__IDENTIFIER__
   * //  &request=__REQUEST__
   * //  &datainputs="__DATAINPUTS__"
   * //  avec __DATAINPUTS__ = __KEY__=__DATA__;...
   *
   * // POST out :
   * //      <?xml version=\"1.0\" encoding=\"UTF-8\"?>
   * //      <wps:__REQUEST__ version=\"__VERSION__\" service=\"__SERVICE__\"
   * //         __NAMESPACE__ __SCHEMALOCATION__>
   * //          <ows:Identifier>__IDENTIFIER__</ows:Identifier>
   * //          <wps:DataInputs>
   * //              <!-- __DATAINPUTS__ -->
   * //          </wps:DataInputs>
   * //          <wps:ResponseForm>
   * //              <wps:RawDataOutput>
   * //              <ows:Identifier>__RAWDATAOUTPUT__</ows:Identifier>
   * //              </wps:RawDataOutput>
   * //          </wps:ResponseForm>
   * //      </wps:__REQUEST__>",
   * //      avec __DATAINPUTS__
   * //             <wps:Input>
   * //                  <ows:Identifier>__KEY__</ows:Identifier>
   * //                  <wps:Data>
   * //                    <wps:LiteralData>__DATA__</wps:LiteralData>
   * //                  </wps:Data>
   * //              </wps:Input>
   *
   * @returns {Boolean} validation de la construction de la requete
   */
  processRequestString: function processRequestString() {
    this.logger.trace("WPS::processRequestString ()");
    var template = "";
    if (this.method === "POST") {
      template = this.template.post.value;
    } else if (this.method === "GET") {
      template = this.template.get.value;
    } else {
      this.logger.error("No other method supported by the service !");
      return false;
    }
    template = template.replace(/__SERVICE__/g, this.paramservice);
    template = template.replace(/__VERSION__/g, this.paramversion);
    template = template.replace(/__RAWDATAOUTPUT__/g, this.paramrawdataoutput);
    template = template.replace(/__IDENTIFIER__/g, this.paramidentifier);
    template = template.replace(/__REQUEST__/g, this.paramrequest);

    // ajout +
    if (this.method === "POST") {
      template = template.replace(/__NAMESPACE__/g, this.namespaceByDefault);
      template = template.replace(/__SCHEMALOCATION__/g, this.schemaLocationByDefault);
    }

    // ajout des datainputs
    template = template.replace(/<!-- __DATAINPUTS__ -->/g, this.__addDataInputs());
    if (!template) {
      this.logger.warn("traduction tmpl : empty request !?");
      return false;
    }
    this.requestString = template;
    this.logger.trace("traduction tmpl", template);
    return true;
  },
  /**
   * Ajout des données
   *
   * @returns {String} Données concaténées dans une chaine
   */
  __addDataInputs: function __addDataInputs() {
    this.logger.trace("WPS::__addDataInputs ()");

    // c'est un peu grossier...
    var tmpl = this.method === "GET" ? this.template.get.input : this.template.post.input;
    var sep = this.method === "GET" ? ";" : "";
    var result = "";
    var that = this;
    var map = this.DataObject.getData();
    for (var i = 0; i < map.length; i++) {
      // FIXME closure ?
      (function (j) {
        if (sep) {
          sep = j === map.length - 1 ? "" : ";";
        }
        result = result.concat(that.__addDataInput(tmpl, map[j].k, map[j].v), sep);
      })(i);
    }
    return result;
  },
  /**
   * Ajout d'une donnée.
   *
   * @param {String} tmpl - template
   * @param {String} key - clef
   * @param {String} data - valeur
   * @returns {String} chaine avec les substitutions clef/valeur
   */
  __addDataInput: function __addDataInput(tmpl, key, data) {
    var tmp = tmpl;
    tmp = tmp.replace(/__KEY__/g, key);
    tmp = tmp.replace(/__DATA__/g, data);
    return tmp;
  },
  /**
   * Definir le mode de requête
   *
   * @param {String} method - GET|POST
   */
  setMethod: function setMethod(method) {
    if (method === "GET" || method === "POST") {
      this.method = method;
    } else {
      this.logger.warn("support only GET and POST method !");
    }
  },
  /**
   * Retourne le mode de requete (GET|POST).
   *
   * @returns {AltiRequest.options.mode|String} methode (GET|POST)
   */
  getMethod: function getMethod() {
    return this.method;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (WPS);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _Formats_XML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _Formats_AltiResponseReader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _model_AltiResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
/* harmony import */ var _model_Elevation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Factory pour générer une reponse JSON à partir d'un XML ou d'un JSON
 * (Factory)
 *
 * @module AltiResponseFactory
 * @private
 * @alias Gp.Services.Alti.Response.AltiResponseFactory
 */







var AltiResponseFactory = {
  /**
   * interface unique
   *
   * @method build
   * @static
   * @param {Object} options - options definies dans le composant Alti
   *
   * @example
   *   var options = {
   *      response :
   *      outputFormat :
   *      rawResponse :
   *      scope :
   *      onSuccess :
   *      onError :
   *   };
   *
   */
  build: function build(options) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("AltiResponseFactory");
    logger.trace(["AltiResponseFactory::build()"]);
    var data = null;
    if (options.response) {
      if (options.rawResponse) {
        logger.trace("analyze response : raw");
        data = options.response;
      } else {
        switch (options.outputFormat) {
          case "xml":
            logger.trace("analyze response : xml");
            try {
              var p = new _Formats_XML__WEBPACK_IMPORTED_MODULE_3__["default"]({
                reader: _Formats_AltiResponseReader__WEBPACK_IMPORTED_MODULE_4__["default"]
              });
              if (typeof options.response === "string") {
                p.setXMLString(options.response);
              } else {
                p.setXMLDoc(options.response);
              }
              data = p.parse();
              if (!data) {
                throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION_2"));
              }
            } catch (e) {
              var message = e.message;
              options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
                message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION", message),
                status: 200,
                type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_SRVERR
              }));
              return;
            }
            break;
          case "json":
            logger.trace("analyze response : json");
            logger.trace("analyze response : ", _typeof(options.response));
            var JSONResponse = null;
            if (typeof options.response === "string") {
              JSONResponse = JSON.parse(options.response);
            } else {
              JSONResponse = options.response;
            }

            // le service renvoie t il une erreur ?
            if (JSONResponse && JSONResponse.error) {
              // ex. {"error": {"code": "BAD_PARAMETER","description": "The values () cannot be parsed as a valid longitude (double value such as -180 < lat < 180)."}}
              options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
                message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION", JSONResponse.error.description),
                status: 200,
                type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_SRVERR
              }));
              return;
            }

            // analyse de la reponse
            if (JSONResponse) {
              var elevations = JSONResponse.elevations;
              var altiResponse = new _model_AltiResponse__WEBPACK_IMPORTED_MODULE_5__["default"]();
              var elevation;
              if (Array.isArray(elevations) && elevations.length) {
                for (var i = 0; i < elevations.length; i++) {
                  elevation = new _model_Elevation__WEBPACK_IMPORTED_MODULE_6__["default"]();
                  if (_typeof(elevations[i]) === "object") {
                    // elevations[i] est un objet elevation
                    if (elevations[i].lon) {
                      elevation.lon = elevations[i].lon;
                    }
                    if (elevations[i].lat) {
                      elevation.lat = elevations[i].lat;
                    }
                    if (elevations[i].z) {
                      elevation.z = elevations[i].z;
                    }
                    if (elevations[i].acc) {
                      elevation.acc = elevations[i].acc;
                    }
                    if (elevations[i].measures) {
                      elevation.measures = elevations[i].measures;
                    }
                  } else if (typeof elevations[i] === "number") {
                    // elevations[i] est un nombre, dans le cas de zonly=true notamment
                    elevation.z = elevations[i];
                  }
                  if (Array.isArray(altiResponse.elevations)) {
                    altiResponse.elevations.push(elevation);
                  }
                }
              }
              data = altiResponse;
            }
            if (!data) {
              options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
                message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_ANALYSE_2"),
                type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_UNKERR,
                status: -1
              }));
              return;
            }
            break;
          default:
            options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
              message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_FORMAT_2"),
              type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_UNKERR,
              status: -1
            }));
            return;
        }

        // Si la réponse contenait une exception renvoyée par le service
        if (data.exceptionReport) {
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
            message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION", data.exceptionReport),
            type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_SRVERR,
            status: 200
          }));
          return;
        } else if (data.error) {
          var errorMess = data.error.description;
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
            message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION", errorMess),
            type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_SRVERR,
            status: 200
          }));
          return;
        }
      }
    } else {
      options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
      return;
    }
    options.onSuccess.call(options.scope, data);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AltiResponseFactory);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* global require */


// import __xmldom from "xmldom";

/**
 * @classdesc
 *
 * Classe permettant d'écrire ou de lire du XML, sous forme de document DOM,
 * éventuellement selon des clés de lecture (readers) ou d'écriture (writers) spécifiques.
 *
 * @constructor
 * @alias Gp.Formats.XML
 *
 * @param {Object} [options] - options du format XML
 *
 * @param {Object} [options.reader] - Instance d'un Reader de service (AltiResponseReader, GeocodeRequestReader, etc.)
 *      utile pour interpréter le XML lorsque sa structure est connue.
 *      Ce reader doit comporter au moins une fonction statique read (root) permettant d'initialiser la lecture.
 *
 * @param {Object} [options.writers] - writers
 *
 * @param {String} [options.xmlString] - chaîne de caractère contenant du XML à interpréter.
 *
 * @private
 */
function XML(options) {
  if (!(this instanceof XML)) {
    throw new TypeError("XML constructor cannot be called as a function.");
  }

  // FIXME : notion de singleton

  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger();
  this.logger.trace("[Constructeur XML ()]");

  /**
   * Chaîne de caractères contenant le texte XML
   * @type {String}
   */
  this.xmlString = null;

  /**
   * DOM Element correspondant à la structure du XML.
   * @type {DOMElement}
   */
  this.xmlDoc = null;

  /**
   * Objet contenant des fonctions de lecture des différentes balises XML.
   * @type {Object}
   */
  this.reader = null;

  // traitement des paramètres d'options s'il y en a
  if (options) {
    if (options.xmlString && typeof options.xmlString === "string") {
      this.xmlString = options.xmlString;
      // Si une chaine de caractère a été passée en entrée : on la transforme aussi en XML document
      this.xmlDoc = __getXMLDOC(options.xmlString);
    }
    if (options.reader) {
      this.setReader(options.reader);
    }
  }
}
XML.prototype = {
  /**
   * @lends module:XML
   */

  /*
   * Constructeur (alias)
   */
  constructor: XML,
  /**
   * Méthode permettant de récupérer la chaîne de caractères associée au format XML
   *
   * @returns {String} xmlString - la chaîne de caractères correspondant au format XML
   */
  getXMLString: function getXMLString() {
    return this.xmlString;
  },
  /**
   * Méthode permettant d'attribuer une chaîne de caractères au format XML (attribut xmlString).
   * La méthode va aussi transformer cette chaîne de caractères en document XML,
   * afin de remplir l'attribut xmlDoc.
   *
   * @param {String} xmlString - la chaîne de caractères correspondant au format XML
   */
  setXMLString: function setXMLString(xmlString) {
    if (xmlString && typeof xmlString === "string") {
      this.xmlString = xmlString;
      this.xmlDoc = __getXMLDOC(xmlString);
    }
  },
  /**
   * Méthode permettant de récupérer les readers associés au format XML, s'ils ont été définis
   *
   * @return {Object} readers - les readers associés au format XML, s'ils existent,
   *      sous forme d'une collection de fonctions
   */
  getReader: function getReader() {
    return this.reader;
  },
  /**
   * Méthode permettant d'attribuer des readers, sous la forme d'un objet de fonctions (node, data),
   *      lorsqu'ils n'ont pas été définis lors de l'instanciation par exemple (new XML (options)).
   *
   * @param {Object} reader - Instance d'un Reader de service (AltiResponseReader, GeocodeRequestReader, etc.)
   *      utile pour interpréter le XML lorsque sa structure est connue.
   *      Ce reader doit comporter au moins une fonction statique read (root) permettant d'initialiser la lecture.
   */
  setReader: function setReader(reader) {
    if (reader && reader.read && typeof reader.read === "function") {
      this.reader = reader;
    }
  },
  /**
   * Méthode permettant de récupérer le document XML associé au format, s'il existe.
   *
   * @return {DOMElement} xmlDoc - le document XML (DOM document node) s'il existe
   */
  getXMLDoc: function getXMLDoc() {
    return this.xmlDoc;
  },
  /**
   * Setter
   */
  setXMLDoc: function setXMLDoc(doc) {
    this.xmlDoc = doc;
  },
  /**
   * Méthode initialisant la lecture du XML, à partir d'un XML Document :
   *      création d'un objet JavaScript contenant les informations du XML,
   *      sauf dans le cas où il n'existe pas de XML Document à interpréter (retourne un objet vide).
   *
   * @return {Object} [parserOutput] - un objet JavaScript contenant les informations du XML :
   * - soit toutes les informations si aucun reader n'a été spécifié à la création du format
   * - soit les informations spécifiées dans le reader.
   */
  parse: function parse() {
    // build xml document from xmlString
    if (!this.xmlDoc && this.xmlString) {
      this.xmlDoc = __getXMLDOC(this.xmlString);
    }
    if (this.xmlDoc) {
      var root = __getRootNode(this.xmlDoc);
      if (root) {
        var parserOutput;
        // call reader if exists
        if (this.reader && this.reader.read) {
          parserOutput = this.reader.read(root);
        } else {
          parserOutput = {};
          parserOutput[root.nodeName] = __readDefault(root);
        }
        return parserOutput;
      } else {
        return {};
      }
    }
  }
};

/**
 * Méthode de la classe (privée) permettant de créer un XML Document à partir d'une chaîne de caractères XML,
 *      en utilisant DOMParser () lorsque c'est possible.
 *      For more information, see: https://dvcs.w3.org/hg/innerhtml/raw-file/tip/index.html#the-domparser-interface
 *
 * @private
 * @memberof XML
 * @method __getXMLDOC
 * @param {String} xmlString - xml string to be converted into DOM element
 * @return {DOMElement} - the corresponding XML Document
 */
function __getXMLDOC(xmlString) {
  if (typeof window === "undefined") {
    // env. nodejs
    var DOMParser = __webpack_require__(15).DOMParser; // __xmldom.DOMParser;
    return new DOMParser().parseFromString(xmlString, "text/xml");
  } else {
    // env. browser

    var parser;
    var xmlDoc;
    var errorMsg = "Erreur lors du parsing de la réponse du service : XML non conforme";
    if (window.ActiveXObject) {
      // Internet Explorer < 9
      xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = false;
      xmlDoc.loadXML(xmlString);
      var parseError = xmlDoc.parseError;
      if (parseError.errorCode) {
        if (parseError.line && parseError.linepos) {
          errorMsg += "( ligne " + parseError.line + ", colonne " + parseError.linepos;
        }
        if (parseError.reason) {
          errorMsg += ":  " + parseError.reason + ")";
        }
        throw new Error(errorMsg);
      }
      return xmlDoc;
    } else if (window.DOMParser) {
      // les autres (Chrome, Mozilla, IE >= 9)
      parser = new window.DOMParser();
      try {
        xmlDoc = parser.parseFromString(xmlString, "text/xml");
      } catch (e) {
        // Internet Explorer browser raises exception if xmlString is not valid XML
        if (e.message === "SyntaxError") {
          throw new Error(errorMsg);
        } else {
          throw new Error("Erreur lors du parsing de la réponse du service : " + e.message);
        }
      }
      // look for parsing error in case no exception was raised
      if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
        var parsererror = xmlDoc.getElementsByTagName("parsererror");
        for (var i = 0; i < parsererror.length; i++) {
          var content = parsererror[i].innerHTML;
          // except in case parsererror is just because of huge xml, but parsing is done.
          if (content.indexOf("Huge input lookup") === -1) {
            errorMsg += "(" + content + ")";
            throw new Error(errorMsg);
          }
        }
      } else if (!xmlDoc.documentElement) {
        // may happen in chrome browser
        throw new Error(errorMsg);
      }
      return xmlDoc;
    } else {
      // FIXME
      throw new Error("Incompatible DOM Parser pour ce navigateur !");
    }
  }
}

/**
 * Méthode de la classe (privée) permettant de récupérer le noeud racine du document,
 *      à partir d'un document node (nodeType=9), puis lecture de ce noeud (readNode)
 *
 * @private
 * @memberof XML
 * @method __getRootNode
 * @param {DOMElement} [xmlDoc] - a Document Node
 * @return {DOMElement} root - the document root node
 */
function __getRootNode(xmlDoc) {
  var root;
  if (xmlDoc.nodeType === 9) {
    // INFO : nodeType 9 represents the entire document (the root-node of the DOM tree)
    root = xmlDoc.documentElement;
  } else if (xmlDoc.nodeType === 1) {
    root = xmlDoc;
  }
  return root;
}

/**
 * Méthode de la classe (privée) permettant de lire automatiquement un noeud XML,
 *      lorsqu'aucun reader spécifique n'a été spécifié (parser brut)
 *
 * @private
 * @memberof XML
 * @method readDefault
 * @param {DOMElement} node - a DOM element node
 * @example final data object looks like :
 *          data = {
 *              attributeName: attributeValue,
 *              childName: {
 *                  attributeName: attributeValue,
 *                  attributeName: attributeValue,
 *                  childName: {
 *                      "textContent": textContent
 *                  },
 *                  childName: {
 *                      childName: {
 *                          attributeName:attributeValue
 *                      }
 *                  }
 *              }
 *          }
 */
function __readDefault(node) {
  var data = {};

  // if element node has attributes, set their values to data
  if (node.attributes.length > 0) {
    var dataAttributes = __getAttributes(node);
    data["attributes"] = dataAttributes;
  }

  // if element node has childNodes, read them and set them to data
  if (node.hasChildNodes()) {
    var childData = {};
    var child;
    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.nodeType === 3) {
        // TEXT_NODE
        data["textContent"] = child.nodeValue;
      } else if (child.nodeType === 1) {
        childData = __readDefault(child);
        if (!data[child.nodeName]) {
          // store childData in an object
          data[child.nodeName] = childData;
        } else {
          // in case several childNodes has the same name : store them in an array.
          // if data[nodeName] already exists but is not an array
          if (!Array.isArray(data[child.nodeName])) {
            var old = data[child.nodeName];
            data[child.nodeName] = [];
            data[child.nodeName].push(old);
          }
          data[child.nodeName].push(childData);
        }
      }
      // TODO : manage other node types (4=CDATA, etc)
    }
  }
  return data;
}

/**
 * Méthode de la classe (privée) permettant de récupérer les attributs d'un noeud élément
 *
 * @private
 * @memberof XML
 * @method __getAttributes
 * @param {DOMElement} node - noeud contenant l'attribut recherché
 * @return {Object} nodeAttributes - objet contenant les noms et valeurs des différents attributs
 */
function __getAttributes(node) {
  if (node.attributes.length > 0) {
    var nodeAttributes = {};
    var attributes = node.attributes;
    for (var i = 0; i < attributes.length; i++) {
      var attribute = attributes[i];
      nodeAttributes[attribute.nodeName] = attribute.nodeValue;
    }
    return nodeAttributes;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (XML);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Response_model_AltiResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _Response_model_Elevation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _Response_model_Measure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/**
 * Fonction retournant un objet contenant des clés de lecture (readers)
 *      qui permettent de parser des réponses XML du service Altimétrique du Géoportail
 *      (calcul altimétrique simple ou profil altimétrique d'une courbe),
 *      lorsque le paramètre output = xml,
 *      afin de récupérer les élévations retournées.
 *
 * @module AltiResponseReader
 * @alias Gp.Services.Alti.Formats.AltiResponseReader
 * @private
 */

// import Logger from "../../../Utils/LoggerByDefault";




/**
 *
 * Objet AltiResponseReader
 *
 * @member {Object} AltiResponseReader
 *
 * @property {Object} AltiResponseReader.READERS - Objet contenant des fonctions de lecture, appelées "readers"
 *      dont chaque clé correspond au nom d'un tag du XML que l'on souhaite lire
 *      et la valeur associée est une fonction (node, data)
 *      où node est un noeud du document DOM
 *      et data est un objet où l'on stocke les informations lues dans le XML.
 *
 * @property {Method} AltiResponseReader.READERS.elevations -  Lecture d'un noeud "elevations" de la réponse XML
 *      du service alti, correspondant logiquement à la racine du document
 *      (contient un ou plusieurs childNodes correspondant chacun à une élévation retournée)
 *
 * @property {Method} AltiResponseReader.READERS.elevation - Lecture d'un noeud "elevation" de la réponse xml du service alti.
 *      (contient un ou 4 childNode (s) correspondant à l'altitude (z) et éventuellement lat, lon, et acc)
 *
 * @property {Method} AltiResponseReader.READERS.lat - Lecture d'un noeud "lat" de la réponse xml du service alti.
 *      (contient une valeur de latitude, qui est un flottant)
 *
 * @property {Method} AltiResponseReader.READERS.lon - Lecture d'un noeud "lon" de la réponse xml du service alti.
 *      (contient une valeur de longitude, qui est un flottant)
 *
 * @property {Method} AltiResponseReader.READERS.z - Lecture d'un noeud "z" de la réponse xml du service alti.
 *      (contient une valeur d'altitude, qui est un flottant)
 *
 * @property {Method} AltiResponseReader.READERS.acc - Lecture d'un noeud "acc" de la réponse xml du service alti.
 *      (contient une valeur de précision, qui est un flottant)
 *
 * @property {Method} AltiResponseReader.READERS.measures - Lecture d'un noeud "measures" de la réponse xml du service alti.
 *      (contient une valeur de précision, qui est un flottant)
 *
 * @property {Method} AltiResponseReader.READERS.source_name - Lecture d'un noeud "source_name" de la réponse xml du service alti.
 *      (pour remplir l'éventuel objet measure)
 *
 * @property {Method} AltiResponseReader.READERS.source_mesure - Lecture d'un noeud "source_mesure" de la réponse xml du service alti.
 *      (pour remplir l'éventuel objet measure)
 *
 * @property {Method} AltiResponseReader.READERS.exceptionreport - Lecture d'un noeud "ExceptionReport" de la réponse xml du service alti.
 *
 * @property {Method} AltiResponseReader.READERS.exception - Lecture d'un noeud "Exception" de la réponse xml du service alti.
 *
 * @property {Method} AltiResponseReader.read - Méthode permettant de lancer la lecture d'une réponse XML du service altimétrique,
 *      à l'aide des readers de la classe.
 *
 */
var AltiResponseReader = {};
AltiResponseReader.READERS = {
  /**
   * Lecture d'un noeud "elevations" de la réponse XML du service alti, correspondant logiquement à la racine du document
   *      (contient un ou plusieurs childNodes correspondant chacun à une élévation retournée)
   *
   * @param {DOMElement} root - racine de la réponse XML
   * @static
   * @memberof AltiResponseReader
   * @returns {Object} Retourne un objet de type AltiResponse
   */
  elevations: function elevations(root) {
    // INFO : on passe en paramètre l'objet en entrée elevations, vide, à remplir.
    var altiResponse = new _Response_model_AltiResponse__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (root.hasChildNodes()) {
      var children = root.childNodes;
      var child;
      var elevation;
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        if (AltiResponseReader.READERS[child.nodeName]) {
          elevation = AltiResponseReader.READERS[child.nodeName](child);
          altiResponse.elevations.push(elevation);
        }
      }
    }
    return altiResponse;
  },
  /**
   * Lecture d'un noeud "elevation" de la réponse xml du service alti.
   *      (contient un ou 5 childNode (s) correspondant à l'altitude (z) et éventuellement lat, lon, acc et measures)
   *
   * @param {DOMElement} node - noeud elevation à lire pour récupérer les informations de l'élévation retournée (z [, lon, lat, acc, measures])
   * @return {Array} elevationResponse - format de la réponse en sortie, instance de AltiResponse
   * @static
   * @memberof AltiResponseReader
   */
  elevation: function elevation(node) {
    var elevation = new _Response_model_Elevation__WEBPACK_IMPORTED_MODULE_1__["default"]();
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      var child;
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        if (AltiResponseReader.READERS[child.nodeName]) {
          // INFO : on passe en paramètre l'objet en entrée elevation, vide, à remplir.
          AltiResponseReader.READERS[child.nodeName](child, elevation);
        }
      }
    }
    return elevation;
  },
  /**
   * Lecture d'un noeud "lat" de la réponse xml du service alti.
   *      (contient une valeur de latitude, qui est un flottant)
   *
   * @param {DOMElement} node - noeud à lire pour récupérer la latitude
   * @param {Object} elevation - objet dans lequel stocker la latitude retournée
   * @static
   * @memberof AltiResponseReader
   */
  lat: function lat(node, elevation) {
    var textNode = node.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // 3 === node.TEXT_NODE
      elevation.lat = parseFloat(textNode.nodeValue);
    } else {
      throw new Error("Erreur dans la lecture de la réponse du service : latitude attendue mais absente");
    }
  },
  /**
   * Lecture d'un noeud "lon" de la réponse xml du service alti.
   *      (contient une valeur de longitude, qui est un flottant)
   *
   * @param {DOMElement} node - noeud à lire pour récupérer la longitude
   * @param {Object} elevation - objet dans lequel stocker la longitude retournée
   * @static
   * @memberof AltiResponseReader
   */
  lon: function lon(node, elevation) {
    var textNode = node.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // 3 === node.TEXT_NODE
      elevation.lon = parseFloat(textNode.nodeValue);
    } else {
      throw new Error("Erreur dans la lecture de la réponse du service : longitude attendue mais absente");
    }
  },
  /**
   * Lecture d'un noeud "z" de la réponse xml du service alti.
   *      (contient une valeur d'altitude, qui est un flottant)
   *
   * @param {DOMElement} node - noeud à lire pour récupérer l'altitude
   * @param {Object} elevationObject - objet dans lequel stocker l'altitude retournée : elevation ou measure
   * @static
   * @memberof AltiResponseReader
   */
  z: function z(node, elevationObject) {
    var textNode = node.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // 3 === node.TEXT_NODE
      if (elevationObject) {
        elevationObject.z = parseFloat(textNode.nodeValue);
      } else {
        elevationObject = new _Response_model_Elevation__WEBPACK_IMPORTED_MODULE_1__["default"]();
        elevationObject.z = parseFloat(textNode.nodeValue);
        return elevationObject;
      }
    } else {
      throw new Error("Erreur dans la lecture de la réponse du service : altitude attendue mais absente");
    }
  },
  /**
   * Lecture d'un noeud "acc" de la réponse xml du service alti.
   *      (contient une valeur de précision, qui est un flottant)
   *
   * @param {DOMElement} node - noeud à lire pour récupérer la précision
   * @param {Object} elevationObject - objet dans lequel stocker la précision retournée : elevation ou measure
   * @static
   * @memberof AltiResponseReader
   */
  acc: function acc(node, elevationObject) {
    var textNode = node.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // 3 === node.TEXT_NODE
      elevationObject.acc = parseFloat(textNode.nodeValue);
    } else {
      throw new Error("Erreur dans la lecture de la réponse du service : précision (acc) attendue mais absente");
    }
  },
  /**
   * Lecture d'un noeud "source_name" de la réponse xml du service alti.
   *      (contient le nom de la source, qui est un string)
   *
   * @param {DOMElement} node - noeud à lire pour récupérer la précision
   * @param {Object} measure - objet dans lequel stocker le nom de la source retourné
   * @static
   * @memberof AltiResponseReader
   */
  source_name: function source_name(node, measure) {
    var textNode = node.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // 3 === node.TEXT_NODE
      measure.source_name = textNode.nodeValue;
    } else {
      throw new Error("Erreur dans la lecture de la réponse du service : source_name attendue mais absente");
    }
  },
  /**
   * Lecture d'un noeud "source_measure" de la réponse xml du service alti.
   *      (contient le nom de la mesure, qui est un string)
   *
   * @param {DOMElement} node - noeud à lire pour récupérer la précision
   * @param {Object} measure - objet dans lequel stocker le nom de la source retourné
   * @static
   * @memberof AltiResponseReader
   */
  source_measure: function source_measure(node, measure) {
    var textNode = node.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // 3 === node.TEXT_NODE
      measure.source_measure = textNode.nodeValue;
    } else {
      throw new Error("Erreur dans la lecture de la réponse du service : source_measure attendue mais absente");
    }
  },
  /**
   * Lecture d'un noeud "measures" et de ses enfants "measure" de la réponse xml du service alti.
   *      (contient une valeur de précision, qui est un flottant)
   *
   * @param {DOMElement} node - noeud à lire pour récupérer la précision
   * @param {Object} elevation - objet dans lequel stocker la précision retournée
   * @static
   * @memberof AltiResponseReader
   */
  measures: function measures(node, elevation) {
    elevation.measures = [];
    var measure;
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      var measureNode;
      var measureChildren;
      for (var i = 0; i < children.length; i++) {
        measure = new _Response_model_Measure__WEBPACK_IMPORTED_MODULE_2__["default"]();
        measureNode = children[i];
        measureChildren = measureNode.childNodes;
        for (var j = 0; j < measureChildren.length; j++) {
          if (AltiResponseReader.READERS[measureChildren[j].nodeName]) {
            // INFO : on passe en paramètre l'objet en entrée elevation, vide, à remplir.
            AltiResponseReader.READERS[measureChildren[j].nodeName](measureChildren[j], measure);
          } else {
            throw new Error("Erreur dans la lecture de la réponse du service : measures attendues mais absentes");
          }
        }
        elevation.measures.push(measure);
      }
    }
  },
  /**
   * Lecture d'un noeud "ExceptionReport" de la réponse xml du service alti.
   *
   * @param {DOMElement} node - noeud à lire pour récupérer l'exception
   * @return {Object} exceptionReport - objet contenant l'exception
   * @static
   * @memberof AltiResponseReader
   */
  exceptionreport: function exceptionreport(node) {
    var response = {};
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      var child;
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        if (child.nodeName === "Exception") {
          response.exceptionReport = AltiResponseReader.READERS.exception(child);
        }
      }
    }
    return response;
  },
  /**
   * Lecture d'un noeud "Exception" de la réponse xml du service alti.
   *
   * @param {DOMElement} node - noeud à lire pour récupérer l'exception
   * @return {Object} exceptionReport - objet contenant l'exception, avec deux attributs :
   *      {String} exceptionReport.exceptionCode - qui contient l'identifiant du code de l'exception
   *      {String} exceptionReport.exception - qui contient le message de l'exception
   * @static
   * @memberof AltiResponseReader
   */
  exception: function exception(node) {
    var exceptionReport = {};

    // get exception code
    var exceptionCode = node.getAttribute("exceptionCode");
    if (exceptionCode) {
      exceptionReport.exceptionCode = exceptionCode;
    }

    // get exception message
    var textNode = node.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // 3 === node.TEXT_NODE
      exceptionReport.exception = textNode.nodeValue;
    }
    return exceptionReport;
  },
  /**
   * Lecture d'un noeud "Error" de la réponse xml du service alti.
   *
   * @param {DOMElement} node - noeud à lire pour récupérer l'exception
   * @return {Object} error - objet contenant l'exception
   * @static
   */
  error: function error(node) {
    var response = {
      error: {}
    };
    // get error code and description
    if (node.hasChildNodes()) {
      var children = node.childNodes;
      var child;
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        var textNode;
        // get error code
        if (child.nodeType === 1 && child.nodeName === "code") {
          // 1 === node.ELEMENT_NODE
          textNode = child.firstChild;
          if (textNode && textNode.nodeType === 3) {
            // 3 === node.TEXT_NODE
            response.error.code = textNode.nodeValue;
          }
        }
        // get error description
        if (child.nodeType === 1 && child.nodeName === "description") {
          // 1 === node.ELEMENT_NODE
          textNode = child.firstChild;
          if (textNode && textNode.nodeType === 3) {
            // 3 === node.TEXT_NODE
            response.error.description = textNode.nodeValue;
          }
        }
      }
    }
    return response;
  }
};

/**
 * Méthode permettant de lancer la lecture d'une réponse XML du service altimétrique,
 *      à l'aide des readers de la classe.
 *
 * @method AltiResponseReader.read
 * @param {DOMElement} root - racine de la réponse XML à lire
 * @static
 * @memberof AltiResponseReader
 */
AltiResponseReader.read = function (root) {
  if (root.nodeName === "elevations") {
    var altiResponse = AltiResponseReader.READERS.elevations(root);
    return altiResponse;
  } else if (root.nodeName === "ExceptionReport") {
    var exceptionReport = AltiResponseReader.READERS.exceptionreport(root);
    return exceptionReport;
  } else if (root.nodeName === "error") {
    var error = AltiResponseReader.READERS.error(root);
    return error;
  } else {
    throw new Error("Erreur lors de la lecture de la réponse : elle n'est pas au format attendu.");
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AltiResponseReader);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Response object for {@link module:Services~getAltitude Gp.Services.getAltitude ()} invocation when successful. Received as the argument of onSuccess callback function.
 *
 * @property {Array.<Gp.Services.Alti.Elevation>} elevations - Elevations array.
 *
 * @namespace
 * @alias Gp.Services.AltiResponse
 */
function AltiResponse() {
  if (!(this instanceof AltiResponse)) {
    throw new TypeError("AltiResponse constructor cannot be called as a function.");
  }
  this.elevations = [];
}
AltiResponse.prototype = {
  constructor: AltiResponse
};
/* harmony default export */ __webpack_exports__["default"] = (AltiResponse);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Single elevation object returned by underlying web service. Contains at least, one elevation (z). May also contain point coordinates and elevation accuracy if "zonly" parameter wasn't set to true.
 *
 * @property {Float} lat - Point latitude. (only if zonly=false)
 * @property {Float} lon - Point longitude. (only if zonly=false)
 * @property {Float} z - Point elevation.
 * @property {Float} acc - Accuracy of elevation for this point. (only if zonly=false)
 *
 * @namespace
 * @alias Gp.Services.Alti.Elevation
 */
function Elevation() {
  if (!(this instanceof Elevation)) {
    throw new TypeError("Elevation constructor cannot be called as a function.");
  }
  this.z = null;
}
Elevation.prototype = {
  constructor: Elevation
};
/* harmony default export */ __webpack_exports__["default"] = (Elevation);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Single measure object returned by underlying web service if measures = true and zonly = false
 *
 * @property {String} source_name - Name of the source
 * @property {String} source_measure - Name of the measure
 * @property {Float} z - Point elevation.
 * @property {Float} acc - Accuracy of elevation for this point. (only if zonly=false)
 *
 * @namespace
 * @alias Gp.Services.Alti.Measure
 */
function Measure() {
  if (!(this instanceof Measure)) {
    throw new TypeError("Measure constructor cannot be called as a function.");
  }
  this.source_name = null;
  this.source_measure = null;
  this.z = null;
  this.acc = null;
}
Measure.prototype = {
  constructor: Measure
};
/* harmony default export */ __webpack_exports__["default"] = (Measure);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _Request_GeocodeRequestFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var _Response_GeocodeResponseFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }








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
 * @param {String} [options.filters.[prop]] - Critère supplémentaire pour filtrer la recherche sous la forme
 *      d'un couple clé/valeur à définir selon les possibilités du serveur ajouté à la requête.
 *      Le service de géocodage du Géoportail permet de filtrer les adresses postales avec les propriétés :
 *          "postalCode", "inseeCode", "city".
 *      Il permet également de filtrer les toponymes avec les propriétés :
 *          "postalCode", "inseeCode", "type".
 *      Enfin, il permet de filtrer les parcelles cadastrales avec les propriétés :
 *          "codeDepartement", "codeCommune", "nomCommune", "codeCommuneAbs", "codeArrondissement", "section", "numero", "feuille".
 *
 * @param {String} [options.index = "StreetAddress"] - Type de l'objet recherché.
 *      Le service de géocodage du Géoportail permet de rechercher des 'PositionOfInterest' pour des toponymes, des 'StreetAddress'
 *      pour des adresses postales ou des 'CadastralParcel' pour des parcelles cadastrales.
 *      L'index 'location' regroupe les indexes 'StreetAddress' et 'PositionOfInterest'.
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
 * @param {Boolean} [options.returnTrueGeometry = false] - Booléen indiquant si l'on souhaite récupérer la géométrie vraie des objects géolocalisés.
 *      false par défaut.
 *
 *
 * @example
 *   var options = {
 *      apiKey : null,
 *      serverUrl : 'http://localhost/service/',
 *      proxyURL : null,
 *      timeOut : 10000, // ms
 *      rawResponse : false, // true|false
 *      scope : null, // this
 *      onSuccess : function (response) {},
 *      onFailure : function (error) {},
 *      // spécifique au service
 *      position : {lon:, lat:},
 *      index : 'StreetAddress',
 *      query : '10 rue du pont Machin-ville'
 *      (...)
 *   };
 */
function Geocode(options_) {
  if (!(this instanceof Geocode)) {
    throw new TypeError(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("CLASS_CONSTRUCTOR", "Geocode"));
  }

  /**
   * Nom de la classe (heritage)
   * FIXME instance ou classe ?
   */
  this.CLASSNAME = "Geocode";
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("Gp.Services.Geocode");
  this.logger.trace("[Constructeur Geocode (options)]");
  var options = this.patchOptionConvertor(options_);
  if (!options.serverUrl) {
    options.serverUrl = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__["default"].Geocode.newUrl();
  }

  // appel du constructeur par heritage
  _CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].apply(this, [options]);
  if (!options.hasOwnProperty("query")) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "query"));
  }

  // ajout des options spécifiques au service
  this.options.query = options.query;

  // on definit l'index par defaut
  if (!options.index) {
    this.options.index = options.index = "StreetAddress";
  }
  if (options.filters) {
    var filter = Object.keys(options.filters);
    for (var i = 0; i < filter.length; i++) {
      var key = filter[i];
      // on supprime les filtres vides
      if (typeof options.filters[key] === "undefined" || _typeof(options.filters[key]) === "object" && Object.keys(options.filters[key]).length === 0 || typeof options.filters[key] === "string" && options.filters[key].length === 0 || Array.isArray(options.filters[key]) && options.filters[key].length === 0) {
        delete this.options.filters[key];
      }
    }
  }
  this.options.index = options.index || "StreetAddress";
  this.options.maximumResponses = options.maximumResponses || 20;
}

/**
 * @lends module:Geocode#
 */
Geocode.prototype = Object.create(_CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].prototype, {
  // todo
  // getter/setter
});

/*
 * Constructeur (alias)
 */
Geocode.prototype.constructor = Geocode;

/**
 * Patch pour la convertion des options vers le nouveau formalisme.
 *
 * @param {Object} options_ - options du service
 * @return {Object} - options
 */
Geocode.prototype.patchOptionConvertor = function (options_) {
  var options = options_;
  if (options.hasOwnProperty("location")) {
    this.logger.warn("The parameter 'location' is deprecated");
    if (!options.query) {
      options.query = options.location;
    }
    delete options.location;
  }
  if (options.filterOptions) {
    this.logger.warn("The parameter 'filterOptions' is deprecated");
    if (!options.filters) {
      options.filters = options.filterOptions;
      if (options.filters.type) {
        this.logger.warn("The parameter 'filterOptions.type' is deprecated");
        if (!options.index) {
          if (Array.isArray(options.filters.type) && options.filters.type.length > 0) {
            options.index = options.filters.type[0];
          } else {
            options.index = options.filters.type;
          }
        }
        delete options.filters.type;
      }
      if (options.filters.bbox) {
        this.logger.warn("The parameter 'filterOptions.bbox' is deprecated");
        delete options.filters.bbox;
      }
    }
    delete options.filterOptions;
  }
  if (options.position) {
    if (options.position.x) {
      this.logger.warn("The parameter 'position.x' is deprecated");
      if (!options.position.lon) {
        options.position.lon = options.position.x;
      }
      delete options.position.x;
    }
    if (options.position.y) {
      this.logger.warn("The parameter 'position.y' is deprecated");
      if (!options.position.lat) {
        options.position.lat = options.position.y;
      }
      delete options.position.y;
    }
  }
  if (options.returnFreeForm) {
    this.logger.warn("The parameter 'returnFreeForm' is deprecated");
    delete options.returnFreeForm;
  }
  if (options.srs) {
    this.logger.warn("The parameter 'srs' is deprecated");
    delete options.srs;
  }
  return options;
};

/**
 * Création de la requête (overwrite)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Geocode.prototype.buildRequest = function (error, success) {
  var options = {
    httpMethod: this.options.httpMethod,
    // options specifiques du service
    geocodeMethod: "search",
    query: this.options.query,
    index: this.options.index,
    returnTrueGeometry: this.options.returnTrueGeometry,
    position: this.options.position,
    maxResp: this.options.maximumResponses,
    filters: this.options.filters
  };
  this.request = _Request_GeocodeRequestFactory__WEBPACK_IMPORTED_MODULE_5__["default"].build(options);

  // on teste si la requete a bien été construite !
  !this.request ? error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_REQUEST_BUILD"))) : success.call(this, this.request);
};

/**
 * Analyse de la reponse (overwrite)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Geocode.prototype.analyzeResponse = function (error, success) {
  /* INFO :
       Etape 1 : Création de la requête (URL)
          -> stockage de la requête dans this.request
       Etape 2 : Envoi de la requête
          -> appel du protocol XHR, et envoi (par ex send ())
          -> récupération de la réponse JSON dans la fonction onSuccess () (this.response)
          -> si code HTTP 200 et pas de message d'erreur : etape 3
          -> si code HTTP != 200 : lancement de la fonction de callback onFailure avec le message d'erreur
       Etape 3 : Analyse de la réponse JSON (si rawResponse === false )
          -> appel du parser pour récupérer le document
       Etape 4 : Lancement de la fonction de callback onSuccess avec la réponse :
          -> JSON (si rawResponse === true)
          -> ou geocodedLocations
  */

  if (this.response) {
    var options = {
      response: this.response,
      rawResponse: this.options.rawResponse,
      onError: error,
      onSuccess: success,
      scope: this
    };
    _Response_GeocodeResponseFactory__WEBPACK_IMPORTED_MODULE_6__["default"].build(options);
  } else {
    error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Geocode);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _GeocodeRequestREST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



/**
 * Creation d'une requête
 * (Factory)
 *
 * @module GeocodeRequestFactory
 * @alias Gp.Services.Geocode.Request.GeocodeRequestFactory
 * @private
 */
var GeocodeRequestFactory = {
  /**
   * interface unique
   *
   * @method build
   * @static
   * @param {Object} options - options definies dans le composant Geocode
   *
   * @example
   *   var options = {
   *      // options specifiques du service
   *      geocodeMethod:
   *      query:
   *      filters:
   *      maximumResponses:
   *   };
   *   var result = GeocodeRequestFactory.build(options);
   *   if (!result) {
   *       // error...
   *   }
   * @returns {String} request
   */
  build: function build(options) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("GeocodeRequestFactory");
    logger.trace(["GeocodeRequestFactory::build()"]);
    var settings = options || {};
    var myReq = new _GeocodeRequestREST__WEBPACK_IMPORTED_MODULE_1__["default"](settings);
    if (!myReq.processRequestString()) {
      throw new Error("Error process request (rest) !");
    }
    var request = myReq.requestString;
    logger.trace(request);
    return request;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GeocodeRequestFactory);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _model_GeocodeParamREST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);




/**
 * @classdesc
 * Classe de gestion des requêtes de type REST sur le service de calcul d'itineraire
 * (uniquement en GET)
 *
 * @constructor
 * @alias Gp.Services.Geocode.Request.GeocodeRequestREST
 * @param {Object} options - options definies dans le composant Route
 *
 * @example
 * var options = {
 *      (...)
 * };
 *
 * @private
 */
function GeocodeRequestREST(options) {
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("GeocodeRequestREST");
  this.logger.trace("[Constructeur GeocodeRequestREST ()]");
  if (!(this instanceof GeocodeRequestREST)) {
    throw new TypeError("GeocodeRequestREST constructor cannot be called as a function.");
  }

  // existance des options
  if (!options) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_EMPTY", "options"));
  }

  /** liste des options */
  this.settings = options;
}
GeocodeRequestREST.prototype = {
  /**
   * @lends module:GeocodeRequestREST#
   */

  /**
   * request
   * @type {String}
   */
  requestString: null,
  /**
   * Constructeur (alias)
   */
  constructor: GeocodeRequestREST,
  /**
   * Construction de la requête.
   *
   * @returns {String} request
   */
  processRequestString: function processRequestString() {
    var request = "";

    // Mapping des options avec le service de l'API REST
    var oParams = new _model_GeocodeParamREST__WEBPACK_IMPORTED_MODULE_2__["default"](this.settings);
    var params = oParams.getParams();
    for (var i = 0; i < params.length; i++) {
      var o = params[i];
      if (request) {
        request += "&";
      }
      request += o.k + "=" + o.v;
    }
    if (!this.settings.geocodeMethod || this.settings.geocodeMethod !== "search" && this.settings.geocodeMethod !== "reverse") {
      throw new Error("Error geocodeMethod not valid");
    }
    this.requestString = "?" + request;
    this.logger.trace(this.requestString);
    return this.requestString;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GeocodeRequestREST);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/**
 * @classdesc
 * Classe de gestion des param. des requêtes du service de calcul d'itineraire (REST).
 *      Permet le mapping avec les options du service.
 * @constructor
 * @alias Gp.Services.Route.Request.RouteParamREST
 * @param {Object} options - options
 *
 * @private
 */
function GeocodeParamREST(options) {
  if (!(this instanceof GeocodeParamREST)) {
    throw new TypeError("GeocodeParamREST constructor cannot be called as a function.");
  }
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger();
  this.logger.trace("[Constructeur GeocodeParamREST ()]");

  /**
   * Options en paramêtres du constructeur.
   */
  this.options = options || {};

  // methode de geocodage
  if (!this.options.geocodeMethod || this.options.geocodeMethod !== "search" && this.options.geocodeMethod !== "reverse") {
    throw new Error("Error geocodeMethod not valid");
  }
  this.geocodeMethod = this.options.geocodeMethod;

  // mapping des options avec l'API REST
  this.query = typeof this.options !== "undefined" ? this.options.query : null;
  this.searchGeometry = this.options.searchGeometry || null;
  this.index = this.options.index || null;
  this.lon = this.options.position && this.options.position.lon ? this.options.position.lon : null;
  this.lat = this.options.position && this.options.position.lat ? this.options.position.lat : null;
  this.maxResp = this.options.maxResp || null;
  this.returnTrueGeometry = this.options.returnTrueGeometry || null;
  this.filters = this.options.filters || {};
}

/**
 * CLASSNAME
 */
GeocodeParamREST.CLASSNAME = "GeocodeParamREST";
GeocodeParamREST.prototype = {
  /**
   * @lends module:GeocodeParamREST#
   */

  /**
   * Constructeur (alias)
   */
  constructor: GeocodeParamREST,
  /**
   * Retourne les filtres
   * @returns {String} les filtres
   */
  getFilters: function getFilters() {
    var filters = {};
    for (var prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        filters[prop] = this.filters[prop];
      }
    }
    return filters;
  },
  /**
   * Retourne l'index
   * @returns {String} l'index
   */
  getIndex: function getIndex() {
    if (this.index === undefined) {
      return null;
    }
    if (this.index === "StreetAddress") {
      return "address";
    } else if (this.index === "CadastralParcel") {
      return "parcel";
    } else if (this.index === "PositionOfInterest") {
      return "poi";
    } else if (this.index === "location") {
      return "location";
    }
    return this.index;
  },
  /**
   * Retourne la géométrie de recherche
   * @returns {String} la géométrie de recherche au format json
   */
  getSearchGeometry: function getSearchGeometry() {
    return JSON.stringify(this.searchGeometry);
  }
};

/**
 * Tableau de clefs/valeurs pour param.
 *
 * @returns {Array} liste de paramêtres
 */
GeocodeParamREST.prototype.getParams = function () {
  var map = [];
  if (this.geocodeMethod === "search") {
    map.push({
      k: "q",
      v: this.query
    });
  }
  if (this.index) {
    map.push({
      k: "index",
      v: this.getIndex()
    });
  }
  if (this.geocodeMethod === "reverse" && this.searchGeometry) {
    map.push({
      k: "searchgeom",
      v: this.getSearchGeometry()
    });
  }
  if (this.lon && this.lat) {
    map.push({
      k: "lon",
      v: this.lon
    });
    map.push({
      k: "lat",
      v: this.lat
    });
  }
  if (this.maxResp) {
    map.push({
      k: "limit",
      v: this.maxResp
    });
  }
  if (this.returnTrueGeometry) {
    map.push({
      k: "returntruegeometry",
      v: this.returnTrueGeometry
    });
  }
  var filters = this.getFilters();
  for (var key in filters) {
    map.push({
      k: key,
      v: filters[key]
    });
  }
  return map;
};
/* harmony default export */ __webpack_exports__["default"] = (GeocodeParamREST);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Formats_GeocodeResponseParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/**
 * Factory pour générer une reponse JSON à partir d'un XML
 * (Factory)
 *
 * @module GeocodeResponseFactory
 * @alias Gp.Services.Geocode.Response.GeocodeResponseFactory
 * @private
 */
// import Logger from "../../../Utils/LoggerByDefault";



var GeocodeReponseFactory = {
  /**
   * interface unique
   *
   * @method build
   * @static
   * @param {Object} options - options definies dans le composant Geocode
   *
   * @example
   *   var options = {
   *      response :
   *      rawResponse :
   *      scope :
   *      onSuccess :
   *      onError :
   *   };
   *
   */
  build: function build(options) {
    // data de type GeocodeResponse
    var data = null;
    if (options.response) {
      if (options.rawResponse) {
        data = options.response;
      } else {
        try {
          var parser = new _Formats_GeocodeResponseParser__WEBPACK_IMPORTED_MODULE_2__["default"]();
          data = parser.parse(options.response);
          if (!data) {
            throw new Error("L'analyse de la réponse du service !?");
          }
        } catch (e) {
          var message = e.message;
          if (typeof options.response === "string") {
            message += "('" + options.response + "')";
          } else {
            message += "('" + options.response.documentElement.innerHTML + "')";
          }
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_0__["default"]({
            message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_ANALYSE", message),
            type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_UNKERR,
            status: -1
          }));
          return;
        }

        // Si la réponse contenait une exception renvoyée par le service
        if (data.exceptionReport) {
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_0__["default"]({
            message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION", data.exceptionReport),
            type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_SRVERR,
            status: 200 // FIXME : 200 ?
          }));
          return;
        }
      }
    } else {
      options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_0__["default"]({
        message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY"),
        type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_SRVERR,
        status: -1 // FIXME : status response
      }));
      return;
    }
    options.onSuccess.call(options.scope, data);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GeocodeReponseFactory);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _Response_model_GeocodeResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var _Response_model_GeocodedLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
// import Logger from "../../../Utils/LoggerByDefault";





/**
 * Fonction retournant un objet contenant des clés de lecture (readers)
 *      qui permettent de parser des réponses XML du service de géocodage direct du Géoportail
 *      afin de récupérer les résultats retournés.
 * @module GeocodeResponseParser
 * @alias Gp.Services.Geocode.Formats.GeocodeResponseParser
 * @private
 */

/**
 * @classdesc
 *
 * Classe permettant de parser une réponse GeoJSON
 *
 * @constructor
 * @alias Gp.Formats.GeocodeResponseParser
 *
 * @private
 */
function GeocodeResponseParser() {
  if (!(this instanceof GeocodeResponseParser)) {
    throw new TypeError("GeocodeResponseParser constructor cannot be called as a function.");
  }
}
GeocodeResponseParser.prototype = {
  /**
   * @lends module:GeocodeResponseParser
   */

  /*
   * Constructeur (alias)
   */
  constructor: GeocodeResponseParser,
  /**
   * Méthode permettant de lancer la lecture d'une réponse GeoJSON,
   *
   * @param {String} json - réponse au format GeoJSON
   * @return {Object} geocodeResponse|exceptionReport : l'objet contenant les informations de la réponse GeoJSON,
   *      sous la forme d'un objet GeocodeResponse, ou un objet littéral exceptionReport si le service a renvoyé une exception.
   */
  parse: function parse(json) {
    var geocodeResponse = new _Response_model_GeocodeResponse__WEBPACK_IMPORTED_MODULE_2__["default"]();
    var obj = JSON.parse(json);
    if (obj.type === "FeatureCollection") {
      for (var i = 0; i < obj.features.length; ++i) {
        _parseFeature(obj.features[i], geocodeResponse);
      }
    } else if (obj.type === "Feature") {
      _parseFeature(obj, geocodeResponse);
    } else if (obj.type === "SERVICE_ERROR") {
      return _parseError(obj);
    } else {
      var mess = _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_0__["default"].getMessage("SERVICE_RESPONSE_ANALYSE", obj.type);
      throw new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__["default"]({
        message: mess,
        type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE_UNKERR,
        status: 200
      });
    }
    return geocodeResponse;
  }
};

/**
 * Méthode permettant de parser un feature
 *
 * @private
 *
 * @param {Object} feature
 * @param {Object} geocodeResponse
 *
 * @memberof GeocodeResponseParser
 * @return {Object} objet GeocodedLocation
 */
function _parseFeature(feature, geocodeResponse) {
  var location = new _Response_model_GeocodedLocation__WEBPACK_IMPORTED_MODULE_3__["default"]();
  if (feature.geometry && feature.geometry.type === "Point") {
    location.position = {
      lon: feature.geometry.coordinates[0],
      lat: feature.geometry.coordinates[1]
    };
  }
  if (feature.properties) {
    for (var prop in feature.properties) {
      if (prop === "score") {
        location.accuracy = feature.properties[prop];
      } else if (prop === "_type") {
        if (feature.properties[prop] === "address") {
          location.type = "StreetAddress";
        } else if (feature.properties[prop] === "poi") {
          location.type = "PositionOfInterest";
        } else if (feature.properties[prop] === "parcel" || feature.properties[prop] === "cadastral") {
          location.type = "CadastralParcel";
        }
      } else {
        location.placeAttributes[prop] = feature.properties[prop];
      }
    }
    if (feature.properties._type === "address") {
      location.matchType = feature.properties.number !== undefined && feature.properties.number !== null ? "street number" : "street";
    }
  }
  geocodeResponse.locations.push(location);
}

/**
 * Méthode permettant de parser une erreur
 *
 * @private
 *
 * @param {Object} error
 *
 * @memberof GeocodeResponseParser
 * @return {Object}
 */
function _parseError(error) {
  return {
    exceptionReport: error
  };
}
/* harmony default export */ __webpack_exports__["default"] = (GeocodeResponseParser);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Response object for {@link module:Services~geocode Gp.Services.geocode ()} or {@link module:Services~reverseGeocode Gp.Services.reverseGeocode ()} invocation when successful. Received as the argument of onSuccess callback function.
 *
 * @property {Array.<Gp.Services.Geocode.GeocodedLocation>} locations - locations array.
 *
 * @namespace
 * @alias Gp.Services.GeocodeResponse
 */
function GeocodeResponse() {
  if (!(this instanceof GeocodeResponse)) {
    throw new TypeError("GeocodeResponse constructor cannot be called as a function.");
  }
  this.locations = [];
}
GeocodeResponse.prototype = {
  constructor: GeocodeResponse
};
/* harmony default export */ __webpack_exports__["default"] = (GeocodeResponse);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Single location object returned by the underlying geocoding web service.
 *
 * @property {Gp.Point} position - Position of the location given in the requested coordinates system.
 * @property {String} type - location type "StreetAddress" (for an address), "PositionOfInterest" (for a place name) or "CadastralParcel" (for cadastral parcel).
 * @property {String} matchType - how geocoding is performed : "street number" (exact address), "street enhanced" (street number calculated by interpolation), "street" (only the street), "city" (only the city).
 * @property {Float} accuracy - Accuracy of the response towards the requested location between 0 (unaccurate) and 1 (exact match).
 * @property {Object} placeAttributes - Associative array matching the following attributes with their values given by the underlying web service :
 *
 * *Common attributes : *
 *
 * - **trueGeometry** - the 'real life' geometry if different from 'Point' type.
 *
 * *if type === "StreetAddress" :*
 *
 * - **number** - Street number.
 * - **postalCode** - PostCode
 * - **street** - Street name
 * - **city** - City
 * - **houseNumberInfos** - additional street number information
 * - **inseeCode** - INSEE Code
 *
 *
 * *if type === "PositionOfInterest" :*
 *
 * - **type** - Place name type
 * - **postalCode** - PostCode
 * - **toponyme** - Toponyme
 * - **extraFields** - additional place name properties
 * - **inseeCode** - INSEE Code
 *
 *
 * *si type = "CadastralParcel" :*
 *
 * - **codeCommuneAbs** - when a parcel comes from a city that was absorbed by another, code of that old city. "000" otherwise.
 * - **codeArrondissement** - arrondissement
 * - **identifiant** - cadastral parcel code
 * - **feuille** - Parcel Sheet (eg. "1").
 * - **numero** - Parcel Number (eg. "0041")
 * - **section** - Parcel Section (eg. "0D").
 * - **nomCommune** - Parcel municipality name.
 * - **codeCommune** - Parcel municipality.
 * - **codeDepartement** - Parcel Department.
 *
 * @namespace
 * @alias Gp.Services.Geocode.GeocodedLocation
 */
function GeocodedLocation() {
  if (!(this instanceof GeocodedLocation)) {
    throw new TypeError("GeocodedLocation constructor cannot be called as a function.");
  }
  this.position = null;
  this.matchType = null;
  this.placeAttributes = {};
  this.type = null;
  this.accuracy = null;

  /**
   * Nom de la classe : "GeocodedLocation"
   * @type {String}
   */
  this.CLASSNAME = "GeocodedLocation";
}
GeocodedLocation.prototype = {
  constructor: GeocodedLocation
};
/* harmony default export */ __webpack_exports__["default"] = (GeocodedLocation);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _Request_GeocodeRequestFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var _Response_GeocodeResponseFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }








/**
 * @classdesc
 * Appel du service de géocodage inverse du Géoportail :
 *     envoi de la requête construite selon les paramètres en options,
 *     éventuellement parsing et analyse  de la réponse,
 *     retour d'une réponse en paramètre de la fonction onSuccess.
 * @constructor
 * @extends {Gp.Services.CommonService}
 * @alias Gp.Services.ReverseGeocode
 *
 * @param {Object} options - options spécifiques au service (+ les options heritées)
 *
 * @param {Object} options.position - Position du point de référence pour le calcul de proximité exprimée dans le système de référence spécifié par le srs.
 *      @param {Float} options.position.lon - Longitude du point de référence pour le calcul de proximité.
 *      @param {Float} options.position.lat - Latitude du point de référence pour le calcul de proximité.
 *
 * @param {Object} [options.filters] - Les propriétés possibles de cet objet.
 * @param {String} [options.filters.[proprietes du filtre]] - Critère supplémentaire pour filtrer la recherche sous la forme
 *      d'un couple clé/valeur à définir selon les possibilités du serveur ajouté à la requête.
 *      Le service de géocodage du Géoportail permet de filtrer les adresses postales avec les propriétés :
 *          "postalCode", "inseeCode", "city".
 *      Il permet également de filtrer les toponymes avec les propriétés :
 *          "postalCode", "inseeCode", "type".
 *      Enfin, il permet de filtrer les parcelles cadastrales avec les propriétés :
 *          "codeDepartement", "codeCommune", "nomCommune", "codeCommuneAbs", "codeArrondissement", "section", "numero", "feuille".
 *
 * @param {Object} [options.searchGeometry] - Emprise dans laquelle on souhaite effectuer la recherche.
 *      Les propriétés possibles de cet objet sont décrites ci-après.
 *      @param {String} options.searchGeometry.type   - Type de géometrie (Point|Circle|Linestring|Polygon)
 *      @param {Array.<Float>|Array.Array.<Float>} options.searchGeometry.coordinates - Coordonnées des points constituant la géométrie.
 *      @param {Float} options.searchGeometry.radius    - Rayon. Paramètre applicable uniquement pour le type 'Circle'.
 *
 * @param {String} [options.index = "StreetAddress"] - Type de l'objet recherché.
 *      Le service de géocodage du Géoportail permet de rechercher des 'PositionOfInterest' pour des toponymes, des 'StreetAddress'
 *      pour des adresses postales ou des 'CadastralParcel' pour des parcelles cadastrales. L'index 'location' permet une recherche
 *      multi-indexes en regroupant les indexes 'PositionOfInterest' et 'StreetAddress'.
 *      D'autres types pourront être rajoutés selon l'évolution du service.
 *      Par défaut, index = 'StreetAddress'.
 *
 * @param {Number} [options.maximumResponses] - Nombre de réponses maximal que l'on souhaite recevoir.
 *      Pas de valeur par défaut. Si le serveur consulté est celui du Géoportail, la valeur par défaut sera donc celle du service : 20s.
 *
 * @param {Boolean} [options.returnTrueGeometry] - Booléen indiquant si l'on souhaite récupérer la géométrie vraie des objects géolocalisés.
 *      false par défaut.
 *
 * @example
 *   var options = {
 *      apiKey : null,
 *      serverUrl : 'http://localhost/service/',
 *      proxyURL : null,
 *      timeOut : 10000, // ms
 *      rawResponse : false, // true|false
 *      scope : null, // this
 *      onSuccess : function (response) {},
 *      onFailure : function (error) {},
 *      // spécifique au service
 *      index : 'StreetAddress',
 *      searchGeometry : {
 *          type : Circle,
 *          coordinates : [48, 2],
 *          radius : 100
 *      },
 *      position : {lon:2 , lat:48.5},
 *      maximumResponses : 25,
 *   };
 *
 */
function ReverseGeocode(options_) {
  if (!(this instanceof ReverseGeocode)) {
    throw new TypeError(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("CLASS_CONSTRUCTOR", "ReverseGeocode"));
  }

  /**
   * Nom de la classe (heritage)
   * FIXME instance ou classe ?
   */
  this.CLASSNAME = "ReverseGeocode";
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("Gp.Services.ReverseGeocode");
  this.logger.trace("[Constructeur ReverseGeocode (options)]");
  var options = this.patchOptionConvertor(options_);
  if (!options.serverUrl) {
    options.serverUrl = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__["default"].ReverseGeocode.newUrl();
  }

  // appel du constructeur par heritage
  _CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].apply(this, [options]);
  if (!options.searchGeometry) {
    if (!options.position) {
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "searchGeometry"));
    }
  } else {
    this.options.searchGeometry = options.searchGeometry;
  }

  // on definit l'index par defaut
  if (!options.index) {
    this.options.index = options.index = "StreetAddress";
  }
  if (options.filters) {
    var filter = Object.keys(options.filters);
    for (var i = 0; i < filter.length; i++) {
      var key = filter[i];
      // on supprime les filtres vides
      if (typeof options.filters[key] === "undefined" || _typeof(options.filters[key]) === "object" && Object.keys(options.filters[key]).length === 0 || typeof options.filters[key] === "string" && options.filters[key].length === 0 || Array.isArray(options.filters[key]) && options.filters[key].length === 0) {
        delete this.options.filters[key];
      }
    }
  }
  this.options.position = options.position;
  this.options.index = options.index || "StreetAddress";
  this.options.maximumResponses = options.maximumResponses || 20;
}

/**
 * @lends module:ReverseGeocode#
 */
ReverseGeocode.prototype = Object.create(_CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].prototype, {
  // todo
  // getter/setter
});

/*
 * Constructeur (alias)
 */
ReverseGeocode.prototype.constructor = ReverseGeocode;

/**
 * Patch pour la convertion des options vers le nouveau formalisme.
 *
 * @param {Object} options_ - options du service
 * @return {Object} - options
 */
ReverseGeocode.prototype.patchOptionConvertor = function (options_) {
  var options = options_;
  if (options.filterOptions) {
    this.logger.warn("The parameter 'filterOptions' is deprecated");
    if (options.filterOptions.type) {
      this.logger.warn("The parameter 'filterOptions.type' is deprecated");
      if (!options.index) {
        if (Array.isArray(options.filterOptions.type) && options.filterOptions.type.length > 0) {
          options.index = options.filterOptions.type[0];
        } else {
          options.index = options.filterOptions.type;
        }
      }
      delete options.filterOptions.type;
    }
    if (options.filterOptions.bbox) {
      this.logger.warn("The parameter 'filterOptions.bbox' is deprecated");
      if (!options.searchGeometry) {
        // convertir la geometrie
        options.searchGeometry = this.bbox2Json(options.filterOptions.bbox);
      }
      delete options.filterOptions.bbox;
    }
    if (options.filterOptions.circle) {
      this.logger.warn("The parameter 'filterOptions.circle' is deprecated");
      if (!options.searchGeometry) {
        // convertir la geometrie
        options.searchGeometry = this.circle2Json(options.filterOptions.circle);
      }
      delete options.filterOptions.circle;
    }
    if (options.filterOptions.polygon) {
      this.logger.warn("The parameter 'filterOptions.polygon' is deprecated");
      if (!options.searchGeometry) {
        // convertir la geometrie
        options.searchGeometry = this.polygon2Json(options.filterOptions.polygon);
      }
      delete options.filterOptions.polygon;
    }
    if (!options.filters && Object.keys(options.filterOptions).length > 0) {
      options.filters = options.filterOptions;
    }
    delete options.filterOptions;
  }
  if (options.position) {
    if (options.position.x) {
      this.logger.warn("The parameter 'position.x' is deprecated");
      if (!options.position.lon) {
        options.position.lon = options.position.x;
      }
      delete options.position.x;
    }
    if (options.position.y) {
      this.logger.warn("The parameter 'position.y' is deprecated");
      if (!options.position.lat) {
        options.position.lat = options.position.y;
      }
      delete options.position.y;
    }
  }
  if (options.srs) {
    this.logger.warn("The parameter 'srs' is deprecated");
    delete options.srs;
  }
  return options;
};

/**
 * (overwrite)
 * Création de la requête
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
ReverseGeocode.prototype.buildRequest = function (error, success) {
  var options = {
    httpMethod: this.options.httpMethod,
    // options specifiques du service
    geocodeMethod: "reverse",
    searchGeometry: this.options.searchGeometry,
    index: this.options.index,
    position: this.options.position,
    returnTrueGeometry: this.options.returnTrueGeometry,
    maxResp: this.options.maximumResponses,
    filters: this.options.filters
  };
  this.request = _Request_GeocodeRequestFactory__WEBPACK_IMPORTED_MODULE_5__["default"].build(options);

  // on teste si la requete a bien été construite !
  !this.request ? error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_REQUEST_BUILD"))) : success.call(this, this.request);
};

/**
 * (overwrite)
 * Analyse de la reponse
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
ReverseGeocode.prototype.analyzeResponse = function (error, success) {
  if (this.response) {
    var options = {
      response: this.response,
      rawResponse: this.options.rawResponse,
      onError: error,
      onSuccess: success,
      scope: this
    };
    _Response_GeocodeResponseFactory__WEBPACK_IMPORTED_MODULE_6__["default"].build(options);
  } else {
    error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
  }
};

/**
 * Patch pour la convertion des options vers le nouveau formalisme.
 *
 * @param {Array} bbox - bbox
 * @return {Object} - geometrie au format json
 */
ReverseGeocode.prototype.bbox2Json = function (bbox) {
  return {
    type: "Polygon",
    coordinates: [[[bbox.left, bbox.top], [bbox.right, bbox.top], [bbox.right, bbox.bottom], [bbox.left, bbox.bottom], [bbox.left, bbox.top]]]
  };
};

/**
 * Patch pour la convertion des options vers le nouveau formalisme.
 *
 * @param {Object} circle - circle
 * @return {Object} - geometrie au format json
 */
ReverseGeocode.prototype.circle2Json = function (circle) {
  return {
    type: "Circle",
    radius: circle.radius,
    coordinates: [circle.x, circle.y]
  };
};

/**
 * Patch pour la convertion des options vers le nouveau formalisme.
 *
 * @param {Array} polygon - polygon
 * @return {Object} - geometrie au format json
 */
ReverseGeocode.prototype.polygon2Json = function (polygon) {
  var jsonGeom = {
    type: "Polygon",
    coordinates: [[]]
  };
  for (var i = 0; i < polygon.length; ++i) {
    jsonGeom.coordinates[0].push([polygon[i].x, polygon[i].y]);
  }
  return jsonGeom;
};

/**
 * Codes EPSG géographiques (lat/lon). Utiles car les coordonnées doivent être inversées.
 */
ReverseGeocode.geoEPSG = ["EPSG:4326"];
/* harmony default export */ __webpack_exports__["default"] = (ReverseGeocode);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _Response_AutoCompleteResponseFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);








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
 * @param {Array.<String>} [options.type = ["StreetAddress"]] - Type de l'objet recherché.
 *      Le service d'autocomplétion du Géoportail permet de rechercher des toponymes 'PositionOfInterest' et/ou des adresses postales 'StreetAddress'.
 *      D'autres types pourront être rajoutés selon l'évolution du service.
 *      Par défaut, type = ['StreetAddress'].
 *
 * @param {String} [options.territory] - Limitation de la zone de recherche de localisants.
 *      Le service d'autocomplétion du Géoportail permet de limiter la recherche à la métropole et la Corse : options.territory = 'METROPOLE',
 *      DOMS TOMS : options.territory = 'DOMTOM', ou à un département : options.territory = '31'
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
 *      type : "StreetAddress",
 *      territory : 'METROPOLE',
 *      maximumResponses : 10
 *   };
 */
function AutoComplete(options_) {
  if (!(this instanceof AutoComplete)) {
    throw new TypeError(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_4__["default"].getMessage("CLASS_CONSTRUCTOR", "AutoComplete"));
  }

  /**
   * Nom de la classe (heritage)
   * FIXME instance ou classe ?
   */
  this.CLASSNAME = "AutoComplete";
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("Gp.Services.AutoComplete");
  this.logger.trace("[Constructeur AutoComplete (options)]");
  var options = this.patchOptionConvertor(options_);
  if (!options.serverUrl) {
    options.serverUrl = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_1__["default"].AutoComplete.newUrl();
  }

  // appel du constructeur par heritage
  _CommonService__WEBPACK_IMPORTED_MODULE_0__["default"].apply(this, arguments);
  if (!options.text) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_4__["default"].getMessage("PARAM_MISSING", "text"));
  }

  // ajout des options spécifiques au service
  this.options.text = options.text;

  // on definit des parametres par defaut
  if (!options.type) {
    options.type = ["StreetAddress,PositionOfInterest"];
  }
  this.options.type = options.type;
  this.options.territory = options.terr || "";
  this.options.maximumResponses = options.maximumResponses || 10;

  // INFO
  // le service ne repond pas en mode POST (405 Method Not Allowed)
  if (this.options.protocol === "XHR" && this.options.httpMethod === "POST") {
    this.logger.warn("Le service ne gére pas le mode d'interrogation en POST, on bascule sur du GET !");
    this.options.httpMethod = "GET"; // on surcharge !
  }

  // attributs d'instances

  /**
   * Format forcé de la réponse du service : "json"
   * sauf si l'on souhaite une reponse brute (options.rawResponse)
   */
  this.options.outputFormat = this.options.rawResponse ? "" : "json";
}

/**
 * @lends module:AutoComplete#
 */

AutoComplete.prototype = Object.create(_CommonService__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, {
  // todo
  // getter/setter
});

/*
 * Constructeur (alias)
 */
AutoComplete.prototype.constructor = AutoComplete;

/**
 * Patch pour la convertion des options vers le nouveau formalisme.
 *
 * @param {Object} options_ - options du service
 * @return {Object} - options
 */
AutoComplete.prototype.patchOptionConvertor = function (options_) {
  var options = options_;
  if (options.filterOptions) {
    this.logger.warn("The parameter 'filterOptions' is deprecated");
    if (options.filterOptions.type) {
      this.logger.warn("The parameter 'filterOptions.type' is deprecated");
      if (!options.type) {
        options.type = options.filterOptions.type;
      }
    }
    if (options.filterOptions.territory) {
      this.logger.warn("The parameter 'filterOptions.territory' is deprecated");
      if (!options.terr) {
        options.terr = options.filterOptions.territory;
      }
    }
    delete options.filterOptions;
  }
  return options;
};

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
  var territory = "";
  if (this.options.territory) {
    territory = this.options.territory;
  }
  var type = "";
  if (this.options.type) {
    type = this.options.type.join(",");
  }

  // normalisation de la requete avec param KPV
  this.request = _Utils_Helper__WEBPACK_IMPORTED_MODULE_5__["default"].normalyzeParameters({
    text: encodeURIComponent(this.options.text),
    type: type,
    terr: territory,
    maximumResponses: this.options.maximumResponses
  });
  !this.request ? error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_6__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_4__["default"].getMessage("SERVICE_REQUEST_BUILD"))) : success.call(this, this.request);
};

/**
 * (overwrite)
 * Analyse de la reponse
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback de succès de l'analyse de la réponse
 */
AutoComplete.prototype.analyzeResponse = function (error, success) {
  if (this.response) {
    var options = {
      response: this.response,
      rawResponse: this.options.rawResponse,
      onSuccess: success,
      onError: error,
      scope: this
    };
    _Response_AutoCompleteResponseFactory__WEBPACK_IMPORTED_MODULE_2__["default"].build(options);
  } else {
    error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_6__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_4__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _model_AutoCompleteResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var _model_SuggestedLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
/**
 * Factory pour générer une reponse JSON à partir d'un XML ou d'un JSON
 * (Factory)
 *
 * @module AutoCompleteResponseFactory
 * @private
 * @alias Gp.Services.AutoComplete.Response.AutoCompleteResponseFactory
 */





var AutoCompleteResponseFactory = {
  /**
   * interface unique
   *
   * @method build
   * @static
   * @param {Object} options - options definies dans le composant Alti
   *
   * @example
   *   var options = {
   *      response :
   *      outputFormat :
   *      rawResponse :
   *      scope :
   *      onSuccess :
   *      onError :
   *   };
   *
   */
  build: function build(options) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("AutoCompleteResponseFactory");
    logger.trace(["AutoCompleteResponseFactory::build()"]);
    var data = null;
    if (options.response) {
      if (options.rawResponse) {
        logger.trace("analyze response : raw");
        data = options.response;
      } else {
        var JSONResponse = null;
        if (typeof options.response === "string") {
          JSONResponse = JSON.parse(options.response);
        } else {
          JSONResponse = options.response;
        }

        // analyse de la réponse
        if (JSONResponse) {
          // le service renvoie t il une erreur ?
          if (JSONResponse.error) {
            // ex. ?
            options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
              message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION", JSONResponse.error.description),
              status: JSONResponse.error.code,
              type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_SRVERR
            }));
            return;
          }

          // création de l'objet réponse
          data = new _model_AutoCompleteResponse__WEBPACK_IMPORTED_MODULE_3__["default"]();

          // boucle sur les résultats de l'autocomplétion
          if (JSONResponse.results && Array.isArray(JSONResponse.results)) {
            var suggestedLocation = null;
            for (var i = 0; i < JSONResponse.results.length; i++) {
              var result = JSONResponse.results[i];
              suggestedLocation = new _model_SuggestedLocation__WEBPACK_IMPORTED_MODULE_4__["default"]();
              if (result) {
                if (result.country === "StreetAddress") {
                  suggestedLocation.street = result.street;
                  suggestedLocation.type = "StreetAddress";
                } else if (result.country === "PositionOfInterest") {
                  suggestedLocation.poi = result.street;
                  suggestedLocation.type = "PositionOfInterest";
                  suggestedLocation.poiType = result.poiType;
                }
                if (suggestedLocation.position) {
                  suggestedLocation.position.x = result.x;
                  suggestedLocation.position.y = result.y;
                }
                suggestedLocation.kind = result.kind;
                suggestedLocation.commune = result.city;
                suggestedLocation.fullText = result.fulltext;
                suggestedLocation.postalCode = result.zipcode;
                suggestedLocation.classification = result.classification;
              }
              // Ajout du résultat au tableau reverseGeocodedLocations de geocodedLocation
              data.suggestedLocations.push(suggestedLocation);
            }
          } else {
            options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_FORMAT_3")));
            return;
          }
          if (!data.suggestedLocations.length) {
            options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_FORMAT_3")));
            return;
          }
        }
        if (!data) {
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
            message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_ANALYSE_2"),
            type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_UNKERR,
            status: -1
          }));
          return;
        }

        // Si la réponse contenait une exception renvoyée par le service
        if (data.exceptionReport) {
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
            message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION", data.exceptionReport),
            type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_SRVERR,
            status: 200
          }));
          return;
        }
      }
    } else {
      // si la réponse (xmlString) est vide, on appelle le callback d'erreur
      options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
      return;
    }

    // si tout s'est bien passé, on appelle le callback de succès
    options.onSuccess.call(options.scope, data);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteResponseFactory);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Response object for {@link module:Services~autoComplete Gp.Services.autoComplete ()} invocation when successful. Received as the argument of onSuccess callback function.
 *
 * @property {Array.<Gp.Services.AutoComplete.SuggestedLocation>} suggestedLocations - SuggestedLocations array.
 *
 * @namespace
 * @alias Gp.Services.AutoCompleteResponse
 */
function AutoCompleteResponse() {
  if (!(this instanceof AutoCompleteResponse)) {
    throw new TypeError("AutoCompleteResponse constructor cannot be called as a function.");
  }
  this.suggestedLocations = [];
}
AutoCompleteResponse.prototype = {
  constructor: AutoCompleteResponse
};
/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteResponse);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Single SuggestedLocation Object returned by underlying web service.
 * Each suggested location represents a street address ("StreetAddress") or a place name ("PositionOfInterest").
 *
 * @property {String} type - Suggested location type : "StreetAddress" ou "PositionOfInterest"
 * @property {Gp.Point} position - Position of the suggested location given in requested coordinates system.
 * @property {String} commune - Suggested municipality
 * @property {String} fullText - Full text representation of the suggested location.
 * @property {String} postalCode - Suggested location postcode
 * @property {Integer} classification - Number used to classify the importance of the place where is the suggested location from 1 (most important) to 7 (less important).
 * @property {String} street - Street name of the suggested location ("StreetAddress" only).
 * @property {String} kind - Nature of the suggested location : "prefecture", "monument", "commune", ... for instance ("PositionOfInterest" only).
 *
 * @namespace
 * @alias Gp.Services.AutoComplete.SuggestedLocation
 */
function SuggestedLocation() {
  if (!(this instanceof SuggestedLocation)) {
    throw new TypeError("SuggestedLocation constructor cannot be called as a function.");
  }

  /* REPONSE :
      {
         "status" : "OK",
         "results" : [
            {
               "country":"PositionOfInterest",
               "x":-1.559185,
               "y":47.952603,
               "city":"Brie",
               "zipcode":"35150",
               "street":"corbe",
               "kind":"Lieu-dit habité",
               "fulltext":"corbe, 35150 Brie",
               "classification":6
            },
            {
               "country":"StreetAddress",
               "x":1.538295,
               "y":43.19646,
               "city":"Brie",
               "zipcode":"09700",
               "street":"courreste",
               "kind":"",
               "fulltext":"courreste, 09700 Brie",
               "classification":7
            }
         ]
      }
  */

  /* REPONSE EN ERREUR
      {
          status : "ERROR",
          results : [ ]
      }
  */

  /**
   * Suggested location type : "StreetAddress" ou "PositionOfInterest"
   * @type {String}
   */
  this.type = null;

  /**
   * Position of the suggested location given in requested coordinates system.
   * @type {Gp.Point}
   */
  this.position = {
    x: null,
    y: null
  };

  /**
   * Suggested municipality
   * @type {String}
   */
  this.commune = null;

  /**
   * Full text representation of the suggested location.
   * @type {String}
   */
  this.fullText = null;

  /**
   * Suggested location postcode
   * @type {Number}
   */
  this.postalCode = null;

  /**
   * Number used to classify the importance of the place where is the suggested location from 1 (most important) to 7 (less important).
   * @type {Integer}
   */
  this.classification = null;

  /**
   * Street name of the suggested location ("StreetAddress" only).
   * @type {String}
   */
  this.street = null;

  /**
   * Place name of the suggested location ("PositionOfInterest" only).
   * @type {String}
   */
  this.poi = null;

  /**
   * Nature of the suggested location : "prefecture", "monument", "commune", ... for instance ("PositionOfInterest" only).
   * @type {String}
   */
  this.kind = null;
}
SuggestedLocation.prototype = {
  constructor: SuggestedLocation
};
/* harmony default export */ __webpack_exports__["default"] = (SuggestedLocation);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _Request_RouteRequestFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var _Response_RouteResponseFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59);








/**
 * @classdesc
 * Appel du service d'itinéraire du Géoportail :
 *     envoi de la requête construite selon les paramètres en options,
 *     éventuellement parsing et analyse  de la réponse,
 *     retour d'une réponse en paramètre de la fonction onSuccess.
 *
 * @alias Gp.Services.Route
 * @constructor
 * @extends {Gp.Services.CommonService}
 * @param {Object} options - options spécifiques au service (+ les options heritées)
 *
 * @param {String} options.resource - La ressource utilisée pour le calcul. Ce paramètre devrait être obligatoire car il l'est dans l'appel au service. Mais il ne l'est pas pour des raisons de rétrocompatibilité.
 *
 * @param {String} options.outputFormat - Le format de la réponse du service itineraire : 'json' uniquement et par défaut.
 *
 * @param {String} [options.routePreference = "fastest"] - Mode de calcul à utiliser :
 * - le plus rapide « fastest »
 * - le plus court « shortest »
 * Par défaut : « fastest ».
 *
 * @param {Object} options.startPoint - Point de départ du calcul. Coordonnées exprimées en longitudes, latitudes (EPSG:4326)
 * @param {Float} options.startPoint.x - Abcisse du point de départ du calcul d'itinéraire.
 * @param {Float} options.startPoint.y - Ordonnée du point de départ du calcul d'itinéraire.
 *
 * @param {Object} options.endPoint - Point d'arrivée du calcul. Coordonnées exprimées en longitudes, latitudes (EPSG:4326)
 * @param {Float} options.endPoint.x - Abcisse du point d'arrivée du calcul d'itinéraire.
 * @param {Float} options.endPoint.y - Ordonnée du point d'arrivée du calcul d'itinéraire.
 *
 * @param {Object[]} [options.viaPoints] - Liste de point ({x:Float,y:Float}) intermédaires que l'itinéraire doit emprunter dans l'ordre du tableau.
 *      Coordonnées exprimées en longitudes, latitudes (EPSG:4326) :{x:float, y:float}
 *
 * @param {String} [options.graph = "voiture"] - Type de graphe utilisé : "Voiture" ou "Pieton".
 *      Détermine le profil de vitesses utilisé pour le calcul ainsi que les tronçons autorisés ou non.
 *      Par défaut, c'est la valeur "Voiture" qui sera utilisée.
 *
 * @param {String[]} [options.exclusions] - DEPRECATED: Critères d'exclusions à appliquer pour le calcul. (correspond au paramètre "avoidFeature" d'OpenLS)
 *      On précise ici le type de tronçons que l'on ne veut pas que l'itinéraire emprunte
 *      (valeurs possibles : « toll » (éviter les péages), « bridge », « tunnel »).
 *      Ce paramètre est conservé pour une rétrocompatibilité de l'api. Le nouveau paramètre à utiliser est options.constraints
 *
 * @param {Object[]} [options.constraints] - Critères de contraintes à appliquer sur un itinéraire. Les valeurs disponibles dépendent de la ressource utilisée. Il est donc utile de regarder le getCapabilities.
 * @param {String} [options.constraints.constraintType] - Type de la contrainte. Généralement "banned".
 * @param {String} [options.constraints.key] - Clé de la contrainte. Généralement "wayType".
 * @param {String} [options.constraints.operator] - Opérateur de la contrainte. Généralement "=".
 * @param {String} [options.constraints.value] - Valeur de la contrainte. Généralement "autoroute".
 *
 * @param {Boolean} [options.geometryInInstructions = false] - Indique si la géométrie de l'itinéraire doit être reprise morceau par morceau dans les instructions.
 *      (correspond au paramètre "provideGeometry" d'OpenLS) Par défaut : false.
 *
 * @param {Boolean} [options.provideBbox = true] - Indique si les instructions doivent être localisées par une bbox dans la réponse.
 *      Par défaut : true.
 *
 * @param {String} [options.distanceUnit = "m"] - Indique si la distance doit être exprimée en km ou m dans la réponse.
 *      Par défaut : m.
 * @param {String} [options.timeUnit = "second"] - Indique si la durée doit être exprimée en seconde, minute ou heure dans la réponse. Il peut-être formatté hh:mm::ss avec la valeur standard.
 *      Les valeurs possibles sont "standard", "second", "minute" ou "hour".
 *      Par défaut : "standard".
 *
 * @param {String} [options.srs] - Système de coordonnées dans lequel les paramètres géographiques en entrée et la réponse du service sont exprimés.
 *      Pas de valeur par défaut. Si le serveur consulté est celui du Géoportail, la valeur par défaut sera donc celle du service : 'EPSG:4326'.
 *
 * @param {String[]} [options.waysAttributes] - Nom des attributs des voies. Les valeurs disponibles dépendent de la ressource utilisée. Il est donc utile de regarder le getCapabilities.
 *
 * @example
 *  var options = {
 *      // options communes aux services
 *      apiKey : null,
 *      serverUrl : 'http://localhost/service/',
 *      protocol : 'XHR',
 *      proxyURL : null,
 *      httpMethod : 'GET', // GET|POST
 *      timeOut : 10000, // ms
 *      rawResponse : false, // true|false
 *      scope : null, // this
 *      onSuccess : function (response) {},
 *      onFailure : function (error) {},
 *      // spécifique au service
 *      resource : 'bdtopo'
 *      outputFormat : 'json',
 *      startPoint : {
 *          x : 42.1121,
 *          y : 1.5557
 *      },
 *      endPoint : {
 *          x : 42.1121,
 *          y : 1.5557
 *      },
 *      provideBbox : true,
 *      exclusions : ["Bridge", "Tunnel", "Toll"],
 *      distanceUnit : "km",
 *      graph : "Voiture",
 *      geometryInInstructions : true,
 *      routePreference : "fastest"
 *  };
 *
 */
function Route(options) {
  if (!(this instanceof Route)) {
    throw new TypeError(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("CLASS_CONSTRUCTOR", "Route"));
  }

  /**
   * Nom de la classe (heritage)
   */
  this.CLASSNAME = "Route";

  // appel du constructeur par heritage
  _CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].apply(this, arguments);
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("Gp.Services.Route");
  this.logger.trace("[Constructeur Route (options)]");
  if (!options.startPoint) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "startPoint"));
  }

  // on lance une exception afin d'eviter au service de le faire...
  if (options.startPoint.x === null) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "startPoint.x"));
  }
  if (options.startPoint.y === null) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "startPoint.y"));
  }
  if (!options.endPoint) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "endPoint"));
  }

  // on lance une exception afin d'eviter au service de le faire...
  if (options.endPoint.x === null) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "endPoint.x"));
  }
  if (options.endPoint.y === null) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "endPoint.y"));
  }

  // options par defaut

  // on passe l'option outputFormat en minuscules afin d'éviter des exceptions.
  if (options.outputFormat && options.outputFormat !== "json") {
    this.logger.warn("options.outputFormat could only be json");
  }
  this.options.outputFormat = "json";
  this.options.resource = options.resource || "bdtopo-osrm";
  this.options.startPoint = options.startPoint;
  this.options.endPoint = options.endPoint;
  this.options.viaPoints = options.viaPoints || [];
  this.options.routePreference = options.routePreference || "fastest";
  /** Gestion des anciennes valeurs de graph */
  if (options.graph) {
    if (options.graph === "Voiture") {
      this.options.graph = "car";
    }
    if (options.graph === "Pieton") {
      this.options.graph = "pedestrian";
    }
  } else {
    this.options.graph = "car";
  }
  this.options.constraints = [];
  if (options.constraints) {
    if (Array.isArray(options.constraints)) {
      for (var k = 0; k < options.constraints.length; k++) {
        this.options.constraints.push(options.constraints[k]);
      }
    } else {
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_TYPE", "constraints"));
    }
  }

  /** Gestion de l'ancien paramètre exclusion */
  var constraintTunnel = {};
  var constraintPont = {};
  var constraintAutoroute = {};
  if (options.exclusions) {
    if (options.exclusions.length !== 0) {
      this.logger.warn("options.exclusions is DEPRECATED !!");
      for (var c = 0; c < options.exclusions.length; c++) {
        if (typeof options.exclusions[c] === "string") {
          options.exclusions[c] = options.exclusions[c].toLowerCase();
        } else {
          // on ne crée pas une erreur pour rétro-compatibilité avec les anciennes versions
          continue;
        }
        if (options.exclusions[c] === "toll") {
          constraintAutoroute.constraintType = "banned";
          constraintAutoroute.key = "wayType";
          constraintAutoroute.operator = "=";
          constraintAutoroute.value = "autoroute";
          this.options.constraints.push(constraintAutoroute);
        }
        if (options.exclusions[c] === "tunnel") {
          constraintTunnel.constraintType = "banned";
          constraintTunnel.key = "wayType";
          constraintTunnel.operator = "=";
          constraintTunnel.value = "tunnel";
          this.options.constraints.push(constraintTunnel);
        }
        if (options.exclusions[c] === "bridge") {
          constraintPont.constraintType = "banned";
          constraintPont.key = "wayType";
          constraintPont.operator = "=";
          constraintPont.value = "pont";
          this.options.constraints.push(constraintPont);
        }
      }
    }
  }
  this.options.geometryInInstructions = options.geometryInInstructions || false;
  this.options.provideBbox = options.provideBbox || true;
  this.options.distanceUnit = options.distanceUnit || "m";
  this.options.timeUnit = options.timeUnit || "second";
  this.options.expectedStartTime = null; // FIXME not yet implemented !
  this.options.srs = options.srs || "EPSG:4326";
  this.options.waysAttributes = options.waysAttributes || [];

  // gestion de l'url du service par defaut
  // si l'url n'est pas renseignée, il faut utiliser les urls par defaut
  if (!this.options.serverUrl) {
    var UrlByDefault = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__["default"].Route.newUrl();
    if (!UrlByDefault) {
      throw new Error("Url by default not found !");
    }
    this.options.serverUrl = UrlByDefault;
    this.logger.trace("Serveur URL par defaut : " + this.options.serverUrl);
  }
}

/**
 * @lends module:Route#
 */
Route.prototype = Object.create(_CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].prototype, {
  // todo
  // getter/setter
});

/*
 * Constructeur (alias)
 */
Route.prototype.constructor = Route;

/**
 * (overwrite)
 * Création de la requête
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Route.prototype.buildRequest = function (error, success) {
  var options = {
    // spécifique au service
    resource: this.options.resource,
    startPoint: this.options.startPoint,
    endPoint: this.options.endPoint,
    viaPoints: this.options.viaPoints,
    provideBbox: this.options.provideBbox,
    constraints: this.options.constraints,
    distanceUnit: this.options.distanceUnit,
    timeUnit: this.options.timeUnit,
    graph: this.options.graph,
    geometryInInstructions: this.options.geometryInInstructions,
    routePreference: this.options.routePreference,
    srs: this.options.srs,
    waysAttributes: this.options.waysAttributes
  };
  this.request = _Request_RouteRequestFactory__WEBPACK_IMPORTED_MODULE_5__["default"].build(options);

  // on teste si la requete a bien été construite !
  if (!this.request) {
    error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_REQUEST_BUILD")));
  } else {
    success.call(this, this.request);
  }
};

/**
 * (overwrite)
 * Analyse de la reponse
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
Route.prototype.analyzeResponse = function (error, success) {
  // INFO
  // Factory pour masquer la complexité du retour du service

  if (this.response) {
    var options = {
      distanceUnit: this.options.distanceUnit,
      timeUnit: this.options.timeUnit,
      response: this.response,
      outputFormat: this.options.outputFormat,
      // utile pour parser la string en mode XHR : JSON ou XML !
      rawResponse: this.options.rawResponse,
      onError: error,
      onSuccess: success,
      scope: this,
      geometryInInstructions: this.options.geometryInInstructions
    };
    _Response_RouteResponseFactory__WEBPACK_IMPORTED_MODULE_6__["default"].build(options);
  } else {
    error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Route);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _RouteRequestREST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);




/**
 * Creation d'une requête REST en mode POST ou GET
 * (Factory)
 *
 * @module RouteRequestFactory
 * @alias Gp.Services.Route.Request.RouteRequestFactory
 * @private
 */
var RouteRequestFactory = {
  /**
   * interface unique
   *
   * @method build
   * @static
   * @param {Object} options - options definies dans le composant Route
   *
   * @example
   *   // utilisation avec les callback
   *   var options = {
   *      (...)
   *      onSuccess : function (response) {},
   *      onError : function (error) {},
   *      // spécifique au service
   *      startPoint : {
   *          x : 42.1121,
   *          y : 1.5557
   *      },
   *      endPoint : {
   *          x : 42.1121,
   *          y : 1.5557
   *      },
   *      provideBbox : false,
   *      exclusions : ["bridge", "tunnel", "toll"],
   *      distanceUnit : "km",
   *      graph : "Voiture",
   *      geometryInInstructions : false,
   *      routePreference : "fastest"
   *   };
   *   RouteRequestFactory.build(options);
   *
   *   // utilisation sans callback
   *   var options = {...};
   *   try {
   *      var result = RouteRequestFactory.build(options);
   *      if (! result) { throw new Error("..."):}
   *   } catch (e) {
   *      // todo
   *   }
   * @returns {String} request
   */
  build: function build(options) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("RouteRequestFactory");
    logger.trace(["RouteRequestFactory::build()"]);
    var request = null;
    var settings = options || {};

    // gestion des callback
    var bOnError = !!(options.onError !== null && typeof options.onError === "function");
    var message = null;

    // FIXME les exceptions ne sont pas 'catchées' sur le constructeur !
    var myReq = new _RouteRequestREST__WEBPACK_IMPORTED_MODULE_2__["default"](settings);
    if (!myReq.processRequestString()) {
      message = "Error process request (rest) !";
      if (bOnError) {
        options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__["default"](message));
        return;
      }
      throw new Error(message);
    }
    request = myReq.requestString;
    return request;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (RouteRequestFactory);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _model_RouteParamREST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);




/**
 * @classdesc
 * Classe de gestion des requêtes de type REST sur le service de calcul d'itineraire
 * (uniquement en GET)
 *
 * @constructor
 * @alias Gp.Services.Route.Request.RouteRequestREST
 * @param {Object} options - options definies dans le composant Route
 *
 * @example
 * var options = {
 *      (...)
 * };
 *
 * @private
 */
function RouteRequestREST(options) {
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("RouteRequestREST");
  this.logger.trace("[Constructeur RouteRequestREST ()]");
  if (!(this instanceof RouteRequestREST)) {
    throw new TypeError("RouteRequestREST constructor cannot be called as a function.");
  }

  // existance des options
  if (!options) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_EMPTY", "options"));
  }

  /** liste des options */
  this.settings = options;
}
RouteRequestREST.prototype = {
  /**
   * @lends module:RouteRequestREST#
   */

  /**
   * request
   * @type {String}
   */
  requestString: null,
  /**
   * Constructeur (alias)
   */
  constructor: RouteRequestREST,
  /**
   * Construction de la requête.
   *
   * @example
   * // GET  out : origin=2.416907353809513,48.8465772142297&destination=2.4248037771493673,48.84591353161838
   * // POST out : Not yet supported method POST !
   * @returns {String} request
   */
  processRequestString: function processRequestString() {
    // INFO
    // construction simple sans template...,
    // mais en attendant que les services soient fixés, on taggue ce composant en mode PROTOTYPE !
    this.logger.warn(" PROTOTYPE !");

    // Mapping des options avec le service de l'API REST
    var oParams = new _model_RouteParamREST__WEBPACK_IMPORTED_MODULE_2__["default"](this.settings);
    var params = oParams.getParams();
    var request = "";
    for (var i = 0; i < params.length; i++) {
      var o = params[i];
      if (request) {
        request += "&";
      }
      request += o.k + "=" + o.v;
    }

    // Exemple :
    //  http://wxs.ign.fr/KEY/itineraire/rest/route.json?
    //  origin=&
    //  destination=&
    //  waypoints=&
    //  method=DISTANCE&
    //  graph=Pieton&
    //  graphName=Pieton&
    //  exclusions=&
    //  tolerance=10&
    //  srs=

    this.logger.trace(request);
    this.requestString = request;
    return this.requestString;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (RouteRequestREST);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/**
 * @classdesc
 * Classe de gestion des param. des requêtes du service de calcul d'itineraire (REST).
 *      Permet le mapping avec les options du service.
 * @constructor
 * @alias Gp.Services.Route.Request.RouteParamREST
 * @param {Object} options - options
 *
 * @private
 */
function RouteParamREST(options) {
  if (!(this instanceof RouteParamREST)) {
    throw new TypeError("RouteParamREST constructor cannot be called as a function.");
  }
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger();
  this.logger.trace("[Constructeur RouteParamREST ()]");
  /**
   * Options en paramêtres du constructeur.
   */
  this.options = options || {};

  // mapping des options avec l'API REST

  /** Ressource utilisée */
  this.resource = this.options.resource;

  /** Coordonnées du point de départ. */
  this.start = this.options.startPoint.x + "," + this.options.startPoint.y;

  /** Coordonnées du point d’arrivée. */
  this.end = this.options.endPoint.x + "," + this.options.endPoint.y;

  /** Coordonnées des étapes point de départ. */
  this.intermediates = this.options.viaPoints;

  /** Nom du profile à utiliser */
  this.profile = this.options.graph;

  /** projection (code EPSG comme epsg:4326 ou wgs84) */
  this.crs = this.options.srs;

  /** Liste des contraintes */
  this.constraints = this.options.constraints;

  /** Nom de l'optimisation à utiliser */
  this.optimization = this.options.routePreference;

  /** Format de sortie (résumé de l’itinéraire) */
  this.getSteps = this.options.geometryInInstructions ? "true" : "false";

  /** Unité des distances */
  this.distanceUnit = this.options.distanceUnit;

  /** Unité des durées */
  this.timeUnit = this.options.timeUnit;

  /** Attributs des voies */
  this.waysAttributes = this.options.waysAttributes;
}

/**
 * CLASSNAME
 */
RouteParamREST.CLASSNAME = "RouteParamREST";
RouteParamREST.prototype = {
  /**
   * @lends module:RouteParamREST#
   */

  /**
   * Constructeur (alias)
   */
  constructor: RouteParamREST,
  /**
   * Retourne une liste de points
   * @returns {String} une liste de points (sep '|')
   */
  getIntermediates: function getIntermediates() {
    var array = [];
    if (this.intermediates.length !== 0) {
      for (var i = 0; i < this.intermediates.length; i++) {
        var obj = this.intermediates[i];
        array.push(obj.x + "," + obj.y);
      }
    }
    return array.join("|");
  },
  /**
   * Retourne une liste d'attributs
   * @returns {String} une liste d'attributs (sep '|')
   */
  getWaysAttributes: function getWaysAttributes() {
    return this.waysAttributes.join("|");
  },
  /**
   * Retourne un profile
   * @returns {String} profile
   */
  getProfile: function getProfile() {
    return this.profile;
  },
  /**
   * Retourne un distanceUnit
   * @returns {String} distanceUnit
   */
  getDistanceUnit: function getDistanceUnit() {
    if (this.distanceUnit === "m") {
      return "meter";
    }
    if (this.distanceUnit === "km") {
      return "kilometer";
    }
    return "";
  },
  /**
   * Retourne une optimisation
   * @returns {String} optimization
   */
  getOptimization: function getOptimization() {
    if (this.optimization) {
      return this.optimization;
    } else {
      return "";
    }
  },
  /**
   * Retourne la liste des constraints
   * @returns {String} une liste des constraints (sep '|')
   */
  getConstraints: function getConstraints() {
    var constraintArray = [];
    if (this.constraints.length !== 0) {
      for (var k = 0; k < this.constraints.length; k++) {
        constraintArray.push(JSON.stringify(this.constraints[k]));
      }
    }
    return constraintArray.join("|");
  }
};

/**
 * Tableau de clefs/valeurs pour param.
 *
 * @returns {Array} liste de paramêtres
 */
RouteParamREST.prototype.getParams = function () {
  var map = [];
  map.push({
    k: "resource",
    v: this.resource
  });
  map.push({
    k: "start",
    v: this.start
  });
  map.push({
    k: "end",
    v: this.end
  });
  map.push({
    k: "geometryFormat",
    v: "geojson"
  });
  if (this.optimization) {
    map.push({
      k: "optimization",
      v: this.getOptimization()
    });
  }
  if (this.intermediates) {
    map.push({
      k: "intermediates",
      v: this.getIntermediates()
    });
  }
  if (this.profile) {
    map.push({
      k: "profile",
      v: this.getProfile()
    });
  }
  if (this.constraints) {
    map.push({
      k: "constraints",
      v: this.getConstraints()
    });
  }
  if (this.crs) {
    map.push({
      k: "crs",
      v: this.crs
    });
  }
  if (this.distanceUnit) {
    map.push({
      k: "distanceUnit",
      v: this.getDistanceUnit()
    });
  }
  if (this.timeUnit) {
    map.push({
      k: "timeUnit",
      v: this.timeUnit
    });
  }
  if (this.waysAttributes) {
    map.push({
      k: "waysAttributes",
      v: this.getWaysAttributes()
    });
  }
  return map;
};
/* harmony default export */ __webpack_exports__["default"] = (RouteParamREST);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _model_RouteResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _model_RouteInstruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);






/**
 * Factory pour générer une reponse JSON à partir d'un XML ou d'un JSON
 * (Factory)
 *
 * @module RouteResponseFactory
 * @alias Gp.Services.Route.Response.RouteResponseFactory
 * @private
 */
var RouteResponseFactory = {
  /**
   * interface unique
   *
   * @method build
   * @static
   * @param {Object} options - options definies dans le composant Route
   *
   * @example
   *   var options = {
   *      response :
   *      outputFormat :
   *      rawResponse :
   *      scope :
   *      onSuccess :
   *      onError :
   *   };
   *
   */
  build: function build(options) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("RouteResponseFactory");
    logger.trace("RouteResponseFactory::build()");
    var data = null;
    if (options.response) {
      if (options.rawResponse) {
        logger.trace("analyze response : raw");
        data = options.response;
      } else {
        logger.trace("analyze response : json");
        var JSONResponse;
        if (typeof options.response === "string") {
          JSONResponse = JSON.parse(options.response);
        } else {
          JSONResponse = options.response;
        }

        // construction de l'objet réponse JSON
        if (JSONResponse) {
          // le service renvoie t il une erreur ?
          if (JSONResponse.message) {
            // ex. {"message":"message not null", "status":"ERROR"}
            options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION", JSONResponse.message)));
            return;
          }
          var legs = [];
          var legSteps = [];
          var steps = [];
          data = new _model_RouteResponse__WEBPACK_IMPORTED_MODULE_3__["default"]();
          if (data.hasOwnProperty("totalTime")) {
            data.totalTime = parseFloat(JSONResponse.duration);
          }
          if (data.hasOwnProperty("totalDistance")) {
            data.totalDistance = parseFloat(JSONResponse.distance);
          }
          if (data.hasOwnProperty("bbox")) {
            data.bbox.left = parseFloat(JSONResponse.bbox[0]);
            data.bbox.bottom = parseFloat(JSONResponse.bbox[1]);
            data.bbox.right = parseFloat(JSONResponse.bbox[2]);
            data.bbox.top = parseFloat(JSONResponse.bbox[3]);
          }
          if (data.hasOwnProperty("routeGeometry") && !options.geometryInInstructions) {
            data.routeGeometry = JSONResponse.geometry;
          }
          if (data.hasOwnProperty("routeInstructions") && options.geometryInInstructions) {
            var legList = JSONResponse.portions;
            var i;
            if (Array.isArray(legList) && legList.length) {
              for (i = 0; i < legList.length; i++) {
                legs.push(legList[i]);
              }
            }
            if (legs.length) {
              for (i = 0; i < legs.length; i++) {
                legSteps.push(legs[i].steps);
              }
            }
            if (legSteps.length) {
              for (i = 0; i < legSteps.length; i++) {
                steps = steps.concat(legSteps[i]);
              }
            }
            steps.forEach(function (step) {
              data.routeInstructions.push(new _model_RouteInstruction__WEBPACK_IMPORTED_MODULE_4__["default"]());
              data.routeInstructions[data.routeInstructions.length - 1].duration = step.duration;
              data.routeInstructions[data.routeInstructions.length - 1].distance = step.distance;
              data.routeInstructions[data.routeInstructions.length - 1].code = "";
              data.routeInstructions[data.routeInstructions.length - 1].instruction = "";
              data.routeInstructions[data.routeInstructions.length - 1].geometry = step.geometry;

              // on ne souhaite pas de ce type de valeur...
              if (step.name === "Valeur non renseignée") {
                step.name = "";
              }
              switch (step.instruction.type) {
                case "turn":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Tourner";
                  break;
                case "new name":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Continuer tout droit";
                  break;
                case "depart":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Départ";
                  break;
                case "arrive":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Arrivée";
                  break;
                case "merge":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Rejoindre";
                  break;
                case "ramp":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Prendre la bretelle";
                  break;
                case "on ramp":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Prendre la bretelle";
                  break;
                case "off ramp":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Prendre la sortie";
                  break;
                case "fork":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Sur la bifurcation, prendre";
                  break;
                case "end of road":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "À la fin de la route, prendre";
                  break;
                case "use lane":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Utiliser la file";
                  break;
                case "continue":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Continuer";
                  break;
                case "roundabout":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Au rond-point";
                  break;
                case "rotary":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Au rond-point";
                  break;
                case "roundabout turn":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "Au rond point, tourner";
                  break;
                case "notification":
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "";
                  break;
                default:
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += "?" + step.instruction.type + "?";
                  break;
              }
              if (step.instruction.modifier) {
                switch (step.instruction.modifier) {
                  case "uturn":
                    data.routeInstructions[data.routeInstructions.length - 1].instruction = "Faire demi-tour";
                    break;
                  case "sharp right":
                    data.routeInstructions[data.routeInstructions.length - 1].instruction += " complètement à droite";
                    break;
                  case "right":
                    data.routeInstructions[data.routeInstructions.length - 1].instruction += " à droite";
                    break;
                  case "slight right":
                    data.routeInstructions[data.routeInstructions.length - 1].instruction += " légèrement à droite";
                    break;
                  case "straight":
                    data.routeInstructions[data.routeInstructions.length - 1].instruction = "Continuer tout droit";
                    break;
                  case "slight left":
                    data.routeInstructions[data.routeInstructions.length - 1].instruction += " lègèrement à gauche";
                    break;
                  case "left":
                    data.routeInstructions[data.routeInstructions.length - 1].instruction += " à gauche";
                    break;
                  case "sharp left":
                    data.routeInstructions[data.routeInstructions.length - 1].instruction += " complètement à gauche";
                    break;
                  default:
                    data.routeInstructions[data.routeInstructions.length - 1].instruction += " ?" + step.instruction.modifier + "?";
                    break;
                }
              }
              if (step.instruction.exit) {
                data.routeInstructions[data.routeInstructions.length - 1].instruction += "".concat(step.instruction.exit, "e sortie");
              }
              if (step.attributes.name) {
                if (step.attributes.name.nom_1_droite || step.attributes.name.toponyme) {
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += " sur";
                }
                if (step.attributes.name.nom_1_droite) {
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += " ".concat(step.attributes.name.nom_1_droite);
                }
                if (step.attributes.name.toponyme) {
                  data.routeInstructions[data.routeInstructions.length - 1].instruction += " ".concat(step.attributes.name.toponyme);
                }
              }
            });
          }
        }
        if (!data) {
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_ANALYSE", "json")));
          return;
        }

        // Si la réponse contenait une exception renvoyée par le service
        if (data.exceptionReport) {
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION_2")));
          return;
        }
      }
    } else {
      options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
      return;
    }
    options.onSuccess.call(options.scope, data);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (RouteResponseFactory);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Response object for {@link module:Services~route Gp.Services.route ()} invocation when successful. Received as the argument of onSuccess callback function.
 *
 * @property {Gp.BBox} bbox - Bounding Box of the route. Given when provideBBox parameter is used in function call.
 * @property {Object} routeGeometry - Geometry (expressed in [GeoJSON]{@link http://geojson.org/}) of the route.
 * @property {Array.<Gp.Services.Route.RouteInstruction>} routeInstructions - Instructions of the route.
 * @property {String} totalDistance - Length of the route. If distanceUnit parameter was set to "km" (default), totalDistance is a string containing the total distance expressed in kilometers, followed by " Km" (e.g. : "19.6 Km"). If distanceUnit parameter was set to "m", totalDistance is a string containing the total distance expressed in meters (e.g. : "19599.14").
 * @property {Float} totalTime - Route duration in seconds.
 *
 * @namespace
 * @alias Gp.Services.RouteResponse
 */
function RouteResponse() {
  if (!(this instanceof RouteResponse)) {
    throw new TypeError("RouteResponse constructor cannot be called as a function.");
  }
  this.totalTime = null;
  this.totalDistance = null;
  this.bbox = {
    left: null,
    right: null,
    top: null,
    bottom: null
  };
  this.routeGeometry = null; // FIXME can be null if option 'geometryInInstructions' is true !

  this.routeInstructions = [];
}
RouteResponse.prototype = {
  constructor: RouteResponse
};
/* harmony default export */ __webpack_exports__["default"] = (RouteResponse);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Single Route Instruction object.
 *
 * @property {String} code - Instruction code :
 *
 * - "F" : Straight forward
 * - "B" : U-turn
 * - "L" : turn left
 * - "R" : turn right
 * - "BL" : turn left strongly
 * - "BR" : turn right strongly
 * - "FL" : turn lightly to the left
 * - "FR" : turn lightly to the right
 * - "round_about_entry" : round about entry
 * - "round_about_exit" : round about exit
 *
 * @property {String} instruction - Instruction text : translated code + street name
 * @property {Object} geometry - Geometry (expressed in [GeoJSON]{@link http://geojson.org/}) of the street.
 * @property {Float} distance - Length of the instruction. Expressed in km or m, depending on distanceUnit parameter.
 * @property {Float} duration - Instruction duration in seconds.
 *
 * @namespace
 * @alias Gp.Services.Route.RouteInstruction
 */
function RouteInstruction() {
  if (!(this instanceof RouteInstruction)) {
    throw new TypeError("RouteInstruction constructor cannot be called as a function.");
  }
  this.duration = null;
  this.distance = null;
  this.code = null;
  this.instruction = null;
  this.geometry = null; // FIXME can be null if option 'geometryInInstructions' is false !
}
RouteInstruction.prototype = {
  constructor: RouteInstruction
};
/* harmony default export */ __webpack_exports__["default"] = (RouteInstruction);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _Request_ProcessIsoCurveRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony import */ var _Response_ProcessIsoCurveResponseFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);








/**
 * @classdesc
 * Appel du service d'isochrone/distance du Géoportail :
 *     envoi de la requête construite selon les paramètres en options,
 *     éventuellement parsing et analyse  de la réponse,
 *     retour d'une réponse en paramètre de la fonction onSuccess.
 * @constructor
 * @extends {Gp.Services.CommonService}
 * @alias Gp.Services.ProcessIsoCurve
 * @param {Object} options - options spécifiques au service (+ les options heritées)
 *
 * @param {String} options.resource - La ressource utilisée pour le calcul : bdtopo-valhalla (par défaut) ou bdtopo-pgr.
 *
 * @param {String} options.outputFormat - Le format de la réponse du service iso : 'json' uniquement et par défaut.
 *
 * @param {Object} options.position - Point de départ du calcul.
 *      Coordonnées exprimées en longitudes, latitudes (EPSG:4326)
 *      @param {Float} options.position.x - Abcisse du point de départ du calcul d'isochrone/distance.
 *      @param {Float} options.position.y - Ordonnée du point de départ du calcul d'isochrone/distance.
 *
 * @param {String} options.srs - Projection.
 *      Système de coordonnées dans lequel les coordonnées du point « location » sont exprimées et
 *      dans lequel la géométrie de la courbe résultante sera exprimée.
 *      Par défaut, le système de coordonnées utilisé sera « EPSG:4326 ».
 *
 * @param {String} [options.graph = "voiture"] - Nom du graphe à utiliser pour le calcul (« Pieton » ou « Voiture »).
 *      La valeur par défaut est : «voiture»
 *
 * @param {Array.<String>} [options.exclusions] - DEPRECATED: Ce paramètre est conservé pour une rétrocompatibilité de l'api. Le nouveau paramètre à utiliser est options.constraints.
 *      Critères d'exclusions à appliquer pour le calcul.
 *      On précise ici le type de tronçons que l'on ne veut pas que l'isochrone/distance emprunte
 *      (valeurs possibles : « toll » (éviter les péages), « bridge », « tunnel »).
 *
 * @param {Object[]} [options.constraints] - Critères de contraintes à appliquer sur un itinéraire. Les valeurs disponibles dépendent de la ressource utilisée. Il est donc utile de regarder le getCapabilities.
 *      @param {String} [options.constraints.constraintType] - Type de la contrainte. Généralement "banned".
 *      @param {String} [options.constraints.key] - Clé de la contrainte. Généralement "wayType".
 *      @param {String} [options.constraints.operator] - Opérateur de la contrainte. Généralement "=".
 *      @param {String} [options.constraints.value] - Valeur de la contrainte. Généralement "autoroute".
 *
 * @param {String} [options.method = "time"] - Méthode utilisée pour le calcul de la courbe iso.
 *      Les valeurs possible sont "time" pour un calcul d'isochrone, "distance" pour un calcul d'isodistance.
 *      Pas de valeur spécifié équivaut à un calcul d'isochrone.
 *
 * @param {String} [options.distanceUnit = "m"] - Indique si la distance doit être exprimée en km ou m dans la réponse ("m" or "km").
 *
 * @param {String} [options.timeUnit = "second"] - Indique si la durée doit être exprimée en seconde, minute ou heure dans la réponse ("standard", "second", "minute", "hour"). Il peut-être formatté hh:mm::ss avec la valeur standard.
 *
 * @param {Float} options.time - Durée maximum (exprimée en secondes) à utiliser pour le calcul de la courbe à partir du ou jusqu'au point « location ».
 *      Ce paramètre doit être renseigné si l'option "méthod" a la valeur "time".
 *      Si l'option method n'est pas renseignée, ce paramètre doit être renseigné.
 *
 * @param {Float} options.distance - Distance maximum (exprimée en metres) à utiliser pour le calcul de la courbe à partir du ou j'usqu'au point « location ».
 *      Ce paramètre doit être renseigné si l'option "méthod" a la valeur "DISTANCE".
 *      Si l'option "method" n'est pas renseignée, ce paramètre sera ignoré.
 *
 * @param {Boolean} [options.reverse = false] - Indique si la géométrie résultante doit être lissée (« true ») pour ne pas avoir d'effet d'escalier.
 *      Par défaut, la valeur « false » est appliquée.
 *
 * @param {Boolean} [options.smoothing = false] - Indique si la géométrie résultante doit être lissée (« true ») pour ne pas avoir d'effet d'escalier.
 *      Par défaut, la valeur « false » est appliquée.
 *
 * @param {Boolean} [options.holes = false] - Indique si la géométrie résultante (surface) doit être retournée avec des trous (« true »).
 *      Par défaut, la valeur « false » est appliquée.
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
 *      position : {
 *           x : 2.3242664298058053,
 *           y : 48.86118017324745
 *      },
 *      resource : bdtopo-valhalla,
 *      distance : 200,
 *      [time : ]
 *      method : "distance",
 *      graph : "voiture",
 *      reverse : false
 *  };
 */

function ProcessIsoCurve(options) {
  if (!(this instanceof ProcessIsoCurve)) {
    throw new TypeError(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("CLASS_CONSTRUCTOR", "ProcessIsoCurve"));
  }

  /**
   * Nom de la classe (heritage)
   * FIXME instance ou classe ?
   */
  this.CLASSNAME = "ProcessIsoCurve";

  // appel du constructeur par heritage
  _CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].apply(this, arguments);
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("Gp.Services.ProcessIsoCurve");
  this.logger.trace("[Constructeur ProcessIsoCurve (options)]");
  if (!options.position) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "position"));
  }

  // on lance une exception afin d'eviter au service de le faire...
  if (options.position.x === null) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "position.x"));
  }
  if (options.position.y === null) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "position.y"));
  }
  if (!options.time && !options.distance) {
    throw new Error("Parameter (s) 'distance' missing. Parameter time to calculate an isochrone, parameter distance for an isodistance");
  }

  // si on a que le paramètre "distance" en entrée, on calcule une isodistance.
  // Le paramètre "méthode" doit pour avoir une réponse du service, être passé à "distance"
  if (!options.time && options.distance) {
    this.options.method = "distance";
    // on supprime l'éventuel attribut time, résidu d'un appel antérieur
    if (this.options.time) {
      delete this.options.time;
    }
  }

  // si on a que le paramètre "time" en entrée, on calcule une isochrone.
  // Le paramètre "méthode" doit pour avoir une réponse du service, être passé à "time"
  if (options.time && !options.distance) {
    this.options.method = "time";
    // on supprime l'éventuel attribut time, résidu d'un appel antérieur
    if (this.options.distance) {
      delete this.options.distance;
    }
  }

  // au cas où on a ni l'un, ni l'autre...
  this.options.method = this.options.method || "time";

  // options par defaut du service
  // TODO: modifier la ressource lors de la mise en production du service
  this.options.resource = options.resource || "bdtopo-valhalla";
  this.options.exclusions = options.exclusions || [];
  this.options.reverse = options.reverse || false;
  this.options.srs = options.srs || "EPSG:4326";
  this.options.distanceUnit = options.distanceUnit || "m";
  this.options.timeUnit = options.timeUnit || "second";

  // options depreciees
  if (options.smoothing) {
    this.logger.warn("options.smoothing is DEPRECATED");
  }
  this.options.smoothing = false;
  if (options.holes) {
    this.logger.warn("options.holes is DEPRECATED");
  }
  this.options.holes = false;

  // Gestion du graphe
  if (options.graph) {
    if (options.graph === "Voiture") {
      this.options.graph = "car";
    }
    if (options.graph === "Pieton") {
      this.options.graph = "pedestrian";
    }
  } else {
    this.options.graph = "car";
  }

  // Gestions des contraintes
  this.options.constraints = [];
  if (options.constraints) {
    if (Array.isArray(options.constraints)) {
      for (var k = 0; k < options.constraints.length; k++) {
        this.options.constraints.push(options.constraints[k]);
      }
    } else {
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_TYPE", "constraints"));
    }
  }

  // Gestion de l'ancien paramètre exclusions
  var constraintTunnel = {};
  var constraintPont = {};
  var constraintAutoroute = {};
  if (options.exclusions) {
    if (options.exclusions.length !== 0) {
      this.logger.warn("options.exclusions is DEPRECATED !!");
      for (var c = 0; c < options.exclusions.length; c++) {
        if (typeof options.exclusions[c] === "string") {
          options.exclusions[c] = options.exclusions[c].toLowerCase();
        } else {
          // on ne crée pas une erreur pour rétro-compatibilité avec les anciennes versions
          continue;
        }
        if (options.exclusions[c] === "toll") {
          constraintAutoroute.constraintType = "banned";
          constraintAutoroute.key = "wayType";
          constraintAutoroute.operator = "=";
          constraintAutoroute.value = "autoroute";
          this.options.constraints.push(constraintAutoroute);
        }
        if (options.exclusions[c] === "tunnel") {
          constraintTunnel.constraintType = "banned";
          constraintTunnel.key = "wayType";
          constraintTunnel.operator = "=";
          constraintTunnel.value = "tunnel";
          this.options.constraints.push(constraintTunnel);
        }
        if (options.exclusions[c] === "bridge") {
          constraintPont.constraintType = "banned";
          constraintPont.key = "wayType";
          constraintPont.operator = "=";
          constraintPont.value = "pont";
          this.options.constraints.push(constraintPont);
        }
      }
    }
  }

  // on passe l'option outputFormat en minuscules afin d'éviter des exceptions.
  this.options.outputFormat = typeof options.outputFormat === "string" ? options.outputFormat.toLowerCase() : "json";
  if (options.outputFormat && options.outputFormat !== "json") {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_NOT_SUPPORT", "outputFormat"));
  }
  this.options.outputFormat = "json";

  // gestion de l'url du service par defaut
  // si l'url n'est pas renseignée, il faut utiliser les urls par defaut
  if (!this.options.serverUrl) {
    var urlFound = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__["default"].ProcessIsoCurve.newUrl();
    if (!urlFound) {
      throw new Error("Url by default not found !");
    }
    this.options.serverUrl = urlFound;
    this.logger.trace("Serveur URL par defaut : " + this.options.serverUrl);
  }
}

/**
 * @lends module:ProcessIsoCurve#
 */
ProcessIsoCurve.prototype = Object.create(_CommonService__WEBPACK_IMPORTED_MODULE_3__["default"].prototype, {
  // todo
  // getter/setter
});

/*
 * Constructeur (alias)
 */
ProcessIsoCurve.prototype.constructor = ProcessIsoCurve;

/**
 * Création de la requête (overwrite)
 *
 * @param {Function} error   - callback des erreurs
 * @param {Function} success - callback
 */
ProcessIsoCurve.prototype.buildRequest = function (error, success) {
  try {
    var oIsoCurve = new _Request_ProcessIsoCurveRequest__WEBPACK_IMPORTED_MODULE_5__["default"](this.options);
    if (!oIsoCurve.processRequestString()) {
      throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_REQUEST_BUILD"));
    }
    this.request = oIsoCurve.requestString;
  } catch (e) {
    error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](e.message));
    return;
  }
  success.call(this, this.request);
};

/**
 * (overwrite)
 * Analyse de la reponse
 *
 * @param {Function} onError   - callback des erreurs
 * @param {Function} onSuccess - callback de succès de l'analyse de la réponse
 */
ProcessIsoCurve.prototype.analyzeResponse = function (onError, onSuccess) {
  if (this.response) {
    var options = {
      response: this.response,
      outputFormat: this.options.outputFormat,
      rawResponse: this.options.rawResponse,
      onSuccess: onSuccess,
      onError: onError,
      scope: this
    };
    _Response_ProcessIsoCurveResponseFactory__WEBPACK_IMPORTED_MODULE_6__["default"].build(options);
  } else {
    onError.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProcessIsoCurve);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _model_ProcessIsoCurveParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);




/**
 * @classdesc
 * Classe de gestion des requêtes sur le service de calcul d'isoschrone/isodistance.
 *  Les requêtes peuvent être en mode GET ou POST,
 *  et le format de sorti est en JSON.
 *
 * @constructor
 * @alias Gp.Services.ProcessIsoCurve.Request.ProcessIsoCurveRequest
 * @param {Object} options - options
 *
 * @example
 * var options = {
 *      httpMethod : 'GET', // GET|POST
 *      // spécifique au service
 *      position : {
 *          x : 2.3242664298058053,
 *          y : 48.86118017324745
 *      },
 *      graph : "car",
 *      method : 'time',
 *      time : 1000, //distance : 200
 *      reverse : false,
 *      srs : 'EPSG:4326'
 *  };
 *
 * try {
 *
 *      var oIsoCurve = new ProcessIsoCurveRequest (options);
 *      if (!oIsoCurve.processRequestString ()) {
 *          // error
 *      }
 *
 *      var request = oIsoCurve.requestString;
 *
 * } catch (e) {
 *      // error
 * }
 * @private
 */
function ProcessIsoCurveRequest(options) {
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("ProcessIsoCurveRequest");
  this.logger.trace("[Constructeur ProcessIsoCurveRequest ()]");
  if (!(this instanceof ProcessIsoCurveRequest)) {
    throw new TypeError("ProcessIsoCurveRequest constructor cannot be called as a function.");
  }

  // existance des options
  if (!options) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_EMPTY", "options"));
  }

  /**
   * Liste des options
   */
  this.settings = options;

  /**
   * Mode HTPP.
   * Par defaut, "GET".
   * @type {String}
   */
  this.mode = this.settings.httpMethod || "GET";
}
ProcessIsoCurveRequest.prototype = {
  /**
   * @lends module:ProcessIsoCurveRequest#
   */

  /**
   * Requête
   * @type {String}
   */
  requestString: null,
  /**
   * Constructeur (alias)
   */
  constructor: ProcessIsoCurveRequest,
  /**
   * Construction de la requête.
   *
   * @example
   * // GET  out :
   *   //  (http://wxs.ign.fr/KEY/isochrone?)
   *   //  resource=&
   *   //  point=&
   *   //  costValue=&
   *   //  costType=&
   *   //  profile=&
   *   //  constraints=&
   *   //  direction=&
   *   //  crs=
   *
   * // POST out :
   * {
   *  resource: "bduni-idf-pgr",
   *  point: "2.337306,48.849319",
   *  costValue: 100,
   *  costType: "time",
   *  profile: "car",
   *  constraints: [{
   *      constraintType: "banned",
   *      key: "ways_type",
   *      operator: "=",
   *      value: "autoroute"
   *  }]
   * }
   *
   * @returns {String} request
   */
  processRequestString: function processRequestString() {
    var request = "";
    var i = 0;
    switch (this.mode) {
      case "GET":
        this.logger.trace("Process GET Request");

        // Mapping des options avec le service de l'API REST
        var oParams = new _model_ProcessIsoCurveParam__WEBPACK_IMPORTED_MODULE_2__["default"](this.settings);
        var params = oParams.getParams();
        for (i = 0; i < params.length; i++) {
          var o = params[i];
          if (request) {
            request += "&";
          }
          request += o.k + "=" + o.v;
        }
        break;
      case "POST":
        this.logger.trace("Process POST Request");
        // creation du JSON
        var postRequest = {};
        postRequest.resource = this.settings.resource;
        postRequest.point = this.settings.position.x + "," + this.settings.position.y;
        if (this.settings.method === "distance") {
          postRequest.costType = "distance";
          postRequest.costValue = this.settings.distance;
        } else {
          postRequest.costType = "time";
          postRequest.costValue = this.settings.time;
        }
        postRequest.profile = this.settings.graph;
        if (this.settings.reverse) {
          postRequest.direction = "arrival";
        } else {
          postRequest.direction = "departure";
        }
        postRequest.constraints = this.settings.constraints;
        postRequest.distanceUnit = this.settings.distanceUnit;
        postRequest.timeUnit = this.settings.timeUnit;
        postRequest.crs = this.settings.srs;

        // conversion en chaîne de caractères
        request = JSON.stringify(postRequest);
        break;
      default:
        this.logger.error("No other HTTP method supported by the service !");
    }
    this.logger.trace(request);
    this.requestString = request;
    return this.requestString;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProcessIsoCurveRequest);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/**
 * @classdesc
 *
 * Classe de gestion des param. des requêtes du service de calcul des iso.
 * Permet le mapping avec les options du service.
 *
 * @constructor
 * @alias Gp.Services.ProcessIsoCurve.Request.ProcessIsoCurveParam
 * @param {Object} options - options
 * @private
 *
 */
function ProcessIsoCurveParam(options) {
  if (!(this instanceof ProcessIsoCurveParam)) {
    throw new TypeError("ProcessIsoCurveParam constructor cannot be called as a function.");
  }
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger();
  this.logger.trace("[Constructeur ProcessIsoCurveParam ()]");

  /**
   * Options en paramêtres du constructeur.
   */
  this.options = options || {};

  // mapping des options avec l'API REST

  /** Identifiant de l’isochrone */
  this.id = this.options.id;

  /** Resource */
  this.resource = this.options.resource;

  /** Coordonnées de départ (ou arrivée si le reverse est à true). */
  this.point = this.options.position;

  /** projection (code EPSG comme epsg:4326 ou wgs84) */
  this.crs = this.options.srs;

  /**
   * Profil de véhicule à utiliser pour le calcul.
   * Voiture ou Pieton
   */
  this.profile = this.options.graph;

  /** Liste des règles de restrictions à utiliser */
  this.constraints = this.options.constraints;
  this.reverse = this.options.reverse;
  this.timeUnit = this.options.timeUnit;
  this.distanceUnit = this.options.distanceUnit;

  /**
   * "time" pour isochrone ou "distance" for isodistance.
   * Par defaut, time...
   */
  if (this.options.method === "distance") {
    this.costType = "distance";
    this.costValue = this.options.distance;
    if (this.distanceUnit === "m" && this.costValue >= 50000) {
      this.distanceUnit = "km";
      this.costValue /= 1000;
    }
  } else {
    this.costType = "time";
    this.costValue = this.options.time;
  }
}

/**
 * CLASSNAME
 */
ProcessIsoCurveParam.CLASSNAME = "ProcessIsoCurveParam";
ProcessIsoCurveParam.prototype = {
  /**
   * @lends module:ProcessIsoCurveParam#
   */

  /**
   * Constructeur (alias)
   */
  constructor: ProcessIsoCurveParam,
  /**
   * Retourne le point
   * @returns {String} x,y
   */
  getLocation: function getLocation() {
    return this.point.x + "," + this.point.y;
  },
  /**
   * Retourne l'unité de la distance
   * @returns {String}
   */
  getDistanceUnit: function getDistanceUnit() {
    if (this.distanceUnit === "m") {
      return "meter";
    }
    if (this.distanceUnit === "km") {
      return "kilometer";
    }
    return "";
  },
  /**
   * Retourne la liste des contraintes
   * @returns {String}
   */
  getConstraints: function getConstraints() {
    var constraintArray = [];
    if (this.constraints.length !== 0) {
      for (var k = 0; k < this.constraints.length; k++) {
        constraintArray.push(JSON.stringify(this.constraints[k]));
      }
    }
    return constraintArray.join("|");
  },
  /**
   * Retourne la direction
   * @returns {String}
   */
  getDirection: function getDirection() {
    if (this.reverse) {
      return "arrival";
    } else {
      return "departure";
    }
  }
};

/**
 * Tableau de clefs/valeurs pour param.
 *
 * @returns {Object[]} KVP
 */
ProcessIsoCurveParam.prototype.getParams = function () {
  var map = [];
  map.push({
    k: "resource",
    v: this.resource
  });
  map.push({
    k: "point",
    v: this.getLocation()
  });
  map.push({
    k: "direction",
    v: this.getDirection()
  });
  map.push({
    k: "costType",
    v: this.costType
  });
  map.push({
    k: "costValue",
    v: this.costValue
  });
  map.push({
    k: "profile",
    v: this.profile
  });
  map.push({
    k: "timeUnit",
    v: this.timeUnit
  });
  map.push({
    k: "distanceUnit",
    v: this.getDistanceUnit()
  });
  if (this.crs) {
    map.push({
      k: "crs",
      v: this.crs
    });
  }
  if (this.constraints) {
    map.push({
      k: "constraints",
      v: this.getConstraints()
    });
  }
  return map;
};
/* harmony default export */ __webpack_exports__["default"] = (ProcessIsoCurveParam);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _model_ProcessIsoCurveResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);





/**
 * Factory pour générer une reponse JSON à partir d'un JSON
 * (Factory)
 *
 * @module ProcessIsoCurveResponseFactory
 * @alias Gp.Services.ProcessIsoCurve.Response.ProcessIsoCurveResponseFactory
 * @private
 */
var ProcessIsoCurveResponseFactory = {
  /**
   * interface unique
   *
   * @method build
   * @static
   * @param {Object} options - options definies dans le composant ProcessIsoCurve
   *
   * @example
   *   var options = {
   *      response :
   *      outputFormat :
   *      rawResponse :
   *      scope :
   *      onSuccess :
   *      onError :
   *   };
   *
   */
  build: function build(options) {
    // logger
    var logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("ProcessIsoCurveResponseFactory");
    logger.trace(["ProcessIsoCurveResponseFactory::build()"]);
    var data = null;
    if (options.response) {
      if (options.rawResponse) {
        logger.trace("analyze response : raw");
        data = options.response;
      } else {
        logger.trace("analyze response : json");
        var JSONResponse;
        if (typeof options.response === "string") {
          JSONResponse = JSON.parse(options.response);
        } else {
          JSONResponse = options.response;
        }

        // analyse de la reponse
        // création de l'objet de réponse
        data = new _model_ProcessIsoCurveResponse__WEBPACK_IMPORTED_MODULE_3__["default"]();

        // remplissage de l'objet créé avec les attribtuts de la réponse du service
        if (JSONResponse) {
          if (JSONResponse.costType === "distance") {
            data.time = "";
            data.distance = JSONResponse.costValue;
          } else {
            data.time = JSONResponse.costValue;
            data.distance = "";
          }
          data.message = "";
          data.id = "";
          data.srs = JSONResponse.crs;
          data.geometry = JSONResponse.geometry;
          var coords = JSONResponse.point.split(",");
          if (data.location) {
            data.location.x = coords[0];
            data.location.y = coords[1];
          }
        } else {
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_ANALYSE", options.response)));
          return;
        }

        // info : en cas de problèmes de droits (clé invalide ou autre), la réponse est au format XML !!
        // ex. <ExceptionReport><Exception exceptionCode="MissingParameter">Key does not exist or has expired</Exception></ExceptionReport>
        // mais le statut est 403, l'erreur est donc remontée plus tôt.
        if (data.exceptionReport) {
          options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"]({
            message: _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EXCEPTION", data.exceptionReport),
            type: _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_SRVERR,
            status: 200
          }));
          return;
        }
      }
    } else {
      // si la réponse est vide, on appelle le callback d'erreur
      options.onError.call(options.scope, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
      return;
    }

    // si tout s'est bien passé, on appelle le callback de succès
    options.onSuccess.call(options.scope, data);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProcessIsoCurveResponseFactory);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Response object for {@link module:Services~isoCurve Gp.Services.isoCurve ()} invocation when successful. Received as the argument of onSuccess callback function.
 *
 * @property {Float} distance - distance (expressed in meters) used for the request.
 * @property {Float} time - time (expressed in seconds) used for the request.
 * @property {Object} geometry - Geometry (expressed in [GeoJSON]{@link http://geojson.org/}) of the isocurve.
 * @property {String} id - request id (used by underlying webservice).
 * @property {Gp.Point} location - Position of the start or end point used for the request (expressed in "srs" coordinates system).
 * @property {String} message - message
 * @property {String} srs - Identifier of the coordinates system used for the isocurve.
 *
 * @namespace
 * @alias Gp.Services.IsoCurveResponse
 *
 */
function ProcessIsoCurveResponse() {
  if (!(this instanceof ProcessIsoCurveResponse)) {
    throw new TypeError("ProcessIsoCurveResponse constructor cannot be called as a function.");
  }
  this.message = null;
  this.id = null;
  this.location = {};
  this.location.x = null;
  this.location.y = null;
  this.srs = null;
  this.geometry = null;
  this.time = null;
  this.distance = null;
}
ProcessIsoCurveResponse.prototype = {
  constructor: ProcessIsoCurveResponse
};
/* harmony default export */ __webpack_exports__["default"] = (ProcessIsoCurveResponse);

/***/ })
/******/ ])["default"];
});
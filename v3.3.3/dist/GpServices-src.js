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
 * @version 3.3.3
 * @date 02/08/2023
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
		module.exports = factory(require("node-fetch"), require("xmldom"));
	else if(typeof define === 'function' && define.amd)
		define("Gp", ["require", "require"], factory);
	else if(typeof exports === 'object')
		exports["Gp"] = factory(require("node-fetch"), require("xmldom"));
	else
		root["Gp"] = factory(root[undefined], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__15__) {
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
/* harmony import */ var _Services_DefaultUrlService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _Services_Alti_Response_model_AltiResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _Services_Alti_Response_model_Elevation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _Services_AutoComplete_Response_model_AutoCompleteResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _Services_AutoComplete_Response_model_SuggestedLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony import */ var _Services_ProcessIsoCurve_Response_model_ProcessIsoCurveResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58);
/* harmony import */ var _Services_Route_Response_model_RouteResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52);
/* harmony import */ var _Services_Route_Response_model_RouteInstruction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);
/* harmony import */ var _Services_Config_Config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var _Protocols_XHR__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19);
var _package_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(19, 1);
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
/* harmony import */ var _Alti_Alti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _Geocode_Geocode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Geocode_ReverseGeocode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _AutoComplete_AutoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _Route_Route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _ProcessIsoCurve_ProcessIsoCurve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);
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
   * @param {String} [options.serverUrl=http (s)://wxs.ign.fr/APIKEY/alti/rest/elevation.json] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
   * @param {Boolean} [options.ssl = true] - Use of HTTPS or HTTP protocol to request the services. HTTPS by default (ssl=true).
   * @param {String} [options.protocol=XHR] - Protocol used to handle dialog with web service. Possible values are 'JSONP' ({@link https://en.wikipedia.org/wiki/JSONP}) and 'XHR' ({@link https://en.wikipedia.org/wiki/XMLHttpRequest}). Only XHR protocol is supported in a NodeJS environment. Only use if you know what you're doing.
   * @param {String} [options.proxyURL] - Proxy URL to use when requesting underlying web service. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you're doing.
   * @param {String} [options.callbackSuffix] - Callback function name suffix to use in case of a JSONP protocol use (see above), to set your own suffix instead of auto-increment. Ignored when options.protocol is set to 'XHR' value. Only use if you know what you're doing.
   * @param {String} [options.httpMethod=GET] - HTTP method to use when requesting underlying web service in case of a XHR protocol use (see above). Possible values are 'GET' and 'POST'. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {String} [options.contentType="application/xml"] - Content-Type to use when requesting underlying web service in case of a XHR protocol use (see above) and if method HTTP is POST. Ignored when options.protocol is set to 'JSONP' value. Only use if you know what you are doing.
   * @param {Boolean} [options.rawResponse=false] - Setting this parameter to true implies you want to handle the service response by yourself : it will be returned as an unparsed String in onSuccess callback parameter. Only use if you know what you are doing.
   * @param {Function} [options.onBeforeParse] - Callback function for handling service response before parsing (as an unparsed String). Takes a String as a parameter (the raw service response). Returns a String that will be parsed as the service response. Only use if you know what you are doing.
   * @param {String} [options.api='REST'] - What API to use for interacting with underlying web service : 'REST' or 'WPS'. Only use if you know what you are doing.
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
   * @param {String} [options.serverUrl=http (s)://wxs.ign.fr/APIKEY/geoportail/ols] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
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
   * @param {String} [options.serverUrl=http (s)://wxs.ign.fr/APIKEY/geoportail/ols] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
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
   * @param {String} [options.serverUrl=http (s)://wxs.ign.fr/APIKEY/ols/apis/completion] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
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
   * @param {String} [options.serverUrl=http (s)://wxs.ign.fr/APIKEY/itineraire/rest/route.json] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
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
   * @param {String} [options.serverUrl=http (s)://wxs.ign.fr/APIKEY/isochrone/isochrone.json] - Web service URL. If used, options.apiKey parameter is ignored. Only use if you know what you're doing.
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
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _ConfigInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






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
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("PARAM_MISSING", "apiKey", "customConfigFile"));
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
    // FIXME howtodo !? DefineWebpackPlugin ? EnvironmentWebpackPlugin ?
    "false".match(/true/) ? loglevel__WEBPACK_IMPORTED_MODULE_0__["disableAll"]() : loglevel__WEBPACK_IMPORTED_MODULE_0__["enableAll"]();
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

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      defaultLevel = defaultLevel == null ? "WARN" : defaultLevel;

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
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
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
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch (ignore) {}
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
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          defaultLevel = level;
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.resetLevel = function () {
          self.setLevel(defaultLevel, false);
          clearPersistedLevel();
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
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
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
var _package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(19, 1);






// package.json (extract version)


/**
 * @classdesc
 * Composant Service
 *
 * @constructor
 * @alias Gp.Services.CommonService
 * @param {Object} options - options communes à tous les services
 *
 * @param {String} [options.serverUrl] - URL d'accès au service. Par défaut "https://wxs.ign.fr/calcul/geoportail/SERVICE/".
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

  // gestion de l'url du service par defaut
  if (!this.options.serverUrl) {
    // INFO
    // gestion de l'url du service par defaut pour les services qui ne possèdent qu'une seul url par defaut
    // les cas particuliers des services avec plusieurs urls (ex. Alti) devront être traité dans la classe du composant
    // donc si l'url n'est pas renseignée, il faut utiliser les urls par defaut
    _DefaultUrlService__WEBPACK_IMPORTED_MODULE_5__["default"].ssl = this.options.ssl;
    var urlByDefault = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_5__["default"][this.CLASSNAME].url("calcul");
    if (typeof urlByDefault === "string") {
      this.options.serverUrl = urlByDefault;
    } else {
      this.logger.trace("URL par defaut à determiner au niveau du composant...");
    }
  }

  // FIXME nettoyage des KVP dans l'url du service
  // if (this.options.serverUrl) {
  //     // INFO
  //     // si l'url est renseignée, il faut la nettoyer de tous ses KVP
  //     // ex. on ne veut pas de params. 'callback' ou 'output' car ceci declencherait
  //     // des opérations d'encapsulations des reponses légèrement farfelues ...
  //     var urlsource = this.options.serverUrl;
  //     var urlparts = urlsource.split("?");
  //     this.options.serverUrl = urlparts[0];
  // }

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
    if (this.CLASSNAME !== "Geocode" && this.CLASSNAME !== "ReverseGeocode" && this.CLASSNAME !== "AutoComplete") {
      this.options.serverUrl = _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["default"].normalyzeUrl(this.options.serverUrl, {
        "gp-access-lib": _package_json__WEBPACK_IMPORTED_MODULE_6__.version
      }, false);
    }

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
/* harmony import */ var _JSONP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
        if (options.scope.CLASSNAME === "Geocode" || options.scope.CLASSNAME === "ReverseGeocode") {
          options.url = options.url + options.data;
        } else {
          options.url = _Utils_Helper__WEBPACK_IMPORTED_MODULE_1__["default"].normalyzeUrl(options.url, options.data);
        }
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// cette classe contient les URLs par defaut des services.
//  DefaultUrlService.Alti.url(key)[elevation-json]
//  DefaultUrlService.Alti.url(key)[elevation-xml]
//  DefaultUrlService.Alti.url(key)[profil-json]
//  DefaultUrlService.Alti.url(key)[profil-xml]
//  DefaultUrlService.Alti.url(key)[wps]
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
// -> http://wxs.ign.fr/calcul/alti/wps
//
// ssl by default.
//
// Force to not do ssl :
// DefaultUrlService.ssl = false;
//
// DefaultUrlService.AutoComplete.url('calcul')
// output {Object|String}
// -> https://wxs.ign.fr/calcul/ols/apis/completion

// constantes internes
var HOSTNAME = "wxs.ign.fr";

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
  * base url of services (ssl protocol management)
  * @param {String} key - key
  * @param {String} path - path
  * @returns {String} url
  */
  url: function url(key, path) {
    // comportement par défaut => https
    // sinon, il est fixé par l'option 'ssl' (false => http)
    var _protocol;
    if (DefaultUrlService.ssl === false) {
      _protocol = "http://";
    } else {
      _protocol = "https://";
    }
    return _protocol + HOSTNAME.concat("/", key, path);
  },
  /**
   * Elevation web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns elevation service default urls with or without geoportal access key given as a parameter. The result is a javascript object with different urls given used protocols ("elevation-json", "elevation-xml", "profil-json" or "profil-xml").
   */
  Alti: {
    _key: {
      // rest
      "elevation-json": "/alti/rest/elevation.json",
      "elevation-xml": "/alti/rest/elevation.xml",
      "profil-json": "/alti/rest/elevationLine.json",
      "profil-xml": "/alti/rest/elevationLine.xml",
      // other
      wps: "/alti/wps"
    },
    /**
    * url
    * @param {String} key - key
    * @returns {String} url
    */
    url: function url(key) {
      return {
        // rest
        "elevation-json": DefaultUrlService.url(key, this._key["elevation-json"]),
        "elevation-xml": DefaultUrlService.url(key, this._key["elevation-xml"]),
        "profil-json": DefaultUrlService.url(key, this._key["profil-json"]),
        "profil-xml": DefaultUrlService.url(key, this._key["profil-xml"]),
        // other
        wps: DefaultUrlService.url(key, this._key["wps"])
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
    _key: "/geoportail/isochrone/rest/1.0.0/isochrone",
    /**
    * url
    * @param {String} key - key
    * @returns {String} url
    */
    url: function url(key) {
      return DefaultUrlService.url(key, this._key);
    }
  },
  /**
   * Config web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns config service default urls with or without geoportal access key given as a parameter.
   */
  Config: {
    _key: "https://raw.githubusercontent.com/IGNF/geoportal-configuration/main/dist/",
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
    _key: "/ols/apis/completion",
    /**
    * url
    * @param {String} key - key
    * @returns {String} url
    */
    url: function url(key) {
      return DefaultUrlService.url(key, this._key);
    }
  },
  /**
   * Reverse geocoding web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns reverse geocoding service default urls with or without geoportal access key given as a parameter. The result is a String.
   */
  ReverseGeocode: {
    _key: "/geoportail/ols",
    /**
    * url
    * @param {String} key - key
    * @returns {String} url
    */
    url: function url(key) {
      return DefaultUrlService.url(key, this._key);
    }
  },
  /**
   * Geocoding web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns geocoding service default urls with or without geoportal access key given as a parameter. The result is a String.
   */
  Geocode: {
    _key: "/geoportail/ols",
    /**
    * url
    * @param {String} key - key
    * @returns {String} url
    */
    url: function url(key) {
      return DefaultUrlService.url(key, this._key);
    }
  },
  /**
   * Routing web service access
   *
   * @member {Object}
   * @property {Function} url (key) - Returns routing service default urls with or without geoportal access key given as a parameter. The result is a javascript object with different urls given used protocols.
   */
  Route: {
    _key: "/geoportail/itineraire/rest/1.0.0/route",
    /**
    * url
    * @param {String} key - key
    * @returns {String} url
    */
    url: function url(key) {
      return DefaultUrlService.url(key, this._key);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DefaultUrlService);

/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"geoportal-access-lib\",\"version\":\"3.3.3\",\"date\":\"02/08/2023\",\"description\":\"French Geoportal resources access library\",\"module\":\"src/Gp.js\",\"main\":\"dist/GpServices-src.js\",\"homepage\":\"https://github.com/IGNF/geoportal-access-lib#readme\",\"scripts\":{\"clean\":\"echo \\\"Warning: no yet implemented!\\\" && exit 0\",\"setup\":\"npm install\",\"cover\":\"nyc --reporter=lcov --reporter=text npm run test\",\"eslint\":\"eslint src/\",\"build\":\"webpack --mode=none\",\"build:prod\":\"webpack --mode=production\",\"build:dev\":\"webpack --mode=development\",\"test\":\"mocha-webpack --reporter mochawesome --reporter-options reportDir=test-report,reportFilename=index --webpack-config ./test/webpack/webpack.test.js --glob \\\"test_*.js\\\" test/spec/\",\"test:serve\":\"webpack-dev-server --hot --config ./test/webpack/webpack.test.serve.js\",\"test:serve:docker\":\"webpack-dev-server --hot --config ./test/webpack/webpack.test.serve.docker.js\",\"test:end-to-end:serve\":\"webpack-dev-server --hot --config ./test/webpack/webpack.end-to-end.serve.js\",\"test:end-to-end:serve:docker\":\"webpack-dev-server --hot --config ./test/webpack/webpack.end-to-end.serve.docker.js\",\"sample\":\"npm run sample:serve\",\"sample:serve\":\"webpack-dev-server --mode=none --open-page samples/index-src.html --https --content-base . --output-public-path '/dist/' --port 9001 --open\",\"sample:serve:prod\":\"webpack-dev-server --mode=production --open-page samples/index-prod.html --content-base . --output-public-path '/dist/' --port 9001 --open\",\"sample:serve:dev\":\"webpack-dev-server --mode=development --open-page samples/index-map.html --content-base . --output-public-path '/dist/' --port 9001 --open\",\"doc\":\"npm run doc:serve\",\"doc:serve\":\"webpack-dev-server --content-base jsdoc --port 9001 --open\"},\"nyc\":{\"include\":[\"src/**/*.js\"],\"instrument\":false,\"sourceMap\":false},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/IGNF/geoportal-access-lib.git\"},\"keywords\":[\"geoportail\",\"webservice\",\"javascript\",\"es6\"],\"author\":\"IGNF\",\"license\":\"CECILL-B\",\"dependencies\":{\"es6-promise\":\"^4.2.4\",\"node-fetch\":\"^2.6.1\",\"xmldom\":\"^0.1.27\"},\"devDependencies\":{\"@babel/core\":\"^7.12.10\",\"@babel/plugin-transform-template-literals\":\"^7.12.1\",\"@babel/preset-env\":\"^7.12.11\",\"babel-loader\":\"^8.2.2\",\"chai\":\"^4.1.2\",\"clean-webpack-plugin\":\"^3.0.0\",\"copy-webpack-plugin\":\"^5.1.2\",\"eslint\":\"^7.18.0\",\"eslint-config-standard\":\"^16.0.2\",\"eslint-loader\":\"^4.0.2\",\"eslint-plugin-import\":\"^2.22.1\",\"eslint-plugin-node\":\"^11.1.0\",\"eslint-plugin-promise\":\"^4.2.1\",\"eslint-plugin-standard\":\"^5.0.0\",\"glob\":\"^7.1.2\",\"handlebars-layouts\":\"^3.1.4\",\"handlebars-webpack-plugin\":\"^1.4.1\",\"html-webpack-plugin\":\"^4.5.1\",\"istanbul-instrumenter-loader\":\"^3.0.1\",\"jsdoc-webpack-plugin\":\"^0.3.0\",\"loglevel\":\"^1.6.1\",\"mocha\":\"^7.2.0\",\"mocha-loader\":\"^5.1.5\",\"mocha-webpack\":\"^2.0.0-beta.0\",\"mochawesome\":\"^6.2.1\",\"nyc\":\"^15.1.0\",\"path\":\"^0.12.7\",\"replace-bundle-webpack-plugin\":\"^1.0.0\",\"sinon\":\"^9.2.4\",\"sinon-es6\":\"0.0.3\",\"speed-measure-webpack-plugin\":\"^1.4.2\",\"string-template\":\"^1.0.0\",\"terser-webpack-plugin\":\"^2.3.8\",\"webpack\":\"^4.46.0\",\"webpack-cli\":\"^3.3.12\",\"webpack-dev-server\":\"^3.11.2\",\"webpack-node-externals\":\"^2.5.2\",\"webpack-shell-plugin\":\"^0.5.0\"},\"bundledDependencies\":[],\"peerDependencies\":{},\"optionalDependencies\":{}}");

/***/ }),
/* 20 */
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
   */
  getLayerConf: function getLayerConf(layerId) {
    if (!this.layers) {
      return;
    }
    return this.layers[layerId];
  },
  /**
   * Get all parameters needed to display a WMS or WMTS layer given its name, its service and its key
   *
   * @param {String} layerName - name of the layer (ex. "ORTHOIMAGERY.ORTHOPHOTOS")
   * @param {String} service   - name of the service (ex. "WMS" ou "WMTS")
   * @param {String} [apiKey]  - Contract API key
   * @returns {Object} params  - params of the service (WMS or WMTS) for the given layer
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
        var wmsTypeRegex = /\/v\//;
        // WMS vector style always empty (not in getCap)
        if (wmsTypeRegex.test(params.url)) {
          params.styles = "";
        } else {
          // WMS raster style is defined in getCap
          params.styles = layerConf.styles[0].name;
        }
        params.version = layerConf.serviceParams.version;
        params.format = layerConf.formats[0].name;
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _Request_AltiRequestFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _Response_AltiResponseFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);








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
 *      zonly : false // false|true
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

  // gestion de l'url du service par defaut
  // si l'url n'est pas renseignée, il faut utiliser les urls par defaut
  // en fonction du type d'api, REST ou WPS, du format de reponse demandé (outputFormat)
  // ainsi que sur le type de service (profil ou elevation)
  if (!this.options.serverUrl) {
    var lstUrlByDefault = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__["default"].Alti.url("calcul");
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
    positions: this.options.positions,
    outputFormat: this.options.outputFormat,
    sampling: this.options.sampling,
    api: this.options.api,
    zonly: this.options.zonly
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _AltiRequestREST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _AltiRequestWPS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
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
        zonly: null // (only use by Elevation)
      }
    };

    // surcharge des valeurs obligatoires
    settings.param.positions = options.positions;
    settings.param.format = options.outputFormat;
    settings.param.sampling = options.sampling;
    settings.param.zonly = options.zonly;

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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _model_AltiElevationRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _model_AltiProfilRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
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
 * @param {Boolean}  options.param.zonly - false|true
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
      value: "lon=__LON__&lat=__LAT__&indent=__INDENT__&crs='__CRS__'",
      input: {
        point: "&zonly=__ZONLY__",
        profil: "&sampling=__SAMPLING__"
      }
    },
    post: {
      // FIXME on retire le param 'delimiter' : delimiter='__DELIMITER__'\n\
      value: "lon=__LON__\n" + "lat=__LAT__\n" + "indent=__INDENT__\n" + "crs='__CRS__'\n",
      input: {
        point: "zonly=__ZONLY__",
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
      return tmpl.replace(/__ZONLY__/g, this.DataObject.zonly);
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _AltiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);



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
  return map;
};
/* harmony default export */ __webpack_exports__["default"] = (AltiElevationRequest);

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _AltiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);



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
  return map;
};
/* harmony default export */ __webpack_exports__["default"] = (AltiProfilRequest);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Formats_WPS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _model_AltiElevationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _model_AltiProfilRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
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
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _Formats_XML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _Formats_AltiResponseReader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31);
/* harmony import */ var _model_AltiResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _model_Elevation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
/* 30 */
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Response_model_AltiResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _Response_model_Elevation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
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
 * @property {Method} AltiResponseReader.READERS.elevation - ecture d'un noeud "elevation" de la réponse xml du service alti.
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
   *      (contient un ou 4 childNode (s) correspondant à l'altitude (z) et éventuellement lat, lon, et acc)
   *
   * @param {DOMElement} node - noeud elevation à lire pour récupérer les informations de l'élévation retournée (z [, lon, lat, acc])
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
   * @param {Object} elevation - objet dans lequel stocker l'altitude retournée
   * @static
   * @memberof AltiResponseReader
   */
  z: function z(node, elevation) {
    var textNode = node.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // 3 === node.TEXT_NODE
      if (elevation) {
        elevation.z = parseFloat(textNode.nodeValue);
      } else {
        elevation = new _Response_model_Elevation__WEBPACK_IMPORTED_MODULE_1__["default"]();
        elevation.z = parseFloat(textNode.nodeValue);
        return elevation;
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
   * @param {Object} elevation - objet dans lequel stocker la précision retournée
   * @static
   * @memberof AltiResponseReader
   */
  acc: function acc(node, elevation) {
    var textNode = node.firstChild;
    if (textNode && textNode.nodeType === 3) {
      // 3 === node.TEXT_NODE
      elevation.acc = parseFloat(textNode.nodeValue);
    } else {
      throw new Error("Erreur dans la lecture de la réponse du service : précision (acc) attendue mais absente");
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _Request_GeocodeRequestFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _Response_GeocodeResponseFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }







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
  options.serverUrl = options.serverUrl || "https://wxs.ign.fr/calcul/geoportail/geocodage/rest/0.1/search";

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
  this.request = _Request_GeocodeRequestFactory__WEBPACK_IMPORTED_MODULE_4__["default"].build(options);

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
    _Response_GeocodeResponseFactory__WEBPACK_IMPORTED_MODULE_5__["default"].build(options);
  } else {
    error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Geocode);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _GeocodeRequestREST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);



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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _model_GeocodeParamREST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);




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
/* 37 */
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Formats_GeocodeResponseParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _Response_model_GeocodeResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _Response_model_GeocodedLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
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
      if (prop === "_score") {
        location.accuracy = feature.properties[prop];
      } else if (prop === "_type") {
        if (feature.properties[prop] === "address") {
          location.type = "StreetAddress";
        } else if (feature.properties[prop] === "poi") {
          location.type = "PositionOfInterest";
        } else if (feature.properties[prop] === "parcel") {
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _Request_GeocodeRequestFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _Response_GeocodeResponseFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }







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
  options.serverUrl = options.serverUrl || "https://wxs.ign.fr/calcul/geoportail/geocodage/rest/0.1/reverse";

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
  this.request = _Request_GeocodeRequestFactory__WEBPACK_IMPORTED_MODULE_4__["default"].build(options);

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
    _Response_GeocodeResponseFactory__WEBPACK_IMPORTED_MODULE_5__["default"].build(options);
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _Response_AutoCompleteResponseFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _Utils_Helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);







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
    throw new TypeError(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_3__["default"].getMessage("CLASS_CONSTRUCTOR", "AutoComplete"));
  }

  /**
   * Nom de la classe (heritage)
   * FIXME instance ou classe ?
   */
  this.CLASSNAME = "AutoComplete";
  this.logger = _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("Gp.Services.AutoComplete");
  this.logger.trace("[Constructeur AutoComplete (options)]");
  var options = this.patchOptionConvertor(options_);
  options.serverUrl = options.serverUrl || "https://wxs.ign.fr/calcul/geoportail/geocodage/rest/0.1/completion";

  // appel du constructeur par heritage
  _CommonService__WEBPACK_IMPORTED_MODULE_0__["default"].apply(this, arguments);
  if (!options.text) {
    throw new Error(_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_3__["default"].getMessage("PARAM_MISSING", "text"));
  }

  // ajout des options spécifiques au service
  this.options.text = options.text;

  // on definit des parametres par defaut
  if (!options.type) {
    options.type = ["StreetAddress,PositionOfInterest"];
  }
  this.options.type = options.type;
  this.options.territory = options.territory || "";
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
  this.request = _Utils_Helper__WEBPACK_IMPORTED_MODULE_4__["default"].normalyzeParameters({
    text: encodeURIComponent(this.options.text),
    type: type,
    terr: territory,
    maximumResponses: this.options.maximumResponses
  });
  !this.request ? error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_5__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_3__["default"].getMessage("SERVICE_REQUEST_BUILD"))) : success.call(this, this.request);
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
    _Response_AutoCompleteResponseFactory__WEBPACK_IMPORTED_MODULE_1__["default"].build(options);
  } else {
    error.call(this, new _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_5__["default"](_Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_3__["default"].getMessage("SERVICE_RESPONSE_EMPTY")));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AutoComplete);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _model_AutoCompleteResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _model_SuggestedLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
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
                  suggestedLocation.kind = result.kind;
                  suggestedLocation.type = "PositionOfInterest";
                }
                if (suggestedLocation.position) {
                  suggestedLocation.position.x = result.x;
                  suggestedLocation.position.y = result.y;
                }
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _Request_RouteRequestFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var _Response_RouteResponseFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);








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
    var UrlByDefault = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__["default"].Route.url("calcul");
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _RouteRequestREST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);




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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _model_RouteParamREST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);




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
/* 50 */
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _model_RouteResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _model_RouteInstruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);






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
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _CommonService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _Request_ProcessIsoCurveRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55);
/* harmony import */ var _Response_ProcessIsoCurveResponseFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57);








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
 * @param {String} options.resource - La ressource utilisée pour le calcul. Ce paramètre devrait être obligatoire car il l'est dans l'appel au service. Mais il ne l'est pas pour des raisons de rétrocompatibilité.
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
  this.options.resource = options.resource || "bdtopo-iso";
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
    var urlFound = _DefaultUrlService__WEBPACK_IMPORTED_MODULE_4__["default"].ProcessIsoCurve.url("calcul");
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _model_ProcessIsoCurveParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);




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
/* 56 */
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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_LoggerByDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Utils_MessagesResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Exceptions_ErrorService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _model_ProcessIsoCurveResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);





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
/* 58 */
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
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

import Services from "./Services/Services";
import DefaultUrl from "./Services/DefaultUrlService";
import AltiResponse from "./Services/Alti/Response/model/AltiResponse";
import Elevation from "./Services/Alti/Response/model/Elevation";
import AutoCompleteResponse from "./Services/AutoComplete/Response/model/AutoCompleteResponse";
import SuggestedLocation from "./Services/AutoComplete/Response/model/SuggestedLocation";
import IsoCurveResponse from "./Services/ProcessIsoCurve/Response/model/ProcessIsoCurveResponse";
import RouteResponse from "./Services/Route/Response/model/RouteResponse";
import RouteInstruction from "./Services/Route/Response/model/RouteInstruction";
import Config from "./Services/Config/Config";
import XHR from "./Protocols/XHR";
import Error from "./Exceptions/ErrorService";
import Helper from "./Utils/Helper";

import Pkg from "../package.json";

/** Version */
export const servicesVersion = Pkg.version;
/** Publication date */
export const servicesDate = Pkg.date;

// on declare les ns dans root global
var Gp = {};

Gp.servicesVersion = servicesVersion;
Gp.servicesDate = servicesDate;

// Export Protocols
Gp.Protocols = {};
Gp.Protocols.XHR = XHR;
// Export services
Gp.Services = Services;
// Export DefaultUrls
Gp.Services.DefaultUrl = DefaultUrl;
// Export Alti
Gp.Services.AltiResponse = AltiResponse;
Gp.Services.Alti = {};
Gp.Services.Alti.Elevation = Elevation;
// Export Autocomplete
Gp.Services.AutoCompleteResponse = AutoCompleteResponse;
Gp.Services.AutoComplete = {};
Gp.Services.AutoComplete.SuggestedLocation = SuggestedLocation;
// Export Config
Gp.Services.Config = Config;
// Export IsoCurve
Gp.Services.IsoCurveResponse = IsoCurveResponse;
// Export Route
Gp.Services.RouteResponse = RouteResponse;
Gp.Services.Route = {};
Gp.Services.Route.RouteInstruction = RouteInstruction;
// Export Erreurs et Outils
Gp.Error = Error;
Gp.Helper = Helper;

export default Gp;

/**
* Global variable Gp.
* This is the global variable that is exposed in the browser environment.
*
* @module Gp
* @alias Gp
* @example
*
* // Content is composed of constructor, functions and properties...
*
* Error()
*     .TYPE_SRVERR : "SERVICE_ERROR"
*     .TYPE_UNKERR : "UNKNOWN_ERROR"
*     .TYPE_USEERR : "USAGE_ERROR"
*
* Helper
*     .indent()
*     .normalyzeParameters()
*     .normalyzeUrl()
*
* Protocols
*     .XHR
*         .call()
*
* Services
*     .Alti
*         {@link Gp.Services.Alti.Elevation .Elevation()}
*     {@link Gp.Services.AltiResponse .AltiResponse()}
*     .AutoComplete
*         {@link Gp.Services.AutoComplete.SuggestedLocation .SuggestedLocation()}
*     {@link Gp.Services.AutoCompleteResponse .AutoCompleteResponse()}
*     {@link Gp.Services.Config .Config()}
*     {@link Gp.Services.DefaultUrl .DefaultUrl()}
*     .Geocode
*         {@link Gp.Services.Geocode.GeocodedLocation .GeocodedLocation()}
*         {@link Gp.Services.Geocode.ReverseGeocodedLocation .ReverseGeocodedLocation()}
*         {@link Gp.Services.Geocode.DirectGeocodedLocation .DirectGeocodedLocation()}
*     {@link Gp.Services.GeocodeResponse .GeocodeResponse()}
*     {@link Gp.Services.GetConfigResponse .GetConfigResponse()}
*     {@link Gp.Services.IsoCurveResponse .IsoCurveResponse()}
*     .Route
*         {@link Gp.Services.Route.RouteInstruction .RouteInstruction()}
*     {@link Gp.Services.RouteResponse .RouteResponse()}
*     {@link module:Services~autoComplete .autoComplete()}
*     {@link module:Services~geocode .geocode()}
*     {@link module:Services~getAltitude .getAltitude()}
*     {@link module:Services~getConfig .getConfig()}
*     {@link module:Services~isoCurve .isoCurve()}
*     {@link module:Services~reverseGeocode .reverseGeocode()}
*     {@link module:Services~route .route()}
*
* servicesDate : "2018-05-29"
* servicesVersion : "2.0.0"
*
*/

import Services from "./Services/Services";
import DefaultUrl from "./Services/DefaultUrlService";
import AltiResponse from "./Services/Alti/Response/model/AltiResponse";
import Elevation from "./Services/Alti/Response/model/Elevation";
import AutoCompleteResponse from "./Services/AutoComplete/Response/model/AutoCompleteResponse";
import SuggestedLocation from "./Services/AutoComplete/Response/model/SuggestedLocation";
import GetConfigResponse from "./Services/AutoConf/Response/model/AutoConfResponse";
import Constraint from "./Services/AutoConf/Response/model/Constraint";
import Format from "./Services/AutoConf/Response/model/Format";
import Layer from "./Services/AutoConf/Response/model/Layer";
import Legend from "./Services/AutoConf/Response/model/Legend";
import Metadata from "./Services/AutoConf/Response/model/Metadata";
import Originator from "./Services/AutoConf/Response/model/Originator";
import Service from "./Services/AutoConf/Response/model/Service";
import Style from "./Services/AutoConf/Response/model/Style";
import Territory from "./Services/AutoConf/Response/model/Territory";
import Thematic from "./Services/AutoConf/Response/model/Thematic";
import TM from "./Services/AutoConf/Response/model/TileMatrix";
import TMLimit from "./Services/AutoConf/Response/model/TileMatrixLimit";
import TMS from "./Services/AutoConf/Response/model/TileMatrixSet";
import GeocodeResponse from "./Services/Geocode/Response/model/GeocodeResponse";
import GeocodedLocation from "./Services/Geocode/Response/model/GeocodedLocation";
import DirectGeocodedLocation from "./Services/Geocode/Response/model/DirectGeocodedLocation";
import ReverseGeocodedLocation from "./Services/Geocode/Response/model/ReverseGeocodedLocation";
import IsoCurveResponse from "./Services/ProcessIsoCurve/Response/model/ProcessIsoCurveResponse";
import RouteResponse from "./Services/Route/Response/model/RouteResponse";
import RouteInstruction from "./Services/Route/Response/model/RouteInstruction";
import XHR from "./Protocols/XHR";
import Error from "./Exceptions/ErrorService";
import Helper from "./Utils/Helper";

var Gp = {
    servicesVersion : "__GPVERSION__",
    servicesDate : "__GPDATE__",
    /**
     * Methode pour rajouter une classe / objet au namespace global.
     *
     * @method extend
     * @param {String} strNS - nom sous lequel on veut présenter la
     *        classe / objet (Gp."strNS").
     * @param {Object} value - la classe / objet à rajouter au NS global.
     * @returns {Object} this
     */
    extend : function (strNS, value) {
        var parts = strNS.split(".");
        var parent = this;
        var pl;

        pl = parts.length;

        for (var i = 0; i < pl; i++) {
            // create a property if it doesn't exist
            if (typeof parent[parts[i]] === "undefined") {
                parent[parts[i]] = {};
            }

            var n = pl - 1;
            if (i === n) {
                parent[parts[i]] = value;
            }

            parent = parent[parts[i]];
        }

        return this;
    }
};

// on declare les ns dans root global
Gp.extend("Protocols", {});
Gp.extend("Protocols.XHR", XHR);
Gp.extend("Services", Services);
// Export Alti
Gp.extend("Services.AltiResponse", AltiResponse);
Gp.extend("Services.Alti.Elevation", Elevation);
// Export Autocomplete
Gp.extend("Services.AutoCompleteResponse", AutoCompleteResponse);
Gp.extend("Services.AutoComplete.SuggestedLocation", SuggestedLocation);
// Export Autoconf
Gp.extend("Services.GetConfigResponse", GetConfigResponse);
Gp.extend("Services.Config.Constraint", Constraint);
Gp.extend("Services.Config.Format", Format);
Gp.extend("Services.Config.Layer", Layer);
Gp.extend("Services.Config.Legend", Legend);
Gp.extend("Services.Config.Metadata", Metadata);
Gp.extend("Services.Config.Originator", Originator);
Gp.extend("Services.Config.Service", Service);
Gp.extend("Services.Config.Style", Style);
Gp.extend("Services.Config.Territory", Territory);
Gp.extend("Services.Config.Thematic", Thematic);
Gp.extend("Services.Config.TileMatrix", TM);
Gp.extend("Services.Config.TileMatrixLimit", TMLimit);
Gp.extend("Services.Config.TileMatrixSet", TMS);
// Export Geocode
Gp.extend("Services.GeocodeResponse", GeocodeResponse);
Gp.extend("Services.Geocode.GeocodedLocation", GeocodedLocation);
Gp.extend("Services.Geocode.DirectGeocodedLocation", DirectGeocodedLocation);
Gp.extend("Services.Geocode.ReverseGeocodedLocation", ReverseGeocodedLocation);
// Export IsoCurve
Gp.extend("Services.IsoCurveResponse", IsoCurveResponse);
// Export Route
Gp.extend("Services.RouteResponse", RouteResponse);
Gp.extend("Services.Route.RouteInstruction", RouteInstruction);
// Export Erreurs et Outils
Gp.extend("Error", Error);
Gp.extend("Helper", Helper);
// Export DefaultUrls
Gp.extend("Services.DefaultUrl", DefaultUrl);

export default Gp; // = export { Gp as default };

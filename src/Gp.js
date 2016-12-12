define([
    // Protocols
    "Protocols/XHR",
    // Services
    "Services/Services",
    // Alti Rseponses
    "Services/Alti/Response/model/AltiResponse",
    "Services/Alti/Response/model/Elevation",
    // Autocomplete Responses
    "Services/AutoComplete/Response/model/AutoCompleteResponse",
    "Services/AutoComplete/Response/model/SuggestedLocation",
    // Autoconf Responses
    "Services/AutoConf/Response/model/AutoConfResponse",
    "Services/AutoConf/Response/model/Constraint",
    "Services/AutoConf/Response/model/Format",
    "Services/AutoConf/Response/model/Layer",
    "Services/AutoConf/Response/model/Legend",
    "Services/AutoConf/Response/model/Metadata",
    "Services/AutoConf/Response/model/Originator",
    "Services/AutoConf/Response/model/Service",
    "Services/AutoConf/Response/model/Style",
    "Services/AutoConf/Response/model/Territory",
    "Services/AutoConf/Response/model/Thematic",
    "Services/AutoConf/Response/model/TileMatrix",
    "Services/AutoConf/Response/model/TileMatrixLimit",
    "Services/AutoConf/Response/model/TileMatrixSet",
    // Geocode Responses
    "Services/Geocode/Response/model/GeocodeResponse",
    "Services/Geocode/Response/model/GeocodedLocation",
    "Services/Geocode/Response/model/DirectGeocodedLocation",
    "Services/Geocode/Response/model/ReverseGeocodedLocation",
    // IsoCurve Responses
    "Services/ProcessIsoCurve/Response/model/ProcessIsoCurveResponse",
    // Route Responses
    "Services/Route/Response/model/RouteResponse",
    "Services/Route/Response/model/RouteInstruction",
    // Erreurs
    "Exceptions/ErrorService",
    // Outils
    "Utils/Helper",
    // URLs par defaut
    "Services/DefaultUrlService"

],
    function (
        // XHR stuff
        XHR,
        // Services
        Services,
        // Alti Responses
        AltiResponse, Elevation,
        // Autocomple responses
        AutoCompleteResponse, SuggestedLocation,
        // Autoconf Responses
        GetConfigResponse, Constraint, Format, Layer, Legend, Metadata,
        Originator, Service, Style, Territory, Thematic, TM, TMLimit, TMS,
        // Geocode Responses
        GeocodeResponse, GeocodedLocation, DirectGeocodedLocation, ReverseGeocodedLocation,
        // Isocurve Responses
        IsoCurveResponse,
        // Route Responses
        RouteResponse, RouteInstruction,
        // Erreurs
        Error,
        // Outils
        Helper,
        // URLs par defaut
        DefaultUrl
        ) {

        "use strict";

        // on determine l'environnement d'execution : browser ou non ?
        var scope = typeof window !== "undefined" ? window : {};

        // on voit s'il existe déjà cette variable, sinon on la met en place
        var Gp = scope.Gp || {
            servicesVersion : "__GPVERSION__",
            servicesDate : "__GPDATE__",
            /**
             * Methode pour rajouter une classe / objet au namespace global.
             *
             * @method extend
             * @param {String} strNS - nom sous lequel on veut présenter la
             *        classe / objet (Gp."strNS").
             * @param {Object} value - la classe / objet à rajouter au NS global.
             */
            extend : function (strNS, value) {
                var parts  = strNS.split(".");
                var parent = this;
                var pl;

                pl = parts.length;

                for (var i = 0; i < pl; i++) {
                    // create a property if it doesn't exist
                    if ( typeof parent[parts[i]] === "undefined" ) {
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

        // on declare les ns dan root global
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
        Gp.extend("Services.Config.Thematic", SuggestedLocation);
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

        // on sauvegarde la variable dans l'env.
        scope.Gp = Gp;

        return scope.Gp;
    }
    );

define([], function () {

    "use strict";

    // cette classe contient les URLs par defaut des services.
    //  DefaultUrlService.Alti.url(key)[elevation-json]
    //  DefaultUrlService.Alti.url(key)[elevation-xml]
    //  DefaultUrlService.Alti.url(key)[profil-json]
    //  DefaultUrlService.Alti.url(key)[profil-xml]
    //  DefaultUrlService.Alti.url(key)[wps]
    //  DefaultUrlService.ProcessIsoCurve.url(key)
    //  DefaultUrlService.AutoComplete.url(key)
    //  DefaultUrlService.ReverseGeocode.url(key)
    //  DefaultUrlService.AutoConf.url(key)[apiKey]
    //  DefaultUrlService.AutoConf.url(key)[apiKeys]
    //  DefaultUrlService.AutoConf.url(key)[aggregate]
    //  DefaultUrlService.Geocode.url(key)
    //  DefaultUrlService.Route.url(key)

    // Example :
    //
    // DefaultUrlService.Alti.url('efe4r54tj4uy5i78o7545eaz7e87a')[elevation-json]
    //  output {String} -> http://wxs.ign.fr/efe4r54tj4uy5i78o7545eaz7e87a/alti/rest/elevation.json
    //
    // DefaultUrlService.Alti.url('efe4r54tj4uy5i78o7545eaz7e87a')
    // output {Object|String}
    // -> http://wxs.ign.fr/efe4r54tj4uy5i78o7545eaz7e87a/alti/rest/elevation.json
    // -> http://wxs.ign.fr/efe4r54tj4uy5i78o7545eaz7e87a/alti/rest/elevation.xml
    // -> http://wxs.ign.fr/efe4r54tj4uy5i78o7545eaz7e87a/alti/rest/elevationLine.json
    // -> http://wxs.ign.fr/efe4r54tj4uy5i78o7545eaz7e87a/alti/rest/elevationLine.xml
    // -> http://wxs.ign.fr/efe4r54tj4uy5i78o7545eaz7e87a/alti/wps
    //

    // constantes internes
    var protocol = "http://";
    var hostname = "wxs.ign.fr";
    var keyname = "%KEY%";
    var url = protocol + hostname.concat("/", keyname);

    /** fonctions de substitutions */
    var fkey = function (key) {
        return this._key.replace(key ? keyname : null, key);
    };

    // liste des URLs des services
    var DefaultUrlService = {
        Alti : {
            _key : {
                // rest
                "elevation-json" : url + "/alti/rest/elevation.json",
                "elevation-xml" : url + "/alti/rest/elevation.xml",
                "profil-json" : url + "/alti/rest/elevationLine.json",
                "profil-xml" : url + "/alti/rest/elevationLine.xml",
                // other
                wps : url + "/alti/wps"
            },
            /** url */
            url : function (key) {
                return {
                    // rest
                    "elevation-json" : this._key["elevation-json"].replace(key ? keyname : null, key),
                    "elevation-xml" : this._key["elevation-xml"].replace(key ? keyname : null, key),
                    "profil-json" : this._key["profil-json"].replace(key ? keyname : null, key),
                    "profil-xml" : this._key["profil-xml"].replace(key ? keyname : null, key),
                    // other
                    wps : this._key.wps.replace(key ? keyname : null, key)
                };
            }
        },
        ProcessIsoCurve : {
            _key : {
                "iso-json" : url + "/isochrone/isochrone.json", // rest (geoconcept)
                "iso-xml" : url + "/isochrone/isochrone.xml"   // rest (geoconcept)
            },
            /** url */
            url : function (key) {
                return {
                    "iso-json" : this._key["iso-json"].replace(key ? keyname : null, key),
                    "iso-xml" : this._key["iso-xml"].replace(key ? keyname : null, key)
                };
            }
        },
        AutoComplete : {
            _key : url + "/ols/apis/completion",
            url : fkey
        },
        ReverseGeocode : {
            _key : url + "/geoportail/ols",
            url : fkey
        },
        AutoConf : {
            _key : {
                apiKey : url + "/autoconf",
                apiKeys : url + "/autoconf?keys=%KEYS%"
            },
            /** url */
            url : function (key) {
                var keys = "";
                if ( Array.isArray(key) && key.length > 0 ) {
                    keys = key[0];
                    for (var i = 1; i < key.length; i++ ) {
                        keys += "," + key[i];
                    }
                }
                return {
                    apiKey : this._key["apiKey"].replace(key ? keyname : null, key), // une seule clé
                    apiKeys : this._key["apiKeys"].replace(keyname, key[0]).replace("%KEYS%", keys), // autoconf de plusieurs clés
                    aggregate : protocol + hostname.concat("/") + key + "/autoconf/id/"
                };
            }
        },
        Geocode : {
            _key : url + "/geoportail/ols",
            url : fkey
        },
        Route : {
            _key : {
                ols : url + "/itineraire/ols", // openLS
                "route-json" : url + "/itineraire/rest/route.json", // rest (geoconcept)
                "route-xml" : url + "/itineraire/rest/route.xml"   // rest (geoconcept)
            },
            /** url */
            url : function (key) {
                return {
                    ols : this._key.ols.replace(key ? keyname : null, key),
                    "route-json" : this._key["route-json"].replace(key ? keyname : null, key),
                    "route-xml" : this._key["route-xml"].replace(key ? keyname : null, key)
                };
            }
        }
    };

    return DefaultUrlService;
});

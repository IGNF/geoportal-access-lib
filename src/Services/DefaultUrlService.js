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
    ssl : true,

    /**
    * base url of services (ssl protocol management)
    * @param {String} path - path
    * @returns {String} url
    */
    url : function (path) {
        // comportement par défaut => https
        // sinon, il est fixé par l'option 'ssl' (false => http)
        var _protocol;
        if (DefaultUrlService.ssl === false) {
            _protocol = "http://";
        } else {
            _protocol = "https://";
        }

        return _protocol + HOSTNAME + path;
    },

    /**
    * base new-url of services (ssl protocol management)
    * @param {String} path - path
    * @returns {String} url
    */
    newUrl : function (path, hostname) {
        // comportement par défaut => https
        // sinon, il est fixé par l'option 'ssl' (false => http)
        var _protocol;
        if (DefaultUrlService.ssl === false) {
            _protocol = "http://";
        } else {
            _protocol = "https://";
        }

        return _protocol + hostname + path;
    },

    /**
     * Elevation web service access
     *
     * @member {Object}
     * @property {Function} url (key) - Returns elevation service default urls with or without geoportal access key given as a parameter. The result is a javascript object with different urls given used protocols ("elevation-json", "elevation-xml", "profil-json" or "profil-xml").
     */
    Alti : {
        new_key : {
            // rest
            "elevation-json" : "/altimetrie/1.0/calcul/alti/rest/elevation.json",
            "elevation-xml" : "/altimetrie/1.0/calcul/alti/rest/elevation.xml",
            "profil-json" : "/altimetrie/1.0/calcul/alti/rest/elevationLine.json",
            "profil-xml" : "/altimetrie/1.0/calcul/alti/rest/elevationLine.xml"
        },
        _key : {
            // rest
            "elevation-json" : "/calcul/alti/rest/elevation.json",
            "elevation-xml" : "/calcul/alti/rest/elevation.xml",
            "profil-json" : "/calcul/alti/rest/elevationLine.json",
            "profil-xml" : "/calcul/alti/rest/elevationLine.xml",
            // other
            wps : "/alti/wps"
        },
        /**
        * newurl from geoplateforme service
        * @param {String} key - key
        * @returns {String} url
        */
        newUrl : function () {
            var NEW_ALTI_HOSTNAME = "data.geopf.fr";

            return {
                // rest
                "elevation-json" : DefaultUrlService.newUrl(this.new_key["elevation-json"], NEW_ALTI_HOSTNAME),
                "elevation-xml" : DefaultUrlService.newUrl(this.new_key["elevation-xml"], NEW_ALTI_HOSTNAME),
                "profil-json" : DefaultUrlService.newUrl(this.new_key["profil-json"], NEW_ALTI_HOSTNAME),
                "profil-xml" : DefaultUrlService.newUrl(this.new_key["profil-xml"], NEW_ALTI_HOSTNAME)
            };
        },
        /**
        * url from wxs service
        * @returns {String} url
        */
        url : function () {
            return {
                // rest
                "elevation-json" : DefaultUrlService.url(this._key["elevation-json"]),
                "elevation-xml" : DefaultUrlService.url(this._key["elevation-xml"]),
                "profil-json" : DefaultUrlService.url(this._key["profil-json"]),
                "profil-xml" : DefaultUrlService.url(this._key["profil-xml"])
            };
        }
    },
    /**
     * IsoCurve web service access
     *
     * @member {Object}
     * @property {Function} url (key) - Returns isocurve service default urls with or without geoportal access key given as a parameter. The result is a javascript object with different urls given used protocols ("iso-json" or "iso-xml").
     */
    ProcessIsoCurve : {

        new_key : "/itineraire/isochrone",

        _key : "/calcul/geoportail/isochrone/rest/1.0.0/isochrone",

        /**
        * url from geoplateforme service
        * @returns {String} url
        */
        newUrl : function () {
        },

        /**
        * url from wxs service
        * @returns {String} url
        */
        url : function () {
            return DefaultUrlService.url(this._key);
        }
    },
    /**
     * Config web service access
     *
     * @member {Object}
     * @property {Function} url (key) - Returns config service default urls with or without geoportal access key given as a parameter.
     */
    Config : {
        _key : "https://raw.githubusercontent.com/IGNF/geoportal-configuration/new-url/dist/",
        /**
        * url
        * @param {String} key - key
        * @returns {String} url
        */
        url : function (key) {
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
    AutoComplete : {
        new_key : "/geocodage/completion",

        _key : "/calcul/geoportail/geocodage/rest/0.1/completion",

        /**
        * url from geoplateforme service
        * @returns {String} url
        */
        newUrl : function () {
            var NEW_AUTOCOMPLETE_HOSTNAME = "data.geopf.fr";

            return DefaultUrlService.newUrl(this.new_key, NEW_AUTOCOMPLETE_HOSTNAME);
        },

        /**
        * url
        * @returns {String} url
        */
        url : function (key) {
            return DefaultUrlService.url(this._key);
        }
    },
    /**
     * Reverse geocoding web service access
     *
     * @member {Object}
     * @property {Function} url (key) - Returns reverse geocoding service default urls with or without geoportal access key given as a parameter. The result is a String.
     */
    ReverseGeocode : {
        new_key : "/geocodage/reverse",

        _key : "/calcul/geoportail/geocodage/rest/0.1/reverse",

        /**
        * url from geoplateforme service
        * @returns {String} url
        */
        newUrl : function () {
            var NEW_REVERSE_GEOCODE_HOSTNAME = "data.geopf.fr";

            return DefaultUrlService.newUrl(this.new_key, NEW_REVERSE_GEOCODE_HOSTNAME);
        },

        /**
        * url
        * @returns {String} url
        */
        url : function () {
            return DefaultUrlService.url(this._key);
        }
    },
    /**
     * Geocoding web service access
     *
     * @member {Object}
     * @property {Function} url (key) - Returns geocoding service default urls with or without geoportal access key given as a parameter. The result is a String.
     */
    Geocode : {
        new_key : "/geocodage/search",

        _key : "/calcul/geoportail/geocodage/rest/0.1/search",

        /**
        * url from geoplateforme service
        * @returns {String} url
        */
        newUrl : function () {
            var NEW_GEOCODE_HOSTNAME = "data.geopf.fr";

            return DefaultUrlService.newUrl(this.new_key, NEW_GEOCODE_HOSTNAME);
        },

        /**
        * url
        * @returns {String} url
        */
        url : function () {
            return DefaultUrlService.url(this._key);
        }
    },
    /**
     * Routing web service access
     *
     * @member {Object}
     * @property {Function} url (key) - Returns routing service default urls with or without geoportal access key given as a parameter. The result is a javascript object with different urls given used protocols.
     */
    Route : {
        new_key : "/itineraire/route",

        _key : "/calcul/geoportail/itineraire/rest/1.0.0/route",

        /**
        * url from geoplateforme service
        * @returns {String} url
        */
        newUrl : function () {
        },

        /**
        * url from wxs service
        * @returns {String} url
        */
        url : function () {
            return DefaultUrlService.url(this._key);
        }
    }
};

export default DefaultUrlService;

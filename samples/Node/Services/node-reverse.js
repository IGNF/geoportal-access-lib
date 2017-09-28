/* global module, require, __dirname */

/* Exemple
> node node-reverse.js -- -- 1 PositionOfInterest
> GeocodeResponse {
  locations:
   [ ReverseGeocodedLocation {
       position: [Object],
       matchType: 'City',
       placeAttributes: [Object],
       type: 'PositionOfInterest',
       CLASSNAME: 'ReverseGeocodedLocation',
       searchCenterDistance: 0 } ] }
> #########################
municipality:paris
department:75
bbox:[object Object]
importance:1
commune:Paris
insee:75056
nature:Capitale d'état
territory:FXX
postalCode:75000

*/

var requirejs = require("requirejs");

requirejs.config({
    baseUrl : __dirname + "/../../../src",
    nodeRequire : require,
    paths : {
        // lib external
        log4js : "../node_modules/woodman/dist/woodman-amd",
        'es6-promise' : "../lib/es6-promise/es6-promise-4.1.0",
        // config du logger
        "logger-cfg" : "Utils/Logger.cfg"
    }
});

var Gp = requirejs("Gp");

var options = {
    apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
    // httpMethod : 'GET',
    // outputFormat : 'json',
    onSuccess : function (response) {
        console.log(response);
        var array = response.locations;
        for (var i = 0; i < array.length; i++) {
            console.log("#########################");
            var geocoded = array[i];
            for (var place in geocoded.placeAttributes) {
                if (geocoded.placeAttributes.hasOwnProperty(place)) {
                    console.log(place + ":" + geocoded.placeAttributes[place]);
                }
            }
        }
    },
    onFailure : function (error) {
        console.log(error);
    },
    // spécifique au service
    maximumResponses : process.argv[4] || 25,
    position : {
        x : (process.argv[2] === "--") ? 2.35  : process.argv[2],
        y : (process.argv[3] === "--") ? 48.87 : process.argv[3]
    },
    // srs : "CRS:84", ???
    filterOptions : {
        type : (process.argv[5]) ? [process.argv[5]] : ["StreetAddress"],
        // bbox : {},
        // circle : {},
        // polygon : []
    }
};

Gp.Services.reverseGeocode(options);

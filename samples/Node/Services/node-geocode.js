/* global module, require, __dirname */

/*
> node node-geocode.js "brie comte robert" 1 PositionOfInterest
> GeocodeResponse {
  locations:
   [ DirectGeocodedLocation {
       position: [Object],
       matchType: 'City',
       placeAttributes: [Object],
       type: 'PositionOfInterest',
       CLASSNAME: 'DirectGeocodedLocation',
       accuracy: 1 } ] }
> #########################
municipality:brie-comte-robert
department:77
bbox:[object Object]
commune:Brie-Comte-Robert
importance:3
insee:77053
territory:FXX
nature:Commune
postalCode:77170
*/

var requirejs = require("requirejs");

requirejs.config({
    baseUrl : __dirname + "/../../../src",
    nodeRequire : require,
    paths : {
        // lib external
        log4js : "../node_modules/woodman/dist/woodman-amd",
        'es6-promise' : "../node_modules/es6-promise/dist/es6-promise",
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
    location : (process.argv[2] === "--") ? "2 avenue de paris, 94166 Saint-Mandée" : process.argv[2],
    maximumResponses : process.argv[3] || 25,
    returnFreeForm : false,
    srs : 'EPSG:4326',
    filterOptions : {
        type : (process.argv[4]) ? [process.argv[4]] : ["StreetAddress"]
    }
};

Gp.Services.geocode(options);

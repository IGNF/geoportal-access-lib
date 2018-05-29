var Gp = require("../../../dist/GpServices.js");

var options = {
    apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
    // httpMethod : "GET",
    // outputFormat : "json",
    onSuccess : function (response) {
        console.log(response);
    },
    onFailure : function (error) {
        console.log(error);
    },
    // spécifique au service
    location : "2 avenue de paris, 94166 Saint-Mandée"
};

Gp.Services.geocode(options);

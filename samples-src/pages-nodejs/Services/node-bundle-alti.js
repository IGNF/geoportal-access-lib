var Gp = require("../../../dist/GpServices.js");

var options = {
    apiKey : "calcul",
    // httpMethod : "GET",
    // outputFormat : "json",
    onSuccess : function (response) {
        console.log(response);
    },
    onFailure : function (error) {
        console.log(error);
    },
    // spécifique au service
    positions : [{
        lon : 1.25,
        lat : 47.48
    }]
};

Gp.Services.getAltitude(options);

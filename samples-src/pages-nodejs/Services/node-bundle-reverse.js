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
    position : {
        x : 2.35,
        y : 48.87
    }
};

Gp.Services.reverseGeocode(options);

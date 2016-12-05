var Gp = require("../../../dist/GpServices-src.js");

var options = {
    apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
    // httpMethod : 'GET',
    // outputFormat : 'json',
    protocol : 'XHR',
    onSuccess : function (response) {
        console.log(response);
    },
    onFailure : function (error) {
        console.log(eror);
    },
    // spécifique au service
    location : "2 avenue de paris, 94166 Saint-Mandée"
};

Gp.Services.geocode(options);

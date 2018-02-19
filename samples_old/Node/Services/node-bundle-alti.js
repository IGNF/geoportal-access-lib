var Gp = require("../../../dist/GpServices-src.js");

var options = {
    apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
    // httpMethod : 'GET',
    // outputFormat : 'json',
    onSuccess : function (response) {
        console.log(response);
    },
    onFailure : function (error) {
        console.log(eror);
    },
    // spécifique au service
    positions : [{
        lon : 1.25,
        lat : 47.48
    }]
};

Gp.Services.getAltitude(options);

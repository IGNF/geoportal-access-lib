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
    startPoint : {
        x : 2.3,
        y : 48.8
    },
    endPoint : {
        x : 2.4,
        y : 48.9
    }
};

Gp.Services.route(options);

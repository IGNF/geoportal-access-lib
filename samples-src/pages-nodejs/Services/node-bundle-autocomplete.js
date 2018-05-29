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
    text : "Brie-Co"
};

Gp.Services.autoComplete(options);

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
    text : "Brie-Co"
};

Gp.Services.autoComplete(options);

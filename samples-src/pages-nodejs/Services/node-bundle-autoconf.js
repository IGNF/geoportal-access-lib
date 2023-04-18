var Gp = require("../../../dist/GpServices-src.js");

var options = {
    apiKey : "calcul",
    protocol : "XHR",
    onSuccess : function (response) {
        console.log(response);
    }
};

Gp.Services.getConfig(options);

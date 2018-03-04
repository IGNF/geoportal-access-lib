var Gp = require("../../../dist/GpServices-src.js");

var options = {
    apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
    protocol : "XHR",
    onSuccess : function (response) {
        console.log(response);
    }
};

Gp.Services.getConfig(options);

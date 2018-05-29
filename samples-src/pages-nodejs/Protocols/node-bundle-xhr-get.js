
var Gp = require("../../../dist/GpServices.js");

var options = {
    url       : "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/alti/rest/elevation.json?lon=3.30&lat=49.97",
    method    : "GET",
    format    : "json", // "xml", "json" ou null
    content   : null,
    timeOut   : 0,
    scope     : this,
    headers   : {
        Referer : "http://localhost"
    },
    data      : null,
    onResponse : function (response) {
        console.log("Reponse :", response);
    },
    onFailure : function (error) {
        console.log("Erreur :", error);
    }
};

Gp.Protocols.XHR.call(options);

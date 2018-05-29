
var Gp = require("../../../dist/GpServices.js");

var options = {
    url       : "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/geoportail/ols",
    method    : "POST",
    format    : "xml", // "xml", "json" ou null
    content   : "application/xml",
    timeOut   : 0,
    scope     : this,
    headers   : {
        Referer : "http://localhost"
    },
    data      : "<?xml version=\"1.0\" encoding=\"UTF-8\"?> \
    <xls:XLS version=\"1.2\" \
    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \
    xmlns:xls=\"http://www.opengis.net/xls\" \
    xmlns:gml=\"http://www.opengis.net/gml\" \
    xsi:schemaLocation=\"http://www.opengis.net/xls http://schemas.opengis.net/ols/1.2/olsAll.xsd\"> \
    <xls:RequestHeader srsName=\"EPSG:4326\"/> \
    <xls:Request maximumResponses=\"25\" methodName=\"GeocodeRequest\" requestID=\"ef16dc49-394e-4fe7-9474-9d65d601ca0c\" version=\"1.2\"> \
      <xls:GeocodeRequest returnFreeForm=\"false\"> \
        <xls:Address countryCode=\"PositionOfInterest\"> \
          <xls:StreetAddress></xls:StreetAddress> \
          <xls:Place type=\"Departement\">94</xls:Place> \
          <xls:Place type=\"Municipality\">Saint-Mandée</xls:Place> \
        </xls:Address> \
      </xls:GeocodeRequest> \
    </xls:Request> \
    </xls:XLS>",
    onResponse : function (response) {
        console.log("Reponse :", response);
    },
    onFailure : function (error) {
        console.log("Erreur :", error);
    }
};

Gp.Protocols.XHR.call(options);

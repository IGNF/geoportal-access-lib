// FIXME le service repond bien en 200 avec un content conforme mais...
// "Uncaught SyntaxError: Unexpected identifier", la reponse ne serait pas correctement formatée !?
import Gp from "../../../dist/GpServices-src.js";

import sinon from "sinon";
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

// pass this option from webpack
var mock = __MOCK__;

describe("-- Test sur les messages d'erreur spécifiques du Service Geocodage Direct : JSONP --", function() {

    var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
    var Services = null;
    var options_direct  = {};

    beforeEach(function() {
        // options par defaut du geocodage direct
        options_direct = {
            apiKey : myKey,
            serverUrl : null,
            protocol : 'JSONP',
            callbackSuffix : "",
            httpMethod : 'GET',
            timeOut : 10000,
            rawResponse : false,
            onSuccess : function (response) { console.log('onSuccess() :', response); },
            onFailure : function (error) {console.log("onFailure() : ", error.message, error.type, error.status);},
            // spécifique au service
            location : "Saint-Mandée",  // location: "2 avenue de paris, 94166 Saint-Mandée",
            returnFreeForm : false,
            filterOptions : {
                // bbox : { left: 0, right : 1, top : 1, bottom : 0 },
                type : ['StreetAddress']
            },
            maximumResponses : 25,
            srs : 'EPSG:4326'
        };
    });

    it("Erreur de clef API : clef inconnue du service", function (done) {
        // Exception de type ErrorService
        // Levée par le protocole (XHR)
        // Renvoyer pour le callback onFailure()
        // Message : Errors Occured on Http Request (status : 'Forbidden (...)
        // Type : SERVICE_ERROR
        // Status : 403
        //  ex. de message du service :
        //  callback({"http":{"status":403,"error":"<ExceptionReport><Exception exceptionCode="MissingParameter">Key does not exist or has expired</Exception></ExceptionReport>"}, "xml":null})
        if (mock) { options_direct.serverUrl = 'test/end-to-end/spec-messages/fixtures/jsonp/callback-bad-key'; }
        options_direct.apiKey = "bidon";
        options_direct.onFailure = function (e) {
            console.log(e);
            expect(e).not.to.be.null;
            expect(e.message).to.contain("Key does not exist or has expired");
            expect(e.type).to.be.equal("SERVICE_ERROR");
            expect(e.status).to.be.equal(403);
            done();
        };
        options_direct.onSuccess = function (response) {
            expect(false).to.be.true;
            done(response);
        }

        Gp.Services.geocode(options_direct);
    });

    it("DIRECT Erreur de countryCode: ce code n'existe pas", function (done) {
        // Exception de type ErrorService
        // Levée par Geocode() car le service renvoie un 200 !
        // Renvoyer pour le callback onFailure()
        // Message : No rights for this ressource or ressource does not exist
        // Type : SERVICE_ERROR
        // Status : 403
        //  ex. de message du service :
        //  callback({"http":{"status":403,"error":"<ExceptionReport><Exception exceptionCode="MissingRights">No rights for this ressource or ressource does not exist</Exception></ExceptionReport>"}, "xml":null})
        if (mock) { options_direct.serverUrl = 'test/end-to-end/spec-messages/fixtures/jsonp/callback-bad-rights'; }
        options_direct.filterOptions.type = ['BIDON'];
        options_direct.onFailure = function (e) {
            console.log(e);
            expect(e).not.to.be.null;
            expect(e.message).to.contain("No rights for this ressource or ressource does not exist");
            expect(e.type).to.be.equal("SERVICE_ERROR");
            expect(e.status).to.be.equal(403);
            done();
        };
        options_direct.onSuccess = function (response) {
            done(response);
        };

        Gp.Services.geocode(options_direct);
    });

});

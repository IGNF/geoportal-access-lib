// FIXME le service ne repond pas en 200...
import Gp from "../../../dist/GpServices-src.js";

import sinon from "sinon";
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

// FIXME how to pass this option from webpack ?
var mock = true;

describe("-- Test sur les messages d'erreur spécifiques du Service de calcul d'itineraire --", function() {

    var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
    var Services = null;
    var options = {};

    beforeEach(function() {

        // options par defaut du geocodage direct
        options = {
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
            api : 'OLS',          // FIXME surchargé par l'API !
            outputFormat : 'json', // FIXME surchargé par l'API !
            srs : "EPSG:4326",
            startPoint: {
                x: 2.64,
                y: 48.54
            },
            endPoint: {
                x: 3.01,
                y: 48.45
            },
            provideBbox : true,
            exclusions : ["Tunnel", "Toll"], // "Bridge",
            distanceUnit : "km",
            graph : "Voiture",
            provideGeometry : false,
            routePreference : "fastest"
        };

    });

    it("FIXME(mock=false) : Erreur de clef API : clef inconnue du service", function (done) {
        // Exception de type ErrorService
        // Levée par le protocole (XHR)
        // Renvoyer pour le callback onFailure()
        // Message : Errors Occured on Http Request (status : 'Forbidden (...)
        // Type : SERVICE_ERROR
        // Status : 403
        if (mock) { options.serverUrl = 'test/end-to-end/spec-messages/fixtures/jsonp/callback-bad-key'; }
        options.apiKey = "bidon";
        options.onFailure = function (e) {
            console.log(e.message);
            expect(e).not.to.be.null;
            expect(e.message).to.contain("Key does not exist or has expired"); // Key does not exist or has expired
            expect(e.type).to.be.equal("SERVICE_ERROR");
            expect(e.status).to.be.equal(403);
            done();
        };
        options.onSuccess = function (response) {
            expect(false).to.be.true;
            done(response);
        }

        Gp.Services.route(options);
    });

    it("FIXME(mock=false) : Erreur sur les exclusions : valeur inconnue", function (done) {
        // Exception de type ErrorService
        // Levée par XHR()
        // Renvoyer pour le callback onFailure()
        // Message : (...) ServiceException (...)
        // Type : ERROR_UNKNOWN
        // Status : -1
        //  ex. de message du service :
        //  {"message":"ServiceException: Error in route computation\nError in smartrouting\nFailed to execute calculateRoute\nunknown reject flag 'BIDON'","status":"ERROR"}
        if (mock) { options.serverUrl = 'test/end-to-end/spec-messages/fixtures/jsonp/callback-route-bad-exclusions'; }
        options.exclusions = ['BIDON'];
        options.onFailure = function (e) {
            console.log(e);
            expect(e).not.to.be.null;
            expect(e.message).to.contain("ServiceException");
            expect(e.type).to.be.equal("UNKNOWN_ERROR");
            expect(e.status).to.be.equal(-1);
            done();
        };
        options.onSuccess = function (response) {
            done(response);
        };

        Gp.Services.route(options);
    });

    it("FIXME(mock=false) : Erreur sur le graphe : valeur inconnue", function (done) {
        // Exception de type ErrorService
        // Levée par XHR()
        // Renvoyer pour le callback onFailure()
        // Message : (...) ServiceException (...)
        // Type : ERROR_UNKNOWN
        // Status : -1
        //  ex. de message du service :
        //  {"message":"ServiceException: Error in route computation\nError in smartrouting\nFailed to execute calculateRoute\nunknown reject flag 'BIDON'","status":"ERROR"}
        if (mock) { options.serverUrl = 'test/end-to-end/spec-messages/fixtures/jsonp/callback-route-bad-graph'; }
        options.graph = 'BIDON';
        options.onFailure = function (e) {
            console.log(e);
            expect(e).not.to.be.null;
            expect(e.message).to.contain("ServiceException");
            expect(e.type).to.be.equal("UNKNOWN_ERROR");
            expect(e.status).to.be.equal(-1);
            done();
        };
        options.onSuccess = function (response) {
            done(response);
        };

        Gp.Services.route(options);
    });
});

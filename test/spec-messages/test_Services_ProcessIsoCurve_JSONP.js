// FIXME service très instable, souvent en 500 Internal Server Error
define(['gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test sur les messages d'erreur spécifiques du Service de calcul d'iso --", function() {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
        var Services = null;
        var options = {};

        beforeEach(function() {

            // options par defaut du geocodage direct
            options = {
                apiKey :  myKey,
                serverUrl : null,
                protocol : 'JSONP',
                callbackSuffix : "",
                httpMethod : 'GET',
                timeOut : 10000,
                rawResponse : false,
                onSuccess : function (response) { console.log('onSuccess() :', response); },
                onFailure : function (error) {console.log("onFailure() : ", error.message, error.type, error.status);},
                // spécifique au service
                position : {
                    x: 2.3242664298058053,
                    y: 48.86118017324745
                },
                outputFormat : 'json',
                exclusions : ['Bridge', 'Tunnel'],
                graph : "Voiture",
                method : 'distance',
                distance : 200, //time : 200
                reverse : false,
                smoothing : false,
                holes : false,
                srs : 'EPSG:4326'
            };

        });

        it("FIXME(mock=false) : Erreur de clef API : clef inconnue du service", function (done) {
            // Exception de type ErrorService
            // Levée par le protocole (XHR)
            // Renvoyer pour le callback onFailure()
            // Message : Errors Occured on Http Request (status : 'Forbidden (...)
            // Type : SERVICE_ERROR
            // Status : 403
            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-bad-key'; }
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
            };

            Gp.Services.isoCurve(options);
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

            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-iso-bad-exclusions'; }
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

            Gp.Services.isoCurve(options);
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
            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-iso-bad-graph'; }
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

            Gp.Services.isoCurve(options);
        });
    });
});

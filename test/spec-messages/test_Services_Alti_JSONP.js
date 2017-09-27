// FIXME le service repond en 200...,
// mais timeOut car le service ne fournit pas de callback dans la reponse !!!
define(['gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test sur les messages d'erreur spécifiques du Service Alti --", function() {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
        var Services = null;
        var options = {};

        beforeEach(function() {

            // options par defaut
            options = {
                apiKey : myKey,
                serverUrl : null,
                protocol : 'JSONP',
                callbackSuffix : "",
                httpMethod : 'GET',
                timeOut : 10000,
                rawResponse : false,
                onSuccess : function (response) {console.log('onSuccess() :', response.elevations);},
                onFailure : function (error) {console.log("onFailure() : ", error.message, error.type, error.status);},
                // spécifique au service
                positions : [{lon:1.25, lat:47.48}, {lon:1.35, lat:47.50}],
                outputFormat : 'json', // par defaut!
                sampling : 0,          // par defaut!
                api : 'REST',          // par defaut!
                zonly : false          // par defaut!
            };

        });

        it("JSONP Erreur de positions : coordonnées 'lon' manquantes", function (done) {
            // Exception de type ErrorService
            // Levée par callService() ?
            // Renvoyer pour le callback onFailure()
            // Message : The values () cannot be parsed as a valid longitude (double value such as -180 < lat < 180).
            // Type : SERVICE_ERROR
            // Status : 200
            //  ex. de message du service :
            //  {"error": {"code": "BAD_PARAMETER","description": "The values () cannot be parsed as a valid longitude (double value such as -180 < lat < 180)."}}

            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-alti-bad-param-lon'; }
            options.positions = [{lon:1.25, lat:47.48}, {lon:null, lat:47.50}];
            options.onFailure = function (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.contain("The service returned an exception : 'The values () cannot be parsed as a valid longitude (double value such as -180 < lon < 180).'");
                expect(e.type).to.be.equal("SERVICE_ERROR");
                expect(e.status).to.be.equal(200);
                done();
            };
            options.onSuccess = function (response) {
                expect(false).to.be.true;
                done(response);
            };

            Gp.Services.getAltitude(options);

        });

        it("JSONP Erreur de positions : coordonnées 'lat' manquantes", function (done) {
            // Exception de type ErrorService
            // Levée par callService() ?
            // Renvoyer pour le callback onFailure()
            // Message : The values () cannot be parsed as a valid latitude (double value such as -90 < lat < 90).
            // Type : SERVICE_ERROR
            // Status : 200
            //  ex. de message du service :
            //  {"error": {"code": "BAD_PARAMETER","description": "The values () cannot be parsed as a valid latitude (double value such as -90 < lat < 90)."}}

            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-alti-bad-param-lat'; }
            options.positions = [{lon:1.25, lat:47.48}, {lon:1.35, lat:null}];
            options.onFailure = function (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.contain("The service returned an exception : 'The values () cannot be parsed as a valid latitude (double value such as -90 < lat < 90).'");
                expect(e.type).to.be.equal("SERVICE_ERROR");
                expect(e.status).to.be.equal(200);
                done();
            };
            options.onSuccess = function (response) {
                expect(false).to.be.true;
                done(response);
            };

            Gp.Services.getAltitude(options);

        });

        it("JSONP Erreur de positions : coordonnées avec une decimal non supportée", function (done) {
            // Exception de type ErrorService
            // Levée par callService() ?
            // Renvoyer pour le callback onFailure()
            // Message : The values () cannot be parsed as a valid latitude (double value such as -90 < lat < 90).
            // Type : SERVICE_ERROR
            // Status : 200
            //  ex. de message du service :
            //  {"error": {"code": "BAD_PARAMETER","description": "The values () cannot be parsed as a valid latitude (double value such as -90 < lat < 90)."}}

            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-alti-bad-param-format'; }
            options.positions = [{lon:"1,25", lat:47.48}, {lon:1.35, lat:47.49}];
            options.onFailure = function (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.contain("The service returned an exception : 'The values (1,25) cannot be parsed as a valid longitude (double value such as -180 < lon < 180).'");
                expect(e.type).to.be.equal("SERVICE_ERROR");
                expect(e.status).to.be.equal(200);
                done();
            };
            options.onSuccess = function (response) {
                expect(false).to.be.true;
                done(response);
            };

            Gp.Services.getAltitude(options);

        });
    });
});

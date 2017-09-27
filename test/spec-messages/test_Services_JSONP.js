// FIXME les services ne repondent pas en 200...
define(['gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test sur les messages d'erreur communs à tous les services --", function() {

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

        it("ALTI - Erreur de clef API : clef inconnue du service", function (done) {
            // Exception de type ErrorService
            // Levée par le protocole (XHR)
            // Renvoyer pour le callback onFailure()
            // Message : Errors Occured on Http Request (status : 'Forbidden (...)
            // Type : SERVICE_ERROR
            // Status : 403
            this.timeout(1000);
            // setTimeout(done, 1000);
            options.timeOut = 100;
            options.apiKey = "bidon";
            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-bad-key'; }
            options.onFailure = function (e) {
                console.log(e);
                expect(e).not.to.be.null;
                expect(e.message).to.contain("<ExceptionReport><Exception exceptionCode=\"MissingParameter\">Key does not exist or has expired</Exception></ExceptionReport>");
                expect(e.type).to.be.equal("SERVICE_ERROR");
                expect(e.status).to.be.equal(403);
                done();
            };
            options.onSuccess = function (response) {
                expect(false).to.be.true;
                done(response);
            }

            Gp.Services.getAltitude(options);
        });

        it("ALTI - Erreur d'URL du Service : domaine inconnu", function (done) {
            // Exception de type ErrorService
            // Levée par le protocole (XHR)
            // Renvoyer pour le callback onFailure()
            // Message : (...) Name or service not known (...)
            // Type : SERVICE_ERROR
            // Status : 500

            // FIXME en JSONP, on aura un simple timeOut !
            this.timeout(1000);
            // setTimeout(done, 1000);
            options.timeOut = 100;
            options.apiKey = null;
            options.serverUrl = "http://service.bidon.json";
            options.onFailure = function (e) {
                console.log(e);
                expect(e).not.to.be.null;
                // XHR
                // expect(e.message).to.contain("Name or service not known");
                // expect(e.type).to.be.equal("SERVICE_ERROR");
                // expect(e.status).to.be.equal(500);
                // JSONP
                expect(e.message).to.contain("TimeOut");
                expect(e.type).to.be.equal("UNKNOWN_ERROR");
                expect(e.status).to.be.equal(-1);
                done();
            };
            options.onSuccess = function (response) {
                expect(false).to.be.true;
                done(response);
            };

            Gp.Services.getAltitude(options);

        });

        it("ALTI - Erreur d'URL du Service : url inconnue", function (done) {
            // Exception de type ErrorService
            // Levée par le protocole (XHR)
            // Renvoyer pour le callback onFailure()
            // Message : (...) 404 Not Found (...)
            // Type : SERVICE_ERROR
            // Status : 404

            // FIXME en JSONP, on aura un simple timeOut !
            this.timeout(1000);
            // setTimeout(done, 1000);
            options.timeOut = 100;
            options.apiKey = null;
            options.serverUrl = "http://wxs.ign.fr/service.json";
            options.onFailure = function (e) {
                console.log(e);
                expect(e).not.to.be.null;
                // expect(e.message).to.contain("404 Not Found");
                // expect(e.type).to.be.equal("SERVICE_ERROR");
                // sexpect(e.status).to.be.equal(404);
                // JSONP
                expect(e.message).to.contain("TimeOut");
                expect(e.type).to.be.equal("UNKNOWN_ERROR");
                expect(e.status).to.be.equal(-1);
                done();
            };
            options.onSuccess = function (response) {
                expect(false).to.be.true;
                done(response);
            }

            Gp.Services.getAltitude(options);

        });

        xit("ALTI - timeout = 0 sur un service qui ne repond pas !", function (done) {
            // Exception de type ErrorService
            // Levée par le protocole (XHR)
            // Renvoyer pour le callback onFailure()
            // Message :
            // Type :
            // Status :
            this.timeout(1000);
            setTimeout(done, 1000);
            options.timeOut = 0;
            options.apiKey = "bidon";
            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-bad-key'; }
            options.onFailure = function (e) {
                done(e);
            };
            options.onSuccess = function (response) {
                done(response);
            }

            Gp.Services.getAltitude(options);
        });

        xit("ALTI - timeout = 0 sur un service qui repond !", function (done) {
            // Exception de type ErrorService
            // Levée par le protocole (XHR)
            // Renvoyer pour le callback onFailure()
            // Message :
            // Type :
            // Status :

            this.timeout(1000);
            setTimeout(done, 1000);
            options.timeOut = 0;
            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-alti-ok'; }
            options.onFailure = function (e) {
                done(e);
            };
            options.onSuccess = function (response) {
                console.log(response);
                done();
            }

            Gp.Services.getAltitude(options);
        });
    });
});

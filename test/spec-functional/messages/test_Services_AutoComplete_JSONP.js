// FIXME le service ne repond pas en 200...
define(['gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test sur les messages d'erreur spécifiques du Service d'AutoCompletion --", function() {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
        var Services = null;
        var options  = {};

        beforeEach(function() {
            // options par defaut du geocodage direct
            options = {
                apiKey : myKey,
                serverUrl : null,
                protocol : 'JSONP',
                callbackSuffix : "",
                proxyURL : null, // ex. 'http://localhost/proxy/php/proxy.php?url='
                httpMethod : 'GET',
                timeOut : 10000,
                rawResponse : false,
                onSuccess : function (response) { console.log('onSuccess() :', response); },
                onFailure : function (error) {console.log("onFailure() : ", error.message, error.type, error.status);},
                // spécifique au service
                text : "Brie-Comte",
                filterOptions : {
                   type : ["StreetAddress"],
                   territory : []
                },
                maximumResponses : 10
            };
        });

        it("JSONP Erreur de clef API : clef inconnue du service", function (done) {
            // Exception de type ErrorService
            // Levée par le protocole (XHR)
            // Renvoyer pour le callback onFailure()
            // Message : Errors Occured on Http Request (status : 'Forbidden (...)
            // Type : SERVICE_ERROR
            // Status : 403
            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-bad-key'; }
            options.apiKey = "bidon";
            options.onFailure = function (e) {
                console.log(e);
                expect(e).not.to.be.null;
                expect(e.message).to.contain("Key does not exist or has expired");
                expect(e.type).to.be.equal("SERVICE_ERROR");
                expect(e.status).to.be.equal(403);
                done();
            };
            options.onSuccess = function (response) {
                expect(false).to.be.true;
                done(response);
            }

            Gp.Services.autoComplete(options);
        });

        it("JSONP Erreur de countryCode : ce code n'existe pas", function (done) {
            // Exception de type ErrorService
            // Levée par () car le service renvoie un 200 !
            // Renvoyer pour le callback onFailure()
            // Message : No rights for this ressource or ressource does not exist
            // Type : SERVICE_ERROR
            // Status : 403
            //  ex. de message du service :
            // {"http":{"status":403,"error":"<ExceptionReport><Exception exceptionCode=\"MissingRights\">No rights for this ressource or ressource does not exist</Exception></ExceptionReport>"}, "xml":null})

            // setTimeout(done, 1000);
            // this.timeout(1000);
            if (mock) { options.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-bad-rights'; }
            options.filterOptions.type = ['BIDON'];
            options.onFailure = function (e) {
                console.log(e);
                expect(e).not.to.be.null;
                expect(e.message).to.contain("No rights for this ressource or ressource does not exist");
                expect(e.type).to.be.equal("SERVICE_ERROR");
                expect(e.status).to.be.equal(403);
                done();
            };
            options.onSuccess = function (response) {
                console.log(response);
                done(response);
            };

            Gp.Services.autoComplete(options);
        });
    });
});

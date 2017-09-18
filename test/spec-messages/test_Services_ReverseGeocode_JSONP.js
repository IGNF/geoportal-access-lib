// FIXME le service repond bien en 200 avec un content conforme mais...
// "Uncaught SyntaxError: Unexpected identifier", la reponse ne serait pas correctement formatée !?
define(['gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test sur les messages d'erreur spécifiques du Service Geocodage Inverse --", function() {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
        var Services = null;
        var options_reverse = {};

        beforeEach(function() {
            // options par defaut du geocodage inverse
            options_reverse = {
                apiKey : myKey,
                serverUrl : null,
                protocol : 'JSONP',
                callbackSuffix : "",
                proxyURL : null, // ex. 'spec-messages/proxy/php/proxy.php?url='
                httpMethod : 'GET',
                timeOut : 10000,
                rawResponse : false,
                onSuccess : function (response) { console.log('onSuccess() :', response); },
                onFailure : function (error) {console.log("onFailure() : ", error.message, error.type, error.status);},
                // spécifique au service
                position : {
                    x: 2.48, y: 48.9
                },
                returnFreeForm : false,
                filterOptions : {
                    // bbox : { left: 0, right : 1, top : 1, bottom : 0 },
                    // circle : { x: 0, y: 0, radius : 100 },
                    // polygon  : [{x:0,y:0}, {x:1,y:1}, {x:2,y:2}, {x:3,y:2}, {x:4,y:1}, {x:0,y:0}]
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
            if (mock) { options_reverse.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-bad-key'; }
            options_reverse.apiKey = "bidon";
            options_reverse.onFailure = function (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.contain("Key does not exist or has expired");
                expect(e.type).to.be.equal("SERVICE_ERROR");
                expect(e.status).to.be.equal(403);
                done();
            };
            options_reverse.onSuccess = function (response) {
                expect(false).to.be.true;
                done(response);
            }

            Gp.Services.reverseGeocode(options_reverse);
        });

        it("INVERSE Erreur de countryCode: ce code n'existe pas", function (done) {
            // Exception de type ErrorService
            // Levée par ReverseGeocode() car le service renvoie un 200 !
            // Renvoyer pour le callback onFailure()
            // Message : No rights for this ressource or ressource does not exist
            // Type : SERVICE_ERROR
            // Status : 403
            //  ex. de message du service :
            // {"http":{"status":403,"error":"<ExceptionReport><Exception exceptionCode=\"MissingRights\">No rights for this ressource or ressource does not exist</Exception></ExceptionReport>"}, "xml":null})

            // this.timeout(1500);
            // setTimeout(done, 1500);
            if (mock) { options_reverse.serverUrl = 'spec-functional/messages/fixtures/jsonp/callback-bad-rights'; }
            options_reverse.filterOptions.type = ['BIDON'];
            options_reverse.onFailure = function (e) {
                console.log(e);
                expect(e).not.to.be.null;
                expect(e.message).to.contain("No rights for this ressource or ressource does not exist");
                expect(e.type).to.be.equal("SERVICE_ERROR");
                expect(e.status).to.be.equal(403);
                done();
            };
            options_reverse.onSuccess = function (response) {
                console.log(response);
                done(response);
            };

            Gp.Services.reverseGeocode(options_reverse);
        });
    });
});

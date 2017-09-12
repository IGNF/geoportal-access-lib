define(['gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test sur les messages d'erreur spécifiques du Service d'AutoCompletion --", function() {

        var Services = null;
        var options  = {};

        beforeEach(function() {

            // options par defaut du geocodage direct
            options = {
                apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
                serverUrl : null,
                protocol : 'JSONP',
                proxyURL : null, // ex. 'http://localhost/proxy/php/proxy.php?url='
                httpMethod : 'GET',
                timeOut : 0,
                rawResponse : false,
                onSuccess : function (response) { console.log('onSuccess() :', response); },
                onFailure : function (error) {console.log("onFailure() : ", error.message, error.type, error.status);},
                // spécifique au service
                text : "Brie",
                filterOptions : {
                   type : ["StreetAddress"],
                   territory : []
                },
                maximumResponses : 10
            };

        });

        it("Erreur de clef API : clef inconnue du service", function (done) {
            // Exception de type ErrorService
            // Levée par le protocole (XHR)
            // Renvoyer pour le callback onFailure()
            // Message : Errors Occured on Http Request (status : 'Forbidden (...)
            // Type : SERVICE_ERROR
            // Status : 403

            // FIXME uniquement en XHR ! Il n'est pas possible de lever les erreurs en JSONP
            // sauf un TimeOut...
            options.apiKey = "bidon";
            options.protocol = 'XHR';
            options.proxyURL = (window.proxy) ? 'http://localhost/proxy/php/proxy.php?url=' : null;
            options.onFailure = function (e) {
                console.log(e.message);
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

        it("Erreur de location : option non renseignée", function () {
            // Exception de type Error
            // Levée par le constructeur Geocode(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : missing parameter location !
            // (Type : ERROR_USAGE)
            // (Status : -1)
            options.text = null;
            try {
                Gp.Services.autoComplete(options);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Parameter(s) 'text' missing");
            } finally {}
        });

        it("Erreur de countryCode : ce code n'existe pas", function (done) {
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
            options.filterOptions.type = ['BIDON'];
            options.protocol = "XHR";
            options.proxyURL = (window.proxy) ? 'http://localhost/proxy/php/proxy.php?url=' : null;
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

        it("Les filtres ne sont pas renseignés : valeurs par defaut", function (done) {
            // Pas d'exception, ni de message
            options.filterOptions = null;
            options.maximumResponses = null;
            options.protocol = "XHR";
            options.proxyURL = (window.proxy) ? 'http://localhost/proxy/php/proxy.php?url=' : null;
            options.onFailure = function (e) {
                console.log(e);
                done(e);
            };
            options.onSuccess = function (response) {
                console.log(response);
                done();
            };

            Gp.Services.autoComplete(options);
        });

        it("Les filtres sont mal renseignés : valeurs par defaut", function (done) {
            // Pas d'exception, ni de message
            options.filterOptions.type = null;
            options.filterOptions.bbox = {};
            options.maximumResponses = null;
            options.protocol = "XHR";
            options.proxyURL = (window.proxy) ? 'http://localhost/proxy/php/proxy.php?url=' : null;
            options.onFailure = function (e) {
                console.log(e);
                done(e);
            };
            options.onSuccess = function (response) {
                console.log(response);
                done();
            };

            Gp.Services.autoComplete(options);
        });
    });
});

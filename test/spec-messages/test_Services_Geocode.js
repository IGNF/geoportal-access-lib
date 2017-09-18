define(['gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test sur les messages d'erreur spécifiques du Service Geocodage Direct --", function() {

        var Services = null;
        var options_direct  = {};

        beforeEach(function() {

            // options par defaut du geocodage direct
            options_direct = {
                apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
                serverUrl : null,
                protocol : 'JSONP',
                proxyURL : (window.proxy) ? 'spec-messages/proxy/php/proxy.php?url=' : null, // ex. 'spec-messages/proxy/php/proxy.php?url='
                httpMethod : 'GET',
                timeOut : 0,
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

            // FIXME uniquement en XHR ! Il n'est pas possible de lever les erreurs en JSONP
            // sauf un TimeOut...
            options_direct.apiKey = "bidon";
            options_direct.protocol = 'XHR';
            options_direct.onFailure = function (e) {
                console.log(e.message);
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

        it("DIRECT Erreur de location : option non renseignée", function () {
            // Exception de type Error
            // Levée par le constructeur Geocode(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : missing parameter location !
            // (Type : ERROR_USAGE)
            // (Status : -1)
            options_direct.location = null;
            try {
                Gp.Services.geocode(options_direct);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Parameter(s) 'location' missing");
            } finally {}
        });

        it("DIRECT Erreur de location : valeur non definie", function () {
            // Exception de type Error
            // Levée par le constructeur Geocode(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : missing parameter location !
            // (Type : ERROR_USAGE)
            // (Status : -1)
            options_direct.location = {};
            try {
                Gp.Services.geocode(options_direct);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Parameter(s) 'location' empty");
            } finally {}
        });

        it("DIRECT Erreur de countryCode: ce code n'existe pas", function (done) {
            // Exception de type ErrorService
            // Levée par Geocode() car le service renvoie un 200 !
            // Renvoyer pour le callback onFailure()
            // Message : No rights for this ressource or ressource does not exist
            // Type : SERVICE_ERROR
            // Status : 403
            //  ex. de message du service :
            // {"http":{"status":403,"error":"<ExceptionReport><Exception exceptionCode=\"MissingRights\">No rights for this ressource or ressource does not exist</Exception></ExceptionReport>"}, "xml":null})
            options_direct.filterOptions.type = ['BIDON'];
            options_direct.protocol = 'XHR';
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

        it("DIRECT Les filtres ne sont pas renseignés : valeurs par defaut", function (done) {
            options_direct.filterOptions = null;
            options_direct.protocol = 'XHR';
            options_direct.httpMethod = 'POST';
            options_direct.onFailure = function (e) {
                console.log(e);
                done(e);
            };
            options_direct.onSuccess = function (response) {
                console.log(response);
                done();
            };

            Gp.Services.geocode(options_direct);
        });

        it("DIRECT Les filtres geometriques sont definis mais mal renseignés : valeurs par defaut", function (done) {
            options_direct.filterOptions.bbox = {};
            options_direct.protocol = 'XHR';
            options_direct.httpMethod = 'POST';
            options_direct.onFailure = function (e) {
                console.log(e);
                done(e);
            };
            options_direct.onSuccess = function (response) {
                console.log(response);
                done();
            };

            Gp.Services.geocode(options_direct);
        });

        it("DIRECT Les filtres geometriques sont definis mais nuls : valeurs par defaut", function (done) {
            options_direct.filterOptions.bbox = null;
            options_direct.protocol = 'XHR';
            options_direct.httpMethod = 'POST';
            options_direct.onFailure = function (e) {
                console.log(e);
                done(e);
            };
            options_direct.onSuccess = function (response) {
                console.log(response);
                done();
            };

            Gp.Services.geocode(options_direct);
        });
    });
});

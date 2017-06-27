define(['gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test sur les messages d'erreur spécifiques du Service Geocodage Inverse --", function() {

        var Services = null;
        var options_reverse = {};

        beforeEach(function() {
            
            // options par defaut du geocodage inverse
            options_reverse = {
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

            // FIXME uniquement en XHR ! Il n'est pas possible de lever les erreurs en JSONP
            // sauf un TimeOut...
            options_reverse.apiKey = "bidon";
            options_reverse.protocol = 'XHR';
            options_reverse.proxyURL = 'http://localhost/proxy/php/proxy.php?url=';
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

        it("INVERSE Erreur de position : option non renseignée", function () {
            // Exception de type Error
            // Levée par le constructeur Geocode(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : missing parameter location !
            // (Type : ERROR_USAGE)
            // (Status : -1)
            options_reverse.position = null;
            try {
                Gp.Services.reverseGeocode(options_reverse);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Parameter(s) 'position' missing");
            } finally {}
        });

        it("INVERSE Erreur de position : coordonnée X indefinie", function () {
            // Exception de type Error
            // Levée par le constructeur Geocode(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : Parameter(s) 'position.x' missing
            // (Type : ERROR_USAGE)
            // (Status : -1)
            options_reverse.position = {
                x: null,
                y: null
            };
            try {
                Gp.Services.reverseGeocode(options_reverse);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Parameter(s) 'position.x' missing");
            } finally {}
        });

        it("INVERSE Erreur de position : coordonnée Y indefinie", function () {
            // Exception de type Error
            // Levée par le constructeur ProcessIsoCurve(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : Parameter(s) 'position.y' missing
            // (Type : ERROR_USAGE)
            // (Status : -1)
            options_reverse.position = {
                x: 2.225558,
                y: null
            };
            try {
                Gp.Services.reverseGeocode(options_reverse);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Parameter(s) 'position.y' missing");
            } finally {}
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
            options_reverse.filterOptions.type = ['BIDON'];
            options_reverse.protocol = 'XHR';
            options_reverse.proxyURL = 'http://localhost/proxy/php/proxy.php?url=';
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

        it("INVERSE Les filtres ne sont pas renseignés : valeurs par defaut", function (done) {
            options_reverse.filterOptions = null;
            options_reverse.protocol = 'XHR';
            options_reverse.httpMethod = 'POST';
            options_reverse.proxyURL = 'http://localhost/proxy/php/proxy.php?url=';
            options_reverse.onFailure = function (e) {
                console.log(e);
                done(e);
            };
            options_reverse.onSuccess = function (response) {
                console.log(response);
                done();
            };

            Gp.Services.reverseGeocode(options_reverse);
        });

        it("INVERSE Les filtres geometriques sont definis mais mal renseignés : valeurs par defaut", function (done) {
            options_reverse.filterOptions.circle = {};
            options_reverse.filterOptions.polygon = [];
            options_reverse.filterOptions.bbox = {};
            options_reverse.protocol = 'XHR';
            options_reverse.httpMethod = 'POST';
            options_reverse.proxyURL = 'http://localhost/proxy/php/proxy.php?url=';
            options_reverse.onFailure = function (e) {
                console.log(e);
                done(e);
            };
            options_reverse.onSuccess = function (response) {
                console.log(response);
                done();
            };

            Gp.Services.reverseGeocode(options_reverse);
        });

        it("INVERSE Les filtres geometriques sont definis mais nuls : valeurs par defaut", function (done) {
            options_reverse.filterOptions.circle = null;
            options_reverse.filterOptions.polygon = null;
            options_reverse.filterOptions.bbox = null;
            options_reverse.protocol = 'XHR';
            options_reverse.httpMethod = 'POST';
            options_reverse.proxyURL = 'http://localhost/proxy/php/proxy.php?url=';
            options_reverse.onFailure = function (e) {
                console.log(e);
                done(e);
            };
            options_reverse.onSuccess = function (response) {
                console.log(response);
                done();
            };

            Gp.Services.reverseGeocode(options_reverse);
        });
    });
});

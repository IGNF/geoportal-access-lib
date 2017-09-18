define(['gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test sur les messages d'erreur spécifiques du Service Alti --", function() {

        var Services = null;
        var options = {};

        beforeEach(function() {

            // options par defaut
            options = {
                apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
                serverUrl : null,
                protocol : 'JSONP',
                proxyURL : (window.proxy) ? 'spec-messages/proxy/php/proxy.php?url=' : null, // ex. 'spec-messages/proxy/php/proxy.php?url='
                httpMethod : 'GET',
                timeOut : 0,
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

        it("Erreur de positions : option non renseingnée", function () {
            // Exception de type Error
            // Levée par le constructeur Alti(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : missing parameter positions !
            // (Type : ERROR_USAGE)
            // (Status : -1)
            options.positions = null;
            try {
                Gp.Services.getAltitude(options);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Parameter(s) 'positions' missing");
            } finally {}
        });

        it("Erreur de positions : option vide", function () {
            // Exception de type Error
            // Levée par le constructeur Alti(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : missing parameter positions !
            // (Type : ERROR_USAGE)
            // (Status : -1)
            options.positions = [];
            try {
                Gp.Services.getAltitude(options);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Parameter(s) 'positions' empty");
            } finally {}
        });

        it("Erreur de positions : coordonnées 'lon' manquantes", function (done) {
            // Exception de type ErrorService
            // Levée par callService() ?
            // Renvoyer pour le callback onFailure()
            // Message : The values () cannot be parsed as a valid longitude (double value such as -180 < lat < 180).
            // Type : SERVICE_ERROR
            // Status : 200
            //  ex. de message du service :
            //  {"error": {"code": "BAD_PARAMETER","description": "The values () cannot be parsed as a valid longitude (double value such as -180 < lat < 180)."}}

            // FIXME
            // test avec le protocole XHR car le service implemente très mal le callback avec le JSONP!
            options.protocol = 'XHR';
            options.positions = [{lon:null, lat:47.48}, {lon:1.25, lat:47.50}];
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

        it("Erreur de positions : coordonnées 'lat' manquantes", function (done) {
            // Exception de type ErrorService
            // Levée par callService() ?
            // Renvoyer pour le callback onFailure()
            // Message : The values () cannot be parsed as a valid latitude (double value such as -90 < lat < 90).
            // Type : SERVICE_ERROR
            // Status : 200
            //  ex. de message du service :
            //  {"error": {"code": "BAD_PARAMETER","description": "The values () cannot be parsed as a valid longitude (double value such as -180 < lat < 180)."}}

            // FIXME
            // test avec le protocole XHR car le service implemente très mal le callback avec le JSONP!
            options.protocol = 'XHR';
            options.positions = [{lon:1.25, lat:47.48}, {lon:1.35, lat:null}];
            options.onFailure = function (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.contain("The values () cannot be parsed as a valid latitude (double value such as -90 < lat < 90).");
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

        it("Erreur d'URL du Service : l'url du service Alti ne contient pas le type de sortie ", function () {
            // Exception de type Error
            // Levée par le constructeur Alti(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : Unknown type of service or unsupported (json or xml) !
            // (Type : ERROR_USAGE)
            // (Status : -1)

            // FIXME
            // test possible avec le protocole XHR
            options.protocol = 'XHR';
            options.apiKey = null;
            options.serverUrl = "http://service.bidon.fr";
            try {
                Gp.Services.getAltitude(options);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("type of service : unknown or unsupported (json or xml) !");
            } finally {}
        });

        it("Erreur du type d'API : valeur inconnue", function () {
            // Exception de type Error
            // Levée par le constructeur Alti(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : Type API value not supported or unknown !
            // (Type : ERROR_USAGE)
            // (Status : -1)

            options.api = 'BIDON';
            try {
                Gp.Services.getAltitude(options);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Value(s) for parameter(s) 'api' unknown");
            } finally {}
        });

        it("Erreur du format de sortie : valeur inconnue", function () {
            // Exception de type Error
            // Levée par le constructeur Alti(), on ne souhaite pas passer par le callback onFailure()
            // Capturée UNIQUEMENT via un try/catch
            // Message : Url by default not found !
            // (Type : ERROR_USAGE)
            // (Status : -1)

            options.outputFormat = 'BIDON';
            try {
                Gp.Services.getAltitude(options);
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("Url by default not found !");
            } finally {}
        });
    });
});

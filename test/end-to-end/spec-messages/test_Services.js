import Gp from "../../../dist/GpServices-src.js";

import sinon from "sinon";
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

// pass this option from webpack
var mock = __MOCK__;

describe("-- Test sur les messages d'erreur communs à tous les services --", function() {

    var Services = null;
    var options = {};

    beforeEach(function() {

        // options par defaut
        options = {
            apiKey : 'jhyvi0fgmnuxvfv0zjzorvdn',
            serverUrl : null,
            protocol : 'JSONP',
            // proxyURL : (window.proxy) ? 'spec-messages/proxy/php/proxy.php?url=' : null, // ex. 'spec-messages/proxy/php/proxy.php?url='
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

    it("ALTI - Erreur de callback : callback onSuccess() non renseigné", function () {
        // Exception de type Error
        // Levée par le constructeur CommonService(), on ne souhaite pas passer par le callback onFailure()
        // Capturée UNIQUEMENT via un try/catch
        // Message : missing apiKey !
        // (Type : ERROR_USAGE)
        // (Status : -1)
        options.onSuccess = null;
        try {
            Gp.Services.getAltitude(options);
            expect(false).to.be.true;
        } catch (e) {
            console.log(e.message);
            expect(e).not.to.be.null;
            expect(e.message).to.be.equal("Parameter(s) 'onSuccess()' missing");
        } finally {}
    });

    it("ALTI - Erreur de clef API : option non renseignée", function () {
        // Exception de type Error
        // Levée par le constructeur CommonService(), on ne souhaite pas passer par le callback onFailure()
        // Capturée UNIQUEMENT via un try/catch
        // Message : missing apiKey !
        // (Type : ERROR_USAGE)
        // (Status : -1)
        options.apiKey = null;
        try {
            Gp.Services.getAltitude(options);
            expect(false).to.be.true;
        } catch (e) {
            console.log(e.message);
            expect(e).not.to.be.null;
            expect(e.message).to.be.equal("Parameter(s) 'apiKey - serverUrl' missing");
        } finally {}
    });

    xit("ALTI - Erreur de clef API : clef inconnue du service", function (done) {
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

        Gp.Services.getAltitude(options);
    });

    it("ALTI - Erreur de methode HTTP : methode non supportée", function () {
        // Exception de type Error
        // Levée par le constructeur CommonService(), on ne souhaite pas passer par le callback onFailure()
        // Capturée UNIQUEMENT via un try/catch
        // Message : Method HTTP not supported by the service !
        // (Type : ERROR_USAGE)
        // (Status : -1)

        // FIXME
        // test avec le protocole XHR car le service implemente très mal le callback avec le JSONP!
        options.protocol = 'XHR';
        options.httpMethod = 'PUT';
        try {
            Gp.Services.getAltitude(options);
            expect(false).to.be.true;
        } catch (e) {
            console.log(e.message);
            expect(e).not.to.be.null;
            expect(e.message).to.be.equal("Value(s) for parameter(s) 'httpMethod' not supported");
        } finally {}
    });

    it("ALTI - Erreur de methode HTTP : methode inconnue", function () {
        // Exception de type Error
        // Levée par le constructeur CommonService(), on ne souhaite pas passer par le callback onFailure()
        // Capturée UNIQUEMENT via un try/catch
        // Message : Unknown method HTTP !
        // (Type : ERROR_USAGE)
        // (Status : -1)

        // FIXME
        // test avec le protocole XHR car le service implemente très mal le callback avec le JSONP!
        options.protocol = 'XHR';
        options.httpMethod = 'bidon';
        try {
            Gp.Services.getAltitude(options);
            expect(false).to.be.true;
        } catch (e) {
            console.log(e.message);
            expect(e).not.to.be.null;
            expect(e.message).to.be.equal("Value(s) for parameter(s) 'httpMethod' unknown");
        } finally {}
    });

    it("ALTI - Erreur de protocole : protocole non supporté", function () {
        // Exception de type Error
        // Levée par le constructeur CommonService(), on ne souhaite pas passer par le callback onFailure()
        // Capturée UNIQUEMENT via un try/catch
        // Message : No other protocol supported by the service !
        // (Type : ERROR_USAGE)
        // (Status : -1)

        // FIXME
        // test avec le protocole XHR car le service implemente très mal le callback avec le JSONP!
        options.protocol = 'BIDON';
        options.httpMethod = 'GET';
        try {
            Gp.Services.getAltitude(options);
            expect(false).to.be.true;
        } catch (e) {
            console.log(e.message);
            expect(e).not.to.be.null;
            expect(e.message).to.be.equal("Value(s) for parameter(s) 'protocol' unknown");
        } finally {}
    });

    xit("ALTI - Erreur de Proxy : url inconnu", function (done) {
        // Exception de type ErrorService
        // Levée par le protocole (XHR)
        // Renvoyer pour le callback onFailure()
        // Message : (...) 404 Not Found (...)
        // Type : SERVICE_ERROR
        // Status : 404

        // FIXME
        // test possible avec le protocole XHR
        options.protocol = 'XHR';
        options.proxyURL = "bidon";
        options.onFailure = function (e) {
            console.log(e.message);
            expect(e).not.to.be.null;
            expect(e.message).to.contain("404 Not Found");
            expect(e.type).to.be.equal("SERVICE_ERROR");
            expect(e.status).to.be.equal(404);
            done();
        };
        options.onSuccess = function (response) {
            expect(false).to.be.true;
            done(response);
        };

        Gp.Services.getAltitude(options);

    });

    xit("NOK ALTI - Erreur de Proxy : url non renseignée", function (done) {
        // Exception de type ErrorService
        // Levée par le protocole (XHR)
        // Renvoyer pour le callback onFailure()
        // Message : (...) Access-Control-Allow-Origin (...)
        // Type : SERVICE_ERROR
        // Status : 200

        // FIXME
        // test possible avec le protocole XHR
        // comment capturer une erreur de cross-domain or cross-origin !?
        options.protocol = 'XHR';
        options.proxyURL = "bidon";
        options.onFailure = function (e) {
            console.log(e);
            expect(e).not.to.be.null;
            expect(e.message).to.contain("Access-Control-Allow-Origin");
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

    xit("ALTI - Erreur d'URL du Service : domaine inconnu", function (done) {
        // Exception de type ErrorService
        // Levée par le protocole (XHR)
        // Renvoyer pour le callback onFailure()
        // Message : (...) Name or service not known (...)
        // Type : SERVICE_ERROR
        // Status : 500

        // FIXME
        // test possible avec le protocole XHR
        options.protocol = 'XHR';
        options.apiKey = null;
        options.serverUrl = "http://service.bidon.json";
        options.onFailure = function (e) {
            console.log(e);
            expect(e).not.to.be.null;
            // FIXME Name or service not known
            // expect(e.message).to.contain("");
            expect(e.type).to.be.equal("SERVICE_ERROR");
            expect(e.status).to.be.equal(500);
            done();
        };
        options.onSuccess = function (response) {
            expect(false).to.be.true;
            done(response);
        };

        Gp.Services.getAltitude(options);

    });

    xit("AUTOCONF - reponse longue avec un timeout", function (done) {

        Gp.Services.getConfig({
            protocol : 'XHR',
            apiKey : null,
            timeOut : 10,
            // proxyURL : (window.proxy) ? 'spec-messages/proxy/php/proxy.php?url=' : null,
            serverUrl : 'http://wxs.ign.fr/autoconf/',
            onFailure : function (e) {
                expect(e).not.to.be.null;
                expect(e.message).to.contain("TimeOut");
                expect(e.type).to.be.equal("SERVICE_ERROR");
                expect(e.status).to.be.equal(-1);
                done();
            },
            onSuccess : function (response) {
                console.log(response);
                done();
            }
        });
    });
});

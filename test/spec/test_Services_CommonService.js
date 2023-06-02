/*
* Test de la classe CommonService dont héritent les différents services.
* Notamment : tests des erreurs retournées lorsque les paramètres ne sont pas bien renseignés.
*/

import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import CommonService from "../../src/Services/CommonService";

describe("-- Test CommonService --", function () {

    var options = {
        serverUrl : null,
        protocol : "XHR", // JSONP|XHR
        proxyURL : null,
        httpMethod : "GET", // GET|POST
        timeOut : 10000, // ms
        rawResponse : false, // true|false
        scope : null, // this
        onSuccess : function (response) { console.log(response); },
        onFailure : function (error) { console.log(error); }
    };

    describe("CommonService", function () {

        // FIXME
        // difficile de tester cette classe car elle depend des appels des classes heritées !

        it("L'url du service n'est pas renseignée.", function () {

            var common;
            try {
                common = new CommonService(options);
                expect(false).to.be.true;
            } catch (e) {
                expect(true).to.be.true;
                // expect(e.message).to.be.equal("Parameter(s) 'serverUrl' missing");
                // console.log(e.message);
            }

        });

        it("L'url du service est renseignée.", function () {

            options.serverUrl = "http://localhost/service";

            var common;
            try {
                common = new CommonService(options);
                expect(true).to.be.true;
            } catch (e) {
                expect(false).to.be.true;
            }
        });

        it("La méthode HTTP n'est pas supportée.", function () {

            options.serverUrl = "http://localhost/service";
            options.httpMethod = "PUT";

            var common;
            try {
                common = new CommonService(options);
                expect(false).to.be.true;
            } catch (e) {
                expect(true).to.be.true;
                expect(e.message).to.be.equal("Value(s) for parameter(s) 'httpMethod' not supported");
                // console.log(e.message);
            }
        });

        it("La méthode HTTP est inconnue.", function () {

            options.serverUrl = "http://localhost/service";
            options.httpMethod = "BIDON";

            var common;
            try {
                common = new CommonService(options);
                expect(false).to.be.true;
            } catch (e) {
                expect(true).to.be.true;
                expect(e.message).to.be.equal("Value(s) for parameter(s) 'httpMethod' unknown");
                // console.log(e.message);
            }
        });

        it("La méthode HTTP est renseignée en minuscule.", function () {

            options.serverUrl = "http://localhost/service";
            options.httpMethod = "get";

            var common;
            try {
                common = new CommonService(options);
                expect(true).to.be.true;
            } catch (e) {
                expect(false).to.be.true;
            }
        });

        it("Le protocole n'est pas supporté ou inconnu.", function () {

            options.serverUrl = "http://localhost/service";
            options.protocol = "BIDON";

            var common;
            try {
                common = new CommonService(options);
                expect(false).to.be.true;
            } catch (e) {
                expect(true).to.be.true;
                expect(e.message).to.be.equal("Value(s) for parameter(s) 'protocol' unknown");
                // console.log(e.message);
            }
        });

        it("Le protocole est renseigné en minuscule.", function () {

            options.serverUrl = "http://localhost/service";
            options.protocol = "xhr";

            var common;
            try {
                common = new CommonService(options);
                expect(true).to.be.true;
            } catch (e) {
                expect(false).to.be.true;
            }
        });

        it("Le callback 'onSuccess' n'est pas renseigné.", function () {

            options.serverUrl = "http://localhost/service";
            options.protocol = "xhr";
            options.onSuccess = null;

            var common;
            try {
                common = new CommonService(options);
                expect(false).to.be.true;
            } catch (e) {
                expect(true).to.be.true;
                expect(e.message).to.be.equal("Parameter(s) 'onSuccess()' missing");
                // console.log(e.message);
            }
        });

    });
});

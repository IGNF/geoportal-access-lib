/**
 * FIXME avec le JSONP, l'erreur est au niveau du html (execution de la balise script),
 * et il est difficile de la levée..., afin de la faire apparaitre dans les tests...
 */

define([ 'gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests fonctionnels du Service d'autoconfiguration : JSONP --", function () {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";

        describe('Service.getConfig : SUCCESS', function () {
            
            this.timeout(15000);

            // fonction contenant les tests de la reponse
            var functionAssert = function (response) {
                console.log(response);
                should.exist(response);
                expect(response).to.have.property("generalOptions");
                expect(response).to.have.property("layers");
                expect(response).to.have.property("territories");
                expect(response).to.have.property("tileMatrixSets");
                expect(response).to.have.property("services");
            };

            describe("Test sur l'utilisation basique du service (paramètres par défaut) ", function () {

                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    callbackSuffix: "",
                    onSuccess: function (response) {
                        console.log(response);
                    },
                    onFailure: function (error) {
                        console.log(error);
                    }
                };

                it("paramètre apiKey, onSuccess et onFailure seulement", function (done) {
                    // description du test
                    // requête GET du service REST en xml
                    if (mock) { options.serverUrl = 'spec-functional/fixtures/jsonp/callback-autoconf-xml'; }
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };
                    options.onTimeOut = function () {
                        var error = "Reception d'un Time out (json) !";
                        console.log(error);
                        done(error);
                    };
                    Gp.Services.getConfig(options);
                })
            });

            describe("Test sur les options du Protocole", function (done) {

                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    serverUrl: null,
                    protocol: 'JSONP', // à surcharger : JSONP|XHR
                    callbackSuffix: "",
                    
                    httpMethod: 'GET', // à surcharger : GET|POST
                    timeOut: 10000000000,
                    rawResponse: false,
                    onSuccess: null, // à surcharge
                    onFailure: null, // à surcharge
                    // spécifique au service
                };

                it("Appel du service en mode 'JSONP'" +
                    " pour un format de sortie en 'json'", function (done) {
                        // description du test
                        // requête GET du service en json
                        // la reponse du service de production en JSONP est un json dans un callback
                        //   var urlJsonPGet = "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/autoconf?output=json&callback=callback";
                        //   var okResponseJSONPjson =[200, { 'Content-type': 'application/javascript' }, 'callback({{"http":{"status":200,"error":null},"xml":""}})'];

                        if (mock) { options.serverUrl = 'spec-functional/fixtures/jsonp/callback-autoconf-xml'; }
                        options.onSuccess = function (response) {
                            functionAssert(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };
                        options.onTimeOut = function () {
                            var error = "Reception d'un Time out (autoconf) !";
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.getConfig(options);
                    });
            });
        });
    });
});

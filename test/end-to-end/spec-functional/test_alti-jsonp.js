/**
* FIXME avec le JSONP, l'erreur est au niveau du html (execution de la balise script),
* et il est difficile de la levée..., afin de la faire apparaitre dans les tests...
*/

import Gp from "../../../dist/GpServices-src.js";

import sinon from "sinon";
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

// pass this option from webpack
var mock = __MOCK__;

describe("-- Tests fonctionnels du Service Altimétrique : JSONP --", function () {

    var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";

    describe('Service.getAltitude : SUCCESS', function () {

        describe("Test sur l'utilisation basique du service (paramètres par défaut) ", function () {

            // options par defaut (à surcharger)
            var options = {
                apiKey: myKey,
                protocol: 'JSONP',
                callbackSuffix: "",
                onSuccess: function (response) {
                    console.log(response);
                },
                onFailure: function (error) {
                    console.log(error);
                },
                // spécifique au service
                positions: [{ lon: 1.25, lat: 47.48 }]
            };

            it("paramètres apiKey, onSuccess, onFailure et positions", function (done) {
                // description du test
                // requête GET du service REST en xml
                if (mock) { options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-alti-xml'; }
                options.onSuccess = function (response) {
                    console.log(response);
                    should().exist(response.elevations);
                    expect(response.elevations).to.be.an("Array");
                    expect(response.elevations).to.have.length(1);
                    expect(response.elevations[0]).to.have.property("lon");
                    expect(response.elevations[0]).to.have.property("lat");
                    expect(response.elevations[0]).to.have.property("z");
                    expect(response.elevations[0]).to.have.property("acc");
                    // expect(response.elevations[0].z).to.equal(103.38);
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
                Gp.Services.getAltitude(options);
            });
        });

        describe("Test sur les options du Protocole", function (done) {

            var options;

            beforeEach(function () {
                // options par defaut (à surcharger)
                options = {
                    apiKey: myKey,
                    serverUrl: null,
                    protocol: 'JSONP', // à surcharger : JSONP|XHR
                    callbackSuffix: "",
                    httpMethod: 'GET', // à surcharger : GET|POST
                    timeOut: 10000,
                    rawResponse: false,
                    onSuccess: null, // à surcharge
                    onFailure: null, // à surcharge
                    // spécifique au service
                    positions: [{ lon: 1.25, lat: 47.48 }],
                    outputFormat: 'json', // à surcharger : json|xml
                    sampling: 0, // à surcharger : 0 ou autre
                    api: 'REST', // à surcharger : REST|WPS
                    zonly: false
                };
            });

            afterEach(function () {

            });

            // fonction contenant les tests de la reponse
            var functionAssert = function (response) {
                console.log(response);
                should().exist(response.elevations);
                expect(response.elevations).to.be.an("Array");
                expect(response.elevations).to.have.length(1);
                expect(response.elevations[0]).to.have.property("lon");
                expect(response.elevations[0]).to.have.property("lat");
                expect(response.elevations[0]).to.have.property("z");
                expect(response.elevations[0]).to.have.property("acc");
                // expect(response.elevations[0].z).to.equal(103.33);
            };

            it("Appel du service en mode 'JSONP'" +
            " avec l'API 'REST'" +
            " pour un format de sortie en 'xml'", function (done) {
                // description du test
                // requête GET du service REST en xml
                // la reponse du service de production en JSONP est un xml encapsulé dans du JSON avec un callback
                //   var okResponseXml  = '<elevations><elevation><lon>1.25</lon><lat>47.48</lat><z>103.33</z><acc>2.5</acc></elevation></elevations>';
                //   var urlJsonPGet = "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/alti/rest/elevation.xml?output=json&lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false&callback=callback";
                //   var okResponseJSONPXml = [200, { 'Content-type': 'application/javascript' }, 'callback({"http":{"status":200,"error":null},"xml":"' + okResponseXml + '"})'];

                if (mock) { options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-alti-xml'; }
                options.outputFormat = 'xml';
                options.onSuccess = function (response) {
                    functionAssert(response);
                    done();
                };
                options.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };
                options.onTimeOut = function () {
                    var error = "Reception d'un Time out (xml) !";
                    console.log(error);
                    done(error);
                };

                Gp.Services.getAltitude(options);
            });

            it("Appel du service en mode 'JSONP'" +
            " avec l'API 'REST'" +
            " pour un format de sortie en 'json'", function (done) {
                // FIXME le service ne renvoie pas une bonne reponse ?
                //   callback({"http":{"status":200,"error":null},"xml":"{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}"})
                // description du test
                // requête GET du service REST en json
                // la reponse du service de production en JSONP est un json dans un callback
                //   var okResponseJson = '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}';
                //   var urlJsonPGet = "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/alti/rest/elevation.json?lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false&callback=callback&output=json";
                //   var okResponseJSONPjson = [200, { 'Content-type': 'application/javascript' },  'callback(' + okResponseJson + ')'];

                if (mock) { options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-alti-json'; }
                options.outputFormat = 'json';
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

                Gp.Services.getAltitude(options);
            });

            it("Appel du service en mode 'JSONP'" +
            " avec l'API 'WPS'" +
            " pour un format de sortie en 'xml'", function (done) {
                // description du test
                // requête GET du service WPS en xml
                // la reponse du service de production en JSONP est un xml encapsulé dans du JSON avec un callback
                //   var okResponseXml  = '<elevations><elevation><lon>1.25</lon><lat>47.48</lat><z>103.33</z><acc>2.5</acc></elevation></elevations>';
                //   var urlJsonPGet = "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/alti/wps?output=json&service=WPS&version=1.0.0&rawdataoutput=result&identifier=gs:WPSElevation&request=Execute&datainputs=lon=1.25;lat=47.48;indent=false;crs=CRS:84;zonly=false;format=xml&callback=callback";
                //   var okResponseJSONPXml = [200, { 'Content-type': 'application/javascript' }, 'callback({"http":{"status":200,"error":null},"xml":"' + okResponseXml + '"})'];

                if (mock) { options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-alti-xml'; }
                options.outputFormat = 'xml';
                options.api = 'WPS';
                options.onSuccess = function (response) {
                    functionAssert(response);
                    done();
                };
                options.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };
                options.onTimeOut = function () {
                    var error = "Reception d'un Time out (xml) !";
                    console.log(error);
                    done(error);
                };

                Gp.Services.getAltitude(options);
            });

            it("[FIXME] Appel du service en mode 'JSONP'" +
            " avec l'API 'WPS'" +
            " pour un format de sortie en 'json'", function (done) {
                // FIXME le service ne renvoie pas une bonne reponse ?
                //   callback({"http":{"status":200,"error":null},"xml":"{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}"})
                // description du test
                // requête GET du service WPS en json
                // la reponse du service de production en JSONP est un json encapsulé dans du JSON avec un callback
                //   var okResponseJson = '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}';
                //   var urlJsonPGet = "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/alti/wps?service=WPS&version=1.0.0&rawdataoutput=result&identifier=gs:WPSElevation&request=Execute&datainputs=lon=1.25;lat=47.48;indent=false;crs=CRS:84;zonly=false;format=json&callback=callback";
                //   var okResponseJSONPjson = [200, { 'Content-type': 'application/javascript' },  'callback(' + okResponseJson + ')'];

                if (mock) {
                    options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-alti-json';
                } else {
                    this.skip();
                }
                options.outputFormat = 'json';
                options.api = 'WPS';
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

                Gp.Services.getAltitude(options);
            });
        });
    });
});

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

// FIXME how to pass this option from webpack ?
var mock = true;

describe("-- Tests fonctionnels du Service de Calcul d’isochrones / isodistances : JSONP --", function () {

    var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";

    describe('Service.isoCurve : SUCCESS', function () {

        this.timeout(15000);

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
                position: {
                    x: 2.3242664298058053,
                    y: 48.86118017324745
                },
                time: 200
            };

            it("paramètres position, time, et les callbacks onSuccess et onFailure", function (done) {
                // description du test
                // requête GET du service REST en json,
                // calcul d'isochrone (time), se basant sur le graphe "voiture", sans paramètres spécifiques
                // requête envoyée : http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/isochrone/isochrone.json?location=2.3242664298058053,48.86118017324745&smoothing=false&holes=false&reverse=false&method=time&time=200&graphName=Voiture&srs=EPSG:4326&callback=callback

                if (mock) { options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-iso-json-default'; }

                options.onSuccess = function (response) {
                    console.log(response);
                    should().exist(response);
                    expect(response).to.be.an("Object");

                    expect(response).to.have.property("location");
                    expect(response.location).to.be.an("object");
                    expect(response.location).to.have.property("x");
                    expect(response.location).to.have.property("y");

                    expect(response).to.have.property("geometry");
                    expect(response.geometry).to.be.an("object");
                    expect(response.geometry).to.have.property("coordinates");
                    expect(response.geometry.coordinates).to.be.an("array");

                    expect(response).to.have.property("message");
                    expect(response).to.have.property("srs");
                    expect(response).to.have.property("time");
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
                Gp.Services.isoCurve(options);
            })
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
                    timeOut: 10000000000,
                    rawResponse: false,
                    onSuccess: null, // à surcharge
                    onFailure: null, // à surcharge
                    // spécifique au service
                    outputFormat: 'json', // à surcharger : json|xml
                    exclusions: ['Toll', 'Bridge', 'Tunnel'],
                    position: {
                        x: 2.3242664298058053,
                        y: 48.86118017324745
                    },
                    graph: "Voiture",
                    method: "time",
                    time: 200,
                    srs: "EPSG:4326",
                    reverse: false,
                    smoothing: false,
                    holes: false
                };
            });

            afterEach(function () {

            });

            // fonction contenant les tests de la reponse
            var functionAssert = function (response) {
                console.log(response);
                should().exist(response);
                expect(response).to.be.an("Object");
                expect(response).to.have.property("location");
                expect(response.location).to.be.an("object");
                expect(response.location).to.have.property("x");
                expect(response.location).to.have.property("y");
                expect(response).to.have.property("geometry");
                expect(response).to.have.property("message");
                expect(response).to.have.property("srs");
                expect(response).to.have.property("time");
            };

            xit("FIXME : Appel du service en mode 'JSONP'" +
            " pour un format de sortie en 'xml'", function (done) {
                // FIXME le service ne renvoie pas la bonne reponse (XML dans un callback) !?
                // description du test
                // requête GET du service en xml
                // la reponse du service de production en JSONP est un xml encapsulé dans JSON avec un callback
                //   var urlGet = "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/isochrone/isochrone.xml?output=json&location=2.3242664298058053,48.86118017324745&smoothing=false&holes=false&reverse=false&method=time&time=200&graphName=Voiture&exclusions=Toll;Bridge;Tunnel&srs=EPSG:4326&callback=callback";
                //   var okResponse =[200, { 'Content-type': 'application/javascript' }, 'callback({{"http":{"status":200,"error":null},"xml":""}})'];

                if (mock) { options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-iso-xml'; }
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
                    var error = "Reception d'un Time out (isoCurve) !";
                    console.log(error);
                    done(error);
                };

                Gp.Services.isoCurve(options);
            });

            it("Appel du service en mode 'JSONP'" +
            " pour un format de sortie en 'json'", function (done) {
                // description du test
                // requête GET du service en json
                // la reponse du service de production en JSONP est un json avec un callback
                //   var urlGet = "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/isochrone/isochrone.json?location=2.3242664298058053,48.86118017324745&smoothing=false&holes=false&reverse=false&method=time&time=200&graphName=Voiture&exclusions=Toll;Bridge;Tunnel&srs=EPSG:4326&callback=callback";
                //   var okResponse =[200, { 'Content-type': 'application/javascript' }, 'callback({})'];

                if (mock) { options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-iso-json'; }
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
                    var error = "Reception d'un Time out (isoCurve) !";
                    console.log(error);
                    done(error);
                };

                Gp.Services.isoCurve(options);
            });
        });
    });
});

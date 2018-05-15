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

describe("-- Tests fonctionnels du Service d'autocompletion : JSONP --", function () {

    var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";

    describe("Service.autoComplete : SUCCESS", function () {

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
                text: "saint mandé"
            };

            it("paramètres apiKey, text, onSuccess et onFailure seulement", function (done) {
                // description du test
                // requête GET du service REST en json
                // requête envoyée: http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/ols/apis/completion?text=Brie-Co&type=StreetAddress&territory=&maximumResponses=10&callback=callback
                if (mock) { options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-autocomplete-json-sa'; }
                options.onSuccess = function (response) {
                    console.log(response);
                    should().exist(response.suggestedLocations);
                    expect(response.suggestedLocations).to.be.an("Array");
                    expect(response.suggestedLocations).to.have.length(3);
                    expect(response.suggestedLocations[0]).to.have.property("classification");
                    expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                    expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Pierre-du-Regard");
                    expect(response.suggestedLocations[0]).to.have.property("fullText");
                    expect(response.suggestedLocations[0]).to.have.property("kind");  // specifique à POI !
                    expect(response.suggestedLocations[0]).to.have.property("poi");   // specifique à POI !
                    expect(response.suggestedLocations[0]).to.have.property("postalCode");
                    expect(response.suggestedLocations[0]).to.have.property("street");
                    expect(response.suggestedLocations[0]).to.have.property("position");
                    expect(response.suggestedLocations[0].position).to.have.property("x");
                    expect(response.suggestedLocations[0].position).to.have.property("y");
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
                Gp.Services.autoComplete(options);
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
                timeOut: 10000,
                rawResponse: false,
                onSuccess: null, // à surcharge
                onFailure: null, // à surcharge
                // spécifique au service
                text: "Saint-Mandé",
                filterOptions : {
                    type: ["PositionOfInterest"],
                    territory: ['METROPOLE']
                },
                maximumResponses: 1
            };

            it("Appel du service en mode 'JSONP'" +
            " pour un format de sortie en 'json'", function (done) {

                // FIXME ne pas ajouter output=json sur ce service sinon...
                // description du test
                // requête GET du service en json
                // la reponse du service de production en JSONP est un json dans un callback
                //   var urlJsonPGet = "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/ols/apis/completion?text=Brie-Co&type=PositionOfInterest&territory=METROPOLE&maximumResponses=1&callback=callback";
                //   var okResponseJSONPjson =[200, { 'Content-type': 'application/javascript' }, 'callback({"status":"OK","results":[{"country":"PositionOfInterest","x":2.617131,"y":48.69341,"city":"Brie-Comte-Robert","zipcode":"77170","street":"","kind":"Commune","fulltext":"77170 Brie-Comte-Robert","classification":5}]})'];

                if (mock) { options.serverUrl = 'test/end-to-end/spec-functional/fixtures/jsonp/callback-autocomplete-json-poi'; }
                options.outputFormat = 'json';
                options.onSuccess = function (response) {
                    console.log(response);
                    should().exist(response.suggestedLocations);
                    expect(response.suggestedLocations).to.be.an("Array");
                    expect(response.suggestedLocations).to.have.length(1);
                    expect(response.suggestedLocations[0]).to.have.property("classification", 1);
                    expect(response.suggestedLocations[0]).to.have.property("type", "PositionOfInterest");
                    expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Mandé");
                    expect(response.suggestedLocations[0]).to.have.property("fullText", "IGN Saint-Mandé, 94160 Saint-Mandé");
                    expect(response.suggestedLocations[0]).to.have.property("kind", "Département");      // specifique à POI !
                    expect(response.suggestedLocations[0]).to.have.property("poi", "IGN Saint-Mandé");   // specifique à POI !
                    expect(response.suggestedLocations[0]).to.have.property("postalCode", "94160");
                    expect(response.suggestedLocations[0]).to.have.property("position");
                    expect(response.suggestedLocations[0].position).to.have.property("x");  // utile ?
                    expect(response.suggestedLocations[0].position).to.have.property("y");  // utile ?
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

                Gp.Services.autoComplete(options);
            });
        });
    });
});

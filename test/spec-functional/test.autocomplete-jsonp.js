/**
 * FIXME avec le JSONP, l'erreur est au niveau du html (execution de la balise script),
 * et il est difficile de la levée..., afin de la faire apparaitre dans les tests...
 */

define([ 'gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests fonctionnels du Service d'autocompletion : JSONP --", function () {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";

        describe('Service.autoComplete : SUCCESS', function () {

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
                    text: "Brie-Co"
                };

                it("paramètres apiKey, text, onSuccess et onFailure seulement", function (done) {
                    // description du test
                    // requête GET du service REST en json
                    // requête envoyée: http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/ols/apis/completion?text=Brie-Co&type=StreetAddress&territory=&maximumResponses=10&callback=callback
                    if (mock) { options.serverUrl = 'spec-functional/fixtures/jsonp/callback-autocomplete-json2'; }
                    options.onSuccess = function (response) {
                        console.log(response);
                        should.exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(2);

                        expect(response.suggestedLocations[0]).to.have.property("type","StreetAddress");
                        expect(response.suggestedLocations[0]).to.have.property("classification",7);
                        expect(response.suggestedLocations[0]).to.have.property("commune", "Brie");
                        expect(response.suggestedLocations[0]).to.have.property("fullText", "courreste, 09700 Brie");
                        expect(response.suggestedLocations[0]).to.have.property("kind");  // specifique à POI !
                        expect(response.suggestedLocations[0]).to.have.property("poi");   // specifique à POI !
                        expect(response.suggestedLocations[0]).to.have.property("postalCode", "09700");
                        expect(response.suggestedLocations[0]).to.have.property("position");
                        expect(response.suggestedLocations[0].position).to.have.property("x");
                        expect(response.suggestedLocations[0].position).to.have.property("y");

                        expect(response.suggestedLocations[1]).to.have.property("type","StreetAddress");
                        expect(response.suggestedLocations[1]).to.have.property("classification",7);
                        expect(response.suggestedLocations[1]).to.have.property("commune", "Brie");
                        expect(response.suggestedLocations[1]).to.have.property("fullText", "la coutensou, 09700 Brie");
                        expect(response.suggestedLocations[1]).to.have.property("kind");  // specifique à POI !
                        expect(response.suggestedLocations[1]).to.have.property("poi");   // specifique à POI !
                        expect(response.suggestedLocations[1]).to.have.property("postalCode", "09700");
                        expect(response.suggestedLocations[1]).to.have.property("position");
                        expect(response.suggestedLocations[1].position).to.have.property("x");
                        expect(response.suggestedLocations[1].position).to.have.property("y");
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
                    // proxyURL: null,
                    httpMethod: 'GET', // à surcharger : GET|POST
                    timeOut: 10000,
                    rawResponse: false,
                    onSuccess: null, // à surcharge
                    onFailure: null, // à surcharge
                    // spécifique au service
                    text: "Brie-Co",
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

                    if (mock) { options.serverUrl = 'spec-functional/fixtures/jsonp/callback-autocomplete-json'; }
                    options.outputFormat = 'json';
                    options.onSuccess = function (response) {
                        console.log(response);
                        should.exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(1);

                        expect(response.suggestedLocations[0]).to.have.property("classification");
                        expect(response.suggestedLocations[0]).to.have.property("commune", "Brie-Comte-Robert");
                        expect(response.suggestedLocations[0]).to.have.property("fullText", "77170 Brie-Comte-Robert");
                        expect(response.suggestedLocations[0]).to.have.property("kind", "Commune");  // specifique à POI !
                        expect(response.suggestedLocations[0]).to.have.property("poi");   // specifique à POI !
                        expect(response.suggestedLocations[0]).to.have.property("postalCode", "77170");
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
                });
            });
        });
    });
});

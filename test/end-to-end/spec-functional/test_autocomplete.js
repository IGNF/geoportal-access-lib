import Gp from "../../../dist/GpServices-src.js";

import sinon from "sinon";
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

// pass this option from webpack
var mock = __MOCK__;

describe("-- Tests fonctionnels du Service d'autocompletion --", function () {

    var server;
    var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
    var version = Gp.servicesVersion;
    var options;

    beforeEach(function () {
        if (mock) { server = sinon.fakeServer.create(); }
        // options par defaut (à surcharger)
        options = {
            apiKey: myKey,
            serverUrl: null,
            protocol: 'XHR', // JSONP|XHR

            httpMethod: 'GET', // GET|POST
            timeOut: 10000, // ms
            rawResponse: false, // true|false
            onSuccess: function (response) {
                console.log(response);
            },
            onFailure: function (error) {
                console.log(error);
            },
            // spécifique au service
            text: "Saint Mandé"
        };
    });
    afterEach(function () {
        if (mock) { server.restore(); }
    });

    describe('Service.autoComplete : SUCCESS', function () {

        this.timeout(15000);

        describe("Tests sur les options du protocole du service", function () {

            // fonction contenant les tests de la reponse
            var functionAssert = function (response) {
                should().exist(response.suggestedLocations);
                expect(response.suggestedLocations).to.be.an("Array");
                expect(response.suggestedLocations).to.have.length(1);
                expect(response.suggestedLocations[0]).to.have.property("type");
                expect(response.suggestedLocations[0]).to.have.property("classification");
                expect(response.suggestedLocations[0]).to.have.property("commune");
                expect(response.suggestedLocations[0]).to.have.property("fullText");
                expect(response.suggestedLocations[0]).to.have.property("kind");  // specifique à POI !
                expect(response.suggestedLocations[0]).to.have.property("poi");   // specifique à POI !
                expect(response.suggestedLocations[0]).to.have.property("postalCode");
                expect(response.suggestedLocations[0]).to.have.property("position");
                expect(response.suggestedLocations[0].position).to.have.property("x");
                expect(response.suggestedLocations[0].position).to.have.property("y");
            };

            it("Appel du service en mode 'XHR' avec la méthode 'GET'", function (done) {
                // description du test : reponse du service en json
                var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint%20Mand%C3%A9&type=PositionOfInterest&terr=METROPOLE&maximumResponses=1";
                var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":2.424573,"y":48.845726,"city":"Saint-Mandé","zipcode":"94160","street":"IGN Saint-Mandé","kind":"Département","fulltext":"IGN Saint-Mandé, 94160 Saint-Mandé","classification":1}]}'];
                if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }

                options.text         = "Saint Mandé";
                options.protocol     = 'XHR';
                options.httpMethod   = 'GET';
                options.maximumResponses = 1;
                options.filterOptions = {
                    type: ["PositionOfInterest"],
                    territory: ['METROPOLE']
                };
                options.onSuccess = function (response) {
                    console.log(response);
                    functionAssert(response);
                    done();
                };
                options.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };

                Gp.Services.autoComplete(options);
                if (mock) { server.respond(); }
            });
        });

        describe("Test sur les options spécifiques du service", function () {

            // fonction contenant les tests de la reponse
            var functionAssertPOI = function (response) {
                should().exist(response.suggestedLocations);
                expect(response.suggestedLocations).to.be.an("Array");
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
            };

            var functionAssertSA = function (response) {
                should().exist(response.suggestedLocations);
                expect(response.suggestedLocations).to.be.an("Array");
                expect(response.suggestedLocations[0]).to.have.property("classification", 7);
                expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Pierre-du-Regard");
                expect(response.suggestedLocations[0]).to.have.property("fullText", "saint-mande, 61790 Saint-Pierre-du-Regard");
                expect(response.suggestedLocations[0]).to.have.property("kind");  // specifique à POI !
                expect(response.suggestedLocations[0]).to.have.property("poi");   // specifique à POI !
                expect(response.suggestedLocations[0]).to.have.property("postalCode", "61790");
                expect(response.suggestedLocations[0]).to.have.property("street", "saint-mande");
                expect(response.suggestedLocations[0]).to.have.property("position");
                expect(response.suggestedLocations[0].position).to.have.property("x");
                expect(response.suggestedLocations[0].position).to.have.property("y");
            };

            describe("L option \"text\" seulement est renseignée", function() {

                it("text est renseigné, autres paramètres : valeur par défaut", function (done) {
                    // description du test : xhr+json, type=StreetAddress, maximumResponses=10, aucun territoire renseigné
                    var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint%20Mand%C3%A9&type=StreetAddress&terr=&maximumResponses=10";
                    var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":-0.544424,"y":48.84406,"city":"Saint-Pierre-du-Regard","zipcode":"61790","street":"saint-mande","kind":"","fulltext":"saint-mande, 61790 Saint-Pierre-du-Regard","classification":7},{"country":"StreetAddress","x":1.321346,"y":47.848167,"city":"Vievy-le-Rayé","zipcode":"41290","street":"saint-mande","kind":"","fulltext":"saint-mande, 41290 Vievy-le-Rayé","classification":7},{"country":"StreetAddress","x":1.321406,"y":47.848349,"city":"Vievy-le-Rayé","zipcode":"41290","street":"saint mande","kind":"","fulltext":"saint mande, 41290 Vievy-le-Rayé","classification":7}]}'];
                    if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }


                    options.text = "Saint Mandé";
                    options.onSuccess = function (response) {
                        console.log(response);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(3);
                        expect(response.suggestedLocations[0]).to.have.property("classification"); // specifique a POI
                        expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                        expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Pierre-du-Regard");
                        // expect(response.suggestedLocations[0]).to.have.property("fullText", "saint-mande, 61790 Saint-Pierre-du-Regard");
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

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });
            });

            describe("Les options 'text' et 'maximumResponses' sont renseignées", function() {

                it("maximumResponses = 1", function (done) {
                    // description du test : xhr+json, type=StreetAddress, maximumResponses=1, aucun territoire renseigné
                    // Le service repond avec une seule suggestion
                    var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint%20Mand%C3%A9&type=StreetAddress&terr=&maximumResponses=1";
                    var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":-0.544424,"y":48.84406,"city":"Saint-Pierre-du-Regard","zipcode":"61790","street":"saint-mande","kind":"","fulltext":"saint-mande, 61790 Saint-Pierre-du-Regard","classification":7}]}'];
                    if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }

                    options.maximumResponses = 1;
                    options.onSuccess = function (response) {
                        console.log(response);
                        should().exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(1);
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

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });

                it("maximumResponses = 2", function (done) {
                    // description du test : xhr+json, type=StreetAddress, maximumResponses=2, aucun territoire renseigné
                    // Le service repond avec 2 suggestions
                    var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint%20Mand%C3%A9&type=StreetAddress&terr=&maximumResponses=2";
                    var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":-0.544424,"y":48.84406,"city":"Saint-Pierre-du-Regard","zipcode":"61790","street":"saint-mande","kind":"","fulltext":"saint-mande, 61790 Saint-Pierre-du-Regard","classification":7},{"country":"StreetAddress","x":1.321346,"y":47.848167,"city":"Vievy-le-Rayé","zipcode":"41290","street":"saint-mande","kind":"","fulltext":"saint-mande, 41290 Vievy-le-Rayé","classification":7}]}'];
                    if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }

                    options.maximumResponses = 2;
                    options.onSuccess = function (response) {
                        console.log(response);
                        should().exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(2);
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

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });

                it("maximumResponses = 5", function (done) {
                    // description du test : xhr+json, type=StreetAddress, maximumResponses=5, aucun territoire renseigné
                    // Le service repond avec 5 suggestions maximums
                    var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint-Mand&type=StreetAddress&terr=&maximumResponses=5";
                    var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":-0.544424,"y":48.84406,"city":"Saint-Pierre-du-Regard","zipcode":"61790","street":"saint-mande","kind":"","classification":7,"fulltext":"saint-mande, 61790 Saint-Pierre-du-Regard"},{"country":"StreetAddress","x":1.321346,"y":47.848167,"city":"Vievy-le-Rayé","zipcode":"41290","street":"saint-mande","kind":"","classification":7,"fulltext":"saint-mande, 41290 Vievy-le-Rayé"},{"country":"StreetAddress","x":1.321406,"y":47.848349,"city":"Vievy-le-Rayé","zipcode":"41290","street":"saint mande","kind":"","classification":7,"fulltext":"saint mande, 41290 Vievy-le-Rayé"},{"country":"StreetAddress","x":5.910476,"y":43.07929,"city":"Saint-Mandrier-sur-Mer","zipcode":"83430","street":"res de retraite de saint-mandrier","kind":"","classification":7,"fulltext":"res de retraite de saint-mandrier, 83430 Saint-Mandrier-sur-Mer"},{"country":"StreetAddress","x":5.909974,"y":43.078022,"city":"Saint-Mandrier-sur-Mer","zipcode":"83430","street":"rte departementale 18 de saint-mandrier","kind":"","classification":7,"fulltext":"rte departementale 18 de saint-mandrier, 83430 Saint-Mandrier-sur-Mer"}]}'];
                    if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }

                    options.maximumResponses = 5;
                    options.text = "Saint-Mand";
                    options.onSuccess = function (response) {
                        console.log(response);
                        should().exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(5);
                        expect(response.suggestedLocations[0]).to.have.property("classification");
                        expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                        expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Mandrier-sur-Mer");
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

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });
            });

            describe("L'option 'filterOptions' est renseignée (avec maximumResponses=1)", function() {

                it("type = PostionOfInterest", function(done) {
                    // description du test : Le service renvoie une suggestion de type POI
                    var urlType1Get = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint%20Mand%C3%A9&type=PositionOfInterest&terr=&maximumResponses=1";
                    var okResponseType1Json = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":2.424573,"y":48.845726,"city":"Saint-Mandé","zipcode":"94160","street":"IGN Saint-Mandé","kind":"Département","fulltext":"IGN Saint-Mandé, 94160 Saint-Mandé","classification":1}]}'];
                    if (mock) { server.respondWith('GET', urlType1Get, okResponseType1Json); }

                    options.maximumResponses = 1;
                    options.filterOptions = {
                        type: ["PositionOfInterest"]
                    };
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

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });

                it("type = StreetAddress", function(done) {
                    // description du test : Le service renvoie une suggestion de type Adresse
                    var urlType1Get = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint%20Mand%C3%A9&type=StreetAddress&terr=&maximumResponses=1";
                    var okResponseType1Json = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":-0.544424,"y":48.84406,"city":"Saint-Pierre-du-Regard","zipcode":"61790","street":"saint-mande","kind":"","classification":7,"fulltext":"saint-mande, 61790 Saint-Pierre-du-Regard"}]}'];
                    if (mock) { server.respondWith('GET', urlType1Get, okResponseType1Json); }

                    options.maximumResponses = 1;
                    options.filterOptions = {
                        type: ["StreetAddress"]
                    };
                    options.onSuccess = function (response) {
                        console.log(response);
                        should().exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(1);
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

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });

                it("type = PostionOfInterest,StreetAddress (maximumResponses=1)", function(done) {
                    // description du test :  xhr+json, type=PositionOfInterest,StreetAddress, maximumResponses=10, aucun territoire renseigné
                    // Le service renvoie une suggestion de type Adresse ainsi que POI
                    var urlType2Get = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint%20Mand%C3%A9&type=PositionOfInterest,StreetAddress&terr=&maximumResponses=1";
                    var okResponseType2Json = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":2.424573,"y":48.845726,"city":"Saint-Mandé","zipcode":"94160","street":"IGN Saint-Mandé","kind":"Département","fulltext":"IGN Saint-Mandé, 94160 Saint-Mandé","classification":1}]}'];
                    if (mock) { server.respondWith('GET', urlType2Get, okResponseType2Json); }

                    options.maximumResponses = 1;
                    options.filterOptions = {
                        type: ["PositionOfInterest", "StreetAddress"],
                        territory: []
                    };
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

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });

                it("territory = METROPOLE", function(done) {
                    // description du test : xhr+json, type=StreetAddress (default), maximumResponses=1, territory=METROPOLE
                    // Le service renvoie une suggestion de type Adresse sur la métropole
                    var urlTerritoryGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint%20Mand%C3%A9&type=PositionOfInterest&terr=METROPOLE&maximumResponses=1";
                    var okResponseTerritoryJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":2.424573,"y":48.845726,"city":"Saint-Mandé","zipcode":"94160","street":"IGN Saint-Mandé","kind":"Département","fulltext":"IGN Saint-Mandé, 94160 Saint-Mandé","classification":1}]}'];
                    if (mock) { server.respondWith('GET', urlTerritoryGet, okResponseTerritoryJson); }

                    options.maximumResponses = 1;
                    options.filterOptions = {
                        type: ["PositionOfInterest"],
                        territory: ['METROPOLE']
                    };
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

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });

                it("territory = DOMTOM", function(done) {
                    // description du test : xhr+json, type=StreetAddress (default), maximumResponses=1, territory=DOMTOM
                    // Le service renvoie une suggestion de type Adresse sur la DOM TOM
                    var urlTerritoryGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint-Bart&type=PositionOfInterest&terr=DOMTOM&maximumResponses=1";
                    var okResponseTerritoryJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":-62.849438,"y":17.898658,"city":"Saint-Barthélemy","zipcode":"97133","street":"","kind":"Préfecture","classification":2,"fulltext":"97133 Saint-Barthélemy"}]}'];
                    if (mock) { server.respondWith('GET', urlTerritoryGet, okResponseTerritoryJson); }

                    options.text = "Saint-Bart";
                    options.maximumResponses = 1;
                    options.filterOptions = {
                        type: ["PositionOfInterest"],
                        territory: ['DOMTOM']
                    };
                    options.onSuccess = function (response) {
                        console.log(response);
                        should().exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(1);
                        expect(response.suggestedLocations[0]).to.have.property("type", "PositionOfInterest");
                        expect(response.suggestedLocations[0]).to.have.property("classification", 2);
                        expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Barthélemy");
                        expect(response.suggestedLocations[0]).to.have.property("fullText", "97133 Saint-Barthélemy");
                        expect(response.suggestedLocations[0]).to.have.property("postalCode", "97133");
                        expect(response.suggestedLocations[0]).to.have.property("kind", "Préfecture");
                        expect(response.suggestedLocations[0]).to.have.property("position");
                        expect(response.suggestedLocations[0].position).to.have.property("x");
                        expect(response.suggestedLocations[0].position).to.have.property("y");
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });

                it("territory avec code INSEE de commune", function(done) {
                    // description du test : xhr+json, type=StreetAddress (default), maximumResponses=1, territory=94067
                    //  Le service renvoie une suggestion de type Adresse sur la commune
                    var urlTerritoryGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint&type=PositionOfInterest&terr=94067&maximumResponses=1";
                    var okResponseTerritoryJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":2.417883,"y":48.842835,"city":"Saint-Mandé","zipcode":"94160","street":"","kind":"Commune","fulltext":"94160 Saint-Mandé","classification":5}]}'];
                    if (mock) { server.respondWith('GET', urlTerritoryGet, okResponseTerritoryJson); }

                    options.text = "Saint";
                    options.maximumResponses = 1;
                    options.filterOptions = {
                        type: ["PositionOfInterest"],
                        territory: ['94067']
                    };
                    options.onSuccess = function (response) {
                        console.log(response);
                        should().exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(1);
                        expect(response.suggestedLocations[0]).to.have.property("type", "PositionOfInterest");
                        expect(response.suggestedLocations[0]).to.have.property("classification", 5);
                        expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Mandé");
                        expect(response.suggestedLocations[0]).to.have.property("fullText", "94160 Saint-Mandé");
                        expect(response.suggestedLocations[0]).to.have.property("postalCode", "94160");
                        expect(response.suggestedLocations[0]).to.have.property("position");
                        expect(response.suggestedLocations[0].position).to.have.property("x");
                        expect(response.suggestedLocations[0].position).to.have.property("y");
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });

                it("territory avec code INSEE de département", function(done) {
                    // description du test : xhr+json, type=StreetAddress (default), maximumResponses=1, territory=94067
                    //  Le service renvoie une suggestion de type Adresse sur le département
                    var urlTerritoryGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint&type=PositionOfInterest&terr=94&maximumResponses=1";
                    var okResponseTerritoryJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":2.417883,"y":48.842835,"city":"Saint-Mandé","zipcode":"94160","street":"","kind":"Commune","fulltext":"94160 Saint-Mandé","classification":5}]}'];
                    if (mock) { server.respondWith('GET', urlTerritoryGet, okResponseTerritoryJson); }

                    options.text = "Saint";
                    options.maximumResponses = 1;
                    options.filterOptions = {
                        type: ["PositionOfInterest"],
                        territory: ['94']
                    };
                    options.onSuccess = function (response) {
                        console.log(response);
                        should().exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(1);
                        expect(response.suggestedLocations[0]).to.have.property("type", "PositionOfInterest");
                        expect(response.suggestedLocations[0]).to.have.property("classification", 5);
                        expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Mandé");
                        expect(response.suggestedLocations[0]).to.have.property("fullText", "94160 Saint-Mandé");
                        expect(response.suggestedLocations[0]).to.have.property("postalCode", "94160");
                        expect(response.suggestedLocations[0]).to.have.property("position");
                        expect(response.suggestedLocations[0].position).to.have.property("x");
                        expect(response.suggestedLocations[0].position).to.have.property("y");
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };

                    Gp.Services.autoComplete(options);
                    if (mock) { server.respond(); }
                });

            });
        });
    });
});

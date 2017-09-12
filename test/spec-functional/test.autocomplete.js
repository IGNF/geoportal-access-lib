/* global describe, it */

define([
    'gp',
    'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests fonctionnels du Service d'autocompletion : OK --", function () {

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
                // proxyURL: (mock) ? null : "http://localhost/proxy/php/proxy.php?url=",
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
                text: "Brie-Co"
            };
        });
        afterEach(function () {
            if (mock) { server.restore(); }
        });

        describe('Service.autoComplete : SUCCESS', function () {

            describe("Tests sur les options du protocole du service", function () {

                // fonction contenant les tests de la reponse
                var functionAssert = function (response) {
                    should.exist(response.suggestedLocations);
                    expect(response.suggestedLocations).to.be.an("Array");
                    expect(response.suggestedLocations).to.have.length(1);
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
                    var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Brie-Co&type=PositionOfInterest&terr=METROPOLE&maximumResponses=1";
                    var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":2.617131,"y":48.69341,"city":"Brie-Comte-Robert","zipcode":"77170","street":"","kind":"Commune","fulltext":"77170 Brie-Comte-Robert","classification":5}]}'];
                    if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }

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

                describe("L'option 'text' seulement est renseignée", function() {

                    // fonction contenant les tests de la reponse
                    var functionAssert = function (response) {
                        should.exist(response.suggestedLocations);
                        expect(response.suggestedLocations).to.be.an("Array");
                        expect(response.suggestedLocations).to.have.length(2);
                        expect(response.suggestedLocations[0]).to.have.property("classification", 7);
                        expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                        expect(response.suggestedLocations[0]).to.have.property("commune", "Brie");
                        expect(response.suggestedLocations[0]).to.have.property("fullText", "courreste, 09700 Brie");
                        expect(response.suggestedLocations[0]).to.have.property("kind");  // specifique à POI !
                        expect(response.suggestedLocations[0]).to.have.property("poi");   // specifique à POI !
                        expect(response.suggestedLocations[0]).to.have.property("postalCode", "09700");
                        expect(response.suggestedLocations[0]).to.have.property("position");
                        expect(response.suggestedLocations[0].position).to.have.property("x");
                        expect(response.suggestedLocations[0].position).to.have.property("y");
                        expect(response.suggestedLocations[1]).to.have.property("fullText", "la coutensou, 09700 Brie");
                    };

                    it("text est renseigné, autres paramètres : valeur par défaut", function (done) {
                        // description du test : xhr+json, type=StreetAddress, maximumResponses=10, aucun territoire renseigné
                        var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Brie-Co&type=StreetAddress&terr=&maximumResponses=10";
                        var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":1.538295,"y":43.19646,"city":"Brie","zipcode":"09700","street":"courreste","kind":"","fulltext":"courreste, 09700 Brie","classification":7},{"country":"StreetAddress","x":1.509347,"y":43.222904,"city":"Brie","zipcode":"09700","street":"la coutensou","kind":"","fulltext":"la coutensou, 09700 Brie","classification":7}]}'];
                        if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }

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

                describe("Les options 'text' et 'maximumResponses' sont renseignées", function() {

                    it("maximumResponses = 1", function (done) {
                        // description du test : xhr+json, type=StreetAddress, maximumResponses=1, aucun territoire renseigné
                        // Le service repond avec une seule suggestion
                        var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Brie-Co&type=StreetAddress&terr=&maximumResponses=1";
                        var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":1.538295,"y":43.19646,"city":"Brie","zipcode":"09700","street":"courreste","kind":"","fulltext":"courreste, 09700 Brie","classification":7}]}'];
                        if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }

                        options.maximumResponses = 1;
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(1);
                            expect(response.suggestedLocations[0]).to.have.property("classification", 7);
                            expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Brie");
                            expect(response.suggestedLocations[0]).to.have.property("fullText", "courreste, 09700 Brie");
                            expect(response.suggestedLocations[0]).to.have.property("kind");  // specifique à POI !
                            expect(response.suggestedLocations[0]).to.have.property("poi");   // specifique à POI !
                            expect(response.suggestedLocations[0]).to.have.property("postalCode", "09700");
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
                        var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Brie-Co&type=StreetAddress&terr=&maximumResponses=2";
                        var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":1.538295,"y":43.19646,"city":"Brie","zipcode":"09700","street":"courreste","kind":"","fulltext":"courreste, 09700 Brie","classification":7},{"country":"StreetAddress","x":1.509347,"y":43.222904,"city":"Brie","zipcode":"09700","street":"la coutensou","kind":"","fulltext":"la coutensou, 09700 Brie","classification":7}]}'];
                        if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }

                        options.maximumResponses = 2;
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(2);
                            expect(response.suggestedLocations[0]).to.have.property("classification", 7);
                            expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Brie");
                            expect(response.suggestedLocations[0]).to.have.property("fullText", "courreste, 09700 Brie");
                            expect(response.suggestedLocations[0]).to.have.property("kind");  // specifique à POI !
                            expect(response.suggestedLocations[0]).to.have.property("poi");   // specifique à POI !
                            expect(response.suggestedLocations[0]).to.have.property("postalCode", "09700");
                            expect(response.suggestedLocations[0]).to.have.property("position");
                            expect(response.suggestedLocations[0].position).to.have.property("x");
                            expect(response.suggestedLocations[0].position).to.have.property("y");
                            expect(response.suggestedLocations[1]).to.have.property("fullText", "la coutensou, 09700 Brie");
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
                        var urlTypeGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint-M&type=StreetAddress&terr=&maximumResponses=5";
                        var okResponseTypeJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":-63.108217,"y":18.059758,"city":"Saint-Martin","zipcode":"97150","street":"res les marines de saint-martin","kind":"","fulltext":"res les marines de saint-martin, 97150 Saint-Martin","classification":1},{"country":"StreetAddress","x":-63.077066,"y":18.068606,"city":"Saint-Martin","zipcode":"97150","street":"res les villages de saint martin","kind":"","fulltext":"res les villages de saint martin, 97150 Saint-Martin","classification":1},{"country":"StreetAddress","x":2.391558,"y":43.228035,"city":"Carcassonne","zipcode":"11000","street":"saint martin","kind":"","fulltext":"saint martin, 11000 Carcassonne","classification":2},{"country":"StreetAddress","x":-0.781612,"y":48.07246,"city":"Laval","zipcode":"53000","street":"saint martin","kind":"","fulltext":"saint martin, 53000 Laval","classification":2},{"country":"StreetAddress","x":2.395052,"y":43.230007,"city":"Carcassonne","zipcode":"11000","street":"saint martin le haut","kind":"","fulltext":"saint martin le haut, 11000 Carcassonne","classification":2}]}'];
                        if (mock) { server.respondWith('GET', urlTypeGet, okResponseTypeJson); }

                        options.maximumResponses = 5;
                        options.text = "Saint-M";
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(5);
                            expect(response.suggestedLocations[0]).to.have.property("classification", 1);
                            expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Martin");
                            expect(response.suggestedLocations[0]).to.have.property("fullText", "res les marines de saint-martin, 97150 Saint-Martin");
                            expect(response.suggestedLocations[0]).to.have.property("kind");  // specifique à POI !
                            expect(response.suggestedLocations[0]).to.have.property("poi");   // specifique à POI !
                            expect(response.suggestedLocations[0]).to.have.property("postalCode", "97150");
                            expect(response.suggestedLocations[0]).to.have.property("position");
                            expect(response.suggestedLocations[0].position).to.have.property("x");
                            expect(response.suggestedLocations[0].position).to.have.property("y");
                            expect(response.suggestedLocations[2]).to.have.property("fullText", "saint martin, 11000 Carcassonne");
                            expect(response.suggestedLocations[2]).to.have.property("commune", "Carcassonne");
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.autoComplete(options);
                        if (mock) { server.respond(); }
                    });

                    it("maximumResponses est null", function (done) {
                        // description du test : Le service a pour valeur par defaut : 10
                        var urlDefautGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint-M&type=StreetAddress&terr=&maximumResponses=10";
                        var okResponseDefautJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":-63.108217,"y":18.059758,"city":"Saint-Martin","zipcode":"97150","street":"res les marines de saint-martin","kind":"","fulltext":"res les marines de saint-martin, 97150 Saint-Martin","classification":1},{"country":"StreetAddress","x":-63.077066,"y":18.068606,"city":"Saint-Martin","zipcode":"97150","street":"res les villages de saint martin","kind":"","fulltext":"res les villages de saint martin, 97150 Saint-Martin","classification":1},{"country":"StreetAddress","x":2.391558,"y":43.228035,"city":"Carcassonne","zipcode":"11000","street":"saint martin","kind":"","fulltext":"saint martin, 11000 Carcassonne","classification":2},{"country":"StreetAddress","x":-0.781612,"y":48.07246,"city":"Laval","zipcode":"53000","street":"saint martin","kind":"","fulltext":"saint martin, 53000 Laval","classification":2},{"country":"StreetAddress","x":2.395052,"y":43.230007,"city":"Carcassonne","zipcode":"11000","street":"saint martin le haut","kind":"","fulltext":"saint martin le haut, 11000 Carcassonne","classification":2},{"country":"StreetAddress","x":-0.741933,"y":48.076768,"city":"Laval","zipcode":"53000","street":"saint melaine","kind":"","fulltext":"saint melaine, 53000 Laval","classification":2},{"country":"StreetAddress","x":2.353388,"y":43.206953,"city":"Carcassonne","zipcode":"11000","street":"saint michel","kind":"","fulltext":"saint michel, 11000 Carcassonne","classification":2},{"country":"StreetAddress","x":-2.007854,"y":48.645458,"city":"Saint-Malo","zipcode":"35400","street":"r des freres saint-mleux","kind":"","fulltext":"r des freres saint-mleux, 35400 Saint-Malo","classification":3},{"country":"StreetAddress","x":-1.993915,"y":48.651215,"city":"Saint-Malo","zipcode":"35400","street":"av saint-michel","kind":"","fulltext":"av saint-michel, 35400 Saint-Malo","classification":3},{"country":"StreetAddress","x":-1.971685,"y":48.681132,"city":"Saint-Malo","zipcode":"35400","street":"bd saint-michel des sablons","kind":"","fulltext":"bd saint-michel des sablons, 35400 Saint-Malo","classification":3}]}'];
                        if (mock) { server.respondWith('GET', urlDefautGet, okResponseDefautJson); }

                        options.maximumResponses = null;
                        options.text = "Saint-M";
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(10);
                            expect(response.suggestedLocations[0]).to.have.property("classification");
                            expect(response.suggestedLocations[0]).to.have.property("commune");
                            expect(response.suggestedLocations[0]).to.have.property("fullText");
                            expect(response.suggestedLocations[0]).to.have.property("postalCode");
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

                describe("Les options 'text' et 'filterOptions' sont renseignées (et maximumResponses=1)", function() {

                    it("type = PostionOfInterest", function(done) {
                        // description du test : Le service renvoie une suggestion de type POI
                        var urlType1Get = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Brie-Co&type=PositionOfInterest&terr=&maximumResponses=1";
                        var okResponseType1Json = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":2.617131,"y":48.69341,"city":"Brie-Comte-Robert","zipcode":"77170","street":"","kind":"Commune","fulltext":"77170 Brie-Comte-Robert","classification":5}]}'];
                        if (mock) { server.respondWith('GET', urlType1Get, okResponseType1Json); }

                        options.maximumResponses = 1;
                        options.filterOptions = {
                            type: ["PositionOfInterest"]
                        };
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(1);
                            expect(response.suggestedLocations[0]).to.have.property("type", "PositionOfInterest");
                            expect(response.suggestedLocations[0]).to.have.property("classification", 5);
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Brie-Comte-Robert");
                            expect(response.suggestedLocations[0]).to.have.property("fullText");
                            expect(response.suggestedLocations[0]).to.have.property("kind");
                            expect(response.suggestedLocations[0]).to.have.property("poi");
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

                        Gp.Services.autoComplete(options);
                        if (mock) { server.respond(); }
                    });

                    it("type = StreetAddress", function(done) {
                        // description du test : Le service renvoie une suggestion de type Adresse
                        var urlType1Get = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Brie-Co&type=StreetAddress&terr=&maximumResponses=1";
                        var okResponseType1Json = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":1.538295,"y":43.19646,"city":"Brie","zipcode":"09700","street":"courreste","kind":"","fulltext":"courreste, 09700 Brie","classification":7}]}'];
                        if (mock) { server.respondWith('GET', urlType1Get, okResponseType1Json); }

                        options.maximumResponses = 1;
                        options.filterOptions = {
                            type: ["StreetAddress"]
                        };
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(1);
                            expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                            expect(response.suggestedLocations[0]).to.have.property("classification", 7);
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Brie");
                            expect(response.suggestedLocations[0]).to.have.property("fullText", "courreste, 09700 Brie");
                            expect(response.suggestedLocations[0]).to.have.property("kind");
                            expect(response.suggestedLocations[0]).to.have.property("poi");
                            expect(response.suggestedLocations[0]).to.have.property("postalCode", "09700");
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

                    it("type = PostionOfInterest,StreetAddress (maximumResponses=10)", function(done) {
                        // description du test :  xhr+json, type=PositionOfInterest,StreetAddress, maximumResponses=10, aucun territoire renseigné
                        // Le service renvoie une suggestion de type Adresse ainsi que POI
                        var urlType2Get = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Brie-Co&type=PositionOfInterest,StreetAddress&terr=&maximumResponses=10";
                        var okResponseType2Json = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"PositionOfInterest","x":2.617131,"y":48.69341,"city":"Brie-Comte-Robert","zipcode":"77170","street":"","kind":"Commune","fulltext":"77170 Brie-Comte-Robert","classification":5},{"country":"PositionOfInterest","x":1.524793,"y":43.210693,"city":"Brie","zipcode":"09700","street":"coffe","kind":"Lieu-dit habité","fulltext":"coffe, 09700 Brie","classification":6},{"country":"PositionOfInterest","x":-1.559185,"y":47.952603,"city":"Brie","zipcode":"35150","street":"corbe","kind":"Lieu-dit habité","fulltext":"corbe, 35150 Brie","classification":6},{"country":"PositionOfInterest","x":1.538591,"y":43.196392,"city":"Brie","zipcode":"09700","street":"coureste","kind":"Lieu-dit habité","fulltext":"coureste, 09700 Brie","classification":6},{"country":"PositionOfInterest","x":0.219598,"y":45.742083,"city":"Brie","zipcode":"16590","street":"combe du moussy","kind":"Vallée","fulltext":"combe du moussy, 16590 Brie","classification":7},{"country":"StreetAddress","x":1.538295,"y":43.19646,"city":"Brie","zipcode":"09700","street":"courreste","kind":"","fulltext":"courreste, 09700 Brie","classification":7},{"country":"StreetAddress","x":1.509347,"y":43.222904,"city":"Brie","zipcode":"09700","street":"la coutensou","kind":"","fulltext":"la coutensou, 09700 Brie","classification":7}]}'];
                        if (mock) { server.respondWith('GET', urlType2Get, okResponseType2Json); }

                        options.filterOptions = {
                            type: ["PositionOfInterest", "StreetAddress"],
                            territory: []
                        };
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(7);
                            expect(response.suggestedLocations[0]).to.have.property("type", "PositionOfInterest");
                            expect(response.suggestedLocations[0]).to.have.property("classification", 5);
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Brie-Comte-Robert");
                            expect(response.suggestedLocations[0]).to.have.property("fullText");
                            expect(response.suggestedLocations[0]).to.have.property("kind");
                            expect(response.suggestedLocations[0]).to.have.property("poi");
                            expect(response.suggestedLocations[0]).to.have.property("postalCode", "77170");
                            expect(response.suggestedLocations[0]).to.have.property("position");
                            expect(response.suggestedLocations[0].position).to.have.property("x");
                            expect(response.suggestedLocations[0].position).to.have.property("y");
                            expect(response.suggestedLocations[5]).to.have.property("type", "StreetAddress");
                            expect(response.suggestedLocations[5]).to.have.property("postalCode", "09700");
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
                        var urlTerritoryGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Brie-Co&type=StreetAddress&terr=METROPOLE&maximumResponses=1";
                        var okResponseTerritoryJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":1.538295,"y":43.19646,"city":"Brie","zipcode":"09700","street":"courreste","kind":"","fulltext":"courreste, 09700 Brie","classification":7}]}'];
                        if (mock) { server.respondWith('GET', urlTerritoryGet, okResponseTerritoryJson); }

                        options.maximumResponses = 1;
                        options.filterOptions = {
                            territory: ['METROPOLE']
                        };
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(1);
                            expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                            expect(response.suggestedLocations[0]).to.have.property("classification", 7);
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Brie");
                            expect(response.suggestedLocations[0]).to.have.property("fullText");
                            expect(response.suggestedLocations[0]).to.have.property("postalCode", "09700");
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

                    it("territory = DOMTOM", function(done) {
                        // description du test : xhr+json, type=StreetAddress (default), maximumResponses=1, territory=DOMTOM
                        // Le service renvoie une suggestion de type Adresse sur la DOM TOM
                        var urlTerritoryGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint-B&type=StreetAddress&terr=DOMTOM&maximumResponses=1";
                        var okResponseTerritoryJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":55.403586,"y":-20.90288,"city":"Saint-Denis","zipcode":"97400","street":"saint bernard","kind":"","fulltext":"saint bernard, 97400 Saint-Denis","classification":1}]}'];
                        if (mock) { server.respondWith('GET', urlTerritoryGet, okResponseTerritoryJson); }

                        options.maximumResponses = 1;
                        options.filterOptions = {
                            territory: ['DOMTOM']
                        };
                        options.text = "Saint-B";
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(1);
                            expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                            expect(response.suggestedLocations[0]).to.have.property("classification", 1);
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Denis");
                            expect(response.suggestedLocations[0]).to.have.property("fullText", "saint bernard, 97400 Saint-Denis");
                            expect(response.suggestedLocations[0]).to.have.property("postalCode", "97400");
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
                        var urlTerritoryGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=rue&type=StreetAddress&terr=94067&maximumResponses=1";
                        var okResponseTerritoryJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":2.415407,"y":48.83877,"city":"Saint-Mandé","zipcode":"94160","street":"r de l\'abbe pouchard","kind":"","fulltext":"r de l\'abbe pouchard, 94160 Saint-Mandé","classification":5}]}'];
                        if (mock) { server.respondWith('GET', urlTerritoryGet, okResponseTerritoryJson); }

                        options.maximumResponses = 1;
                        options.filterOptions = {
                            territory: ['94067']
                        };
                        options.text = "rue";
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(1);
                            expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                            expect(response.suggestedLocations[0]).to.have.property("classification", 5);
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Mandé");
                            expect(response.suggestedLocations[0]).to.have.property("fullText", "r de l'abbe pouchard, 94160 Saint-Mandé");
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
                        var urlTerritoryGet = "http://wxs.ign.fr/" + myKey + "/ols/apis/completion?gp-access-lib=" + version + "&text=Saint-M&type=StreetAddress&terr=94&maximumResponses=1";
                        var okResponseTerritoryJson = [200, { 'Content-type': 'application/json' }, '{"status":"OK","results":[{"country":"StreetAddress","x":2.47179,"y":48.806838,"city":"Saint-Maur-des-Fossés","zipcode":"94210","street":"prv de saint-maur-creteil","kind":"","fulltext":"prv de saint-maur-creteil, 94210 Saint-Maur-des-Fossés","classification":4}]}'];
                        if (mock) { server.respondWith('GET', urlTerritoryGet, okResponseTerritoryJson); }

                        options.maximumResponses = 1;
                        options.filterOptions = {
                            territory: ['94']
                        };
                        options.text = "Saint-M";
                        options.onSuccess = function (response) {
                            console.log(response);
                            should.exist(response.suggestedLocations);
                            expect(response.suggestedLocations).to.be.an("Array");
                            expect(response.suggestedLocations).to.have.length(1);
                            expect(response.suggestedLocations[0]).to.have.property("type", "StreetAddress");
                            expect(response.suggestedLocations[0]).to.have.property("classification", 4);
                            expect(response.suggestedLocations[0]).to.have.property("commune", "Saint-Maur-des-Fossés");
                            expect(response.suggestedLocations[0]).to.have.property("fullText", "prv de saint-maur-creteil, 94210 Saint-Maur-des-Fossés");
                            expect(response.suggestedLocations[0]).to.have.property("postalCode", "94210");
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
});

define(['chai', 'sinon'], function (chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests fonctionnels : OK --", function () {

        var server;

        before(function () { server = sinon.fakeServer.create(); });
        after(function () { server.restore(); });

        var Services;

        beforeEach(function (done) {
            require(['Formats/XML', 'Services/Services'], function (_XML, _Services) {
                XML = _XML;
                Services = _Services;
                done();
            });
        });

        describe("Suite de tests pour tester le contenu du 'requestBody'", function () {

            var key = "CLE"; // clef API reel : jhyvi0fgmnuxvfv0zjzorvdn
            
            beforeEach(function () {
                
                    // OK reponse du service WPS en json
                    var urlWPost = "http://wxs.ign.fr/" + key + "/alti/wps";
                    var urlW1Post = "http://wxs.ign.fr/CLE1/alti/wps";
                    var urlW21Post = "http://wxs.ign.fr/CLE2.1/alti/wps";
                    var urlW22Post = "http://wxs.ign.fr/CLE2.2/alti/wps";
                    var urlW3Post = "http://wxs.ign.fr/CLE3/alti/wps";
                    var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}'];
                    server.respondWith('POST', urlWPost,   okResponseJson);
                    server.respondWith('POST', urlW1Post,  okResponseJson);
                    server.respondWith('POST', urlW21Post, okResponseJson);
                    server.respondWith('POST', urlW22Post, okResponseJson);
                    server.respondWith('POST', urlW3Post,  okResponseJson);

                });

            // fonction contenant les tests de la reponse
            var functionAssert = function (response) {
                should.exist(response.elevations);
                expect(response.elevations).to.be.an("Array");
                expect(response.elevations).to.have.length(1);
                expect(response.elevations[0]).to.have.property("lon");
                expect(response.elevations[0]).to.have.property("lat");
                expect(response.elevations[0]).to.have.property("z");
                expect(response.elevations[0]).to.have.property("acc");
                expect(response.elevations[0].z).to.equal(103.33);
            };
            // options par defaut (à surcharger)
            var options = {
                apiKey: key,
                serverUrl: null,
                protocol: 'XHR',
                proxyURL: null,
                httpMethod: 'POST',
                timeOut: 10000,
                rawResponse: false,
                onSuccess: function (response) {
                    console.log(response);
                },
                onFailure: function (error) {
                    console.log(error);
                },
                // spécifique au service
                positions: [{ lon: 1.25, lat: 47.48 }],
                outputFormat: 'json',
                sampling: 50,
                api: 'WPS',
                zonly: false
            };

            it("Test 1", function (done) {
                
                options.apiKey = "CLE1";
                options.onSuccess = function (response) {
                    functionAssert(response);
                    done();
                };
                options.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };
                Services.getAltitude(options);
                server.respond();

            });

            describe("Suite de test 2", function () {


                it("Test 2.1", function (done) {
                    
                    options.apiKey = "CLE2.1";
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };
                    Services.getAltitude(options);
                    server.respond();

                });

                it("Test 2.2", function (done) {

                    options.apiKey = "CLE2.2";
                    options.positions = [{ lon: 1.26, lat: 47.49 }];
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };
                    Services.getAltitude(options);
                    server.respond();
                });

            });

            it("Test 3", function (done) {

                options.apiKey = "CLE3";
                options.onSuccess = function (response) {
                    functionAssert(response);
                    done();
                };
                options.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };
                Services.getAltitude(options);
                server.respond();
            });
        });
    });
});

/* global describe, it */

define([
    'gp',
    'chai', 'sinon'], function (Gp, chai, sinon) {

        var assert = chai.assert;
        var expect = chai.expect;
        var should = chai.should();

        describe("-- Tests fonctionnels du Service Altimétrique : OK --", function () {

            var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
            var version = Gp.servicesVersion;

            describe('Service.getAltitude : SUCCESS', function () {

                this.timeout(15000);

                describe("Test sur les options du Protocole", function () {

                    // mock sur XHR
                    var xhr, requests;

                    beforeEach(function () {
                        if (mock) {
                            xhr = sinon.useFakeXMLHttpRequest();
                            requests = [];

                            xhr.onCreate = function (request) {
                                requests.push(request);
                            };
                        }
                    });

                    afterEach(function () {
                        if (mock) {
                            xhr.restore();
                        }
                    });

                    // reponse du service
                    var okResponseXml = '<elevations><elevation><lon>1.25</lon><lat>47.48</lat><z>103.55</z><acc>2.5</acc></elevation></elevations>';
                    var okResponseJson = '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.55,"acc": 2.5}]}';

                    // fonction contenant les tests de la reponse
                    var functionAssert = function (response) {
                        console.log(response);
                        should.exist(response.elevations);
                        expect(response.elevations).to.be.an("Array");
                        expect(response.elevations).to.have.length(1);
                        expect(response.elevations[0]).to.have.property("lon");
                        expect(response.elevations[0]).to.have.property("lat");
                        expect(response.elevations[0]).to.have.property("z");
                        expect(response.elevations[0]).to.have.property("acc");
                        expect(response.elevations[0].z).to.equal(103.55);
                    };
                    // options par defaut (à surcharger)
                    var options = {
                        apiKey: myKey,
                        serverUrl: null,
                        protocol: 'XHR', // à surcharger : JSONP|XHR
                        // proxyURL: (mock) ? null : "spec-functional/proxy/php/proxy.php?url=",
                        httpMethod: 'GET', // à surcharger : GET|POST
                        nocache : true,
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
                        outputFormat: 'json', // à surcharger : json|xml
                        sampling: 0, // à surcharger : 0 ou autre
                        api: 'REST', // à surcharger : REST|WPS
                        zonly: false
                    };


                    it("Appel du service en mode 'XHR'" +
                        " avec la méthode 'GET'" +
                        " avec l'API 'REST'" +
                        " pour un format de sortie en 'json'", function (done) {
                            // description du test
                            // requête GET du service REST en json
                            // reponse en json
                            // var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.json?lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false";

                            options.protocol = 'XHR';
                            options.httpMethod = 'GET';
                            options.outputFormat = 'json';
                            options.api = 'REST';
                            options.onSuccess = function (response) {
                                functionAssert(response);
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.getAltitude(options);

                            if (mock) {
                                requests[0].respond(200, { 'Content-type': 'application/json' }, okResponseJson);
                                // expect(requests[0].requestBody).to.be.equal(null);
                                // expect(requests[0].url).to.be.equal(urlGet);
                            }
                        });

                    it("Appel du service en mode 'XHR'" +
                        " avec la méthode 'POST'" +
                        " avec l'API 'REST'" +
                        " pour un format de sortie en 'json'", function (done) {
                            // description du test
                            // requête POST du service REST en json
                            // reponse en json
                            // l'api ne gère pas le POST : envoie une requête en GET (même résultat que le test précédent)
                            // var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.json?lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false";

                            options.protocol = 'XHR';
                            options.httpMethod = 'POST';
                            options.outputFormat = 'json';
                            options.api = 'REST';
                            options.onSuccess = function (response) {
                                functionAssert(response);
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.getAltitude(options);
                            if (mock) {
                                requests[0].respond(200, { 'Content-type': 'application/json' }, okResponseJson);
                                // expect(requests[0].requestBody).to.be.equal(null);
                                // expect(requests[0].url).to.be.equal(urlGet);
                            }
                        });

                    it("Appel du service en mode 'XHR'" +
                        " avec la méthode 'GET'" +
                        " avec l'API 'REST'" +
                        " pour un format de sortie en 'xml'", function (done) {
                            // description du test
                            // requête GET du service REST en xml
                            // reponse en xml
                            // var urlXGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.xml?lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false";

                            options.protocol = 'XHR';
                            options.httpMethod = 'GET';
                            options.outputFormat = 'xml';
                            options.api = 'REST';
                            options.onSuccess = function (response) {
                                functionAssert(response);
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.getAltitude(options);
                            if (mock) {
                                requests[0].respond(200, { 'Content-type': 'application/xml' }, okResponseXml);
                                // expect(requests[0].requestBody).to.be.equal(null);
                                // expect(requests[0].url).to.be.equal(urlXGet);
                            }
                        });

                    it("Appel du service en mode 'XHR'" +
                        " avec la méthode 'POST'" +
                        " avec l'API 'REST'" +
                        " pour un format de sortie en 'xml'", function (done) {
                            // description du test
                            // requête POST du service REST en xml
                            // reponse en xml
                            /// l'api ne gère pas le POST : envoie une requête en GET (même résultat que le test précédent)
                            //  var urlXGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.xml?lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false";

                            options.protocol = 'XHR';
                            options.httpMethod = 'POST';
                            options.outputFormat = 'xml';
                            options.api = 'REST';
                            options.onSuccess = function (response) {
                                functionAssert(response);
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.getAltitude(options);
                            if (mock) {
                                requests[0].respond(200, { 'Content-type': 'application/xml' }, okResponseXml);
                                // expect(requests[0].requestBody).to.be.equal(null);
                                // expect(requests[0].url).to.be.equal(urlXGet);
                            }
                        });

                    it("Appel du service en mode 'XHR'" +
                        " avec la méthode 'GET'" +
                        " avec l'API 'WPS'" +
                        " pour un format de sortie en 'json'", function (done) {
                            // description du test
                            // requête GET du service WPS en json
                            // reponse en json
                            // var urlWGet = "http://wxs.ign.fr/" + myKey + "/alti/wps?service=WPS&version=1.0.0&rawdataoutput=result&identifier=gs:WPSElevation&request=Execute&datainputs=lon=1.25;lat=47.48;indent=false;crs=CRS:84;zonly=false;format=json";

                            options.protocol = 'XHR';
                            options.httpMethod = 'GET';
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

                            Gp.Services.getAltitude(options);
                            if (mock) {
                                requests[0].respond(200, { 'Content-type': 'application/json' }, okResponseJson);
                                // expect(requests[0].requestBody).to.be.equal(null);
                                // expect(requests[0].url).to.be.equal(urlWGet);
                            }
                        });

                    it("Appel du service en mode 'XHR'" +
                        " avec la méthode 'GET'" +
                        " avec l'API 'WPS'" +
                        " pour un format de sortie en 'xml'", function (done) {
                            // description du test
                            // requête GET du service WPS en xml
                            // reponse en xml
                            // var urlWXGet = "http://wxs.ign.fr/" + myKey + "/alti/wps?service=WPS&version=1.0.0&rawdataoutput=result&identifier=gs:WPSElevation&request=Execute&datainputs=lon=1.25;lat=47.48;indent=false;crs=CRS:84;zonly=false;format=xml";

                            options.protocol = 'XHR';
                            options.httpMethod = 'GET';
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

                            Gp.Services.getAltitude(options);
                            if (mock) {
                                requests[0].respond(200, { 'Content-type': 'application/xml' }, okResponseXml);
                                // expect(requests[0].requestBody).to.be.equal(null);
                                // expect(requests[0].url).to.be.equal(urlWXGet);
                            }
                        });

                    it("Appel du service en mode 'XHR'" +
                        " avec la méthode 'POST'" +
                        " avec l'API 'WPS'" +
                        " pour un format de sortie en 'json'", function (done) {
                            // description du test
                            // requête POST du service WPS en json
                            // reponse en json
                            // var urlWPost = "http://wxs.ign.fr/" + myKey + "/alti/wps";

                            options.protocol = 'XHR';
                            options.httpMethod = 'POST';
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

                            Gp.Services.getAltitude(options);
                            if (mock) {
                                requests[0].respond(200, { 'Content-type': 'application/json' }, okResponseJson);
                                // expect(requests[0].url).to.be.equal(urlWPost);
                            }
                        });

                    it("Appel du service en mode 'XHR'" +
                        " avec la méthode 'POST'" +
                        " avec l'API 'WPS'" +
                        " pour un format de sortie en 'xml'", function (done) {
                            // description du test
                            // requête GET du service WPS en xml
                            // reponse en xml
                            // var urlWXPost = "http://wxs.ign.fr/" + myKey + "/alti/wps";

                            options.protocol = 'XHR';
                            options.httpMethod = 'POST';
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

                            Gp.Services.getAltitude(options);
                            if (mock) {
                                requests[0].respond(200, { 'Content-type': 'application/xml' }, okResponseXml);
                                // expect(requests[0].url).to.be.equal(urlWXPost);
                            }
                        });

                });

                describe("Test sur les options spécifiques du service sur l'api REST, en JSON", function () {
                    var server;

                    beforeEach(function () {
                        if (mock) {
                            server = sinon.fakeServer.create();
                        }
                    });

                    afterEach(function () {
                        if (mock) {
                            server.restore();
                        }
                    });

                    // options par defaut (à surcharger)
                    var options = {
                        apiKey: myKey,
                        serverUrl: null,
                        protocol: 'XHR', // JSONP|XHR
                        // proxyURL: (mock) ? null : "spec-functional/proxy/php/proxy.php?url=",
                        httpMethod: 'GET', // GET|POST
                        timeOut: 10000,
                        nocache : false,
                        rawResponse: false,
                        onSuccess: function (response) {
                            console.log(response);
                        },
                        onFailure: function (error) {
                            console.log(error);
                        },
                        // spécifique au service
                        positions: [{ lon: 1.25, lat: 47.48 }],
                        outputFormat: 'json', // json|xml
                        sampling: null, // non renseigné = appel au service Elevation (pas de profil)
                        api: 'REST', // REST|WPS
                        zonly: false
                    };

                    describe("l'option 'rawResponse' est renseignée", function() {

                        it(" 'rawResponse = true' et 'outputFormat = json' et 'positions = 1 seul point' ", function (done) {
                            // description du test
                            // Le service est du type 'Altitude', et fournit les informations sur le point demandé
                            // la réponse en paramètre de onSuccess est un objet {"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}
                            options.rawResponse = true;

                            var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.json?gp-access-lib=" + version + "&lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false";
                            var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}'];
                            if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                            options.onSuccess = function (response) {
                                console.log(response);
                                should.exist(response.elevations);
                                expect(response.elevations).to.be.an("Array");
                                expect(response.elevations).to.have.length(1);
                                expect(response.elevations[0]).to.have.property("lon");
                                expect(response.elevations[0]).to.have.property("lat");
                                expect(response.elevations[0]).to.have.property("z");
                                expect(response.elevations[0]).to.have.property("acc");
                                // expect(response.elevations[0].z).to.equal(103.33);
                                options.rawResponse = false;
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.getAltitude(options);
                            if (mock) { server.respond(); }
                        })
                    });

                    describe("l'option 'Positions' est renseignée", function() {

                        it("Positions = un seul point", function (done) {
                            // description du test
                            // Le service est du type 'Altitude', et fournit les informations sur le point demandé

                            var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.json?gp-access-lib=" + version + "&lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false";
                            var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}'];
                            if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                            options.onSuccess = function (response) {
                                console.log(response);
                                should.exist(response.elevations);
                                expect(response.elevations).to.be.an("Array");
                                expect(response.elevations).to.have.length(1);
                                expect(response.elevations[0]).to.have.property("lon");
                                expect(response.elevations[0]).to.have.property("lat");
                                expect(response.elevations[0]).to.have.property("z");
                                expect(response.elevations[0]).to.have.property("acc");
                                // expect(response.elevations[0].z).to.equal(103.33);
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.getAltitude(options);
                            if (mock) { server.respond(); }
                        })

                        it("Positions = plusieurs points", function (done) {
                            // description du test
                            // Le service est du type 'Altitude', et fournit une liste d'altitudes échantillonnées
                            options.positions = [{ lon: 1.25, lat: 47.48 }, { lon: 1.26, lat: 47.49 }];

                            var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.json?gp-access-lib=" + version + "&lon=1.25|1.26&lat=47.48|47.49&indent=false&crs='CRS:84'&zonly=false";
                            var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5},{"lon": 1.26,"lat": 47.49,"z": 69.76,"acc": 2.5}]}'];
                            if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                            options.onSuccess = function (response) {
                                console.log(response);
                                should.exist(response.elevations);
                                expect(response.elevations).to.be.an("Array");
                                expect(response.elevations).to.have.length(2);
                                expect(response.elevations[0]).to.have.property("lon");
                                expect(response.elevations[0]).to.have.property("lat");
                                expect(response.elevations[0]).to.have.property("z");
                                expect(response.elevations[0]).to.have.property("acc");
                                // expect(response.elevations[0].z).to.equal(103.33);
                                // expect(response.elevations[1].z).to.equal(69.76);
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.getAltitude(options);
                            if (mock) { server.respond(); }
                        });
                    });

                    describe("Les options 'Positions' et 'Sampling' sont renseignées", function () {

                        describe("Positions = un seul point", function () {

                            var functionResponseAssert = function (response) {
                                console.log(response);
                                should.exist(response.elevations);
                                expect(response.elevations).to.be.an("Array");
                                expect(response.elevations).to.have.length(1);
                                expect(response.elevations[0]).to.have.property("z");
                                // expect(response.elevations[0].z).to.equal(103.33);
                            };

                            // reponse
                            var okResponseJson1 = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}'];

                            it("Sampling = null", function (done) {
                                options.positions = [{ lon: 1.25, lat: 47.48 }];
                                options.sampling = null;
                                options.zonly = false;

                                // description du test
                                // Le service est du type 'Altitude', et fournit une altitude sur le point demandé (sampling inactif)
                                var urlGet2 = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.json?gp-access-lib=" + version + "&lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false";
                                if (mock) { server.respondWith('GET', urlGet2, okResponseJson1); }

                                options.onSuccess = function (response) {
                                    functionResponseAssert(response);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });
                            it("Sampling < 2", function (done) {
                                options.positions = [{ lon: 1.25, lat: 47.48 }];
                                options.sampling = 1;

                                // description du test
                                // Le service est du type 'Altitude', et fournit une altitude sur le point demandé (sampling inactif)
                                var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevationLine.json?gp-access-lib=" + version + "&lon=1.25&lat=47.48&indent=false&crs='CRS:84'&sampling=1";
                                if (mock) { server.respondWith('GET', urlGet, okResponseJson1); }

                                options.onSuccess = function (response) {
                                    functionResponseAssert(response);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                console.log(options);
                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });
                            it("Sampling > 2", function (done) {
                                options.positions = [{ lon: 1.25, lat: 47.48 }];
                                options.sampling = 3;

                                // description du test
                                // Le service est du type 'Altitude', et fournit une altitude sur le point demandé (sampling inactif)
                                var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevationLine.json?gp-access-lib=" + version + "&lon=1.25&lat=47.48&indent=false&crs='CRS:84'&sampling=3";
                                if (mock) { server.respondWith('GET', urlGet, okResponseJson1); }

                                options.onSuccess = function (response) {
                                    functionResponseAssert(response);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });
                        });

                        describe("Positions = plusieurs points", function () {

                            var functionResponseAssert = function(response) {
                                console.log(response);
                                should.exist(response.elevations);
                                expect(response.elevations).to.be.an("Array");
                                expect(response.elevations).to.have.length(2);
                                expect(response.elevations[0]).to.have.property("lon");
                                expect(response.elevations[0]).to.have.property("lat");
                                expect(response.elevations[0]).to.have.property("z");
                                expect(response.elevations[0]).to.have.property("acc");
                                // expect(response.elevations[0].z).to.equal(103.33);
                                expect(response.elevations[1]).to.have.property("z");
                                // expect(response.elevations[1].z).to.equal(69.76);
                            };
                            var functionResponseProfileAssert = function (response) {
                                console.log(response);
                                should.exist(response.elevations);
                                expect(response.elevations).to.be.an("Array");
                                expect(response.elevations).to.have.length(3);
                                expect(response.elevations[0]).to.have.property("lon");
                                expect(response.elevations[0]).to.have.property("lat");
                                expect(response.elevations[0]).to.have.property("z");
                                expect(response.elevations[0]).to.have.property("acc");
                                // expect(response.elevations[0].z).to.equal(103.33);
                                // expect(response.elevations[1].z).to.equal(100.41);
                                // expect(response.elevations[2].z).to.equal(69.76);
                            };

                            it("Sampling = null", function (done) {
                                options.positions = [{ lon: 1.25, lat: 47.48 }, { lon: 1.26, lat: 47.49 }];
                                options.sampling = null;

                                // description du test
                                // Le service est du type 'Altitude', et fournit une liste d'altitude sur les points demandés
                                var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.json?gp-access-lib=" + version + "&lon=1.25|1.26&lat=47.48|47.49&indent=false&crs='CRS:84'&zonly=false";
                                var okResponseJson2 = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5},{"lon": 1.26,"lat": 47.49,"z": 69.76,"acc": 2.5}]}'];
                                if (mock) { server.respondWith('GET', urlGet, okResponseJson2); }

                                options.onSuccess = function (response) {
                                    functionResponseAssert(response);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });

                            it("Sampling = 1", function (done) {
                                options.positions = [{ lon: 1.25, lat: 47.48 }, { lon: 1.26, lat: 47.49 }];
                                options.sampling = 1;

                                // description du test
                                // Le service est du type 'Profile', et fournit une liste d'altitude sur les points demandés (la valeur de sampling (1) est trop faible pour un échantillonnage)
                                var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevationLine.json?gp-access-lib=" + version + "&lon=1.25|1.26&lat=47.48|47.49&indent=false&crs='CRS:84'&sampling=1";
                                var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5},{"lon": 1.26,"lat": 47.49,"z": 69.76,"acc": 2.5}]}'];
                                if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                                options.sampling = 1;
                                options.onSuccess = function (response) {
                                    functionResponseAssert(response);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });

                            it("Sampling = 2", function (done) {
                                options.positions = [{ lon: 1.25, lat: 47.48 }, { lon: 1.26, lat: 47.49 }];
                                options.sampling = 2;

                                // description du test
                                // Le service est du type 'Profile', et fournit une liste d'altitude sur les points demandés (la valeur de sampling (2) est trop faible pour un échantillonnage)
                                var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevationLine.json?gp-access-lib=" + version + "&lon=1.25|1.26&lat=47.48|47.49&indent=false&crs='CRS:84'&sampling=2";
                                var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5},{"lon": 1.26,"lat": 47.49,"z": 69.76,"acc": 2.5}]}'];
                                if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                                options.onSuccess = function (response) {
                                    functionResponseAssert(response);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });

                            it("Sampling > 2", function (done) {
                                // description du test
                                // Le service est du type 'Profile', et fournit une liste d'altitude échantillonnée sur la valeur de sampling demandée
                                var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevationLine.json?gp-access-lib=" + version + "&lon=1.25|1.26&lat=47.48|47.49&indent=false&crs='CRS:84'&sampling=3";
                                var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5},{"lon": 1.25499953,"lat": 47.48500011,"z": 100.41,"acc": 2.5},{"lon": 1.26,"lat": 47.49,"z": 69.76,"acc": 2.5}]}'];
                                if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                                options.sampling = 3;
                                options.onSuccess = function (response) {
                                    functionResponseProfileAssert(response);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });
                        });
                    });

                    describe("Les options 'Positions', 'Sampling' et 'Zonly' sont renseignées", function () {

                        describe("Zonly = true && sampling = null", function () {

                            it("Positions = un seul point", function (done) {
                                options.zonly = true;
                                options.sampling = null;
                                options.positions = [{ lon: 1.25, lat: 47.48 }];

                                // description du test
                                // Le service (type : Altitude) fournit une valeur Z sur le point demandé
                                // le service doit repondre une valeur d'altitude : ex. {"elevations": [103.33]}
                                var urlGet3 = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.json?gp-access-lib=" + version + "&lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=true";
                                var okResponseJson3 = [200, { 'Content-type': 'application/json' }, '{"elevations": [103.33]}'];
                                if (mock) { server.respondWith('GET', urlGet3, okResponseJson3); }

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    should.exist(response.elevations);
                                    expect(response.elevations).to.be.an("Array");
                                    expect(response.elevations).to.have.length(1);
                                    expect(response.elevations[0]).to.have.property("z");
                                    // expect(response.elevations[0].z).to.equal(103.33);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });

                            it("Position = plusieurs points", function (done) {
                                options.zonly = true;
                                options.sampling = null;
                                options.positions = [{ lon: 1.25, lat: 47.48 }, { lon: 1.26, lat: 47.49 }];

                                // description du test
                                // Le service (type : Altitude) fournit une liste de valeurs Z sur les points demandés
                                // le service doit repondre une liste d'altitudes : ex. {"elevations": [103.33, ...]}
                                var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevation.json?gp-access-lib=" + version + "&lon=1.25|1.26&lat=47.48|47.49&indent=false&crs='CRS:84'&zonly=true";
                                var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [103.33, 69.76]}'];
                                if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    should.exist(response.elevations);
                                    expect(response.elevations).to.be.an("Array");
                                    expect(response.elevations).to.have.length(2);
                                    expect(response.elevations[0]).to.have.property("z");
                                    // expect(response.elevations[0].z).to.equal(103.33);
                                    // expect(response.elevations[1].z).to.equal(69.76);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });
                        });

                        describe("Zonly = true && sampling > 2", function () {

                            it("Positions = un seul point", function (done) {
                                options.zonly = true;
                                options.sampling = 3;
                                options.positions = [{ lon: 1.25, lat: 47.48 }];

                                // description du test
                                // Le service (type : Profil) fournit une altitude sur le point demandé (zonly n'est pas pris en compte, et sampling est trop faible (1) pour lancer l'échantillonnage)
                                var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevationLine.json?gp-access-lib=" + version + "&lon=1.25&lat=47.48&indent=false&crs='CRS:84'&sampling=3";
                                var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}'];
                                if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    should.exist(response.elevations);
                                    expect(response.elevations).to.be.an("Array");
                                    expect(response.elevations).to.have.length(1);
                                    expect(response.elevations[0]).to.have.property("z");
                                    // expect(response.elevations[0].z).to.equal(103.33);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });

                            it("Position = plusieurs points", function (done) {
                                options.zonly = true;
                                options.sampling = 3;
                                options.positions = [{ lon: 1.25, lat: 47.48 }, { lon: 1.26, lat: 47.49 }];

                                // description du test
                                // Le service (type : Profile) fournit une liste de points (lon,lat,z) sur un échantillonnage
                                // le service doit repondre une liste de points
                                var urlGet = "http://wxs.ign.fr/" + myKey + "/alti/rest/elevationLine.json?gp-access-lib=" + version + "&lon=1.25|1.26&lat=47.48|47.49&indent=false&crs='CRS:84'&sampling=3";
                                var okResponseJson = [200, { 'Content-type': 'application/json' }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5},{"lon": 1.25499953,"lat": 47.48500011,"z": 100.41,"acc": 2.5},{"lon": 1.26,"lat": 47.49,"z": 69.76,"acc": 2.5}]}'];
                                if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    should.exist(response.elevations);
                                    expect(response.elevations).to.be.an("Array");
                                    expect(response.elevations).to.have.length(3);
                                    expect(response.elevations[0]).to.have.property("lon");
                                    expect(response.elevations[0]).to.have.property("lat");
                                    expect(response.elevations[0]).to.have.property("z");
                                    expect(response.elevations[0]).to.have.property("acc");
                                    // expect(response.elevations[0].z).to.equal(103.33);
                                    // expect(response.elevations[1].z).to.equal(100.41);
                                    // expect(response.elevations[2].z).to.equal(69.76);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.getAltitude(options);
                                if (mock) { server.respond(); }
                            });
                        });
                    });
                });
            });
        });
    });

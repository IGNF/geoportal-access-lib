/* global describe, it */

define([
    'gp',
    'chai', 'sinon',
    'text!../../test/spec-functional/fixtures/autoconf-minify.xml',
    'text!../../test/spec-functional/fixtures/autoconf-beautify.xml',
    'text!../../test/spec-functional/fixtures/autoconf-beautify-light.xml'],
    function (Gp, chai, sinon, autoconfminify, autoconfbeautify, autoconflight) {

        var assert = chai.assert;
        var expect = chai.expect;
        var should = chai.should();

        describe("--- Tests fonctionnels du Service d'autoconfiguration : OK --", function () {

            var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
            var version = Gp.servicesVersion;
            var server;
            before(function () { if (mock) { server = sinon.fakeServer.create(); }});
            after(function () { if (mock) { server.restore(); }});

            describe('Service.getConfig : SUCCESS', function () {

                this.timeout(15000);
                
                describe("Tests sur les options du protocole du service", function () {

                    // fonction contenant les tests de la reponse JSON
                    var functionAssert = function (response) {
                        should.exist(response);
                        expect(response).to.have.property("generalOptions");
                        expect(response).to.have.property("layers");
                        expect(response).to.have.property("territories");
                        expect(response).to.have.property("tileMatrixSets");
                        expect(response).to.have.property("services");
                    };

                    // options à surcharger
                    var options = {
                        apiKey: myKey,     // à surcharger
                        serverUrl: null,   // à surcharger
                        protocol: 'XHR',
                        httpMethod: 'GET', // à surcharger : GET|POST
                        // proxyURL: (mock) ? null : "spec-functional/proxy/php/proxy.php?url=",
                        timeOut: 10000,
                        rawResponse: false,
                        onSuccess: null, // à surcharger
                        onFailure: null  // à surcharger
                        // pas d'options spécifique au service
                    };

                    it("Appel du service avec les options par defaut", function (done) {

                        // FIXME pb de timeout !
                        // this.timeout(15000);
                        // setTimeout(done, 15000);

                        // descriptif du test
                        // reponse du service en xml pour une requête en production (en fonction de myKey)
                        var urlGet = "http://wxs.ign.fr/" + myKey + "/autoconf?gp-access-lib=" + version;
                        var okResponseXml = [200, { 'Content-type': 'application/xml' }, autoconfminify];
                        if (mock) { server.respondWith('GET', urlGet, okResponseXml); }

                        options.httpMethod = "GET";
                        options.onSuccess = function (response) {
                            functionAssert(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.getConfig(options);
                        if (mock) { server.respond(); }
                    });

                    it("MOCK Appel du service en mode 'XHR' avec la méthode 'GET' sur une sortie xml minifiée", function (done) {
                        // descriptif du test
                        // reponse du service en xml 'minify' (uniquement en mode mock !)
                        if (!mock) {
                            console.log("Test uniquement en mode 'mock' !");
                            done();
                        }
                        var url1Get = "http://wxs.ign.fr/CLE1/autoconf?gp-access-lib=" + version;
                        var ok1ResponseXml = [200, { 'Content-type': 'application/xml' }, autoconfminify];
                        server.respondWith('GET', url1Get, ok1ResponseXml);

                        options.serverUrl  = null;
                        options.apiKey     = "CLE1";
                        options.httpMethod = "GET";
                        options.onSuccess = function (response) {
                            functionAssert(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.getConfig(options);
                        server.respond();
                    });

                    it("MOCK Appel du service en mode 'XHR' avec la méthode 'GET' sur une sortie xml indentée", function (done) {
                        // descriptif du test
                        // reponse du service en xml 'beautify' (uniquement en mode mock !)
                        if (!mock) {
                            console.log("Test uniquement en mode 'mock' !");
                            done();
                        }
                        var url2Get = "http://wxs.ign.fr/CLE2/autoconf?gp-access-lib=" + version;
                        var ok2ResponseXml = [200, { 'Content-type': 'application/xml' }, autoconfbeautify];
                        server.respondWith('GET', url2Get, ok2ResponseXml);

                        options.serverUrl  = null;
                        options.apiKey     = "CLE2";
                        options.httpMethod = "GET";
                        options.onSuccess = function (response) {
                            functionAssert(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.getConfig(options);
                        server.respond();
                    });

                    it("Appel du service avec un autoconf local", function (done) {
                        // descriptif du test
                        // reponse du service en xml pour une requête locale
                        var urlLGet = "spec-functional/fixtures/autoconf-beautify-light.xml?gp-access-lib=" + version;
                        var okResponseLightXml = [200, { 'Content-type': 'application/xml' }, autoconflight];
                        if (mock) { server.respondWith('GET', urlLGet, okResponseLightXml); }

                        options.serverUrl  = "spec-functional/fixtures/autoconf-beautify-light.xml";
                        options.apiKey     = null;
                        options.httpMethod = "GET";
                        options.proxyURL   = null;
                        options.onSuccess = function (response) {
                            functionAssert(response);
                            console.log(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.getConfig(options);
                        if (mock) { server.respond(); }
                    });

                    describe("Tests sur les options spécifiques du service", function () {

                        // options par defaut (à surcharger)
                        var options = {
                            apiKey: myKey,
                            serverUrl: null,
                            protocol: 'XHR',
                            // proxyURL: (mock) ? null : "spec-functional/proxy/php/proxy.php?url=",
                            httpMethod: 'GET',
                            timeOut: 10000,
                            rawResponse: false,
                            onSuccess: null, // à surcharger !
                            onFailure: null, // à surcharger !
                            // spécifique au service
                            layerId: ''

                        };

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
                            if (mock) { xhr.restore(); }
                        });

                        xit("L'option 'layerId' est renseignée", function (done) {
                            // descriptif du test
                            // FIXME trouver une reponse autoconf 3D
                            options.layerId = "LAYER";
                            options.onSuccess = function (response) {
                                functionAssert(response);
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.getConfig(options);
                            if (mock) {
                                requests[0].respond(200, { "Content-Type": "application/xml" }, autoconfbeautify);
                                expect(requests[0].url).to.be.equal("http://wxs.ign.fr/CLE/autoconf?gp-access-lib=" + version + "layerId=LAYER");
                            }
                        });
                    });
                });
            });
        });
    });

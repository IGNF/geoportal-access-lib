/**
 * Attention, ce service est en mode bouchon, donc les tests fonctionnels ne
 * sont pas si fonctionnels ;)
 */

define([
    'gp',
    'chai', 'sinon',
    'text!../../test/spec-functional/fixtures/processisocurve-response.xml',
    'text!../../test/spec-functional/fixtures/processisocurve-response.json'
    ],
    function (
        Gp,
        chai, sinon,
        processisocurveResponseXml,
        processisocurveResponseJson) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests fonctionnels du Service de Calcul d’isochrones / isodistances : OK --", function () {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
        var version = Gp.servicesVersion;

        describe('Service.processIsoCurve : SUCCESS', function () {

            describe("Tests sur les options du protocole du service", function () {

                var server;

                before(function () { if (mock) { server = sinon.fakeServer.create(); }});
                after(function () { if (mock) { server.restore(); }});


                // fonction contenant les tests de la reponse
                var functionAssert = function (response) {
                    should.exist(response);
                    expect(response).to.be.an("Object");
                    expect(response).to.have.property("location");
                    expect(response.location).to.be.an("object");
                    expect(response).to.have.deep.property("location.x");
                    expect(response).to.have.deep.property("location.y");
                    expect(response).to.have.property("geometry");
                    expect(response).to.have.property("message");
                    expect(response).to.have.property("srs");
                    expect(response).to.have.property("time");
                };

                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    serverUrl: null,
                    protocol: 'XHR', // à surcharger : JSONP|XHR
                    // proxyURL: (mock) ? null : "http://localhost/proxy/php/proxy.php?url=",
                    httpMethod: 'GET', // à surcharger : GET|POST
                    timeOut: 10000,
                    rawResponse: false,
                    onSuccess: function (response) {
                        console.log(response);
                    },
                    onFailure: function (error) {
                        console.log(error);
                    },
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

                it("Appel du service en mode 'XHR' avec la méthode 'GET' au format de sortie 'json'", function (done) {
                    // description du test
                    //
                    var urlGet  = "http://wxs.ign.fr/" + myKey + "/isochrone/isochrone.json?gp-access-lib=" + version + "&location=2.3242664298058053,48.86118017324745&smoothing=false&holes=false&reverse=false&method=time&time=200&graphName=Voiture&exclusions=Toll;Bridge;Tunnel&srs=EPSG:4326";
                    var okResponseJson = [200, { 'Content-type': 'application/json' }, processisocurveResponseJson];
                    if (mock) { server.respondWith('GET', urlGet, okResponseJson); }

                    options.protocol = 'XHR';
                    options.httpMethod = 'GET';
                    options.outputFormat = 'json';
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };

                    Gp.Services.isoCurve(options);
                    if (mock) { server.respond(); }
                });

                it("Appel du service en mode 'XHR' avec la méthode 'GET' au format de sortie 'xml'", function (done) {
                    // description du test
                    //
                    var urlXGet  = "http://wxs.ign.fr/" + myKey + "/isochrone/isochrone.xml?gp-access-lib=" + version + "&location=2.3242664298058053,48.86118017324745&smoothing=false&holes=false&reverse=false&method=time&time=200&graphName=Voiture&exclusions=Toll;Bridge;Tunnel&srs=EPSG:4326";
                    var okResponseXml = [200, { 'Content-type': 'application/xml' }, processisocurveResponseXml];
                    if (mock) { server.respondWith('GET', urlXGet, okResponseXml); }

                    options.protocol = 'XHR';
                    options.httpMethod = 'GET';
                    options.outputFormat = 'xml';
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };

                    Gp.Services.isoCurve(options);
                    if (mock) { server.respond(); }
                });

                it("Appel du service en mode 'XHR' avec la méthode 'POST' au format de sortie 'json'", function (done) {
                    // description du test
                    //
                    var urlPost = "http://wxs.ign.fr/" + myKey + "/isochrone/isochrone.json?gp-access-lib=" + version;
                    var okResponseJson = [200, { 'Content-type': 'application/json' }, processisocurveResponseJson];
                    if (mock) { server.respondWith('POST', urlPost, okResponseJson); }

                    options.protocol = 'XHR';
                    options.httpMethod = 'POST';
                    options.outputFormat = 'json';
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };

                    Gp.Services.isoCurve(options);
                    if (mock) { server.respond(); }
                });

                it("Appel du service en mode 'XHR' avec la méthode 'POST' au format de sortie 'xml'", function (done) {
                    // description du test
                    //
                    var urlXPost = "http://wxs.ign.fr/" + myKey + "/isochrone/isochrone.xml?gp-access-lib=" + version;
                    var okResponseXml = [200, { 'Content-type': 'application/xml' }, processisocurveResponseXml];
                    if (mock) { server.respondWith('POST', urlXPost, okResponseXml); }

                    options.protocol = 'XHR';
                    options.httpMethod = 'POST';
                    options.outputFormat = 'xml';
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };

                    Gp.Services.isoCurve(options);
                    if (mock) { server.respond(); }
                });
            });

            describe("Test sur les options spécifiques du service", function () {

                // fonction contenant les tests de la reponse
                var functionResponseAssert = function (response) {
                    should.exist(response);
                };

                // fonction contenant les tests de la requête (POST)
                var functionRequestAssert = function (request) {
                    should.exist(request);
                    // parsing du contenu de la requête
                    var hXML = new Gp.Formats.XML();
                    hXML.setXMLString(request);
                    var data = hXML.parse();
                    console.log(data);
                    // TODO expect(data).to.have.property("");
                };

                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    serverUrl: null,
                    protocol: 'XHR',
                    // proxyURL: (mock) ? null : "http://localhost/proxy/php/proxy.php?url=",
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
                    outputFormat: 'json',
                    exclusions: ['Toll', 'Bridge', 'Tunnel'],
                    position: {
                        x: 2.3242664298058053,
                        y: 48.86118017324745
                    },
                    graph: "Voiture", // Pieton
                    method: "time", // distance
                    time: 200, // distance
                    srs: "EPSG:4326",
                    reverse: false,
                    smoothing: false,
                    holes: false
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

                describe("Les options 'position' et 'time|distance' sont renseignées", function() {

                    xit("TODO L'option 'time' est renseignée", function(done) {
                        // description du test :
                    });

                    xit("TODO L'option 'distance' est renseignée", function(done) {
                        // description du test :
                    });

                    xit("TODO time = 0 && distance = 0", function(done) {
                        // description du test :
                    });

                    xit("TODO time = 0 && distance = 0", function(done) {
                        // description du test :
                    });

                    xit("TODO time = 200 && distance = 0", function(done) {
                        // description du test :
                    });

                    xit("TODO time = 200 && distance = 10", function(done) {
                        // description du test :
                    });

                    xit("TODO time = 0 && distance = 10", function(done) {
                        // description du test :
                    });
                });

                describe("Les options 'position' et 'graph' sont renseignées", function() {

                    xit("TODO graph = Voiture", function(done) {
                        // description du test :
                    });

                    xit("TODO graph = Pieton", function(done) {
                        // description du test :
                    });

                    xit("TODO graph par defaut", function(done) {
                        // description du test :
                    });
                });

                describe("Les options 'position' et 'exclusions' sont renseignées", function() {

                    xit("TODO exclusions = Bridge", function(done) {
                        // description du test :
                    });

                    xit("TODO exclusions = Toll", function(done) {
                        // description du test :
                    });

                    xit("TODO exclusions = Tunnel", function(done) {
                        // description du test :
                    });

                    xit("TODO exclusions = Bridge, Toll, Tunnel", function(done) {
                        // description du test :
                    });

                    xit("TODO sans exclusions", function(done) {
                        // description du test :
                    });
                });
            });
        });
    });
});

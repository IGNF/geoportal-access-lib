/**
 * TODO template des tests fonctionnels
 */
define(['chai', 'sinon'], function (chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests fonctionnels du Service SERVICE : OK|NOK|JSONP --", function () {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";

        describe('Service.FUNCTION : SUCCESS|FAILED', function () {

            var Services;
            var XML;

            beforeEach(function (done) {
                require(['Formats/XML', 'Services/Services'], function (_XML, _Services) {
                    XML = _XML;
                    Services = _Services;
                    done();
                });
            });

            describe("Tests sur les options du protocole du service", function () {
                
                // fonction contenant les tests communs de la reponse
                var functionAssert = function (response) {
                    should.exist(response);
                    // TODO 
                    // liste des tests 'assert' sur les clefs/valeurs 
                    // communes sur la reponse de reference 
                };
                
                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    serverUrl: null,
                    protocol: 'XHR',   // à surcharger : JSONP|XHR
                    proxyURL: null,
                    httpMethod: 'GET', // à surcharger : GET|POST ou null
                    timeOut: 10000,
                    rawResponse: false,
                    onSuccess: null,  // à surcharger !
                    onFailure: null,  // à surcharger !
                    // spécifique au service
                    outputFormat: 'json', // à surcharger si disponible
                    api: 'REST'           // à surcharger si disponible
                    // (...)
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
                    if (mock) {
                        xhr.restore();
                    }
                });

                it("Appel du service avec les options par defaut", function (done) {
                    // description du test
                    // TODO
                    //   l'url 
                    //   la reponse du service attendue
                    options.protocol     = 'XHR'; // toujours !
                    options.httpMethod   = null;
                    options.outputFormat = null;
                    options.api          = null;
                    
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };
                    
                    // appel de l'interface du service
                    //  Ex. Services.getAltitude(options);
                    
                    // mock de la reponse du service 
                    //  Ex. statut       : 200
                    //      content type : application/json
                    //      content      : {"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}
                    requests[0].respond(200, { "Content-Type": "application/json" }, '/* le corps de la reponse du service */');
                    
                    // test de validiter du corps de la requête construite par l'API en fonction des options renseignées
                    //  Ex. en POST, on devrait donc avoir le content suivant : 
                    //      <elevations><elevation><lon>1.25</lon><lat>47.48</lat><z>103.33</z><acc>2.5</acc></elevation></elevations>
                    expect(requests[0].requestBody).to.be.equal("/* le corps de la requête  */");
                    
                    // test de validiter de l'url de la requête construite par l'API en fonction des options renseignées
                    // Ex. en mode GET, on devrait donc avoir les clefs/valeurs (KPV) suivantes :
                    //      http://wxs.ign.fr/CLE/alti/rest/elevation.json?lon=1.25&lat=47.48&indent=false&crs='CRS:84'&zonly=false
                    expect(requests[0].url).to.be.equal("/* l'url envoyée au service */");

                });

                it("Appel du service en mode 'XHR'" +
                    " avec la méthode 'POST'" +
                    " avec l'API 'OLS'" +
                    " pour un format de sortie en 'xml'", function () {});

                it("Appel du service en mode 'XHR'" +
                    " avec la méthode 'GET'" +
                    " avec l'API 'OLS'" +
                    " pour un format de sortie en 'xml'", function () {});

                it("Appel du service en mode 'XHR'" +
                    " avec la méthode 'POST'" +
                    " avec l'API 'OLS'" +
                    " pour un format de sortie en 'json'", function () {});

                it("Appel du service en mode 'XHR'" +
                    " avec la méthode 'GET'" +
                    " avec l'API 'OLS'" +
                    " pour un format de sortie en 'json'", function () {});

                it("Appel du service en mode 'XHR'" +
                    " avec la méthode 'POST'" +
                    " avec l'API 'REST'" +
                    " pour un format de sortie en 'xml'", function () {});

                it("Appel du service en mode 'XHR'" +
                    " avec la méthode 'GET'" +
                    " avec l'API 'REST'" +
                    " pour un format de sortie en 'xml'", function () {});

                it("Appel du service en mode 'XHR'" +
                    " avec la méthode 'POST'" +
                    " avec l'API 'REST'" +
                    " pour un format de sortie en 'json'", function () {});

                it("Appel du service en mode 'XHR'" +
                    " avec la méthode 'GET'" +
                    " avec l'API 'REST'" +
                    " pour un format de sortie en 'json'", function () {});
            });

            describe("Tests sur les options spécifiques du service", function () {
                
                // fonction contenant les tests communs de la reponse
                var functionAssert = function (response) {
                    should.exist(response);
                    // TODO 
                    // liste des tests 'assert' sur les clefs/valeurs 
                    // communes
                };
                
                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    serverUrl: null,
                    protocol: 'XHR',
                    proxyURL: null,
                    httpMethod: 'GET', // à surcharger en fonction du service testé
                    timeOut: 10000,
                    rawResponse: false,
                    onSuccess: null,  // à surcharger !
                    onFailure: null,  // à surcharger !
                    // spécifique au service
                    outputFormat: 'json', // à surcharger si disponible 
                    api: 'REST'           // à surcharger si disponible 
                    // (...)
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
                    if (mock) {
                        xhr.restore();
                    }
                });

                it("Options par defaut", function () {});

                it("Option avec le parametre 'param1'", function () {});

                it("Option sans le parametre 'param1'", function () {});

                describe("Option avec le parametre 'param2'", function () {

                    it("valeur du parametre : 'XXXX'", function () {});

                    it("valeur du parametre : 'YYYY'", function () {});

                    it("valeur du parametre : 'null'", function () {});
                });
            });
        });
    });
});

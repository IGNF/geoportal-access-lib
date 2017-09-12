define([
    'gp',
    'chai', 'sinon',
    'text!../../test/spec-functional/fixtures/reversegeocode-response-SA.xml',
    'text!../../test/spec-functional/fixtures/reversegeocode-response-POI.xml',
    'text!../../test/spec-functional/fixtures/reversegeocode-response-SA-POI.xml',
    'text!../../test/spec-functional/fixtures/reversegeocode-response-Parcel.xml',
    'text!../../test/spec-functional/fixtures/reversegeocode-response-BBOX.xml',
    'text!../../test/spec-functional/fixtures/reversegeocode-request.xml'
],
    function (
        Gp,
        chai,
        sinon,
        reverseGeocodeResponseSA,
        reverseGeocodeResponsePOI,
        reverseGeocodeResponseSAPOI,
        reverseGeocodeResponseParcel,
        reverseGeocodeResponseBBOX,
        reverseGeocodeRequest
        ) {
        var assert = chai.assert;
        var expect = chai.expect;
        var should = chai.should();

        describe("-- Tests fonctionnels du Service du Geocodage inverse : OK --", function () {

            var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
            // var server;
            var xhr, requests;
            var options;

            // before(function () { if (mock) { server = sinon.fakeServer.create(); } });
            // after(function () { if (mock) { server.restore(); } });

            before(function () {
                if (mock) {
                    xhr = sinon.useFakeXMLHttpRequest();
                    requests = [];

                    xhr.onCreate = function (request) {
                        requests.push(request);
                    };
                }
                options = {
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
                    position: {
                        y: 2.3242664298058053,
                        x: 48.86118017324745
                    },
                    // returnFreeForm: false,
                    // returnFreeForm: true,
                    // filterOptions: {
                    //     // bbox : { left: 0, right : 1, top : 1, bottom : 0 },
                    //     // circle : { x : 0, y : 0, radius : 100 },
                    //     // polygon  : [{x:0,y:0}, {x:1,y:1}, {x:2,y:2}, {x:3,y:2}, {x:4,y:1}, {x:0,y:0}]
                    //     type: ['PositionOfInterest']
                    //     // type: ['StreetAddress', 'PositionOfInterest']
                    // },
                    // maximumResponses: 25,
                    // srs: 'EPSG:4326'
                };
            });

            after(function () {
                if (mock) {
                    xhr.restore();
                }
            });

            describe('Service.reverseGeocode : SUCCESS', function () {

                describe("Tests sur les options du protocole du service", function () {

                    // fonction contenant les tests de la reponse
                    var functionAssert = function (response) {
                        console.log(response);
                        should.exist(response.locations);
                        expect(response.locations).to.be.an("Array");
                        expect(response.locations).to.have.length(4);
                        expect(response.locations[0]).to.have.property("position");
                        expect(response.locations[0].position).to.be.an("object");
                        expect(response.locations[0]).to.have.deep.property("position.x");
                        expect(response.locations[0]).to.have.deep.property("position.y");
                        expect(response.locations[0]).to.have.property("matchType");
                        expect(response.locations[0]).to.have.property("placeAttributes");
                        expect(response.locations[0].placeAttributes).to.be.an("object");
                        expect(response.locations[0]).to.have.property("searchCenterDistance");
                    };

                    it("Appel du service en mode 'XHR' avec la méthode 'GET' ('OLS')", function (done) {
                        // description du test

                        options.protocol = 'XHR';
                        options.httpMethod = 'GET';
                        options.maximumResponses = 4;
                        options.onSuccess = function (response) {
                            functionAssert(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.reverseGeocode(options);
                        if (mock) {
                            requests[0].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSA);
                        }
                    });

                    it("Appel du service en mode 'XHR' avec la méthode 'POST' ('OLS')", function (done) {
                        // description du test

                        options.protocol = 'XHR';
                        options.httpMethod = 'POST';
                        options.maximumResponses = 4;
                        options.onSuccess = function (response) {
                            functionAssert(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.reverseGeocode(options);
                        if (mock) {
                            requests[1].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSA);
                        }
                    });
                });

                describe("Test sur les options spécifiques du service (mode 'XHR' avec la méthode 'POST', maximumResponses=4)", function () {

                    // fonction contenant les tests de la reponse
                    var functionResponseAssert = function (response) {
                        should.exist(response);
                        should.exist(response.locations);
                        expect(response.locations).to.be.an("Array");
                        expect(response.locations[0]).to.have.property("position");
                        expect(response.locations[0].position).to.be.an("object");
                        expect(response.locations[0]).to.have.deep.property("position.x");
                        expect(response.locations[0]).to.have.deep.property("position.y");
                        expect(response.locations[0]).to.have.property("matchType");
                        expect(response.locations[0]).to.have.property("placeAttributes");
                        expect(response.locations[0].placeAttributes).to.be.an("object");
                        expect(response.locations[0]).to.have.property("searchCenterDistance");
                    };

                    it("L'option 'position' est renseignée : options par defaut", function (done) {

                        options.maximumResponses = 4;
                        options.onSuccess = function (response) {
                            console.log(response);
                            functionResponseAssert(response);
                            expect(response.locations).to.have.length(4);
                            expect(response.locations[0]).to.have.property("type", "StreetAddress");
                            expect(response.locations[0]).to.have.property("matchType", "Street number");
                            expect(response.locations[0].placeAttributes).to.have.property("commune", "Paris");
                            expect(response.locations[0].placeAttributes).to.have.property("street", "qu anatole france");
                            expect(response.locations[1].placeAttributes).to.have.property("street", "r de solferino");
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.reverseGeocode(options);

                        if (mock) {
                            requests[2].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSA);
                        }
                    });

                    describe("Les options 'position' et 'filterOptions' sont renseignées", function () {

                        describe("Le type est defini", function () {

                            it("type par defaut", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'StreetAddress' (défaut)

                                options.filterOptions = {
                                    type: ['StreetAddress']
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations).to.have.length(4);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[0]).to.have.property("matchType", "Street number");
                                    expect(response.locations[0].placeAttributes).to.have.property("commune", "Paris");
                                    expect(response.locations[0].placeAttributes).to.have.property("street", "qu anatole france");
                                    expect(response.locations[1].placeAttributes).to.have.property("street", "r de solferino");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[3].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSA);
                                }
                            });

                            it("type = StreetAddress", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'StreetAddress'

                                options.filterOptions = {
                                    type: ['StreetAddress']
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations).to.have.length(4);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[0]).to.have.property("matchType", "Street number");
                                    expect(response.locations[0].placeAttributes).to.have.property("commune", "Paris");
                                    expect(response.locations[0].placeAttributes).to.have.property("street", "qu anatole france");
                                    expect(response.locations[1].placeAttributes).to.have.property("street", "r de solferino");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[4].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSA);
                                }
                            });

                            it("type = PositionOfInterest", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'PositionOfInterest'

                                options.filterOptions = {
                                    type: ['PositionOfInterest']
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations).to.have.length(4);
                                    expect(response.locations[0]).to.have.property("type", "PositionOfInterest");
                                    expect(response.locations[0]).to.have.property("matchType", "City");
                                    expect(response.locations[0].placeAttributes).to.have.property("commune", "Paris");
                                    expect(response.locations[0].placeAttributes).to.have.property("nature", "Capitale d'état");
                                    expect(response.locations[1]).to.have.property("type", "PositionOfInterest");
                                    expect(response.locations[1].placeAttributes).to.have.property("nature", "Région");
                                    expect(response.locations[2]).to.have.property("type", "PositionOfInterest");
                                    expect(response.locations[2].placeAttributes).to.have.property("nature", "Département");
                                    expect(response.locations[3]).to.have.property("type", "PositionOfInterest");
                                    expect(response.locations[3].placeAttributes).to.have.property("nature", "Pont");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[5].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponsePOI);
                                }
                            });

                            it("type = CadastralParcel", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'CadastralParcel'

                                options.filterOptions = {
                                    type: ['CadastralParcel']
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations).to.have.length(4);
                                    expect(response.locations[0]).to.have.property("type", "CadastralParcel");
                                    expect(response.locations[0].placeAttributes).to.have.property("municipality", "Paris");
                                    expect(response.locations[0].placeAttributes).to.have.property("cadastralParcel", "75056107AP0022");
                                    expect(response.locations[1]).to.have.property("type", "CadastralParcel");
                                    expect(response.locations[1].placeAttributes).to.have.property("cadastralParcel", "75056107AP0020");
                                    expect(response.locations[2]).to.have.property("type", "CadastralParcel");
                                    expect(response.locations[2].placeAttributes).to.have.property("cadastralParcel", "75056107AP0021");
                                    expect(response.locations[3]).to.have.property("type", "CadastralParcel");
                                    expect(response.locations[3].placeAttributes).to.have.property("cadastralParcel", "75056107AP0064");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[6].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseParcel);
                                }
                            });

                            it("type = StreetAddress, PositionOfInterest", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'StreetAddress', et 'PositionOfInterest'

                                options.filterOptions = {
                                    type: ['StreetAddress', 'PositionOfInterest']
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations).to.have.length(4);
                                    expect(response.locations[0]).to.have.property("type", "PositionOfInterest");
                                    expect(response.locations[1]).to.have.property("type", "PositionOfInterest");
                                    expect(response.locations[2]).to.have.property("type", "PositionOfInterest");
                                    expect(response.locations[3]).to.have.property("type", "StreetAddress");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[7].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSAPOI);
                                }
                            });

                        });

                        describe("un filtre géométrique est défini", function() {
                            it("une emprise de type 'bbox' est definie", function (done) {
                                // description du test : on spécifie une enveloppe rectangulaire (bbox)

                                options.position = {
                                    y: 2.3241667,
                                    x: 48.8033333
                                };
                                options.filterOptions = {
                                    bbox : { left: 2.32, right : 2.33, top : 48.8, bottom : 48.81 }
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations).to.have.length(4);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[0].placeAttributes).to.have.property("department", "92");
                                    expect(response.locations[0].placeAttributes).to.have.property("commune", "Bagneux");
                                    expect(response.locations[0].placeAttributes).to.have.property("number", "52");
                                    expect(response.locations[1]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[1].placeAttributes).to.have.property("number", "58");
                                    expect(response.locations[2]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[2].placeAttributes).to.have.property("number", "48");
                                    expect(response.locations[3]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[3].placeAttributes).to.have.property("number", "60");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[8].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseBBOX);
                                }
                            });

                            it("une emprise de type 'circle' est definie", function (done) {
                                // description du test : on spécifie une enveloppe rectangulaire (bbox)

                                options.position = {
                                    y: 2.3241667,
                                    x: 48.8033333
                                };
                                options.filterOptions = {
                                    circle : { x : 48.8033333, y : 2.3241667, radius : 100 },
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations).to.have.length(4);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[0].placeAttributes).to.have.property("department", "92");
                                    expect(response.locations[0].placeAttributes).to.have.property("commune", "Bagneux");
                                    expect(response.locations[0].placeAttributes).to.have.property("number", "52");
                                    expect(response.locations[1]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[1].placeAttributes).to.have.property("number", "58");
                                    expect(response.locations[2]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[2].placeAttributes).to.have.property("number", "48");
                                    expect(response.locations[3]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[3].placeAttributes).to.have.property("number", "60");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[9].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseBBOX);
                                }
                            });

                            xit("TODO une emprise de type 'polygon' est definie", function (done) {
                                // description du test :
                            });
                        });

                    });
                });
            });
        });
    });

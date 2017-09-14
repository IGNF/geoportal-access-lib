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
        reverseGeocodeRequest // TODO tester la construction de la requête !
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

            var functionAssertCommon = function (response) {
                console.log(response);
                should.exist(response.locations);
                expect(response.locations).to.be.an("Array");
                // expect(response.locations).to.have.length(1);
                expect(response.locations[0]).to.have.property("position");
                expect(response.locations[0].position).to.be.an("object");
                expect(response.locations[0]).to.have.deep.property("position.x");
                expect(response.locations[0]).to.have.deep.property("position.y");
                expect(response.locations[0]).to.have.property("matchType");
                expect(response.locations[0]).to.have.property("placeAttributes");
                expect(response.locations[0].placeAttributes).to.be.an("object");
                expect(response.locations[0]).to.have.property("searchCenterDistance");
            };

            var functionAssertPOI  = function (response) {
                console.log(response);
                should.exist(response.locations);
                expect(response.locations).to.be.an("Array");
                expect(response.locations[0]).to.have.property("type", "PositionOfInterest");
                expect(response.locations[0]).to.have.property("matchType", "City");
                expect(response.locations[0].placeAttributes).to.have.property("commune");
                expect(response.locations[0].placeAttributes).to.have.property("nature");
                expect(response.locations[0].placeAttributes).to.have.property("department");
                expect(response.locations[0].placeAttributes).to.have.property("insee");
                expect(response.locations[0].placeAttributes).to.have.property("municipality");
                expect(response.locations[0].placeAttributes).to.have.property("importance");
                expect(response.locations[0].placeAttributes).to.have.property("postalCode");
                expect(response.locations[0].placeAttributes).to.have.property("insee");
                expect(response.locations[0].placeAttributes).to.have.property("territory");
                expect(response.locations[0].placeAttributes).to.have.property("bbox");
            };

            var functionAssertCADASTRAL  = function (response) {
                console.log(response);
                should.exist(response.locations);
                expect(response.locations).to.be.an("Array");
                expect(response.locations[0]).to.have.property("type", "CadastralParcel");
                expect(response.locations[0]).to.have.property("matchType", null);
                expect(response.locations[0].placeAttributes).to.have.property("commune");
                expect(response.locations[0].placeAttributes).to.have.property("number");
                expect(response.locations[0].placeAttributes).to.have.property("department");
                expect(response.locations[0].placeAttributes).to.have.property("insee");
                expect(response.locations[0].placeAttributes).to.have.property("municipality");
                expect(response.locations[0].placeAttributes).to.have.property("absorbedCity");
                expect(response.locations[0].placeAttributes).to.have.property("insee");
                expect(response.locations[0].placeAttributes).to.have.property("arrondissement");
                expect(response.locations[0].placeAttributes).to.have.property("origin");
                expect(response.locations[0].placeAttributes).to.have.property("section");
                expect(response.locations[0].placeAttributes).to.have.property("sheet");


            };

            var functionAssertSA = function (response) {
                console.log(response);
                should.exist(response.locations);
                expect(response.locations).to.be.an("Array");
                expect(response.locations[0]).to.have.property("type", "StreetAddress");
                expect(response.locations[0]).to.have.property("matchType", "Street number");
                expect(response.locations[0].placeAttributes).to.have.property("commune");
                expect(response.locations[0].placeAttributes).to.have.property("street");
                expect(response.locations[0].placeAttributes).to.have.property("department");
                expect(response.locations[0].placeAttributes).to.have.property("insee");
                expect(response.locations[0].placeAttributes).to.have.property("municipality");
                expect(response.locations[0].placeAttributes).to.have.property("number");
                expect(response.locations[0].placeAttributes).to.have.property("postalCode");
                expect(response.locations[0].placeAttributes).to.have.property("quality");
                expect(response.locations[0].placeAttributes).to.have.property("territory");
                expect(response.locations[0].placeAttributes).to.have.property("bbox");
            };

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
                        x: 2.35,
                        y: 48.86
                    },
                    // maximumResponses: 25,
                    // srs: 'EPSG:4326',
                    // filterOptions: {
                        // bbox : { left: 0, right : 1, top : 1, bottom : 0 },
                        // circle : { x : 0, y : 0, radius : 100 },
                        // polygon  : [{x:0,y:0}, {x:1,y:1}, {x:2,y:2}, {x:3,y:2}, {x:4,y:1}, {x:0,y:0}]
                        // type: ['PositionOfInterest']
                    // }
                };
            });

            after(function () {
                if (mock) {
                    xhr.restore();
                }
            });

            describe('Service.reverseGeocode : SUCCESS', function () {

                describe("Tests sur les options du protocole du service", function () {

                    it("Appel du service en mode 'XHR' avec la méthode 'GET' ('OLS')", function (done) {
                        // description du test

                        options.protocol = 'XHR';
                        options.httpMethod = 'GET';
                        options.onSuccess = function (response) {
                            functionAssertCommon(response);
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

                    xit("Appel du service en mode 'XHR' avec la méthode 'POST' ('OLS')", function (done) {
                        // description du test

                        options.protocol = 'XHR';
                        options.httpMethod = 'POST';
                        options.onSuccess = function (response) {
                            functionAssertCommon(response);
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

                describe("Test sur les options spécifiques du service", function () {

                    it("L'option 'position' est renseignée : options par defaut", function (done) {

                        options.onSuccess = function (response) {
                            console.log(response);
                            functionAssertCommon(response);
                            functionAssertSA(response);
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

                    it("L'option 'srs' est renseignée : EPSG:4326", function (done) {

                        options.srs = "EPSG:4326";
                        options.position = {
                            y: 2.34,
                            x: 48.85
                        };
                        options.onSuccess = function (response) {
                            console.log(response);
                            functionAssertCommon(response);
                            functionAssertSA(response);
                            done();
                        };
                        options.onFailure
                         = function (error) {
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.reverseGeocode(options);

                        if (mock) {
                            requests[3].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSA);
                        }
                    });

                    it("L'option 'maximumResponses' est renseignée : 1", function (done) {

                        options.maximumResponses = 1;
                        options.onSuccess = function (response) {
                            console.log(response);
                            functionAssertCommon(response);
                            functionAssertSA(response);
                            expect(response.locations).to.have.length(1);
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

                    it("On tape sur Paris !", function (done) {

                        options.maximumResponses = 1;
                        options.filterOptions = {
                            type: ['PositionOfInterest']
                        };
                        options.onSuccess = function (response) {
                            console.log(response);
                            functionAssertCommon(response);
                            functionAssertPOI(response);
                            expect(response.locations).to.have.length(1);
                            expect(response.locations[0].placeAttributes).to.have.property("commune", "Paris");
                            expect(response.locations[0].placeAttributes).to.have.property("nature", "Capitale d'état");
                            expect(response.locations[0].placeAttributes).to.have.property("insee", "75056");
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

                    describe("L'option 'filterOptions' est renseignée", function () {

                        describe("Le type est defini", function () {

                            it("type par defaut", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'StreetAddress' (défaut)

                                options.onSuccess = function (response) {
                                    functionAssertCommon(response);
                                    functionAssertSA(response);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[6].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSA);
                                }
                            });

                            it("type = StreetAddress", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'StreetAddress'

                                options.filterOptions = {
                                    type: ['StreetAddress']
                                };

                                options.onSuccess = function (response) {
                                    functionAssertCommon(response);
                                    functionAssertSA(response);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[7].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSA);
                                }
                            });

                            it("type = PositionOfInterest", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'PositionOfInterest'

                                options.filterOptions = {
                                    type: ['PositionOfInterest']
                                };

                                options.onSuccess = function (response) {
                                    functionAssertCommon(response);
                                    functionAssertPOI(response);
                                    expect(response.locations[0]).to.have.property("type", "PositionOfInterest");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[8].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponsePOI);
                                }
                            });

                            it("type = CadastralParcel", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'CadastralParcel'

                                options.filterOptions = {
                                    type: ['CadastralParcel']
                                };

                                options.onSuccess = function (response) {
                                    functionAssertCommon(response);
                                    functionAssertCADASTRAL(response);
                                    expect(response.locations[0]).to.have.property("type", "CadastralParcel");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[9].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseParcel);
                                }
                            });

                            it("type = StreetAddress,PositionOfInterest", function (done) {
                                // description du test : on ne cherche que des géolocalisants de type 'StreetAddress', et 'PositionOfInterest'

                                options.filterOptions = {
                                    type: ['StreetAddress', 'PositionOfInterest']
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionAssertCommon(response);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[10].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseSAPOI);
                                }
                            });

                        });

                        describe("un filtre géométrique est défini", function() {

                            it("une emprise de type 'bbox' est definie", function (done) {
                                // description du test : on spécifie une enveloppe rectangulaire (bbox)

                                options.filterOptions = {
                                    bbox : { left: 2.30, right : 2.33, top : 48.9, bottom : 48.8 }
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionAssertCommon(response);
                                    functionAssertSA(response);
                                    // expect(response.locations).to.have.length(25);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[11].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseBBOX);
                                }
                            });

                            it("une emprise de type 'circle' est definie", function (done) {
                                // description du test : on spécifie une enveloppe rectangulaire (bbox)

                                options.filterOptions = {
                                    circle : { y : 48.86, x : 2.32, radius : 100 }
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionAssertCommon(response);
                                    functionAssertSA(response);
                                    // expect(response.locations).to.have.length(25);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.reverseGeocode(options);

                                if (mock) {
                                    requests[12].respond(200, { "Content-Type": "application/xml" }, reverseGeocodeResponseBBOX);
                                }
                            });

                            xit("une emprise de type 'polygon' est definie", function (done) {
                                // description du test :
                            });
                        });

                    });
                });
            });
        });
    });

/* global describe, it */
define([
    'gp',
    'chai', 'sinon',
    'text!../../test/spec-functional/fixtures/geocode-response.xml',
    'text!../../test/spec-functional/fixtures/geocode-response-StreetAddress.xml',
    'text!../../test/spec-functional/fixtures/geocode-response-POI.xml',
    'text!../../test/spec-functional/fixtures/geocode-response-Parcel.xml',
    'text!../../test/spec-functional/fixtures/geocode-response-SA-POI.xml',
    'text!../../test/spec-functional/fixtures/geocode-response-structured-location.xml',
    'text!../../test/spec-functional/fixtures/geocode-response-freeform.xml',
    'text!../../test/spec-functional/fixtures/geocode-request.xml'
],
    function (
        Gp, chai, sinon,
        geocodeResponse,
        geocodeResponseSA,
        geocodeResponsePOI,
        geocodeResponseParcel,
        geocodeResponseSA_POI,
        geocodeResponseStructuredLocation,
        geocodeResponseFreeform,
        geocodeRequest
    ) {

        var assert = chai.assert;
        var expect = chai.expect;
        var should = chai.should();

        describe("-- Tests fonctionnels du Service de Geocodage direct : OK --", function () {

            var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
            var version = Gp.servicesVersion;

            var options = {
                apiKey: myKey,
                serverUrl: null,
                protocol: 'XHR',
                // proxyURL: (mock) ? null : "spec-functional/proxy/php/proxy.php?url=",
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
                location: "2 avenue pasteur, Saint-Mandé"
                // returnFreeForm: false,
                // filterOptions: {
                //     // bbox : { left: 0, right : 1, top : 1, bottom : 0 },
                //     // circle : { x : 0, y : 0, radius : 100 },
                //     // polygon  : [{x:0,y:0}, {x:1,y:1}, {x:2,y:2}, {x:3,y:2}, {x:4,y:1}, {x:0,y:0}]
                //     type: ['PositionOfInterest']
                //     // type: ['StreetAddress', 'PositionOfInterest']
                // },
                // maximumResponses: 1,
                // srs: 'EPSG:4326'
            };

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
                expect(response.locations[0]).to.have.property("type");
                expect(response.locations[0]).to.have.property("accuracy");
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
                // expect(response.locations[0].placeAttributes).to.have.property("arrondissement");
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

            describe('Service.geocode : SUCCESS', function () {

                this.timeout(15000);

                describe("Tests sur les options du protocole du service", function () {

                    it("Appel du service en mode 'XHR' avec la méthode 'GET' ('OLS')", function (done) {
                        // description du test : encodage de la requête xml dans l'url

                        // FIXME renvoie un 404 !
                        // le param 'requestID' de la lib WPS n'est pas parametrable dans l'API.
                        // De plus, il est calculé à la volé !
                        // Il est donc difficile de comparer les urls attendues et construites...
                        // Comment le desactiver à travers cette API ?
                        // ou l'utilisation de 'server.respondWith(method, urlRegExp, response)'

                        options.protocol = 'XHR';
                        options.httpMethod = 'GET';
                        options.onSuccess = function (response) {
                            console.log("response XHR GET : ",response);
                            functionAssertCommon(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log("MyConsole", error);
                            done(error);
                        };

                        Gp.Services.geocode(options);

                        if (mock) {
                            requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                        }
                    });

                    xit("Appel du service en mode 'XHR' avec la méthode 'POST' ('OLS')", function (done) {
                        // FIXME description du test
                        // mode POST en 405 Method Not Allowed !?

                        options.protocol = 'XHR';
                        options.httpMethod = 'POST';
                        options.onSuccess = function (response) {
                            console.log("response XHR POST : ",response);
                            functionAssertCommon(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log("MyConsole", error);
                            done(error);
                        };

                        Gp.Services.geocode(options);

                        if (mock) {
                            requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                        }
                    });
                });

                describe("Test sur les options spécifiques du service", function () {

                    describe("L'option 'location' est renseignée",  function () {

                        it("location dite 'libre' : chaîne de caractères", function (done) {
                            // description du test : envoi d'une requête GET avec freeFormAddress="Saint-Mandé"

                            options.httpMethod = "GET";
                            options.location = "2 avenue pasteur, saint-mandé";
                            options.onSuccess = function (response) {
                                console.log(response);
                                functionAssertCommon(response);
                                functionAssertSA(response);
                                expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                expect(response.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");
                                expect(response.locations[0].placeAttributes).to.have.property("department", "94");
                                expect(response.locations[0].placeAttributes).to.have.property("postalCode", "94160");
                                expect(response.locations[0].placeAttributes).to.have.property("number", "2");
                                expect(response.locations[0].placeAttributes).to.have.property("street", "av pasteur");
                                expect(response.locations[0]).to.have.property("matchType", "Street number");
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.geocode(options);

                            if (mock) {
                                requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                            }
                        });

                        it("location dite 'structurée' : objet", function (done) {
                            // description du test : envoi d'une requête xml avec une adresse structurée, en POST

                            options.location = {
                                number: 2,
                                street: "avenue pasteur",
                                city: "Saint-Mandé",
                                postalCode: 94166
                            };
                            options.onSuccess = function (response) {
                                console.log(response);
                                functionAssertCommon(response);
                                functionAssertSA(response);
                                expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                expect(response.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");
                                expect(response.locations[0].placeAttributes).to.have.property("department", "94");
                                expect(response.locations[0].placeAttributes).to.have.property("postalCode", "94160");
                                expect(response.locations[0].placeAttributes).to.have.property("street", "av pasteur");
                                expect(response.locations[0]).to.have.property("matchType", "Street number");
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.geocode(options);

                            if (mock) {
                                requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseStructuredLocation);
                            }
                        });
                    });

                    describe("L'option 'filterOptions' est renseignée", function () {

                        describe("Le type est defini", function () {

                            it("type par défaut", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "StreetAddress" (défaut)

                                options.filterOptions = {
                                    type : ""
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionAssertCommon(response);
                                    functionAssertSA(response);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.geocode(options);

                                if (mock) {
                                    requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                                }
                            });

                            it("type = StreetAddress", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "StreetAddress"

                                options.filterOptions = {
                                    type : "StreetAddress"
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionAssertCommon(response);
                                    functionAssertSA(response);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.geocode(options);

                                if (mock) {
                                    requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                                }
                            });

                            it("type = PostionOfInterest", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "PositionOfInterest"

                                options.filterOptions = {
                                    type : "PositionOfInterest"
                                };

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionAssertCommon(response);
                                    functionAssertPOI(response);
                                    expect(response.locations[0]).to.have.property("type", "PositionOfInterest");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.geocode(options);

                                if (mock) {
                                    requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponsePOI);
                                }
                            });

                            it("type = CadastralParcel", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "CadastralParcel"

                                options.filterOptions = {
                                    type : "CadastralParcel"
                                };
                                options.location = "94001000AC0101";
                                options.httpMethod = "GET";
                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionAssertCommon(response);
                                    functionAssertCADASTRAL(response);
                                    expect(response.locations[0]).to.have.property("type", "CadastralParcel");
                                    expect(response.locations[0].placeAttributes).to.have.property("cadastralParcel", "94001000AC0101");
                                    expect(response.locations[0].placeAttributes).to.have.property("commune", "001");
                                    expect(response.locations[0].placeAttributes).to.have.property("department", "94");
                                    expect(response.locations[0].placeAttributes).to.have.property("municipality", "Ablon-sur-Seine");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.geocode(options);

                                if (mock) {
                                    requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseParcel);
                                }
                            });

                            xit("type = Administratif", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "Administratif"
                            });

                            it("type = StreetAddress, PostionOfInterest (maximumResponses=2)", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "StreetAddress" ou "PositionOfInterest"

                                options.filterOptions = {
                                    type : ["StreetAddress", "PositionOfInterest"]
                                };
                                options.location = "Saint Mandé";
                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionAssertCommon(response);
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.geocode(options);

                                if (mock) {
                                    requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA_POI);
                                }
                            });

                            it("une emprise de type 'bbox' est definie", function (done) {
                                // description du test : on restreint la recherche à une emprise donnée,
                                // on cherche des résultats de type "StreetAddress"

                                options.filterOptions = {
                                    bbox : {
                                        left: 2.35,
                                        right : 2.47,
                                        top : 48.86,
                                        bottom : 48.80
                                    }
                                };
                                options.location = "2 avenue pasteur, Saint-Mandé";
                                options.maximumResponses = 1;

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionAssertCommon(response);
                                    functionAssertSA(response);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.geocode(options);

                                if (mock) {
                                    requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                                }
                            });

                        });

                        describe("Des filtres sont definis", function () {

                            describe("filtres attributaires généraux", function() {

                                it("filtre = 'insee'", function (done) {
                                    // description du test : on restreint la recherche à un code insee donné,
                                    // on cherche des résultats de type "StreetAddress"

                                    options.filterOptions = {
                                        type : ["PositionOfInterest"],
                                        insee: "94067"
                                    };
                                    options.httpMethod = 'GET';
                                    options.location = "Saint-Mande";
                                    options.maximumResponses = 1;

                                    options.onSuccess = function (response) {
                                        console.log(response);
                                        functionAssertCommon(response);
                                        functionAssertPOI(response);
                                        expect(response.locations[0]).to.have.property("type", "PositionOfInterest");
                                        expect(response.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");
                                        expect(response.locations[0].placeAttributes).to.have.property("department", "94");
                                        expect(response.locations[0].placeAttributes).to.have.property("postalCode", "94160");
                                        expect(response.locations[0]).to.have.property("matchType", "City");
                                        done();
                                    };
                                    options.onFailure = function (error) {
                                        console.log(error);
                                        done(error);
                                    };

                                    Gp.Services.geocode(options);

                                    if (mock) {
                                        requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponsePOI);
                                    }
                                });
                                xit("filtre = 'department'", function (done) {
                                    // description du test :
                                });
                                xit("filtre = 'municipality'", function (done) {
                                    // description du test :
                                });
                                xit("filtre = 'accuracy'", function (done) {
                                    // description du test :
                                });
                                xit("filtre = 'matchType'", function (done) {
                                    // description du test :
                                });
                            })

                            describe("filtres attributaires de type 'StreetAddress'", function() {
                                xit("filtre = 'number' ", function (done) {
                                    // description du test :
                                });
                                xit("filtre = 'street'", function (done) {
                                    // description du test :
                                });
                                xit("FIXME : filtre = 'postalCode'", function (done) {
                                    // description du test : on restreint la recherche à un code postal donné,
                                    // on cherche des résultats de type "StreetAddress"

                                    options.filterOptions = {
                                        postalCode: "94160"
                                    };
                                    options.location = "2 avenue pasteur";
                                    options.maximumResponses = 1;
                                    options.httpMethod = "GET";
                                    options.onSuccess = function (response) {
                                        console.log(response);
                                        functionAssertCommon(response);
                                        functionAssertSA(response);
                                        expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                        expect(response.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");
                                        expect(response.locations[0].placeAttributes).to.have.property("department", "94");
                                        expect(response.locations[0].placeAttributes).to.have.property("postalCode", "94160");
                                        done();
                                    };
                                    options.onFailure = function (error) {
                                        console.log(error);
                                        done(error);
                                    };

                                    Gp.Services.geocode(options);

                                    if (mock) {
                                        requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                                    }
                                });
                                xit("filtre = 'quality'", function (done) {
                                    // description du test :
                                });
                                xit("filtre = 'ID'", function (done) {
                                    // description du test :
                                });
                                xit("filtre = 'ID_TR'", function (done) {
                                    // description du test :
                                });
                                xit("filtre = 'territory'", function (done) {
                                    // description du test :
                                });
                            })

                            describe("filtres attributaires de type 'PositionOfInterest'", function() {
                                xit("filtre = 'importance' ", function (done) {
                                    // description du test :
                                });
                                it("filtre = 'nature'", function (done) {
                                    // description du test : on restreint la recherche à une nature de résultat (Lieu-dit habité)
                                    // on cherche des résultats de type "PositionOfInterest"

                                    options.filterOptions = {
                                        type: ["PositionOfInterest"],
                                        nature: "Commune"
                                    };
                                    options.location = "Saint-Mandé";
                                    options.maximumResponses = 1;
                                    options.httpMethod = "GET";
                                    options.onSuccess = function (response) {
                                        console.log(response);
                                        functionAssertCommon(response);
                                        functionAssertPOI(response);
                                        expect(response.locations[0]).to.have.property("type", "PositionOfInterest");
                                        expect(response.locations[0].placeAttributes).to.have.property("nature", "Commune");
                                        done();
                                    };
                                    options.onFailure = function (error) {
                                        console.log(error);
                                        done(error);
                                    };

                                    Gp.Services.geocode(options);

                                    if (mock) {
                                        requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponsePOI);
                                    }
                                });
                                xit("filtre = 'postalCode'", function (done) {
                                    // description du test :
                                });
                                xit("filtre = 'territory'", function (done) {
                                    // description du test :
                                });
                            })

                            describe("FIXME : filtres attributaires de type 'CadastralParcel'", function() {

                                xit("filtre = 'sheet' ", function (done) {
                                    // description du test : on restreint la recherche à une feuille cadastrale donnée,
                                    // on cherche des résultats de type "CadastralParcel"

                                    options.filterOptions = {
                                        type: ["CadastralParcel"]
                                    };

                                    options.location = "*001000AC0101"; // 94001000AC0101
                                    options.maximumResponses = 1;
                                    options.httpMethod = "GET";
                                    options.onSuccess = function (response) {
                                        console.log(response);
                                        functionAssertCommon(response);
                                        functionAssertCADASTRAL(response);
                                        expect(response.locations[0]).to.have.property("type", "CadastralParcel");
                                        expect(response.locations[0].placeAttributes).to.have.property("sheet", "1");
                                        done();
                                    };
                                    options.onFailure = function (error) {
                                        console.log(error);
                                        done(error);
                                    };

                                    Gp.Services.geocode(options);

                                    if (mock) {
                                        requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseParcel);
                                    }
                                });
                                xit("filtre = 'section'", function (done) {
                                    // description du test :
                                });
                                xit("filtre = 'absorbedCity'", function (done) {
                                    // description du test :
                                });
                            })

                            describe("filtres géométriques ?", function() {

                            })

                        });
                    });

                    describe("L'option 'rawResponse' est renseignée", function () {

                        it("rawResponse=true", function (done) {
                            // description du test : envoi d'une requête POST avec freeFormAddress="Saint-Mandé"

                            options.rawResponse = true;
                            options.onSuccess = function (response) {
                                should.exist(response);
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.geocode(options);

                            if (mock) {
                                requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                            }
                        });
                    });

                    describe("L'option 'returnFreeForm' est renseignée", function () {

                        it("returnFreeForm = true", function (done) {
                            // description du test : envoi d'une requête POST avec freeFormAddress="Saint-Mandé"

                            options.rawResponse = false;
                            options.returnFreeForm = true;
                            options.httpMethod = "GET";
                            options.onSuccess = function (response) {
                                console.log(response);
                                functionAssertCommon(response);
                                expect(response.locations[0].placeAttributes).to.have.property("freeform");
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.geocode(options);

                            if (mock) {
                                requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseFreeform);
                            }
                        });
                    });

                    describe("L'option 'srs' est renseignée", function () {

                        xit("srs='EPSG:3857", function (done) {
                            // description du test : envoi d'une requête POST avec freeFormAddress="Saint-Mandé"

                            options.returnFreeForm = false;
                            options.onSuccess = function (response) {
                                console.log(response);
                                functionResponseAssert(response);
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.geocode(options);

                            if (mock) {
                                requests[0].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                            }
                        });
                    });

                });
            });
        });
    });

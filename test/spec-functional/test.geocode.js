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
        geocodeResponse, geocodeResponseSA, geocodeResponsePOI,
        geocodeResponseParcel, geocodeResponseSA_POI,
        geocodeResponseStructuredLocation, geocodeResponseFreeform, geocodeRequest
    ) {

        var assert = chai.assert;
        var expect = chai.expect;
        var should = chai.should();

        describe("-- Tests fonctionnels du Service de Geocodage direct : OK --", function () {

            var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";
            var version = Gp.servicesVersion;

            var xhr, requests;
            var options;

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
                    location: "Saint-Mandé",
                    returnFreeForm: false,
                    // filterOptions: {
                    //     // bbox : { left: 0, right : 1, top : 1, bottom : 0 },
                    //     // circle : { x : 0, y : 0, radius : 100 },
                    //     // polygon  : [{x:0,y:0}, {x:1,y:1}, {x:2,y:2}, {x:3,y:2}, {x:4,y:1}, {x:0,y:0}]
                    //     type: ['PositionOfInterest']
                    //     // type: ['StreetAddress', 'PositionOfInterest']
                    // },
                    maximumResponses: 1,
                    // srs: 'EPSG:4326'
                };
            });

            after(function () {
                if (mock) {
                    xhr.restore();
                }
            });

            describe('Service.geocode : SUCCESS', function () {

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
                            should.exist(response.locations);
                            expect(response.locations).to.be.an("Array");
                            expect(response.locations).to.have.length(1);
                            expect(response.locations[0]).to.have.property("position");
                            expect(response.locations[0].position).to.be.an("object");
                            expect(response.locations[0]).to.have.deep.property("position.x");
                            expect(response.locations[0]).to.have.deep.property("position.y");
                            expect(response.locations[0]).to.have.property("matchType");
                            expect(response.locations[0]).to.have.property("placeAttributes");
                            expect(response.locations[0].placeAttributes).to.be.an("object");
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

                    it("Appel du service en mode 'XHR' avec la méthode 'POST' ('OLS')", function (done) {
                        // description du test

                        options.protocol = 'XHR';
                        options.httpMethod = 'POST';
                        options.onSuccess = function (response) {
                            console.log("response XHR POST : ",response);
                            should.exist(response.locations);
                            expect(response.locations).to.be.an("Array");
                            expect(response.locations).to.have.length(1);
                            expect(response.locations[0]).to.have.property("position");
                            expect(response.locations[0].position).to.be.an("object");
                            expect(response.locations[0]).to.have.deep.property("position.x");
                            expect(response.locations[0]).to.have.deep.property("position.y");
                            expect(response.locations[0]).to.have.property("matchType");
                            expect(response.locations[0]).to.have.property("placeAttributes");
                            expect(response.locations[0].placeAttributes).to.be.an("object");
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log("MyConsole", error);
                            done(error);
                        };

                        Gp.Services.geocode(options);

                        if (mock) {
                            requests[1].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                        }
                    });
                });

                describe("Test sur les options spécifiques du service (mode 'XHR' avec la méthode 'POST', maximumResponses=1)", function () {

                    // fonction contenant les tests de la reponse
                    var functionResponseAssert = function (response) {
                        should.exist(response);
                        should.exist(response.locations);
                        expect(response.locations).to.have.length(1);
                        expect(response.locations).to.be.an("Array");
                        expect(response.locations[0]).to.have.property("position");
                        expect(response.locations[0].position).to.be.an("object");
                        expect(response.locations[0]).to.have.deep.property("position.x");
                        expect(response.locations[0]).to.have.deep.property("position.y");
                        expect(response.locations[0]).to.have.property("matchType");
                        expect(response.locations[0]).to.have.property("type");
                        expect(response.locations[0]).to.have.property("placeAttributes");
                        expect(response.locations[0].placeAttributes).to.be.an("object");
                    };

                    describe("L'option 'location' est renseignée",  function () {

                        it("location dite 'libre' : chaîne de caractères", function (done) {
                            // description du test : envoi d'une requête POST avec freeFormAddress="Saint-Mandé"

                            options.onSuccess = function (response) {
                                console.log(response);
                                functionResponseAssert(response);
                                expect(response.locations[0]).to.have.property("type", "StreetAddress");
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
                                requests[2].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                            }
                        });

                        it("location dite 'structurée' : objet", function (done) {
                            // description du test : envoi d'une requête xml avec une adresse structurée, en POST

                            options.location = {
                                number: 2,
                                street: "avenue de paris",
                                city: "Saint-Mandé",
                                postalCode: 94166
                            };
                            options.onSuccess = function (response) {
                                console.log(response);
                                functionResponseAssert(response);
                                expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                expect(response.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");
                                expect(response.locations[0].placeAttributes).to.have.property("department", "94");
                                expect(response.locations[0].placeAttributes).to.have.property("postalCode", "94160");
                                expect(response.locations[0].placeAttributes).to.have.property("street", "av de paris");
                                expect(response.locations[0]).to.have.property("matchType", "Street");
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.geocode(options);

                            if (mock) {
                                requests[3].respond(200, { "Content-Type": "application/xml" }, geocodeResponseStructuredLocation);
                            }
                        });
                    });

                    describe("Les options 'location' et 'filterOptions' sont renseignées", function () {

                        describe("Le type est defini", function () {

                            it("type par défaut", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "StreetAddress" (défaut)

                                options.filterOptions = {
                                    type : ""
                                };
                                options.rawResponse = false;
                                options.location = "Saint-Mandé";

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
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
                                    requests[4].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                                }
                            });

                            it("type = StreetAddress", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "StreetAddress"

                                options.filterOptions = {
                                    type : "StreetAddress"
                                };
                                options.location = "Saint-Mandé";
                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
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
                                    requests[5].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                                }
                            });

                            it("type = PostionOfInterest", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "PositionOfInterest"

                                options.filterOptions = {
                                    type : "PositionOfInterest"
                                };
                                options.location = "Saint-Mandé";
                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations[0]).to.have.property("type", "PositionOfInterest");
                                    expect(response.locations[0].placeAttributes).to.have.property("commune", "Vievy-le-Rayé");
                                    expect(response.locations[0].placeAttributes).to.have.property("department", "41");
                                    expect(response.locations[0].placeAttributes).to.have.property("postalCode", "41290");
                                    expect(response.locations[0]).to.have.property("matchType", "City");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.geocode(options);

                                if (mock) {
                                    requests[6].respond(200, { "Content-Type": "application/xml" }, geocodeResponsePOI);
                                }
                            });

                            it("type = CadastralParcel", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "CadastralParcel"

                                options.filterOptions = {
                                    type : "CadastralParcel"
                                };
                                options.location = "94";
                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
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
                                    requests[7].respond(200, { "Content-Type": "application/xml" }, geocodeResponseParcel);
                                }
                            });

                            xit("TODO type = Administratif", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "Administratif"
                            });

                            it("type = StreetAddress, PostionOfInterest (maximumResponses=2)", function (done) {
                                // description du test : on ne cherche que des géolocalisations de type "StreetAddress" ou "PositionOfInterest"

                                options.filterOptions = {
                                    type : ["StreetAddress", "PositionOfInterest"]
                                };
                                options.location = "Saint-Mandé";
                                options.maximumResponses = 2;
                                options.onSuccess = function (response) {
                                    console.log(response);
                                    should.exist(response.locations);
                                    expect(response.locations).to.be.an("Array");
                                    expect(response.locations).to.have.length(2);
                                    expect(response.locations[0]).to.have.property("position");
                                    expect(response.locations[0].position).to.be.an("object");
                                    expect(response.locations[0]).to.have.deep.property("position.x");
                                    expect(response.locations[0]).to.have.deep.property("position.y");
                                    expect(response.locations[0]).to.have.property("placeAttributes");
                                    expect(response.locations[0].placeAttributes).to.be.an("object");
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
                                    expect(response.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");
                                    expect(response.locations[0].placeAttributes).to.have.property("department", "94");
                                    expect(response.locations[0].placeAttributes).to.have.property("postalCode", "94160");
                                    expect(response.locations[0]).to.have.property("matchType", "City");
                                    expect(response.locations[1]).to.have.property("type", "PositionOfInterest");
                                    expect(response.locations[1].placeAttributes).to.have.property("commune", "Vievy-le-Rayé");
                                    expect(response.locations[1].placeAttributes).to.have.property("department", "41");
                                    expect(response.locations[1].placeAttributes).to.have.property("postalCode", "41290");
                                    expect(response.locations[1]).to.have.property("matchType", "City");
                                    done();
                                };
                                options.onFailure = function (error) {
                                    console.log(error);
                                    done(error);
                                };

                                Gp.Services.geocode(options);

                                if (mock) {
                                    requests[8].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA_POI);
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
                                options.location = "Saint-Mandé";
                                options.maximumResponses = 1;

                                options.onSuccess = function (response) {
                                    console.log(response);
                                    functionResponseAssert(response);
                                    expect(response.locations[0]).to.have.property("type", "StreetAddress");
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
                                    requests[9].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                                }
                            });

                        });

                        describe("TODO : Des filtres sont definis", function () {

                            describe("filtres attributaires généraux", function() {

                                it("filtre = 'insee'", function (done) {
                                    // description du test : on restreint la recherche à un code insee donné,
                                    // on cherche des résultats de type "StreetAddress"

                                    options.filterOptions = {
                                        insee: "94067"
                                    };
                                    options.location = "Saint-Mandé";
                                    options.maximumResponses = 1;

                                    options.onSuccess = function (response) {
                                        console.log(response);
                                        functionResponseAssert(response);
                                        expect(response.locations[0]).to.have.property("type", "StreetAddress");
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
                                        requests[10].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                                    }
                                });
                                xit("TODO filtre = 'department'", function (done) {
                                    // description du test :
                                });
                                xit("TODO filtre = 'municipality'", function (done) {
                                    // description du test :
                                });
                                xit("TODO filtre = 'accuracy'", function (done) {
                                    // description du test :
                                });
                                xit("TODO filtre = 'matchType'", function (done) {
                                    // description du test :
                                });
                            })

                            describe("filtres attributaires de type 'StreetAddress'", function() {
                                xit("TODO filtre = 'number' ", function (done) {
                                    // description du test :
                                });
                                xit("TODO filtre = 'street'", function (done) {
                                    // description du test :
                                });
                                it("TODO filtre = 'postalCode'", function (done) {
                                    // description du test : on restreint la recherche à un code postal donné,
                                    // on cherche des résultats de type "StreetAddress"

                                    // FIXME : la requête est mal construite: il faut créer une balise <PostalCode>94160</PostalCode>, et non pas <xls:Place type="postalCode">94160</xls:Place>

                                    options.filterOptions = {
                                        postalCode: "94160"
                                    };
                                    options.location = "Saint-Mandé";
                                    options.maximumResponses = 1;

                                    options.onSuccess = function (response) {
                                        console.log(response);
                                        functionResponseAssert(response);
                                        expect(response.locations[0]).to.have.property("type", "StreetAddress");
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
                                        requests[11].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                                    }
                                });
                                xit("TODO filtre = 'quality'", function (done) {
                                    // description du test :
                                });
                                xit("TODO filtre = 'ID'", function (done) {
                                    // description du test :
                                });
                                xit("TODO filtre = 'ID_TR'", function (done) {
                                    // description du test :
                                });
                                xit("TODO filtre = 'territory'", function (done) {
                                    // description du test :
                                });
                            })

                            describe("filtres attributaires de type 'PositionOfInterest'", function() {
                                xit("TODO filtre = 'importance' ", function (done) {
                                    // description du test :
                                });
                                it("filtre = 'nature'", function (done) {
                                    // description du test : on restreint la recherche à une nature de résultat (Lieu-dit habité)
                                    // on cherche des résultats de type "PositionOfInterest"

                                    // FIXME : la requête est mal construite: il faut créer une balise <PostalCode>94160</PostalCode>, et non pas <xls:Place type="postalCode">94160</xls:Place>

                                    options.filterOptions = {
                                        type: ["PositionOfInterest"],
                                        nature: "Lieu-dit habité"
                                    };
                                    options.location = "Saint-Mandé";
                                    options.maximumResponses = 1;

                                    options.onSuccess = function (response) {
                                        console.log(response);
                                        functionResponseAssert(response);
                                        expect(response.locations[0]).to.have.property("type", "PositionOfInterest");
                                        expect(response.locations[0].placeAttributes).to.have.property("nature", "Lieu-dit habité");
                                        done();
                                    };
                                    options.onFailure = function (error) {
                                        console.log(error);
                                        done(error);
                                    };

                                    Gp.Services.geocode(options);

                                    if (mock) {
                                        requests[12].respond(200, { "Content-Type": "application/xml" }, geocodeResponsePOI);
                                    }
                                });
                                xit("TODO filtre = 'postalCode'", function (done) {
                                    // description du test :
                                });
                                xit("TODO filtre = 'territory'", function (done) {
                                    // description du test :
                                });
                            })

                            describe("filtres attributaires de type 'CadastralParcel'", function() {
                                it("filtre = 'sheet' ", function (done) {
                                    // description du test : on restreint la recherche à une feuille cadastrale donnée,
                                    // on cherche des résultats de type "CadastralParcel"

                                    // FIXME : la requête est mal construite: il faut créer une balise <PostalCode>94160</PostalCode>, et non pas <xls:Place type="postalCode">94160</xls:Place>

                                    options.filterOptions = {
                                        type: ["CadastralParcel"],
                                        sheet: "1"
                                    };
                                    options.location = "Saint-Mandé";
                                    options.maximumResponses = 1;

                                    options.onSuccess = function (response) {
                                        console.log(response);
                                        functionResponseAssert(response);
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
                                        requests[13].respond(200, { "Content-Type": "application/xml" }, geocodeResponseParcel);
                                    }
                                });
                                xit("TODO filtre = 'section'", function (done) {
                                    // description du test :
                                });
                                xit("TODO filtre = 'absorbedCity'", function (done) {
                                    // description du test :
                                });
                            })

                            describe("TODO filtres géométriques ?", function() {

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
                                requests[14].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                            }
                        });
                    });

                    describe("L'option 'returnFreeForm' est renseignée", function () {

                        it("returnFreeForm=true", function (done) {
                            // description du test : envoi d'une requête POST avec freeFormAddress="Saint-Mandé"

                            options.rawResponse = false;
                            options.returnFreeForm = true;
                            options.onSuccess = function (response) {
                                console.log(response);
                                functionResponseAssert(response);
                                expect(response.locations[0].placeAttributes).to.have.property("freeform","94160 Saint-Mandé");
                                done();
                            };
                            options.onFailure = function (error) {
                                console.log(error);
                                done(error);
                            };

                            Gp.Services.geocode(options);

                            if (mock) {
                                requests[15].respond(200, { "Content-Type": "application/xml" }, geocodeResponseFreeform);
                            }
                        });
                    });

                    describe("L'option 'srs' est renseignée", function () {

                        xit("TODO srs='EPSG:3857", function (done) {
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
                                requests[16].respond(200, { "Content-Type": "application/xml" }, geocodeResponseSA);
                            }
                        });
                    });

                });
            });
        });
    });

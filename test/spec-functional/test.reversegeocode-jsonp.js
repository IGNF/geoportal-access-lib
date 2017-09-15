/**
 * FIXME avec le JSONP, l'erreur est au niveau du html (execution de la balise script),
 * et il est difficile de la levée..., afin de la faire apparaitre dans les tests...
 */

define([ 'gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests fonctionnels du Service de Geocodage inverse : JSONP --", function () {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";

        describe('Service.reverseGeocode : SUCCESS', function () {

            this.timeout(15000);

            describe("Test sur l'utilisation basique du service (paramètres par défaut) ", function () {

                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    protocol: 'JSONP',
                    callbackSuffix: "",
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
                    }
                };

                it("paramètres apiKey, onSuccess, onFailure et 1 position", function (done) {
                    // description du test
                    // requête GET du service en XML (param xls avec la requête XML encodée)
                    // par défaut, on cherche des résultats de type StreetAddress
                    if (mock) { options.serverUrl = 'spec-functional/fixtures/jsonp/callback-reverse-xml-default'; }
                    options.onSuccess = function (response) {
                        console.log(response);
                        should.exist(response.locations);
                        expect(response.locations).to.be.an("Array");
                        expect(response.locations[0]).to.have.property("position");
                        expect(response.locations[0].position).to.be.an("object");
                        expect(response.locations[0]).to.have.deep.property("position.x");
                        expect(response.locations[0]).to.have.deep.property("position.y");
                        expect(response.locations[0]).to.have.property("matchType");
                        expect(response.locations[0]).to.have.property("type", "StreetAddress");

                        expect(response.locations[0]).to.have.property("placeAttributes");
                        expect(response.locations[0].placeAttributes).to.be.an("object");
                        expect(response.locations[0].placeAttributes).to.have.property("ID");
                        expect(response.locations[0].placeAttributes).to.have.property("IDTR");
                        expect(response.locations[0].placeAttributes).to.have.property("bbox");
                        expect(response.locations[0].placeAttributes).to.have.property("commune");
                        expect(response.locations[0].placeAttributes).to.have.property("department");
                        expect(response.locations[0].placeAttributes).to.have.property("insee");
                        expect(response.locations[0].placeAttributes).to.have.property("municipality");
                        expect(response.locations[0].placeAttributes).to.have.property("number");
                        expect(response.locations[0].placeAttributes).to.have.property("postalCode");
                        expect(response.locations[0].placeAttributes).to.have.property("quality");
                        expect(response.locations[0].placeAttributes).to.have.property("street");
                        expect(response.locations[0].placeAttributes).to.have.property("territory");

                        expect(response.locations[0]).to.have.property("searchCenterDistance");
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };
                    options.onTimeOut = function () {
                        var error = "Reception d'un Time out (json) !";
                        console.log(error);
                        done(error);
                    };
                    Gp.Services.reverseGeocode(options);
                })
            });

            describe("Test sur les options du Protocole", function (done) {

                // fonction contenant les tests de la reponse
                var functionAssert = function (response) {
                    console.log(response);
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

                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    serverUrl: null,
                    protocol: 'JSONP', // à surcharger : JSONP|XHR
                    callbackSuffix: "",
                    // proxyURL: null,
                    httpMethod: 'GET', // à surcharger : GET|POST
                    timeOut: 10000000000,
                    rawResponse: false,
                    onSuccess: null, // à surcharge
                    onFailure: null, // à surcharge
                    // spécifique au service
                    position: {
                        x: 48.86118017324745,
                        y: 2.3242664298058053
                    },
                    returnFreeForm: false,
                    // returnFreeForm: true,
                    filterOptions: {
                            // bbox : { left: 0, right : 1, top : 1, bottom : 0 },
                            // circle : { x : 0, y : 0, radius : 100 },
                            // polygon  : [{x:0,y:0}, {x:1,y:1}, {x:2,y:2}, {x:3,y:2}, {x:4,y:1}, {x:0,y:0}]
                        type: ['PositionOfInterest']
                            // type: ['StreetAddress', 'PositionOfInterest']
                    },
                    maximumResponses: 25,
                    srs: 'EPSG:4326'
                };

                it("Appel du service en mode 'JSONP'" +
                    " pour un format de sortie en 'xml'", function (done) {
                        // description du test
                        // requête GET du service en xml, par defaut, le service ne renvoie que du XML
                        // la reponse du service de production en JSONP est un xml encapsulé dans JSON avec un callback
                        //   var urlJsonPGet = "http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/geoportail/ols?output=json&qxml=%33%&callback=callback";
                        //   var okResponseJSONPjson =[200, { 'Content-type': 'application/javascript' }, 'callback({{"http":{"status":200,"error":null},"xml":""}})'];

                        if (mock) { options.serverUrl = 'spec-functional/fixtures/jsonp/callback-reverse-xml'; }
                        options.onSuccess = function (response) {
                            functionAssert(response);
                            done();
                        };
                        options.onFailure = function (error) {
                            console.log(error);
                            done(error);
                        };
                        options.onTimeOut = function () {
                            var error = "Reception d'un Time out (geocode) !";
                            console.log(error);
                            done(error);
                        };

                        Gp.Services.reverseGeocode(options);
                    });
            });
        });
    });
});

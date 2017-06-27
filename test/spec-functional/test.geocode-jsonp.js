/**
 * FIXME avec le JSONP, l'erreur est au niveau du html (execution de la balise script), 
 * et il est difficile de la levée..., afin de la faire apparaitre dans les tests...
 */

define([ 'gp', 'chai', 'sinon'], function (Gp, chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests fonctionnels du Service de Geocodage direct : JSONP --", function () {

        var myKey = (mock) ? "CLE" : "jhyvi0fgmnuxvfv0zjzorvdn";

        describe('Service.geocode : SUCCESS', function () {

            describe("Test sur l'utilisation basique du service (paramètres par défaut) ", function () {

                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    onSuccess: function (response) {
                        console.log(response);
                    },
                    onFailure: function (error) {
                        console.log(error);
                    },
                    // spécifique au service
                    location: "Saint-Mandé"
                };

                it("paramètres apiKey, onSuccess, onFailure et location", function (done) {
                    // description du test
                    // requête GET du service en XML (param xls avec la requête XML encodée)
                    // 
                    if (mock) { options.serverUrl = 'spec-functional/fixtures/jsonp/callback-geocode-xml'; }
                    options.onSuccess = function (response) {
                        console.log(response);

                        should.exist(response.locations);
                        expect(response.locations).to.be.an("Array");
                        expect(response.locations).to.have.length(25);
                        expect(response.locations[0]).to.have.property("position");
                        expect(response.locations[0].position).to.be.an("object");
                        expect(response.locations[0]).to.have.deep.property("position.x");
                        expect(response.locations[0]).to.have.deep.property("position.y");
                        expect(response.locations[0]).to.have.property("accuracy");
                        expect(response.locations[0]).to.have.property("matchType", "City");
                        expect(response.locations[0]).to.have.property("type","StreetAddress");
                        expect(response.locations[0]).to.have.property("placeAttributes");

                        expect(response.locations[0].placeAttributes).to.be.an("object");
                        expect(response.locations[0].placeAttributes).to.have.property("bbox");
                        expect(response.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");
                        expect(response.locations[0].placeAttributes).to.have.property("department","94");
                        expect(response.locations[0].placeAttributes).to.have.property("insee", "94067");
                        expect(response.locations[0].placeAttributes).to.have.property("municipality");
                        expect(response.locations[0].placeAttributes).to.have.property("postalCode", "94160");
                        expect(response.locations[0].placeAttributes).to.have.property("quality");
                        expect(response.locations[0].placeAttributes).to.have.property("street");
                        expect(response.locations[0].placeAttributes).to.have.property("territory", "FXX");

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
                    Gp.Services.geocode(options);
                })
            });

            describe("Test sur les options du Protocole", function (done) {
                
                // fonction contenant les tests de la reponse
                var functionAssert = function (response) {
                    console.log(response);
                    should.exist(response.locations);
                    expect(response.locations).to.be.an("Array");
                    expect(response.locations).to.have.length(25);
                    expect(response.locations[0]).to.have.property("position");
                    expect(response.locations[0].position).to.be.an("object");
                    expect(response.locations[0]).to.have.deep.property("position.x");
                    expect(response.locations[0]).to.have.deep.property("position.y");
                    expect(response.locations[0]).to.have.property("accuracy");
                    expect(response.locations[0]).to.have.property("matchType");
                    expect(response.locations[0]).to.have.property("type","StreetAddress");
                    expect(response.locations[0]).to.have.property("placeAttributes");
                    expect(response.locations[0].placeAttributes).to.be.an("object");
                };
                
                // options par defaut (à surcharger)
                var options = {
                    apiKey: myKey,
                    serverUrl: null,
                    protocol: 'JSONP', // à surcharger : JSONP|XHR
                    proxyURL: null,
                    httpMethod: 'GET', // à surcharger : GET|POST
                    timeOut: 10000000000,
                    rawResponse: false,
                    onSuccess: null, // à surcharge
                    onFailure: null, // à surcharge
                    // spécifique au service
                    location: "Saint-Mandée", 
                    // location: "2 avenue de paris, 94166 Saint-Mandée",
                    returnFreeForm: false,
                    filterOptions: {
                        // bbox : { left: 0, right : 1, top : 1, bottom : 0 },
                        // circle : { x: 0, y: 0, radius : 100 },
                        // polygon  : [{x:0,y:0}, {x:1,y:1}, {x:2,y:2}, {x:3,y:2}, {x:4,y:1}, {x:0,y:0}]
                        type: ['StreetAddress']
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

                        if (mock) { options.serverUrl = 'spec-functional/fixtures/jsonp/callback-geocode-xml'; }
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

                        Gp.Services.geocode(options);
                    });
            });
        });
    });
});

define(['chai', 'sinon'], function (chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests fonctionnels : OK --", function () {

        var Services;
        var xml1 = '<?xml version="1.0" encoding="UTF-8"?>\n<wps:Execute version="1.0.0" service="WPS"\n   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/wps/1.0.0" xmlns:wfs="http://www.opengis.net/wfs" xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:wcs="http://www.opengis.net/wcs/1.1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">\n    <ows:Identifier>gs:WPSElevation</ows:Identifier>\n    <wps:DataInputs>\n        \n        <wps:Input>\n            <ows:Identifier>lon</ows:Identifier>\n            <wps:Data>\n              <wps:LiteralData>1.25</wps:LiteralData>\n            </wps:Data>\n        </wps:Input>\n        <wps:Input>\n            <ows:Identifier>lat</ows:Identifier>\n            <wps:Data>\n              <wps:LiteralData>47.48</wps:LiteralData>\n            </wps:Data>\n        </wps:Input>\n        <wps:Input>\n            <ows:Identifier>indent</ows:Identifier>\n            <wps:Data>\n              <wps:LiteralData>false</wps:LiteralData>\n            </wps:Data>\n        </wps:Input>\n        <wps:Input>\n            <ows:Identifier>crs</ows:Identifier>\n            <wps:Data>\n              <wps:LiteralData>CRS:84</wps:LiteralData>\n            </wps:Data>\n        </wps:Input>\n        <wps:Input>\n            <ows:Identifier>zonly</ows:Identifier>\n            <wps:Data>\n              <wps:LiteralData>false</wps:LiteralData>\n            </wps:Data>\n        </wps:Input>\n        <wps:Input>\n            <ows:Identifier>format</ows:Identifier>\n            <wps:Data>\n              <wps:LiteralData>json</wps:LiteralData>\n            </wps:Data>\n        </wps:Input>\n    </wps:DataInputs>\n    <wps:ResponseForm>\n        <wps:RawDataOutput>\n        <ows:Identifier>result</ows:Identifier>\n        </wps:RawDataOutput>\n    </wps:ResponseForm>\n</wps:Execute>\n';

        beforeEach(function (done) {
            require(['Formats/XML', 'Services/Services'], function (_XML, _Services) {
                XML = _XML;
                Services = _Services;
                done();
            });
        });

        describe("Suite de tests pour tester le contenu du 'requestBody'", function () {

            var xhr, requests;

            beforeEach(function () {
                xhr = sinon.useFakeXMLHttpRequest();
                requests = [];

                xhr.onCreate = function (request) {
                    requests.push(request);
                };
            });

            afterEach(function () {
                xhr.restore();
            });

            // clef API reel : jhyvi0fgmnuxvfv0zjzorvdn
            var key = "CLE";
            
            // fonction contenant les tests de la reponse
            var functionAssert = function (response) {
                should.exist(response.elevations);
                expect(response.elevations).to.be.an("Array");
                expect(response.elevations).to.have.length(1);
                expect(response.elevations[0]).to.have.property("lon");
                expect(response.elevations[0]).to.have.property("lat");
                expect(response.elevations[0]).to.have.property("z");
                expect(response.elevations[0]).to.have.property("acc");
                expect(response.elevations[0].z).to.equal(103.33);
            };
            // options par defaut (à surcharger)
            var options = {
                apiKey: key,
                serverUrl: null,
                protocol: 'XHR',
                proxyURL: null,
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
                positions: [{ lon: 1.25, lat: 47.48 }],
                outputFormat: 'json',
                sampling: 50,
                api: 'WPS',
                zonly: false
            };

            it("Test 1", function (done) {
                options.onSuccess = function (response) {
                    functionAssert(response);
                    done();
                };
                options.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };
                Services.getAltitude(options);
                requests[0].respond(200, { "Content-Type": "application/json" }, '{"elevations": [{"lon": 1.25,"lat": 47.48,"z": 103.33,"acc": 2.5}]}');
                expect(requests[0].requestBody).to.be.equal(xml1);
                expect(requests[0].url).to.be.equal("http://wxs.ign.fr/" + key + "/alti/wps");

            });

            describe("Suite de test 2", function () {


                it("Test 2.1", function (done) {

                    options.positions = [{ lon: 1.26, lat: 47.49 }];
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };
                    Services.getAltitude(options);
                    requests[0].respond(200, { "Content-Type": "application/json" }, '{"elevations": [{"lon": 1.26,"lat": 47.49,"z": 103.33,"acc": 2.5}]}');
                    // expect(requests[0].requestBody).to.be.equal(xml1);
                    expect(requests[0].url).to.be.equal("http://wxs.ign.fr/" + key + "/alti/wps");

                });

                it("Test 2.2", function (done) {

                    options.positions = [{ lon: 1.26, lat: 47.49 }];
                    options.onSuccess = function (response) {
                        functionAssert(response);
                        done();
                    };
                    options.onFailure = function (error) {
                        console.log(error);
                        done(error);
                    };
                    Services.getAltitude(options);
                    requests[0].respond(200, { "Content-Type": "application/json" }, '{"elevations": [{"lon": 1.26,"lat": 47.49,"z": 103.33,"acc": 2.5}]}');
                    // expect(requests[0].requestBody).to.be.equal(xml1);
                    expect(requests[0].url).to.be.equal("http://wxs.ign.fr/" + key + "/alti/wps");
                });

            });

            it("Test 3", function (done) {

                options.positions = [{ lon: 1.27, lat: 47.50 }];
                options.onSuccess = function (response) {
                    functionAssert(response);
                    done();
                };
                options.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };
                Services.getAltitude(options);
                requests[0].respond(200, { "Content-Type": "application/json" }, '{"elevations": [{"lon": 1.27,"lat": 47.50,"z": 103.33,"acc": 2.5}]}');
                // expect(requests[0].requestBody).to.be.equal();
                expect(requests[0].url).to.be.equal("http://wxs.ign.fr/" + key + "/alti/wps");
            });
        });
    });
});

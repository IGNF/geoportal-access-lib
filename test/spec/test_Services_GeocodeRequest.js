/*
* Tests de la construction d"une requête de géocodage, par la classe GeocodeRequestFactory.
*/
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import XML from "../../src/Formats/XML";
import GeocodeRequestFactory from "../../src/Services/Geocode/Request/GeocodeRequestFactory";

describe("-- Test GeocodeRequest --", function () {

    describe("DirectGeocodeRequestFactory", function () {

        it("L'appel de la factory en mode GET renvoie un chaine 'qxml'", function () {

            var options = {
                httpMethod : "GET",
                geocodeMethod : "search",
                location : "Saint-Mandée, 94166",
                filterOptions : {
                    type : "PositionOfInterest"
                }
            };

            /** validation */
            var valide =  function (result) {
                expect(result).to.be.a('string');
            };

            var request = GeocodeRequestFactory.build(options);
            valide(request);
        });

        xit("L'appel de la factory en mode POST renvoie un XML", function () {

            var options = {
                location : "Saint-Mandée, 94166",
                httpMethod : "POST",
                geocodeMethod : "search",
                filterOptions : {
                    type : "PositionOfInterest"
                }
            };

            /** validation */
            var valide =  function (result) {
                var p = new XML();
                p.setXMLString(result);
                var data = p.parse();
                should().exist(data);

                var req = data["xls:XLS"]["xls:Request"];
                expect(req).to.have.property("xls:GeocodeRequest");
                expect(req["xls:GeocodeRequest"]).to.have.property("xls:Address");
                expect(req["xls:GeocodeRequest"]["xls:Address"]["attributes"]).to.have.property("countryCode", "PositionOfInterest");
                expect(req["xls:GeocodeRequest"]["xls:Address"]).to.have.property("xls:freeFormAddress");
                expect(req["xls:GeocodeRequest"]["xls:Address"]["xls:freeFormAddress"].textContent).to.equal("Saint-Mandée, 94166");
                expect(req["xls:GeocodeRequest"]["xls:Address"]).to.have.property("gml:Envelope");
                expect(req["xls:GeocodeRequest"]["xls:Address"]["gml:Envelope"]).to.have.property("gml:lowerCorner");
                expect(req["xls:GeocodeRequest"]["xls:Address"]["gml:Envelope"]).to.have.property("gml:upperCorner");
            };

            var request = GeocodeRequestFactory.build(options);
            valide(request);
        });
    });
});

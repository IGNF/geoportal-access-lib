/*
* Tests de la construction d"une requête de géocodage inverse, par la classe ReverseGeocodeRequestFactory.
*/
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import XML from "../../src/Formats/XML";
import ReverseGeocodeRequestFactory from "../../src/Services/Geocode/Request/ReverseGeocodeRequestFactory";

describe("-- Test ReverseGeocodeRequest --", function () {

    describe("ReverseGeocodeRequestFactory", function () {

        it("Appel de la factory", function () {

            var options = {
                position : {
                    x : 2.48, y : 48.9
                },
                filterOptions : {
                    type : ["PositionOfInterest"],
                    circle : {
                        x : 2.49, y : 49, radius : 100
                    }
                }
            };

            /** validation */
            var valide =  function (result) {
                var p = new XML();
                p.setXMLString(result);
                var data = p.parse();
                should().exist(data);

                var req = data["xls:XLS"]["xls:Request"];
                expect(req).to.have.property("xls:ReverseGeocodeRequest");
                expect(req["xls:ReverseGeocodeRequest"]).to.have.property("xls:Position");
                expect(req["xls:ReverseGeocodeRequest"]).to.have.property("xls:ReverseGeocodePreference");
                expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]).to.have.property("gml:Point");
                expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]).to.have.property("gml:CircleByCenterPoint");
                expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]["gml:Point"]).to.have.property("gml:pos");
                expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:pos");
                expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:radius");
            };

            var request = ReverseGeocodeRequestFactory.build(options);
            valide(request);
        });
    });
});

import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import XML from "../../src/Formats/XML";
import XLS from "../../src/Formats/XLS";
import RouteService from "../../src/Formats/XLS/RouteService";

describe("-- Test XLS RouteService Request --", function () {

    it("Appel avec un objet Route (sans param)", function () {
        // exception générée :
        //	impossible de determiner le type de service : Route ou Geocode !?

        var options = {
            srsName : "epsg:4326",
            maximumResponses : 5
        };
        try {
            var xls = new XLS(options);
            xls.setService(new RouteService());
            xls.build();
        } catch (e) {
            // console.log(e);
            expect(true).to.be.true;
            return; // FIXME !
        }
        // oups!
        expect(false).to.be.true;
    });

    it("Appel avec un objet Route (avec param)", function () {

        var options = {
            srsName : "epsg:4326",
            maximumResponses : 5
        };

        // spécifique au service
        var settings = {
            startPoint : {
                x : 42.1121,
                y : 1.5557
            },
            endPoint : {
                x : 42.1123,
                y : 1.5559
            },
            viaPoint : [
                {
                    x : 42.1121, y : 1.5557
                },
                {
                    x  : 42.1122, y : 1.5558
                },
                {
                    x : 42.1123, y : 1.5559
                }
            ],
            provideBoundingBox : true,
            avoidFeature : ["bridge", "tunnel", "tollway"],
            expectedStartTime : "2015-12-23", // YYYY-MM-DDThh:mm:ssZ
            distanceUnit : "km",
            vehicle : "car",
            provideGeometry : true,
            routePreference : "fastest"
        };

        try {
            var xls = new XLS(options);
            xls.setService(new RouteService(settings));
            var result = xls.build();

            // parsing
            var hXml = new XML();
            hXml.setXMLString(result);
            var data = hXml.parse();
            // test...
            should().exist(data);
            expect(data).to.have.property("XLS");
            expect(data["XLS"]["Request"]["attributes"]).to.have.property("methodName", "RouteRequest");
        } catch (e) {
            // oups!
            console.log(e);
            expect(false).to.be.true;
            return; // FIXME !
        }

        expect(true).to.be.true;
    });
});

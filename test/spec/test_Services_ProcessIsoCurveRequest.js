/*
* Tests de la construction d"une requête de calcul d"isochrones, par la classe ProcessIsoCurveRequest.
*/
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import XML from "../../src/Formats/XML";
import ProcessIsoCurveRequest from "../../src/Services/ProcessIsoCurve/Request/ProcessIsoCurveRequest";

describe("-- Test ProcessIsoCurveRequest --", function () {

    it("ProcessIsoCurveRequest : mode GET", function () {

        // ex. http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/isochrone/isochrone.json?location=-1.557189,47.217122&method=distance&distance=5000&graphName=Voiture
        var options = {
            httpMethod : "GET", // GET|POST
            // spécifique au service
            exclusions : ["Bridge", "Tunnel"],
            position : {
                x : 2.3242664298058053,
                y : 48.86118017324745
            },
            graph : "Voiture",
            method : "time",
            time : 1000, // distance : 200
            reverse : false,
            smoothing : false,
            holes : false,
            srs : "EPSG:4326"
        };

        try {

            var oIsoCurve = new ProcessIsoCurveRequest(options);
            if (!oIsoCurve.processRequestString()) {
                expect(false).to.be.true;
            }

            var request = oIsoCurve.requestString;
            expect(request).not.to.be.null;

            // location=2.3242664298058053,48.86118017324745&smoothing=false&holes=false&reverse=false&method=time&time=1000&graphName=Voiture&exclusions=Bridge;Tunnel&srs=EPSG:4326
            var values = request.split(/&/);
            var map = {};
            for (var i = 0; i < values.length; i++) {
                var val = values[i].split(/=/);
                map[val[0]] = val[1];
            }

            expect(map).to.have.property("location");
            expect(map).to.have.property("smoothing");
            expect(map).to.have.property("holes");
            expect(map).to.have.property("reverse");
            expect(map).to.have.property("method");
            expect(map).to.have.property("time");
            expect(map).to.have.property("graphName");
            expect(map).to.have.property("exclusions");
            expect(map).to.have.property("srs");

        } catch (e) {
            console.log(e);
            expect(false).to.be.true;
        }
    });

    it("ProcessIsoCurveRequest : mode POST", function () {

        // ex. http://wxs.ign.fr/jhyvi0fgmnuxvfv0zjzorvdn/isochrone/isochrone.json?location=-1.557189,47.217122&method=distance&distance=5000&graphName=Voiture
        var options = {
            httpMethod : "POST", // GET|POST
            // spécifique au service
            exclusions : ["Bridge", "Tunnel"],
            position : {
                x : 2.3242664298058053,
                y : 48.86118017324745
            },
            graph : "Pieton",
            method : "distance",
            distance : 200,
            reverse : true,
            smoothing : true,
            holes : true,
            srs : "EPSG:4326"
        };

        /** validation */
        var valide = function (result) {
            var p = new XML();
            p.setXMLString(result);
            var data = p.parse();
            should().exist(data);
            // console.log(data);

            var req = data["isochroneRequest"];
            expect(req).to.have.property("distance");
            expect(req).to.have.property("exclusions");
            expect(req).to.have.property("graphName");
            expect(req).to.have.property("holes");
            expect(req).to.have.property("location");
            expect(req["location"]).to.have.property("x");
            expect(req["location"]).to.have.property("y");
            expect(req).to.have.property("method");
            expect(req).to.have.property("reverse");
            expect(req).to.have.property("smoothing");
            expect(req).to.have.property("srs");

        };

        try {

            var oIsoCurve = new ProcessIsoCurveRequest(options);
            if (!oIsoCurve.processRequestString()) {
                expect(false).to.be.true;
            }

            var request = oIsoCurve.requestString;
            expect(request).not.to.be.null;
            valide(request);

        } catch (e) {
            console.log(e);
            expect(false).to.be.true;
        }
    });
});

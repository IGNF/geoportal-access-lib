import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import XML from "../../src/Formats/XML";
import XLS from "../../src/Formats/XLS";
import LocationUtilityService from "../../src/Formats/XLS/LocationUtilityService";
import ReverseGeocodeRequest from "../../src/Formats/XLS/LocationUtilityService/ReverseGeocodeRequest";
import PositionOfInterest from "../../src/Services/Geocode/Request/model/PositionOfInterest";
import StreetAddress from "../../src/Services/Geocode/Request/model/StreetAddress";

describe("-- Test XLS ReverseGeocode Request --", function () {

    // parser pour les requêtes
    var hXML;

    before(function (done) {
        hXML = new XML();
        done();
    });

    after(function () {
        hXML = null;
    });

    describe("-- XLS LocationUtilityService ReverseGeocode --", function () {

        it("Construction de la Requête avec objet LUS de type Inverse (ReverseGeocodeRequest)", function () {

            // creation d"un objet de type Inverse : ReverseGeocodeRequest
            // ajout de ce dernier dans le conteneur LocationUtilityService
            var lus = new LocationUtilityService();
            lus.addRequest(new ReverseGeocodeRequest({
                position : {
                    x : "45.23565",
                    y : "89.4587"
                },
                filterOptions : {
                    type : ["PositionOfInterest", "StreetAddress"],
                    circle : {
                        x : "45.23565",
                        y : "89.4587",
                        radius : 100
                    }
                }
            }));

            var options = {
                srsName : "epsg:4326",
                maximumResponses : 5
            };

            var xls = new XLS(options);
            xls.namespace = false;
            xls.setService(lus);

            // parse
            hXML.setXMLString(xls.build());
            var data = hXML.parse();

            should().exist(data);
            expect(data).to.have.property("XLS");

            var req = data["XLS"]["Request"];
            expect(req).to.have.property("ReverseGeocodeRequest");

            expect(req["ReverseGeocodeRequest"]).to.have.property("Position");
            expect(req["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:Point");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:Point"]).to.have.property("gml:pos");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:Point"]["gml:pos"].textContent).to.equal("45.23565 89.4587");

            expect(req["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:CircleByCenterPoint");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:pos");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]["gml:pos"].textContent).to.equal("45.23565 89.4587");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:radius");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]["gml:radius"].textContent).to.equal("100");

            expect(req["ReverseGeocodeRequest"]).to.have.property("ReverseGeocodePreference");
            expect(req["ReverseGeocodeRequest"]["ReverseGeocodePreference"]).to.length(2);

        });

        it("Construction de la Requête sans objet LUS de type Inverse", function () {

            // creation d"un conteneur LocationUtilityService
            // le type de geocodage est determiné par le conteneur en fonction des param
            var settings = {
                position : {
                    x : "45.23565",
                    y : "89.4587"
                },
                filterOptions : {
                    type : ["PositionOfInterest", "StreetAddress"],
                    circle : {
                        x : "45.23565",
                        y : "89.4587",
                        radius : 100
                    }
                }
            };

            var options = {
                srsName : "epsg:4326",
                maximumResponses : 5
            };

            var xls = new XLS(options);
            xls.namespace = false;
            xls.setService(new LocationUtilityService(settings));

            // parse
            hXML.setXMLString(xls.build());
            var data = hXML.parse();

            should().exist(data);
            expect(data).to.have.property("XLS");

            var req = data["XLS"]["Request"];
            expect(req).to.have.property("ReverseGeocodeRequest");

            expect(req["ReverseGeocodeRequest"]).to.have.property("Position");
            expect(req["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:Point");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:Point"]).to.have.property("gml:pos");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:Point"]["gml:pos"].textContent).to.equal("45.23565 89.4587");

            expect(req["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:CircleByCenterPoint");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:pos");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]["gml:pos"].textContent).to.equal("45.23565 89.4587");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:radius");
            expect(req["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]["gml:radius"].textContent).to.equal("100");

            expect(req["ReverseGeocodeRequest"]).to.have.property("ReverseGeocodePreference");
            expect(req["ReverseGeocodeRequest"]["ReverseGeocodePreference"]).to.length(2);
        });

    });

    describe("-- ReverseGeocode Request --", function () {

        it("Construction de la Requête ReverseGeocode", function () {

            var req = new ReverseGeocodeRequest({
                position : {
                    x : 2.39,
                    y : 48.9
                },
                returnFreeForm : true,
                filterOptions : {
                    type : ["PositionOfInterest"],
                    bidon : "test",
                    importance : "8"
                }
            });

            // console.log(req.toString());

            // parse
            hXML.setXMLString(req.toString());
            var data = hXML.parse();
            should().exist(data);

            expect(data).to.have.property("ReverseGeocodeRequest");
            expect(data["ReverseGeocodeRequest"]).to.have.property("Position");
            expect(data["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:Point");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Point"]).to.have.property("gml:pos");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Point"]["gml:pos"].textContent).to.equal("2.39 48.9");
            expect(data["ReverseGeocodeRequest"]).to.have.property("ReverseGeocodePreference");
            // todo pas de filtre bidon ou importance

        });

        it("Construction de la Requête ReverseGeocodage avec filtre spatial : emprise", function () {

            var req = new ReverseGeocodeRequest({
                position : {
                    x : 2.39,
                    y : 48.9
                },
                returnFreeForm : true,
                filterOptions : {
                    type : ["PositionOfInterest", "StreetAddress"],
                    // circle : {x : 2.38, y : 49, radius : 100}
                    bbox : {
                        left : 2.38,
                        right : 2.40,
                        top : 49,
                        bottom : 48
                    }
                }
            });

            // console.log(req.toString());

            // out
            // <ReverseGeocodeRequest returnFreeForm=true>
            // 	<Position>
            // 		<gml:Point xmlns:gml="http://www.opengis.net/gml"><gml:pos>2.39 48.9</gml:pos></gml:Point>
            // 		<gml:Envelope>
            //			<gml:lowerCorner>2.38 48</gml:lowerCorner>
            //			<gml:upperCorner>2.4 49</gml:upperCorner>
            //		</gml:Envelope>
            // 	</Position>
            // 	<ReverseGeocodePreference>PositionOfInterest</ReverseGeocodePreference>
            // </ReverseGeocodeRequest>

            // parse
            hXML.setXMLString(req.toString());
            var data = hXML.parse();

            should().exist(data);

            expect(data).to.have.property("ReverseGeocodeRequest");
            expect(data["ReverseGeocodeRequest"]).to.have.property("Position");
            expect(data["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:Point");
            expect(data["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:Envelope");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Point"]).to.have.property("gml:pos");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Point"]["gml:pos"].textContent).to.equal("2.39 48.9");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Envelope"]).to.have.property("gml:lowerCorner");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Envelope"]).to.have.property("gml:upperCorner");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Envelope"]["gml:lowerCorner"].textContent).to.equal("2.38 48");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Envelope"]["gml:upperCorner"].textContent).to.equal("2.4 49");
            expect(data["ReverseGeocodeRequest"]).to.have.property("ReverseGeocodePreference");
        });

        it("Construction de la Requête ReverseGeocodage avec filtre spatial : cercle", function () {

            var req = new ReverseGeocodeRequest({
                position : {
                    x : 2.39,
                    y : 48.9
                },
                returnFreeForm : true,
                filterOptions : {
                    type : ["PositionOfInterest", "StreetAddress"],
                    circle : {
                        x : 2.38,
                        y : 49,
                        radius : 100
                    }
                }
            });

            // console.log(req.toString());
            // out
            // <ReverseGeocodeRequest returnFreeForm=true>
            // 	<Position>
            // 		<gml:Point xmlns:gml="http://www.opengis.net/gml"><gml:pos>2.39 48.9</gml:pos></gml:Point>
            // 		<gml:CircleByCenterPoint xmlns:gml="http://www.opengis.net/gml"><gml:pos>2.38 49</gml:pos><gml:radius>100</gml:radius></gml:CircleByCenterPoint>
            // 	</Position>
            //  <ReverseGeocodePreference>StreetAddress</ReverseGeocodePreference>
            // 	<ReverseGeocodePreference>PositionOfInterest</ReverseGeocodePreference>
            // </ReverseGeocodeRequest>

            // parse
            hXML.setXMLString(req.toString());
            var data = hXML.parse();

            should().exist(data);

            expect(data).to.have.property("ReverseGeocodeRequest");
            expect(data["ReverseGeocodeRequest"]).to.have.property("Position");
            expect(data["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:Point");
            expect(data["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:CircleByCenterPoint");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Point"]).to.have.property("gml:pos");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Point"]["gml:pos"].textContent).to.equal("2.39 48.9");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:pos");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:radius");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]["gml:pos"].textContent).to.equal("2.38 49");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:CircleByCenterPoint"]["gml:radius"].textContent).to.equal("100");
            expect(data["ReverseGeocodeRequest"]).to.have.property("ReverseGeocodePreference");
        });

        it("Construction de la Requête ReverseGeocodage avec filtre spatial : polygone simple", function () {

            var req = new ReverseGeocodeRequest({
                position : {
                    x : 2.39,
                    y : 48.9
                },
                returnFreeForm : true,
                filterOptions : {
                    type : ["PositionOfInterest", "StreetAddress"],
                    polygon : [
                        {x : 2.38, y : 49},
                        {x : 2.38, y : 49.1},
                        {x : 2.39, y : 49.1},
                        {x : 2.39, y : 49},
                        {x : 2.38, y : 49}
                    ]
                }
            });

            // console.log(req.toString());
            // out
            // <ReverseGeocodeRequest returnFreeForm=true>
            // 	<Position>
            // 		<gml:Point xmlns:gml="http://www.opengis.net/gml"><gml:pos>2.39 48.9</gml:pos></gml:Point>
            // 		<gml:Polygon xmlns:gml="http://www.opengis.net/gml"><gml:exterior><gml:LinearRing><gml:posList>2.38 49 2.38 49.1 2.39 49.1 2.39 49 2.38 49</gml:posList></gml:LinearRing></gml:exterior></gml:Polygon>
            // 	</Position>
            //  <ReverseGeocodePreference>StreetAddress</ReverseGeocodePreference>
            // 	<ReverseGeocodePreference>PositionOfInterest</ReverseGeocodePreference>
            // </ReverseGeocodeRequest>

            // parse
            hXML.setXMLString(req.toString());
            var data = hXML.parse();

            should().exist(data);

            expect(data).to.have.property("ReverseGeocodeRequest");
            expect(data["ReverseGeocodeRequest"]).to.have.property("Position");
            expect(data["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:Point");
            expect(data["ReverseGeocodeRequest"]["Position"]).to.have.property("gml:Polygon");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Point"]).to.have.property("gml:pos");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Point"]["gml:pos"].textContent).to.equal("2.39 48.9");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Polygon"]).to.have.property("gml:exterior");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Polygon"]["gml:exterior"]).to.have.property("gml:LinearRing");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Polygon"]["gml:exterior"]["gml:LinearRing"]).to.have.property("gml:posList");
            expect(data["ReverseGeocodeRequest"]["Position"]["gml:Polygon"]["gml:exterior"]["gml:LinearRing"]["gml:posList"].textContent).to.equal("2.38 49 2.38 49.1 2.39 49.1 2.39 49 2.38 49");
            expect(data["ReverseGeocodeRequest"]).to.have.property("ReverseGeocodePreference");
        });
    });
});

import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import XML from "../../src/Formats/XML";
import XLS from "../../src/Formats/XLS";

describe("-- Test XLS --", function () {

    // parser pour les requêtes
    var hXML;

    before(function (done) {
        hXML = new XML();
        done();
    });

    after(function () {
        hXML = null;
    });

    var strDefaultRequest =
    "<XLS version=\"1.2\"" +
    "xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.opengis.net/xls\" xmlns:gml=\"http://www.opengis.net/gml\"" +
    "xsi:schemaLocation=\"http://www.opengis.net/xls http://schemas.opengis.net/ols/1.2/olsAll.xsd\">" +
    "<RequestHeader srsName=\"EPSG:4326\"/>" +
    "<Request maximumResponses=\"25\" methodName=\"null\" requestID=\"492e8924-423e-4821-92b5-dbf93605d7b6\" version=\"1.2\">" +
    "<!-- __REQUESTSERVICE__ -->" +
    "</Request>" +
    "</XLS>";

    describe("XLS Request", function () {/*TODO*/});
    describe("XLS RequestHeader", function () {/*TODO*/});
    describe("XLS AbstractService", function () {/*TODO*/});
    describe("XLS", function () {

        it("Appel du constructeur (vide)", function () {
            // par defaut,
            //	version 1.2
            // 	srs : EPSG:4326
            //  maximumResponses : 25
            // la param "methodName" n'est pas connu : null
            // car pas d'objet LUS
            var oXls = new XLS();
            var result = oXls.build();

            // parse
            hXML.setXMLString(result);
            var data = hXML.parse();

            should().exist(data);
            expect(data).to.have.property("XLS");

            var xls = data["XLS"];
            var req = xls["Request"];
            var hdr = xls["RequestHeader"];

            expect(xls).to.have.property("Request");
            expect(xls).to.have.property("RequestHeader");
            expect(xls).to.have.property("attributes");
            expect(xls["attributes"]).to.have.property("xmlns:xls");
            expect(xls["attributes"]).to.have.property("xmlns:gml");
            expect(xls["attributes"]).to.have.property("xmlns:xsi");
            expect(xls["attributes"]).to.have.property("xsi:schemaLocation");

            expect(req["attributes"]).to.have.property("maximumResponses", "25");
            expect(req["attributes"]).to.have.property("methodName", "null");
            expect(req["attributes"]).to.have.property("version", "1.2");
            expect(req["attributes"]).to.have.property("requestID");

            expect(hdr["attributes"]).to.have.property("srsName", "EPSG:4326");

        });

        it("Appel du constructeur (param)", function () {
            // options pour srsName et maximumResponses
            // la param 'methodName' n'est pas connu : null
            // car pas d'objet LUS
            var options = {
                srsName : "epsg:4326",
                maximumResponses : 5
            };
            var oXls = new XLS(options);
            var result = oXls.build();

            // parse
            hXML.setXMLString(result);
            var data = hXML.parse();

            should().exist(data);
            expect(data).to.have.property("XLS");

            var req = data["XLS"]["Request"];
            var hdr = data["XLS"]["RequestHeader"];

            expect(req["attributes"]).to.have.property("maximumResponses", "5");
            expect(req["attributes"]).to.have.property("methodName", "null");
            expect(req["attributes"]).to.have.property("version", "1.2");
            expect(hdr["attributes"]).to.have.property("srsName", "epsg:4326");
        });

        it("Ajout du namespace par defaut (xls)", function () {
            // options pour srsName et maximumResponses
            // la param 'methodName' n'est pas connu : null
            // car pas d'objet LUS  ou RouteService
            var options = {
                srsName : "epsg:4326",
                maximumResponses : 5
            };
            var oXls = new XLS(options);
            oXls.namespace = true;
            var result = oXls.build();

            // parse
            hXML.setXMLString(result);
            var data = hXML.parse();

            should().exist(data);
            expect(data).to.have.property("xls:XLS");

            var req = data["xls:XLS"]["xls:Request"];
            var hdr = data["xls:XLS"]["xls:RequestHeader"];

            expect(req["attributes"]).to.have.property("maximumResponses", "5");
            expect(req["attributes"]).to.have.property("methodName", "null");
            expect(req["attributes"]).to.have.property("version", "1.2");
            expect(hdr["attributes"]).to.have.property("srsName", "epsg:4326");
        });

        it("Ajout du namespace existant (xls)", function () {
            // options pour srsName et maximumResponses
            // la param 'methodName' n'est pas connu : null
            // car pas d'objet LUS  ou RouteService
            var options = {
                srsName : "epsg:4326",
                maximumResponses : 5
            };
            var oXls = new XLS(options);
            var request = oXls.build();
            var result  = oXls.addNamespace({
                key : "xls",
                url : "http://namespace/test.xsd"
            }, request);

            // parse
            hXML.setXMLString(result);
            var data = hXML.parse();

            should().exist(data);
            expect(data).to.have.property("xls:XLS");

            var req = data["xls:XLS"]["xls:Request"];
            var hdr = data["xls:XLS"]["xls:RequestHeader"];

            expect(req["attributes"]).to.have.property("maximumResponses", "5");
            expect(req["attributes"]).to.have.property("methodName", "null");
            expect(req["attributes"]).to.have.property("version", "1.2");
            expect(hdr["attributes"]).to.have.property("srsName", "epsg:4326");
        });

        xit("Ajout d'un nouvel namespace", function () {
            // options pour srsName et maximumResponses
            // la param "methodName' n'est pas connu : null
            // car pas d'objet LUS ou RouteService
            var options = {
                srsName : "epsg:4326",
                maximumResponses : 5
            };
            var oXls = new XLS(options);
            var request = oXls.build();
            var result  = oXls.addNamespace({
                key : "test",
                url : "http://namespace/test.xsd"
            }, request);

            // parse
            hXML.setXMLString(result);
            var data = hXML.parse();

            should().exist(data);
            expect(data).to.have.property("test:XLS");

            var req = data["test:XLS"]["test:Request"];
            var hdr = data["test:XLS"]["test:RequestHeader"];

            expect(req["attributes"]).to.have.property("maximumResponses", "5");
            expect(req["attributes"]).to.have.property("methodName", "null");
            expect(req["attributes"]).to.have.property("version", "1.2");
            expect(hdr["attributes"]).to.have.property("srsName", "epsg:4326");
        });
    });
});

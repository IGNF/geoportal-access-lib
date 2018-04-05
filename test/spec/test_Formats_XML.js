import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import XML from "../../src/Formats/XML";
import AltiResponseReader from "../../src/Services/Alti/Formats/AltiResponseReader";

describe("-- Test XML parser --", function () {

    describe("XML", function () {

        var xmlStringMinify   = "<elevations><elevation><lon>0.2367</lon><lat>48.0551</lat><z>96.35</z><acc>2.5</acc></elevation><elevation><lon>2.157</lon><lat>46.6077</lat><z>207.52</z><acc>2.5</acc></elevation></elevations>";
        var xmlStringBeautify = "\
<elevations>\
<elevation>\
    <lon>0.2367</lon>\
    <lat>48.0551</lat>\
    <z>96.35</z>\
    <acc>2.5</acc>\
</elevation>\
<elevation>\
    <lon>2.157</lon>\
    <lat>46.6077</lat>\
    <z>207.52</z>\
    <acc>2.5</acc>\
</elevation>\
</elevations>";

        it("test de new XML()", function () {
            var p = new XML();

            should().exist(p);
            should().exist(p.logger);
            expect(p.xmlString).to.be.null;
            expect(p.reader).to.be.null;
            expect(p.xmlDoc).to.be.null;
        });

        it("test de setXMLString(xmlString) et getters", function () {
            var p = new XML();

            p.setXMLString(xmlStringMinify);
            expect(p.xmlString).to.be.a("string");

            var s = p.getXMLString();
            should().exist(s);
            expect(s).to.be.a("string");
            assert.strictEqual(s, xmlStringMinify, "p.xmlString is equal to input xmlString");

            var x = p.getXMLDoc();
            should().exist(x);
            should().exist(x.documentElement);
        });

        it("test de setReader(reader)", function () {
            var p = new XML();

            p.setReader(AltiResponseReader);
            expect(p.reader).to.be.a("object");
            expect(p.reader.read).to.be.a("function");
            var r = p.getReader();
            should().exist(r);
        });

        it("test de new XML(options)", function () {
            var options = {
                reader : AltiResponseReader,
                xmlString : xmlStringMinify
            };
            var p = new XML(options);
            should().exist(p);
            should().exist(p.xmlString);
            should().exist(p.reader);
            should().exist(p.xmlDoc);
        });

        it("test de parse() avec un reader (AltiResponseReader) et une réponse alti", function () {
            var p = new XML({
                reader : AltiResponseReader,
                xmlString : xmlStringMinify
            });

            var data = p.parse();
            should().exist(data);
            expect(data).to.have.property("elevations");
            expect(data.elevations).to.be.an("array");
            expect(data.elevations[0]).to.have.property("lat");
            expect(data.elevations[0]).to.have.property("lon");
            expect(data.elevations[0]).to.have.property("z");
            expect(data.elevations[0]).to.have.property("acc");
        });

        it("test du parser par défaut (parse() sans reader) et une réponse alti", function () {
            var p = new XML({
                xmlString : xmlStringMinify
            });
            var data = p.parse();
            expect(data).to.have.property("elevations");
            expect(data.elevations).to.have.property("elevation");
            expect(data.elevations.elevation).to.be.an("array");
            expect(data.elevations.elevation[0]).to.have.property("lat");
            expect(data.elevations.elevation[0]).to.have.property("lon");
            expect(data.elevations.elevation[0]).to.have.property("z");
            expect(data.elevations.elevation[0]).to.have.property("acc");
            expect(data.elevations.elevation[0].z).to.have.property("textContent");
        });
    });
});

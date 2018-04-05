/*
* Tests les propriétés de la classe de réponse de calcul altimétrique (AltiResponse).
*/
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import AltiResponse from "../../src/Services/Alti/Response/model/AltiResponse";
import Elevation from "../../src/Services/Alti/Response/model/Elevation";
import AltiResponseReader from "../../src/Services/Alti/Formats/AltiResponseReader";
import XML from "../../src/Formats/XML";

describe("-- Tests Alti --", function () {

    describe("-- AltiResponse", function () {

        it("new AltiResponse()", function () {
            var o = new AltiResponse();
            should().exist(o);

            var elevations = o.elevations;
            should().exist(elevations);
            expect(elevations).to.be.an("Array");
            expect(elevations).to.be.empty;
        });

    });

    describe("-- TODO : Elevation", function () {});

    describe("-- AltiResponseReader", function () {

        var p = new XML();
        // construction de root à passer en paramètres (à partir d'une réponse de géocodage)
        var xmlAltiReponse = "<elevations><elevation><lon>0.2367</lon><lat>48.0551</lat><z>93.58</z><acc>2.5</acc></elevation><elevation><lon>2.157</lon><lat>46.6077</lat><z>207.53</z><acc>2.5</acc></elevation></elevations>";
        p.setXMLString(xmlAltiReponse);
        var xmlDoc = p.getXMLDoc();

        // réponse du service avec une exception
        var xmlErrorReponse = "<ExceptionReport><Exception exceptionCode='MissingRights'>No rights for this ressource or ressource does not exist</Exception></ExceptionReport>";
        p.setXMLString(xmlErrorReponse);
        var xmlErrorDoc  = p.getXMLDoc();

        it("attributs de AltiResponseReader", function () {
            should().exist(AltiResponseReader);
            expect(AltiResponseReader).to.have.property("READERS");
            expect(AltiResponseReader).to.have.property("read");
        });

        it("AltiResponseReader.read(root)", function () {
            // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
            var rep = AltiResponseReader.read(xmlDoc.documentElement);
            should().exist(rep);
            expect(rep).to.have.property("elevations");
            expect(rep.elevations).to.be.an("array");
            expect(rep.elevations).to.have.length(2);
            expect(rep.elevations[0]).to.have.property("z", 93.58);
            expect(rep.elevations[1]).to.have.property("lon", 2.157);
            // vérification avec une réponse contenant une exception
            rep = AltiResponseReader.read(xmlErrorDoc.documentElement);
            should().exist(rep);
            expect(rep).to.have.property("exceptionReport");
            expect(rep.exceptionReport).to.have.property("exceptionCode", "MissingRights");
        });

    });

});

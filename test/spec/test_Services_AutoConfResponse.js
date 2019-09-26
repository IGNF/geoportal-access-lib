/*
* Tests sur les propriétés de la classe de réponse d'autoconfiguration' (AutoConfResponse).
*/
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import AutoConfResponse from "../../src/Services/AutoConf/Response/model/AutoConfResponse";
import Constraint from "../../src/Services/AutoConf/Response/model/Constraint";
import Format from "../../src/Services/AutoConf/Response/model/Format";
import Layer from "../../src/Services/AutoConf/Response/model/Layer";
import Legend from "../../src/Services/AutoConf/Response/model/Legend";
import Metadata from "../../src/Services/AutoConf/Response/model/Metadata";
import Originator from "../../src/Services/AutoConf/Response/model/Originator";
import Service from "../../src/Services/AutoConf/Response/model/Service";
import Style from "../../src/Services/AutoConf/Response/model/Style";
import Territory from "../../src/Services/AutoConf/Response/model/Territory";
import Thematic from "../../src/Services/AutoConf/Response/model/Thematic";
import TileMatrix from "../../src/Services/AutoConf/Response/model/TileMatrix";
import TileMatrixLimit from "../../src/Services/AutoConf/Response/model/TileMatrixLimit";
import TileMatrixSet from "../../src/Services/AutoConf/Response/model/TileMatrixSet";
import AutoConfResponseReader from "../../src/Services/AutoConf/Formats/AutoConfResponseReader";

describe("-- Tests AutoConfResponse --", function () {

    describe("-- AutoConfResponse", function () {

        it("attributs de AutoConfResponse()", function () {
            var a = new AutoConfResponse();
            should().exist(a);

            expect(a).to.have.property("generalOptions");
            expect(a.generalOptions).to.be.an("object");
            expect(a.generalOptions).to.have.property("apiKeys");
            expect(a.generalOptions.apiKeys).to.be.an("object");
            expect(a.generalOptions).to.have.property("title");
            expect(a.generalOptions).to.have.property("defaultGMLGFIStyle");
            expect(a.generalOptions).to.have.property("theme");
            expect(a.generalOptions).to.have.property("wgs84Resolutions");
            expect(a.generalOptions.wgs84Resolutions).to.be.an("array");

            expect(a).to.have.property("layers");
            expect(a.layers).to.be.an("object");
            expect(a.layers).to.be.empty;

            expect(a).to.have.property("territories");
            expect(a.territories).to.be.an("object");
            expect(a.territories).to.be.empty;

            expect(a).to.have.property("tileMatrixSets");
            expect(a.tileMatrixSets).to.be.an("object");
            expect(a.tileMatrixSets).to.be.empty;

            expect(a).to.have.property("services");
            expect(a.services).to.be.an("object");
            expect(a.services).to.be.empty;
        });

        it("attributs de Layer()", function () {
            var l = new Layer();
            should().exist(l);
            // info: les attributs de Layer ne sont ajoutés qu'au fur et à mesure de la lecture de la réponse autoconf
            // Layer est donc un objet vide à l'instanciation.
        });

        it("attributs de Territory()", function () {
            var t = new Territory();
            should().exist(t);

            expect(t).to.have.property("isDefault");
            expect(t).to.have.property("defaultCRS");
            expect(t).to.have.property("additionalCRS");
            expect(t).to.have.property("geoBBOX");

            expect(t.geoBBOX).to.be.an("object");
            expect(t.geoBBOX).to.have.property("left");
            expect(t.geoBBOX).to.have.property("right");
            expect(t.geoBBOX).to.have.property("top");
            expect(t.geoBBOX).to.have.property("bottom");

            expect(t).to.have.property("geoCenter");
            expect(t.geoCenter).to.be.an("object");
            expect(t.geoCenter).to.have.property("lon");
            expect(t.geoCenter).to.have.property("lat");

            expect(t).to.have.property("defaultOptions");
            expect(t.defaultOptions).to.be.an("object");
            expect(t.defaultOptions).to.have.property("resolution");
            expect(t.defaultOptions).to.have.property("minScaleDenominator");
            expect(t.defaultOptions).to.have.property("maxScaleDenominator");

            expect(t).to.have.property("defaultLayers");
            expect(t.defaultLayers).to.be.an("array");
        });

        it("attributs de TileMatrixSet()", function () {
            var t = new TileMatrixSet();
            should().exist(t);

            expect(t).to.have.property("projection");
            expect(t).to.have.property("nativeResolutions");
            expect(t.nativeResolutions).to.be.an("array");
            expect(t).to.have.property("matrixIds");
            expect(t.matrixIds).to.be.an("array");
            expect(t).to.have.property("tileMatrices");
            expect(t.tileMatrices).to.be.an("object");
        });

        it("attributs de TileMatrixLimit()", function () {
            var t = new TileMatrixLimit();
            should().exist(t);

            expect(t).to.have.property("minTileRow");
            expect(t).to.have.property("maxTileRow");
            expect(t).to.have.property("minTileCol");
            expect(t).to.have.property("maxTileCol");
        });

        it("attributs de TileMatrix()", function () {
            var t = new TileMatrix();
            should().exist(t);

            expect(t).to.have.property("matrixId");
            expect(t).to.have.property("matrixHeight");
            expect(t).to.have.property("matrixWidth");
            expect(t).to.have.property("scaleDenominator");
            expect(t).to.have.property("tileHeight");
            expect(t).to.have.property("tileWidth");
            expect(t).to.have.property("topLeftCorner");
        });

        it("attributs de Service()", function () {
            var s = new Service();
            should().exist(s);

            expect(s).to.have.property("title");
            expect(s).to.have.property("serverUrl");
            expect(s).to.have.property("version");
        });

        it("attributs de Legend()", function () {
            var l = new Legend();
            should().exist(l);

            expect(l).to.have.property("format");
            expect(l).to.have.property("url");
            expect(l).to.have.property("minScaleDenominator");
        });

        it("attributs de Metadata()", function () {
            var m = new Metadata();
            should().exist(m);

            expect(m).to.have.property("format");
            expect(m).to.have.property("url");
        });

        it("attributs de Originator()", function () {
            var o = new Originator();
            should().exist(o);

            expect(o).to.have.property("name");
            expect(o).to.have.property("attribution");
            expect(o).to.have.property("logo");
            expect(o).to.have.property("url");
            expect(o).to.have.property("constraints");
            expect(o.constraints).to.be.an("array");
        });

        it("attributs de Thematic()", function () {
            var t = new Thematic();
            should().exist(t);

            expect(t).to.have.property("inspire");
            expect(t).to.have.property("name");
        });

        it("attributs de Constraint()", function () {
            var c = new Constraint();
            should().exist(c);

            expect(c).to.have.property("crs");
            expect(c).to.have.property("bbox");
            expect(c.bbox).to.be.an("object");
            expect(c.bbox).to.have.property("left");
            expect(c.bbox).to.have.property("right");
            expect(c.bbox).to.have.property("top");
            expect(c.bbox).to.have.property("bottom");
            expect(c).to.have.property("minScaleDenominator");
            expect(c).to.have.property("maxScaleDenominator");
            expect(c).to.have.property("temporalExtent");
        });

        it("attributs de Format()", function () {
            var f = new Format();
            should().exist(f);

            expect(f).to.have.property("current");
            expect(f).to.have.property("name");
        });

        it("attributs de Style()", function () {
            var s = new Style();
            should().exist(s);

            expect(s).to.have.property("name");
            expect(s).to.have.property("title");
            expect(s).to.have.property("current");
            expect(s).to.have.property("url");
        });

    });

    describe("-- test de AutoConfResponseReader", function () {

        it("attributs de AutoConfResponseReader", function () {
            should().exist(AutoConfResponseReader);
            expect(AutoConfResponseReader).to.have.property("VERSION", "1.1.0");
            expect(AutoConfResponseReader).to.have.property("NAMESPACES");
            expect(AutoConfResponseReader).to.have.property("SCHEMALOCATION");
            expect(AutoConfResponseReader.SCHEMALOCATION).to.be.an("array");
            expect(AutoConfResponseReader.SCHEMALOCATION).to.have.length(2);
            expect(AutoConfResponseReader.SCHEMALOCATION[0]).to.equal("http://www.opengis.net/context http://wxs.ign.fr/schemas/extContext.xsd http://api.ign.fr/geoportail http://wxs.ign.fr/schemas/autoconf/autoconf.xsd");
            expect(AutoConfResponseReader.SCHEMALOCATION[1]).to.equal("http://www.opengis.net/context http://wxs.ign.fr/schemas/extContext.xsd http://api.ign.fr/geoportail http://wxs.ign.fr/schemas/autoconf.xsd");
            expect(AutoConfResponseReader).to.have.property("DEFAULTPREFIX", "context");
            expect(AutoConfResponseReader).to.have.property("READERS");

            expect(AutoConfResponseReader.READERS).to.have.property("context");
            expect(AutoConfResponseReader.READERS.context).to.have.property("ViewContext");
            expect(AutoConfResponseReader.READERS.context).to.have.property("Title");
            expect(AutoConfResponseReader.READERS.context).to.have.property("Abstract");
            expect(AutoConfResponseReader.READERS.context).to.have.property("Server");
            expect(AutoConfResponseReader.READERS.context).to.have.property("OnlineResource");
            expect(AutoConfResponseReader.READERS.context).to.have.property("LayerList");
            expect(AutoConfResponseReader.READERS.context).to.have.property("Layer");
            expect(AutoConfResponseReader.READERS.context).to.have.property("Name");
            expect(AutoConfResponseReader.READERS.context).to.have.property("SRS");
            expect(AutoConfResponseReader.READERS.context).to.have.property("Format");
            expect(AutoConfResponseReader.READERS.context).to.have.property("Style");
            expect(AutoConfResponseReader.READERS.context).to.have.property("Dimension");

            expect(AutoConfResponseReader.READERS).to.have.property("gpp");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Theme");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("defaultGMLGFIStyleUrl");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Territory");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("defaultCRS");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("AdditionalCRS");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("DefaultLayer");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("BoundingBox");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Resolution");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("x");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("y");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Resolutions");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Layer");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Constraint");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("CRS");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Thematic");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("InspireThematic");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Originator");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Attribution");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Logo");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("URL");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Legend");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("LegendURL");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("QuickLook");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("MetadataURL");
            expect(AutoConfResponseReader.READERS.gpp).to.have.property("Key");

            expect(AutoConfResponseReader.READERS).to.have.property("ows");
            expect(AutoConfResponseReader.READERS.ows).to.have.property("Identifier");
            expect(AutoConfResponseReader.READERS.ows).to.have.property("SupportedCRS");

            expect(AutoConfResponseReader.READERS).to.have.property("sld");
            expect(AutoConfResponseReader.READERS.sld).to.have.property("MinScaleDenominator");
            expect(AutoConfResponseReader.READERS.sld).to.have.property("MaxScaleDenominator");

            expect(AutoConfResponseReader.READERS).to.have.property("wmts");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("TileMatrixSetLimits");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("TileMatrixLimits");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("TileMatrixSet");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("TileMatrix");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("ScaleDenominator");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("TopLeftCorner");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("TileWidth");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("TileHeight");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("MatrixWidth");
            expect(AutoConfResponseReader.READERS.wmts).to.have.property("MatrixHeight");

            expect(AutoConfResponseReader.READERS).to.have.property("serviceException");
            expect(AutoConfResponseReader.READERS).to.have.property("exception");
        });

    });

});

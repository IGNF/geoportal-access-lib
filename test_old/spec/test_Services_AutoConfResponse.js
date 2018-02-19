/* 
 * Tests sur les propriétés de la classe de réponse d'autoconfiguration' (AutoConfResponse).
 */
define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests AutoConfResponse --", function() {

        describe("-- test de l'objet AutoConfResponse en sortie", function() {

            var AutoConfResponse;
            var Constraint, Format, LayerConfig,
                Legend, Metadata, Originator, Service, 
                Style, Territory, Thematic, TileMatrix, 
                TileMatrixLimit, TileMatrixSet;

            beforeEach(function(done) {
                require([
                    "Services/AutoConf/Response/model/AutoConfResponse", 
                    "Services/AutoConf/Response/model/Constraint",
                    "Services/AutoConf/Response/model/Format",
                    "Services/AutoConf/Response/model/Layer",
                    "Services/AutoConf/Response/model/Legend",
                    "Services/AutoConf/Response/model/Metadata",
                    "Services/AutoConf/Response/model/Originator",
                    "Services/AutoConf/Response/model/Service",
                    "Services/AutoConf/Response/model/Style",
                    "Services/AutoConf/Response/model/Territory",
                    "Services/AutoConf/Response/model/Thematic",
                    "Services/AutoConf/Response/model/TileMatrix",
                    "Services/AutoConf/Response/model/TileMatrixLimit",
                    "Services/AutoConf/Response/model/TileMatrixSet"
                ], function(
                    _AutoConfResponse, 
                    _Constraint, 
                    _Format, 
                    _Layer, 
                    _Legend, 
                    _Metadata, 
                    _Originator, 
                    _Service, 
                    _Style, 
                    _Territory, 
                    _Thematic, 
                    _TileMatrix, 
                    _TileMatrixLimit, 
                    _TileMatrixSet
                ) {
                    AutoConfResponse = _AutoConfResponse;
                    Constraint = _Constraint; 
                    Format = _Format; 
                    Layer = _Layer; 
                    Legend = _Legend; 
                    Metadata = _Metadata; 
                    Originator = _Originator; 
                    Service = _Service; 
                    Style = _Style; 
                    Territory = _Territory; 
                    Thematic = _Thematic; 
                    TileMatrix = _TileMatrix; 
                    TileMatrixLimit = _TileMatrixLimit; 
                    TileMatrixSet = _TileMatrixSet;
                    done();
                });
            });

            it("attributs de AutoConfResponse()", function() {
                var a = new AutoConfResponse();
                should.exist(a);

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

            it("attributs de Layer()", function() {
                var l = new Layer();
                should.exist(l);
                // info: les attributs de Layer ne sont ajoutés qu'au fur et à mesure de la lecture de la réponse autoconf
                // Layer est donc un objet vide à l'instanciation.
            });

            it("attributs de Territory()", function() {
                var t = new Territory();
                should.exist(t);

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

            it("attributs de TileMatrixSet()", function() {
                var t = new TileMatrixSet();
                should.exist(t);

                expect(t).to.have.property("projection");
                expect(t).to.have.property("nativeResolutions");
                expect(t.nativeResolutions).to.be.an("array");
                expect(t).to.have.property("matrixIds");
                expect(t.matrixIds).to.be.an("array");
                expect(t).to.have.property("tileMatrices");
                expect(t.tileMatrices).to.be.an("object");
            });

            it("attributs de TileMatrixLimit()", function() {
                var t = new TileMatrixLimit();
                should.exist(t);

                expect(t).to.have.property("minTileRow");
                expect(t).to.have.property("maxTileRow");
                expect(t).to.have.property("minTileCol");
                expect(t).to.have.property("maxTileCol");
            });

            it("attributs de TileMatrix()", function() {
                var t = new TileMatrix();
                should.exist(t);

                expect(t).to.have.property("matrixId");
                expect(t).to.have.property("matrixHeight");
                expect(t).to.have.property("matrixWidth");
                expect(t).to.have.property("scaleDenominator");
                expect(t).to.have.property("tileHeight");
                expect(t).to.have.property("tileWidth");
                expect(t).to.have.property("topLeftCorner");
            });

            it("attributs de Service()", function() {
                var s = new Service();
                should.exist(s);

                expect(s).to.have.property("title");
                expect(s).to.have.property("serverUrl");
                expect(s).to.have.property("version");
            });

            it("attributs de Legend()", function() {
                var l = new Legend();
                should.exist(l);

                expect(l).to.have.property("format");
                expect(l).to.have.property("url");
                expect(l).to.have.property("minScaleDenominator");
            });

            it("attributs de Metadata()", function() {
                var m = new Metadata();
                should.exist(m);

                expect(m).to.have.property("format");
                expect(m).to.have.property("url");
            });

            it("attributs de Originator()", function() {
                var o = new Originator();
                should.exist(o);

                expect(o).to.have.property("name");
                expect(o).to.have.property("attribution");
                expect(o).to.have.property("logo");
                expect(o).to.have.property("url");
                expect(o).to.have.property("constraints");
                expect(o.constraints).to.be.an("array");
            });

            it("attributs de Thematic()", function() {
                var t = new Thematic();
                should.exist(t);

                expect(t).to.have.property("inspire");
                expect(t).to.have.property("name");
            });
  
            it("attributs de Constraint()", function() {
                var c = new Constraint();
                should.exist(c);

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
   
            it("attributs de Format()", function() {
                var f = new Format();
                should.exist(f);

                expect(f).to.have.property("current");
                expect(f).to.have.property("name");
            });
   
            it("attributs de Style()", function() {
                var s = new Style();
                should.exist(s);

                expect(s).to.have.property("name");
                expect(s).to.have.property("title");
                expect(s).to.have.property("current");
            });                 

        });

        describe("-- test de AutoConfResponseReader", function() {

            var AutoConfResponseReader;

            beforeEach(function(done) {
                require(["Services/AutoConf/Formats/AutoConfResponseReader"], function(_AutoConfResponseReader) {
                    AutoConfResponseReader = _AutoConfResponseReader;
                    done();
                })
            })

            it("attributs de AutoConfResponseReader", function() {
                should.exist(AutoConfResponseReader);
                expect(AutoConfResponseReader).to.have.property("VERSION", "1.1.0");
                expect(AutoConfResponseReader).to.have.property("NAMESPACES");
                expect(AutoConfResponseReader).to.have.property("SCHEMALOCATION");
                expect(AutoConfResponseReader.SCHEMALOCATION).to.be.an("array");
                expect(AutoConfResponseReader.SCHEMALOCATION).to.have.length(2);
                expect(AutoConfResponseReader.SCHEMALOCATION[0]).to.equal("http://www.opengis.net/context http://gpp3-wxs.ign.fr/schemas/extContext.xsd http://api.ign.fr/geoportail http://wxs.ign.fr/schemas/autoconf/autoconf.xsd");
                expect(AutoConfResponseReader.SCHEMALOCATION[1]).to.equal("http://www.opengis.net/context http://gpp3-wxs.ign.fr/schemas/extContext.xsd http://api.ign.fr/geoportail http://gpp3-wxs.ign.fr/schemas/autoconf.xsd");
                expect(AutoConfResponseReader).to.have.property("DEFAULTPREFIX", "context");
                expect(AutoConfResponseReader).to.have.property("READERS");

                expect(AutoConfResponseReader).to.have.deep.property("READERS.context");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.ViewContext");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.Title");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.Abstract");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.Server");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.OnlineResource");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.LayerList");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.Layer");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.Name");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.SRS");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.Format");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.Style");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.context.Dimension");

                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Theme");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.defaultGMLGFIStyleUrl");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Territory");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.defaultCRS");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.AdditionalCRS");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.DefaultLayer");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.BoundingBox");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Resolution");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.x");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.y");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Resolutions");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Layer");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Constraint");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.CRS");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Thematic");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.InspireThematic");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Originator");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Attribution");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Logo");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.URL");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Legend");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.LegendURL");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.QuickLook");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.MetadataURL");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.gpp.Key");

                expect(AutoConfResponseReader).to.have.deep.property("READERS.ows");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.ows.Identifier");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.ows.SupportedCRS");

                expect(AutoConfResponseReader).to.have.deep.property("READERS.sld");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.sld.MinScaleDenominator");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.sld.MaxScaleDenominator");

                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.TileMatrixSetLimits");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.TileMatrixLimits");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.TileMatrixSet");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.TileMatrix");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.ScaleDenominator");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.TopLeftCorner");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.TileWidth");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.TileHeight");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.MatrixWidth");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.wmts.MatrixHeight");

                expect(AutoConfResponseReader).to.have.deep.property("READERS.serviceException");
                expect(AutoConfResponseReader).to.have.deep.property("READERS.exception");
            });

        });

    });
});

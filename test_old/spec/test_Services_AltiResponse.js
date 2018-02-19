/* 
 * Tests les propriétés de la classe de réponse de calcul altimétrique (AltiResponse).
 */
define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests Alti --", function() {

        describe("-- test de l'objet AltiResponse en sortie", function() {

            var AltiResponse;
            var Elevation;
            var e;
            var elevation;
            var elevations;

            beforeEach(function(done) {
                require(["Services/Alti/Response/model/AltiResponse", "Services/Alti/Response/model/Elevation"], function(_AltiResponse, _Elevation) {
                    AltiResponse = _AltiResponse;
                    Elevation = _Elevation;
                    e = new AltiResponse();
                    done();
                });
            });

            it("test de new Elevations()", function() {
                should.exist(e);

                elevations = e.elevations;
                should.exist(elevations);
                expect(elevations).to.be.an("Array");
                expect(elevations).to.be.empty;
            });

        });

        describe("-- test d'Elevation()", function() {

            var Elevation;
            var e;
            
            beforeEach(function(done) {
                require(["Services/Alti/Response/model/Elevation"], function(_Elevation) {
                    Elevation = _Elevation;
                    e = new Elevation();
                    done();
                });
            });

        });


        describe("-- test de AltiResponseReader", function() {

            var AltiResponseReader;
            // construction de root à passer en paramètres (à partir d'une réponse de géocodage)
            var xmlAltiReponse = "<elevations><elevation><lon>0.2367</lon><lat>48.0551</lat><z>93.58</z><acc>2.5</acc></elevation><elevation><lon>2.157</lon><lat>46.6077</lat><z>207.53</z><acc>2.5</acc></elevation></elevations>";
            var xmlDoc = new DOMParser().parseFromString(xmlAltiReponse,"text/xml");
            // réponse du service avec une exception
            var xmlErrorReponse = "<ExceptionReport><Exception exceptionCode='MissingRights'>No rights for this ressource or ressource does not exist</Exception></ExceptionReport>";
            var xmlErrorDoc = new DOMParser().parseFromString(xmlErrorReponse,"text/xml");

            beforeEach(function(done) {
                require(["Services/Alti/Formats/AltiResponseReader"], function(_AltiResponseReader) {
                    AltiResponseReader = _AltiResponseReader;
                    done();
                })
            })

            it("attributs de AltiResponseReader", function() {
                should.exist(AltiResponseReader);
                expect(AltiResponseReader).to.have.property("READERS");
                expect(AltiResponseReader).to.have.property("read");
            });

            it("AltiResponseReader.read(root)", function() {
                // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
                var rep = AltiResponseReader.read(xmlDoc.documentElement);
                should.exist(rep);
                expect(rep).to.have.property("elevations");
                expect(rep.elevations).to.be.an("array");
                expect(rep.elevations).to.have.length(2);
                expect(rep.elevations[0]).to.have.property("z", 93.58);
                expect(rep.elevations[1]).to.have.property("lon", 2.157);
                // vérification avec une réponse contenant une exception
                rep = AltiResponseReader.read(xmlErrorDoc.documentElement);
                should.exist(rep);
                expect(rep).to.have.property("exceptionReport");
                expect(rep).to.have.deep.property("exceptionReport.exceptionCode", "MissingRights");
            });

        });

    });
});
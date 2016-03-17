/* 
 * Tests sur les propriétés de la classe de réponse de calcul d'itinéraires (RouteResponse).
 */
define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests RouteResponse --", function() {

        describe("-- test de l'objet RouteResponse en sortie", function() {

            var RouteResponse, RouteInstruction;

            beforeEach(function(done) {
                require([
                    "Services/Route/Response/model/RouteResponse",
                    "Services/Route/Response/model/RouteInstruction"
                ], function(
                    _RouteResponse, _RouteInstruction
                ) {
                    RouteResponse = _RouteResponse;
                    RouteInstruction = _RouteInstruction;
                    done();
                });
            });

            it("attributs de RouteResponse()", function() {
                var r = new RouteResponse();
                should.exist(r);

                expect(r).to.have.property("totalTime");
                expect(r).to.have.property("totalDistance");
                expect(r).to.have.property("bbox");
                expect(r.bbox).to.be.an("object");
                expect(r.bbox).to.have.property("left");
                expect(r.bbox).to.have.property("right");
                expect(r.bbox).to.have.property("top");
                expect(r.bbox).to.have.property("bottom");
                expect(r).to.have.property("routeGeometry");
                expect(r).to.have.property("routeInstructions");
                expect(r.routeInstructions).to.be.an("array");
            });

            it("attributs de RouteInstruction()", function() {
                var r = new RouteInstruction();
                should.exist(r);

                expect(r).to.have.property("duration");
                expect(r).to.have.property("distance");
                expect(r).to.have.property("code");
                expect(r).to.have.property("instruction");
            });

        });

        describe("-- test de RouteResponseRESTReader", function() {

            var RouteResponseRESTReader;
            
            beforeEach(function(done) {
                require(["Services/Route/Formats/RouteResponseRESTReader"], function(_RouteResponseRESTReader) {
                    RouteResponseRESTReader = _RouteResponseRESTReader;
                    done();
                })
            })

            it("attributs de RouteResponseRESTReader", function() {
                should.exist(RouteResponseRESTReader);
                expect(RouteResponseRESTReader).to.have.property("READERS");
                expect(RouteResponseRESTReader).to.have.deep.property("READERS.routeResult");
                expect(RouteResponseRESTReader).to.have.deep.property("READERS.status");
                expect(RouteResponseRESTReader).to.have.deep.property("READERS.message");
                expect(RouteResponseRESTReader).to.have.deep.property("READERS.distance");
                expect(RouteResponseRESTReader).to.have.deep.property("READERS.durationSeconds");
                expect(RouteResponseRESTReader).to.have.deep.property("READERS.bounds");
                expect(RouteResponseRESTReader).to.have.deep.property("READERS.geometryWkt");
                expect(RouteResponseRESTReader).to.have.deep.property("READERS.step");
                expect(RouteResponseRESTReader).to.have.property("read");
            });

        });

    });
});
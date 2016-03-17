/* 
 * Tests sur les propriétés de la classe de réponse de calcul d'isochrones (ProcessIsoCurveResponse).
 */
define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests ProcessIsoCurveResponse --", function() {

        describe("-- test de l'objet ProcessIsoCurveResponse en sortie", function() {

            var ProcessIsoCurveResponse;

            beforeEach(function(done) {
                require([
                    "Services/ProcessIsoCurve/Response/model/ProcessIsoCurveResponse"
                ], function(
                    _ProcessIsoCurveResponse
                ) {
                    ProcessIsoCurveResponse = _ProcessIsoCurveResponse;
                    done();
                });
            });

            it("attributs de ProcessIsoCurveResponse()", function() {
                var p = new ProcessIsoCurveResponse();
                should.exist(p);

                expect(p).to.have.property("message");
                expect(p).to.have.property("id");
                expect(p).to.have.property("location");
                expect(p.location).to.be.an("object");
                expect(p.location).to.have.property("x");
                expect(p.location).to.have.property("y");
                expect(p).to.have.property("srs");
                expect(p).to.have.property("geometry");
                expect(p).to.have.property("time");
                expect(p).to.have.property("distance");
            });

        });

    });
});

/* 
 * Tests sur les propriétés de la classe de réponse d'autocompletion (AutoCompleteResponse)
 */
define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests AutoCompleteResponse --", function() {

        describe("-- test de l'objet AutoCompleteResponse en sortie", function() {

            var AutoCompleteResponse;
            var SuggestedLocation;
            var SuggestedPositionOfInterest;
            var SuggestedStreetAddress;

            beforeEach(function(done) {
                require([
                    "Services/AutoComplete/Response/model/AutoCompleteResponse",
                    "Services/AutoComplete/Response/model/SuggestedLocation"
                ], function(
                    _AutoCompleteResponse, 
                    _SuggestedLocation
                ) {
                    AutoCompleteResponse = _AutoCompleteResponse;
                    SuggestedLocation = _SuggestedLocation; 
                    done();
                });
            });

            it("attributs de AutoCompleteResponse()", function() {
                var a = new AutoCompleteResponse();
                should.exist(a);

                expect(a).to.have.property("suggestedLocations");
                expect(a.suggestedLocations).to.be.an("array");
            });

            it("attributs de SuggestedLocation()", function() {
                var s = new SuggestedLocation();
                should.exist(s);

                expect(s).to.have.property("type");
                expect(s).to.have.property("position");
                expect(s.position).to.be.an("object");
                expect(s.position).to.have.property("x", null);
                expect(s.position).to.have.property("y", null);

                expect(s).to.have.property("commune");
                expect(s).to.have.property("fullText");
                expect(s).to.have.property("postalCode");
                expect(s).to.have.property("classification");
                expect(s).to.have.property("street");
                expect(s).to.have.property("poi");
                expect(s).to.have.property("kind");
            });

        });

    });
});

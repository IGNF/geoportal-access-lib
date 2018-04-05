/*
* Tests sur les propriétés de la classe de réponse d'autocompletion (AutoCompleteResponse)
*/
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import AutoCompleteResponse from "../../src/Services/AutoComplete/Response/model/AutoCompleteResponse";
import SuggestedLocation from "../../src/Services/AutoComplete/Response/model/SuggestedLocation";

describe("-- Tests AutoCompleteResponse --", function () {

    describe("-- AutoCompleteResponse", function () {

        var SuggestedPositionOfInterest;
        var SuggestedStreetAddress;

        it("attributs de AutoCompleteResponse()", function () {
            var a = new AutoCompleteResponse();
            should().exist(a);

            expect(a).to.have.property("suggestedLocations");
            expect(a.suggestedLocations).to.be.an("array");
        });

        it("attributs de SuggestedLocation()", function () {
            var s = new SuggestedLocation();
            should().exist(s);

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

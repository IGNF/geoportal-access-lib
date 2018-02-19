
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import Gp from "../../src/Gp";

describe("-- Test for Gp --", function () {

    describe("Gp", function () {

        it("Proprietes de Gp", function () {

            // test des proprietes par defaut
            Gp.should.have.property("servicesVersion");
            Gp.should.have.property("servicesDate");
        });

        it("Namespace de Gp", function () {

            // test des namespace par defaut
            Gp.should.have.property("Services");
            Gp.should.have.property("Error");
            Gp.should.have.property("Protocols");
            Gp.should.have.property("Helper");
        });
    });
});

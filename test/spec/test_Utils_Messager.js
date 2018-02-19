import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import Messager from "../../src/Utils/MessagesResources";

describe("-- Test for Messager --", function () {

    describe("Messager::getMessage()", function () {

        it("getMessage() sans arguments", function () {
            var message = Messager.getMessage();
            expect(message).not.to.be.null;
            expect(message).to.be.equal("Message indefined !");
        });

        it("getMessage(clef) avec clef inconnue", function () {
            var message = Messager.getMessage("BIDON");
            expect(message).not.to.null;
        });

        it("getMessage(clef) avec clef sans parametre", function () {
            var message = Messager.getMessage("SERVICE_REQUEST_EMPTY");
            expect(message).not.to.be.null;
            expect(message).to.be.equal("The request sent to the service is empty");
        });

        it("getMessage(clef, '...') avec clef avec parametre", function () {
            var message = Messager.getMessage("PARAM_UNKNOWN", "test");
            expect(message).not.to.be.null;
            expect(message).to.be.equal("Value(s) for parameter(s) 'test' unknown");
        });

        it("getMessage(clef) avec clef avec oubli du parametre", function () {
            var message = Messager.getMessage("PARAM_UNKNOWN");
            expect(message).not.to.be.null;
            expect(message).to.be.equal("Value(s) for parameter(s) '%var% (not specified)' unknown");
        });

        it("getMessage(clef, '...', '...') avec plusieurs parametres", function () {
            expect(Messager.getMessage("PARAM_MISSING", "test1" , "test2", "test3")).to.be.equal("Parameter(s) 'test1 - test2 - test3' missing");
        });

        it("getMessage(clef, '') sur un parametre vide", function () {
            expect(Messager.getMessage("PARAM_MISSING", "")).to.be.equal("Parameter(s) '' missing");
            expect(Messager.getMessage("SERVICE_REQUEST_EMPTY", "" )).to.be.equal("The request sent to the service is empty");
        });

        it("getMessage(clef, [...]) sur un tableau de parametres", function () {
            expect(Messager.getMessage("PARAM_MISSING", ["test1" , "test2", "test3"])).to.be.equal("Parameter(s) 'test1,test2,test3' missing");
            expect(Messager.getMessage("SERVICE_REQUEST_EMPTY", ["test1" , "test2", "test3"])).to.be.equal("The request sent to the service is empty");
        });

        it("getMessage(clef, []) sur un tableau de parametres vide", function () {
            expect(Messager.getMessage("PARAM_MISSING", [])).to.be.equal("Parameter(s) '' missing");
            expect(Messager.getMessage("SERVICE_REQUEST_EMPTY", [])).to.be.equal("The request sent to the service is empty");
        });
    });
});

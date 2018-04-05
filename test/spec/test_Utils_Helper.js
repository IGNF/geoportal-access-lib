import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import Helper from "../../src/Utils/Helper";

describe("-- Test for Helper --", function () {

    describe("Helper.normalyzeParameters()", function () {

        it("normalyzeParameters()", function () {

            var result = Helper.normalyzeParameters({
                k1 : "value1",
                k2 : "value2"
            });

            expect(result).to.be.equal("k1=value1&k2=value2");
        });

        it("normalyzeParameters() sans param.", function () {

            var result = Helper.normalyzeParameters();

            expect(result).to.be.null;
        });

        it("normalyzeParameters() avec un param. null", function () {

            var result = Helper.normalyzeParameters({
                k1 : "value1",
                k2 : "value2",
                k3 : null
            });

            expect(result).to.be.equal("k1=value1&k2=value2&k3=");
        });

    });

    describe("Helper.normalyzeUrl()", function () {

        it("normalyzeUrl()", function () {

            var result = Helper.normalyzeUrl("http://localhost/service", {
                k1 : "value1",
                k2 : "value2"
            });

            expect(result).to.be.equal("http://localhost/service?k1=value1&k2=value2");
        });

        it("normalyzeUrl() sans param.", function () {

            var result = Helper.normalyzeUrl();

            expect(result).to.be.undefined;
        });

        it("normalyzeUrl() avec encodage", function () {

            var result = Helper.normalyzeUrl("http://localhost/service", {
                k1 : "value1",
                k2 : "value2"
            }, true);

            expect(result).to.be.equal("http%3A%2F%2Flocalhost%2Fservice%3Fk1%3Dvalue1%26k2%3Dvalue2");
        });

        it("normalyzeUrl() avec gestion des KVP", function () {

            var result = Helper.normalyzeUrl("http://localhost/service?k0=value0", {
                k1 : "value1",
                k2 : "value2"
            });

            expect(result).to.be.equal("http://localhost/service?k0=value0&k1=value1&k2=value2");
        });

        it("normalyzeUrl() avec gestion '?'", function () {

            var result = Helper.normalyzeUrl("http://localhost/service?", {
                k1 : "value1",
                k2 : "value2"
            });

            expect(result).to.be.equal("http://localhost/service?k1=value1&k2=value2");
        });

        it("normalyzeUrl() avec gestion de l'url vide", function () {

            var result = Helper.normalyzeUrl("", {
                k1 : "value1",
                k2 : "value2"
            });

            expect(result).to.be.equal("k1=value1&k2=value2");
        });

        it("normalyzeUrl() avec les params aux formats 'string'", function () {

            var result = Helper.normalyzeUrl("http://localhost/service", "k1=value1&k2=value2");

            expect(result).to.be.equal("http://localhost/service?k1=value1&k2=value2");
        });

    });
});

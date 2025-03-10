import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import OWC from "../../src/Formats/OWC";
import dataWmsConfig from "./fixtures/wms-config-1.0";

describe("-- Test for OWC --", function () {

    var dataTest = {
        person: {
            name: "Edgar",
            pets: {
                type: "dog",
                name: "Daffodil"
            }
        }
    };
    describe("OWC sur un type de test", function () {

        it("Test simple avec setter", function () {
            var owc = new OWC();
            owc.setData(dataTest);
            owc.setVersion(1.0);
            owc.setTemplate("test");
            var result = owc.build();
            expect(result).to.eql({
                person: {
                    name: "Edgar"
                },
                pets: {
                    type: "dog",
                    name: "Daffodil"
                }
            });
        });

        it("Test simple avec options du constructeur", function () {
            var owc = new OWC({
                data: dataTest,
                template: "test",
                version: 1.0
            });
            var result = owc.build();
            expect(result).to.eql({
                person: {
                    name: "Edgar"
                },
                pets: {
                    type: "dog",
                    name: "Daffodil"
                }
            });
        });
    });

    describe("OWC sur un type de config 1.0", function () {
        it("Test WMS", function () {
            var owc = new OWC();
            owc.setData(dataWmsConfig);
            owc.setVersion(1.0);
            owc.setTemplate("config");
            var json = owc.build();
            console.log(json);
            expect(json).to.have.property("type", "FeatureCollection");
            expect(json).to.have.property("properties");
            expect(json).to.have.property("geometry");
            expect(json.geometry).to.have.property("type", "Polygon");
            expect(json.geometry).to.have.property("coordinates");
            expect(json.geometry.coordinates).to.be.an("array");
            expect(json).to.have.property("features");
            expect(json.features).to.be.an("array");
        });

    });
});
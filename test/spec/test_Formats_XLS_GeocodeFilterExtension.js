import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import GeocodeFilterExtension from "../../src/Formats/XLS/LocationUtilityService/GeocodeFilterExtension";
import Administratif from "../../src/Services/Geocode/Request/model/Administratif";
import StreetAddress from "../../src/Services/Geocode/Request/model/StreetAddress";

describe("-- Test GeocodeFilterExtension --", function () {
    
    describe("GeocodeFilterExtension", function () {

        it("Ajout table : Administratif", function () {
            var ext = new GeocodeFilterExtension();
            ext.addFilterExtensions(new Administratif());
            ext.getNames().should.have.length(1);
            // console.log(ext.getFilters());
            // console.log(ext.getFilter("Administratif"));
            // console.log(ext.getAttributs("Administratif"));
        });

        it("Ajout plusieurs tables : StreetAddress et Administratif", function () {
            var ext = new GeocodeFilterExtension();
            ext.addFilterExtensions(new Administratif());
            ext.addFilterExtensions(new StreetAddress());
            ext.getNames().should.have.length(2);
            // console.log(ext.getFilters());
            // console.log(ext.getFilter("Administratif"));
            // console.log(ext.getAttributs("Administratif"));
        });

        it("Ajout value : Administratif", function () {
            var ext = new GeocodeFilterExtension();
            ext.addFilterExtensions(new Administratif());
            ext.getNames().should.have.length(1);
            ext.setPlaceAttributs("Administratif", {
                fake : 1,
                prefecture : "prefecture"
            });
            // console.log(ext.getPlaceAttributs("Administratif"));
        });
    });
});

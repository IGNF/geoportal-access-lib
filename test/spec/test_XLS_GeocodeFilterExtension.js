/* global describe, it */

define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test GeocodeFilterExtension --", function() {
        describe('GeocodeFilterExtension', function () {

            var GeocodeFilterExtension;
            var Administratif, StreetAddress;

            beforeEach(function (done) {
                require([
                    'Formats/XLS/LocationUtilityService/GeocodeFilterExtension',
                    'Services/Geocode/Request/model/Administratif',
                    'Services/Geocode/Request/model/StreetAddress'
                ], function (
                    _GeocodeFilterExtension,
                    _Administratif,
                    _StreetAddress
                    ) {
                        GeocodeFilterExtension = _GeocodeFilterExtension;
                        Administratif = _Administratif;
                        StreetAddress  = _StreetAddress;
                        done();
                    });
            });

            it('Ajout table : Administratif', function () {
                var ext = new GeocodeFilterExtension();
                ext.addFilterExtensions(new Administratif());
                ext.getNames().should.have.length(1);
                // console.log(ext.getFilters());
                // console.log(ext.getFilter('Administratif'));
                // console.log(ext.getAttributs('Administratif'));
            });
            
            it('Ajout plusieurs tables : StreetAddress et Administratif', function () {
                var ext = new GeocodeFilterExtension();
                ext.addFilterExtensions(new Administratif());
                ext.addFilterExtensions(new StreetAddress());
                ext.getNames().should.have.length(2);
                // console.log(ext.getFilters());
                // console.log(ext.getFilter('Administratif'));
                // console.log(ext.getAttributs('Administratif'));
            });
            
            it('Ajout value : Administratif', function () {
                var ext = new GeocodeFilterExtension();
                ext.addFilterExtensions(new Administratif());
                ext.getNames().should.have.length(1);
                ext.setPlaceAttributs('Administratif', {fake : 1, prefecture : "prefecture"});
                // console.log(ext.getPlaceAttributs('Administratif'));
            });
        });
    });
});
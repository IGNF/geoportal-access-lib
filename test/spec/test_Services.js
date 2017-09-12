define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test for Services --", function () {

        var Services;

        before(function (done) {
            require(['Services/Services'], function (_Services) {
                Services = _Services;
                done();
            });
        });

        describe('TODO : Services', function () {
            xit('Services::autocomplete()', function () {});
            xit('Services::geocode()', function () {});
            xit('Services::isoCurve()', function () {});
            xit('Services::reverseGeocode()', function () {});
            xit('Services::route()', function () {});
            xit('Services::getConfig()', function () {});
            xit('Services::getAltitude()', function () {});
        });
    });
});

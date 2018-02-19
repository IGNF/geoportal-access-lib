define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test for WPS --", function () {

        var WPS;

        before(function (done) {
            require(['Formats/WPS'], function (_WPS) {
                WPS = _WPS;
                done();
            });
        });

        describe('TODO : WPS', function () {
            xit('WPS()', function () {});
        });
    });
});

define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test for WKT --", function () {

        var WKT;

        before(function (done) {
            require(['Formats/WKT'], function (_WKT) {
                WKT = _WKT;
                done();
            });
        });

        describe('TODO : WKT', function () {
            xit('WKT()', function () {});
        });
    });
});

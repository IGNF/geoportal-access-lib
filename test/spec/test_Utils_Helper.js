define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test for Helper --", function () {

        var Helper;

        before(function (done) {
            require(['Utils/Helper'], function (_Helper) {
                Helper = _Helper;
                done();
            });
        });

        describe('TODO : Helper', function () {

            xit('Helper::normalyzeParameters()', function () {});
            xit('Helper::normalyzeUrl()', function () {});
            xit('Helper::indent()', function () {});
        });
    });
});

define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test for JSONP --", function () {

        var JSONP;

        before(function (done) {
            require(['Protocols/JSONP'], function (_JSONP) {
                JSONP = _JSONP;
                done();
            });
        });

        describe('TODO : JSONP', function () {
            xit('JSONP::send()', function () {});
        });
    });
});

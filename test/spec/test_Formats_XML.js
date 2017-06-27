define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test for XML --", function () {

        var XML;

        before(function (done) {
            require(['Formats/XML'], function (_XML) {
                XML = _XML;
                done();
            });
        });

        describe('TODO : XML', function () {
            xit('XML()', function () {});
        });
    });
});

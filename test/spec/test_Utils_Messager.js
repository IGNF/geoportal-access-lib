define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test for Messager --", function () {

        var Messager;

        before(function (done) {
            require(['Utils/MessagesResources'], function (_Messager) {
                Messager = _Messager;
                done();
            });
        });

        describe('TODO : Messager', function () {
            xit('Messager::getMessage()', function () {});
        });
    });
});

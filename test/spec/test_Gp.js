define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test for Gp --", function () {

        var Gp;

        before(function (done) {
            require(['Gp'], function (_Gp) {
                Gp = _Gp;
                done();
            });
        });

        describe('Gp', function () {

            it('Proprietes de Gp', function () {

                // test des proprietes par defaut
                Gp.should.have.property('servicesVersion');
                Gp.should.have.property('servicesDate');
                Gp.should.have.property('Services');
            });

            it('Namespace de Gp', function () {

                // test des namespace par defaut
                Gp.should.have.property('Services');
                Gp.should.have.property('Error');
            });
        });
    });
});

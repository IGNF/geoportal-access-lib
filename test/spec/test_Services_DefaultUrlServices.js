/*
 * Test des urls par défaut des services (utilisées si aucune url n'est spécifiée par l'utilisateur)
 */

define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test DefaultUrlService --", function() {

        describe('URLs par defaut des services', function () {

            var DefaultUrlService;
            var key = "CLE";
            var keys = ["CLE1", "CLE2"];

            beforeEach(function(done) {
                require(['Services/DefaultUrlService'], function(_DefaultUrlService) {
                    DefaultUrlService = _DefaultUrlService;
                    done();
                });
            });

            it('DefaultUrlService', function () {

                expect(DefaultUrlService.Alti.url(key)['elevation-json']).to.be.equal("http://wxs.ign.fr/CLE/alti/rest/elevation.json");
                expect(DefaultUrlService.Alti.url(key)['elevation-xml']).to.be.equal('http://wxs.ign.fr/CLE/alti/rest/elevation.xml');
                expect(DefaultUrlService.Alti.url(key)['profil-json']).to.be.equal('http://wxs.ign.fr/CLE/alti/rest/elevationLine.json');
                expect(DefaultUrlService.Alti.url(key)['profil-xml']).to.be.equal('http://wxs.ign.fr/CLE/alti/rest/elevationLine.xml');
                expect(DefaultUrlService.Alti.url(key)['wps']).to.be.equal('http://wxs.ign.fr/CLE/alti/wps');
                expect(DefaultUrlService.ProcessIsoCurve.url(key)['iso-json']).to.be.equal('http://wxs.ign.fr/CLE/isochrone/isochrone.json');
                expect(DefaultUrlService.ProcessIsoCurve.url(key)['iso-xml']).to.be.equal('http://wxs.ign.fr/CLE/isochrone/isochrone.xml');
                expect(DefaultUrlService.AutoComplete.url(key)).to.be.equal('http://wxs.ign.fr/CLE/ols/apis/completion' );
                expect(DefaultUrlService.ReverseGeocode.url(key)).to.be.equal('http://wxs.ign.fr/CLE/geoportail/ols');
                expect(DefaultUrlService.AutoConf.url(key)['apiKey']).to.be.equal('http://wxs.ign.fr/CLE/autoconf');
                expect(DefaultUrlService.AutoConf.url(keys)['apiKeys']).to.be.equal('http://wxs.ign.fr/CLE1/autoconf?keys=CLE1,CLE2');
                expect(DefaultUrlService.Geocode.url(key)).to.be.equal('http://wxs.ign.fr/CLE/geoportail/ols');
                expect(DefaultUrlService.Route.url(key)['route-json']).to.be.equal('http://wxs.ign.fr/CLE/itineraire/rest/route.json');
                expect(DefaultUrlService.Route.url(key)['route-xml']).to.be.equal('http://wxs.ign.fr/CLE/itineraire/rest/route.xml');
                expect(DefaultUrlService.Route.url(key)['ols']).to.be.equal('http://wxs.ign.fr/CLE/itineraire/ols');

            });
        });
    });
});

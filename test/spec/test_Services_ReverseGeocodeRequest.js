/* 
 * Tests de la construction d'une requête de géocodage inverse, par la classe ReverseGeocodeRequestFactory.
 */
define(['chai', 'sinon'], function (chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test ReverseGeocodeRequest --", function () {

		describe('ReverseGeocodeRequestFactory', function () {

            var ReverseGeocodeRequestFactory;
            var XML;

            beforeEach(function (done) {
                require([
                    'Formats/XML',
					'Services/Geocode/Request/ReverseGeocodeRequestFactory'],
					function (
                        _XML,
						_ReverseGeocodeRequestFactory
                    ) {
                        XML = _XML;
						ReverseGeocodeRequestFactory = _ReverseGeocodeRequestFactory;
						done();
					});

            });

			it('Appel de la factory', function () {

				var options = {
					position : {
						x: 2.48, y: 48.9
					},
					filterOptions : {
						type : ['PositionOfInterest'],
						circle : {x:2.49, y:49, radius:100}
					}
				};
				var valide =  function (result) {
                    var p = new XML();
                        p.setXMLString(result);
                    var data = p.parse();
                    should.exist(data);

                    var req = data["xls:XLS"]["xls:Request"];
                    expect(req).to.have.property("xls:ReverseGeocodeRequest");
                    expect(req["xls:ReverseGeocodeRequest"]).to.have.property("xls:Position");
                    expect(req["xls:ReverseGeocodeRequest"]).to.have.property("xls:ReverseGeocodePreference");
                    expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]).to.have.property("gml:Point");
                    expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]).to.have.property("gml:CircleByCenterPoint");
                    expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]["gml:Point"]).to.have.property("gml:pos");
                    expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:pos");
                    expect(req["xls:ReverseGeocodeRequest"]["xls:Position"]["gml:CircleByCenterPoint"]).to.have.property("gml:radius");
                };

				var request = ReverseGeocodeRequestFactory.build(options);
				valide(request);
			});
		});
	});
});

define(['chai', 'sinon'], function (chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe('-- Test XLS LocationUtilityService Request --', function () {

            var XLS, LocationUtilityService;
            var XML;

            beforeEach(function (done) {
                require([
                    'Formats/XML',
					'Formats/XLS',
					'Formats/XLS/LocationUtilityService'],
					function (
                        _XML,
						_XLS,
						_LocationUtilityService
						) {
                        XML = _XML;
						XLS = _XLS;
						LocationUtilityService = _LocationUtilityService;
						done();
					});

            });

			it('Appel avec un objet LUS (objet LUS vide)', function () {
				// objet LUS sans param.
				// exception générée : 
				//	impossible de determiner le type de geocodage : Direct ou Inverse !?
				// 	Type de Geocodage indefini !
				
				var options = {
					srsName: "epsg:4326",
					maximumResponses: 5
				};
				try {
					var xls = new XLS(options);
					xls.setService(new LocationUtilityService());
					xls.build();
				} catch (e) {
					expect(true).to.be.true;
                    return; // FIXME !
				}
                // oups!
                expect(false).to.be.true;
			});

            it('Appel avec un objet LUS de type Geocode', function () {
                
				var options = {
					srsName: "epsg:4326",
					maximumResponses: 5
				};
                
				try {
					var xls = new XLS(options);
					xls.setService(new LocationUtilityService({location: 'test'}));
					var result = xls.build();
                    
                    // parsing
                    var hXml = new XML();
                        hXml.setXMLString(result);
                    var data = hXml.parse();
                    // test...
                    should.exist(data);
                    expect(data).to.have.property("XLS");
                    expect(data["XLS"]["Request"]["attributes"]).to.have.property("methodName", "GeocodeRequest");
				} catch (e) {
                    // oups!
					expect(false).to.be.true;
                    return; // FIXME !
				}
                
                expect(true).to.be.true;
			});
		});
});
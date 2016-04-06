/*
 * Tests de la construction d'une requête de calcul d'itinéraires, à partir d'options, par la classe RouteRequestFactory.
 */
define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test RouteRequest --", function() {
        describe('RouteRequest', function () {

            var RouteRequestFactory;
            var XML;

            beforeEach(function(done) {
                require(['Formats/XML', 'Services/Route/Request/RouteRequestFactory'], function(_XML,_RouteRequestFactory) {
                    RouteRequestFactory = _RouteRequestFactory;
                    XML = _XML;
                    done();
                });
            });

            it('Appel de la factory : en mode OLS avec options minimales', function () {

                var options = {
                   onSuccess : function (response) {
                       console.log(response);
                   },
                   onFailure : function (error) {
                       console.log(error);
                   },
                   // spécifique au service
                   api : 'OLS',
                   startPoint: {
                       y: 2.64,
                       x: 48.54
                   },
                   endPoint: {
                       y: 3.01,
                       x: 48.45
                   }
				};

                var valide =  function (result) {
                    var p = new XML();
                        p.setXMLString(result);
                    var data = p.parse();
                    should.exist(data);
                    console.log(data);

                    var req = data["xls:XLS"]["xls:Request"];
                    expect(req).to.have.property("xls:DetermineRouteRequest");
                    expect(req["xls:DetermineRouteRequest"]).to.have.property("xls:RouteGeometryRequest"); // FIXME optionnal
                    expect(req["xls:DetermineRouteRequest"]).to.have.property("xls:RoutePlan");
                    expect(req["xls:DetermineRouteRequest"]).to.have.property("xls:RouteInstructionsRequest"); //  FIXME optionnal
                    expect(req["xls:DetermineRouteRequest"]["attributes"]).to.have.property("distanceUnit"); //  FIXME optionnal
                    expect(req["xls:DetermineRouteRequest"]["xls:RoutePlan"]).to.have.property("xls:WayPointList");
                    expect(req["xls:DetermineRouteRequest"]["xls:RoutePlan"]["xls:WayPointList"]).to.have.property("xls:EndPoint");
                    expect(req["xls:DetermineRouteRequest"]["xls:RoutePlan"]["xls:WayPointList"]).to.have.property("xls:StartPoint");
                };

				var request = RouteRequestFactory.build(options);
				valide(request);

            });

            it('Appel de la factory : mode OLS', function () {

                var options = {
                   onSuccess : function (response) {
                       console.log(response);
                   },
                   onFailure : function (error) {
                       console.log(error);
                   },
                   // spécifique au service
                   api : 'OLS',
                   srs : "EPSG:4326",
                   startPoint: {
                       y: 2.64,
                       x: 48.54
                   },
                   endPoint: {
                       y: 3.01,
                       x: 48.45
                   },
                   provideBbox : true,
                   exclusions : ["Tunnel", "Toll"],
                   distanceUnit : "km",
                   graph : "Voiture",
                   provideGeometry : false,
                   routePreference : "fastest"
				};

                var valide =  function (result) {
                    var p = new XML();
                        p.setXMLString(result);
                    var data = p.parse();
                    should.exist(data);
                    console.log(data);

                    var req = data["xls:XLS"]["xls:Request"];
                    expect(req).to.have.property("xls:DetermineRouteRequest");
                    expect(req["xls:DetermineRouteRequest"]).to.have.property("xls:RouteGeometryRequest");
                    expect(req["xls:DetermineRouteRequest"]).to.have.property("xls:RoutePlan");
                    expect(req["xls:DetermineRouteRequest"]).to.have.property("xls:RouteInstructionsRequest");
                    expect(req["xls:DetermineRouteRequest"]["attributes"]).to.have.property("distanceUnit", 'km');
                    expect(req["xls:DetermineRouteRequest"]["xls:RoutePlan"]).to.have.property("xls:AvoidList");
                    expect(req["xls:DetermineRouteRequest"]["xls:RoutePlan"]).to.have.property("xls:RoutePreference");
                    expect(req["xls:DetermineRouteRequest"]["xls:RoutePlan"]).to.have.property("xls:WayPointList");
                    expect(req["xls:DetermineRouteRequest"]["xls:RoutePlan"]).to.have.property("xlsext:graphName");
                    expect(req["xls:DetermineRouteRequest"]["xls:RoutePlan"]["xls:WayPointList"]).to.have.property("xls:EndPoint");
                    expect(req["xls:DetermineRouteRequest"]["xls:RoutePlan"]["xls:WayPointList"]).to.have.property("xls:StartPoint");
                };

				var request = RouteRequestFactory.build(options);
				valide(request);

            });

            it('Appel de la factory : en mode REST avec options minimales', function () {

                var options = {
                   onSuccess : function (response) {
                       console.log(response);
                   },
                   onFailure : function (error) {
                       console.log(error);
                   },
                   // spécifique au service
                   api : 'REST',
                   startPoint: {
                       x: 2.64,
                       y: 48.54
                   },
                   endPoint: {
                       x: 3.01,
                       y: 48.45
                   }
				};

                var valide =  function (result) {
                    expect(result).to.be.equal("origin=2.64,48.54&destination=3.01,48.45&method=TIME&format=STANDARD");
                };

				var request = RouteRequestFactory.build(options);
				valide(request);

            });

            it('Appel de la factory : mode REST', function () {

                var options = {
                   onSuccess : function (response) {
                       console.log(response);
                   },
                   onFailure : function (error) {
                       console.log(error);
                   },
                   // spécifique au service
                   api : 'REST',
                   srs : "EPSG:4326",
                   startPoint: {
                       x: 2.64,
                       y: 48.54
                   },
                   endPoint: {
                       x: 3.01,
                       y: 48.45
                   },
                   provideBbox : true,
                   exclusions : ["Tunnel", "Toll"],
                   distanceUnit : "km",
                   graph : "Voiture",
                   provideGeometry : true,
                   routePreference : "fastest"
				};

                var valide =  function (result) {
                    expect(result).to.be.equal("origin=2.64,48.54&destination=3.01,48.45&method=TIME&graphName=Voiture&exclusions=Tunnel;Toll&srs=EPSG:4326&format=EXTENDED");
                };

				var request = RouteRequestFactory.build(options);
				valide(request);

            });
        });
    });
});

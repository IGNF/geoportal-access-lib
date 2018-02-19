define(['chai', 'sinon'], function (chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe('-- Test XLS Geocode Request --', function () {

        // parser pour les requêtes
        var XML, hXML;

        before(function (done) {
            require(['Formats/XML'],function (_XML) {
                    XML = _XML;
                    hXML = new XML();
                    done();
                });
        });

        after(function() {
            hXML = null;
        });

        describe('-- XLS LocationUtilityService Geocode --', function () {

            var XLS, LocationUtilityService, GeocodeRequest;

            beforeEach(function (done) {
                require([
                    'Formats/XLS',
                    'Formats/XLS/LocationUtilityService',
                    'Formats/XLS/LocationUtilityService/GeocodeRequest'],
                    function (
                        _XLS,
                        _LocationUtilityService,
                        _GeocodeRequest
                        ) {
                        XLS = _XLS;
                        LocationUtilityService = _LocationUtilityService;
                        GeocodeRequest = _GeocodeRequest;
                        done();
                    });

            });

            it('Construction de la Requête avec objet LUS de type Direct (GeocodeRequest)', function () {

                // creation d'un objet de type Direct : GeocodeRequest
                // ajout de ce dernier dans le conteneur LocationUtilityService
                /*
                <XLS version="1.2"
                    xmlns: xsi = "http://www.w3.org/2001/XMLSchema-instance" xmlns= "http://www.opengis.net/xls" xmlns: gml = "http://www.opengis.net/gml"
                    xsi: schemaLocation = "http://www.opengis.net/xls http://schemas.opengis.net/ols/1.2/olsAll.xsd" >
                <RequestHeader srsName="epsg:4326"/>
                <Request maximumResponses="5" methodName= "GeocodeRequest" requestID= "f8b7fedc-422d-4b42-bb87-c6e19cabcf9c" version= "1.2">
                    <GeocodeRequest returnFreeForm="true">
                        <Address countryCode="PositionOfInterest">
                            <freeFormAddress>test</freeFormAddress>
                            <Place type="commune">Paris</Place>
                        </Address>
                    </GeocodeRequest>
                </Request>
                </XLS>
                */
                var lus = new LocationUtilityService();
                lus.addRequest(new GeocodeRequest({
                    location: "test",
                    returnFreeForm: true,
                    filterOptions: {
                        type: ['PositionOfInterest'],
                        commune: "Paris"
                    }
                }));

                var options = {
                    srsName: "epsg:4326",
                    maximumResponses: 5
                };

                var xls = new XLS(options);
                xls.namespace = false;
                xls.setService(lus);

                // parse
                hXML.setXMLString(xls.build());
                var data = hXML.parse();

                should.exist(data);
                expect(data).to.have.property("XLS");

                var req = data["XLS"]["Request"];
                expect(req).to.have.property("GeocodeRequest");
                expect(req["GeocodeRequest"]).to.have.property("Address");
                expect(req["GeocodeRequest"]["Address"]["attributes"]).to.have.property("countryCode", 'PositionOfInterest');
                expect(req["GeocodeRequest"]["Address"]).to.have.property("Place");
                expect(req["GeocodeRequest"]["Address"]).to.have.property("freeFormAddress");
                expect(req["GeocodeRequest"]["Address"]["Place"].textContent).to.equal('Paris');
                expect(req["GeocodeRequest"]["Address"]["freeFormAddress"].textContent).to.equal('test');
            });

            it('Construction de la Requête sans objet LUS de type Direct', function () {

                // creation d'un conteneur LocationUtilityService
                // le type de geocodage est determiné par le conteneur en fonction des param
                /*
                <XLS version="1.2"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.opengis.net/xls" xmlns:gml="http://www.opengis.net/gml"
                    xsi:schemaLocation="http://www.opengis.net/xls http://schemas.opengis.net/ols/1.2/olsAll.xsd">
                <RequestHeader srsName="epsg:4326"/>
                <Request maximumResponses="5" methodName="GeocodeRequest" requestID="9a68a166-50bd-4cbd-8c8c-df79b39e8426" version="1.2">
                  <GeocodeRequest returnFreeForm=false>
                     <Address countryCode="StreetAddress">
                        <StreetAddress>
                          <Street>rue de paris</Street>
                          <Building number="2"/>
                        </StreetAddress>
                        <Place type="insee">75000</Place>
                        <Place type="Municipality">Paris</Place>
                        <PostalCode>75000</PostalCode>
                        <gml:Envelope>
                           <gml:lowerCorner>1.25 45.369</gml:lowerCorner>
                           <gml:upperCorner>2.36 46.2547</gml:upperCorner>
                        </gml:Envelope>
                     </Address>
                  </GeocodeRequest>
                </Request>
                </XLS>
                */
                var settings = {
                    location: {
                        street: "rue de paris",
                        number: 2,
                        postalCode: 75000,
                        city: "Paris"
                    },
                    filterOptions: {
                        bbox: { left: 1.25, right: 2.36, bottom: 45.369, top: 46.2547 },
                        insee: 75000
                    }
                };

                var options = {
                    srsName: "epsg:4326",
                    maximumResponses: 5
                };

                var xls = new XLS(options);
                xls.namespace = false;
                xls.setService(new LocationUtilityService(settings));

                // parse
                hXML.setXMLString(xls.build());
                var data = hXML.parse();

                // console.log(data);

                should.exist(data);
                expect(data).to.have.property("XLS");

                var req = data["XLS"]["Request"];
                expect(req).to.have.property("GeocodeRequest");
                expect(req["GeocodeRequest"]).to.have.property("Address");
                expect(req["GeocodeRequest"]["Address"]["attributes"]).to.have.property("countryCode", 'StreetAddress');
                expect(req["GeocodeRequest"]["Address"]).to.have.property("Place");
                expect(req["GeocodeRequest"]["Address"]).to.have.property("PostalCode");
                expect(req["GeocodeRequest"]["Address"]).to.have.property("StreetAddress");
                expect(req["GeocodeRequest"]["Address"]).to.have.property("gml:Envelope");
                expect(req["GeocodeRequest"]["Address"]["Place"][1].textContent).to.equal('Paris');
                expect(req["GeocodeRequest"]["Address"]["Place"][0].textContent).to.equal('75000');
                // to finish...
            });
        });


        describe('-- GeocodeRequest --', function () {

            var GeocodeRequest, GeocodeFilterExtension;
            var PositionOfInterest, StreetAddress;

            beforeEach(function (done) {
                require(['Formats/XLS/LocationUtilityService/GeocodeRequest', 'Formats/XLS/LocationUtilityService/GeocodeFilterExtension',
                    'Services/Geocode/Request/model/PositionOfInterest', 'Services/Geocode/Request/model/StreetAddress'],
                    function (_GeocodeRequest, _GeocodeFilterExtension, _PositionOfInterest, _StreetAddress) {
                        GeocodeRequest = _GeocodeRequest;
                        GeocodeFilterExtension = _GeocodeFilterExtension;
                        PositionOfInterest = _PositionOfInterest;
                        StreetAddress = _StreetAddress;
                        done();
                    });

            });

            it('Construction de la Requête Geocodage (sans filtres extensions)', function () {

                var req = new GeocodeRequest({
                    location: "saint mandé",
                    returnFreeForm: true,
                    filterOptions: {
                        type: ['PositionOfInterest'],
                        bidon: 'test',
                        importance: '8'
                    }
                });

                // parse
                hXML.setXMLString(req.toString());
                var data = hXML.parse();
                should.exist(data);

                // Sans extension de filtre, le champs 'bidon' est en sorti :
                // out ->
                // <GeocodeRequest>
                //   <Address countryCode="PositionOfInterest">
                //     <freeFormAddress>saint mandé</freeFormAddress>
                //	   <Place type="bidon">test</Place>
                //     <Place type="importance">8</Place>
                //   </Address>
                // </GeocodeRequest>
                expect(data).to.have.property("GeocodeRequest");
                expect(data["GeocodeRequest"]).to.have.property("Address");
                expect(data["GeocodeRequest"]["Address"]["Place"][0]["attributes"]).to.have.property("type", 'bidon');


            });

            it('Construction de la Requête Geocodage (avec filtres extensions)', function () {

                var ext = new GeocodeFilterExtension();
                ext.addFilterExtensions(new PositionOfInterest());
                ext.addFilterExtensions(new StreetAddress());
                var req = new GeocodeRequest({
                    location: "saint mandé",
                    returnFreeForm: true,
                    filterOptions: {
                        type: ['PositionOfInterest', 'StreetAddress'],
                        bidon: 'test',
                        importance: '8',
                        department: 94
                    }
                });

                req.addFilter(ext);

                // parse
                hXML.setXMLString(req.toString());
                var data = hXML.parse();
                console.log(data);
                should.exist(data);
                // Avec extension de filtre, le champs 'bidon' n'est pas pris en compte :
                // out ->
                // <GeocodeRequest>
                //   <Address countryCode="PositionOfInterest">
                //     <freeFormAddress>saint mandé</freeFormAddress>
                //     <Place type="importance">8</Place>
                //     <Place type="Departement">94</Place>
                //   </Address>
                // </GeocodeRequest>
			    expect(data).to.have.property("GeocodeRequest");
                expect(data["GeocodeRequest"]).to.have.property("Address");
                expect(data["GeocodeRequest"]["Address"]["Place"]).length(2);
                // todo : filter 'bidon'

            });

            it('Construction de la Requête Geocodage structurée', function () {

                var req = new GeocodeRequest({
                    location: {
                        postalCode: 94166,
                        city: "saint mandé",
                        street: "avenue Pasteur",
                        number: 2
                    },
                    returnFreeForm: true,
                    filterOptions: {
                        type: ['StreetAddress'],
                        importance: '8',
                    }
                });

                // parse
                hXML.setXMLString(req.toString());
                var data = hXML.parse();
                should.exist(data);
                //Requête structurée :
                // out ->
                // <GeocodeRequest returnFreeForm=true>
                //	<Address countryCode="StreetAddress">
                //		<StreetAddress>
                //				<Street>avenue Pasteur</Street>
                //				<Building number="2"/>
                //		</StreetAddress>
                //		<Place type="importance">8</Place>
                //		<Place type="Municipality">saint mandé</Place>
                //		<PostalCode>94166</PostalCode>
                //
                //	</Address>
                // </GeocodeRequest>
                expect(data).to.have.property("GeocodeRequest");
                expect(data["GeocodeRequest"]).to.have.property("Address");
                expect(data["GeocodeRequest"]["Address"]).to.have.property("StreetAddress");
                expect(data["GeocodeRequest"]["Address"]).to.have.property("PostalCode");
                expect(data["GeocodeRequest"]["Address"]["StreetAddress"]).to.have.property("Street");
                expect(data["GeocodeRequest"]["Address"]["StreetAddress"]).to.have.property("Building");
            });
        });
    });
});
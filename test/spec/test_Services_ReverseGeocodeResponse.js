/* 
 * Tests sur la construction d'une réponse de géocodage inverse (GeocodeResponse) à partir d'une réponse XML de géocodage inverse.
 */
define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests ReverseGeocode --", function() {

        describe("-- tests de l'objet GeocodeResponse en sortie", function() {

            var GeocodeResponse, GeocodedLocation, ReverseGeocodedLocation;
            
            beforeEach(function(done) {
                require([
                    'Services/Geocode/Response/model/GeocodeResponse',
                    'Services/Geocode/Response/model/GeocodedLocation',
                    'Services/Geocode/Response/model/ReverseGeocodedLocation'
                ], 
                function(
                    _GeocodeResponse,
                    _GeocodedLocation,
                    _ReverseGeocodedLocation
                ) {
                    GeocodeResponse = _GeocodeResponse;
                    GeocodedLocation = _GeocodedLocation;
                    ReverseGeocodedLocation = _ReverseGeocodedLocation;
                    done();
                });
            });

            it("attributs de GeocodeResponse", function() {
                var rg = new GeocodeResponse();
                should.exist(rg);
                expect(rg).to.have.property("locations");
                expect(rg.locations).to.be.an("array");
                expect(rg.locations).to.be.empty;
            });

            it("attributs de GeocodedLocation()", function() {
                var g = new GeocodedLocation();
                should.exist(g);

                expect(g).to.have.property("position");
                expect(g.position).to.be.an("object");
                expect(g).to.have.deep.property("position.x", null);
                expect(g).to.have.deep.property("position.y", null);

                expect(g).to.have.property("matchType", null);
                expect(g).to.have.property("placeAttributes");
                expect(g.placeAttributes).to.be.an("object");
                expect(g).to.have.property("type", null);
            });

            it("attributs de ReverseGeocodedLocation", function() {
                var rg = new ReverseGeocodedLocation();
                should.exist(rg);
                // attributs hérités de GeocodedLocation()
                expect(rg).to.have.property("position");
                expect(rg.position).to.be.an("object");
                expect(rg).to.have.deep.property("position.x", null);
                expect(rg).to.have.deep.property("position.y", null);
                expect(rg).to.have.property("matchType", null);
                expect(rg).to.have.property("placeAttributes");
                expect(rg.placeAttributes).to.be.an("object");
                // attributs spécifiques
                expect(rg).to.have.property("CLASSNAME", "ReverseGeocodedLocation");
                expect(rg).to.have.property("searchCenterDistance", null);
            });

        });

        describe("-- tests de ReverseGeocodeResponseReader", function() {

            var reader;
            // construction de root à passer en paramètres (à partir d'une réponse de géocodage)
            var xmlReverseGeocodeReponse = '<?xml version="1.0" encoding="UTF-8"?><XLS version="1.2" xmlns="http://www.opengis.net/xls" xmlns:gml="http://www.opengis.net/gml" xmlns:xls="http://www.opengis.net/xls" xmlns:xlsext="http://www.opengis.net/xlsext" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://wxs.ign.fr/schemas/olsAll.xsd"><ResponseHeader/><Response requestID="abc" version="1.2"><ReverseGeocodeResponse><ReverseGeocodedLocation><gml:Point><gml:pos>48.803209 2.324379</gml:pos></gml:Point><Address countryCode="StreetAddress"><StreetAddress><Building number="52"/><Street>av aristide briand</Street></StreetAddress><Place type="Municipality">Bagneux</Place><Place type="Qualite">Plaque adresse</Place><Place type="ID">ADRNIVX_0000000287193485</Place><Place type="Departement">92</Place><Place type="Bbox">2.324379;48.803209;2.324379;48.803209</Place><Place type="Commune">Bagneux</Place><Place type="INSEE">92007</Place><Place type="Territoire">FXX</Place><Place type="ID_TR">TRONROUT0000000000540393</Place><PostalCode>92220</PostalCode></Address><xlsext:ExtendedGeocodeMatchCode>Street number</xlsext:ExtendedGeocodeMatchCode><SearchCentreDistance value="20.87"/></ReverseGeocodedLocation></ReverseGeocodeResponse></Response></XLS>';
            var xmlDoc = new DOMParser().parseFromString(xmlReverseGeocodeReponse,"text/xml");
            // réponse du service avec une exception
            var xmlErrorReponse = "<ExceptionReport><Exception exceptionCode='MissingParameter'>Key does not exist or has expired</Exception></ExceptionReport>";
            var xmlErrorDoc = new DOMParser().parseFromString(xmlErrorReponse,"text/xml");

            beforeEach(function(done) {
                require(["Services/Geocode/Formats/ReverseGeocodeResponseReader"], function(_ReverseGeocodeResponseReader) {
                    reader = _ReverseGeocodeResponseReader;
                    done();
                })
            })

            it("attributs de ReverseGeocodeResponseReader", function() {
                should.exist(reader);
                expect(reader).to.have.property("VERSION", "1.2");
                expect(reader).to.have.property("NAMESPACES");
                expect(reader).to.have.property("SCHEMALOCATION", "http://wxs.ign.fr/schemas/olsAll.xsd");
                expect(reader).to.have.property("DEFAULTPREFIX", "xls");
                expect(reader).to.have.property("READERS");

                expect(reader).to.have.deep.property("READERS.xls");
                expect(reader).to.have.deep.property("READERS.xls.XLS");
                expect(reader).to.have.deep.property("READERS.xls.ReverseGeocodedLocation");
                expect(reader).to.have.deep.property("READERS.xls.Address");
                expect(reader).to.have.deep.property("READERS.xls.Building");
                expect(reader).to.have.deep.property("READERS.xls.Street");
                expect(reader).to.have.deep.property("READERS.xls.Place");
                expect(reader).to.have.deep.property("READERS.xls.PostalCode");
                expect(reader).to.have.deep.property("READERS.xls.SearchCentreDistance");
                expect(reader).to.have.deep.property("READERS.xls.Error");

                expect(reader).to.have.deep.property("READERS.xlsext");
                expect(reader).to.have.deep.property("READERS.xlsext.ExtendedGeocodeMatchCode");
                
                expect(reader).to.have.deep.property("READERS.gml");
                expect(reader).to.have.deep.property("READERS.gml.pos");

                expect(reader).to.have.deep.property("READERS.ExceptionReport");
                expect(reader).to.have.deep.property("READERS.Exception");

                expect(reader).to.have.property("read");
            });

            it("ReverseGeocodeResponseReader.read(root)", function() {
                // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
                var rep = reader.read(xmlDoc.documentElement);
                should.exist(rep);
                expect(rep).to.have.property("locations");
                expect(rep.locations).to.be.an("array");
                expect(rep.locations).to.have.length(1);
                expect(rep.locations[0]).to.have.deep.property("placeAttributes.commune", "Bagneux");
                expect(rep.locations[0]).to.have.deep.property("placeAttributes.street", "av aristide briand");
                // vérification avec une réponse contenant une exception
                rep = reader.read(xmlErrorDoc.documentElement);
                should.exist(rep);
                expect(rep).to.have.property("exceptionReport");
                expect(rep).to.have.deep.property("exceptionReport.exceptionCode", "MissingParameter");
                expect(rep).to.have.deep.property("exceptionReport.exception");
            });

        });

    });

});

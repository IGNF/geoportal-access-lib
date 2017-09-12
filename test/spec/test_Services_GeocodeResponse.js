/* 
 * Tests sur la construction d'une réponse de géocodage (GeocodeResponse) à partir d'une réponse XML de géocodage direct.
 */
define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Tests Geocode --", function() {

        describe("-- test de l'objet GeocodeResponse en sortie", function() {

            var GeocodeResponse, GeocodedLocation,
                DirectGeocodedLocation;
            
            beforeEach(function(done) {
                require([
                    'Services/Geocode/Response/model/GeocodeResponse',
                    'Services/Geocode/Response/model/GeocodedLocation',
                    'Services/Geocode/Response/model/DirectGeocodedLocation'
                ], 
                function(
                    _GeocodeResponse,
                    _GeocodedLocation,
                    _DirectGeocodedLocation
                ) {
                    GeocodeResponse = _GeocodeResponse;
                    GeocodedLocation = _GeocodedLocation;
                    DirectGeocodedLocation = _DirectGeocodedLocation;
                    done();
                });
            });

            it("attributs de GeocodeResponse()", function() {
                var g = new GeocodeResponse();
                should.exist(g);
                expect(g).to.have.property("locations");
                expect(g.locations).to.be.an("array");
                expect(g.locations).to.be.empty;
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

            it("attributs de DirectGeocodedLocation()", function() {
                var g = new DirectGeocodedLocation();
                should.exist(g);
                // attributs hérités de GeocodedLocation()
                expect(g).to.have.property("position");
                expect(g.position).to.be.an("object");
                expect(g).to.have.deep.property("position.x", null);
                expect(g).to.have.deep.property("position.y", null);
                expect(g).to.have.property("matchType", null);
                expect(g).to.have.property("placeAttributes");
                expect(g.placeAttributes).to.be.an("object");
                expect(g).to.have.property("type", null);
                // attributs spécifiques
                expect(g).to.have.property("CLASSNAME", "DirectGeocodedLocation");
                expect(g).to.have.property("accuracy", null);
            });

        });

        describe("-- test de GeocodeResponseReader", function() {

            var DirectGeocodeResponseReader;
            // construction de root à passer en paramètres (à partir d'une réponse de géocodage)
            var xmlGeocodeResponse = "<?xml version='1.0' encoding='UTF-8'?><XLS version='1.2'  xmlns='http://www.opengis.net/xls'  xmlns:gml='http://www.opengis.net/gml'  xmlns:xls='http://www.opengis.net/xls'  xmlns:xlsext='http://www.opengis.net/xlsext'  xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://wxs.ign.fr/schemas/olsAll.xsd'><ResponseHeader/><Response requestID='uid42' version='1.2'><GeocodeResponse><GeocodeResponseList numberOfGeocodedAddresses='1'><GeocodedAddress><gml:Point><gml:pos>48.843556 2.423248</gml:pos></gml:Point><Address countryCode='StreetAddress'><StreetAddress><Building number='2'/><Street>av pasteur</Street></StreetAddress><Place type='Municipality'>Saint-Mandé</Place><Place type='Qualite'>Plaque adresse</Place><Place type='ID'>ADRNIVX_0000000270868421</Place><Place type='Departement'>94</Place><Place type='Bbox'>2.423248;48.843556;2.423248;48.843556</Place><Place type='Commune'>Saint-Mandé</Place><Place type='INSEE'>94067</Place><Place type='Territoire'>FXX</Place><Place type='ID_TR'>TRONROUT0000000004406492</Place><PostalCode>94160</PostalCode></Address><GeocodeMatchCode accuracy='1.0' matchType='Street number'/></GeocodedAddress></GeocodeResponseList></GeocodeResponse></Response></XLS>";
            
            var xmlGeocodeResponseBeautify = "\
<?xml version='1.0' encoding='UTF-8'?>\
<XLS version='1.2'\
    xmlns='http://www.opengis.net/xls'\
    xmlns:gml='http://www.opengis.net/gml'\
    xmlns:xls='http://www.opengis.net/xls'\
    xmlns:xlsext='http://www.opengis.net/xlsext'\
    xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://wxs.ign.fr/schemas/olsAll.xsd'>\
    <ResponseHeader/>\
    <Response requestID='uid42' version='1.2'>\
        <GeocodeResponse>\
            <GeocodeResponseList numberOfGeocodedAddresses='1'>\
                <GeocodedAddress>\
                    <gml:Point>\
                        <gml:pos>48.843556 2.423248</gml:pos>\
                    </gml:Point>\
                    <Address countryCode='StreetAddress'>\
                        <StreetAddress>\
                            <Building number='2'/>\
                            <Street>av pasteur</Street>\
                        </StreetAddress>\
                        <Place type='Municipality'>Saint-Mandé</Place>\
                        <Place type='Qualite'>Plaque adresse</Place>\
                        <Place type='ID'>ADRNIVX_0000000270868421</Place>\
                        <Place type='Departement'>94</Place>\
                        <Place type='Bbox'>2.423248;48.843556;2.423248;48.843556</Place>\
                        <Place type='Commune'>Saint-Mandé</Place>\
                        <Place type='INSEE'>94067</Place>\
                        <Place type='Territoire'>FXX</Place>\
                        <Place type='ID_TR'>TRONROUT0000000004406492</Place>\
                        <PostalCode>94160</PostalCode>\
                    </Address>\
                    <GeocodeMatchCode accuracy='1.0' matchType='Street number'/>\
                </GeocodedAddress>\
            </GeocodeResponseList>\
        </GeocodeResponse>\
    </Response>\
</XLS>";
                var xmlGeocodeResponseMinify = "<?xml version='1.0' encoding='UTF-8'?><XLS version='1.2' xmlns='http://www.opengis.net/xls' xmlns:gml='http://www.opengis.net/gml' xmlns:xls='http://www.opengis.net/xls' xmlns:xlsext='http://www.opengis.net/xlsext' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://wxs.ign.fr/schemas/olsAll.xsd'><ResponseHeader/><Response requestID='uid42' version='1.2'><GeocodeResponse><GeocodeResponseList numberOfGeocodedAddresses='1'><GeocodedAddress><gml:Point><gml:pos>48.843556 2.423248</gml:pos></gml:Point><Address countryCode='StreetAddress'><StreetAddress><Building number='2'/><Street>av pasteur</Street></StreetAddress><Place type='Municipality'>Saint-Mandé</Place><Place type='Qualite'>Plaque adresse</Place><Place type='ID'>ADRNIVX_0000000270868421</Place><Place type='Departement'>94</Place><Place type='Bbox'>2.423248;48.843556;2.423248;48.843556</Place><Place type='Commune'>Saint-Mandé</Place><Place type='INSEE'>94067</Place><Place type='Territoire'>FXX</Place><Place type='ID_TR'>TRONROUT0000000004406492</Place><PostalCode>94160</PostalCode></Address><GeocodeMatchCode accuracy='1.0' matchType='Street number'/></GeocodedAddress></GeocodeResponseList></GeocodeResponse></Response></XLS>";
                
                
            // réponse du service avec une exception
            var xmlErrorReponse = "<ExceptionReport><Exception exceptionCode='MissingRights'>No rights for this ressource or ressource does not exist</Exception></ExceptionReport>";
            var xmlErrorDoc = new DOMParser().parseFromString(xmlErrorReponse,"text/xml");

            beforeEach(function(done) {
                require(["Services/Geocode/Formats/DirectGeocodeResponseReader"], function(_DirectGeocodeResponseReader) {
                    DirectGeocodeResponseReader = _DirectGeocodeResponseReader;
                    done();
                })
            })

            it("attributs de DirectGeocodeResponseReader", function() {
                should.exist(DirectGeocodeResponseReader);
                expect(DirectGeocodeResponseReader).to.have.property("VERSION", "1.2");
                expect(DirectGeocodeResponseReader).to.have.property("NAMESPACES");
                expect(DirectGeocodeResponseReader).to.have.property("SCHEMALOCATION", "http://wxs.ign.fr/schemas/olsAll.xsd");
                expect(DirectGeocodeResponseReader).to.have.property("DEFAULTPREFIX", "xls");
                expect(DirectGeocodeResponseReader).to.have.property("READERS");

                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.XLS");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.GeocodedAddress");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.GeocodeMatchCode");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.Address");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.freeFormAddress");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.Building");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.Street");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.Place");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.PostalCode");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.xls.Error");

                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.gml");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.gml.pos");

                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.ExceptionReport");
                expect(DirectGeocodeResponseReader).to.have.deep.property("READERS.Exception");

                expect(DirectGeocodeResponseReader).to.have.property("read");
            });

            it("DirectGeocodeResponseReader.read(root)", function() {
                var xmlDoc = new DOMParser().parseFromString(xmlGeocodeResponse,"text/xml");
                
                // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
                var rep = DirectGeocodeResponseReader.read(xmlDoc.documentElement);
                should.exist(rep);
                expect(rep).to.have.property("locations");
                expect(rep.locations).to.be.an("array");
                expect(rep.locations).to.have.length(1);
                expect(rep.locations[0]).to.have.deep.property("placeAttributes.commune", "Saint-Mandé");
                // vérification avec une réponse contenant une exception
                rep = DirectGeocodeResponseReader.read(xmlErrorDoc.documentElement);
                should.exist(rep);
                expect(rep).to.have.property("exceptionReport");
                expect(rep).to.have.deep.property("exceptionReport.exceptionCode", "MissingRights");
            });

            it("DirectGeocodeResponseReader.read(root) but response beautify", function() {
                
                var xmlDocBeautify = new DOMParser().parseFromString(xmlGeocodeResponseBeautify,"text/xml");
                
                // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
                var rep = DirectGeocodeResponseReader.read(xmlDocBeautify.documentElement);
                should.exist(rep);
                expect(rep).to.have.property("locations");
                expect(rep.locations).to.be.an("array");
                expect(rep.locations).to.have.length(1);
                expect(rep.locations[0]).to.have.deep.property("placeAttributes.commune", "Saint-Mandé");
                
            });
            
            it("DirectGeocodeResponseReader.read(root) but response minify", function() {
                
                var xmlDocBeautify = new DOMParser().parseFromString(xmlGeocodeResponseMinify,"text/xml");
                
                // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
                var rep = DirectGeocodeResponseReader.read(xmlDocBeautify.documentElement);
                should.exist(rep);
                expect(rep).to.have.property("locations");
                expect(rep.locations).to.be.an("array");
                expect(rep.locations).to.have.length(1);
                expect(rep.locations[0]).to.have.deep.property("placeAttributes.commune", "Saint-Mandé");
                
            });
        });

    });
});

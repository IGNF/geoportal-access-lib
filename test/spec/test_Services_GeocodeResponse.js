/*
* Tests sur la construction d'une réponse de géocodage (GeocodeResponse) à partir
* d'une réponse XML de géocodage direct.
*/
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import GeocodeResponse from "../../src/Services/Geocode/Response/model/GeocodeResponse";
import GeocodedLocation from "../../src/Services/Geocode/Response/model/GeocodedLocation";
import DirectGeocodedLocation from "../../src/Services/Geocode/Response/model/DirectGeocodedLocation";
import DirectGeocodeResponseReader from "../../src/Services/Geocode/Formats/DirectGeocodeResponseReader";
import XML from "../../src/Formats/XML";

describe("-- Tests Geocode --", function () {

    describe("-- GeocodeResponse", function () {

        it("attributs de GeocodeResponse()", function () {
            var g = new GeocodeResponse();
            should().exist(g);
            expect(g).to.have.property("locations");
            expect(g.locations).to.be.an("array");
            expect(g.locations).to.be.empty;
        });

        it("attributs de GeocodedLocation()", function () {
            var g = new GeocodedLocation();
            should().exist(g);

            expect(g).to.have.property("position");
            expect(g.position).to.be.an("object");
            expect(g.position).to.have.property("x", null);
            expect(g.position).to.have.property("y", null);

            expect(g).to.have.property("matchType", null);
            expect(g).to.have.property("placeAttributes");
            expect(g.placeAttributes).to.be.an("object");
            expect(g).to.have.property("type", null);
        });

        it("attributs de DirectGeocodedLocation()", function () {
            var g = new DirectGeocodedLocation();
            should().exist(g);
            // attributs hérités de GeocodedLocation()
            expect(g).to.have.property("position");
            expect(g.position).to.be.an("object");
            expect(g.position).to.have.property("x", null);
            expect(g.position).to.have.property("y", null);
            expect(g).to.have.property("matchType", null);
            expect(g).to.have.property("placeAttributes");
            expect(g.placeAttributes).to.be.an("object");
            expect(g).to.have.property("type", null);
            // attributs spécifiques
            expect(g).to.have.property("CLASSNAME", "DirectGeocodedLocation");
            expect(g).to.have.property("accuracy", null);
        });

    });

    describe("-- GeocodeResponseReader", function () {

        var p = new XML();

        // construction de root à passer en paramètres (à partir d'une réponse de géocodage)
        var xmlGeocodeResponse = "<?xml version='1.0' encoding='UTF-8'?><XLS version='1.2' xmlns='http://www.opengis.net/xls' xmlns:gml='http://www.opengis.net/gml' xmlns:xls='http://www.opengis.net/xls' xmlns:xlsext='http://www.opengis.net/xlsext' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='http://wxs.ign.fr/schemas/olsAll.xsd'><ResponseHeader/><Response requestID='uid42' version='1.2'><GeocodeResponse><GeocodeResponseList numberOfGeocodedAddresses='1'><GeocodedAddress><gml:Point><gml:pos>48.843556 2.423248</gml:pos></gml:Point><Address countryCode='StreetAddress'><StreetAddress><Building number='2'/><Street>av pasteur</Street></StreetAddress><Place type='Municipality'>Saint-Mandé</Place><Place type='Qualite'>Plaque adresse</Place><Place type='ID'>ADRNIVX_0000000270868421</Place><Place type='Departement'>94</Place><Place type='Bbox'>2.423248;48.843556;2.423248;48.843556</Place><Place type='Commune'>Saint-Mandé</Place><Place type='INSEE'>94067</Place><Place type='Territoire'>FXX</Place><Place type='ID_TR'>TRONROUT0000000004406492</Place><PostalCode>94160</PostalCode></Address><GeocodeMatchCode accuracy='1.0' matchType='Street number'/></GeocodedAddress></GeocodeResponseList></GeocodeResponse></Response></XLS>";

        var xmlGeocodeResponseBeautify = "\
<?xml version='1.0' encoding='UTF-8'?> \
<XLS version='1.2' \
xmlns='http://www.opengis.net/xls' \
xmlns:gml='http://www.opengis.net/gml' \
xmlns:xls='http://www.opengis.net/xls' \
xmlns:xlsext='http://www.opengis.net/xlsext' \
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
        p.setXMLString(xmlErrorReponse);
        var xmlErrorDoc = p.getXMLDoc();

        it("attributs de DirectGeocodeResponseReader", function () {
            should().exist(DirectGeocodeResponseReader);
            expect(DirectGeocodeResponseReader).to.have.property("VERSION", "1.2");
            expect(DirectGeocodeResponseReader).to.have.property("NAMESPACES");
            expect(DirectGeocodeResponseReader).to.have.property("SCHEMALOCATION", "http://wxs.ign.fr/schemas/olsAll.xsd");
            expect(DirectGeocodeResponseReader).to.have.property("DEFAULTPREFIX", "xls");
            expect(DirectGeocodeResponseReader).to.have.property("READERS");

            expect(DirectGeocodeResponseReader.READERS).to.have.property("xls");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("XLS");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("GeocodedAddress");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("GeocodeMatchCode");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("Address");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("freeFormAddress");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("Building");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("Street");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("Place");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("PostalCode");
            expect(DirectGeocodeResponseReader.READERS.xls).to.have.property("Error");

            expect(DirectGeocodeResponseReader.READERS).to.have.property("gml");
            expect(DirectGeocodeResponseReader.READERS.gml).to.have.property("pos");

            expect(DirectGeocodeResponseReader.READERS).to.have.property("ExceptionReport");
            expect(DirectGeocodeResponseReader.READERS).to.have.property("Exception");

            expect(DirectGeocodeResponseReader).to.have.property("read");
        });

        it("DirectGeocodeResponseReader.read(root)", function () {
            p.setXMLString(xmlGeocodeResponse);
            var xmlDoc = p.getXMLDoc();

            // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
            var rep = DirectGeocodeResponseReader.read(xmlDoc.documentElement);
            should().exist(rep);
            expect(rep).to.have.property("locations");
            expect(rep.locations).to.be.an("array");
            expect(rep.locations).to.have.length(1);
            expect(rep.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");
            // vérification avec une réponse contenant une exception
            rep = DirectGeocodeResponseReader.read(xmlErrorDoc.documentElement);
            should().exist(rep);
            expect(rep).to.have.property("exceptionReport");
            expect(rep.exceptionReport).to.have.property("exceptionCode", "MissingRights");
        });

        it("DirectGeocodeResponseReader.read(root) but response beautify", function () {

            p.setXMLString(xmlGeocodeResponseBeautify);
            var xmlDocBeautify = p.getXMLDoc();

            // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
            var rep = DirectGeocodeResponseReader.read(xmlDocBeautify.documentElement);
            should().exist(rep);
            expect(rep).to.have.property("locations");
            expect(rep.locations).to.be.an("array");
            expect(rep.locations).to.have.length(1);
            expect(rep.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");

        });

        it("DirectGeocodeResponseReader.read(root) but response minify", function () {

            p.setXMLString(xmlGeocodeResponseMinify);
            var xmlDocBeautify = p.getXMLDoc();

            // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
            var rep = DirectGeocodeResponseReader.read(xmlDocBeautify.documentElement);
            should().exist(rep);
            expect(rep).to.have.property("locations");
            expect(rep.locations).to.be.an("array");
            expect(rep.locations).to.have.length(1);
            expect(rep.locations[0].placeAttributes).to.have.property("commune", "Saint-Mandé");

        });
    });

});

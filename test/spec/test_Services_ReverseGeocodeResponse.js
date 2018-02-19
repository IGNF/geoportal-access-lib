/*
* Tests sur la construction d'une réponse de géocodage inverse (GeocodeResponse) à partir d'une réponse XML de géocodage inverse.
*/
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import GeocodeResponse from "../../src/Services/Geocode/Response/model/GeocodeResponse";
import GeocodedLocation from "../../src/Services/Geocode/Response/model/GeocodedLocation";
import ReverseGeocodedLocation from "../../src/Services/Geocode/Response/model/ReverseGeocodedLocation";
import ReverseGeocodeResponseReader from "../../src/Services/Geocode/Formats/ReverseGeocodeResponseReader";
import XML from "../../src/Formats/XML";

describe("-- Tests ReverseGeocode --", function () {

    describe("-- tests de l'objet GeocodeResponse en sortie", function () {

        it("attributs de GeocodeResponse", function () {
            var rg = new GeocodeResponse();
            should().exist(rg);
            expect(rg).to.have.property("locations");
            expect(rg.locations).to.be.an("array");
            expect(rg.locations).to.be.empty;
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

        it("attributs de ReverseGeocodedLocation", function () {
            var rg = new ReverseGeocodedLocation();
            should().exist(rg);
            // attributs hérités de GeocodedLocation()
            expect(rg).to.have.property("position");
            expect(rg.position).to.be.an("object");
            expect(rg.position).to.have.property("x", null);
            expect(rg.position).to.have.property("y", null);
            expect(rg).to.have.property("matchType", null);
            expect(rg).to.have.property("placeAttributes");
            expect(rg.placeAttributes).to.be.an("object");
            // attributs spécifiques
            expect(rg).to.have.property("CLASSNAME", "ReverseGeocodedLocation");
            expect(rg).to.have.property("searchCenterDistance", null);
        });

    });

    describe("-- tests de ReverseGeocodeResponseReader", function () {

        var p = new XML();
        // construction de root à passer en paramètres (à partir d'une réponse de géocodage)
        var xmlReverseGeocodeReponse = '<?xml version="1.0" encoding="UTF-8"?><XLS version="1.2" xmlns="http://www.opengis.net/xls" xmlns:gml="http://www.opengis.net/gml" xmlns:xls="http://www.opengis.net/xls" xmlns:xlsext="http://www.opengis.net/xlsext" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://wxs.ign.fr/schemas/olsAll.xsd"><ResponseHeader/><Response requestID="abc" version="1.2"><ReverseGeocodeResponse><ReverseGeocodedLocation><gml:Point><gml:pos>48.803209 2.324379</gml:pos></gml:Point><Address countryCode="StreetAddress"><StreetAddress><Building number="52"/><Street>av aristide briand</Street></StreetAddress><Place type="Municipality">Bagneux</Place><Place type="Qualite">Plaque adresse</Place><Place type="ID">ADRNIVX_0000000287193485</Place><Place type="Departement">92</Place><Place type="Bbox">2.324379;48.803209;2.324379;48.803209</Place><Place type="Commune">Bagneux</Place><Place type="INSEE">92007</Place><Place type="Territoire">FXX</Place><Place type="ID_TR">TRONROUT0000000000540393</Place><PostalCode>92220</PostalCode></Address><xlsext:ExtendedGeocodeMatchCode>Street number</xlsext:ExtendedGeocodeMatchCode><SearchCentreDistance value="20.87"/></ReverseGeocodedLocation></ReverseGeocodeResponse></Response></XLS>';
        p.setXMLString(xmlReverseGeocodeReponse);
        var xmlDoc = p.getXMLDoc();

        // réponse du service avec une exception
        var xmlErrorReponse = "<ExceptionReport><Exception exceptionCode='MissingParameter'>Key does not exist or has expired</Exception></ExceptionReport>";
        p.setXMLString(xmlErrorReponse);
        var xmlErrorDoc = p.getXMLDoc();

        it("attributs de ReverseGeocodeResponseReader", function () {
            should().exist(ReverseGeocodeResponseReader);
            expect(ReverseGeocodeResponseReader).to.have.property("VERSION", "1.2");
            expect(ReverseGeocodeResponseReader).to.have.property("NAMESPACES");
            expect(ReverseGeocodeResponseReader).to.have.property("SCHEMALOCATION", "http://wxs.ign.fr/schemas/olsAll.xsd");
            expect(ReverseGeocodeResponseReader).to.have.property("DEFAULTPREFIX", "xls");
            expect(ReverseGeocodeResponseReader).to.have.property("READERS");

            expect(ReverseGeocodeResponseReader.READERS).to.have.property("xls");
            expect(ReverseGeocodeResponseReader.READERS.xls).to.have.property("XLS");
            expect(ReverseGeocodeResponseReader.READERS.xls).to.have.property("ReverseGeocodedLocation");
            expect(ReverseGeocodeResponseReader.READERS.xls).to.have.property("Address");
            expect(ReverseGeocodeResponseReader.READERS.xls).to.have.property("Building");
            expect(ReverseGeocodeResponseReader.READERS.xls).to.have.property("Street");
            expect(ReverseGeocodeResponseReader.READERS.xls).to.have.property("Place");
            expect(ReverseGeocodeResponseReader.READERS.xls).to.have.property("PostalCode");
            expect(ReverseGeocodeResponseReader.READERS.xls).to.have.property("SearchCentreDistance");
            expect(ReverseGeocodeResponseReader.READERS.xls).to.have.property("Error");

            expect(ReverseGeocodeResponseReader.READERS).to.have.property("xlsext");
            expect(ReverseGeocodeResponseReader.READERS.xlsext).to.have.property("ExtendedGeocodeMatchCode");

            expect(ReverseGeocodeResponseReader.READERS).to.have.property("gml");
            expect(ReverseGeocodeResponseReader.READERS.gml).to.have.property("pos");

            expect(ReverseGeocodeResponseReader.READERS).to.have.property("ExceptionReport");
            expect(ReverseGeocodeResponseReader.READERS).to.have.property("Exception");

            expect(ReverseGeocodeResponseReader).to.have.property("read");
        });

        it("ReverseGeocodeResponseReader.read(root)", function () {
            // vérification des infos d'une réponse avec 1 résultat de type StreetAddress.
            var rep = ReverseGeocodeResponseReader.read(xmlDoc.documentElement);
            should().exist(rep);
            expect(rep).to.have.property("locations");
            expect(rep.locations).to.be.an("array");
            expect(rep.locations).to.have.length(1);
            expect(rep.locations[0].placeAttributes).to.have.property("commune", "Bagneux");
            expect(rep.locations[0].placeAttributes).to.have.property("street", "av aristide briand");
            // vérification avec une réponse contenant une exception
            rep = ReverseGeocodeResponseReader.read(xmlErrorDoc.documentElement);
            should().exist(rep);
            expect(rep).to.have.property("exceptionReport");
            expect(rep.exceptionReport).to.have.property("exceptionCode", "MissingParameter");
            expect(rep.exceptionReport).to.have.property("exception");
        });
    });
});

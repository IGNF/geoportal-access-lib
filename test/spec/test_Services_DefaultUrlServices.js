/*
* Test des urls par défaut des services (utilisées si aucune url n"est spécifiée par l"utilisateur)
*/

import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import DefaultUrlService from "../../src/Services/DefaultUrlService";

describe("-- Test DefaultUrlService --", function () {

    describe("URLs par defaut des services", function () {

        var key = "CLE";
        var keys = ["CLE1", "CLE2"];

        it("DefaultUrlService", function () {

            expect(DefaultUrlService.Alti.newUrl(key)["elevation-json"]).to.be.equal("https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.json");
            expect(DefaultUrlService.Alti.newUrl(key)["elevation-xml"]).to.be.equal("https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.xml");
            expect(DefaultUrlService.Alti.newUrl(key)["profil-json"]).to.be.equal("https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevationLine.json");
            expect(DefaultUrlService.Alti.newUrl(key)["profil-xml"]).to.be.equal("https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevationLine.xml");
            expect(DefaultUrlService.ProcessIsoCurve.newUrl(key)).to.be.equal("https://data.geopf.fr/navigation/isochrone");
            expect(DefaultUrlService.AutoComplete.newUrl(key)).to.be.equal("https://data.geopf.fr/geocodage/completion" );
            expect(DefaultUrlService.ReverseGeocode.newUrl(key)).to.be.equal("https://data.geopf.fr/geocodage/reverse");
            expect(DefaultUrlService.Config.url([key])).deep.to.be.equal(["https://raw.githubusercontent.com/IGNF/geoportal-configuration/new-url/dist/CLEConfig.json"]);
            expect(DefaultUrlService.Config.url(keys)).deep.to.be.equal(["https://raw.githubusercontent.com/IGNF/geoportal-configuration/new-url/dist/CLE1Config.json","https://raw.githubusercontent.com/IGNF/geoportal-configuration/new-url/dist/CLE2Config.json"]);
            expect(DefaultUrlService.Geocode.newUrl(key)).to.be.equal("https://data.geopf.fr/geocodage/search");
            expect(DefaultUrlService.Route.newUrl(key)).to.be.equal("https://data.geopf.fr/navigation/itineraire");
        });
    });
});

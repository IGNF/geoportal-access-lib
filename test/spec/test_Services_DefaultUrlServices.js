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

            expect(DefaultUrlService.Alti.url(key)["elevation-json"]).to.be.equal("https://wxs.ign.fr/calcul/alti/rest/elevation.json");
            expect(DefaultUrlService.Alti.url(key)["elevation-xml"]).to.be.equal("https://wxs.ign.fr/calcul/alti/rest/elevation.xml");
            expect(DefaultUrlService.Alti.url(key)["profil-json"]).to.be.equal("https://wxs.ign.fr/calcul/alti/rest/elevationLine.json");
            expect(DefaultUrlService.Alti.url(key)["profil-xml"]).to.be.equal("https://wxs.ign.fr/calcul/alti/rest/elevationLine.xml");
            expect(DefaultUrlService.ProcessIsoCurve.url(key)).to.be.equal("https://wxs.ign.fr/calcul/geoportail/isochrone/rest/1.0.0/isochrone");
            expect(DefaultUrlService.AutoComplete.url(key)).to.be.equal("https://wxs.ign.fr/calcul/geoportail/geocodage/rest/0.1/completion" );
            expect(DefaultUrlService.ReverseGeocode.url(key)).to.be.equal("https://wxs.ign.fr/calcul/geoportail/geocodage/rest/0.1/reverse");
            expect(DefaultUrlService.Config.url([key])).deep.to.be.equal(["https://raw.githubusercontent.com/IGNF/geoportal-configuration/new-url/dist/CLEConfig.json"]);
            expect(DefaultUrlService.Config.url(keys)).deep.to.be.equal(["https://raw.githubusercontent.com/IGNF/geoportal-configuration/new-url/dist/CLE1Config.json","https://raw.githubusercontent.com/IGNF/geoportal-configuration/new-url/dist/CLE2Config.json"]);
            expect(DefaultUrlService.Geocode.url(key)).to.be.equal("https://wxs.ign.fr/calcul/geoportail/geocodage/rest/0.1/search");
            expect(DefaultUrlService.Route.url(key)).to.be.equal("https://wxs.ign.fr/calcul/geoportail/itineraire/rest/1.0.0/route");
        });
    });
});

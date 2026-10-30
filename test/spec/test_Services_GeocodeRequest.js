/*
* Tests de la construction d"une requête de géocodage, par la classe GeocodeRequestFactory.
*/
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import GeocodeRequestFactory from "../../src/Services/Geocode/Request/GeocodeRequestFactory";

describe("-- Test GeocodeRequest --", function () {

    describe("DirectGeocodeRequestFactory", function () {

        it("L'appel de la factory en mode GET renvoie un chaine 'qxml'", function () {

            var options = {
                httpMethod : "GET",
                geocodeMethod : "search",
                index: "PositionOfInterest",
                query : "Saint-Mandée, 94166",
                filter : {
                    postalCode : "94166"
                }
            };

            /** validation */
            var valide =  function (result) {
                expect(result).to.be.a('string');
            };

            var request = GeocodeRequestFactory.build(options);
            valide(request);
        });

        it("Encadre chaque catégorie de guillemets dans les filtres de recherche", function () {
            var options = {
                geocodeMethod : "search",
                query : "Ancien Glacier du Puy Gris",
                index : "PositionOfInterest",
                filters : {
                    category : ["glacier, névé", "plan d'eau"]
                }
            };

            var request = GeocodeRequestFactory.build(options);

            expect(request).to.contain('category="glacier, névé","plan d\'eau"');
        });
    });
});

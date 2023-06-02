import Logger from "../../../Utils/LoggerByDefault";
import MRes from "../../../Utils/MessagesResources";
import ErrorService from "../../../Exceptions/ErrorService";
import RouteResponse from "./model/RouteResponse";
import RouteInstruction from "./model/RouteInstruction";

/**
 * Factory pour générer une reponse JSON à partir d'un XML ou d'un JSON
 * (Factory)
 *
 * @module RouteResponseFactory
 * @alias Gp.Services.Route.Response.RouteResponseFactory
 * @private
 */
var RouteResponseFactory = {

    /**
     * interface unique
     *
     * @method build
     * @static
     * @param {Object} options - options definies dans le composant Route
     *
     * @example
     *   var options = {
     *      response :
     *      outputFormat :
     *      rawResponse :
     *      scope :
     *      onSuccess :
     *      onError :
     *   };
     *
     */
    build : function (options) {
        // logger
        var logger = Logger.getLogger("RouteResponseFactory");
        logger.trace("RouteResponseFactory::build()");

        var data = null;

        if (options.response) {
            if (options.rawResponse) {
                logger.trace("analyze response : raw");
                data = options.response;
            } else {
                logger.trace("analyze response : json");

                var JSONResponse;
                if (typeof options.response === "string") {
                    JSONResponse = JSON.parse(options.response);
                } else {
                    JSONResponse = options.response;
                }

                // construction de l'objet réponse JSON
                if (JSONResponse) {
                    // le service renvoie t il une erreur ?
                    if (JSONResponse.message) {
                        // ex. {"message":"message not null", "status":"ERROR"}
                        options.onError.call(options.scope, new ErrorService(MRes.getMessage("SERVICE_RESPONSE_EXCEPTION", JSONResponse.message)));
                        return;
                    }
                    var legs = [];
                    var legSteps = [];
                    var steps = [];

                    data = new RouteResponse();

                    if (data.hasOwnProperty("totalTime")) {
                        data.totalTime = parseFloat(JSONResponse.duration);
                    }
                    if (data.hasOwnProperty("totalDistance")) {
                        data.totalDistance = parseFloat(JSONResponse.distance);
                    }

                    if (data.hasOwnProperty("bbox")) {
                        data.bbox.left = parseFloat(JSONResponse.bbox[0]);
                        data.bbox.bottom = parseFloat(JSONResponse.bbox[1]);
                        data.bbox.right = parseFloat(JSONResponse.bbox[2]);
                        data.bbox.top = parseFloat(JSONResponse.bbox[3]);
                    }

                    if (data.hasOwnProperty("routeGeometry") && !options.geometryInInstructions) {
                        data.routeGeometry = JSONResponse.geometry;
                    }

                    if (data.hasOwnProperty("routeInstructions") && options.geometryInInstructions) {
                        var legList = JSONResponse.portions;
                        var i;
                        if (Array.isArray(legList) && legList.length) {
                            for (i = 0; i < legList.length; i++) {
                                legs.push(legList[i]);
                            }
                        }
                        if (legs.length) {
                            for (i = 0; i < legs.length; i++) {
                                legSteps.push(legs[i].steps);
                            }
                        }
                        if (legSteps.length) {
                            for (i = 0; i < legSteps.length; i++) {
                                steps = steps.concat(legSteps[i]);
                            }
                        }

                        steps.forEach(function (step) {
                            data.routeInstructions.push(new RouteInstruction());
                            data.routeInstructions[data.routeInstructions.length - 1].duration = step.duration;
                            data.routeInstructions[data.routeInstructions.length - 1].distance = step.distance;
                            data.routeInstructions[data.routeInstructions.length - 1].code = "";
                            data.routeInstructions[data.routeInstructions.length - 1].instruction = "";
                            data.routeInstructions[data.routeInstructions.length - 1].geometry = step.geometry;

                            // on ne souhaite pas de ce type de valeur...
                            if (step.name === "Valeur non renseignée") {
                                step.name = "";
                            }

                            switch (step.instruction.type) {
                                case "turn":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Tourner";
                                    break;
                                case "new name":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Continuer tout droit";
                                    break;
                                case "depart":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Départ";
                                    break;
                                case "arrive":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Arrivée";
                                    break;
                                case "merge":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Rejoindre";
                                    break;
                                case "ramp":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Prendre la bretelle";
                                    break;
                                case "on ramp":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Prendre la bretelle";
                                    break;
                                case "off ramp":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Prendre la sortie";
                                    break;
                                case "fork":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Sur la bifurcation, prendre";
                                    break;
                                case "end of road":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "À la fin de la route, prendre";
                                    break;
                                case "use lane":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Utiliser la file";
                                    break;
                                case "continue":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Continuer";
                                    break;
                                case "roundabout":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Au rond-point";
                                    break;
                                case "rotary":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Au rond-point";
                                    break;
                                case "roundabout turn":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "Au rond point, tourner";
                                    break;
                                case "notification":
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "";
                                    break;
                                default:
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += "?" + step.instruction.type + "?";
                                    break;
                            }

                            if (step.instruction.modifier) {
                                switch (step.instruction.modifier) {
                                    case "uturn":
                                        data.routeInstructions[data.routeInstructions.length - 1].instruction = "Faire demi-tour";
                                        break;
                                    case "sharp right":
                                        data.routeInstructions[data.routeInstructions.length - 1].instruction += " complètement à droite";
                                        break;
                                    case "right":
                                        data.routeInstructions[data.routeInstructions.length - 1].instruction += " à droite";
                                        break;
                                    case "slight right":
                                        data.routeInstructions[data.routeInstructions.length - 1].instruction += " légèrement à droite";
                                        break;
                                    case "straight":
                                        data.routeInstructions[data.routeInstructions.length - 1].instruction = "Continuer tout droit";
                                        break;
                                    case "slight left":
                                        data.routeInstructions[data.routeInstructions.length - 1].instruction += " lègèrement à gauche";
                                        break;
                                    case "left":
                                        data.routeInstructions[data.routeInstructions.length - 1].instruction += " à gauche";
                                        break;
                                    case "sharp left":
                                        data.routeInstructions[data.routeInstructions.length - 1].instruction += " complètement à gauche";
                                        break;
                                    default:
                                        data.routeInstructions[data.routeInstructions.length - 1].instruction += " ?" + step.instruction.modifier + "?";
                                        break;
                                }
                            }

                            if (step.instruction.exit) {
                                data.routeInstructions[data.routeInstructions.length - 1].instruction += `${step.instruction.exit}e sortie`;
                            }

                            if (step.attributes.name) {
                                if (step.attributes.name.nom_1_droite || step.attributes.name.toponyme) {
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += " sur";
                                }

                                if (step.attributes.name.nom_1_droite) {
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += ` ${step.attributes.name.nom_1_droite}`;
                                }

                                if (step.attributes.name.toponyme) {
                                    data.routeInstructions[data.routeInstructions.length - 1].instruction += ` ${step.attributes.name.toponyme}`;
                                }
                            }
                        });
                    }
                }

                if (!data) {
                    options.onError.call(options.scope, new ErrorService(MRes.getMessage("SERVICE_RESPONSE_ANALYSE", "json")));
                    return;
                }

                // Si la réponse contenait une exception renvoyée par le service
                if (data.exceptionReport) {
                    options.onError.call(options.scope, new ErrorService(MRes.getMessage("SERVICE_RESPONSE_EXCEPTION_2")));
                    return;
                }
            }
        } else {
            options.onError.call(options.scope, new ErrorService(MRes.getMessage("SERVICE_RESPONSE_EMPTY")));
            return;
        }

        options.onSuccess.call(options.scope, data);
    }
};

export default RouteResponseFactory;

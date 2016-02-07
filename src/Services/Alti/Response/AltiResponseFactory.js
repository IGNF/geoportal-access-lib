/**
 * Factory pour générer une reponse JSON à partir d'un XML ou d'un JSON
 * (Factory)
 *
 * @module AltiResponseFactory
 * @private
 * @alias Gp.Services.Alti.Response.AltiResponseFactory
 */
define([
    "Utils/LoggerByDefault",
    "Exceptions/ErrorService",
    "Utils/MessagesResources",
    "Formats/XML",
    "Services/Alti/Formats/AltiResponseReader",
    "Services/Alti/Response/model/AltiResponse",
    "Services/Alti/Response/model/Elevation"
],
function (
    Logger,
    ErrorService, MRes,
    XML, AltiResponseReader, AltiResponse, Elevation
) {

    "use strict";

    var AltiResponseFactory = {

        /**
         * interface unique
         *
         * @method build
         * @static
         * @param {Object} options - options definies dans le composant Alti
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
            var logger = Logger.getLogger("AltiResponseFactory");
            logger.trace(["AltiResponseFactory::build()"]);

            var data = null;

            if ( options.response ) {
                if ( options.rawResponse ) {
                    logger.trace("analyze response : raw");
                    data = options.response;
                } else {
                    switch (options.outputFormat) {

                        case "xml" :
                            logger.trace("analyze response : xml");

                            try {

                                var p = new XML({
                                    reader : AltiResponseReader
                                });

                                if ( typeof options.response === "string" ) {
                                    p.setXMLString(options.response);
                                } else {
                                    p.setXMLDoc(options.response);
                                }

                                data = p.parse();

                                if (! data) {
                                    throw new Error(MRes.getMessage("SERVICE_RESPONSE_EXCEPTION_2"));
                                }

                            } catch (e) {

                                var message  = e.message;
                                options.onError.call(options.scope,  new ErrorService({
                                    message : MRes.getMessage("SERVICE_RESPONSE_EXCEPTION", message),
                                    status : 200,
                                    type : ErrorService.TYPE_SRVERR
                                }));
                                return;
                            }

                            break;

                        case "json":
                            logger.trace("analyze response : json");

                            var JSONResponse;
                            if ( typeof options.response === "string" ) {
                                // FIXME : tester l'environnement (nodejs ou browser ?)
                                JSONResponse = window.JSON.parse(options.response);
                            } else {
                                JSONResponse = options.response;
                            }

                            // le service renvoie t il une erreur ?
                            if (JSONResponse.error) {
                                // ex. {"error": {"code": "BAD_PARAMETER","description": "The values () cannot be parsed as a valid longitude (double value such as -180 < lat < 180)."}}
                                options.onError.call(options.scope,  new ErrorService({
                                    message : MRes.getMessage("SERVICE_RESPONSE_EXCEPTION", JSONResponse.error.description),
                                    status : 200,
                                    type : ErrorService.TYPE_SRVERR
                                }));
                                return;
                            }

                            // analyse de la reponse
                            if ( JSONResponse ) {
                                var elevations = JSONResponse.elevations;
                                var altiResponse = new AltiResponse();
                                var elevation;
                                if ( Array.isArray(elevations) && elevations.length ) {
                                    for ( var i = 0; i < elevations.length; i++) {
                                        elevation = new Elevation();

                                        if ( typeof elevations[i] === "object" ) {
                                            // elevations[i] est un objet elevation
                                            if ( elevations[i].lon ) {
                                                elevation.lon = elevations[i].lon;
                                            }
                                            if ( elevations[i].lat ) {
                                                elevation.lat = elevations[i].lat;
                                            }
                                            if ( elevations[i].z ) {
                                                elevation.z = elevations[i].z;
                                            }
                                            if ( elevations[i].acc ) {
                                                elevation.acc = elevations[i].acc;
                                            }
                                        } else if ( typeof elevations[i] === "number" ) {
                                            // elevations[i] est un nombre, dans le cas de zonly=true notamment
                                            elevation.z = elevations[i];
                                        }

                                        if ( Array.isArray(altiResponse.elevations) ) {
                                            altiResponse.elevations.push(elevation);
                                        }
                                    }
                                }
                                data = altiResponse;
                            }

                            if (! data) {
                                options.onError.call(options.scope, new ErrorService({
                                    message : MRes.getMessage("SERVICE_RESPONSE_ANALYSE_2"),
                                    type : ErrorService.TYPE_UNKERR,
                                    status : -1
                                }));
                                return;
                            }
                            break;

                        default :
                            options.onError.call(options.scope, new ErrorService({
                                message : MRes.getMessage("SERVICE_RESPONSE_FORMAT_2"),
                                type : ErrorService.TYPE_UNKERR,
                                status : -1
                            }));
                            return;
                    }

                    // Si la réponse contenait une exception renvoyée par le service
                    if ( data.exceptionReport ) {
                        options.onError.call(options.scope, new ErrorService({
                            message : MRes.getMessage("SERVICE_RESPONSE_EXCEPTION", data.exceptionReport),
                            type : ErrorService.TYPE_SRVERR,
                            status : 200
                        }));
                        return;
                    } else if ( data.error ) {
                        var message = data.error.description;
                        options.onError.call(options.scope, new ErrorService({
                            message : MRes.getMessage("SERVICE_RESPONSE_EXCEPTION", message),
                            type : ErrorService.TYPE_SRVERR,
                            status : 200
                        }));
                        return;
                    }
                }
            } else {
                options.onError.call(options.scope, new ErrorService(MRes.getMessage("SERVICE_RESPONSE_EMPTY")));
                return;
            }

            options.onSuccess.call(options.scope, data);
            return;
        }
    };

    return AltiResponseFactory;
});

define([], function () {

    "use strict";

    /**
     * Response object for {@link module:Services~route Gp.Services.route()} invocation when successful. Received as the argument of onSuccess callback function.
     *
     * @property {Gp.BBox} bbox - Bounding Box of the route. Given when provideBBox parameter is used in function call.
     * @property {Object} routeGeometry - Geometry (expressed in [GeoJSON]{@link http://geojson.org/}) of the route.
     * @property {Array.<Gp.Services.Route.RouteInstruction>} routeInstructions - Instructions of the route.
     * @property {Float} totalDistance - Length of the route. Expressed in km or m, depending on distanceUnit parameter.
     * @property {Float} totalTime - Route duration in seconds.
     *
     * @namespace
     * @alias Gp.Services.RouteResponse
     */
    function RouteResponse () {

        if (!(this instanceof RouteResponse)) {
            throw new TypeError("RouteResponse constructor cannot be called as a function.");
        }

        this.totalTime = null;

        this.totalDistance = null;

        this.bbox = {
            left : null,
            right : null,
            top : null,
            bottom : null
        };

        this.routeGeometry = null; // FIXME can be null if option 'geometryInInstructions' is true !

        this.routeInstructions = [];
    }

    RouteResponse.prototype = {

        constructor : RouteResponse

    };

    return RouteResponse;
});


define([], function () {

    "use strict";

    /**
     * Single Route Instruction object.
     *
     * @property {String} code - Instruction code :
     *
     * - "F" : Straight forward
     * - "B" : U-turn
     * - "L" : turn left
     * - "R" : turn right
     * - "BL" : turn left strongly
     * - "BR" : turn right strongly
     * - "FL" : turn lightly to the left
     * - "FR" : turn lightly to the right
     * - "round_about_entry" : round about entry
     * - "round_about_exit" : round about exit
     * 
     * @property {String} instruction - Instruction text : translated code + street name
     * @property {Float} distance - Length of the instruction. Expressed in km or m, depending on distanceUnit parameter.
     * @property {Float} duration - Instruction duration in seconds.
     * 
     * @namespace
     * @alias Gp.Services.Route.RouteInstruction
     */
    function RouteInstruction () {

        if (!(this instanceof RouteInstruction)) {
            throw new TypeError("RouteInstruction constructor cannot be called as a function.");
        }

        this.duration = null;

        this.distance = null; 

        this.code = null;

        this.instruction = null;

        /**
         * Géometrie de l'instruction. La présence de cette propriété est déterminée par le paramètre provideGeometry de la requête.
         * @type {Object}  
         */
        // FIXME - Le service ne répond pas au paramètre provideGeometry -> on désactive pour l'instant
        // this.geometry = null;
    }
    
    RouteInstruction.prototype = {

        constructor : RouteInstruction

    };
    
    return RouteInstruction;
});

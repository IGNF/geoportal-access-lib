
/**
 * Single measure object returned by underlying web service if measures = true and zonly = false
 *
 * @property {String} source_name - Name of the source
 * @property {String} source_measure - Name of the measure
 * @property {Float} z - Point elevation.
 * @property {Float} acc - Accuracy of elevation for this point. (only if zonly=false)
 *
 * @namespace
 * @alias Gp.Services.Alti.Measure
 */
function Measure () {
    if (!(this instanceof Measure)) {
        throw new TypeError("Measure constructor cannot be called as a function.");
    }

    this.source_name = null;
    this.source_measure = null;
    this.z = null;
    this.acc = null;
}

Measure.prototype = {

    constructor : Measure

};

export default Measure;

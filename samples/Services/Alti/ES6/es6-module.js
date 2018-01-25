import * as Gp from "../../../../dist/GpServices-src.js";

export function compute (options) {
    // call self = window to get Gp (globale !)
    self.Gp.Services.getAltitude(options);
}

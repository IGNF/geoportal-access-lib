import Logger from "../Utils/LoggerByDefault";
import Schema from "./OWC/Schema";

/**
 * @classdesc
 * 
 * Construction d'un fichier JSON de context OWC
 * {@link https://www.ogc.org/fr/publications/standard/owc/}
 * 
 * @constructor
 * @alias Gp.Formats.OWC
 *
 * @param {Object} [options] - options du format OWC
 * @example
 * // appel via les services
 * Gp.Services.getContext({
 *      data : [{
 *        name : "PLAN.IGN",
 *        service : "TMS",
 *      }],
 *      configuration : {
 *          type : "service", // ou service|json|object
 *          url : "[url du service de recherche]" // data: "file.json" ou data: {}
 *      },
 *      onSuccess : (response) => {}
 *      onFailure : (error) => {}
 * });
 * 
 * // appel direct de la classe
 * var owc = new OWC({
 *  // conf tech issue de geoportal-configuration
 *  data : {...},
 *  // nom du template de transformation
 *  template : "geoportal-configuration", 
 *  // version du template
 *  version : 1.0, 
 * });
 * owc.setVersion();
 * owc.setData();
 * owc.setTemplate();
 * var context = owc.build();
 */
class OWC {
    /**
     * constructor
     * @param {*} options 
     */
    constructor(options) {
        
        this.logger = Logger.getLogger();
        this.logger.trace("[Constructeur OWC ()]");

        // options par defaut
        this.options = {};

        // et on ajoute les options en paramètre aux options par défaut
        for (var opt in options) {
            if (options.hasOwnProperty(opt)) {
                if (options[opt]) {
                    this.options[opt] = options[opt];
                }
            }
        }

        this.setTemplate(this.options.template);
        this.setVersion(this.options.version);
        this.setData(this.options.data);
        this.setAdditional(this.options.additional);

        return this;
    }

    /**
     * Nom du template de conversion vers le context
     * @param {*} template 
     */
    setTemplate (template) {
        this.template = template || "";
    }

    /**
     * Format d'entrée en JSON
     * @param {*} data 
     */
    setData (data) {
        this.data = data || {};
    }

    /**
     * Version du tempate de conversion
     * @param {*} version 
     */
    setVersion (version) {
        this.version = Number(version) || 1.0;
    }

    /**
     * Données additionnelles
     * @param {*} data 
     */
    setAdditional (data) {
        this.additional = data || {};
    }
    
    /**
     * build
     * @returns {Object} - 
     * @fixme on ne traite qu'une seule donnée !
     * @todo les données additionnelles !
     */
    build () {
        var map = Schema.get(this.template, this.version);
        if (! map) {
            throw "[run OWC::build()] Erreur de récuperation du schema !"
        }

        var newSchema = Schema.transform(this.data, map);
        if (! newSchema) {
            throw "[run OWC::build()] Erreur de transformation de schema !";
        }

        return newSchema;
    }

}

export default OWC;

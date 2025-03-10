/** Liste des properties de type classe : context et resource */
const classType = {
    "typeName:context" : {
        "lang": "",
        "title": "",
        "subtitle": "",
        "updated": "",
        "publisher": "",
        "date": "",
        "generator": "",
        "authors": [],
        "contributors": [],
        "categories": [],
        "links": [],
        "bbox": []
    },
    "typeName:resource" : {
        "title": "",
        "abstract": "",
        "name": "", // added !
        "service": "", // added !
        "updated": "",
        "publisher": "",
        "date": "",
        "active": true,
        "opacity": 1, // added !
        "visibility": true, // added !
        "authors": [],
        "contributors": [],
        "offerings": [],
        "categories": [],
        "links": [],
        "minscaledenominator": 0,
        "maxscaledenominator": 0,
    }
};

/** 
 * Liste des properties de type data : 
 * - offering 
 * - operation
 * - content
 * - style
 */
const dataType = {
    "typeName:offering" : {
        "code": "",
        "operations": [],
        "contents": [],
        "styles": []
    },
    "typeName:operation": {
        "code": "",
        "method": "",
        "type": "",
        "href": "",
        "request": {},
        "result": {}
    },
    "typeName:content": {
        "code": "",
        "title": "",
        "href": "",
        "content": ""
    },
    "typeName:style": {
        "name": "",
        "title": "",
        "abstract": "",
        "default": "",
        "legendURL": "",
        "content": ""
    }
};

/** Liste des services */
const offeringServiceExtension = [
    "WMS",
    "WMTS",
    "TMS",
    "WFS"
];

/** Liste des données de type fichier */
const offeringInlineExtension = [
    "KML",
    "GPX",
    "GEOJSON"
];

/** Liste des namespaces */
const namespaces = {
    "Core" : "http://www.opengis.net/spec/owc-geojson/1.0/req/core",
    "WMS" : "http://www.opengis.net/spec/owc-geojson/1.0/req/wms",
    "WMTS" : "http://www.opengis.net/spec/owc-geojson/1.0/req/wmts",
    "WFS" : "http://www.opengis.net/spec/owc-geojson/1.0/req/wfs",
    "TMS" : "http://www.opengis.net/tms/1.0",
    "KML" : "http://www.opengis.net/spec/owc-geojson/1.0/req/kml",
    "GPX" : "",
    "GEOJSON" : ""
};

/**
 * Transforme une emprise en geometrie geojson
 * @param {*} bbox 
 * @returns {Object} geometry
 */
const bbox2polygon = (bbox) => {
    const bottomLeft = [bbox.left, bbox.bottom];
    const topLeft = [bbox.left, bbox.top];
    const topRight = [bbox.right, bbox.top];
    const bottomRight = [bbox.right, bbox.bottom];

  return {
    "type" : "Polygon",
    "coordinates" : [[bottomLeft, bottomRight, topRight, topLeft, bottomLeft]]
  };
};

/**
 * Liste des templates de transformations vers le context owc:
 * - config
 * - search
 * - cartes.gouv.fr
 */
var TEMPLATES = [
    {
        version : 1.0,
        name : "test",
        schema : (data) => {
            return {
                person: {
                    name: data.person.name
                },
                pets: {
                    ...data.person.pets
                }
            };
        }
    },
    {
        version : 1.0,
        name : "config",
        schema : (data) => {
            // data utiles
            var key = data.key;
            var service = data.serviceParams.id.split(":")[1] || null;
            var name = data.name;
            var version = data.serviceParams.version;
            var server = data.serviceParams.serverUrl.full;
            var format = data.formats[0].name;
            var proj = data.defaultProjection;
            var styles = data.styles;
            // type d'offre
            var offering = null;
            if (service && offeringServiceExtension.includes(service)) {
                switch (service) {
                    case "WMS":
                        offering = [{
                            "code": namespaces.WMS,
                            "operations": [
                                {
                                  "code": "GetCapabilities",
                                  "method": "GET",
                                  "type": "application/xml",
                                  "href": server + "?SERVICE=WMS&VERSION=" + version + "&REQUEST=GetCapabilities",
                                  "request": {},
                                  "result": {}
                                },
                                {
                                  "code": "GetMap",
                                  "method": "GET",
                                  "type": format,
                                  "href": server + "?SERVICE=WMS&VERSION=" + version + "&REQUEST=GetMap&SRS=" + proj + "&BBOX=414475,4567125,451575,4588025&WIDTH=600&HEIGHT=400&LAYERS=" + name + "&FORMAT=" + format + "&STYLES=",
                                  "request": {},
                                  "result": {}
                                },
                                {
                                    "code": "GetLegendGraphic",
                                    "method": "GET",
                                    "type": format,
                                    "href": server + "?SERVICE=WMS&VERSION=" + version + "&REQUEST=GetLegendGraphic&WIDTH=20&HEIGHT=20&LAYER=" + name + "&FORMAT=" + format,
                                    "request": {},
                                    "result": {}
                                }
                            ],
                            "contents": [],
                            "styles": styles
                        }];
                        break;
                
                    default:
                        break;
                }
            }
            return {
                "type": "FeatureCollection",
                "id": "http://www.opengis.net/owc/1.0/" + key,
                "geometry": bbox2polygon(data.globalConstraint.bbox),
                "properties": {
                    "lang": "fr-FR",
                    "title": "",
                    "subtitle": "",
                    "updated": "",
                    "generator": "cartes.gouv.fr",
                    "authors": [{ "name": "cartes.gouv.fr" }],
                    "contributors": [],
                    "categories": [],
                    "links": [
                        {
                            "rel": "profile",
                            "href": namespaces.Core,
                            "title": "This file is compliant with version 1.0 of OGC Context"
                        }
                    ]
                },
                "features": [{
                    "type": "Feature",
                    "id": server + "/" + name,
                    "geometry": bbox2polygon(data.globalConstraint.bbox),
                    "properties": {
                        "title": data.title,
                        "updated": "",
                        "content": data.description,
                        "authors": [],
                        "contributors": [],
                        "categories": [],
                        "links": data.metadata,
                        "offerings": offering || [],
                        "minscaledenominator": data.globalConstraint.minScaleDenominator || 0,
                        "maxscaledenominator": data.globalConstraint.maxScaleDenominator || 0,
                    }
                }]
            };
        }
    }
];

var Schema = {
    get : (name, version) => {
        return TEMPLATES.find((el) => {
            if (el.name === name && el.version === version) {
                return true;
            }
        });
    },
    transform : (data, map) => {
        return map.schema(data);
    },
};

export default Schema;
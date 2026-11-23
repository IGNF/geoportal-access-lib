var dataWmsConfig = {
    "name": "ACCES.BIOMETHANE",
    "title": "Cartographie biométhane d’accès aux réseaux",
    "description": "Cette cartographie indique un premier ordre degrandeur du critère technico-économique exprimé en euro/Normalm3/h (€/Nm3/h): plus la valeur de ce critère est basse, meilleures sont les possibilités pour les opérateurs de réseau de réaliser des renforcements pour accueillir du biométhane sur la zone.",
    "globalConstraint": {
        "minScaleDenominator": 0,
        "maxScaleDenominator": 62236752975597,
        "bbox": {
            "left": -5.13901729,
            "right": 8.23029497,
            "top": 51.0893967,
            "bottom": 42.33348862
        }
    },
    "serviceParams": {
        "id": "OGC:WMS",
        "version": "1.3.0",
        "serverUrl": {
            "full": "https://data.geopf.fr/wms-v/ows"
        }
    },
    "defaultProjection": "EPSG:4326",
    "queryable": true,
    "metadata": [],
    "styles": [
        {
            "name": "default-style-ACCES.BIOMETHANE",
            "title": "ACCES.BIOMETHANE style"
        }
    ],
    "legends": [
        {
            "format": "image/png",
            "url": "https://data.geopf.fr/wms-v/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ACCES.BIOMETHANE"
        }
    ],
    "formats": [
        {
            "name": "image/png",
            "current": true
        },
        {
            "name": "application/atom+xml",
            "current": false
        },
        {
            "name": "application/json;type=utfgrid",
            "current": false
        },
        {
            "name": "application/pdf",
            "current": false
        },
        {
            "name": "application/rss+xml",
            "current": false
        },
        {
            "name": "application/vnd.google-earth.kml+xml",
            "current": false
        },
        {
            "name": "application/vnd.google-earth.kml+xml;mode=networklink",
            "current": false
        },
        {
            "name": "application/vnd.google-earth.kmz",
            "current": false
        },
        {
            "name": "image/geotiff",
            "current": false
        },
        {
            "name": "image/geotiff8",
            "current": false
        },
        {
            "name": "image/gif",
            "current": false
        },
        {
            "name": "image/jpeg",
            "current": false
        },
        {
            "name": "image/png; mode=8bit",
            "current": false
        },
        {
            "name": "image/svg+xml",
            "current": false
        },
        {
            "name": "image/tiff",
            "current": false
        },
        {
            "name": "image/tiff8",
            "current": false
        },
        {
            "name": "image/vnd.jpeg-png",
            "current": false
        },
        {
            "name": "image/vnd.jpeg-png8",
            "current": false
        },
        {
            "name": "text/html; subtype=openlayers",
            "current": false
        },
        {
            "name": "text/html; subtype=openlayers2",
            "current": false
        },
        {
            "name": "text/html; subtype=openlayers3",
            "current": false
        }
    ],
    "key": "ACCES.BIOMETHANE$GEOPORTAIL:OGC:WMS"
};

export default dataWmsConfig;
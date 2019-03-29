# Geoportal Resources Access API Reference

The Geoportal Resources Access Library provides functions to simply handle geoportal web services usage.

**Usage pattern** : For each web service usage, invoque the corresponding function and get response data with onSuccess callback param.  

Example :

``` javascript
Gp.Services.getConfig({
    apiKey : "e4iu7ff4ot440oj40byfkciw",
    onSuccess : function(response) {
        // response is a Gp.Services.GetConfigResponse object
        ...
    }
}) ;

```


## Geoportal access key management

Access to Geoportal resources metadata availables with one ore several keys, using [Auto-configuration service](https://geoservices.ign.fr/documentation/geoservices/autoconf.html) of the Geoportal platform.

| Function to invoque | Response Object (onSuccess callback param) |
| - | - |
| {@link module:Services~getConfig Gp.Services.getConfig()} | {@link Gp.Services.GetConfigResponse} |


## Elevation web service usage

Getting elevations in or along of one or several points on french territories using the [elevation services of the Geoportal Platform](https://geoservices.ign.fr/documentation/geoservices/alti.html).<br/>

| Function to invoque | Response Object (onSuccess callback param) |
| - | - |
| {@link module:Services~getAltitude Gp.Services.getAltitude()} | {@link Gp.Services.AltiResponse} |

## Geocoding web service usage

Getting positon of a geographic identifier (places names, address, cadastral parcel, other...) using the [geocoding web service of the Geoportal Platform](https://geoservices.ign.fr/documentation/geoservices/geocodage.html).

| Function to invoque | Response Object (onSuccess callback param) |
| - | - |
| {@link module:Services~geocode Gp.Services.geocode()} | {@link Gp.Services.GeocodeResponse} |

## Reverse Geocoding web service usage

Retrieving geographical identifiers (place names, address, cadastral parcels, ...) near a given position, using the [reverse geocoding web service of the Geoportal Platform](https://geoservices.ign.fr/documentation/geoservices/geocodage-inverse.html).

| Function to invoque | Response Object (onSuccess callback param) |
| - | - |
| {@link module:Services~reverseGeocode Gp.Services.reverseGeocode()} | {@link Gp.Services.GeocodeResponse} |

## Autocompletion web service usage

Getting suggestions of probable places names or address based on uncomplete texts, using the [autocompletion service of the Geoportal Platform](https://geoservices.ign.fr/documentation/geoservices/autoconf.html)

| Function to invoque | Response Object (onSuccess callback param) |
| - | - |
| {@link module:Services~autoComplete Gp.Services.autoComplete()} | {@link Gp.Services.AutoCompleteResponse} |

## Routing web service usage

Getting a route from one point to another using the [route service of the Geoportal Platform](https://geoservices.ign.fr/documentation/geoservices/itineraires.html).

| Function to invoque | Response Object (onSuccess callback param) |
| - | - |
| {@link module:Services~route Gp.Services.route()} | {@link Gp.Services.RouteResponse} |

## IsoCurve web service usage

Computing a set of places (curve) reachable from a given point (or from where to start to reach a given point) within a time or distance constraint using [isucurve service of the Geoportal Platform](https://geoservices.ign.fr/documentation/geoservices/isochrones.html).

| Function to invoque | Response Object (onSuccess callback param) |
| - | - |
| {@link module:Services~isoCurve Gp.Services.isoCurve()} | {@link Gp.Services.IsoCurveResponse} |

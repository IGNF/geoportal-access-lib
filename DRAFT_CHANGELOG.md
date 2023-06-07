# Bibliothèque d'accès aux services Géoportail, version 3.3.1

**02/06/2023 : 3.3.1**

> release of geoportal access library

## Summary

Major change : the autoconfiguration service is not used anymore by the geoportal-access-lib API.
It is replaced by a Config pseudo-service : json config files directly readable by the geoportal-access-lib are daily generated from the getCapablities of the Geoportal services.

For the non-images services (route, isochrone, geocode, alti...) the "calcul" key is always used by default.

## Changelog

* [Added]

    - config pseudo-services (#83)

* [Changed]

    - local config.json file parameter is now called "customConfigFile" (#83)
    - the "calcul" apiKey is used by default to call non-images services (#83)

* [Removed]

    - Autoconfiguration files (readers, parsers...) (#83)
    - Autoconfiguration samples (#83)

## Details

### Clé "calcul" utilisée par défaut dans la bibliothèque d'accès aux services Géoportail

L'ensemble des services de calcul appelés via la bibliothèque d'accès sont désormais appelés avec la clé "calcul" par défaut dans la bibliothèque d'accès. Le paramètre "apiKey" n'est donc plus nécessaire pour appeler les services de géocodage, d'itinéraire, d'isochrone, d'altimétrie et d'autocomplétion, que ce soit directement depuis la bibliothèque d'accès ou via les widgets des extensions Géoportail.

**Exemple**

##### Avant :

```javascript
var options = {
    apiKey : "calcul",
    onSuccess : function (response) {
        print(response.elevations);
    },
    // spécifique au service
    positions : [{
        lon : 1.15,
        lat : 47.48
    }]
};
Gp.Services.getAltitude(options);
```

##### Maintenant :

```javascript
var options = {
    onSuccess : function (response) {
        print(response.elevations);
    },
    // spécifique au service
    positions : [{
        lon : 1.15,
        lat : 47.48
    }]
};
Gp.Services.getAltitude(options);
```


### Initialisation des API avec des fichiers de configuration en JSON au lieu d'un fichier d'autoconfiguration


#### Avec des clés d'accès Géoportail

L'autoconfiguration n'est plus appelée par les API. Pour la remplacer, nous générons quotidiennement, à partir des getCapabilities des services WMS et WMTS, des fichiers de configuration en JSON appelables par les API JavaScript Géoportail. Il y a un fichier par clé générique. L'avantage de ce nouveau processus (en plus de s'adapter au futur arrêt du service d'autoconfiguration) est que les fichiers de configuration JSON sont directement au format attendu par les API : il n'y a plus besoin de les parser pour en extraire les informations utiles puis pour les introduire dans une structure adéquate.
Par exemple, en renseignant "cartes" au paramètre apiKey, c'est le fichier cartesConfig.json qui sera chargé et directement utilisé par les API. 

**Exemple Bibliothèque d'accès**

```javascript
var options = {
    apiKey : "cartes",
    onSuccess : function (response) {
        print(response);
    },
    onFailure : function (error) {
        print(error.message);
    }
};
Gp.Services.getConfig(options);
```
        
##### Avant :

--> le fichier d'autoconfiguration de la clé "cartes" au format XML est récupéré depuis https://wxs.ign.fr/autoconf/cartes, parsé, puis utilisé par les API JavaScript Geoportail.

##### Maintenant :

--> le fichier de configuration de la clé "cartes" est récupéré depuis https://raw.githubusercontent.com/IGNF/geoportal-configuration/main/dist/cartesConfig.json puis directement utilisé par les API JavaScript Geoportail.


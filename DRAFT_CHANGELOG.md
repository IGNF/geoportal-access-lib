# Bibliothèque d'accès aux services Géoplateforme, version 3.4.0

**19/03/2024 : 3.4.0**

> release of geoportal access library

## Summary

Seconde release adaptative à la Géoplateforme : la bibliothèque d'accès aux services Geoportail devient la bibliothèque d'accès aux services Géoplateforme. 
L'ensemble des services de calcul Géoplateforme sont interrogeables par cette release 3.4.0.


## Changelog

* [Added]

* [Changed]

    - La bibliothèque d'accès utilise désormais les services d'isochrone et d'itinéraire de la Géoplateforme (7cd2f77e964999cc5dc6f0c619b7b8488349d648)
    - La bibliothèque d'accès utilise désormais le service d'altimétrie de la Géoplateforme (343ac9b)
    - La bibliothèque d'accès utilise désormais le service de Geocodage(direct/inverse/autocomplétion) de la Géoplateforme (89f3360)
    - Le paramètre apiKey devient facultatif pour l'appel à la fonction getConfig (2a2913b359e5f49a12a44ab4d713cbffef9552a7)
    - Aucune apiKey n'est necessaire pour l'appel aux services de calcul (886ceb13ffe2dbf2ffeec460d008ec49faec0fa8)
    - Mise à jour des exemples pour les adapter à la nouvelle interface Géoplateforme (965c4c93b506016331f2c57c24ea2eb0300582ac)
    - Mise à jour de la documentation et des README (e08b23591f37ae70b5f490406c7c43251d8057eb)

* [Removed]

* [Fixed]

    - Correction du filtrage par territoire sur l'autocompletion (f90a65eac80ea0640a81212547957154ed84288f)
    - Correction du logger en mode verbose en production (86386a03b8e39021e6c2aab79a10b0d44d1dab3b)

* [Deprecated]

* [Security]


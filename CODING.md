# CODING.md

Mémo de code pour la bibliothèque `geoportal-access-lib`.

## Périmètre

- Bibliothèque JavaScript ESM dédiée à l'accès aux services Géoplateforme
- Point d'entrée public: [src/Gp.js](src/Gp.js)
- Artefacts principaux: [dist/GpServices.js](dist/GpServices.js), [dist/GpServices-src.js](dist/GpServices-src.js) et [dist/GpServices-map.js](dist/GpServices-map.js)

## Règles de code

- Node.js `>=20`
- Indentation à 4 espaces
- Guillemets doubles
- Point-virgule obligatoire
- Espace avant les parenthèses de fonction
- Accolades explicites
- `var` reste autorisé dans le code historique du dépôt
- La JSDoc doit rester cohérente avec toute API publique modifiée
- Conserver le style local des fichiers existants

## Vérifications

- `npm run eslint`
- `npm run build`
- `npm run build:prod`
- `npm run build:dev`
- `npm run test`
- `npm run test:serve`
- `npm run sample:serve`
- `npm run doc:serve`

## Références

- Installation, build, exemples et tests: [COMPILE.md](COMPILE.md)
- Branches, commits et PR: [CONTRIBUTING.md](CONTRIBUTING.md)
# Compilation du projet

Récupération des dependances du projet :

> npm install

## Construction des bundles

> gulp

ou

> npm build

Les bundles sont disponibles dans le répertoire :

> dist/GpServices.js
> dist/GpServices-src.js

Les build issus de la compilation sont aussi disponibles dans le répertoire :

> target/dist/GpServices.js
> target/dist/GpServices-src.js
> target/dist/GpServices-debug.js

## Execution des tests

Execution des tests sous mocha :

> gulp test

ou

> npm test

Possibilité d'afficher les tests dans un browser :

> gulp test-cloud

## Execution des exemples

> gulp sample-cloud

## Construction de la JSDoc

> gulp doc

La JSDoc est disponible dnas le répertoire :

> target/doc

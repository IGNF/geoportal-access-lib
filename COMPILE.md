
# Compilation du projet

[![WEBPACK build](https://img.shields.io/badge/build%20with-WEBPACK-brightgreen.svg)](https://img.shields.io/badge/build%20with-WEBPACK-brightgreen.svg)
[![npm version](https://badge.fury.io/js/geoportal-access-lib.svg)](https://badge.fury.io/js/geoportal-access-lib)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Prérequis (outils)

* nodeJS (https://nodejs.org/en/download/)
* git (https://git-scm.com/downloads)
* git gui (*facultatif*)
* tortoiseGit (*facultatif*)
* Visual Studio Code / VSCode (*facultatif*)

### Réglage des outils

#### Gestion des fins de lignes (Git)

--*Windows only!*--

**ouvrir une console :**

    git config core.autocrlf false
    git rm --cached -r
    git reset --hard

> **Note :**
Possibilité de le faire via l'editeur _Visual Studio Code_ dans le menu
_Fichier > Préférences > Paramètres utilisateurs_
Pour plus d'information, cf. https://code.visualstudio.com/docs/getstarted/settings

#### Configuration du proxy d'entreprise

**ouvrir une console :**

    npm config set proxy http://proxy.company.com:8080
    npm config set https-proxy http://proxy.company.com:8080

ou

sous *Windows*, modifier le fichier _C:\\Users\< USER >\\.npmrc_
(sous *Linux*, on utilise le fichier _$HOME/.npmrc_ )
avec les lignes suivantes :

    proxy=http://proxy.company.com:8080
    https-proxy=http://proxy.company.com:8080
    https_proxy=http://proxy.company.com:8080

### Utilisation du terminal (Console Git ou NodeJS)

--*Windows only!*--

**Git** et **NodeJS** fournissent leur propre console.
L'utilisation de ces consoles permet d'avoir un environnement complet (ex. variables systèmes), mais il est tout à fait possible d'utiliser la console de *Windows* (CMD).

> **Note :**
Possibilité d'utiliser le terminal de _Visual Studio Code_ dans le menu
_Afficahge > Integred Terminal_
Pour plus d'information, cf. https://code.visualstudio.com/docs/editor/integrated-terminal

## Commandes via NPM

Liste des targets disponibles :

    npm run <target> <option>
        target : (clean), build,
                 test, sample, (doc)
                 test:serve, sample:serve, doc:serve
        option : --env.production, --env.development, --env.clean

### Installation des dépendances

**ouvrir une console :**

    npm install

Si vous passez par les commandes du package.json, les dépendances sont installées via
la target suivante :

**ouvrir une console :**

    npm run setup

### Compilation

**ouvrir une console :**

    npm run build
    npm run build -- --env.production
    npm run build -- --env.development

ou

    npm run build
    npm run build:prod
    npm run build:dev

Les *bundles* sont disponibles dans le répertoire :

	dist/GpServices.js
	dist/GpServices-src.js
	dist/GpServices-map.js

Les sources sont validées (jshint, jscs et/ou eslint).
La jsoc, les tests et les exemples sont générés.

#### Erreur de fin de lignes

Si vous avez des erreurs de parsing tel que **Invalid line break**, vous devez
modifier le paramètre du fichier _.jshintrc_ :
> validateLineBreaks : { character : "CRLF" }

#### JSDOC

#### Construction de la JSDOC

La jsdoc est générée lors du build dans le répertoire *jsdoc*.

Sous *Windows*, il est possible que la *JSDoc* ne soit pas compilée correctement
(problème de *path* du binaire), on peut l’exécuter manuellement :

**ouvrir une console :**

    node_modules\.bin\jsdoc -c jsdoc.json

#### Ouvrir la JSDOC sur un navigateur

**ouvrir une console :**

    npm run doc:serve

Le navigateur s'ouvre sur la page de la JSDOC sur l'URL suivante :
http://localhost:9001/

### Les exemples

#### Construction des exemples

Les exemples sont générées lors du build dans le répertoire *samples*.

**ouvrir une console :**

    npm run sample
    npm run sample -- --env.production
    npm run sample -- --env.development

ou

    npm run sample:serve
    npm run sample:serve:prod
    npm run sample:serve:dev

Le navigateur s'ouvre sur la page des exemples sur l'URL suivante :
http://localhost:9001/

### Les tests

#### Unitaires

##### en mode console

**ouvrir une console :**

    npm run test

##### dans un navigateur

**ouvrir une console :**

    npm run test:serve

Le navigateur s'ouvre sur la page des tests sur l'URL suivante :
http://localhost:9001/

##### couverture du code

**ouvrir une console :**

    npm run cover

**Résultats :**

    -----------------------------|----------|----------|----------|----------|
    File                         |  % Stmts | % Branch |  % Funcs |  % Lines |
    -----------------------------|----------|----------|----------|----------|
    All files                    |    43.68 |    25.29 |    42.49 |    43.68 |
     src                         |      100 |      100 |      100 |      100 |
      Gp.js                      |      100 |      100 |      100 |      100 |
     src/Exceptions              |       25 |        0 |        0 |       25 |
      ErrorService.js            |       25 |        0 |        0 |       25 |
     src/Formats                 |    78.21 |    63.76 |    83.87 |    78.21 |
      WKT.js                     |    88.89 |    77.78 |    33.33 |    88.89 |
      WPS.js                     |    83.61 |    71.05 |    77.78 |    83.61 |
      XLS.js                     |     87.5 |    72.73 |      100 |     87.5 |
      XML.js                     |    63.37 |    53.52 |    91.67 |    63.37 |
     src/Formats/XLS             |    84.07 |    70.37 |    72.22 |    84.07 |
      AbstractService.js         |    66.67 |    66.67 |       25 |    66.67 |
      LocationUtilityService.js  |    91.89 |    79.31 |      100 |    91.89 |
    (...)

Possibilité d'ouvrir ensuite les résultats dans un navigateur :

    (http|file)://{URL|PATH}/coverage/lcov-report/index.html

Explications :

    statements coverage :
    http://istqbexamcertification.com/what-is-statement-coverage-advantages-and-disadvantages/
    branchs coverage :
    http://istqbexamcertification.com/what-is-decision-coverage-its-advantages-and-disadvantages/
    (...)

#### Fonctionnels

**ouvrir une console :**

    npm run test:end-to-end:serve
    npm run test:end-to-end:serve -- --env.mock

Le navigateur s'ouvre sur la page des tests sur l'URL suivante :
http://localhost:9001/

## Carte des sources et des dépendances

cf. https://github.com/webpack-contrib/webpack-bundle-analyzer

**ouvrir une console :**

    sudo npm install -g webpack-bundle-analyzer
    webpack-bundle-analyzer map.json

Le navigateur s'ouvre  sur l'URL suivante :
http://localhost:8888/

## Analyse (The Official Analyse Tool)

Aller sur l'URL suivante :
http://webpack.github.io/analyse/

puis, utiliser le fichier *map.json*

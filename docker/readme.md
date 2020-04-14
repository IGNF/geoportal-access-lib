# Utilisation de docker pour access-lib 

Il est possible d'utiliser docker lors des développements et des tests de l'API. 

# Prérequis

Il est nécessaire d'avoir installé `docker` et que les ports 8081, 9012 et 9013 soient disponibles. 

Il sera nécessaire d'installer `docker-compose` pour utiliser les containers. 

# Buid de l'image access-lib

## Avec docker-compose 

Il suffit de lancer la commande dans le répertoire `./docker`: 
`docker-compose build`

# Lancer un container 

Une fois l'image construite, on pourra utiliser le container de plusieurs manières, principalement pour tester l'API et effectuer des développements.  

## Usage 1: Tester

Pour voir le résultats des tests unitaires et des tests de bout en bout, ainsi que pour utiliser les exemples ou encore voir la documentation, il suffira de lancer le container puis de se rendre sur les urls suivantes:
- http://localhost:8081/geoportal-access-lib/test/
- http://localhost:8081/geoportal-access-lib/end-to-end/
- http://localhost:8081/geoportal-access-lib/samples/
- http://localhost:8081/geoportal-access-lib/jsdoc/

### Avec docker-compose 

On prendra le temps de renseigner les variables du fichier `./docker/.env` en se basant sur l'exemple `./docker/.env.example`: 
- la variable `ACCESSLIB` permettra d'indiquer l'emplacement du projet `geoportal-access-lib`.

Il suffira de lancer la commande `docker-compose up` ou `docker-compose up -d` pour récupérer la main dans le terminal.

## Usage 2: Effectuer des développements 

La différence avec les tests, c'est l'indication des sources sur la machine hôte. Cela permet de développer sur la machine mais tout le code est exécuter dans docker. 

Ainsi, lorsqu'une modification est effectuée dans `./src`,`./test` ou `./sample-src`, il y a plusieurs conséquences, si elles sont nécessaires : 
- les tests sont mis à jour, 
- `GpServices.js` est regénéré dans le dossier `./dist`,
- le package `.tgz` est de nouveau généré à la racine du projet. 

### Avec docker-compose 

On prendra le temps de renseigner les variables du fichier `./docker/.env` en se basant sur l'exemple `./docker/.env.example`: 
- la variable `ACCESSLIB` permettra d'indiquer l'emplacement du projet `geoportal-access-lib`.

Puis, il suffira de lancer la commande `docker-compose up` ou `docker-compose up -d` pour récupérer la main dans le terminal.

## Problèmes possibles

- Lors du lancement d'un container, on pourra avoir l'erreur suivante:
`Error starting userland proxy: listen tcp 0.0.0.0:8081: bind: address already in use.`
Cela signifie que le port est déjà utilisé par une autre application. 

- Lors d'un changement du `package.json`, il sera nécessaire de commiter le changement et relancer un build de l'image sans cache: `docker-compose build --no-cache`. 

- De manière plus générale, si un problème du type 'absence de changement' est observé, il sera intéressant de tenter un rebuild de l'image sans cache en ayant d'abord supprimé le volume docker associé: `docker volume rm access-lib-data-volume`.

# Arrêter un container 

## Avec docker-compose 

La commande `docker-compose down` si le container était détaché. Et sinon `ctrl+c` dans le terminal actif sera suffisant. 
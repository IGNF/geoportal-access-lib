# Utilisation de docker pour access-lib 

Il est possible d'utiliser docker lors des développements et des tests de l'API. 

# Prérequis

Il est nécessaire d'avoir installé `docker` et que les ports 8081, 9012 et 9013 soient disponibles. 

Si on souhaite utiliser le container via `docker-compose`, il sera nécessaire d'installer ce composant. 

# Buid de l'image 

Il y a trois moyens de builder l'image. 

## Manuellement

Afin de construire l'image, on lancera la commande suivante dans le dossier `./docker`:
`docker build . -t access-lib`

## Avec un script 

Il est aussi possible d'utiliser le script `./docker/scripts/build.sh` en ce plaçant dans le répertoire `./docker`.

## Avec docker-compose 

Il suffit de lancer la commande dans le répertoire `./docker`: 
`docker-compose build`

# Lancer un container 

Une fois l'image construite, on pourra utiliser le container de plusieurs manières, principalement pour tester l'API et effectuer des développements.  

Encore une fois, il y a plusieurs méthodes pour lancer le container, pour chaque usage, les méthodes vont être présentées. 

## Usage 1: Tester

Pour voir le résultats des tests unitaires et des tests de bout en bout, ainsi que pour utiliser les exemples,

, quand ce sera fait, il suffira de se rendre sur les urls suivantes:
- http://localhost:8081/geoportal-access-lib/test/
- http://localhost:8081/geoportal-access-lib/end-to-end/
- http://localhost:8081/geoportal-access-lib/samples/

### Méthode 1: Manuellement 

 Il suffira de lancer la commande suivante:
`docker run --rm --name access-lib-docker -p 8081:80 -p 9012:9012 -p 9013:9013 access-lib`

### Méthode 2: Avec des scripts

Il suffira de lancer le script `./docker/scripts/run.sh`.

### Méthode 3: Avec docker-compose 

On prendra le temps de renseigner les variables du fichier `./docker/.env` en se basant sur l'exemple `./docker/.env.example`: 
- la variable `ACCESSLIB` permettra d'indiquer l'emplacement du projet `geoportal-access-lib`.

Il suffira de lancer la commande `docker-compose up` ou `docker-compose up -d` pour récupérer la main dans le terminal.

## Usage 2: Effectuer des développements 

La différence avec les tests, c'est l'indication des sources sur la machine hôte. Cela permet de développer sur la machine mais tout le code est exécuter dans docker. 

Ainsi, lorsqu'une modification est effectuée dans `./src`,`./test` ou `./sample-src`, il y a plusieurs conséquences, si elles sont nécessaires : 
- les tests sont mis à jour, 
- `GpServices.js` est regénéré dans le dossier `./dist`,
- le package `.tgz` est de nouveau généré à la racine du projet. 

### Méthode 1: Manuellement 

Il suffit de lancer la même commande que précédemment mais avec quelques options supplémentaires:

`docker run --rm --name access-lib-docker -p 8081:80 -p 9012:9012 -p 9013:9013 -v /home/user/geoportal-access-lib/src:/home/docker/geoportal-access-lib/src -v /home/user/geoportal-access-lib/test:/home/docker/geoportal-access-lib/test -v /home/user/geoportal-access-lib/samples-src:/home/docker/geoportal-access-lib/samples-src access-lib`

La commande suivante permet de rentrer dans le container:

`docker run -it --rm --name access-lib-docker -p 8081:80 -p 9012:9012 -p 9013:9013 -v /home/user/geoportal-access-lib/src:/home/docker/geoportal-access-lib/src -v /home/user/geoportal-access-lib/test:/home/docker/geoportal-access-lib/test -v /home/user/geoportal-access-lib/samples-src:/home/docker/geoportal-access-lib/samples-src access-lib /bin/bash`

### Méthode 2: Avec des scripts

Il suffit de lancer le script `./docker/scripts/run.sh` en ayant renseigné la variable d'environnement `ACCESSLIB` avec l'emplacement du projet `geoportal-access-lib`. 

### Méthode 3: Avec docker-compose 

On prendra le temps de renseigner les variables du fichier `./docker/.env` en se basant sur l'exemple `./docker/.env.example`: 
- la variable `ACCESSLIB` permettra d'indiquer l'emplacement du projet `geoportal-access-lib`.

Puis, il suffira de lancer la commande `docker-compose up` ou `docker-compose up -d` pour récupérer la main dans le terminal.

# Arrêter un container 

L'arrêt d'un container va dépendre de la méthode employée pour lancer le container. 

## Manuellement 

Il suffit de lancer la commande `docker stop access-lib-docker`.

## Avec un script 

Le script `./docker/stop.sh` permet d'arrêter le container. 

## Avec docker-compose 

La commande `docker-compose down` si le container était détaché. Et sinon `ctrl+c` dans le terminal actif sera suffisant. 
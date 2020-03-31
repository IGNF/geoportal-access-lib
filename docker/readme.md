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

Une fois l'image construite, on pourra utiliser le container de plusieurs manières. 

## Tester

Pour voir le résultats des tests unitaires et des tests de bout en bout, ainsi que pour utiliser les exemples, il suffira de lancer la commande suivante:
`docker run --rm --name access-lib-docker -p 8081:80 -p 9012:9012 -p 9013:9013 access-lib`
Puis de se rendre sur les urls suivantes:
- http://localhost:8081/geoportal-access-lib/test/
- http://localhost:8081/geoportal-access-lib/end-to-end/
- http://localhost:8081/geoportal-access-lib/samples/

## Effectuer des développements 

Il suffit de lancer la commande précédente avec quelques options supplémentaires:

`docker run --rm --name access-lib-docker -p 8081:80 -p 9012:9012 -p 9013:9013 -v /home/user/geoportal-access-lib/src:/home/docker/geoportal-access-lib/src -v /home/user/geoportal-access-lib/test:/home/docker/geoportal-access-lib/test -v /home/user/geoportal-access-lib/samples-src:/home/docker/geoportal-access-lib/samples-src access-lib`

Cela permet de remplacer le code du container par celui de la machine. Ainsi, lorsqu'une modification est effectuée dans `./src`,`./test` ou `./sample-src`, il y a plusieurs conséquences, si elles sont nécessaires : 
- les tests sont mis à jour, 
- `GpServices.js` est regénéré dans le dossier `./dist`,
- le package `.tgz` est de nouveau généré à la racine du projet. 

La commande suivante permet de rentrer dans le container:

`docker run -it --rm --name access-lib-docker -p 8081:80 -p 9012:9012 -p 9013:9013 -v /home/user/geoportal-access-lib/src:/home/docker/geoportal-access-lib/src -v /home/user/geoportal-access-lib/test:/home/docker/geoportal-access-lib/test -v /home/user/geoportal-access-lib/samples-src:/home/docker/geoportal-access-lib/samples-src access-lib /bin/bash`

# Arrêter un container 

L'arrêt d'un container va dépendre de la méthode employée pour lancer le container. 

## Manuellement 

Il suffit de lancer la commande `docker stop access-lib-docker`.

## Avec un script 

Le script `./docker/stop.sh` permet d'arrêter le container. 

## Avec docker-compose 

La commande `docker-compose down` si le container était détaché. Et sinon `ctrl+c` dans le terminal actif sera suffisant. 
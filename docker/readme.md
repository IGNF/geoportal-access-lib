# Utilisation de docker pour access-lib 

Il est possible d'utiliser docker lors des développements et des tests de l'API. 

# Prérequis

Il est nécessaire d'avoir installé `docker`. 

# Buid de l'image 

Afin de construire l'image, on lancera la commande suivante dans le dossier `./docker`:
`docker build . -t access-lib`

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


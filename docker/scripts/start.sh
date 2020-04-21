#!/bin/bash

# Creation des liens pour les samples
if [ ! -d /home/docker/html/geoportal-access-lib/dist ]
then
    mkdir /home/docker/html/geoportal-access-lib
    cp -rf /home/docker/geoportal-access-lib/dist /home/docker/html/geoportal-access-lib/
fi
if [ ! -d /home/docker/html/geoportal-access-lib/samples ]
then
    mkdir /home/docker/html/geoportal-access-lib
    cp -rf /home/docker/geoportal-access-lib/samples /home/docker/html/geoportal-access-lib/
fi
if [ ! -d /home/docker/html/geoportal-access-lib/jsdoc ]
then
    mkdir /home/docker/html/geoportal-access-lib
    cp -rf /home/docker/geoportal-access-lib/jsdoc /home/docker/html/geoportal-access-lib/
fi

# Observation des changements 
bash /home/docker/watch.sh &

# Lancement des serveurs pour les tests et observation des changements 
cd /home/docker/geoportal-access-lib/ && npm run test:serve:docker &
cd /home/docker/geoportal-access-lib/ && npm run test:end-to-end:serve:docker 
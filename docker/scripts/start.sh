#!/bin/bash

# On crée les dossiers utiles s'ils n'existent pas ou on supprime leur contenu
if [ ! -d /home/docker/html/geoportal-access-lib/dist ]
then
    mkdir -p /home/docker/html/geoportal-access-lib/dist
else 
    rm -rf /home/docker/html/geoportal-access-lib/dist/*
fi
if [ ! -d /home/docker/html/geoportal-access-lib/samples ]
then
    mkdir -p /home/docker/html/geoportal-access-lib/samples
else 
    rm -rf /home/docker/html/geoportal-access-lib/samples/*
fi
if [ ! -d /home/docker/html/geoportal-access-lib/jsdoc ]
then
    mkdir -p /home/docker/html/geoportal-access-lib/jsdoc
else 
    rm -rf /home/docker/html/geoportal-access-lib/jsdoc/*
fi
if [ ! -d /home/docker/html/geoportal-access-lib/package ]
then
    mkdir -p /home/docker/html/geoportal-access-lib/package
else 
    rm -rf /home/docker/html/geoportal-access-lib/package/*
fi

# On build au cas où le code ait changé
pushd /home/docker/geoportal-access-lib/
npm run build
cp -rf ./dist/* /home/docker/html/geoportal-access-lib/dist/
cp -rf ./samples/* /home/docker/html/geoportal-access-lib/samples/
cp -rf ./jsdoc/* /home/docker/html/geoportal-access-lib/jsdoc/
npm pack
cp geoportal-access-lib*.tgz /home/docker/html/geoportal-access-lib/package/geoportal-access-lib-local.tgz
popd

# Observation des changements 
bash /home/docker/watch.sh &

# Lancement des serveurs pour les tests et observation des changements 
cd /home/docker/geoportal-access-lib/ && npm run test:serve:docker &
cd /home/docker/geoportal-access-lib/ && npm run test:end-to-end:serve:docker 
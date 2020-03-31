#!/bin/bash

if [ $ACCESSLIB ]
then
    volumes="-v "$ACCESSLIB"/src:/home/docker/geoportal-access-lib/src -v "$ACCESSLIB"/test:/home/docker/geoportal-access-lib/test -v "$ACCESSLIB"/samples-src:/home/docker/geoportal-access-lib/samples-src"
else
    volumes=""
fi

docker run -d --rm --name access-lib-docker -p 8081:80 -p 9012:9012 -p 9013:9013 $volumes access-lib
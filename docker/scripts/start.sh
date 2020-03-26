#!/bin/bash

service nginx start
bash /home/docker/watch.sh &
cd /home/docker/geoportal-access-lib/ && npm run test:serve:docker &
cd /home/docker/geoportal-access-lib/ && npm run test:serve:end-to-end:docker &
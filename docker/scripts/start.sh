#!/bin/bash

bash /home/docker/watch.sh &
cd /home/docker/geoportal-access-lib/ && npm run test:serve:docker &
cd /home/docker/geoportal-access-lib/ && npm run test:end-to-end:serve:docker 
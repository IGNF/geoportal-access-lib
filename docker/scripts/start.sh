#!/bin/bash

service nginx start
sleep 1
npm run test:serve:docker 
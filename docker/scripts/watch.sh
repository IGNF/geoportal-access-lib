#!/bin/bash 

inotifywait -m -e modify -e create -e delete --timefmt '%Y-%m-%d %H:%M:%S' --format '%T %w %e' home/docker/geoportal-access-lib/src/* |
while read date time file event
do
  pushd /home/docker/geoportal-access-lib/
  npm run build
  popd
done
# Buid de l'image 

`docker build . -t access-lib`
`docker build . -t access-lib --no-cache`

# Lancer un container 

`docker run -it --rm --name access-lib-docker -p 8081:80 -p 9012:9012 -v /home/user/geoportal-access-lib/src:/home/docker/geoportal-access-lib/src -v /home/user/geoportal-access-lib/test:/home/docker/geoportal-access-lib/test -v /home/user/geoportal-access-lib/samples-src:/home/docker/geoportal-access-lib/samples-src access-lib /bin/bash`
`docker run --rm --name access-lib-docker -p 8081:80 -p 9012:9012 -v /home/user/geoportal-access-lib/src:/home/docker/geoportal-access-lib/src -v /home/user/geoportal-access-lib/test:/home/docker/geoportal-access-lib/test -v /home/user/geoportal-access-lib/samples-src:/home/docker/geoportal-access-lib/samples-src access-lib`
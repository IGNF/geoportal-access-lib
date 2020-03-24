# Buid de l'image 

`docker build . -t access-lib`
`docker build . -t access-lib --no-cache`

# Lancer un container 

`docker run --rm -it --name access-lib-docker -p 8081:80 -p 9012:9012 access-lib /bin/bash`
`docker run --rm --name access-lib-docker -p 8081:80 -p 9012:9012 access-lib`
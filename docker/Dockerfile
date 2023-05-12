FROM node:12.16.1-slim

# MAJ
RUN apt update && apt -y upgrade 

# Paquets utiles 
RUN apt install -y git inotify-tools 

# Installation de access-lib 
WORKDIR /home/docker/
RUN git clone https://github.com/IGNF/geoportal-access-lib.git
WORKDIR /home/docker/geoportal-access-lib
RUN git checkout develop && npm install

# Copie des scripts 
COPY ./docker/scripts/* /home/docker/

# Volume pour partager les samples 
VOLUME ["/home/docker/html/geoportal-access-lib"]

WORKDIR /home/docker/geoportal-access-lib

CMD ["bash", "/home/docker/start.sh"]

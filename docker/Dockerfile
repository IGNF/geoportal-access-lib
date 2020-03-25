FROM debian:buster-20200224 

# MAJ
RUN apt update && apt -y upgrade 

# Paquets utiles 
RUN apt install -y vim git curl nginx npm inotify-tools

# Installation de access-lib 
WORKDIR /home/docker/
RUN git clone https://github.com/IGNF/geoportal-access-lib.git
WORKDIR /home/docker/geoportal-access-lib
RUN git checkout feature-docker && npm install && npm run build 

# Configuration de nginx 
COPY ./conf/default /etc/nginx/sites-enabled/default
RUN mkdir /var/www/html/geoportal-access-lib/ && ln -s /home/docker/geoportal-access-lib/dist/ /var/www/html/geoportal-access-lib/dist && ln -s /home/docker/geoportal-access-lib/samples/ /var/www/html/geoportal-access-lib/samples

# Copie des scripts 
COPY ./scripts/* /home/docker/

CMD bash /home/docker/start.sh

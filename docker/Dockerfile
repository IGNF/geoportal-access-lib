FROM debian:buster-20200224 

# MAJ
RUN apt update && apt -y upgrade 

# Paquets utiles 
RUN apt install -y vim git curl nginx npm

# Installation de access-lib 
WORKDIR /home/docker/
RUN git clone https://github.com/IGNF/geoportal-access-lib.git
WORKDIR /home/docker/geoportal-access-lib
RUN git checkout docker && npm install && npm run build 

# Configuration de nginx 
COPY ./conf/default /etc/nginx/sites-enabled/default

# Copie des scripts 
COPY ./scripts/start.sh /home/docker/

CMD bash /home/docker/start.sh

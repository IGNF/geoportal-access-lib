FROM debian:buster-20200224 

# MAJ
RUN apt update && apt -y upgrade 

# Paquets utiles 
RUN apt install -y vim git curl nginx inotify-tools 

# Installation de NodeJS et NPM depuis les sources 
WORKDIR /home/docker/nodejs
RUN apt install -y python g++ make
RUN curl "https://nodejs.org/dist/v12.16.1/node-v12.16.1.tar.gz" -o node-v12.16.1.tar.gz
RUN tar -xzf /home/docker/nodejs/node-v12.16.1.tar.gz
RUN cd node-v12.16.1  && ./configure && make -j4 && make install

# Installation de access-lib 
WORKDIR /home/docker/
RUN git clone https://github.com/IGNF/geoportal-access-lib.git
WORKDIR /home/docker/geoportal-access-lib
RUN git checkout feature-docker && npm install && npm run build 

# Configuration de nginx 
COPY ./conf/default /etc/nginx/sites-enabled/default
RUN mkdir /var/www/html/geoportal-access-lib/ && ln -s /home/docker/geoportal-access-lib/dist/ /var/www/html/geoportal-access-lib/dist && ln -s /home/docker/geoportal-access-lib/samples/ /var/www/html/geoportal-access-lib/samples

# Copie des scripts 
COPY ./scripts/start.sh /home/docker/
COPY ./scripts/watch.sh /home/docker/

CMD bash /home/docker/start.sh

#!/bin/bash

# Script de construction des bundles ainsi que de deploiement
# sur le serveur de sources
#  - TODO choix des bundles à construire
#  - TODO mise en place d'un "Build Number" unique et commune à tous les bundles
#         ex. fichier build.number avec un numéro qui est incrementé aprés chaque execution
#  - TODO gulp publish --build-number
#  - TODO gérer la publication des bundles sur le depot de sources (mercurial ou git)
#         hg commit -m "building bundles ${build.number}..."
#         hg outgoing | sed -n -e 3p  | cut -d: -f3 (ex. 944ed81fd2b6)
#         hg push

echo "BEGIN"

function debug() {
  echo "####### DEBUG !"
  gulp --debug
  gulp publish --debug
}

function production() {
  echo "####### production !"
  gulp --production
  gulp publish --production
}

function sources() {
  echo "####### sources !"
  gulp
  gulp publish
}

while getopts "adps" opts
do
   case $opts in
     d)
        echo "#################################"
        echo "######## debug bundle ! ########"
        debug
        ;;
     p)
        echo "#################################"
        echo "##### production bundle ! #######"
        production
        ;;
     s)
        echo "#################################"
        echo "###### sources bundle ! ######"
        sources
        ;;
     a)
        echo "#################################"
        echo "########## ALL bundle ! #########"
        sources
        debug
        production
        ;;
     \?)
        echo "$OPTARG : option invalide : a(all), s(sources), d(debug), ou p(production) !"
        exit -1
        ;;
   esac
done

echo "END"
exit 0

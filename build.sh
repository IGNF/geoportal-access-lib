#!/bin/bash

# Script de construction des bundles

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

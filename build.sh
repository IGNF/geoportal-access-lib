#!/bin/bash

# Script de construction des bundles

##########
# doCmd()

doCmd () {
    cmd2issue=$1
    eval ${cmd2issue}
    retour=$?
    if [ $retour -ne 0 ] ; then
        printTo "Erreur d'execution (code:${retour}) !..."
        exit 100
    fi
}

##########
# printTo()

printTo () {
    text=$1
    d=`date`
    echo "[${d}] ${text}"
}

printTo "BEGIN"

function debug() {
  printTo "####### DEBUG !"
  doCmd "gulp build --debug"
  doCmd "gulp publish --debug"
}

function production() {
  printTo "####### production !"
  doCmd "gulp build --production"
  doCmd "gulp publish --production"
}

function sources() {
  printTo "####### sources !"
  doCmd "gulp build"
  doCmd "gulp publish"
}

doCmd "gulp clean"

while getopts "adps" opts
do
   case $opts in
     d)
        printTo "#################################"
        printTo "######## debug bundle ! ########"
        debug
        ;;
     p)
        printTo "#################################"
        printTo "##### production bundle ! #######"
        production
        ;;
     s)
        printTo "#################################"
        printTo "###### sources bundle ! ######"
        sources
        ;;
     a)
        printTo "#################################"
        printTo "########## ALL bundle ! #########"
        sources
        debug
        production
        ;;
     \?)
        printTo "$OPTARG : option invalide : a(all), s(sources), d(debug), ou p(production) !"
        exit -1
        ;;
   esac
done

printTo "END"
exit 0

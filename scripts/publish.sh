#!/bin/bash

# répertoire d'execution
_PWD=`pwd`

# version du shell
_VERSION=0.0.1

##########
# printTo()

printTo () {
    text=$1
    d=`date`
    echo "[${d}] ${text}"
}

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

exit 0

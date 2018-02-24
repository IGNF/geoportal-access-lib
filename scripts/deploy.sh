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

printTo "TODO (deploy binaries on branch 'gh-pages')"

# Contribuer

Si vous souhaitez contribuer au code de la bibliothèque d'accès aux ressources du Géoportail, voici quelques conseils pratiques et règles à suivre.

## Ouverture d'un ticket (issue)

Vous pouvez ouvrir un ticket dans les situations suivantes :

* Signaler une erreur que vous ne pouvez pas résoudre vous-même
* Discuter d'un sujet ou d'une idée relative au projet
* Proposer une nouvelle fonctionnalité ou l'évolution d'une fonctionnalité

Votre ticket est ensuite pris en compte par les membres de l'équipe ou de la communauté. Une action peut alors vous être demandée, par exemple l'ouverture d'une **pull request** afin de contribuer.

## Ouvrir une pull request (PR)

Une pull request vous permet de soumettre une proposition d'évolution du code source à l'équipe en charge du projet. Voici comment soumettre une **pull request** !

### On «fork» le projet

* Créez un `fork` du projet sur GitHub.
* Clonez-le en local. Ce `dépôt distant` sur GitHub s'appelle `origin`.
* Ajoutez le dépôt d'origine comme `dépôt distant` nommé `upstream` (cf. https://help.github.com/articles/configuring-a-remote-for-a-fork/).
* Si vous avez créé votre `fork` il y a quelque temps, assurez-vous de récupérer les modifications dans votre dépôt local (cf. https://help.github.com/articles/syncing-a-fork/).
* Récupérez le plus souvent possible les modifications de `upstream` afin d'être à jour et de réduire les conflits de fusion lorsque vous soumettez votre PR.

### On code...

* Créez une `nouvelle branche` pour travailler. Nommez-la par exemple avec le nom de la fonctionnalité à implémenter (ex. `feature-tests-myfunction`) ou celui de l'issue qu'elle vise à résoudre (ex. `feature-issue-xx`).

* Dans le répertoire local du projet, installez les dépendances du projet :

``` bash
npm install
```

cf. *COMPILE.md* pour plus d'infos.

* Écrivez, testez et corrigez votre `code` sur votre copie locale de votre fork.

Les commandes suivantes génèrent les différents bundles dans `dist/` :

``` bash
npm run build
npm run build:prod
npm run build:dev
```

Des pages HTML de test d'utilisation sont dans le répertoire *samples/*. Elles utilisent les binaires présents dans le répertoire *dist/*.

La commande :

``` bash
npm run sample:serve
```

Lance un navigateur avec les pages d'exemples servies sur l'adresse http://localhost:9001.

* Suivez les règles de codage du projet. Elles sont définies par ESLint dans le fichier `.eslintrc.json`. Vous pouvez vérifier le bon respect de ces règles en lançant la tâche :

``` bash
npm run eslint
```

* Vérifiez, ajoutez ou adaptez les tests si nécessaire.

    * Les tests unitaires sont dans le répertoire *test/spec/*
    * Les tests fonctionnels sont dans le répertoire *test/spec-functional/*
    * Les pages d'exemples sont dans le répertoire *samples/*

* Ajoutez ou modifiez la `documentation` si nécessaire. Si votre PR apporte une modification d'interface à la bibliothèque, mettez à jour la JSDoc en conséquence et vérifiez qu'elle est bien prise en compte.

    * La jsDoc publique des fonctions de la bibliothèque est rassemblée dans le fichier *src/Services/Services.js*, 
    * La jsDoc des classes publiques de réponse dans : *src/Services/<Service>/Response/model/*.js

La documentation générée est servie depuis le répertoire `jsdoc/`.

``` bash
npm run doc:serve
```

Vous permet de consulter la documentation du projet dans votre navigateur.

* Ajoutez-vous dans le fichier [CONTRIBUTORS.md](CONTRIBUTORS.md) si vous n'y êtes pas déjà.

* Squashez vos commits en un seul avec le `rebase interactif` (cf. https://help.github.com/articles/interactive-rebase) ou via d'autres méthodes (cf. https://gist.github.com/patik/b8a9dc5cd356f9f6f980, par exemple).

* Poussez cette branche sur votre dépôt, sur le dépôt marqué `origin`.

### On soumet une PR...

* Depuis votre `fork`, ouvrez une demande de `pull request` sur cette branche (cf. https://help.github.com/articles/creating-a-pull-request/) en la ciblant sur la branche `develop` du dépôt d'origine.
* Référencez tous les problèmes ainsi que la documentation dans votre PR.
* Utilisez dans vos `commit` les fonctionnalités de GitHub (ex. `Fix #37.`).
* Si le responsable demande des modifications supplémentaires, il suffit de les pousser sur votre branche locale ; la `pull request` se met à jour automatiquement.
* Une fois que la `pull request` est approuvée, les responsables du projet effectueront le merge (cf. https://help.github.com/articles/merging-a-pull-request/).

## Liens utiles

https://help.github.com/categories/collaborating-with-issues-and-pull-requests/

avec les liens les plus utiles :

  https://help.github.com/articles/configuring-a-remote-for-a-fork/
  https://help.github.com/articles/syncing-a-fork/
  https://help.github.com/articles/about-pull-requests/
  https://help.github.com/articles/creating-a-pull-request/
  https://help.github.com/articles/checking-out-pull-requests-locally/
  https://help.github.com/articles/merging-a-pull-request/
  https://help.github.com/articles/about-pull-request-merges/
  https://help.github.com/articles/interactive-rebase

Un exemple de contribution sur un projet (en français) :
https://git-scm.com/book/fr/v2/GitHub-Contribution-%C3%A0-un-projet


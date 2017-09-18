# Les tests

## Execution

cf. test/index-functional-(xhr|jsonp).html
Execution uniquement en localhost !

### Principe

L'API
- construit la requête à partir des options,
- appel le service (XHR request),
- recupère la reponse du service (XHR response)
- analyse la reponse puis la renvoie sous forme d'un JSON

L'idée est de capturer ('mocker') la requête et la reponse du service (XHR).
On laisse l'API construire la requête mais l'action 'request' du service est simulée :
    on compare donc la requête créée par l'API à celle simulée, elle doivent être identique !

Pour l'API, ce mécanisme est completement transparent, elle recupère alors une reponse simulée qu'elle va analyser puis la renvoyer
sous forme d'un JSON :
    on teste que l'analyse et le retour de l'API est bien conforme à ce qu'on attend !

## Tests sur le protocole

### Exemple

```
-- Tests fonctionnels du Service {'nom du service'} : OK --
    Service.{'fonction principale'} : SUCCESS
        Tests sur les options du protocole du service
            * Appel du service avec les options par defaut
            * Appel du service en mode '{XHR|JSONP}'
                [avec la méthode '{GET|POST}']
                [avec l'API '{REST|OLS|WPS}']
                [pour un format de sortie en '{xml|json}']
```

### Liste des options du protocole par service

-------------------------------------------------------------------------------------------------------------
|  API 	| MODE 	| FORMAT 	| ALTI 	| GEOCODE 	| REVERSE 	| ROUTE 	| ISO 	| AUTOCONF 	| AUTOCOMPLETE 	|
|:----:	|:----:	|:------:	|:----:	|:-------:	|:-------:	|:-----:	|:---:	|:--------:	|:------------:	|
|      	|      	|  JSON  	|   X  	|    -    	|    -    	|   X   	|  X  	|     -    	|       X      	|
|      	|  GET 	|        	|      	|         	|         	|       	|     	|          	|              	|
|      	|      	|   XML  	|   X  	|    X    	|    X    	|   X   	|  X  	|     X    	|       X      	|
| REST 	|      	|        	|      	|         	|         	|       	|     	|          	|              	|
|      	|      	|  JSON  	|   -  	|    -    	|    -    	|   -   	|  X  	|     -    	|       -      	|
|      	| POST 	|        	|      	|         	|         	|       	|     	|          	|              	|
|      	|      	|   XML  	|   -  	|    -    	|    -    	|   -   	|  X  	|     -    	|       -      	|

-----------------------------------------------------------------------------------------------------------------
| API   | MODE 	| FORMAT 	| ALTI 	| GEOCODE 	| REVERSE 	| ROUTE 	| ISO 	| AUTOCONF 	| AUTOCOMPLETE 	|
|:----: |:----:	|:------:	|:----:	|:-------:	|:-------:	|:-----:	|:---:	|:--------:	|:------------:	|
|       |      	|  JSON  	|   X  	|    -    	|    -    	|   -   	|  -  	|     -    	|       -      	|
|       |  GET 	|        	|      	|         	|         	|       	|     	|          	|              	|
| OLS   |      	|   XML  	|   X  	|    X    	|    X    	|   / !? 	|  -  	|     X    	|       -      	|
|     	|      	|        	|      	|         	|         	|       	|     	|          	|              	|
| WPS   |      	|  JSON  	|   X  	|    -    	|    -    	|   -   	|  -  	|     -    	|       -      	|
|       | POST 	|        	|      	|         	|         	|       	|     	|          	|              	|
|       |      	|   XML  	|   X  	|    405? 	|    405?  	|   / !? 	|  -  	|     -    	|       -      	|


**FIXME**
> 405 Method Not Allowed sur les services OLS !?


### AVANCEMENTS

--------------------------------------------------------------------------------------------
|       	| ALTI 	| GEOCODE 	| REVERSE 	| ROUTE 	| ISO 	| AUTOCONF 	| AUTOCOMPLETE 	|
|:------:	|:----:	|:-------:	|:-------:	|:-----:	|:---:	|:--------:	|:------------:	|
|       	|   X  	|    X    	|    X    	|   X   	|  X  	|     X    	|       X      	|

## Tests sur les options spécifiques du service

### Exemple

```
-- Tests fonctionnels du Service {'nom du service'} : OK --
    Service.{'fonction principale'} : SUCCESS
        Tests sur les options spécifiques du service
            * options par defaut
            * option {avec|sans} le parametre '{param}'
                * valeur du parametre : '{valeur}'
                * valeur du parametre : '{valeur}'
                * valeur du parametre : '{valeur}'
```

### AVANCEMENTS

TODO
--------------------------------------------------------------------------------------------
|       	| ALTI 	| GEOCODE 	| REVERSE 	| ROUTE 	| ISO 	| AUTOCONF 	| AUTOCOMPLETE 	|
|:------:	|:----:	|:-------:	|:-------:	|:-----:	|:---:	|:--------:	|:------------:	|
|       	|   X  	|    /    	|    /    	|   -   	|  -  	|     X    	|       X      	|
cf. FIXME et avancements dans le code des tests...


## Comment ajouter des ressources statiques (ex. fichiers xml ou json)

cf. test/spec-functional/test.autoconf.js

### Exemple

Chargement de plusieurs fichiers XML :
```
define(['chai', 'sinon',
    'text!../../test/spec-functional/autoconf-minify.xml',
    'text!../../test/spec-functional/autoconf-beautify.xml'],
function (chai, sinon, autoconfminify, autoconfbeautify) {});
```

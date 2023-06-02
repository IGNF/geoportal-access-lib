# Optimisez votre configuration d'accès à la plateforme géoportail

Pour utiliser les ressources du Géoportail, vous devez utiliser une ou plusieurs clefs d'accès gratuites qui répondent à vos besoins et qui peuvent être obtenues sur [le site geoservices.ign.fr](https://geoservices.ign.fr/services-web).

Vous pouvez accélerer votre application géoportail en récupérant la configuration associée à vos clefs d'accès géoportail.

Voici comment faire.


### 1. Récupérer le fichier de configuration

Sélectionnez le nombre de clefs d'accès que vous souhaitez utiliser dans votre application géoportail.

Pour chaque clé, remplissez le champ correspondant avec son nom.

Cliquez sur le bouton "Récupérer le fichier de configuration".

<form action="" method="POST">
    <div>
      <label for="keyNumber">Nombre de clefs : </label>
      <input type="number" min="1" max="10" id="keyNumber" value="1">
    </div>
    <div id="keyInputSection">
      <p id="keyInputPara1">
          <label for="keyInput1" class="key-label">Clef 1 : </label>
          <input type="text" class="form-control input-sm key-value" placeholder="Clef d'accès Géoportail 1" size="30" name="apiKey1" id="apiKey1">
      </p>
    </div>
    <div>
      <input type="submit" id="key-button" value="Récupérer le fichier de configuration" class="key-button">
    </div>
</form>
<script type="text/javascript" src="./../dist/GpServices.js"></script>
<script type="text/javascript">
    document.getElementById("keyNumber").addEventListener('change', createInput);
    document.getElementById("keyNumber").value = 1; //reset the key number input
    function removeInputAndLabel() {
        var keyLabels = document.getElementsByClassName("key-label");
        while (keyLabels.length > 0) {
            keyLabels[0].parentNode.removeChild(keyLabels[0]);
        }
        // remove the keys input
        var keyInputs = document.getElementsByClassName("key-value");
        while (keyInputs.length > 0) {
            keyInputs[0].parentNode.removeChild(keyInputs[0]);
        }
    };
    function createInput(e) {
        removeInputAndLabel();
        var numberOfInput = e.target.value;
        for (var i = 1; i <= numberOfInput; i++) {
            // create key input div
            var keyPara = document.createElement("p");
            keyPara.id = "keyInputPara" + i;
            // create label for key input
            var keyLabel = document.createElement("div");
            keyLabel.className = "key-label";
            keyLabel.innerHTML = "Clef " + i + " : ";
            // create key input
            var keyInput = document.createElement("input");
            keyInput.type = "text";
            keyInput.className = "form-control input-sm key-value"; // set the CSS class
            keyInput.placeholder = "Clef d'accès Géoportail " + i;
            keyInput.size = "30";
            keyInput.id = "apiKey" + i;
            keyInput.name = "apiKey" + i;
            // add the form elements to the DOM
            keyPara.appendChild(keyLabel);
            keyPara.appendChild(keyInput);
            document.getElementById("keyInputSection").appendChild(keyPara);
        }
    };
</script>


Une fois chargé, sauvegardez le fichier "customConfig.json" sur votre plateforme.


### 2. Configurez les fonctions géoportail pour utiliser ce fichier

Que ce soit avec [la bibliothèque d'accès aux services Géoportail](https://github.com/ignf/geoportal-access-lib), [les extensions Géoportail](https://github.com/IGNF/geoportal-extensions) ou [le SDK Géoportail](http://ignf.github.io/evolution-apigeoportail/sdk/presentation.html), vous pouvez utiliser ce fichier pour configurer votre application.


#### Avec la bibliothèque d'accès aux services Géoportail

Utilisez le chemin vers votre fichier d'autoconfiguration comme une valeur du paramètre **customConfigFile** de la fonction [Gp.Services.getConfig()](http://ignf.github.io/geoportal-access-lib/latest/jsdoc/module-Services.html#~getConfig) (à la place du paramètre **apiKey**) :

``` javascript
the Gp.Services.getConfig({
    ...
    customConfigFile : "path/to/customConfig.json",
    callbackSuffix : "",
    ...
}) ;
```


#### Avec les extensions Géoportail

Utilisez le chemin vers votre fichier de configuration dans l'attribut **data-url** du tag script qui permet de charger les extensions Géoportail (à la place de l'attribut **dataKey**) :

``` html
<script type="text/javascript" src="path/to/GpPluginLeaflet.js" data-url="path/to/customConfig.json"></script>
<!-- or -->
<script type="text/javascript" src="path/to/GpPluginOpenLayers.js" data-url="path/to/customConfig.json"></script>
```


#### Avec le SDK Géoportail

Utilisez le chemin vers votre fichier de configuration comme une valeur du paramètre **configUrl** de l'objet Gp.MapOptions utilisé dans la fonction Gp.Map.load() (à la place du paramètre **apiKey**) :

``` javascript
Gp.Map.load(
    "mapDiv",    
    {
        ...
        configUrl : "path/to/customConfig.json",
        ...
    }
) ;
```

# Optimize your geoportal access configuration

To use Geoportal resources, you need one or several access keys which can be obtained on the [geoservices.ign.fr web site](https://geoservices.ign.fr/services-web).

You can speed up your geoportal application by caching your the configuration associated to your geoportal access key(s) on your server.

Here is how you can do.


### 1. Get the configuration file

Fill the input text below with your geoportal access key.

Click the "Get Config File" button.

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


When prompted, save the file "customConfig.json" on your platform.


### 2. Configure geoportal functions to use that file

Be it [Geoportal access lib](https://github.com/ignf/geoportal-access-lib), [Geoportal extensions](https://github.com/IGNF/geoportal-extensions) or [Geoportal SDK](http://ignf.github.io/evolution-apigeoportail/sdk/presentation.html), you can use that file to configure your application :


#### With Geoportal access lib

Use it as a value of the **customConfigFile** param of the [Gp.Services.getConfig()](http://ignf.github.io/geoportal-access-lib/latest/jsdoc/module-Services.html#~getConfig) function (instead of the **apiKey** param) :

``` javascript
the Gp.Services.getConfig({
    ...
    customConfigFile : "path/to/customConfig.json",
    callbackSuffix : "",
    ...
}) ;
```


#### With Geoportal extensions

Use it with the **data-url** attribute of the script tag used to load the Geoportal extension (instead of the **data-key** attribute) :

``` html
<script type="text/javascript" src="path/to/GpPluginLeaflet.js" data-url="path/to/customConfig.json"></script>
<!-- or -->
<script type="text/javascript" src="path/to/GpPluginOpenLayers.js" data-url="path/to/customConfig.json"></script>
```


#### With Geoportal SDK

Use it as a value of the **customConfigFile** param of the Gp.MapOptions object used in the Gp.Map.load() function (instead of the **apiKey** param) :

``` javascript
Gp.Map.load(
    "mapDiv",    
    {
        ...
        customConfigFile : "path/to/customConfig.json",
        ...
    }
) ;
```

# Optimize your geoportal access configuration

To use Geoportal resources, you need one or several access keys which can be obtained on the [geoservices.ign.fr web site](https://geoservices.ign.fr/services-web).

You can speed up your geoportal application by caching your the configuration associated to your geoportal access key(s) on your server.

Here is how you can do.


### 1. Get the configuration file

Fill the input text below with your geoportal access key ; if you want Geoportal Services to be accessed by default in https, check the "https access" check box.

Click the "Get Config File" button.

<form>
    <section>
        <label for="keyNumber">Number of keys : </label>
        <input type="number" min="1" max="10" id="keyNumber" value="1">
    </section>
    <section id="keyInputSection">
        <p id="keyInputPara1">
            <label for="keyInput1" class="key-label">Key 1 : </label>
            <input type="text" class="form-control input-sm key-value" placeholder="Geoportail access key 1"
                size="30" id="apiKey1">
        </p>
    </section>
    <section>
        <input type="checkbox" id="https-cb">https access</input>
        <input type="button" onclick="doIt()" id="key-button" value="Get Config File" class="key-button"></input>
        </p>
    </section>
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
            keyLabel.innerHTML = "Key " + i + " : ";
            // create key input 
            var keyInput = document.createElement("input");
            keyInput.type = "text";
            keyInput.className = "form-control input-sm key-value"; // set the CSS class
            keyInput.placeholder = "Geoportail access key " + i;
            keyInput.size = "30";
            keyInput.id = "apiKey" + i;
            // add the form elements to the DOM
            keyPara.appendChild(keyLabel);
            keyPara.appendChild(keyInput);
            document.getElementById("keyInputSection").appendChild(keyPara);
        }
    };
    function concatKeys() {
        var keyInputs = document.getElementsByClassName("key-value");
        var concatenedKeys = keyInputs[0].value;
        for (var i = 1; i < keyInputs.length; i++) {
            concatenedKeys = concatenedKeys + "," + keyInputs[i].value;
        }
        return concatenedKeys;
    }
    function doIt() {
        var firstkelem = document.getElementById("apiKey1");
        var concatenedKeys = concatKeys();
        if (!firstkelem.value || firstkelem.value.trim().length == 0) {
            return;
        }
        // disable submit button
        var belem = document.getElementById("key-button");
        belem.setAttribute("disabled", "true");
        // makes pointer wait
        belem.style.cursor = "wait";
        var article = document.getElementsByClassName("content")[0];
        article.style.cursor = "wait";
        // https access
        var httpsCB = document.getElementById("https-cb");
        var protocol = "http";
        var resultFileName = "autoconf.json";
        if (httpsCB.checked) {
            protocol += "s";
            resultFileName = "autoconf-https.json";
        }
        var getconfigUrl = protocol + "://wxs.ign.fr/" + firstkelem.value.trim() + "/autoconf/?keys=" +concatenedKeys.trim();
        Gp.Services.getConfig({
            serverUrl: getconfigUrl,
            onBeforeParse: function (result) {
                var jsonpResult = result;
                if (result.indexOf("callback") < 0) {
                    // result en XML => needs jsonp
                    jsonpResult = 'callback({"http":{"status":200,"error":null},"xml":"' + result.replace(/"/g,'\\"') + '"});';
                }
                var a = document.createElement("a");
                a.setAttribute("href", "data:text/javascript;charset=utf-8," + encodeURIComponent(jsonpResult));
                a.setAttribute("download", resultFileName);
                document.body.appendChild(a);
                a.click();
                // re-enable submit button
                belem.removeAttribute("disabled");
                // re-change cursor
                article.style.cursor = "auto";
                belem.style.cursor = "auto";
            }
        });
    }
</script>



When prompted, save the file "autoconf.json" (or "autoconf-https.json") on your platform.


### 2. Configure geoportal functions to use that file

Be it [Geoportal access lib](https://github.com/ignf/geoportal-access-lib), [Geoportal extensions](https://github.com/IGNF/geoportal-extensions) or [Geoportal SDK](http://ignf.github.io/evolution-apigeoportail/sdk/presentation.html), you can use that file to configure your application :


#### With Geoportal access lib

Use it as a value of the **serverUrl** param of the [Gp.Services.getConfig()](http://ignf.github.io/geoportal-access-lib/latest/jsdoc/module-Services.html#~getConfig) function (instead of the **apiKey** param) :

``` javascript
the Gp.Services.getConfig({
    ...
    serverUrl : "path/to/autoconf.json",
    callbackSuffix : "",
    ...
}) ;
```


#### With Geoportal extensions

Use it with the **data-url** attribute of the script tag used to load the Geoportal extension (instead of the **data-key** attribute) :

``` html
<script type="text/javascript" src="path/to/GpPluginLeaflet.js" data-url="path/to/autoconf.json"></script>
<!-- or -->
<script type="text/javascript" src="path/to/GpPluginOpenLayers.js" data-url="path/to/autoconf.json"></script>
```


#### With Geoportal SDK

Use it as a value of the **configUrl** param of the Gp.MapOptions object used in the Gp.Map.load() function (instead of the **apiKey** param) :

``` javascript
Gp.Map.load(
    "mapDiv",    
    {
        ...
        configUrl : "path/to/autoconf.json",
        ...
    }
) ;
```

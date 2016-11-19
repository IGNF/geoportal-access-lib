# Optimize your geoportal access configuration 

To use Geoportal resources, you need an access key which can be obtained on the [professionels.ign.fr web site](http://professionnels.ign.fr/ign/contrats).

You can speed up your geoportal application by caching your the configuration associated to your geoportal access key on your server.

Here is how you can do.


### 1. Get the configuration file

Fill the input text below with your geoportal access key and click the "Get Config File" button. 

<p><input type="text" class="form-control input-sm" placeholder="Geoportail access key" size="30" id="apiKey" class="key-value"></input><input type="button" onclick="doIt()" id="key-button" value="Get Config File" class="key-button" ></input></p>
<script type="text/javascript" src="https://depot.ign.fr/geoportail/bibacces/develop/js/GpServices.js"></script>
<script type="text/javascript">

function doIt() {
    // disable submit button
    var belem = document.getElementById("key-button") ;
    belem.setAttribute("disabled", "true") ;
    // makes pointer wait
    belem.style.cursor = "wait" ;
    var article = document.getElementsByClassName("content")[0];
    article.style.cursor = "wait" ;
    var kelem = document.getElementById("apiKey") ;
    Gp.Services.getConfig({
        apiKey : kelem.value,
        rawResponse : true,
        onSuccess : function(result) {
            var jsonpResult = result ;
            if (result.indexOf("callback") < 0) {
                // result en XML => needs jsonp
                jsonpResult = 'callback({"http":{"status":200,"error":null},"xml":"' + result.replace(/"/g,'\\"') + '"});' ;
            }
            var a = document.createElement("a") ;
            a.setAttribute("href","data:text/javascript;charset=utf-8," + encodeURIComponent(jsonpResult)) ;
            a.setAttribute("download", "autoconf.json") ;
            document.body.appendChild(a) ;
            a.click() ;
            // re-enable submit button
            belem.removeAttribute("disabled") ;
            // re-change cursor
            article.style.cursor = "auto" ;
            belem.style.cursor = "auto" ;
        }
    }) ;
}
</script>


When prompted, save the file "autoconf.json" on your platform.


### 2. Configure geoportal functions to use that file

Be it [Geoportal access lib](https://github.com/ignf/geoportal-access-lib), [Geoportal extensions](https://github.com/IGNF/geoportal-extensions) or [Geoportal SDK](http://ignf.github.io/evolution-apigeoportail/sdk/presentation.html), you can use that file to configure your application :


#### With Geoportal access lib

Use it as a value of the **serverUrl** param of the [Gp.Services.getConfig()](http://ignf.github.io/geoportal-access-lib/latest/jsdoc/module-Services.html#~getConfig) function (instead of the **apiKey** param) :

``` javascript
the Gp.Services.getConfig({
    ...
    serverUrl : "path/to/autoconf.json",
    ...
}) ;
```


#### With Geoportal extensions

Use it with the **data-url** attribute of the script tag used to load the Geoportal extension (instead of the **data-key** attribute) :

``` html
<script type="text/javascript" src="path/to/GpPluginLeaflet.js" data-url="path/to/autoconf.json"></script>
<!-- or -->
<script type="text/javascript" src="path/to/GpPluginOl3.js" data-url="path/to/autoconf.json"></script>
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




/*
 * Tests de la construction d'une requête de calcul altimétrique, par la classe AltiRequestFactory,
 * avec les différents paramètres et combinaisons possibles en options.
 */
define(['chai'], function (chai) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test AltiRequest --", function() {

        /*
         * ERROR : JSON.stringify cannot serialize cyclic structures
         * https://github.com/nathanboktae/mocha-phantomjs/issues/104
         * http://stackoverflow.com/questions/9382167/serializing-object-that-contains-cyclic-object-value
         */
        var stringify = JSON.stringify;

        before(function() {
            JSON.stringify = function(obj) {
              var seen = [];

              return stringify(obj, function(key, val) {
                 if (typeof val === "object") {
                      if (seen.indexOf(val) >= 0) { return; }
                      seen.push(val);
                  }
                  return val;
              });
            };
        });

        after(function() {
            JSON.stringify = stringify;
        });

        var lstPositions = [
                {lon:'1.10', lat:'1.10'},
                {lon:'1.11', lat:'1.11'},
                {lon:'1.12', lat:'1.12'},
                {lon:'1.13', lat:'1.13'},
                {lon:'1.14', lat:'1.14'}
        ];

        var lstPositions_failed = [
                {X:'1.10',   Y:''},
                {lon:'1.10', lat:''},
                {lon:'1.10', lat:null},
                {}
        ];

        var lstMorePositions = [
                {lon:'1.15', lat:'1.15'},
                {lon:'1.16', lat:'1.16'},
                {lon:'1.17', lat:'1.17'}
        ];

        var options = {
            indent : true,
            zonly  : false,
            delimiter : ";",
            // mode : 'GET'
            // identifier : 'gs:WPSElevation'
            crs : 'EPSG:4326',
            positions : [
                {lon:'1.10', lat:'1.10'},
                {lon:'1.11', lat:'1.11'},
                {lon:'1.12', lat:'1.12'}
            ]
        };

        describe('-- AltiRequest --', function () {

            var AltiRequest = null;

            beforeEach(function(done) {
                require(['Services/Alti/Request/model/AltiRequest'], function(_AltiRequest) {
                    AltiRequest = _AltiRequest;
                    done();
                });
            });

            it('test de constructor()', function () {

                var myReq = new AltiRequest();
                should.exist(myReq);
                expect(myReq).to.have.property("crs", "CRS:84");
                expect(myReq).to.have.property("delimiter", '|');
                expect(myReq).to.have.property("indent", false);
                expect(myReq).to.have.property("format", "json");
                expect(myReq).to.have.property("positions");

            });

            it('test de constructor(options)', function () {

                var myReq = new AltiRequest(options);
                should.exist(myReq);

                expect(myReq).to.have.property("crs", "EPSG:4326");
                expect(myReq).to.have.property("delimiter", ';');
                expect(myReq).to.have.property("indent", true);
                expect(myReq).to.have.property("format", "json");
                expect(myReq).to.have.property("positions");
                expect(myReq["positions"]).to.be.an("Array");
                expect(myReq["positions"]).to.be.length(3);
                expect(myReq["positions"][0]).to.have.property("lon");
                expect(myReq["positions"][0]).to.have.property("lat");
            });

            it('test de setter()', function () {

                var myReq = new AltiRequest();
                should.exist(myReq);

                myReq.setPositions(lstPositions);
                myReq.delimiter = ",";
                myReq.indent    = true;
                myReq.crs       = 'EPSG:4326';

                expect(myReq).to.have.property("delimiter", ',');
                expect(myReq).to.have.property("indent", true);
                expect(myReq).to.have.property("crs", "EPSG:4326");
                expect(myReq).to.have.property("positions");
                expect(myReq["positions"]).to.be.an("Array");
                expect(myReq["positions"]).to.be.length(5);
            });

            it('test des proprietés par defaut', function () {

                var myReq = new AltiRequest();
                should.exist(myReq);

                expect(myReq).to.have.property("indent", false);
                expect(myReq).to.have.property("delimiter", '|');
                expect(myReq).to.have.property("crs", "CRS:84");
                expect(myReq.indent).to.be.false;
            });

            it('test de setPositions()', function () {

                var myReq = new AltiRequest();
                should.exist(myReq);

                myReq.setPositions(lstPositions);
                expect(myReq).to.have.property("positions");
                expect(myReq["positions"]).to.be.an("Array");
                expect(myReq["positions"]).to.be.length(5);
            });

            it('test de setPositions() avec de mauvaises positions !', function () {

                var myReq = new AltiRequest();
                should.exist(myReq);

                myReq.setPositions(lstPositions_failed);
                expect(myReq).to.have.property("positions");
                expect(myReq["positions"]).to.be.an("Array");
                expect(myReq["positions"]).to.be.length(0);

            });

            it('test de addPositions()', function () {

                var myReq = new AltiRequest();
                should.exist(myReq);

                myReq.setPositions(lstPositions);
                myReq.addPositions(lstMorePositions);
                expect(myReq).to.have.property("positions");
                expect(myReq["positions"]).to.be.an("Array");
                expect(myReq["positions"]).to.be.length(8);
            });

            it('test de getData()', function () {

                var myReq = new AltiRequest();
                myReq.setPositions(lstPositions);

                should.exist(myReq);

                var data = myReq.getData();

                expect(data).to.be.an("Array");
                expect(data).to.be.length(6);

                for (var i = 0; i < data.length; i++) {
                    var o = data[i];
                    expect(o).to.have.property("k");
                    expect(o).to.have.property("v");
                }

                expect(data[0]).to.have.property("k", "lon");
                expect(data[0]).to.have.property("v", "1.10|1.11|1.12|1.13|1.14");
                expect(data[1]).to.have.property("k", "lat");
                expect(data[1]).to.have.property("v", "1.10|1.11|1.12|1.13|1.14");
                expect(data[2]).to.have.property("k", "delimiter");
                expect(data[2]).to.have.property("v", "|");
                expect(data[3]).to.have.property("k", "indent");
                expect(data[3]).to.have.property("v", false);
                expect(data[4]).to.have.property("k", "crs");
                expect(data[4]).to.have.property("v", "CRS:84");
                expect(data[5]).to.have.property("k", "format");
                expect(data[5]).to.have.property("v", "json");
            });

        });

        describe('-- AltiElevationRequest --', function () {

            var AltiElevationRequest = null;

            beforeEach(function(done) {
                require(['Services/Alti/Request/model/AltiElevationRequest'], function(_AltiElevationRequest) {
                    AltiElevationRequest = _AltiElevationRequest;
                    done();
                });
            });

            it('test de constructor()', function () {

                var myReq = new AltiElevationRequest();
                should.exist(myReq);

                expect(myReq).to.have.property("crs", "CRS:84");
                expect(myReq).to.have.property("delimiter", '|');
                expect(myReq).to.have.property("indent", false);
                expect(myReq).to.have.property("format", "json");
                expect(myReq).to.have.property("positions");
                expect(myReq).to.have.property("zonly");
            });

            it('test de constructor(options)', function () {

                var myReq = new AltiElevationRequest(options);
                should.exist(myReq);

                expect(myReq).to.have.property("zonly", false);
                expect(myReq).to.have.property("crs", "EPSG:4326");
                expect(myReq).to.have.property("delimiter", ';');
                expect(myReq).to.have.property("indent", true);
                expect(myReq).to.have.property("format", "json");
                expect(myReq).to.have.property("positions");
                expect(myReq["positions"]).to.be.an("Array");
                expect(myReq["positions"]).to.be.length(3);
                expect(myReq["positions"][0]).to.have.property("lon");
                expect(myReq["positions"][0]).to.have.property("lat");
            });

            it('test de zonly', function () {

                var myReq = new AltiElevationRequest(options);
                myReq.zonly = true;
                should.exist(myReq);
                expect(myReq).to.have.property("zonly", true);
            });

            it('test de getData()', function () {

                var myReq = new AltiElevationRequest();
                myReq.setPositions(lstPositions);

                should.exist(myReq);

                var data = myReq.getData();

                expect(data).to.be.an("Array");
                expect(data).to.be.length(6);

                for (var i = 0; i < data.length; i++) {
                    var o = data[i];
                    expect(o).to.have.property("k");
                    expect(o).to.have.property("v");
                }

                expect(data[0]).to.have.property("k", "lon");
                expect(data[0]).to.have.property("v", "1.10|1.11|1.12|1.13|1.14");
                expect(data[1]).to.have.property("k", "lat");
                expect(data[1]).to.have.property("v", "1.10|1.11|1.12|1.13|1.14");
                expect(data[2]).to.have.property("k", "indent");
                expect(data[2]).to.have.property("v", false);
                expect(data[3]).to.have.property("k", "crs");
                expect(data[3]).to.have.property("v", "CRS:84");
                expect(data[4]).to.have.property("k", "zonly");
                expect(data[4]).to.have.property("v", false);
                expect(data[5]).to.have.property("k", "format");
                expect(data[5]).to.have.property("v", "json");
            });
        });

        describe('-- AltiProfilRequest --' , function () {

            var AltiProfilRequest = null;

            beforeEach(function(done) {
                require(['Services/Alti/Request/model/AltiProfilRequest'], function(_AltiProfilRequest) {
                    AltiProfilRequest = _AltiProfilRequest;
                    done();
                });
            });

            it('test de constructor()', function () {

                var myReq = new AltiProfilRequest();
                should.exist(myReq);

                expect(myReq).to.have.property("crs", "CRS:84");
                expect(myReq).to.have.property("delimiter", '|');
                expect(myReq).to.have.property("indent", false);
                expect(myReq).to.have.property("format", "json");
                expect(myReq).to.have.property("positions");
                expect(myReq).to.have.property("sampling");

            });

            it('test de constructor(options)', function () {

                var myReq = new AltiProfilRequest(options);
                should.exist(myReq);

                expect(myReq).to.have.property("sampling", 3);
                expect(myReq).to.have.property("crs", "EPSG:4326");
                expect(myReq).to.have.property("delimiter", ';');
                expect(myReq).to.have.property("indent", true);
                expect(myReq).to.have.property("format", "json");
                expect(myReq).to.have.property("positions");
                expect(myReq["positions"]).to.be.an("Array");
                expect(myReq["positions"]).to.be.length(3);
                expect(myReq["positions"][0]).to.have.property("lon");
                expect(myReq["positions"][0]).to.have.property("lat");
            });

            it('test de sampling', function () {

                var myReq = new AltiProfilRequest(options);
                myReq.sampling = 50;
                should.exist(myReq);
                expect(myReq).to.have.property("sampling", 50);
            });

            it('test de getData()', function () {

                var myReq = new AltiProfilRequest();
                myReq.setPositions(lstPositions);

                should.exist(myReq);

                var data = myReq.getData();

                expect(data).to.be.an("Array");
                expect(data).to.be.length(6);

                for (var i = 0; i < data.length; i++) {
                    var o = data[i];
                    expect(o).to.have.property("k");
                    expect(o).to.have.property("v");
                }

                expect(data[0]).to.have.property("k", "lon");
                expect(data[0]).to.have.property("v", "1.10|1.11|1.12|1.13|1.14");
                expect(data[1]).to.have.property("k", "lat");
                expect(data[1]).to.have.property("v", "1.10|1.11|1.12|1.13|1.14");
                expect(data[2]).to.have.property("k", "indent");
                expect(data[2]).to.have.property("v", false);
                expect(data[3]).to.have.property("k", "crs");
                expect(data[3]).to.have.property("v", "CRS:84");
                expect(data[4]).to.have.property("k", "sampling");
                expect(data[4]).to.have.property("v", 3);
                expect(data[5]).to.have.property("k", "format");
                expect(data[5]).to.have.property("v", "json");
            });
        });

        describe('-- AltiRequestREST --' , function () {

            var AltiRequestREST = null;

            var options = {
                    type : 'Elevation', // surchage
                    method : 'GET',     // surchage
                    param : {
                        positions : [
                            {lon:'1.10', lat:'1.10'},
                            {lon:'1.11', lat:'1.11'},
                            {lon:'1.12', lat:'1.12'}
                        ],
                        // delimiter : ";",
                        indent    : true,
                        crs       : 'EPSG:4326',
                        format    : 'json',
                        sampling  : 10 ,  // (only Profil)
                        zonly     : false,// (only Point)
                        output    : null, // (only GET)
                        callback  : null  // (only GET)
                    }
                };

            beforeEach(function(done) {
                require(['Services/Alti/Request/AltiRequestREST'
                ], function(_AltiRequestREST) {
                    AltiRequestREST = _AltiRequestREST;
                    done();
                });
            });

            it('test avec objet ELEVATION en mode GET', function () {

                options.method = 'GET';
                options.type   = 'Elevation';

                var myReq = null;
                try {
                    myReq = new AltiRequestREST(options);
                    should.exist(myReq);
                    expect(myReq.processRequestString()).not.to.be.null;

                } catch(e) {
                    // ne devrait pas passer dans le catch !?
                    expect(e).to.be.null;
                    console.log(e);
                }

                expect(myReq.requestString).not.to.be.null;
                expect(myReq.requestString).to.be.equal("lon=1.10|1.11|1.12&lat=1.10|1.11|1.12&indent=true&crs='EPSG:4326'&zonly=false");
            });

            it('test avec objet PROFIL en mode GET', function () {

                options.method = 'GET';
                options.type   = 'Profil';

                var myReq = null;
                try {
                    myReq = new AltiRequestREST(options);
                    should.exist(myReq);
                    expect(myReq.processRequestString()).not.to.be.null;

                } catch(e) {
                    // ne devrait pas passer dans le catch !?
                    expect(e).to.be.null;
                    console.log(e);
                }

                expect(myReq.requestString).not.to.be.null;
                expect(myReq.requestString).to.be.equal("lon=1.10|1.11|1.12&lat=1.10|1.11|1.12&indent=true&crs='EPSG:4326'&sampling=10");

            });

            it('test avec objet ELEVATION en mode POST', function () {
                // FIXME test inutil car le service ne l'implemente pas !
                options.method = 'POST';
                options.type   = 'Elevation';

                var myReq = null;
                try {
                    myReq = new AltiRequestREST(options);
                    should.exist(myReq);
                    expect(myReq.processRequestString()).not.to.be.null;

                } catch(e) {
                    // ne devrait pas passer dans le catch !?
                    expect(e).to.be.null;
                    console.log(e);
                }

                expect(myReq.requestString).not.to.be.null;
            });

            it('test avec objet PROFIL en mode POST', function () {
                // FIXME test inutil car le service ne l'implemente pas !
                options.method = 'POST';
                options.type   = 'Profil';

                var myReq = null;
                try {
                    myReq = new AltiRequestREST(options);
                    should.exist(myReq);
                    expect(myReq.processRequestString()).not.to.be.null;

                } catch(e) {
                    // ne devrait pas passer dans le catch !?
                    expect(e).to.be.null;
                    console.log(e);
                }

                expect(myReq.requestString).not.to.be.null;
            });

            it('test avec objet de type inconnu', function () {

                options.method = 'GET';
                options.type   = 'BIDON';

                var myReq = null;
                try {
                    myReq = new AltiRequestREST(options);
                    expect(false).to.be.true;
                } catch(e) {
                    expect(e).not.to.be.null;
                    expect(e.message).to.contain("Wrong type(s) for parameter(s) 'type (Elevation or Profil)'");
                    console.log(e.message);
                }
            });
        });

        describe('-- AltiRequestWPS --' , function () {

            var AltiRequestWPS = null;
            var XML = null;

            var options = {
                type : 'Profil', // Elevation
                method : 'POST', // GET
                param : {
                    positions : [
                        {lon:'1.10', lat:'1.10'},
                        {lon:'1.11', lat:'1.11'},
                        {lon:'1.12', lat:'1.12'}
                    ],
                    // delimiter : ";",
                    indent    : true,
                    crs       : 'EPSG:4326',
                    format    : 'json',
                    sampling  : 50 ,  // (only Profil)
                    zonly     : false,// (only Point)
                    output    : null, // (only GET)
                    callback  : null  // (only GET)
                },
                wps : {
                      service : '',
                      version : '',
                      identifier : 'gs:WPSLineElevation', // gs:WPSElevation
                      rawdataoutput : '',
                      request : ''
                }
            };

            beforeEach(function(done) {
                require(['Services/Alti/Request/AltiRequestWPS',
                    'Formats/XML'
                ], function(_AltiRequestWPS, _XML) {
                    AltiRequestWPS = _AltiRequestWPS;
                    XML = _XML;
                    done();
                });
            });

            it("test de parsing d'une requete WPS de Profile alti", function() {

                var requestWPSminify = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><wps:Execute version=\"1.0.0\" service=\"WPS\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://www.opengis.net/wps/1.0.0\" xmlns:wfs=\"http://www.opengis.net/wfs\" xmlns:wps=\"http://www.opengis.net/wps/1.0.0\" xmlns:ows=\"http://www.opengis.net/ows/1.1\" xmlns:gml=\"http://www.opengis.net/gml\" xmlns:ogc=\"http://www.opengis.net/ogc\" xmlns:wcs=\"http://www.opengis.net/wcs/1.1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xsi:schemaLocation=\"http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd\"><ows:Identifier>gs:WPSLineElevation</ows:Identifier><wps:DataInputs><wps:Input><ows:Identifier>lon</ows:Identifier><wps:Data><wps:LiteralData>1.10;1.11;1.12</wps:LiteralData></wps:Data></wps:Input><wps:Input><ows:Identifier>lat</ows:Identifier><wps:Data><wps:LiteralData>1.10;1.11;1.12</wps:LiteralData></wps:Data></wps:Input><wps:Input><ows:Identifier>delimiter</ows:Identifier><wps:Data><wps:LiteralData>;</wps:LiteralData></wps:Data></wps:Input><wps:Input><ows:Identifier>indent</ows:Identifier><wps:Data><wps:LiteralData>true</wps:LiteralData></wps:Data></wps:Input><wps:Input><ows:Identifier>crs</ows:Identifier><wps:Data><wps:LiteralData>EPSG:4326</wps:LiteralData></wps:Data></wps:Input><wps:Input><ows:Identifier>sampling</ows:Identifier><wps:Data><wps:LiteralData>50</wps:LiteralData></wps:Data></wps:Input><wps:Input><ows:Identifier>format</ows:Identifier><wps:Data><wps:LiteralData>json</wps:LiteralData></wps:Data></wps:Input></wps:DataInputs><wps:ResponseForm><wps:RawDataOutput><ows:Identifier>result</ows:Identifier></wps:RawDataOutput></wps:ResponseForm></wps:Execute>";
                var p = new XML();
                    p.setXMLString(requestWPSminify);
                var data = p.parse();
                should.exist(data);
                expect(data).to.have.property("wps:Execute");
                // todo...
                // console.log(data);

            });

            it('test avec objet ELEVATION en mode GET', function () {

                options.method = 'GET';
                options.type   = 'Elevation';

                var result = AltiRequestWPS.build(options);
                expect(result).not.to.be.null;
                expect(result).to.be.equal("service=WPS&version=1.0.0&rawdataoutput=result&identifier=gs:WPSElevation&request=Execute&datainputs=lon=1.10|1.11|1.12;lat=1.10|1.11|1.12;indent=true;crs=EPSG:4326;zonly=false;format=json");

            });

            it('test avec objet PROFIL en mode GET', function () {

                options.method = 'GET';
                options.type   = 'Profil';

                var result = AltiRequestWPS.build(options);
                expect(result).not.to.be.null;
                expect(result).to.be.equal("service=WPS&version=1.0.0&rawdataoutput=result&identifier=gs:WPSLineElevation&request=Execute&datainputs=lon=1.10|1.11|1.12;lat=1.10|1.11|1.12;indent=true;crs=EPSG:4326;sampling=50;format=json");

            });

            it('test avec objet ELEVATION en mode POST', function () {

                options.method = 'POST';
                options.type   = 'Elevation';
                var valide =  function (result) {
                    var p = new XML();
                        p.setXMLString(result);
                    var data = p.parse();
                    should.exist(data);
                    expect(data).to.have.property("wps:Execute");

                };

                var result = AltiRequestWPS.build(options);
                expect(result).not.to.be.null;
                valide(result);

            });

            it('test avec objet PROFIL en mode POST', function () {

                options.method = 'POST';
                options.type   = 'Profil';
                var valide =  function (result) {
                    var p = new XML();
                        p.setXMLString(result);
                    var data = p.parse();
                    // console.log(data);
                    should.exist(data);
                    expect(data).to.have.property("wps:Execute");
                    expect(data["wps:Execute"]).to.have.property("ows:Identifier");
                    var exec = data["wps:Execute"];
                    expect(exec["ows:Identifier"].textContent).to.equal("gs:WPSLineElevation");
                    expect(data["wps:Execute"]).to.have.property("wps:DataInputs");
                    expect(data["wps:Execute"]).to.have.property("wps:ResponseForm");
                    // todo...
                };

                var result = AltiRequestWPS.build(options);
                expect(result).not.to.be.null;
                valide(result);
            });

        });

        describe('-- AltiRequestFactory --' , function () {

            var AltiRequestFactory = null;
            var options = {};

            beforeEach(function(done) {
                require(['Services/Alti/Request/AltiRequestFactory'
                ], function(_AltiRequestFactory) {
                    AltiRequestFactory = _AltiRequestFactory;
                    done();
                });

                options = {
                   httpMethod : 'POST', // GET|POST
                   onSuccess : null,
                   onFailure : null,
                   positions : [
                            {lon:'1.10', lat:'1.10'},
                            {lon:'1.11', lat:'1.11'},
                            {lon:'1.12', lat:'1.12'}
                        ],
                   outputFormat : 'json', // json|xml
                   sampling : 50,
                   api : 'REST', // REST|WPS
                   zonly : false // false|true
               };

            });

            it("test service REST en POST sur un PROFIL", function() {
                options.httpMethod = 'POST';
                try {
                    var request = AltiRequestFactory.build(options);
                    expect(request).not.to.be.null;
                    expect(true).to.be.true;
                } catch (e) {
                    expect(false).to.be.true;
                }
            });

            it("test service REST en POST sur un PROFIL avec callback", function(done) {
                options.httpMethod = 'POST';
                options.onSuccess = function (result) {
                    expect(result).not.to.be.null;
                    done();
                };
                options.onFailure = function (e) {
                    expect(e).not.to.be.null;
                    done(e);
                };
                AltiRequestFactory.build(options);
            });

            it("test service REST en GET sur un PROFIL", function() {
                options.httpMethod = 'GET';
                try {
                    var request = AltiRequestFactory.build(options);
                    expect(request).not.to.be.null;
                    expect(true).to.be.true;
                } catch (e) {
                    expect(false).to.be.true;
                }
            });

            it("test service WPS en GET sur un PROFIL", function() {
                options.httpMethod = 'GET';
                options.api = "WPS";
                try {
                    var request = AltiRequestFactory.build(options);
                    expect(request).not.to.be.null;
                    expect(true).to.be.true;
                } catch (e) {
                    expect(false).to.be.true;
                }
            });

            it("test service WPS en POST sur un PROFIL avec callback", function(done) {
                options.httpMethod = 'POST';
                options.api = "WPS";
                options.onSuccess = function (result) {
                    expect(result).not.to.be.null;
                    done();
                };
                options.onFailure = function (e) {
                    expect(e).not.to.be.null;
                    done(e);
                };
                AltiRequestFactory.build(options);
            });

            it("test service WPS en POST sur un PROFIL", function() {
                options.httpMethod = 'POST';
                options.api = "WPS";
                try {
                    var request = AltiRequestFactory.build(options);
                    expect(request).not.to.be.null;
                    expect(true).to.be.true;
                } catch (e) {
                    expect(false).to.be.true;
                }
            });
         });
    });
});

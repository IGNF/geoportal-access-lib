
import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
import sinon from "sinon";
should();

import XHR from "../../../src/Protocols/XHR";

describe("-- Test Protocols XHR --", function () {

    var server;

    before(function () {
        server = sinon.fakeServer.create();
    });

    after(function () {
        server.restore();
    });

    beforeEach(function () {
        // reponse du service
        var okResponseJson = [ 200, { "Content-type": "application/json" }, "{\"message\":\"hello world\"}"];
        server.respondWith("POST", "/test.json", okResponseJson);
        server.respondWith("GET", "/test.json", okResponseJson);
        server.respondWith("PUT", "/test.json", okResponseJson);
        server.respondWith("GET", "/test.json?key=value", okResponseJson);

        var okResponseXml = [ 200, { "Content-type": "application/xml" }, "<root><message>hello world</message></root>"];
        server.respondWith("GET", "/test.xml", okResponseXml);
        server.respondWith("POST", "/test.xml", okResponseXml);
        server.respondWith("PUT", "/test.xml", okResponseXml);

        var okResponseText = [ 200, { "Content-type": "plain/text" }, "hello world"];
        server.respondWith("GET", "/test.txt", okResponseText);
        server.respondWith("POST", "/test.txt", okResponseText);
        server.respondWith("PUT", "/test.txt", okResponseText);
        server.respondWith("GET", "/test.txt?key=value", okResponseText);

        var okResponse404 = [ 404, { "Content-type": "application/json" }, "{\"message\":\"Not found\"}"];
        server.respondWith("GET", "/404.json", okResponse404);
        var okResponse403 = [ 403, { "Content-type": "application/json" }, "{\"message\":\"Forbidden\"}"];
        server.respondWith("GET", "/403.json", okResponse403);
    });

    var options_get = {
        url       : "",
        method    : "GET",
        data      : {},
        onSuccess : function (response) {
            console.log(response);
        },
        onFailure : function (error) {
            console.log(error);
        },
        onTimeOut : function () {}
    };

    var options_post = {
        url       : "",
        method    : "POST",
        data      : null,
        headers   : {},
        content   : "",
        onSuccess : function (response) {
            console.log(response);
        },
        onFailure : function (error) {
            console.log(error);
        },
        onTimeOut : function () {
            console.log("Timeout!");
        }
    };

    describe("XHR", function () {

        it("GET XHR reponse en json", function (done) {

            XHR.call({
                url       : "/test.json",
                method    : "GET",
                protocol  : "XHR",
                format    : "json",
                data      : {},
                onResponse : function (response) {
                    expect(response).to.have.property("message");
                    expect(response.message).to.equal("hello world");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("GET XHR reponse en texte", function (done) {

            XHR.call({
                url       : "/test.txt",
                method    : "GET",
                protocol  : "XHR",
                format    : "text",
                data      : {
                    key : "value"
                },
                onResponse : function (response) {
                    response.should.be.to.equal("hello world");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("GET XHR reponse en xml", function (done) {

            XHR.call({
                url       : "/test.xml",
                method    : "GET",
                protocol  : "XHR",
                format    : "xml",
                data      : {},
                onResponse : function (response) {
                    response.childNodes[0].textContent.should.be.to.equal("hello world");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("POST XHR reponse en json", function (done) {

            XHR.call({
                url       : "/test.json",
                method    : "POST",
                protocol  : "XHR",
                format    : "json",
                data      : "",
                onResponse : function (response) {
                    expect(response).to.have.property("message");
                    expect(response.message).to.equal("hello world");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("POST XHR reponse en texte", function (done) {

            XHR.call({
                url       : "/test.txt",
                method    : "POST",
                protocol  : "XHR",
                format    : "text",
                data      : "",
                onResponse : function (response) {
                    response.should.be.to.equal("hello world");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("POST XHR reponse en xml", function (done) {

            XHR.call({
                url       : "/test.xml",
                method    : "POST",
                protocol  : "XHR",
                format    : "xml",
                data      : "",
                onResponse : function (response) {
                    response.childNodes[0].textContent.should.be.to.equal("hello world");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("PUT XHR reponse en json", function (done) {

            XHR.call({
                url       : "/test.json",
                method    : "PUT",
                protocol  : "XHR",
                format    : "json",
                data      : "",
                onResponse : function (response) {
                    expect(response).to.have.property("message");
                    expect(response.message).to.equal("hello world");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("PUT XHR reponse en texte", function (done) {

            XHR.call({
                url       : "/test.txt",
                method    : "PUT",
                protocol  : "XHR",
                format    : "text",
                data      : "",
                onResponse : function (response) {
                    response.should.be.to.equal("hello world");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("PUT XHR reponse en texte avec corps", function (done) {

            XHR.call({
                url       : "/test.txt",
                method    : "PUT",
                protocol  : "XHR",
                format    : "text",
                data      : "Ceci est le corps de la requête !",
                onResponse : function (response) {
                    response.should.be.to.equal("hello world");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("GET XHR reponse en texte avec une URL + KVP", function (done) {

            XHR.call({
                url       : "/test.json",
                method    : "GET",
                protocol  : "XHR",
                format    : "text",
                data      : {
                    key:"value"
                },
                onResponse : function (response) {
                    response.should.be.to.equal("{\"message\":\"hello world\"}");
                    expect(true).to.be.true;
                    done();
                },
                onFailure : function (error) {
                    console.log(error);
                    done(error);
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("__callXML : GET XHR reponse en xml", function (done) {
            // FIXME sous IE9&10 uniquement
            // error : access is denied
            // test possible avec l"url suivante :
            // http://client.cors-api.appspot.com/client#?client_method=GET&client_credentials=false&server_url=http%3A%2F%2Fdemo9330242.mockable.io%2Falti%2Felevation.xml&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote
            options_get.url = "/test.xml";
            options_get.method = "GET";
            XHR.__callXML(options_get)
            .then(function (response){
                options_get.onSuccess.call(this, response);
                response.childNodes[0].textContent.should.be.to.equal("hello world");
                done();
            })
            .catch(function (e) {
                options_get.onFailure.call(this, e);
                done(e);
            });

            server.respond();
        });

        it("__callJSON : GET XHR reponse en json", function (done) {

            options_get.url = "/test.json";
            XHR.__callJSON(options_get)
            .then(function (response){
                options_get.onSuccess.call(this, response);
                response.should.have.property("message");
                response.message.should.be.to.equal("hello world");
                done();
            })
            .catch(function (e) {
                options_get.onFailure.call(this, e);
                done(e);
            });

            server.respond();
        });

        it("__call : GET XHR reponse en texte", function (done) {

            options_get.url = "/test.txt";
            options_get.format = null;
            XHR.__call(options_get)
            .then(function (response){
                options_get.onSuccess.call(this, response);
                response.should.be.to.equal("hello world");
                done();
            })
            .catch(function (e) {
                options_get.onFailure.call(this, e);
                done(e);
            });

            server.respond();
        });

        it("Erreur du service 404 !", function (done) {

            XHR.call({
                url       : "/404.json",
                method    : "GET",
                protocol  : "XHR",
                format    : "text",
                data      : {},
                onResponse : function (response) {
                    done(response);
                },
                onFailure : function (e) {
                    console.log(e);
                    expect(e).not.to.be.null;
                    expect(e.message).to.contain("Errors Occured on Http Request");
                    expect(e.status).to.be.equal(404);
                    done();
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("Erreur du service 403 !", function (done) {

            XHR.call({
                url       : "/403.json",
                method    : "GET",
                protocol  : "XHR",
                format    : "text",
                data      : {},
                onResponse : function (response) {
                    done(response);
                },
                onFailure : function (e) {
                    console.log(e);
                    expect(e).not.to.be.null;
                    expect(e.message).to.contain("Errors Occured on Http Request");
                    expect(e.status).to.be.equal(403);
                    done();
                },
                onTimeOut : function () {}
            });

            server.respond();
        });

        it("Format non supporté !", function () {

            try {
                XHR.call({
                    url       : "/test.json",
                    method    : "GET",
                    protocol  : "XHR",
                    format    : "bidon",
                    data      : {},
                    onResponse : function (response) {},
                    onFailure : function (e) {},
                    onTimeOut : function () {}
                });
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("This output Format is not yet supported !");
            }
        });

        it("HTTP methode non supporté !", function () {

            try {
                XHR.call({
                    url       : "/test.json",
                    method    : "HEAD",
                    protocol  : "XHR",
                    format    : "",
                    data      : "",
                    onResponse : function (response) {},
                    onFailure : function (e) {},
                    onTimeOut : function () {}
                });
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("HTTP method not yet supported !");
            }
        });

        it("HTTP methode inconnue !", function () {

            try {
                XHR.call({
                    url       : "/test.json",
                    method    : "BIDON",
                    protocol  : "XHR",
                    format    : "",
                    data      : "",
                    onResponse : function (response) {},
                    onFailure : function (e) {},
                    onTimeOut : function () {}
                });
                expect(false).to.be.true;
            } catch (e) {
                console.log(e.message);
                expect(e).not.to.be.null;
                expect(e.message).to.be.equal("HTTP method unknown !");
            }
        });

    });
});

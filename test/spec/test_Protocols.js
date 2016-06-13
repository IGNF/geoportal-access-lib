/* global xit */
/* global describe, it */

define(['chai', 'sinon'], function (chai, sinon) {

    var assert = chai.assert;
    var expect = chai.expect;
    var should = chai.should();

    describe("-- Test Protocols --", function () {

        var server;

        before(function () {server = sinon.fakeServer.create();});
        after (function () {server.restore();});

        beforeEach(function(){
            // reponse du service
            var okResponseJson = [ 200, { 'Content-type': 'application/json' }, '{"message":"hello world"}'];
                server.respondWith('POST', '/test.json', okResponseJson);
                server.respondWith('GET', '/test.json', okResponseJson);
                server.respondWith('PUT', '/test.json', okResponseJson);
                server.respondWith('GET', '/test.json?key=value', okResponseJson);

            var okResponseXml = [ 200, { 'Content-type': 'application/xml' }, '<root><message>hello world</message></root>'];
                server.respondWith('GET', '/test.xml', okResponseXml);
                server.respondWith('POST', '/test.xml', okResponseXml);
                server.respondWith('PUT', '/test.xml', okResponseXml);
        });

        var options_get = {
            url: '',
            method: 'GET',
            protocol: null, // surchagé
            format: null, // surchagé
            data: '',
            onResponse: function (response) {
                console.log("onResponse", response);
            },
            onFailure: function (error) {
                console.log("onFailure", error);
            },
            onTimeOut: function (message) {
                console.log("onTimeOut", message);
            }
        };

        var options_post = {
            url: '',   // surchagé
            method: 'POST',
            protocol: null, // surchagé
            format: null, // surchagé
            data: {},
            headers: {},
            content: '',
            onResponse: function (response) {
                console.log("onResponse", response);
            },
            onFailure: function (error) {
                console.log("onFailure", error);
            },
            onTimeOut: function (message) {
                console.log("onTimeOut", message);
            }
        };

        describe('Interface', function () {

            var Protocol;

            beforeEach(function (done) {
                require(['Protocols/Protocol'], function (_Protocol) {
                    Protocol = _Protocol;
                    done();
                });
            });

            it('GET XHR Json', function (done) {

                options_get.url = '/test.json';
                options_get.protocol = 'XHR';
                options_get.format = 'json';
                options_get.onResponse = function (response) {
                    // console.log("onResponse", response);
                    expect(response).to.have.property('message');
                    expect(response.message).to.equal("hello world");
                    done();
                };
                options_get.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };
                Protocol.send(options_get);
                server.respond();
            });

            // FIXME non compatible nodejs
            xit('GET XHR Xml', function (done) {
                options_get.url = '/test.xml';
                options_get.protocol = 'XHR';
                options_get.format = 'xml';
                options_get.onResponse = function (response) {

                    console.log("onResponse", response);
                    var content = response.childNodes[0].textContent;
                    content = content.replace(/(\r\n|\n|\r|\s)/gm, "");
                    content.trim();
                    content.should.be.to.equal("helloworld");
                    done();
                };
                options_get.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };
                Protocol.send(options_get);
                server.respond();
            });

            it('POST XHR Json', function (done) {
                options_post.url = '/test.json';
                options_post.protocol = 'XHR';
                options_post.format = 'json';
                options_post.onResponse = function (response) {
                    // console.log("onResponse", response);
                    expect(response).to.have.property('message');
                    expect(response.message).to.equal("hello world");
                    done();
                };
                options_post.onFailure = function (error) {
                    console.log(error);
                    done(error);
                };
                Protocol.send(options_post);
                server.respond();
            });

            // FIXME non compatible nodejs
            xit('POST XHR Xml', function (done) {
                options_post.url = '/test.xml';
                options_post.protocol = 'XHR';
                options_post.format = 'xml';
                options_post.onResponse = function (response) {
                    console.log("onResponse", response);
                    var content = response.childNodes[0].textContent;
                    content = content.replace(/(\r\n|\n|\r|\s)/gm, "");
                    content.trim();
                    content.should.be.to.equal("helloworld");
                    done();
                };
                options_post.onFailure = function (error) {
                    done(error);
                };
                Protocol.send(options_post);
                server.respond();
            });
        });
    });
});

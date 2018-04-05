import { assert } from "chai";
import { expect } from "chai";
import { should } from "chai";
should();

import JSONP from "../../../src/Protocols/JSONP";

describe("-- Test Protocols JSONP --", function () {

    before(function () {
        /** la fonction callback est definie par le client */
        var scope = typeof window !== "undefined" ? window : {};
        scope["myCallback"] = function (data) {
            expect(data).to.have.property("message", "Hello World!");
        };
    });

    after(function () { });

    xit("call with a callback by default", function (done) {
        // cas nominal
        // cas où la fonction callback est defnie par le programme
        // par defaut, la fonction est "callback()", et appele "onResponse()"
        var options = {
            // utilisation d"un fake de service pour mocker ce test...
            url : "spec/fixtures/callback-default.js?callback=",
            timeOut : 10000,
            callbackName : null,
            /** onResponse */
            onResponse : function (response) {
                // console.log("onResponse : ", response);
                expect(response).to.have.property("message", "Another Hello World!");
                done();
            },
            /** onTimeOut */
            onTimeOut : function () {
                done("Time out!");
            }
        };

        JSONP.call(options);
    });

    xit("call with a timeout = 0 on a bad service", function (done) {
        // cas où le timeout est desactivé !
        // FIXME on ne peut pas l"executer...
        this.timeout(1000);
        setTimeout(done, 1000);
        var options = {
            // utilisation d"un fake de service pour mocker ce test...
            url : "bidon",
            timeOut : 0,
            callbackName : null,
            /** onResponse */
            onResponse : function (response) {
                console.log("onResponse : ", response);
                expect(response).to.have.property("message", "Another Hello World!");
                done();
            },
            /** onTimeOut */
            onTimeOut : function () {
                done("Time out!");
            }
        };

        JSONP.call(options);
    });

    xit("call with an user callback", function () {
        // cas où la fonction callback est definie par le client :
        // cf. myCallback()

        var options = {
            // utilisation d"un fake de service pour mocker ce test...
            url : "spec/fixtures/callback.js?callback=",
            timeOut : 10000,
            callbackName : "myCallback",
            /** onResponse */
            onResponse : function (response) {
                console.log("onResponse : ", response);
            },
            /** onTimeOut */
            onTimeOut : function () {
                console.log("Time out!");
            }
        };

        JSONP.call(options);
    });

    xit("call with an exception on options undefined !", function () {
        // exception
        expect(function () {
            var options = null;
            JSONP.call(options);
        }).to.throw("missing parameter : options !");
    });

    xit("call with an exception on url undefined !", function () {
        // exception
        expect(function () {
            var options = {};
            JSONP.call(options);
        }).to.throw("missing parameter : options.url !");
    });

    xit("call with an exception on callback undefined !", function () {
        // exception
        // cas où la fonction callback n"est pas definie : "onResponse()"
        expect(function () {
            var options = {
                // utilisation d"un fake de service pour mocker ce test...
                url : "spec/fixtures/callback.js?callback=",
                timeOut : 10000,
                callbackName : null,
                onResponse : null,
                onTimeOut : null
            };

            JSONP.call(options);
        }).to.throw("missing parameter : options.onResponse !");
    });

    xit("call with an exception on callback send by service", function (done) {
        // FIXME cas improbable..., donc pas testé...
        // cas où la fonction callback du service est differente de celle du client !?

        var options = {
            // utilisation d"un fake de service pour mocker ce test...
            // ce service renvoie une fonction callback differente : callbackFailed({}) !?
            url : "spec/fixtures/callback-failed.js?callback=",
            timeOut : 10000,
            callbackName : "myCallback",
            /** onResponse */
            onResponse : function (response) {
                console.log("onResponse : ", response);
                done();
            },
            /** onTimeOut */
            onTimeOut : function () {
                console.log("Time out!");
                done();
            }
        };

        JSONP.call(options);
    });

});

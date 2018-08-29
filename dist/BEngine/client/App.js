"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var BEngineObject_1 = require("./core/BEngineObject");
var App = /** @class */ (function () {
    function App(width, height, params) {
        this.app = new PIXI.Application(800, 600, { backgroundColor: 0XFF0000 });
        document.body.appendChild(this.app.view);
        var t = new BEngineObject_1.BEngineObject();
        console.log(t.getClassName());
    }
    return App;
}());
exports.App = App;

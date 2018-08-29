"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var BEngineObject_1 = require("./BEngineObject");
var BEngineEmitter = /** @class */ (function (_super) {
    __extends(BEngineEmitter, _super);
    function BEngineEmitter(name) {
        var _this = _super.call(this, name) || this;
        _this.eventEmitter = new PIXI.utils.EventEmitter();
        return _this;
    }
    BEngineEmitter.prototype.destroy = function () {
        // BEngine.core.Object.ObjectList.splice(BEngine.core.Object.ObjectList.indexOf(this),1);
        this.emit(BEngineObject_1.BEngineObject.DESTROYED, this);
    };
    BEngineEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        return (_a = this.eventEmitter).emit.apply(_a, [event].concat(args));
    };
    BEngineEmitter.prototype.addListener = function (event, fn, context) {
        return this.eventEmitter.addListener(event, fn, context);
    };
    return BEngineEmitter;
}(BEngineObject_1.BEngineObject));
exports.BEngineEmitter = BEngineEmitter;

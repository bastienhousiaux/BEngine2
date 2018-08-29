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
var Element_1 = require("./Element");
/// <reference path="Element.ts" />
var Sprite = /** @class */ (function (_super) {
    __extends(Sprite, _super);
    function Sprite(texture) {
        return _super.call(this, new PIXI.Sprite(texture)) || this;
    }
    Object.defineProperty(Sprite.prototype, "texture", {
        get: function () {
            return this.displayElement.texture;
        },
        set: function (texture) {
            this.displayElement.texture = texture;
        },
        enumerable: true,
        configurable: true
    });
    Sprite.prototype.clone = function () {
        var sprite = new Sprite(this.displayElement.texture);
        return sprite;
    };
    return Sprite;
}(Element_1.Element));
exports.Sprite = Sprite;

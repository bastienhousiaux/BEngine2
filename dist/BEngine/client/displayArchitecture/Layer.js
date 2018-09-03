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
var SequenceClip_1 = require("./../elements/SequenceClip");
var AnimatedSprite_1 = require("./../elements/AnimatedSprite");
var Container_1 = require("./../elements/Container");
var Sprite_1 = require("../elements/Sprite");
var Element_1 = require("../elements/Element");
var RessourceManager_1 = require("../managers/RessourceManager");
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    function Layer(elements) {
        var _this = _super.call(this, new PIXI.Container()) || this;
        _this.elements = elements;
        return _this;
        // console.log(Array1D);
        /*this.elements.forEach((element, x, array): void => {
            this.displayElement.addChild(element.displayElement);
        });*/
    }
    Layer.prototype.createSprite = function (texture, spriteArgs) {
        if (spriteArgs === void 0) { spriteArgs = {}; }
        if (typeof texture == "string")
            texture = RessourceManager_1.RessourceManager.getTexture(texture);
        var sprite = new Sprite_1.Sprite(texture);
        for (var key in spriteArgs)
            sprite.setProp(key, spriteArgs[key]);
        this.displayElement.addChild(sprite.displayElement);
        // this.elements.push(sprite);
        return sprite;
    };
    Layer.prototype.createContainer = function (containerArgs) {
        if (containerArgs === void 0) { containerArgs = {}; }
        var container = new Container_1.Container();
        for (var key in containerArgs)
            container.setProp(key, containerArgs[key]);
        this.displayElement.addChild(container.displayElement);
        this.elements.push(container);
        return container;
    };
    Layer.prototype.createAnimatedSprite = function (textures, spriteArgs) {
        if (spriteArgs === void 0) { spriteArgs = {}; }
        var animatedSprite = new AnimatedSprite_1.AnimatedSprite(textures);
        for (var key in spriteArgs)
            animatedSprite.setProp(key, spriteArgs[key]);
        this.displayElement.addChild(animatedSprite.displayElement);
        this.elements.push(animatedSprite);
        return animatedSprite;
    };
    Layer.prototype.createSequenceClip = function (animations, baseAnimation, clipArgs) {
        if (clipArgs === void 0) { clipArgs = {}; }
        var clip = new SequenceClip_1.SequenceClip(animations, baseAnimation);
        for (var key in clipArgs)
            clip.setProp(key, clipArgs[key]);
        this.displayElement.addChild(clip.displayElement);
        this.elements.push(clip);
        return clip;
    };
    Layer.prototype.createTilemap = function (tilesetName, x, y, tileWidth, tileHeight, width, height, hPadding, vPadding, tilemapArgs) {
        if (hPadding === void 0) { hPadding = 0; }
        if (vPadding === void 0) { vPadding = 0; }
        if (tilemapArgs === void 0) { tilemapArgs = {}; }
        var tilemap = new BEngine.elements.Tilemap(tilesetName, x, y, tileWidth, tileHeight, width, height, hPadding, vPadding);
        for (var key in tilemapArgs)
            tilemap[key] = tilemapArgs[key];
        this.displayElement.addChild(tilemap.displayElement);
        this.elements.push(tilemap);
        return tilemap;
    };
    return Layer;
}(Element_1.Element));
exports.Layer = Layer;

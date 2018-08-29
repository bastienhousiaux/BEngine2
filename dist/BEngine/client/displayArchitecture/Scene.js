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
var BEngine;
(function (BEngine) {
    var displayArchitecture;
    (function (displayArchitecture) {
        var Scene = /** @class */ (function (_super) {
            __extends(Scene, _super);
            function Scene(layers) {
                if (layers === void 0) { layers = null; }
                var _this = _super.call(this, new PIXI.Container()) || this;
                _this.layers = layers;
                if (layers === null)
                    _this.layers = new BEngine.collections.Array1D();
                _this.layers.forEach(function (layer, x, array) {
                    _this.displayElement.addChild(layer.displayElement);
                });
                return _this;
            }
            Scene.prototype.createLayer = function (elements, layerArgs) {
                if (elements === void 0) { elements = new BEngine.collections.Array1D(); }
                if (layerArgs === void 0) { layerArgs = {}; }
                var layer = new BEngine.displayArchitecture.Layer(elements);
                this.layers.push(layer);
                for (var key in layerArgs)
                    layer.displayElement[key] = layerArgs[key];
                this.displayElement.addChild(layer.displayElement);
                return layer;
            };
            return Scene;
        }(BEngine.elements.Element));
        displayArchitecture.Scene = Scene;
    })(displayArchitecture = BEngine.displayArchitecture || (BEngine.displayArchitecture = {}));
})(BEngine || (BEngine = {}));

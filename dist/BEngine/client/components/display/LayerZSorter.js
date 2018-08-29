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
    var components;
    (function (components) {
        var display;
        (function (display) {
            var LayerZSorter = /** @class */ (function (_super) {
                __extends(LayerZSorter, _super);
                function LayerZSorter(layer) {
                    var _this = _super.call(this, layer) || this;
                    _this.addRoutine();
                    return _this;
                }
                LayerZSorter.prototype.routine = function () {
                    this.displayElement.children.sort(function (a, b) {
                        if (a.y > b.y)
                            return 1;
                        if (b.y > a.y)
                            return -1;
                        return 0;
                    });
                };
                return LayerZSorter;
            }(BEngine.components.Component));
            display.LayerZSorter = LayerZSorter;
        })(display = components.display || (components.display = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

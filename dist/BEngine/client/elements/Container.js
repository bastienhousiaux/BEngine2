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
/// <reference path="Element.ts" />
var BEngine;
(function (BEngine) {
    var elements;
    (function (elements) {
        var Container = /** @class */ (function (_super) {
            __extends(Container, _super);
            function Container() {
                return _super.call(this, new PIXI.Container()) || this;
            }
            return Container;
        }(BEngine.elements.Element));
        elements.Container = Container;
    })(elements = BEngine.elements || (BEngine.elements = {}));
})(BEngine || (BEngine = {}));

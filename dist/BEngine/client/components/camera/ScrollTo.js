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
        var camera;
        (function (camera) {
            var ScrollTo = /** @class */ (function (_super) {
                __extends(ScrollTo, _super);
                function ScrollTo(target, diffX, diffY) {
                    if (diffX === void 0) { diffX = 0; }
                    if (diffY === void 0) { diffY = 0; }
                    var _this = _super.call(this) || this;
                    _this.target = target;
                    _this.diffX = diffX;
                    _this.diffY = diffY;
                    _this.addRoutine();
                    return _this;
                }
                ScrollTo.prototype.routine = function () {
                    this.element.x = -this.target.x + this.diffX;
                    this.element.y = -this.target.y + this.diffY;
                };
                return ScrollTo;
            }(BEngine.components.Component));
            camera.ScrollTo = ScrollTo;
        })(camera = components.camera || (components.camera = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

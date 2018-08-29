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
        var limits;
        (function (limits) {
            var BoundRect = /** @class */ (function (_super) {
                __extends(BoundRect, _super);
                function BoundRect(rectangle) {
                    var _this = _super.call(this, rectangle) || this;
                    _this.on(BEngine.components.checkers.RectLimit.LEFT_LIMIT, function () { _this.element.x = _this.rectangle.x; });
                    _this.on(BEngine.components.checkers.RectLimit.TOP_LIMIT, function () { _this.element.y = _this.rectangle.y; });
                    _this.on(BEngine.components.checkers.RectLimit.BOTTOM_LIMIT, function () { _this.element.y = _this.rectangle.y + _this.rectangle.height - _this.element.height; });
                    _this.on(BEngine.components.checkers.RectLimit.RIGHT_LIMIT, function () { return _this.element.x = _this.rectangle.x + _this.rectangle.width - _this.element.width; });
                    return _this;
                }
                return BoundRect;
            }(BEngine.components.checkers.RectLimit));
            limits.BoundRect = BoundRect;
        })(limits = components.limits || (components.limits = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

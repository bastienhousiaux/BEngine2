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
        var checkers;
        (function (checkers) {
            var RectLimit = /** @class */ (function (_super) {
                __extends(RectLimit, _super);
                function RectLimit(rectangle) {
                    var _this = _super.call(this) || this;
                    _this.rectangle = rectangle;
                    _this.addRoutine();
                    return _this;
                }
                RectLimit.prototype.routine = function () {
                    if (this.element.x < this.rectangle.x) {
                        this.emit(BEngine.components.checkers.RectLimit.LEFT_LIMIT);
                    }
                    else {
                        if (this.element.x + this.element.width > this.rectangle.x + this.rectangle.width) {
                            this.emit(BEngine.components.checkers.RectLimit.RIGHT_LIMIT);
                        }
                    }
                    if (this.element.y < this.rectangle.y) {
                        this.emit(BEngine.components.checkers.RectLimit.TOP_LIMIT);
                    }
                    else {
                        if (this.element.y + this.element.height > this.rectangle.y + this.rectangle.height) {
                            this.emit(BEngine.components.checkers.RectLimit.BOTTOM_LIMIT);
                        }
                    }
                };
                RectLimit.LEFT_LIMIT = "leftLimit";
                RectLimit.RIGHT_LIMIT = "rightLimit";
                RectLimit.TOP_LIMIT = "topLimit";
                RectLimit.BOTTOM_LIMIT = "bottomLimit";
                return RectLimit;
            }(BEngine.components.Component));
            checkers.RectLimit = RectLimit;
        })(checkers = components.checkers || (components.checkers = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

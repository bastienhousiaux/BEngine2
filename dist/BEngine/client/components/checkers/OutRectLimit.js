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
            var OutRectLimit = /** @class */ (function (_super) {
                __extends(OutRectLimit, _super);
                function OutRectLimit(rectangle) {
                    var _this = _super.call(this) || this;
                    _this.rectangle = rectangle;
                    _this.addRoutine();
                    return _this;
                }
                OutRectLimit.prototype.routine = function () {
                    var leftDiff = this.element.x + this.element.width - this.rectangle.x;
                    var topDiff = this.element.y + this.element.height - this.rectangle.y;
                    var rightDiff = this.rectangle.x + this.rectangle.width - this.element.x;
                    var bottomDiff = this.rectangle.y + this.rectangle.height - this.element.y;
                    if (leftDiff > 0) {
                        if (topDiff > 0) {
                            if (leftDiff > topDiff)
                                this.emit(BEngine.components.checkers.OutRectLimit.LEFT_LIMIT);
                            else
                                this.emit(BEngine.components.checkers.OutRectLimit.TOP_LIMIT);
                        }
                        else {
                            if (rightDiff > 0) {
                            }
                        }
                    }
                };
                OutRectLimit.LEFT_LIMIT = "leftLimit";
                OutRectLimit.RIGHT_LIMIT = "rightLimit";
                OutRectLimit.TOP_LIMIT = "topLimit";
                OutRectLimit.BOTTOM_LIMIT = "bottomLimit";
                return OutRectLimit;
            }(BEngine.components.Component));
            checkers.OutRectLimit = OutRectLimit;
        })(checkers = components.checkers || (components.checkers = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

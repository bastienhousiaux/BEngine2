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
            var DistanceChecker = /** @class */ (function (_super) {
                __extends(DistanceChecker, _super);
                function DistanceChecker(target, distance, element, enabled) {
                    if (enabled === void 0) { enabled = true; }
                    var _this = _super.call(this, element, enabled) || this;
                    _this.target = target;
                    _this.distance = distance;
                    _this.isTargetAtDistance = false;
                    _this.addRoutine();
                    return _this;
                }
                DistanceChecker.prototype.routine = function () {
                    // console.log("Math.abs("+this.element.x+"-"+this.target.x+")+Math.abs("+this.element.y+"-"+this.target.y+")<="+this.distance);
                    if (Math.abs(this.element.x - this.target.x) + Math.abs(this.element.y - this.target.y) <= this.distance) {
                        if (!this.isTargetAtDistance)
                            this.emit(BEngine.components.checkers.DistanceChecker.DISTANCE_REACHED);
                        this.isTargetAtDistance = true;
                    }
                    else {
                        if (this.isTargetAtDistance)
                            this.emit(BEngine.components.checkers.DistanceChecker.END_DISTANCE_REACHED);
                        this.isTargetAtDistance = false;
                    }
                };
                /** Emitted on first frame distance is reached */
                DistanceChecker.DISTANCE_REACHED = "distance reached";
                /** Emitted on first frame distance is not reached */
                DistanceChecker.END_DISTANCE_REACHED = "end distance reached";
                return DistanceChecker;
            }(BEngine.components.Component));
            checkers.DistanceChecker = DistanceChecker;
        })(checkers = components.checkers || (components.checkers = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

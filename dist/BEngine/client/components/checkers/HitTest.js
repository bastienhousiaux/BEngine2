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
            var HitTest = /** @class */ (function (_super) {
                __extends(HitTest, _super);
                function HitTest(hbName, targets, targetsHBName) {
                    var _this = _super.call(this) || this;
                    _this.hbName = hbName;
                    _this.targets = targets;
                    _this.targetsHBName = targetsHBName;
                    _this.touchedElements = new BEngine.collections.Array1D();
                    _this.addRoutine();
                    return _this;
                }
                HitTest.prototype.routine = function () {
                    for (var i = 0; i < this.targets.length; i++) {
                        var collision;
                        if (collision = this.element.getHitbox(this.hbName).testCollisionWith(this.targets.get(i).getHitbox(this.targetsHBName))) {
                            this.emit(BEngine.components.checkers.HitTest.HIT, this.targets.get(i), this.element, collision);
                        }
                    }
                };
                HitTest.HIT = "hit";
                HitTest.COLLISION_SIDE = ["left", "right", "top", "bottom"];
                return HitTest;
            }(BEngine.components.Component));
            checkers.HitTest = HitTest;
        })(checkers = components.checkers || (components.checkers = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

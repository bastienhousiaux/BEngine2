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
        var physics;
        (function (physics) {
            var Gravity = /** @class */ (function (_super) {
                __extends(Gravity, _super);
                function Gravity(strength) {
                    if (strength === void 0) { strength = 9; }
                    var _this = _super.call(this) || this;
                    _this.strength = strength;
                    _this.addRoutine();
                    return _this;
                }
                Gravity.prototype.routine = function () {
                    this.element.y += this.strength;
                };
                return Gravity;
            }(BEngine.components.Component));
            physics.Gravity = Gravity;
        })(physics = components.physics || (components.physics = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

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
        var moves;
        (function (moves) {
            var Jump = /** @class */ (function (_super) {
                __extends(Jump, _super);
                function Jump(strength, key) {
                    if (key === void 0) { key = 38; }
                    var _this = _super.call(this) || this;
                    _this.strength = strength;
                    _this.key = key;
                    _this.keyDetectionEnabled = true;
                    _this.currentStrength = 0;
                    _this.isJumping = false;
                    _this.addRoutine();
                    BEngine.App.keyboardManager.addKey(key);
                    return _this;
                }
                Jump.prototype.routine = function () {
                    if (this.isJumping) {
                        this.element.y -= this.currentStrength--;
                        if (this.currentStrength === 0) {
                            this.isJumping = false;
                            this.emit(Jump.JUMP_END);
                        }
                    }
                    else {
                        if (this.keyDetectionEnabled && BEngine.App.keyboardManager.isKeyDown(this.key)) {
                            this.currentStrength = this.strength;
                            this.emit(Jump.JUMP_START);
                            this.isJumping = true;
                        }
                    }
                };
                Jump.JUMP_START = "jumpStart";
                Jump.JUMP_END = "jumpEnd";
                return Jump;
            }(BEngine.components.Component));
            moves.Jump = Jump;
        })(moves = components.moves || (components.moves = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

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
            var KeyboardMove = /** @class */ (function (_super) {
                __extends(KeyboardMove, _super);
                function KeyboardMove(keys, speed) {
                    if (keys === void 0) { keys = { left: 37, right: 39, up: 38, down: 40 }; }
                    if (speed === void 0) { speed = 3; }
                    var _this = _super.call(this) || this;
                    _this.keys = keys;
                    _this.speed = speed;
                    _this.isMoving = false;
                    _this.addRoutine();
                    if (keys.left != undefined)
                        BEngine.App.keyboardManager.addKey(keys.left);
                    if (keys.right != undefined)
                        BEngine.App.keyboardManager.addKey(keys.right);
                    if (keys.up != undefined)
                        BEngine.App.keyboardManager.addKey(keys.up);
                    if (keys.down != undefined)
                        BEngine.App.keyboardManager.addKey(keys.down);
                    return _this;
                }
                KeyboardMove.prototype.routine = function () {
                    this.isMoving = false;
                    if (this.keys.left != undefined && BEngine.App.keyboardManager.isKeyDown(this.keys.left)) {
                        this.element.x -= this.speed;
                        this.isMoving = true;
                    }
                    else {
                        if (this.keys.right != undefined && BEngine.App.keyboardManager.isKeyDown(this.keys.right)) {
                            this.element.x += this.speed;
                            this.isMoving = true;
                        }
                    }
                    if (this.keys.up != undefined && BEngine.App.keyboardManager.isKeyDown(this.keys.up)) {
                        this.element.y -= this.speed;
                        this.isMoving = true;
                    }
                    else {
                        if (this.keys.down != undefined && BEngine.App.keyboardManager.isKeyDown(this.keys.down)) {
                            this.element.y += this.speed;
                            this.isMoving = true;
                        }
                    }
                };
                return KeyboardMove;
            }(BEngine.components.Component));
            moves.KeyboardMove = KeyboardMove;
        })(moves = components.moves || (components.moves = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

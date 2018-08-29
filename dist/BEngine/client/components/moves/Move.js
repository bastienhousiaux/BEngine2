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
            var Move = /** @class */ (function (_super) {
                __extends(Move, _super);
                function Move(speed, element, enabled) {
                    if (speed === void 0) { speed = 3; }
                    if (enabled === void 0) { enabled = true; }
                    var _this = _super.call(this, element, enabled) || this;
                    _this.speed = speed;
                    _this.enabled = enabled;
                    _this.deplXEnded = true;
                    _this.deplYEnded = true;
                    _this.isMoving = false;
                    _this.addRoutine();
                    _this.disable();
                    return _this;
                }
                Move.prototype.stop = function () {
                    this.isMoving = false;
                    this.disable();
                    this.emit(BEngine.components.moves.Move.MOVE_ENDED);
                };
                Move.prototype.start = function () {
                    this.isMoving = true;
                    this.enable();
                    this.emit(BEngine.components.moves.Move.MOVE_STARTED);
                };
                Move.prototype.moveTo = function (x, y) {
                    this.disable();
                    this.destinationX = x;
                    this.destinationY = y;
                    var distanceX = x - this.element.displayElement.x;
                    var distanceY = y - this.element.displayElement.y;
                    var distanceTot = Math.abs(distanceX) + Math.abs(distanceY);
                    if (distanceTot > 0) {
                        this.speedX = distanceX * this.speed / distanceTot;
                        this.speedY = distanceY * this.speed / distanceTot;
                        this.deplXEnded = false;
                        this.deplYEnded = false;
                        this.start();
                    }
                };
                Move.prototype.moveToElement = function (element) {
                    this.moveTo(element.displayElement.x, element.displayElement.y);
                };
                Move.prototype.moveOnAngle = function (angle, distance) {
                    if (distance === void 0) { distance = Infinity; }
                    this.removeRoutine();
                    this.speedX = Math.cos(Math.PI * angle / 180) * this.speed;
                    this.destinationX = this.element.displayElement.x + this.speedX * distance / this.speed;
                    this.speedY = Math.sin(Math.PI * angle / 180) * this.speed;
                    this.destinationY = this.element.displayElement.y + this.speedY * distance / this.speed;
                    this.deplXEnded = false;
                    this.deplYEnded = false;
                    this.start();
                };
                Move.prototype.routine = function () {
                    if (Math.abs(this.destinationX - this.element.displayElement.x) <= Math.abs(this.speedX)) {
                        this.element.displayElement.x = this.destinationX;
                        this.deplXEnded = true;
                    }
                    else {
                        this.element.displayElement.x += this.speedX;
                    }
                    if (Math.abs(this.destinationY - this.element.displayElement.y) <= Math.abs(this.speedY)) {
                        this.element.displayElement.y = this.destinationY;
                        this.deplYEnded = true;
                    }
                    else {
                        this.element.displayElement.y += this.speedY;
                    }
                    if (this.deplXEnded && this.deplYEnded) {
                        this.stop();
                        this.emit(Move.MOVE_ENDED);
                    }
                };
                Move.MOVE_ENDED = "move ended";
                Move.MOVE_STARTED = "move started";
                return Move;
            }(BEngine.components.Component));
            moves.Move = Move;
        })(moves = components.moves || (components.moves = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

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
            var FrameTicker = /** @class */ (function (_super) {
                __extends(FrameTicker, _super);
                function FrameTicker(delay) {
                    var _this = _super.call(this) || this;
                    _this.delay = delay;
                    _this.currentCount = delay;
                    _this.addRoutine();
                    return _this;
                }
                FrameTicker.prototype.reset = function () {
                    this.currentCount = 0;
                    this.enable();
                };
                Object.defineProperty(FrameTicker.prototype, "isDelayEllapsed", {
                    get: function () {
                        return this.currentCount >= this.delay;
                    },
                    enumerable: true,
                    configurable: true
                });
                FrameTicker.prototype.routine = function () {
                    if (++this.currentCount >= this.delay) {
                        this.disable();
                        this.emit(BEngine.components.checkers.FrameTicker.DELAY_ELLAPSED);
                    }
                };
                /**Emitted once when delay is ellapsed */
                FrameTicker.DELAY_ELLAPSED = "delay ellapsed";
                return FrameTicker;
            }(BEngine.components.Component));
            checkers.FrameTicker = FrameTicker;
        })(checkers = components.checkers || (components.checkers = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

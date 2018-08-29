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
/// <reference path="../core/Object.ts"/>
var BEngine;
(function (BEngine) {
    var components;
    (function (components) {
        var Component = /** @class */ (function (_super) {
            __extends(Component, _super);
            function Component(element, enabled) {
                if (enabled === void 0) { enabled = true; }
                var _this = _super.call(this) || this;
                _this.enabled = enabled;
                _this.preRoutineBinded = _this.preRoutine.bind(_this);
                if (element)
                    _this.attachTo(element);
                _this.enabled = enabled;
                return _this;
            }
            Component.prototype.attachTo = function (element) {
                this.element = element;
                this.displayElement = element.displayElement;
                this.element.on(BEngine.core.Object.DESTROYED, this.destroy.bind(this));
                this.emit(BEngine.components.Component.ATTACHED_TO_ELEMENT);
            };
            Component.prototype.addRoutine = function () {
                BEngine.App.defaultApp.addFuncToTicker(this.preRoutineBinded);
            };
            Component.prototype.removeRoutine = function () {
                BEngine.App.defaultApp.removeFuncFromTicker(this.preRoutineBinded);
            };
            Component.prototype.preRoutine = function () {
                if (this.enabled) {
                    this.emit(BEngine.components.Component.ROUTINE_START);
                    this.routine();
                    this.emit(BEngine.components.Component.ROUTINE_END);
                }
            };
            Component.prototype.enable = function () {
                this.enabled = true;
            };
            Component.prototype.disable = function () {
                this.enabled = false;
            };
            Component.prototype.routine = function () {
            };
            Component.prototype.destroy = function () {
                this.removeRoutine();
                _super.prototype.destroy.call(this);
            };
            // routineBinded=this.routine.bind(this);
            Component.ROUTINE_START = "routineStart";
            Component.ROUTINE_END = "routineEnd";
            Component.ATTACHED_TO_ELEMENT = "attached to element";
            return Component;
        }(BEngine.core.Object));
        components.Component = Component;
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

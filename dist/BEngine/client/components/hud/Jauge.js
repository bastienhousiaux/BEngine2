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
        var hud;
        (function (hud) {
            var Jauge = /** @class */ (function (_super) {
                __extends(Jauge, _super);
                function Jauge(dataObject, currentValueName, maxValueName) {
                    var _this = _super.call(this) || this;
                    _this.dataObject = dataObject;
                    _this.currentValueName = currentValueName;
                    _this.maxValueName = maxValueName;
                    _this.addRoutine();
                    _this.on(BEngine.components.Component.ATTACHED_TO_ELEMENT, function () {
                        _this.maxWidth = _this.element.width;
                    });
                    return _this;
                }
                Jauge.prototype.routine = function () {
                    this.element.width = this.dataObject[this.currentValueName] * this.maxWidth / this.dataObject[this.maxValueName];
                };
                return Jauge;
            }(BEngine.components.Component));
            hud.Jauge = Jauge;
        })(hud = components.hud || (components.hud = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

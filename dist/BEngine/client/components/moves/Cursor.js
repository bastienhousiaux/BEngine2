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
            var Cursor = /** @class */ (function (_super) {
                __extends(Cursor, _super);
                function Cursor(modX, modY, cursorType) {
                    if (modX === void 0) { modX = 0; }
                    if (modY === void 0) { modY = 0; }
                    if (cursorType === void 0) { cursorType = BEngine.components.moves.Cursor.CURSOR_XY; }
                    var _this = _super.call(this) || this;
                    _this.modX = modX;
                    _this.modY = modY;
                    _this.cursorType = cursorType;
                    BEngine.App.defaultApp.addFuncToTicker(_this.routine.bind(_this));
                    return _this;
                }
                Cursor.prototype.routine = function () {
                    if (this.cursorType <= BEngine.components.moves.Cursor.CURSOR_XY)
                        this.element.displayElement.x = App.defaultApp.renderer.plugins.interaction.mouse.global.x + this.modX;
                    if (this.cursorType >= BEngine.components.moves.Cursor.CURSOR_XY)
                        this.element.displayElement.y = App.defaultApp.renderer.plugins.interaction.mouse.global.y + this.modY;
                };
                Cursor.CURSOR_X = 0;
                Cursor.CURSOR_Y = 2;
                Cursor.CURSOR_XY = 1;
                return Cursor;
            }(BEngine.components.Component));
            moves.Cursor = Cursor;
        })(moves = components.moves || (components.moves = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

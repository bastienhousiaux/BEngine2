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
            var GridCursor = /** @class */ (function (_super) {
                __extends(GridCursor, _super);
                function GridCursor(grid, modX, modY, cursorType) {
                    if (modX === void 0) { modX = 0; }
                    if (modY === void 0) { modY = 0; }
                    if (cursorType === void 0) { cursorType = BEngine.components.moves.Cursor.CURSOR_XY; }
                    var _this = _super.call(this, modX, modY, cursorType) || this;
                    _this.grid = grid;
                    return _this;
                }
                GridCursor.prototype.routine = function () {
                    if (this.cursorType <= BEngine.components.moves.Cursor.CURSOR_XY)
                        this.element.displayElement.x = this.grid.getRealXFromGridX(this.grid.getGridXFromRealX(App.defaultApp.renderer.plugins.interaction.mouse.global.x)) + this.modX;
                    if (this.cursorType >= BEngine.components.moves.Cursor.CURSOR_XY)
                        this.element.displayElement.y = this.grid.getRealYFromGridY(this.grid.getGridYFromRealY(App.defaultApp.renderer.plugins.interaction.mouse.global.y)) + this.modY;
                };
                return GridCursor;
            }(BEngine.components.moves.Cursor));
            moves.GridCursor = GridCursor;
        })(moves = components.moves || (components.moves = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

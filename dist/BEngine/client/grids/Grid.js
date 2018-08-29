"use strict";
var BEngine;
(function (BEngine) {
    var grids;
    (function (grids) {
        var Grid = /** @class */ (function () {
            function Grid(caseWidth, caseHeight, x, y, horizontalPadding, verticalPadding) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (horizontalPadding === void 0) { horizontalPadding = 0; }
                if (verticalPadding === void 0) { verticalPadding = 0; }
                this.caseWidth = caseWidth;
                this.caseHeight = caseHeight;
                this.x = x;
                this.y = y;
                this.horizontalPadding = horizontalPadding;
                this.verticalPadding = verticalPadding;
            }
            Grid.prototype.getGridXFromRealX = function (x) {
                return Math.floor((x - this.x) / (this.caseWidth + this.horizontalPadding));
            };
            Grid.prototype.getGridYFromRealY = function (y) {
                return Math.floor((y - this.y) / (this.caseHeight + this.verticalPadding));
            };
            Grid.prototype.getRealXFromGridX = function (x) {
                return x * (this.caseWidth + this.horizontalPadding) + this.x;
            };
            Grid.prototype.getRealYFromGridY = function (y) {
                return y * (this.caseHeight + this.verticalPadding) + this.y;
            };
            return Grid;
        }());
        grids.Grid = Grid;
    })(grids = BEngine.grids || (BEngine.grids = {}));
})(BEngine || (BEngine = {}));

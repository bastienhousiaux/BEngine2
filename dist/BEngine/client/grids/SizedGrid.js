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
    var grids;
    (function (grids) {
        var SizedGrid = /** @class */ (function (_super) {
            __extends(SizedGrid, _super);
            function SizedGrid(caseWidth, caseHeight, nbCol, nbRow, x, y, horizontalPadding, verticalPadding) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (horizontalPadding === void 0) { horizontalPadding = 0; }
                if (verticalPadding === void 0) { verticalPadding = 0; }
                var _this = _super.call(this, caseWidth, caseHeight, x, y, horizontalPadding, verticalPadding) || this;
                _this.nbCol = nbCol;
                _this.nbRow = nbRow;
                return _this;
            }
            SizedGrid.prototype.forEach = function (callback) {
                for (var i = 0; i < this.nbRow; i++) {
                    for (var j = 0; j < this.nbCol; j++) {
                        callback(j, i, this.x + j * (this.caseWidth + this.horizontalPadding), this.y + i * (this.caseHeight + this.verticalPadding), this);
                    }
                }
            };
            SizedGrid.prototype.getEndX = function () {
                return this.x + this.nbCol * this.caseWidth + (this.nbCol - 1) * this.horizontalPadding;
            };
            SizedGrid.prototype.getEndY = function () {
                return this.y + this.nbRow * this.caseHeight + (this.nbRow - 1) * this.verticalPadding;
            };
            SizedGrid.prototype.getLastColX = function () {
                return this.getEndX() - this.caseWidth - this.horizontalPadding;
            };
            SizedGrid.prototype.getLastRowY = function () {
                return this.getEndY() - this.caseHeight - this.verticalPadding;
            };
            SizedGrid.prototype.getGridXFromRealX = function (x) {
                var rX = _super.prototype.getGridXFromRealX.call(this, x);
                if (rX >= this.nbCol)
                    return this.nbCol;
                if (rX < 0)
                    return 0;
                return rX;
            };
            SizedGrid.prototype.getGridYFromRealY = function (y) {
                var rY = _super.prototype.getGridYFromRealY.call(this, y);
                if (rY >= this.nbRow)
                    return this.nbRow;
                if (rY < 0)
                    return 0;
                return rY;
            };
            SizedGrid.prototype.getRealXFromGridX = function (x) {
                var rX = _super.prototype.getRealXFromGridX.call(this, x);
                if (rX < this.x)
                    return this.x;
                if (rX > this.getLastColX())
                    return this.getLastColX();
                return rX;
            };
            SizedGrid.prototype.getRealYFromGridY = function (y) {
                var rY = _super.prototype.getRealYFromGridY.call(this, y);
                if (rY < this.y)
                    return this.y;
                if (rY > this.getLastRowY())
                    return this.getLastRowY();
                return rY;
            };
            // getLocalXFromGridX(x:number):number{
            //     var rX=super.getGridXFromRealX(x);
            //     if(rX<this.x)return this.x;
            //     if(rX>this.getLastColX())return this.getLastColX();
            //     return rX;
            // }
            SizedGrid.prototype.getRandomLine = function () {
                return BEngine.misc.MathX.randomInt(0, this.nbRow - 1);
            };
            SizedGrid.prototype.getRandomColumn = function () {
                return BEngine.misc.MathX.randomInt(0, this.nbCol - 1);
            };
            return SizedGrid;
        }(grids.Grid));
        grids.SizedGrid = SizedGrid;
    })(grids = BEngine.grids || (BEngine.grids = {}));
})(BEngine || (BEngine = {}));

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
        var limits;
        (function (limits) {
            var TilemapObstacleOut = /** @class */ (function (_super) {
                __extends(TilemapObstacleOut, _super);
                function TilemapObstacleOut(tilemap, outValues) {
                    var _this = _super.call(this) || this;
                    _this.tilemap = tilemap;
                    _this.outValues = outValues;
                    _this.addRoutine();
                    return _this;
                }
                TilemapObstacleOut.prototype.routine = function () {
                    var xToGrid = this.tilemap.grid.getGridXFromRealX(this.element.x + 1);
                    var endXToGrid = this.tilemap.grid.getGridXFromRealX(this.element.x + this.element.width - 1);
                    var yToGrid = this.tilemap.grid.getGridXFromRealX(this.element.y + 1);
                    var endYToGrid = this.tilemap.grid.getGridXFromRealX(this.element.y + this.element.height - 1);
                    var xDepth = this.tilemap.grid.getRealXFromGridX(xToGrid + 1) - this.element.x;
                    var yDepth = this.tilemap.grid.getRealYFromGridY(yToGrid + 1) - this.element.y;
                    var endXDepth = this.tilemap.grid.getRealXFromGridX(endXToGrid - 1) - this.element.x;
                    var endYDepth = this.tilemap.grid.getRealYFromGridY(endYToGrid - 1) - this.element.y;
                    var coinTL = this.tilemap.dataArray.getCell(xToGrid, yToGrid);
                    var coinTR = this.tilemap.dataArray.getCell(xToGrid, endYToGrid);
                    var coinBL = this.tilemap.dataArray.getCell(xToGrid, endYToGrid);
                    var coinBR = this.tilemap.dataArray.getCell(endXToGrid, endYToGrid);
                    for (var i = 0; i < this.outValues.length; i++) {
                        if (coinTL === this.outValues[i]) {
                            if (xDepth < yDepth) {
                                this.element.x += xDepth;
                            }
                            else {
                                this.element.y += yDepth;
                            }
                        }
                        if (coinTR === this.outValues[i]) {
                            if (endXDepth < yDepth) {
                                this.element.x += endXDepth;
                            }
                            else {
                                this.element.y += yDepth;
                            }
                        }
                        if (coinBL === this.outValues[i]) {
                            if (xDepth < endYDepth) {
                                this.element.x += xDepth;
                            }
                            else {
                                this.element.y += endYDepth;
                            }
                        }
                        if (coinBR === this.outValues[i]) {
                            if (endXDepth < endYDepth) {
                                this.element.x += xDepth;
                            }
                            else {
                                this.element.y += endYDepth;
                            }
                        }
                    }
                };
                return TilemapObstacleOut;
            }(BEngine.components.Component));
            limits.TilemapObstacleOut = TilemapObstacleOut;
        })(limits = components.limits || (components.limits = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));

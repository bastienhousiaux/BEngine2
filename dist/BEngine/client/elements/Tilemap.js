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
    var elements;
    (function (elements) {
        var Tilemap = /** @class */ (function (_super) {
            __extends(Tilemap, _super);
            function Tilemap(tilesetName, x, y, tileWidth, tileHeight, width, height, hPadding, vPadding) {
                if (hPadding === void 0) { hPadding = 0; }
                if (vPadding === void 0) { vPadding = 0; }
                var _this = _super.call(this, new PIXI.Container()) || this;
                _this.tilesetName = tilesetName;
                _this.x = x;
                _this.y = y;
                _this.tileWidth = tileWidth;
                _this.tileHeight = tileHeight;
                _this.width = width;
                _this.height = height;
                _this.hPadding = hPadding;
                _this.vPadding = vPadding;
                _this.grid = new BEngine.grids.SizedGrid(tileWidth, tileHeight, width / tileWidth, height / tileHeight, x, y, hPadding, vPadding);
                _this.dataArray = new BEngine.collections.Array2D(width / tileWidth, height / tileHeight, null);
                _this.elementArray = new BEngine.collections.Array2D(width / tileWidth, height / tileHeight, null);
                _this.displayElement.on("click", function () {
                    var caseX = _this.grid.getGridXFromRealX(BEngine.managers.MouseManager.getMouseX());
                    var caseY = _this.grid.getGridYFromRealY(BEngine.managers.MouseManager.getMouseY());
                    _this.emit(BEngine.elements.Tilemap.CELL_CLICKED, caseX, caseY, BEngine.managers.MouseManager.getMouseX(), BEngine.managers.MouseManager.getMouseY(), _this.dataArray.getCell(caseX, caseY));
                });
                return _this;
            }
            Tilemap.prototype.loadFromJSON = function (name) {
                var _this = this;
                var json = BEngine.managers.RessourceManager.getJSON(name);
                this.grid.forEach(function (x, y, rX, rY, grid) {
                    var el = _this.addChild(new PIXI.Sprite(BEngine.managers.RessourceManager.getTexture(_this.tilesetName + json.tiles[y][x])));
                    _this.dataArray.setCell(x, y, json[y][x]);
                    el.x = rX - _this.x;
                    el.y = rY - _this.y;
                });
            };
            Tilemap.prototype.loadFromArray = function (array) {
                var _this = this;
                this.grid.forEach(function (x, y, rX, rY, grid) {
                    if (array[y][x] != undefined) {
                        var el = new BEngine.elements.Sprite(BEngine.managers.RessourceManager.getTexture(_this.tilesetName + array[y][x]));
                        _this.addChild(el);
                        _this.elementArray.setCell(x, y, el);
                        _this.dataArray.setCell(x, y, array[y][x]);
                        el.x = rX - _this.x;
                        el.y = rY - _this.y;
                    }
                });
            };
            Tilemap.prototype.setCell = function (x, y, textureNumber) {
                if (this.elementArray.getCell(x, y) === null) {
                    var spr = new BEngine.elements.Sprite(BEngine.managers.RessourceManager.getTexture(this.tilesetName + textureNumber));
                    this.addChild(spr);
                    spr.x = this.grid.getRealXFromGridX(x);
                    spr.y = this.grid.getRealYFromGridY(y);
                    this.elementArray.setCell(x, y, spr);
                    this.dataArray.setCell(x, y, textureNumber);
                    return spr;
                }
                else {
                    return this.switchCellTexture(x, y, textureNumber);
                }
            };
            // removeCell(x:number,y:number){
            //     this.removeChildAt(y*this.grid.nbCol+x);
            // }
            Tilemap.prototype.switchCellTexture = function (x, y, textureNumber) {
                var spr = this.elementArray.getCell(x, y);
                spr.texture = BEngine.managers.RessourceManager.getTexture(this.tilesetName + textureNumber);
                this.dataArray.setCell(x, y, textureNumber);
                return spr;
            };
            Tilemap.prototype.switchCells = function (x1, y1, x2, y2) {
                var el1 = this.elementArray.getCell(x1, y1);
                var el2 = this.elementArray.getCell(x2, y2);
                if (el1) {
                    el1.x = this.grid.getRealXFromGridX(x2);
                    el1.y = this.grid.getRealYFromGridY(y2);
                }
                if (el2) {
                    el2.x = this.grid.getRealXFromGridX(x1);
                    el2.y = this.grid.getRealYFromGridY(y1);
                }
                var tmp = this.dataArray.getCell(x1, y1);
                this.dataArray.setCell(x1, y1, this.dataArray.getCell(x2, y2));
                this.dataArray.setCell(x2, y2, tmp);
                this.elementArray.setCell(x1, y1, el2);
                this.elementArray.setCell(x2, y2, el1);
            };
            Tilemap.CELL_CLICKED = "cell clicked";
            return Tilemap;
        }(BEngine.elements.Element));
        elements.Tilemap = Tilemap;
    })(elements = BEngine.elements || (BEngine.elements = {}));
})(BEngine || (BEngine = {}));

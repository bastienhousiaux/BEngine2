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
    var collections;
    (function (collections) {
        var Array2D = /** @class */ (function (_super) {
            __extends(Array2D, _super);
            function Array2D(width, height, defaultValue) {
                if (defaultValue === void 0) { defaultValue = null; }
                var _this = _super.call(this, width * height, defaultValue) || this;
                _this.width = width;
                _this.height = height;
                return _this;
            }
            Array2D.prototype.xyTox = function (x, y) {
                return x + y * this.width;
            };
            Array2D.prototype.xToxy = function (x) {
                return { x: x % this.width, y: Math.floor(x / this.width) };
            };
            Array2D.prototype.isCellInRange = function (x, y) {
                return y < this.height && x < this.width;
            };
            // getDiagEnd(startX:number,startY:number):number{
            //     for(var t=this.xyTox(startX,startY);t<this.length;t+=this.width+1);
            //     t+=-this.width-1;
            //     return t;
            // }
            Array2D.prototype.getLineStartIndex = function (line) {
                return line * this.width;
            };
            Array2D.prototype.getLineEndIndex = function (line) {
                return this.getLineStartIndex(line + 1) - 1;
            };
            Array2D.prototype.getColumnStartIndex = function (column) {
                return column;
            };
            Array2D.prototype.getColumnEndIndex = function (column) {
                return column + (this.height - 1) * this.width;
            };
            Array2D.prototype.getCell = function (x, y) {
                return this.get(this.xyTox(x, y));
            };
            Array2D.prototype.setCell = function (x, y, value) {
                return this.set(this.xyTox(x, y), value);
            };
            Array2D.prototype.forEachCell = function (callback) {
                for (var i = 0; i < this.length; i++) {
                    callback(this.get(i), i % this.width, Math.floor(i / this.width), this);
                }
            };
            Array2D.prototype.forEachCol = function (callback) {
                for (var i = 0; i < this.width; i++) {
                    callback(i, this);
                }
            };
            Array2D.prototype.forEachLine = function (callback) {
                for (var i = 0; i < this.height; i++) {
                    callback(i, this);
                }
            };
            Array2D.prototype.forEachOnLine = function (yLine, callback) {
                var ret;
                for (var i = 0; i < this.width; i++) {
                    callback(this.getCell(i, yLine), i, this);
                }
            };
            Array2D.prototype.forEachOnColumn = function (xColumn, callback) {
                for (var i = 0; i < this.height; i++) {
                    callback(this.getCell(xColumn, i), i, this);
                }
            };
            Array2D.prototype.firstIndexOfOnLine = function (line, value) {
                for (var i = 0; i < this.width; i++) {
                    if (this.get(this.xyTox(i, line)) === value)
                        return i;
                }
                return -1;
            };
            Array2D.prototype.lastIndexOfOnLine = function (line, value) {
                for (var i = this.width; i >= 0; i--) {
                    if (this.get(this.xyTox(i, line)) === value)
                        return i;
                }
                return -1;
            };
            Array2D.prototype.firstIndexOfOnColumn = function (column, value) {
                for (var i = 0; i < this.height; i++) {
                    if (this.get(this.xyTox(column, i)) === value)
                        return i;
                }
                return -1;
            };
            Array2D.prototype.lastIndexOfOnColumn = function (column, value) {
                for (var i = this.height; i >= 0; i--) {
                    if (this.get(this.xyTox(column, i)) === value)
                        return i;
                }
                return -1;
            };
            Array2D.prototype.findGroupOnLines = function (group) {
                for (var line = 0; line < this.height; line++) {
                    var groupFound = this.findGroup(group, this.getLineStartIndex(line), this.getLineEndIndex(line));
                    if (groupFound)
                        return groupFound;
                }
                return null;
            };
            Array2D.prototype.findGroupOnColumns = function (group) {
                for (var column = 0; column < this.width; column++) {
                    var groupFound = this.findGroup(group, this.getColumnStartIndex(column), this.getColumnEndIndex(column), this.width);
                    if (groupFound)
                        return groupFound;
                }
                return null;
            };
            Array2D.prototype.findGroupOnDiags = function (group) {
                //Left Side diags
                for (var y = this.height - group.length; y > 0; y--) {
                    var distFromHeight = this.height - y;
                    var end;
                    if (distFromHeight > this.width) {
                        end = new BEngine.geom.Point((this.height - 1 - y), this.height - 1);
                    }
                    else {
                        end = new BEngine.geom.Point(this.width - 1, (y + this.width));
                    }
                    var groupFound = this.findGroup(group, this.xyTox(0, y), this.xyTox(end.x, end.y), this.width + 1);
                    if (groupFound)
                        return groupFound;
                }
                for (var x = 0; x < this.width; x++) {
                    //Left to Right diagonal
                    var distToRight = this.width - x;
                    if (distToRight >= group.length) {
                        var end;
                        if (distToRight > this.height) {
                            end = new BEngine.geom.Point((this.height - 1 + x), this.height - 1);
                        }
                        else {
                            end = new BEngine.geom.Point((this.width - 1), (this.width - 1 - x));
                        }
                        var groupFound = this.findGroup(group, this.xyTox(x, 0), this.xyTox(end.x, end.y), this.width + 1);
                        if (groupFound)
                            return groupFound;
                    }
                    //Right to Left diagonal
                    var distToLeft = group.length - 1;
                    if (x >= distToLeft) {
                        var end;
                        if (distToLeft > this.height) {
                            end = new BEngine.geom.Point((x - this.height + 1), this.height - 1);
                        }
                        else {
                            end = new BEngine.geom.Point(0, x);
                        }
                        var groupFound = this.findGroup(group, this.xyTox(x, 0), this.xyTox(end.x, end.y), this.width - 1);
                        if (groupFound)
                            return groupFound;
                    }
                }
                //Right Side diags
                for (var y = this.height - group.length; y > 0; y--) {
                    var distFromHeight = this.height - y;
                    var end;
                    if (distFromHeight > this.width) {
                        end = new BEngine.geom.Point(0, distFromHeight + this.width - 1);
                    }
                    else {
                        end = new BEngine.geom.Point(this.width - distFromHeight, this.height - 1);
                    }
                    var groupFound = this.findGroup(group, this.xyTox(this.width - 1, y), this.xyTox(end.x, end.y), this.width - 1);
                    if (groupFound)
                        return groupFound;
                }
                return null;
            };
            Array2D.prototype.findGroup2D = function (group) {
                var result = this.findGroupOnLines(group);
                if (result)
                    return result;
                result = this.findGroupOnColumns(group);
                if (result)
                    return result;
                result = this.findGroupOnDiags(group);
                if (result)
                    return result;
                return null;
            };
            Array2D.prototype.findGroupsOnLines = function (group) {
                var results = new BEngine.collections.Array1D();
                for (var i = 0; i < this.height; i++) {
                    results.fusionWith(this.findGroups(group, this.xyTox(0, i), this.xyTox(this.width - 1, i)));
                }
                return results;
            };
            Array2D.prototype.findGroupsOnColumns = function (group) {
                var results = new BEngine.collections.Array1D();
                for (var i = 0; i < this.width; i++) {
                    results.fusionWith(this.findGroups(group, this.xyTox(i, 0), this.xyTox(i, this.height - 1), this.width));
                }
                return results;
            };
            Array2D.prototype.findGroupsOnDiags = function (group) {
                var results = new BEngine.collections.Array1D();
                //Left Side diags
                for (var y = this.height - group.length; y > 0; y--) {
                    var distFromHeight = this.height - y;
                    var end;
                    if (distFromHeight > this.width) {
                        end = new BEngine.geom.Point((this.height - 1 - y), this.height - 1);
                    }
                    else {
                        end = new BEngine.geom.Point(this.width - 1, (y + this.width));
                    }
                    results.fusionWith(this.findGroups(group, this.xyTox(0, y), this.xyTox(end.x, end.y), this.width + 1));
                }
                for (var x = 0; x < this.width; x++) {
                    //Left to Right diagonal
                    var distToRight = this.width - x;
                    if (distToRight >= group.length) {
                        var end;
                        if (distToRight > this.height) {
                            end = new BEngine.geom.Point((this.height - 1 + x), this.height - 1);
                        }
                        else {
                            end = new BEngine.geom.Point((this.width - 1), (this.width - 1 - x));
                        }
                        results.fusionWith(this.findGroups(group, this.xyTox(x, 0), this.xyTox(end.x, end.y), this.width + 1));
                    }
                    //Right to Left diagonal
                    var distToLeft = group.length - 1;
                    if (x >= distToLeft) {
                        var end;
                        if (distToLeft > this.height) {
                            end = new BEngine.geom.Point((x - this.height + 1), this.height - 1);
                        }
                        else {
                            end = new BEngine.geom.Point(0, x);
                        }
                        results.fusionWith(this.findGroups(group, this.xyTox(x, 0), this.xyTox(end.x, end.y), this.width - 1));
                    }
                }
                //Right Side diags
                for (var y = this.height - group.length; y > 0; y--) {
                    var distFromHeight = this.height - y;
                    var end;
                    if (distFromHeight > this.width) {
                        end = new BEngine.geom.Point(0, distFromHeight + this.width - 1);
                    }
                    else {
                        end = new BEngine.geom.Point(this.width - distFromHeight, this.height - 1);
                    }
                    results.fusionWith(this.findGroups(group, this.xyTox(this.width - 1, y), this.xyTox(end.x, end.y), this.width - 1));
                }
                return results;
            };
            Array2D.prototype.findGroups2D = function (group) {
                var results = new BEngine.collections.Array1D();
                results.fusionWith(this.findGroupsOnLines(group));
                results.fusionWith(this.findGroupsOnColumns(group));
                results.fusionWith(this.findGroupsOnDiags(group));
                return results;
            };
            Array2D.prototype.toString = function () {
                var ch = "=== " + this.name + " (Array2D) ===\n";
                for (var i = 0; i < this.height; i++) {
                    ch += "[";
                    for (var j = 0; j < this.width; j++) {
                        ch += this.getCell(j, i);
                        if (j === this.width - 1)
                            ch += "]\n";
                        else
                            ch += ",";
                    }
                }
                return ch;
            };
            return Array2D;
        }(collections.Array1D));
        collections.Array2D = Array2D;
    })(collections = BEngine.collections || (BEngine.collections = {}));
})(BEngine || (BEngine = {}));

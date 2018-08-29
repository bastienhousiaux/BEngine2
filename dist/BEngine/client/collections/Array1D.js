"use strict";
/// <reference path="../core/Object.ts"/>
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
        var Array1D = /** @class */ (function (_super) {
            __extends(Array1D, _super);
            function Array1D(length, defaultValue) {
                if (length === void 0) { length = 0; }
                if (defaultValue === void 0) { defaultValue = undefined; }
                var _this = _super.call(this) || this;
                _this.array = new Array();
                _this.array.length = length;
                if (defaultValue != undefined)
                    _this.fill(defaultValue);
                return _this;
            }
            Array1D.prototype.isIndexInRange = function (index) {
                return index >= 0 && index < this.length;
            };
            Array1D.prototype.fill = function (value) {
                for (var i = 0; i < this.array.length; i++)
                    this.array[i] = value;
            };
            Array1D.prototype.concat = function (array) {
                return this.array.concat(array.array);
            };
            Array1D.prototype.fusionWith = function (array) {
                this.array = this.concat(array);
            };
            Array1D.prototype.get = function (x) {
                return this.array[x];
            };
            Array1D.prototype.set = function (x, value) {
                var old = this.get(x);
                this.array[x] = value;
                return old;
            };
            Array1D.prototype.switch = function (i, j) {
                this.set(j, this.set(i, this.get(j)));
            };
            /**
             * return the index of the first occurence of value in the array
             * return -1 if value isn't found
             * @param value value to find
             */
            Array1D.prototype.indexOf = function (value, startIndex) {
                if (startIndex === void 0) { startIndex = 0; }
                return this.array.indexOf(value, startIndex);
            };
            /**
             *
             * @param value
             */
            Array1D.prototype.indexesOf = function (value) {
                var values = [];
                var index = 0;
                while ((index = this.indexOf(value, ++index)) >= 0)
                    values.push(index);
                return values;
            };
            Array1D.prototype.indexOfProp = function (propName, value) {
                for (var i = 0; i < this.length; i++) {
                    if (this.get(i)[propName] === value) {
                        return i;
                    }
                }
                return -1;
            };
            Array1D.prototype.indexesOfProp = function (propName, value) {
                var indexes = [];
                for (var i = 0; i < this.length; i++) {
                    if (this.get(i)[propName] === value) {
                        indexes.push(i);
                    }
                }
                return indexes;
            };
            Array1D.prototype.removeAt = function (index) {
                return this.array.splice(index, 1)[0];
            };
            Array1D.prototype.removeFirst = function (value) {
                var i = this.indexOf(value);
                if (i < 0)
                    return -1;
                else {
                    this.removeAt(i);
                    return i;
                }
            };
            Array1D.prototype.removeAll = function (value) {
                var indexes = this.indexesOf(value);
                for (var i = 0; i < indexes.length; i++)
                    this.removeAt(indexes[i] - i);
                return indexes;
            };
            Array1D.prototype.forEach = function (callback) {
                for (var index = 0; index < this.length; index++) {
                    callback(this.get(index), index, this);
                }
            };
            /**
             * check if a set is in the array,
             * returns the index of the beginning of the first occurence found
             * returns -1 if no occurence found
             *
             * @param set the serie to compare
             */
            Array1D.prototype.indexOfSet = function (set) {
                //can be a problem because no getting back when the pattern is unverified
                //but can't find a set that would make a problem
                var currSetIndex = 0;
                for (var i = 0; i < this.length; i++) {
                    if (set[currSetIndex] === this.get(i))
                        if (++currSetIndex === set.length)
                            return i - set.length + 1;
                        else
                            currSetIndex = 0;
                }
                return -1;
            };
            /**
             * check if a group is in the array,
             * returns the index of the beginning of the first occurence found
             * returns -1 if no occurence found
             *
             * @param set
             */
            Array1D.prototype.indexOfGroup = function (group) {
                var currSetIndex = 0;
                for (var i = 0; i < this.length; i++) {
                    var groupCopy = group.slice();
                    var j = 0;
                    while ((currSetIndex = groupCopy.indexOf(this.get(i + j))) >= 0) {
                        groupCopy.splice(currSetIndex, 1);
                        j++;
                    }
                    if (groupCopy.length === 0)
                        return i;
                }
                return -1;
            };
            /**
             * find the first matching sequence of group in the array (order not important)
             * and returns it with the starting index, returns null if not found
             * @param group
             */
            Array1D.prototype.findGroup = function (group, start, end, step) {
                if (start === void 0) { start = 0; }
                if (end === void 0) { end = this.length - 1; }
                if (step === void 0) { step = 1; }
                var currSetIndex = 0;
                var realGroup;
                for (var i = start; i <= end; i += step) {
                    realGroup = new Array();
                    var groupCopy = group.slice();
                    var j = 0;
                    while ((i + j) <= end && (currSetIndex = groupCopy.indexOf(this.get(i + j))) >= 0) {
                        realGroup.push(groupCopy.splice(currSetIndex, 1)[0]);
                        j += step;
                    }
                    if (groupCopy.length === 0) {
                        var result = new BEngine.collections.ArrayGroupResult(group.length);
                        for (var k = 0; k < group.length; k++) {
                            result.set(k, new collections.ArrayGroupResultItem(i + k * step, realGroup[k]));
                        }
                        return result;
                    }
                }
                return null;
            };
            Array1D.prototype.findGroups = function (group, start, end, step) {
                if (start === void 0) { start = 0; }
                if (end === void 0) { end = this.length - 1; }
                if (step === void 0) { step = 1; }
                var results = new BEngine.collections.Array1D();
                var currStart = start;
                var result = null;
                while (result = this.findGroup(group, currStart, end, step)) {
                    results.push(result);
                    currStart = result.get(0).index + step;
                }
                return results;
            };
            Array1D.prototype.getRandomIndex = function () {
                return Math.floor(Math.random() * this.length);
            };
            Array1D.prototype.getRandomIndexWithValue = function (value) {
                if (this.indexOf(value) !== -1) {
                    var index;
                    while (this.get(index = this.getRandomIndex()) != value)
                        ;
                    return index;
                }
                else {
                    return -1;
                }
            };
            Object.defineProperty(Array1D.prototype, "length", {
                get: function () {
                    return this.array.length;
                },
                enumerable: true,
                configurable: true
            });
            Array1D.prototype.push = function (element) {
                this.array.push(element);
            };
            return Array1D;
        }(BEngine.core.Object));
        collections.Array1D = Array1D;
    })(collections = BEngine.collections || (BEngine.collections = {}));
})(BEngine || (BEngine = {}));

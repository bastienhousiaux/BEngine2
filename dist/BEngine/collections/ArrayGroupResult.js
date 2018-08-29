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
Object.defineProperty(exports, "__esModule", { value: true });
var Array1D_1 = require("./Array1D");
var ArrayGroupResultItem = /** @class */ (function () {
    function ArrayGroupResultItem(index, value) {
        this.index = index;
        this.value = value;
    }
    return ArrayGroupResultItem;
}());
exports.ArrayGroupResultItem = ArrayGroupResultItem;
/**
 * array of index-value pair returned if a pattern as been found in a pattern search (set or group)
 */
var ArrayGroupResult = /** @class */ (function (_super) {
    __extends(ArrayGroupResult, _super);
    function ArrayGroupResult(length) {
        if (length === void 0) { length = 0; }
        return _super.call(this, length) || this;
    }
    /**
     * get the first index (from the original array) of a specific value in the pattern
     * @param value the value to search
     */
    ArrayGroupResult.prototype.getFirstResultIndexOf = function (value) {
        return this.get(this.indexOfProp("value", value)).index;
    };
    /**
     * get one of the indexes (from the original array) of a specific value in the pattern
     * @param value the value to search
     */
    ArrayGroupResult.prototype.getRandResultIndexOf = function (value) {
        var indexes = this.indexesOfProp("value", value);
        return this.get(indexes[Math.floor(Math.random() * indexes.length)]).index;
    };
    return ArrayGroupResult;
}(Array1D_1.Array1D));
exports.ArrayGroupResult = ArrayGroupResult;

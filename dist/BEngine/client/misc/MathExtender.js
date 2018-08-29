"use strict";
var BEngine;
(function (BEngine) {
    var misc;
    (function (misc) {
        var MathX = /** @class */ (function () {
            function MathX() {
            }
            MathX.minIndex = function (array) {
                var min = array[0];
                var minI = 0;
                for (var i = 1; i < array.length; i++) {
                    if (array[i] < min) {
                        min = array[i];
                        minI = i;
                    }
                }
                return minI;
            };
            MathX.maxIndex = function (array) {
                var max = array[0];
                var maxI = 0;
                for (var i = 1; i < array.length; i++) {
                    if (array[i] > max) {
                        max = array[i];
                        maxI = i;
                    }
                }
                return maxI;
            };
            MathX.between = function (value, min, max, strict) {
                if (strict === void 0) { strict = false; }
                if (!strict) {
                    return value >= min && value <= max;
                }
                else {
                    return value > min && value < max;
                }
            };
            MathX.randomInt = function (min, max) {
                return Math.round(BEngine.misc.MathX.randomFloat(min, max));
            };
            MathX.randomFloat = function (min, max) {
                return Math.random() * (max - min) + min;
            };
            return MathX;
        }());
        misc.MathX = MathX;
    })(misc = BEngine.misc || (BEngine.misc = {}));
})(BEngine || (BEngine = {}));

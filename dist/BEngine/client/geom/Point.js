"use strict";
var BEngine;
(function (BEngine) {
    var geom;
    (function (geom) {
        var Point = /** @class */ (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            return Point;
        }());
        geom.Point = Point;
    })(geom = BEngine.geom || (BEngine.geom = {}));
})(BEngine || (BEngine = {}));

"use strict";
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.rectangle = new PIXI.Rectangle(x, y, width, height);
    }
    Rectangle.prototype.intersect = function (rectangle) {
        return this.x + this.width > rectangle.x && this.x < rectangle.x + rectangle.width && this.y + this.height > rectangle.height && this.y < rectangle.y + rectangle.height;
    };
    Object.defineProperty(Rectangle.prototype, "x", {
        get: function () {
            return this.rectangle.x;
        },
        set: function (x) {
            this.rectangle.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "y", {
        get: function () {
            return this.rectangle.y;
        },
        set: function (y) {
            this.rectangle.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this.rectangle.width;
        },
        set: function (width) {
            this.rectangle.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this.rectangle.height;
        },
        set: function (height) {
            this.rectangle.height = height;
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());

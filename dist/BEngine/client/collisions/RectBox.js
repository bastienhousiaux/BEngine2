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
    var collisions;
    (function (collisions) {
        var RectBox = /** @class */ (function (_super) {
            __extends(RectBox, _super);
            function RectBox(x, y, width, height, element) {
                var _this = _super.call(this, element) || this;
                _this.x = x;
                _this.y = y;
                _this.width = width;
                _this.height = height;
                return _this;
            }
            RectBox.prototype.testCollisionWithRectBox = function (hitbox) {
                var lrSide = null;
                var lrDepth;
                var tbSide = null;
                var tbDepth;
                var x = this.getRealX();
                var y = this.getRealY();
                var endX = this.getRealEndX();
                var endY = this.getRealEndY();
                var hx = hitbox.getRealX();
                var hy = hitbox.getRealY();
                var endHx = hitbox.getRealEndX();
                var endHY = hitbox.getRealEndY();
                if (x < hx) {
                    if (endX > hx) {
                        lrSide = "left";
                        lrDepth = endX - hx;
                    }
                }
                else {
                    if (endHx > x) {
                        lrSide = "right";
                        lrDepth = endHx - x;
                    }
                }
                if (y < hy) {
                    if (endY > hy) {
                        tbSide = "top";
                        tbDepth = endY - hy;
                    }
                }
                else {
                    if (endHY > y) {
                        tbSide = "bottom";
                        tbDepth = endHY - y;
                    }
                }
                if (lrSide && tbSide) {
                    if (lrDepth > tbDepth)
                        return { primarySide: tbSide, secondarySide: lrSide, primaryDepth: tbDepth, secondaryDepth: lrDepth };
                    else
                        return { primarySide: lrSide, secondarySide: tbSide, primaryDepth: lrDepth, secondaryDepth: tbDepth };
                }
                return null;
            };
            RectBox.prototype.getRealX = function () {
                return this.x + this.element.x;
            };
            RectBox.prototype.getRealY = function () {
                return this.y + this.element.y;
            };
            RectBox.prototype.getRealEndX = function () {
                return this.getRealX() + this.width;
            };
            RectBox.prototype.getRealEndY = function () {
                return this.getRealY() + this.height;
            };
            RectBox.prototype.show = function (rgb) {
                if (rgb === void 0) { rgb = 0xFF0000; }
                var graphics = new PIXI.Graphics();
                graphics.beginFill(rgb);
                graphics.drawRect(this.x, this.y, this.width, this.height);
                graphics.alpha = 0.5;
                this.element.addChild(graphics);
            };
            return RectBox;
        }(BEngine.collisions.HitBox));
        collisions.RectBox = RectBox;
    })(collisions = BEngine.collisions || (BEngine.collisions = {}));
})(BEngine || (BEngine = {}));

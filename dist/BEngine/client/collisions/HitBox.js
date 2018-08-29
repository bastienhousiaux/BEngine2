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
        var HitBox = /** @class */ (function (_super) {
            __extends(HitBox, _super);
            function HitBox(element) {
                var _this = _super.call(this) || this;
                _this.element = element;
                return _this;
            }
            HitBox.prototype.attachTo = function (element) {
                this.element = element;
                this.element.on(BEngine.core.Object.DESTROYED, this.destroy.bind(this));
                this.emit(BEngine.components.Component.ATTACHED_TO_ELEMENT);
            };
            HitBox.prototype.testCollisionWith = function (hitbox) {
                switch (hitbox.getClassName()) {
                    case "RectBox":
                        return this.testCollisionWithRectBox(hitbox);
                    default:
                        console.log("unknow hitbox " + hitbox.getClassName());
                        return null;
                }
            };
            HitBox.prototype.testCollisionWithRectBox = function (hitbox) {
                return null;
            };
            HitBox.prototype.destroy = function () {
                _super.prototype.destroy.call(this);
            };
            HitBox.prototype.show = function () {
            };
            return HitBox;
        }(BEngine.core.Object));
        collisions.HitBox = HitBox;
    })(collisions = BEngine.collisions || (BEngine.collisions = {}));
})(BEngine || (BEngine = {}));

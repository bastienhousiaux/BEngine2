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
        var SequenceClip = /** @class */ (function (_super) {
            __extends(SequenceClip, _super);
            function SequenceClip(animations, baseAnimation) {
                if (baseAnimation === void 0) { baseAnimation = null; }
                var _this = _super.call(this, new PIXI.Container()) || this;
                _this.animations = {};
                for (var key in animations) {
                    if (!baseAnimation)
                        baseAnimation = key;
                    _this.animations[key] = new BEngine.elements.AnimatedSprite(animations[key]);
                    _this.displayElement.addChild(_this.animations[key].displayElement);
                    _this.animations[key].stop();
                    _this.animations[key].visible = false;
                }
                _this.activateAnimation(baseAnimation);
                return _this;
            }
            SequenceClip.prototype.activateAnimation = function (name) {
                this.animations[name].visible = true;
                this.currentAnimation = name;
                this.animations[name].gotoAndPlay(0);
            };
            SequenceClip.prototype.desactivateAnimation = function (name) {
                this.animations[name].visible = false;
                this.animations[name].stop();
            };
            SequenceClip.prototype.switchAnimation = function (animationName) {
                if (this.currentAnimation != animationName) {
                    var oldAnimation = this.currentAnimation;
                    this.desactivateAnimation(oldAnimation);
                    this.activateAnimation(animationName);
                    this.emit(BEngine.elements.SequenceClip.ANIMATION_SWITCHED, this.currentAnimation, oldAnimation);
                }
            };
            SequenceClip.prototype.getAnimation = function (name) {
                return this.animations[name];
            };
            SequenceClip.prototype.getCurrentAnimation = function () {
                return this.animations[this.currentAnimation];
            };
            SequenceClip.ANIMATION_SWITCHED = "animation switched";
            return SequenceClip;
        }(elements.Element));
        elements.SequenceClip = SequenceClip;
    })(elements = BEngine.elements || (BEngine.elements = {}));
})(BEngine || (BEngine = {}));

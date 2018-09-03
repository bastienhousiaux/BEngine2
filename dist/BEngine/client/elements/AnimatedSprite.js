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
var Element_1 = require("./Element");
var AnimatedSprite = /** @class */ (function (_super) {
    __extends(AnimatedSprite, _super);
    function AnimatedSprite(textures, autoupdate) {
        if (autoupdate === void 0) { autoupdate = true; }
        var _this = _super.call(this, new PIXI.extras.AnimatedSprite(textures, autoupdate)) || this;
        _this.isCompleted = false;
        _this.displayElement.play();
        _this.displayElement.onFrameChange = function (frameNumber) {
            if (frameNumber === (_this.displayElement).textures.length - 1) {
                _this.emit(AnimatedSprite.COMPLETED);
                _this.isCompleted = true;
            }
            else {
                _this.isCompleted = false;
            }
        };
        return _this;
    }
    AnimatedSprite.prototype.play = function () {
        this.displayElement.play();
    };
    AnimatedSprite.prototype.gotoAndPlay = function (frameNumber) {
        this.displayElement.gotoAndPlay(frameNumber);
    };
    AnimatedSprite.prototype.stop = function () {
        this.displayElement.stop();
    };
    AnimatedSprite.prototype.gotoAndStop = function (frameNumber) {
        this.displayElement.gotoAndStop(frameNumber);
    };
    Object.defineProperty(AnimatedSprite.prototype, "loop", {
        get: function () {
            return this.displayElement.loop;
        },
        set: function (loop) {
            this.displayElement.loop = loop;
        },
        enumerable: true,
        configurable: true
    });
    AnimatedSprite.COMPLETED = "completed";
    return AnimatedSprite;
}(Element_1.Element));
exports.AnimatedSprite = AnimatedSprite;
// class AnimatedSprite extends Container{
//     currentAnimation:string;
//     constructor(public animations:Array<Animation>=[],baseAnimation:string=null,x:number=0,y:number=0,pivotX:number=0,pivotY:number=0){
//         super(x,y,pivotX,pivotY);
//         if(animations.length>0)this.initialize(baseAnimation);
//     }
//     initialize(baseAnimation){
//         for(var i=0;i<this.animations.length;i++){
//             this.addChild(this.animations[i].element);
//             this.animations[i].visible=false;
//         }
//         if(baseAnimation){
//             this.getAnimation(baseAnimation).visible=true;
//             this.currentAnimation=baseAnimation;
//         }else{
//             this.animations[0].visible=true;
//             this.currentAnimation=this.animations[0].name;
//         } 
//     }
//     getAnimation(name:string):Animation{
//         for(var i=0;i<this.animations.length;i++){
//             if(this.animations[i].name===name)return this.animations[i];
//         }
//     }
//     changeAnimation(name:string){
//         if(this.currentAnimation!=name){
//             this.getAnimation(this.currentAnimation).visible=false;
//             this.getAnimation(name).visible=true;
//             this.currentAnimation=name;
//         }
//     }
//     gotoAndStop(frame){
//         this.getAnimation(this.currentAnimation).gotoAndStop(frame);
//     }
//     play(){
//         this.getAnimation(this.currentAnimation).play();
//     }
// }

import { AnimatedSprite } from './AnimatedSprite';
import { Element } from "./Element";

const PIXI=require("pixi.js");

export class SequenceClip extends Element {

    currentAnimation: string;
    animations: {[key:string]:any} = {};

    static ANIMATION_SWITCHED: string = "animation switched";


    constructor(animations: {[key:string]:any}, baseAnimation: string = null) {
        super(new PIXI.Container());
        for (var key in animations) {
            if (!baseAnimation) baseAnimation = key;
            this.animations[key] = new AnimatedSprite(animations[key]);
            this.displayElement.addChild(this.animations[key].displayElement);
            this.animations[key].stop();
            this.animations[key].visible = false;

        }
        this.activateAnimation(baseAnimation);


    }

    activateAnimation(name: string) {
        this.animations[name].visible = true;
        this.currentAnimation = name;
        this.animations[name].gotoAndPlay(0);
    }

    desactivateAnimation(name: string) {
        this.animations[name].visible = false;
        this.animations[name].stop();
    }

    switchAnimation(animationName: string) {
        if (this.currentAnimation != animationName) {
            var oldAnimation: string = this.currentAnimation;
            this.desactivateAnimation(oldAnimation);
            this.activateAnimation(animationName);
            this.emit(SequenceClip.ANIMATION_SWITCHED, this.currentAnimation, oldAnimation);
        }
    }

    getAnimation(name: string): AnimatedSprite {
        return this.animations[name];
    }

    getCurrentAnimation(): AnimatedSprite {
        return this.animations[this.currentAnimation];
    }
}

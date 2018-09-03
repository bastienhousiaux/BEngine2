import { Element } from "./Element";

export class AnimatedSprite extends Element {

    static COMPLETED = "completed";


    public isCompleted: boolean = false;
    public displayElement: PIXI.extras.AnimatedSprite;

    constructor(textures: Array<PIXI.Texture> | PIXI.extras.AnimatedSpriteTextureTimeObject[], autoupdate: boolean = true) {
        super(new PIXI.extras.AnimatedSprite(textures, autoupdate));
        this.displayElement.play();
        this.displayElement.onFrameChange = (frameNumber) => {
            if (frameNumber === (this.displayElement).textures.length - 1) {
                this.emit(AnimatedSprite.COMPLETED);
                this.isCompleted = true;
            } else {
                this.isCompleted = false;
            }
        }
    }

    play() {
        this.displayElement.play();
    }

    gotoAndPlay(frameNumber: number) {
        this.displayElement.gotoAndPlay(frameNumber);
    }

    stop() {
        this.displayElement.stop();
    }

    gotoAndStop(frameNumber: number) {
        this.displayElement.gotoAndStop(frameNumber);
    }

    get loop(): boolean {
        return this.displayElement.loop;
    }

    set loop(loop: boolean) {
        this.displayElement.loop = loop;
    }
}

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
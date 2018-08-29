import { BEngineObject } from './../core/BEngineObject';
import { Element } from './Element';
/// <reference path="Element.ts" />
export class Sprite extends Element {

    constructor(texture: PIXI.Texture) {
        super(new PIXI.Sprite(texture));
    }

    get texture(): PIXI.Texture {
        return (<PIXI.Sprite>this.displayElement).texture;
    }

    set texture(texture: PIXI.Texture) {
        (<PIXI.Sprite>this.displayElement).texture = texture;
    }

    clone(): BEngineObject {
        var sprite: Sprite = new Sprite((<PIXI.Sprite>this.displayElement).texture);
        return sprite;
    }

}

import { SequenceClip } from './../elements/SequenceClip';
import { AnimatedSprite } from './../elements/AnimatedSprite';
import { Container } from './../elements/Container';
import { Array1D } from '../../collections/Array1D';
import { Sprite } from '../elements/Sprite';
import { Element } from '../elements/Element';
import { RessourceManager } from '../managers/RessourceManager';
import { Container } from 'pixi.js';

export class Layer extends Element {

    constructor(public elements: Array1D<Element>) {
        super(new PIXI.Container());
        // console.log(Array1D);

        /*this.elements.forEach((element, x, array): void => {
            this.displayElement.addChild(element.displayElement);
        });*/
    }

    createSprite(texture: string | PIXI.Texture, spriteArgs: {[k: string]: any} = {}): Sprite {
        if (typeof texture == "string") texture = RessourceManager.getTexture(texture);
        var sprite = new Sprite(texture);
        for (var key in spriteArgs) sprite.setProp(key,spriteArgs[key]);
        this.displayElement.addChild(sprite.displayElement);
        // this.elements.push(sprite);
        return sprite;
    }

    createContainer(containerArgs: {[key:string]:any} = {}): Container {
        var container = new Container();
        for (var key in containerArgs) container.setProp(key,containerArgs[key]);
        this.displayElement.addChild(container.displayElement);
        this.elements.push(container);
        return container;
    }

    createAnimatedSprite(textures: Array<PIXI.Texture>, spriteArgs:{[key:string]:any} = {}): AnimatedSprite {
        var animatedSprite = new AnimatedSprite(textures);
        for (var key in spriteArgs) animatedSprite.setProp(key,spriteArgs[key]);
        this.displayElement.addChild(animatedSprite.displayElement);
        this.elements.push(animatedSprite);
        return animatedSprite;
    }

    createSequenceClip(animations: {}, baseAnimation: string, clipArgs: {[key:string]:any} = {}): SequenceClip {
        var clip = new SequenceClip(animations, baseAnimation);
        for (var key in clipArgs) clip.setProp(key,clipArgs[key]);
        this.displayElement.addChild(clip.displayElement);
        this.elements.push(clip);
        return clip;
    }

    createTilemap(tilesetName: string, x: number, y: number, tileWidth: number, tileHeight: number,
        width: number, height: number, hPadding: number = 0, vPadding: number = 0, tilemapArgs: {} = {}): BEngine.elements.Tilemap {
        var tilemap = new BEngine.elements.Tilemap(tilesetName, x, y, tileWidth, tileHeight, width, height, hPadding, vPadding);
        for (var key in tilemapArgs) tilemap[key] = tilemapArgs[key];
        this.displayElement.addChild(tilemap.displayElement);
        this.elements.push(tilemap);
        return tilemap;
    }
}

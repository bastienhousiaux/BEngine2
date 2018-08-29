import { Element } from "../client/elements/Element";

export class Layer extends Element {

    constructor(public elements: Array1D<Element> = null) {
        super(new PIXI.Container());

        if (elements === null) this.elements = new Array1D<Element>();

        this.elements.forEach((element, x, array): void => {
            this.displayElement.addChild(element.displayElement);
        });
    }

    createSprite(texture: string | PIXI.Texture, spriteArgs: {} = {}): BEngine.elements.Sprite {
        if (typeof texture == "string") texture = RessourceManager.getTexture(texture);
        var sprite = new BEngine.elements.Sprite(texture);
        for (var key in spriteArgs) sprite[key] = spriteArgs[key];
        this.displayElement.addChild(sprite.displayElement);
        this.elements.push(sprite);
        return sprite;
    }

    createContainer(containerArgs: {} = {}): BEngine.elements.Container {
        var container = new BEngine.elements.Container();
        for (var key in containerArgs) container[key] = containerArgs[key];
        this.displayElement.addChild(container.displayElement);
        this.elements.push(container);
        return container;
    }

    createAnimatedSprite(textures: Array<PIXI.Texture>, spriteArgs: {} = {}): BEngine.elements.AnimatedSprite {
        var animatedSprite = new BEngine.elements.AnimatedSprite(textures);
        for (var key in spriteArgs) animatedSprite[key] = spriteArgs[key];
        this.displayElement.addChild(animatedSprite.displayElement);
        this.elements.push(animatedSprite);
        return animatedSprite;
    }

    createSequenceClip(animations: {}, baseAnimation: string, clipArgs: {} = {}): BEngine.elements.SequenceClip {
        var clip = new BEngine.elements.SequenceClip(animations, baseAnimation);
        for (var key in clipArgs) clip[key] = clipArgs[key];
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

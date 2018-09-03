import { Layer } from './Layer';
import { Element } from './../elements/Element';
import { Array1D } from '../../collections/Array1D';

export class Scene extends Element {
    constructor(public layers: Array1D<Layer> = null, ) {
        super(new PIXI.Container());

        if (layers === null) this.layers = new Array1D<Layer>();

        this.layers.forEach((layer, x, array): void => {
            this.displayElement.addChild(layer.displayElement);
        });
    }

    createLayer(elements: Array1D<Element> = new Array1D<Element>(),
        layerArgs: {[key:string ]:any} = {}): Layer {
        var layer = new Layer(/*elements*/);
        this.layers.push(layer);
        for (var key in layerArgs) layer.setProp(key,layerArgs[key]);
        this.displayElement.addChild(layer.displayElement);
        return layer;
    }
}

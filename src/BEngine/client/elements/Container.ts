import { Element } from "./Element";

export class Container extends Element {
    constructor() {
        super(new PIXI.Container());
    }

}


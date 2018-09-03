import { BEngineEmitter } from './../core/BEngineEmitter';
/// <reference path="../components/Component.ts"/>
export class Element extends BEngineEmitter {

    // components:Array<BEngine.components.Component>=[];
    displayElement: PIXI.Container;

    // hitboxs:BEngine.collections.Array1D<BEngine.collisions.HitBox>;

    constructor(displayElement?: PIXI.Container) {
        super();
        this.displayElement = displayElement;
        this.interactive = true;
    }

    // addHitBox(hitbox:BEngine.collisions.HitBox,name?:string):BEngine.collisions.HitBox{
    //    if(name)hitbox.name=name;
    //    if(!this.hitboxs)this.hitboxs=new BEngine.collections.Array1D<BEngine.collisions.HitBox>();
    //    this.hitboxs.push(hitbox);
    //    hitbox.attachTo(this);
    //    return hitbox;
    // }

    // getHitbox(name:string):BEngine.collisions.HitBox{
    //     return null;
    //     //return this.hitboxs.getFirstWithProp("name",name);
    // }

    // addComponent(component:BEngine.components.Component):BEngine.components.Component{
    //     this.components.push(component);
    //     component.attachTo(this);
    //     return component;
    // }

    // removeComponent(component:BEngine.components.Component){
    //     this.components.splice(this.components.indexOf(component,1));
    // }

    // getComponent(className:string):BEngine.components.Component{
    //     for(var i=0;i<this.components.length;i++)if(this.components[i].getClassName()===className)return this.components[i];
    //     return null;
    // }

    hitTest(element: Element): boolean {
        var h1 = this.displayElement.getBounds();
        var h2 = element.displayElement.getBounds();
        return h1.x + h1.width > h2.x && h1.x < h2.x + h2.width && h1.y + h1.height > h2.y && h1.y < h2.y + h2.height;
    }

    destroy() {
        this.displayElement.destroy();
        // super.destroy();
    }

    addChild(element:Element | PIXI.Container) {
        if (element instanceof Element) {
            return this.displayElement.addChild(element.displayElement);
        } else {
            return this.displayElement.addChild(element);
        }
    }

    addChildAt(element: Element | PIXI.Container, index: number) {
        if (element instanceof Element) {
            return this.displayElement.addChildAt(element.displayElement, index);
        } else {
            return this.displayElement.addChildAt(element, index);
        }
    }

    removeChildAt(index: number) {
        this.displayElement.removeChildAt(index);
    }

    get x(): number {
        return this.displayElement.x;
    }

    set x(x: number) {
        this.displayElement.x = x;
    }

    get y(): number {
        return this.displayElement.y;
    }

    set y(y: number) {
        this.displayElement.y = y;
    }

    get width(): number {
        return this.displayElement.width;
    }

    set width(width: number) {
        this.displayElement.width = width;
    }

    get height(): number {
        return this.displayElement.height;
    }

    set height(height: number) {
        this.displayElement.height = height;
    }

    get visible(): boolean {
        return this.displayElement.visible;
    }

    set visible(visible: boolean) {
        this.displayElement.visible = visible;
    }

    get pivotX(): number {
        return this.displayElement.pivot.x;
    }

    set pivotX(pivotX: number) {
        this.displayElement.pivot.x = pivotX;
    }

    get pivotY(): number {
        return this.displayElement.pivot.y;
    }

    set pivotY(pivotY: number) {
        this.displayElement.pivot.y = pivotY;
    }

    get pivot(): PIXI.Point | PIXI.ObservablePoint {
        return this.displayElement.pivot;
    }

    set pivot(pivot: PIXI.Point | PIXI.ObservablePoint) {
        this.displayElement.pivot = pivot;
    }

    set interactive(interactive: boolean) {
        this.displayElement.interactive = interactive;
    }

    get interactive(): boolean {
        return this.displayElement.interactive;
    }

    set scaleX(scaleX: number) {
        this.displayElement.scale.x = scaleX;
    }

    get scaleX(): number {
        return this.displayElement.scale.x;
    }

    set scaleY(scaleY: number) {
        this.displayElement.scale.y = scaleY;
    }

    get scaleY(): number {
        return this.displayElement.scale.y;
    }

    clone(): any {
        console.log("clone can't be used on element");
        return null;
    }
}

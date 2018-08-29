const PIXI=require("pixi.js");

import { BEngineObject } from "./BEngineObject";

export class BEngineEmitter extends BEngineObject{
    
    eventEmitter:PIXI.utils.EventEmitter;

    constructor(name?:string){
        super(name);

        this.eventEmitter=new PIXI.utils.EventEmitter();
    }

    destroy(){
        // BEngine.core.Object.ObjectList.splice(BEngine.core.Object.ObjectList.indexOf(this),1);
        this.emit(BEngineObject.DESTROYED,this);
    }

    emit(event:string|symbol,...args:any[]):boolean{
        return this.eventEmitter.emit(event,...args);
    }

    addListener(event:string|symbol,fn:Function,context?:any):PIXI.utils.EventEmitter{
        return this.eventEmitter.addListener(event,fn,context);
    }
}
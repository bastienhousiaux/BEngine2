const PIXI=require("pixi.js");

import { BEngineObject } from "./core/BEngineObject";



export class App{

    public app:PIXI.Application;




    constructor(width:number,height:number,params:{}){
        this.app=new PIXI.Application(800,600,{backgroundColor:0XFF0000});
        document.body.appendChild(this.app.view);
        var t=new BEngineObject();
        console.log(t.getClassName());
    }
}
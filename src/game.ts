import { RessourceManager } from './BEngine/client/managers/RessourceManager';
import { App } from "./BEngine/client/App";

window.onload=function(){
    RessourceManager.load({
        "img":"games/img.png"
    },init);
}

function init(){
    var app=new App(800,600,{backgroundColor:0x555555});
    app.createSprite("img",{x:100,y:100});
}
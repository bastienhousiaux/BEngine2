"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var BEngineObject = /** @class */ (function () {
    // static currentUid=0;
    // static ObjectList:BEngine.core.Object[]=[];
    function BEngineObject(name) {
        // this.uid=Object.currentUid++;
        // BEngine.core.Object.ObjectList.push(this);
        this.name = (name) ? name : this.getClassName();
        this.props = {};
    }
    BEngineObject.prototype.getProp = function (name) {
        return this.props[name];
    };
    BEngineObject.prototype.setProp = function (name, value) {
        this.props[name] = value;
    };
    // static getObjectByUID(uid:number):BEngine.core.Object{
    //     var list=BEngine.core.Object.ObjectList
    //     for(var i=0;i<list.length;i++)if(list[i].uid===uid)return list[i];
    //     return null;
    // }
    // static getObjectByName(name:string):BEngine.core.Object{
    //     var list=BEngine.core.Object.ObjectList
    //     for(var i=0;i<list.length;i++)if(list[i].name===name)return list[i];
    //     return null;
    // }
    BEngineObject.prototype.getClassName = function () {
        return this.constructor.toString().match(/\w+/g)[1];
    };
    BEngineObject.DESTROYED = "destroyed";
    return BEngineObject;
}());
exports.BEngineObject = BEngineObject;

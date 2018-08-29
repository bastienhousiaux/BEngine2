"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Object = /** @class */ (function (_super) {
    __extends(Object, _super);
    // static currentUid=0;
    // static ObjectList:BEngine.core.Object[]=[];
    function Object(name) {
        var _this = _super.call(this) || this;
        // this.uid=Object.currentUid++;
        // BEngine.core.Object.ObjectList.push(this);
        _this.name = (name) ? name : _this.getClassName();
        return _this;
    }
    Object.prototype.getProp = function (name) {
        return this[name];
    };
    Object.prototype.setProp = function (name, value) {
        this[name] = value;
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
    Object.prototype.getClassName = function () {
        return this.constructor.toString().match(/\w+/g)[1];
    };
    Object.prototype.destroy = function () {
        // BEngine.core.Object.ObjectList.splice(BEngine.core.Object.ObjectList.indexOf(this),1);
        this.emit(BEngine.core.Object.DESTROYED, this);
    };
    Object.prototype.clone = function () {
        var c = new BEngine.core.Object();
        c.name = this.name;
        return c;
    };
    Object.DESTROYED = "destroyed";
    return Object;
}(PIXI.utils.EventEmitter));
exports.Object = Object;

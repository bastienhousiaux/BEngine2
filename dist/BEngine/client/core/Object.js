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
var BEngineObject = /** @class */ (function (_super) {
    __extends(BEngineObject, _super);
    // static currentUid=0;
    // static ObjectList:BEngine.core.Object[]=[];
    function BEngineObject(name) {
        var _this = _super.call(this) || this;
        // this.uid=Object.currentUid++;
        // BEngine.core.Object.ObjectList.push(this);
        _this.name = (name) ? name : _this.getClassName();
        _this.props = {};
        return _this;
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
        return this.constructor.toString();
        // return this.constructor.toString().match(/\w+/g)[1];
    };
    BEngineObject.DESTROYED = "destroyed";
    return BEngineObject;
}(PIXI.utils.EventEmitter));
exports.BEngineObject = BEngineObject;

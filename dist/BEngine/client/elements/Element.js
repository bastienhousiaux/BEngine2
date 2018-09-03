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
var BEngineEmitter_1 = require("./../core/BEngineEmitter");
/// <reference path="../components/Component.ts"/>
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    // hitboxs:BEngine.collections.Array1D<BEngine.collisions.HitBox>;
    function Element(displayElement) {
        var _this = _super.call(this) || this;
        _this.displayElement = displayElement;
        _this.interactive = true;
        return _this;
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
    Element.prototype.hitTest = function (element) {
        var h1 = this.displayElement.getBounds();
        var h2 = element.displayElement.getBounds();
        return h1.x + h1.width > h2.x && h1.x < h2.x + h2.width && h1.y + h1.height > h2.y && h1.y < h2.y + h2.height;
    };
    Element.prototype.destroy = function () {
        this.displayElement.destroy();
        // super.destroy();
    };
    Element.prototype.addChild = function (element) {
        if (element instanceof Element) {
            return this.displayElement.addChild(element.displayElement);
        }
        else {
            return this.displayElement.addChild(element);
        }
    };
    Element.prototype.addChildAt = function (element, index) {
        if (element instanceof Element) {
            return this.displayElement.addChildAt(element.displayElement, index);
        }
        else {
            return this.displayElement.addChildAt(element, index);
        }
    };
    Element.prototype.removeChildAt = function (index) {
        this.displayElement.removeChildAt(index);
    };
    Object.defineProperty(Element.prototype, "x", {
        get: function () {
            return this.displayElement.x;
        },
        set: function (x) {
            this.displayElement.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "y", {
        get: function () {
            return this.displayElement.y;
        },
        set: function (y) {
            this.displayElement.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "width", {
        get: function () {
            return this.displayElement.width;
        },
        set: function (width) {
            this.displayElement.width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "height", {
        get: function () {
            return this.displayElement.height;
        },
        set: function (height) {
            this.displayElement.height = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "visible", {
        get: function () {
            return this.displayElement.visible;
        },
        set: function (visible) {
            this.displayElement.visible = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "pivotX", {
        get: function () {
            return this.displayElement.pivot.x;
        },
        set: function (pivotX) {
            this.displayElement.pivot.x = pivotX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "pivotY", {
        get: function () {
            return this.displayElement.pivot.y;
        },
        set: function (pivotY) {
            this.displayElement.pivot.y = pivotY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "pivot", {
        get: function () {
            return this.displayElement.pivot;
        },
        set: function (pivot) {
            this.displayElement.pivot = pivot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "interactive", {
        get: function () {
            return this.displayElement.interactive;
        },
        set: function (interactive) {
            this.displayElement.interactive = interactive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "scaleX", {
        get: function () {
            return this.displayElement.scale.x;
        },
        set: function (scaleX) {
            this.displayElement.scale.x = scaleX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "scaleY", {
        get: function () {
            return this.displayElement.scale.y;
        },
        set: function (scaleY) {
            this.displayElement.scale.y = scaleY;
        },
        enumerable: true,
        configurable: true
    });
    Element.prototype.clone = function () {
        console.log("clone can't be used on element");
        return null;
    };
    return Element;
}(BEngineEmitter_1.BEngineEmitter));
exports.Element = Element;

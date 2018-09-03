"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var RessourceManager = /** @class */ (function () {
    function RessourceManager() {
    }
    // static animations:Array<Animation>=[];
    RessourceManager.load = function (ressources, callback) {
        if (ressources === void 0) { ressources = {}; }
        for (var key in ressources) {
            if (typeof ressources[key] === "object") {
                for (var i = ressources[key]["start"]; i <= ressources[key]["end"]; i++) {
                    var path = ressources[key]["basePath"];
                    if (i / 1000 < 1)
                        path += "0";
                    if (i / 100 < 1)
                        path += "0";
                    if (i / 10 < 1)
                        path += "0";
                    path += i + "." + ressources[key]["extension"];
                    RessourceManager.loader.add(key + i, path);
                }
            }
            else {
                //if(/.{4}$/.exec(ressources[key])[0]==="json")
                RessourceManager.loader.add(key, ressources[key]);
            }
        }
        RessourceManager.loader.load(function (loader, resources) {
            for (var t in loader.resources) {
                if (loader.resources[t].texture)
                    RessourceManager.ressources[t] = loader.resources[t].texture;
                else
                    RessourceManager.ressources[t] = loader.resources[t];
            }
            callback();
        });
    };
    RessourceManager.getTexture = function (name) {
        return RessourceManager.ressources[name];
    };
    RessourceManager.getSprite = function (name) {
        return RessourceManager.ressources[name].data;
    };
    RessourceManager.getJSON = function (name) {
        return RessourceManager.getSprite(name);
    };
    RessourceManager.getRessourceBrut = function (name) {
        return RessourceManager.ressources[name];
    };
    RessourceManager.getNumberedAnimation = function (baseName, start, end) {
        var textures = new Array();
        for (var i = start; i <= end; i++)
            textures.push(this.getTexture(baseName + i));
        return textures;
    };
    // static addAnimation(animation:Animation){
    //     RessourceManager.animations.push(animation);
    // }
    // static getAnimation(name:string){
    //     for(var i=0;i<RessourceManager.animations.length;i++){
    //         if(RessourceManager.animations[i].name===name)return RessourceManager.animations[i];
    //         return null;
    //     }
    // }
    RessourceManager.addRessource = function (name, ressource) {
        this.ressources[name] = ressource;
    };
    RessourceManager.ressources = {};
    RessourceManager.loader = PIXI.loader;
    return RessourceManager;
}());
exports.RessourceManager = RessourceManager;

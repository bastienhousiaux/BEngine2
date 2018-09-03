const PIXI=require("pixi.js");
export class RessourceManager {

    static ressources: { [k: string]: any } = {};
    static loader = PIXI.loader;
    // static animations:Array<Animation>=[];

    static load(ressources:{ [k: string]: any }= {}, callback: Function) {
        for (var key in ressources) {
            if (typeof ressources[key] === "object") {
                for (var i = ressources[key]["start"]; i <= ressources[key]["end"]; i++) {
                    var path = ressources[key]["basePath"];
                    if (i / 1000 < 1) path += "0";
                    if (i / 100 < 1) path += "0";
                    if (i / 10 < 1) path += "0";
                    path += i + "." + ressources[key]["extension"];
                    RessourceManager.loader.add(key + i, path);
                }
            } else {
                //if(/.{4}$/.exec(ressources[key])[0]==="json")
                RessourceManager.loader.add(key, ressources[key]);

            }
        }

        RessourceManager.loader.load(
            function (loader:PIXI.loaders.Loader, 
            resources:{ [k: string]: any }) {
            for (var t in loader.resources) {
                if (loader.resources[t].texture)
                    RessourceManager.ressources[t] = loader.resources[t].texture;
                else
                    RessourceManager.ressources[t] = loader.resources[t];
            }
            callback();
        })
    }

    static getTexture(name: string): PIXI.Texture {
        return RessourceManager.ressources[name];
    }

    static getSprite(name: string) {
        return RessourceManager.ressources[name].data;
    }

    static getJSON(name: string) {
        return RessourceManager.getSprite(name);
    }

    static getRessourceBrut(name: string) {
        return RessourceManager.ressources[name];
    }

    static getNumberedAnimation(baseName: string, start: number, end: number): Array<PIXI.Texture> {
        var textures: Array<PIXI.Texture> = new Array<PIXI.Texture>();
        for (var i = start; i <= end; i++)textures.push(this.getTexture(baseName + i));
        return textures;
    }

    // static addAnimation(animation:Animation){
    //     RessourceManager.animations.push(animation);
    // }

    // static getAnimation(name:string){
    //     for(var i=0;i<RessourceManager.animations.length;i++){
    //         if(RessourceManager.animations[i].name===name)return RessourceManager.animations[i];
    //         return null;
    //     }
    // }

    static addRessource(name: string, ressource: any) {
        this.ressources[name] = ressource;
    }

}
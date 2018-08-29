const PIXI=require("pixi.js");

export class BEngineObject{

    

    // uid:number;
    name:string;

    props:{[k: string]: any};

    static DESTROYED="destroyed";

    // static currentUid=0;

    // static ObjectList:BEngine.core.Object[]=[];

    constructor(name?:string){
        
        // this.uid=Object.currentUid++;
        // BEngine.core.Object.ObjectList.push(this);
        this.name=(name)?name:this.getClassName();
        this.props={};
    }

    getProp(name:string):any{
        return this.props[name];
    }

    setProp(name:string,value:any){
        this.props[name]=value;
    }

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
    
    getClassName():string{
        return this.constructor.toString().match(/\w+/g)[1];
    }

    

    // clone():Object{
    //     var c=new Object();
    //     c.name=this.name;
    //     return c;
    // }

    // static logAll(){
    //     for(var i=0;i<BEngine.core.Object.ObjectList.length;i++)
    //         console.log(BEngine.core.Object.ObjectList[i]);
    // }

    // static logAllNames(){
    //     for(var i=0;i<BEngine.core.Object.ObjectList.length;i++)
    //         console.log(BEngine.core.Object.ObjectList[i].name);
    // }

    

}
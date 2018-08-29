import { SequelizeManager } from './SequelizeManager';
export class SequelizeModel{

    model:any;

    /**
     * 
     * @param sequelizeManager 
     * @param name name of the model
     * @param props {type:sequelizeType,allowNull?:boolean,defaultValue?:type,unique?:string|boolean,
     *               }
     */
    constructor(public sequelizeManager:SequelizeManager,name:string,props:any){
        this.model=this.sequelizeManager.sequelizeInstance.define(name,props);
    }

    findById(id:number,callback:(data:any)=>void,dataOnly:boolean=true):void{
        this.model.findById(id).then((data:any)=>{callback(dataOnly?data.dataValues:data)});
    }

    findOne(where:any,callback:(data:any)=>void,dataOnly:boolean=true):void{
        this.model.findOne(where).then((data:any)=>{callback(dataOnly?data.dataValues:data)});
    }

    find(where:any,callback:(data:any)=>void,dataOnly:boolean=true,options:any={}):void{
        options.where=where;
        this.model.findAll(options).then((data:any[])=>{callback(dataOnly?data.map((arrData:any)=>{return arrData.dataValues}):data)});
    }

    findAll(callback:(data:any)=>void,dataOnly:boolean=true):void{
        this.find({},callback);
    }

    create(values:any,callback:(data:any)=>void, options?:any):void{
        this.model.create(values,options).then(callback);
    }

    update(where:any,values:any,callback:(data:any)=>void,options:any={}):void{
        options.where=where;
        this.model.update(values,options).then(callback);
    }

    updateById(id:number,values:any,callback:(data:any)=>void,options:any={}):void{
        options.where={id:id};
        this.model.update(values,options).then(callback);
    }

    delete(where:any,callback:(data:any)=>void,options:any={}):void{
        options.where=where;
        this.model.destroy(options).then(callback);
    }

    deleteById(id:number,callback:(data:any)=>void,options:any={}):void{
        options.where={id:id};
        this.model.destroy(options).then(callback);
    }
}
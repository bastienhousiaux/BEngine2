const mysql=require("mysql");

export class MysqlQueryBuilder{

    public connection:any;

    constructor(public databaseName:string,
        public host:string='localhost',
        public user:string='root',
        public password:string=''){
            this.open();
    }

    open(){
        this.connection = mysql.createConnection({
            host     : this.host,
            user     : this.user,
            password : this.password,
            database : this.databaseName
        });

        this.connection.connect();
    }

    close(){
        this.connection.end((err:any)=>{
            if(err)console.log(err);
            else console.log("la connection s'est bien terminée");
        });
    }

    async select(table:string,champs:string[]=["*"],where:string="1"){
        return await this.connection.query("SELECT "+champs.join(",")+" FROM "+table+" WHERE " +where
        ,(error:any,results:any,fields:any)=>{
            return results;
        });
    }
}
import { SequelizeModel } from './SequelizeModel';
const _Sequelize = require('sequelize');

export class SequelizeManager{
    public sequelizeInstance:any;
    constructor(public dbName:string,public host:string='localhost',public user:string='root',
        public password:string='',public language:string='mysql'){
        this.sequelizeInstance = new _Sequelize(dbName, user, password, {
            host: host,
            dialect: language,
            operatorsAliases: false,
          
            pool: {
              max: 5,
              min: 0,
              acquire: 30000,
              idle: 10000
            }
        });
    }

    testConnection():void{
        this.sequelizeInstance
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err:any) => {
            console.error('Unable to connect to the database:', err);
        });
    }

    createModel(name:string,props:any):SequelizeModel{
        return new SequelizeModel(this,name,props);
    }
}

export enum Sequelize{
    STRING=_Sequelize.STRING,
    TEXT=_Sequelize.TEXT,
    INTEGER=_Sequelize.INTEGER,
    BIGINT=_Sequelize.BIGINT,
    FLOAT=_Sequelize.FLOAT,
    REAL=_Sequelize.REAL,
    DOUBLE=_Sequelize.DOUBLE,
    DECIMAL=_Sequelize.DECIMAL,
    DATE=_Sequelize.DATE,
    DATEONLY=_Sequelize.DATEONLY,
    BOOLEAN=_Sequelize.BOOLEAN,
    ENUM=_Sequelize.ENUM,
    ARRAY=_Sequelize.ARRAY,
    JSON=_Sequelize.JSON,
    JSONB=_Sequelize.JSONB,
    BLOB=_Sequelize.BLOB,
    UUID=_Sequelize.UUID,
    UUIDV4=_Sequelize.UUIDV4,
    CIDR=_Sequelize.CIDR,
    INET=_Sequelize.INET,
    MACADDR=_Sequelize.MACADDR,
    RANGE=_Sequelize.RANGE,
    GEOMETRY=_Sequelize.GEOMETRY
}
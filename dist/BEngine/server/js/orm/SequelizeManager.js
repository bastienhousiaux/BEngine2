"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SequelizeModel_1 = require("./SequelizeModel");
var _Sequelize = require('sequelize');
var SequelizeManager = /** @class */ (function () {
    function SequelizeManager(dbName, host, user, password, language) {
        if (host === void 0) { host = 'localhost'; }
        if (user === void 0) { user = 'root'; }
        if (password === void 0) { password = ''; }
        if (language === void 0) { language = 'mysql'; }
        this.dbName = dbName;
        this.host = host;
        this.user = user;
        this.password = password;
        this.language = language;
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
    SequelizeManager.prototype.testConnection = function () {
        this.sequelizeInstance
            .authenticate()
            .then(function () {
            console.log('Connection has been established successfully.');
        })
            .catch(function (err) {
            console.error('Unable to connect to the database:', err);
        });
    };
    SequelizeManager.prototype.createModel = function (name, props) {
        return new SequelizeModel_1.SequelizeModel(this, name, props);
    };
    return SequelizeManager;
}());
exports.SequelizeManager = SequelizeManager;
var Sequelize;
(function (Sequelize) {
    Sequelize[Sequelize["STRING"] = _Sequelize.STRING] = "STRING";
    Sequelize[Sequelize["TEXT"] = _Sequelize.TEXT] = "TEXT";
    Sequelize[Sequelize["INTEGER"] = _Sequelize.INTEGER] = "INTEGER";
    Sequelize[Sequelize["BIGINT"] = _Sequelize.BIGINT] = "BIGINT";
    Sequelize[Sequelize["FLOAT"] = _Sequelize.FLOAT] = "FLOAT";
    Sequelize[Sequelize["REAL"] = _Sequelize.REAL] = "REAL";
    Sequelize[Sequelize["DOUBLE"] = _Sequelize.DOUBLE] = "DOUBLE";
    Sequelize[Sequelize["DECIMAL"] = _Sequelize.DECIMAL] = "DECIMAL";
    Sequelize[Sequelize["DATE"] = _Sequelize.DATE] = "DATE";
    Sequelize[Sequelize["DATEONLY"] = _Sequelize.DATEONLY] = "DATEONLY";
    Sequelize[Sequelize["BOOLEAN"] = _Sequelize.BOOLEAN] = "BOOLEAN";
    Sequelize[Sequelize["ENUM"] = _Sequelize.ENUM] = "ENUM";
    Sequelize[Sequelize["ARRAY"] = _Sequelize.ARRAY] = "ARRAY";
    Sequelize[Sequelize["JSON"] = _Sequelize.JSON] = "JSON";
    Sequelize[Sequelize["JSONB"] = _Sequelize.JSONB] = "JSONB";
    Sequelize[Sequelize["BLOB"] = _Sequelize.BLOB] = "BLOB";
    Sequelize[Sequelize["UUID"] = _Sequelize.UUID] = "UUID";
    Sequelize[Sequelize["UUIDV4"] = _Sequelize.UUIDV4] = "UUIDV4";
    Sequelize[Sequelize["CIDR"] = _Sequelize.CIDR] = "CIDR";
    Sequelize[Sequelize["INET"] = _Sequelize.INET] = "INET";
    Sequelize[Sequelize["MACADDR"] = _Sequelize.MACADDR] = "MACADDR";
    Sequelize[Sequelize["RANGE"] = _Sequelize.RANGE] = "RANGE";
    Sequelize[Sequelize["GEOMETRY"] = _Sequelize.GEOMETRY] = "GEOMETRY";
})(Sequelize = exports.Sequelize || (exports.Sequelize = {}));

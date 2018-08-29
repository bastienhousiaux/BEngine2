"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SequelizeModel = /** @class */ (function () {
    /**
     *
     * @param sequelizeManager
     * @param name name of the model
     * @param props {type:sequelizeType,allowNull?:boolean,defaultValue?:type,unique?:string|boolean,
     *               }
     */
    function SequelizeModel(sequelizeManager, name, props) {
        this.sequelizeManager = sequelizeManager;
        this.model = this.sequelizeManager.sequelizeInstance.define(name, props);
    }
    SequelizeModel.prototype.findById = function (id, callback, dataOnly) {
        if (dataOnly === void 0) { dataOnly = true; }
        this.model.findById(id).then(function (data) { callback(dataOnly ? data.dataValues : data); });
    };
    SequelizeModel.prototype.findOne = function (where, callback, dataOnly) {
        if (dataOnly === void 0) { dataOnly = true; }
        this.model.findOne(where).then(function (data) { callback(dataOnly ? data.dataValues : data); });
    };
    SequelizeModel.prototype.find = function (where, callback, dataOnly, options) {
        if (dataOnly === void 0) { dataOnly = true; }
        if (options === void 0) { options = {}; }
        options.where = where;
        this.model.findAll(options).then(function (data) { callback(dataOnly ? data.map(function (arrData) { return arrData.dataValues; }) : data); });
    };
    SequelizeModel.prototype.findAll = function (callback, dataOnly) {
        if (dataOnly === void 0) { dataOnly = true; }
        this.find({}, callback);
    };
    SequelizeModel.prototype.create = function (values, callback, options) {
        this.model.create(values, options).then(callback);
    };
    SequelizeModel.prototype.update = function (where, values, callback, options) {
        if (options === void 0) { options = {}; }
        options.where = where;
        this.model.update(values, options).then(callback);
    };
    SequelizeModel.prototype.updateById = function (id, values, callback, options) {
        if (options === void 0) { options = {}; }
        options.where = { id: id };
        this.model.update(values, options).then(callback);
    };
    SequelizeModel.prototype.delete = function (where, callback, options) {
        if (options === void 0) { options = {}; }
        options.where = where;
        this.model.destroy(options).then(callback);
    };
    SequelizeModel.prototype.deleteById = function (id, callback, options) {
        if (options === void 0) { options = {}; }
        options.where = { id: id };
        this.model.destroy(options).then(callback);
    };
    return SequelizeModel;
}());
exports.SequelizeModel = SequelizeModel;

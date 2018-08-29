"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var hbs = require("hbs");
var Server = /** @class */ (function () {
    function Server(routes, publicFolders, rootDirectory, port, initialStart) {
        if (routes === void 0) { routes = {}; }
        if (rootDirectory === void 0) { rootDirectory = __dirname; }
        if (port === void 0) { port = 3000; }
        if (initialStart === void 0) { initialStart = true; }
        this.port = port;
        this.server = express();
        this.server.set('view engine', 'hbs');
        if (publicFolders) {
            for (var i = 0; i < publicFolders.length; i++) {
                console.log(rootDirectory + publicFolders[i].path);
                if (publicFolders[i].pseudoPath)
                    this.server.use(publicFolders[i].pseudoPath, express.static(rootDirectory + publicFolders[i].path));
                else
                    this.server.use(express.static(rootDirectory + publicFolders[i].path));
            }
        }
        if (routes.get)
            for (var i = 0; i < routes.get.length; i++)
                this.get(routes.get[i].path, routes.get[i].callback);
        if (routes.post)
            for (var i = 0; i < routes.post.length; i++)
                this.post(routes.post[i].path, routes.post[i].callback);
        if (initialStart)
            this.start();
    }
    Server.prototype.get = function (path, callback) {
        this.server.get(path, callback);
    };
    Server.prototype.post = function (path, callback) {
        this.server.post(path, callback);
    };
    Server.prototype.all = function (path, callbak) {
        this.server.all(path, callbak);
    };
    Server.prototype.use = function (path, callbak) {
        this.server.use(path, callbak);
    };
    Server.prototype.addSocketIO = function () {
        var _this = this;
        this.http = require('http').Server(this.server);
        this.io = require('socket.io')(this.http);
        this.io.on('connection', function (socket) {
            console.log('a user connected');
        });
        this.stop();
        this.http.listen(this.port, function () {
            console.log('socket on port ' + _this.port + '!');
        });
    };
    Server.prototype.start = function () {
        var _this = this;
        this.handler = this.server.listen(this.port, function () {
            console.log('server on port ' + _this.port + '!');
        });
    };
    Server.prototype.stop = function () {
        this.handler.close();
        console.log("server closed");
    };
    return Server;
}());
exports.Server = Server;

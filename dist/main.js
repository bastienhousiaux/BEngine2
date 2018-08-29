"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = require("./BEngine/server/js/Server");
var server = new Server_1.Server({
    get: [
        {
            path: "/",
            callback: function (req, res) {
                res.render('machin.hbs', {
                    titre: 'hello world'
                });
            }
        }
    ]
}, [
    {
        path: '/views',
    },
    {
        path: '/views/games',
        pseudoPath: '/games'
    }
], __dirname);

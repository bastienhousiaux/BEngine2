"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RessourceManager_1 = require("./BEngine/client/managers/RessourceManager");
var App_1 = require("./BEngine/client/App");
window.onload = function () {
    RessourceManager_1.RessourceManager.load({
        "img": "games/img.png"
    }, init);
};
function init() {
    var app = new App_1.App(800, 600, { backgroundColor: 0x555555 });
    app.createSprite("img", { x: 100, y: 100 });
}

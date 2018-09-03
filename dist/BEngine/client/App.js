"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var Scene_1 = require("./displayArchitecture/Scene");
var Layer_1 = require("./../displayArchitecture/Layer");
var Array1D_1 = require("./../collections/Array1D");
var App = /** @class */ (function () {
    // public scenes:Array1D<Scene>;
    function App(width, height, params, xScreen, yScreen, scenes) {
        if (params === void 0) { params = {}; }
        if (xScreen === void 0) { xScreen = 0; }
        if (yScreen === void 0) { yScreen = 0; }
        if (scenes === void 0) { scenes = null; }
        this.scenes = scenes;
        // public scenes:Array<BEngine.displayArchitecture.Scene>;
        this.screenChanged = false;
        this.app = new PIXI.Application(width, height, params);
        this.initialHeight = height;
        this.initialWidth = width;
        if (scenes === null) {
            var layer = new Layer_1.Layer();
            var arLayer = new Array1D_1.Array1D();
            arLayer.push(layer);
            var scene = new Scene_1.Scene(arLayer);
            this.scenes = new Array1D_1.Array1D();
            this.scenes.push(scene);
        }
        App.screen = new PIXI.Rectangle(xScreen, yScreen, width, height);
        if (!App.defaultApp) {
            App.defaultApp = this;
            // App.mouseManager = new BEngine.managers.MouseManager(this);
            // App.keyboardManager = new BEngine.managers.KeyboardManager([]);
        }
        document.body.appendChild(this.app.view);
        this.app.stage.interactive = true;
        for (var i = 0; i < this.scenes.length; i++) {
            this.app.stage.addChild(this.scenes.get(i).displayElement);
        }
        this.currentScene = this.scenes.get(0);
        if (params["fitScreen"]) {
            // this.fitScreen();
            window.addEventListener('resize', function () {
                // window.setTimeout(this.fitScreen.bind(this), 100);
            });
        }
        this.stageArea = this.createSprite(null, { width: width, height: height });
        this.stageArea.displayElement.interactive = true;
        this.stageArea.name = "stageArea";
        this.stageArea.displayElement.on("pointerdown", function () {
            // BEngine.App.mouseManager.emit(BEngine.managers.MouseManager.STAGE_CLICK);
        });
        console.log('%c BEngine 2.0', 'background: #35A; color: #FFF');
    }
    App.prototype.createSprite = function (texture, spriteArgs, scene, layer) {
        if (spriteArgs === void 0) { spriteArgs = {}; }
        if (scene === void 0) { scene = 0; }
        if (layer === void 0) { layer = 0; }
        return this.scenes.get(scene).layers.get(layer).createSprite(texture, spriteArgs);
    };
    return App;
}());
exports.App = App;

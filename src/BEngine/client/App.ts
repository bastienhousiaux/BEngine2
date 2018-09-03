const PIXI = require("pixi.js");

import { Container } from './elements/Container';
import { Scene } from './displayArchitecture/Scene';
import { BEngineObject } from "./core/BEngineObject";
import { Sprite } from './elements/Sprite';
import { Layer } from './../displayArchitecture/Layer';
import { Array1D } from './../collections/Array1D';


export class App {

    public app: PIXI.Application;
    static defaultApp: App;

    // static mouseManager:MouseManager;
    // static keyboardManager:KeyboardManager;
    static screen: PIXI.Rectangle;
    // public scenes:Array<BEngine.displayArchitecture.Scene>;

    private screenChanged: boolean = false;

    initialHeight: number;
    initialWidth: number;

    currentScene: Scene;

    stageArea: Container;

    // public scenes:Array1D<Scene>;


    constructor(width: number, height: number, params: { [key: string]: any } = {}, xScreen: number = 0, yScreen: number = 0,
        public scenes: Array1D<Scene> = null) {
        this.app = new PIXI.Application(width, height, params);
        

        this.initialHeight = height;
        this.initialWidth = width;

        if (scenes === null) {
            var layer = new Layer();
            var arLayer = new Array1D<Layer>();
            arLayer.push(layer);
            var scene = new Scene(arLayer)
            this.scenes = new Array1D<Scene>();
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

            window.addEventListener('resize', () => {
                // window.setTimeout(this.fitScreen.bind(this), 100);
            });
        }
        this.stageArea = this.createSprite(null, { width: width, height: height });
        this.stageArea.displayElement.interactive = true;
        this.stageArea.name = "stageArea";
        this.stageArea.displayElement.on("pointerdown", () => {
            // BEngine.App.mouseManager.emit(BEngine.managers.MouseManager.STAGE_CLICK);
        })

        console.log('%c BEngine 2.0', 'background: #35A; color: #FFF');
    }

    createSprite(texture: string | PIXI.Texture, spriteArgs: {} = {}, scene: number = 0, layer: number = 0): Sprite {
        return this.scenes.get(scene).layers.get(layer).createSprite(texture, spriteArgs);
    }
}
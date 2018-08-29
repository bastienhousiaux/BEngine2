"use strict";
// const PIXI=require("pixi.js");
// namespace BEngine{
//     export class App extends PIXI.Application{
//         static defaultApp:App;
//         static mouseManager:BEngine.managers.MouseManager;
//         static keyboardManager:BEngine.managers.KeyboardManager;
//         static screen:PIXI.Rectangle;
//         // public scenes:Array<BEngine.displayArchitecture.Scene>;
//         private screenChanged:boolean=false;
//         initialHeight:number;
//         initialWidth:number;
//         currentScene:BEngine.displayArchitecture.Scene;
//         stageArea:BEngine.elements.Container;
//         constructor(width:number,height:number,params:{},xScreen:number=0,yScreen:number=0,
//         public scenes:BEngine.collections.Array1D<BEngine.displayArchitecture.Scene>=null
//         ){
//             super(width, height, params);
//             this.initialHeight=height;
//             this.initialWidth=width;
//             if(scenes===null){
//                 var layer=new BEngine.displayArchitecture.Layer();
//                 var arLayer=new BEngine.collections.Array1D<BEngine.displayArchitecture.Layer>();
//                 arLayer.push(layer);
//                 var scene=new BEngine.displayArchitecture.Scene(arLayer)
//                 this.scenes=new BEngine.collections.Array1D<BEngine.displayArchitecture.Scene>();
//                 this.scenes.push(scene);
//             }
//             App.screen=new PIXI.Rectangle(xScreen,yScreen,width,height);
//             if(!App.defaultApp){
//                 App.defaultApp=this;
//                 App.mouseManager=new BEngine.managers.MouseManager(this);
//                 App.keyboardManager=new BEngine.managers.KeyboardManager([]);
//             }
//             document.body.appendChild(this.view);
//             this.stage.interactive=true;
//             for(var i=0;i<this.scenes.length;i++){
//                 this.stage.addChild(this.scenes.get(i).displayElement);
//             }
//             this.currentScene=this.scenes.get(0);
//             if(params["fitScreen"]){
//                 this.fitScreen();
//                 window.addEventListener('resize',()=>{
//                     window.setTimeout(this.fitScreen.bind(this),100);
//                 });
//             }
//             this.stageArea=this.createSprite(null,{width:width,height:height});
//             this.stageArea.displayElement.interactive=true;
//             this.stageArea.name="stageArea";
//             this.stageArea.displayElement.on("pointerdown",()=>{
//                BEngine.App.mouseManager.emit(BEngine.managers.MouseManager.STAGE_CLICK);
//             })
//             console.log('%c BEngine 0.2', 'background: #35A; color: #FFF');
//         }
//         addFuncToTicker(func){
//             this.ticker.add(func);
//         }
//         removeFuncFromTicker(func){
//             this.ticker.remove(func);
//         }
//         createSprite(texture:string | PIXI.Texture,spriteArgs:{}={},scene:number=0,layer:number=0):BEngine.elements.Sprite{
//             return this.scenes.get(scene).layers.get(layer).createSprite(texture,spriteArgs);
//         }
//         createContainer(containerArgs:{}={},scene:number=0,layer:number=0):BEngine.elements.Container{
//             return this.scenes.get(scene).layers.get(layer).createContainer(containerArgs);
//         }
//         createAnimatedSprite(textures:Array<PIXI.Texture>,spriteArgs:{}={},scene:number=0,layer:number=0):BEngine.elements.AnimatedSprite{
//             return this.scenes.get(scene).layers.get(layer).createAnimatedSprite(textures,spriteArgs);
//         }
//         createTilemap(tilesetName:string,x:number,y:number,tileWidth:number,tileHeight:number,
//         width:number,height:number,hPadding:number=0,vPadding:number=0,tilemapArgs:{}={},
//         scene:number=0,layer:number=0):BEngine.elements.Tilemap{
//             return this.scenes.get(scene).layers.get(layer).createTilemap(tilesetName,x,y,tileWidth,tileHeight,width,height,hPadding,vPadding,tilemapArgs);
//         }
//         createScene(layers:BEngine.collections.Array1D<BEngine.displayArchitecture.Layer>=null):BEngine.displayArchitecture.Scene{
//             var scene=new BEngine.displayArchitecture.Scene(layers);
//             this.scenes.push(scene);
//             this.stage.addChild(scene.displayElement);
//             return scene;
//         }
//         createLayer(elements:BEngine.collections.Array1D<BEngine.elements.Element>=null,layerArgs:{}={},scene:number=0):BEngine.displayArchitecture.Layer{
//             return this.scenes.get(scene).createLayer(elements,{});;
//         }
//         fitScreen(){
//             var rHeight=this.renderer.height;
//             var rWidth=this.renderer.width;
//             var screenHeight=window.innerHeight;
//             var screenWidth=window.innerWidth;
//             var ratioHeight=screenHeight/rHeight;
//             var ratioWidth=screenWidth/rWidth;
//             if(ratioHeight<ratioWidth){
//                 this.renderer.resize(rWidth*ratioHeight,rHeight*ratioHeight);
//                 this.stage.scale.x=this.renderer.width/this.initialWidth;
//                 this.stage.scale.y=this.renderer.height/this.initialHeight;
//             }else{
//                 this.renderer.resize(rWidth*ratioWidth,rHeight*ratioWidth);
//                 this.stage.scale.x=this.renderer.width/this.initialWidth;
//                 this.stage.scale.y=this.renderer.height/this.initialHeight;
//             }
//             var marginLeft=(screenWidth-this.renderer.width)/2;
//             this.renderer.view.style.marginLeft=marginLeft+"px";
//         }
//     }
// }

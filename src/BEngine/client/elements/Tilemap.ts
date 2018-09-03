import { Element } from './Element';

export class Tilemap extends Element {

    grid: BEngine.grids.SizedGrid;
    dataArray: BEngine.collections.Array2D<any>;
    elementArray: BEngine.collections.Array2D<BEngine.elements.Sprite>;

    layers

    static CELL_CLICKED: string = "cell clicked";

    constructor(public tilesetName: string, public x: number, public y: number,
        public tileWidth: number, public tileHeight: number, public width: number,
        public height: number, public hPadding: number = 0, public vPadding: number = 0) {

        super(new PIXI.Container());
        this.grid = new BEngine.grids.SizedGrid(tileWidth, tileHeight, width / tileWidth, height / tileHeight, x, y, hPadding, vPadding);
        this.dataArray = new BEngine.collections.Array2D(width / tileWidth, height / tileHeight, null);
        this.elementArray = new BEngine.collections.Array2D(width / tileWidth, height / tileHeight, null);

        this.displayElement.on("click", () => {
            var caseX = this.grid.getGridXFromRealX(BEngine.managers.MouseManager.getMouseX());
            var caseY = this.grid.getGridYFromRealY(BEngine.managers.MouseManager.getMouseY());
            this.emit(BEngine.elements.Tilemap.CELL_CLICKED,
                caseX,
                caseY,
                BEngine.managers.MouseManager.getMouseX(),
                BEngine.managers.MouseManager.getMouseY(),
                this.dataArray.getCell(caseX, caseY)
            )

        });
    }

    loadFromJSON(name: string) {
        var json = BEngine.managers.RessourceManager.getJSON(name);
        this.grid.forEach((x, y, rX, rY, grid) => {
            var el = this.addChild(new PIXI.Sprite(BEngine.managers.RessourceManager.getTexture(this.tilesetName + json.tiles[y][x])));
            this.dataArray.setCell(x, y, json[y][x]);
            el.x = rX - this.x;
            el.y = rY - this.y;
        })
    }

    loadFromArray(array: number[][]) {
        this.grid.forEach((x, y, rX, rY, grid) => {
            if (array[y][x] != undefined) {
                var el = new BEngine.elements.Sprite(BEngine.managers.RessourceManager.getTexture(this.tilesetName + array[y][x]));
                this.addChild(el);
                this.elementArray.setCell(x, y, el);
                this.dataArray.setCell(x, y, array[y][x]);
                el.x = rX - this.x;
                el.y = rY - this.y;
            }
        });
    }

    setCell(x: number, y: number, textureNumber: number): BEngine.elements.Sprite {
        if (this.elementArray.getCell(x, y) === null) {
            var spr = new BEngine.elements.Sprite(BEngine.managers.RessourceManager.getTexture(this.tilesetName + textureNumber));
            this.addChild(spr);
            spr.x = this.grid.getRealXFromGridX(x);
            spr.y = this.grid.getRealYFromGridY(y);
            this.elementArray.setCell(x, y, spr);
            this.dataArray.setCell(x, y, textureNumber);
            return spr;
        } else {
            return this.switchCellTexture(x, y, textureNumber);
        }
    }


    // removeCell(x:number,y:number){
    //     this.removeChildAt(y*this.grid.nbCol+x);
    // }

    switchCellTexture(x: number, y: number, textureNumber: number): BEngine.elements.Sprite {
        var spr: BEngine.elements.Sprite = this.elementArray.getCell(x, y);
        spr.texture = BEngine.managers.RessourceManager.getTexture(this.tilesetName + textureNumber);
        this.dataArray.setCell(x, y, textureNumber);
        return spr;
    }



    switchCells(x1: number, y1: number, x2: number, y2: number) {
        var el1 = this.elementArray.getCell(x1, y1);
        var el2 = this.elementArray.getCell(x2, y2);
        if (el1) {
            el1.x = this.grid.getRealXFromGridX(x2);
            el1.y = this.grid.getRealYFromGridY(y2);
        }

        if (el2) {
            el2.x = this.grid.getRealXFromGridX(x1);
            el2.y = this.grid.getRealYFromGridY(y1);
        }

        var tmp = this.dataArray.getCell(x1, y1);
        this.dataArray.setCell(x1, y1, this.dataArray.getCell(x2, y2));
        this.dataArray.setCell(x2, y2, tmp);

        this.elementArray.setCell(x1, y1, el2);
        this.elementArray.setCell(x2, y2, el1);
    }
}

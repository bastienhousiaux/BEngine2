const express = require("express");
const hbs = require("hbs");

export class Server {

    public server: any;
    public http: any;
    public io: any;
    public handler: any;

    constructor(routes: {
            get?: { path: string, callback: (req: any, res: any) => void }[],
            post?: { path: string, callback: (req: any, res: any) => void }[]
        } = {}, 
        publicFolders?: { path: string, pseudoPath?: string }[],
        rootDirectory: string = __dirname,
        public port: number = 3000,
        initialStart: boolean = true) {

        this.server = express();
        this.server.set('view engine', 'hbs');

        if (publicFolders) {
            for (let i = 0; i < publicFolders.length; i++) {
                console.log(rootDirectory+publicFolders[i].path);
                if (publicFolders[i].pseudoPath) 
                    this.server.use(publicFolders[i].pseudoPath,express.static(rootDirectory+publicFolders[i].path));
                else
                    this.server.use(express.static(rootDirectory+publicFolders[i].path));
            }
        }
        if (routes.get)
            for (let i = 0; i < routes.get.length; i++)
                this.get(routes.get[i].path, routes.get[i].callback);
        if (routes.post)
            for (let i = 0; i < routes.post.length; i++)
                this.post(routes.post[i].path, routes.post[i].callback);
        if (initialStart) this.start();
    }

    get(path: string, callback: (req: any, res: any) => void): void {
        this.server.get(path, callback);
    }

    post(path: string, callback: (req: any, res: any) => void): void {
        this.server.post(path, callback);
    }

    all(path: string, callbak: (req: any, res: any, next: Function) => void): void {
        this.server.all(path, callbak);
    }

    use(path: string, callbak: (req: any, res: any, next: Function) => void): void {
        this.server.use(path, callbak);
    }

    addSocketIO() {
        this.http = require('http').Server(this.server);
        this.io = require('socket.io')(this.http);
        this.io.on('connection', function (socket: any) {
            console.log('a user connected');
        });
        this.stop();
        this.http.listen(this.port, () => {
            console.log('socket on port ' + this.port + '!')
        });
    }

    start() {
        this.handler = this.server.listen(this.port, () => {
            console.log('server on port ' + this.port + '!')
        });
    }

    stop() {
        this.handler.close();
        console.log("server closed");
    }
}
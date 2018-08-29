import { Server } from './BEngine/server/js/Server';


let server=new Server({
    get:[
        {
            path:"/",
            callback:(req,res)=>{
                res.render('machin.hbs',{
                    titre:'hello world'
                })
            }
            
        }
    ]
},
[
    {
        path:'/views',
    },
    {
        path:'/views/games',
        pseudoPath:'/games'
    }
],
__dirname);
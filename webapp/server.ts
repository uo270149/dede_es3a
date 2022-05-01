import express,{Application} from 'express'; 
import path from "path";
//for using an import here we need to configure the tsconfig.json
//setting the option module to commonjs

var app: Application = express()

//En Heroku se asigna el puerto de forma dinámica. (process.env.PORT)
let port: number = 3000
if(process.env.PORT) {
 port = parseInt(process.env.PORT)
}
export
  async function obtenerport2(){
    return  port;
  }

  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

app.listen(port, ():void => {
    console.log('Webapp started on port '+ port);
}).on("error",(error:Error)=>{
    console.error('Error occured: ' + error.message);
});
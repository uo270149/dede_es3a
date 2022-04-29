import express,{Application} from 'express'; 
//for using an import here we need to configure the tsconfig.json
//setting the option module to commonjs

var app: Application = express()

//En Heroku se asigna el puerto de forma dinámica. (process.env.PORT)
let port: number = 3000
if(process.env.PORT) {
 console.log('no se prueba supongo jaja')
 port = parseInt(process.env.PORT)
}

export
  async function obtenerport(){
    return port as number;
  }

app.use(express.static('build'))

app.listen(port, ():void => {
    console.log('Webapp started on port '+ port);
}).on("error",(error:Error)=>{
    console.error('Error occured: ' + error.message);
});
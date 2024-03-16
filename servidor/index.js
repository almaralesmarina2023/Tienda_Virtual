const express=require('express');
const conectarBD=require('./config/db');
const router=require('./config/routes/api/usuarios');

//Creamos el servidor
const app=express();

//Conectamos a la BD
conectarBD();

//Middleware
app.use(express.json());

app.use('/api/usuarios',router);

const PUERTO=process.env.PUERTO || 3000;
app.listen(3000,()=>{
    console.log("Hola Mundo");
})
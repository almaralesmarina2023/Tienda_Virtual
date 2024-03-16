const express=require('express');
const conectarBD=require('./config/db');

//Creamos el servidor
const app=express();

//Conectamos a la BD
conectarBD();

const PUERTO=process.env.PUERTO || 3000;
app.listen(3000,()=>{
    console.log("Hola Mundo");
})
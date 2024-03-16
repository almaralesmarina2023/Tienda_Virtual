const mongoose=require('mongoose');
require('dotenv').config({path:'variable.env'});

const conectarBD=async ()=>{
    try{
        await mongoose.connect(process.env.DB_MONGO)
        console.log('DB conectada');
    }
    catch(error){
        console.log(error);
        exit(1);
    }
}

module.exports=conectarBD;
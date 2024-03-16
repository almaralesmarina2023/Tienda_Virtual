const {model,Schema}=require('mongoose');

const userSchema=new Schema({
      nombreUsuario:String,
      email:String,
      password:String,
      rol:{
           type:String,
           default:'regular'
      }
});

module.exports=model('usuario',userSchema);


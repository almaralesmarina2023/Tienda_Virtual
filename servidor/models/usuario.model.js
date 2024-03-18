const {model,Schema}=require('mongoose');

const userSchema=new Schema({
      nombreUsuario:{
            type:String,
            required:true,
      },
      email:{
            type      : String, 
            unique    : true, 
            required  : true, 
            maxlength : 100,
      },
      password:{
            type:String,
            required:true,
      },
      rol:{
           type:String,
           default:'regular'
      }
});

module.exports=model('usuario',userSchema);


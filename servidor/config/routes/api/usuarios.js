const router=require('express').Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const Usuario=require('../../../models/usuario.model');

//POST/api/usuarios/registrar
router.post('/registrar',async (req,res)=>{
    try{
       const pass= bcrypt.hashSync(req.body.password,12); 
       req.body.password=pass;
       const usuario=await Usuario.findOne({email:req.body.email}); 
       if(usuario==null){
          //Creamos el usuario
          const usuario=await Usuario.create(req.body);
          res.json(usuario);
       }
       else
          res.json({error:'Ya existe el correo'+` ${usuario.email}`+' en la base de datos'});
    } 
    catch(error){
         res.json({error:error.message});
    }
});

//POST/api/usuarios/login
router.post('/login',async (req,res)=>{
    //Comprobar si existe el email
    const usuario=await Usuario.findOne({email:req.body.email});
   if(!usuario){
    return res.json({error:'Usuario no registrado'});
   } 

   const eq=bcrypt.compareSync(req.body.password,usuario.password);
   if(!eq){
    return res.json({error:'Error en email/contraseña'})
   }

   res.json({
      succcess:'login correcto',
      token:createToken(usuario),
    });
});

function createToken(usuario){
    const payload={
        user_id:usuario.user_id,
        user_role:usuario.user_role
    }
    return jwt.sign(payload,'en un lugar de la mancha');
}
module.exports=router;
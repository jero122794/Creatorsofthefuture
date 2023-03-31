const db = require("../database/models");
const { validationResult } = require('express-validator');
let defaultPfp = "";

const controller = {
  index: async (req, res) => {
    try {

      const perfilesDB = await db.usuarios.findAll({include: {all: true,nested: true}});

      if (perfilesDB) {
        res.render("home", {title: 'home',perfiles: perfilesDB})
        console.log(perfilesDB)
      }
    } catch (error) {
      console.log(error);
    }
  },
registro: async(req, res) => {
try{
  res.render("register", {title: 'Registro'})
}
catch(error){

}
},
login: async(req, res) => {
  try{
    res.render("login", {title: 'Login'})
  }
  catch(error){
  
  }
},
edicionperfil: async (req, res) => {
  try {
    const usuarios = await db.usuarios.findOne({ where: { id: req.params.id } },{include: {all: true,nested: true}});

    if (usuarios) {
      console.log(usuarios)
      res.render("edit", {title: 'Editando'+ usuarios.nombre, perfil: usuarios})
    }
  } catch (error) {
    res.send(error);
  }
},
  detallesperfil: async (req, res) => {

    try {

      const usuarios = await db.usuarios.findOne({ where: { email: req.params.perfil } },{include: {all: true,nested: true}});

      if (usuarios) {
        console.log(usuarios)
        res.render("profileDetail", {title:usuarios.nombre, perfil: usuarios})
      }

    } catch (error) {
      res.send(error);

    }

  },
  create: function (req, res) {

    let errors=validationResult(req)
        console.log(errors)
    if(!errors.isEmpty()){
      res.render("register",{errors: errors.array(), old:req.body})
    }
    else{
      db.usuarios.create(
        {
          nombre: req.body.nombre,
          apellidos: req.body.apellidos,
          email: req.body.email,
          celular: req.body.celular,
          rol:req.body.rol,
          descripcion: req.body.descripcion,
          image_url: req.body.imagen? req.body.imagen : "defaultPfp.png",
          academia:req.body.academia,
          linkedin_url:req.body.linkedin_url,
          cv_url: req.body.cv_url,
          contrasena: req.body.contrasena,
          github_url: req.body.github,
          last_viewed: 0,
          views_count: 0,
          activo: 1,
          admin: 0
        }
      ).then(usuarios => usuarios)
        .catch(error => res.send(error))
        res.redirect("/login")
    }
  },
  modify: (req,res) =>{ 

    let errors=validationResult(req)
        
    if(!errors.isEmpty()){
      res.render("edit",{errors:errors.array(), old:req.body})
    }
    else{
      
    //cambiar imagenes, si no se envia la imagen sigue siendo la pasada
    let imagen =req.body.imagereserva;

    if (req.file != undefined) {
        imagen=req.file.filename;
    }

        db.usuarios.update({ // se cambia  de req.body a req.body
          nombre: req.body.nombre,
          apellidos: req.body.apellidos,
          email: req.body.email,
          celular: req.body.celular,
          rol:req.body.rol,
          descripcion: req.body.descripcion,
          image_url: req.body.image_url,
          academia:req.body.academia,
          linkedin_url:req.body.linkedin_url,
          cv_url: req.body.cv_url,
          contrasena: req.body.contrasena,
          github_url: req.body.github,
          
        },{
            where: {
                id: req.params.id
            }
        })
        .then(usuarios => {
            res.render("profileDetail") 
          
        })
        .catch(error => res.send(error))
        res.redirect('/login')
    
    }
    
},
destroy: (req,res) =>{
    db.usuarios.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/')
},
check:(req,res)=>{
  let errors = validationResult(req)
  console.log(errors)
  //res.send({errors})
  if(errors.isEmpty()){
      db.usuarios.findOne({
          where:{
              email: req.body.email
          }
      }).then(usuarios => {
          let contrasena

              console.log(usuarios)
              contrasena=usuarios.contrasena

              let validator=bcrypt.compareSync(req.body.password,contrasena)
              console.log(validator)

              if(validator==true){
                  res.redirect('/home')

              }
              if (validator==false){
                  let incorrecto ="Su correo o contraseña es incorrecto";

                 res.render("login",{errors:errors.array(), old:req.body,incorrecto})
              }

  }).catch(errors => {
      res.render("login")
      console.log(errors)

      })

  }
  if(!errors.isEmpty()){
      let incorrecto
      res.render("login",{errors:errors.array(), old:req.body,incorrecto})
  }


},
}

module.exports = controller;
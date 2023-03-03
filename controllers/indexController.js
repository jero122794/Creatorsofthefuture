const db = require("../database/models");
const { validationResult } = require('express-validator');
let defaultPfp = "";

const controller = {
  index: async (req, res) => {
    try {

      const perfilesDB = await db.usuarios.findAll();

      if (perfilesDB) {
        res.render("home", {title: 'home',perfiles: perfilesDB})
        console.log(perfilesDB)
      } 

    } catch (error) {
      console.log(error);
    }
  },registro: async(req, res) => {
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
log: (req, res) => {
  const perfil = db.usuarios.findOne({where: {email: req.body.mail}})
  const perfilId =perfil.id;
  let route = "/detalles-perfil/" + perfilId;
  res.redirect(route)
},
edicionperfil: async (req, res) => {
  try {
    const perfilDB = await db.usuarios.findOne({ where: { id: req.params.id } });

    if (perfilDB) {
      console.log(perfilDB)
      res.render("edicion", {title: 'Editando'+ perfilDB.nombre, perfil: perfilDB})
    }
  } catch (error) {
    res.send(error);
  }
},
  detallesperfil: async (req, res) => {

    try {

      const perfilDB = await db.usuarios.findOne({ where: { email: req.params.perfil } });

      if (perfilDB) {
        console.log(perfilDB)
        res.render("profileDetail", {title:perfilDB.nombre,perfil: perfilDB})
      }

    } catch (error) {
      res.send(error);

    }

  },
  create: function (req, res) {

    let errors=validationResult(req)
        
    if(!errors.isEmpty()){
      res.render("register",{errors:errors.array(), old:req.body})
    }
    else{
      db.usuarios.create(
        {
          nombre: req.body.nombre,
          apellidos: req.body.apellidos,
          email: req.body.email,
          celular: req.body.celular,
          rol:false,//debe estar en falso por default 
          descripcion: req.body.descripcion,
          image_url: req.body.image_url? req.body.image_url : defaultPfp,
          academia:req.body.academia,
          linkedin_url:Req.body.linkedin_url,
          cv_url: req.body.cv_url,
          views_count: req.body.views_count,
          last_viewed:req.body.last_viewed
        }
      ).then(usuarios => res.send(usuarios))
        .catch(error => res.send(error))
        res.redirect('/login')
    }
  },
  modify: (req,res) =>{ 

    let errors=validationResult(req)
        
    if(!errors.isEmpty()){
      res.render("modify",{errors:errors.array(), old:req.body})
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
          //rol:req.body.rol,
          descripcion: req.body.descripcion,
          image_url: req.body.image_url,
          academia:req.body.academia,
          linkedin_url:Req.body.linkedin_url,
          cv_url: req.body.cv_url,
          views_count: req.body.views_count,
          last_viewed:req.body.last_viewed
        },{
            where: {
                id: req.params.id
            }
        })
        .then(usuarios => {
           // res.send(usuarios)
          
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
}
}

module.exports = controller;
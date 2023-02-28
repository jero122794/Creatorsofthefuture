const db = require("../database/models");

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
  destallesperfil: async (req, res) => {

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
    
    db.usuarios.create(
      {
        nombre: req.body.name,
        apellidos: req.body.lastName,
        email: req.body.mail,
        celular: req.bodoy.phNumber,
        rol:false,//debe estar en falso por default // ¿¿Por que??
        descripcion: req.body.description,
        image_url: req.bodoy.image_url,
        academia:req.bodoy.academy,
        linkedin_url:Req.bodoy.linkedIn,
        cv_url: req.bodoy.cv,
        views_count: req.bodoy.views_count,
        last_viewed:req.body.last_viewed// ¿Por que?
      }
    ).then(usuarios => res.send(usuarios))
      .catch(error => res.send(error))
  },
  modify: (req,res) =>{ 

    //cambiar imagenes, si no se envia la imagen sigue siendo la pasada
    let imagen =req.body.imagereserva;
    if (req.file != undefined) {
        imagen=req.file.filename;
    }

        db.usuarios.update({
          nombre: req.body.name,
          apellidos: req.body.lastName,
          email: req.body.mail,
          celular: req.bodoy.phNumber,
          rol:req.body.role,
          descripcion: req.body.description,
          image_url: req.bodoy.image_url,
          academia:req.bodoy.academy,
          linkedin_url:Req.bodoy.linkedIn,
          cv_url: req.bodoy.cv
        },{
            where: {
                id: req.params.id
            }
        })
        .then(usuarios => {
            res.send(usuarios)
            //res.render('.', {usuarios}) Esto queda por ver
        })
        .catch(error => res.send(error))
        res.redirect('/')
    
    
},
destroy: (req,res) =>{
    db.usuarios.destroy({
        where: {
            id: req.params.id
        }
    })
 
},
}

module.exports = controller;
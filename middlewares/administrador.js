const db = require("../database/models");

const sesion = {
    admin: async (req, res,next) => {
      try {
  
        const usuario = await db.usuarios.findOne({where: {
            email: req.body.email //req.body.email
        }});
        if (usuario) {
            if (usuario.admin = 0) {
              req.session.adminnombre =  usuario.nombre;
              req.session.admin = true;
              console.log("Cookies de administrador")
              console.log(req.session)
              next();
            }
            
            if (usuario.admin = 1)
            {
              req.session.creadornombre=  usuario.nombre;
              req.session.creador =  true;
              console.log("Cookies de adminatrador")
              console.log(req.session);
              next();
            }
        }

      } catch (error) {
        console.log(error);
      }
    }
}

module.exports = sesion;
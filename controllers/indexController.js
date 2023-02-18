const db = require("../database/models");

const controller = {
  home: async (req, res) => {
    try {

      const perfilesDB = await db.usuarios.findAll();

      if (perfilesDB) {

        const perfiles = perfilesDB.map(perfil => {
          return {
            id: perfil.id,
            nombre: perfil.nombre,
            apellido: perfil.apellidos,
            email: perfil.email,
            celular: perfil.celular,
            descripcion: perfil.descripcion,
            imagen: perfil.image_url,
            academia: perfil.academia,
            linkedin: perfil.linkedin_url,
            cv: perfil.cv_url
          }
        })

        res.status(200).json({
          "perfiles": perfiles,
          "status": 200,
          "msg": "ok",
          "endpoint": "/api/home"
        });
      } else {
        res.status(404).json({ 'msg': 'No hay datos para mostrar' });
      }

    } catch (error) {
      console.log(error);
      res.status(500).json({ 'msg': '500 - Ha ocurrido un error interno' });

    }
  },
/*   registro: (req, res) => {

  },
  login: (req, res) => {

  }, */
  edicionperfil: async (req, res) => {

    try {

      const perfilDB = await db.usuarios.findOne({ where: { email: req.params.perfil } });

      if (perfilDB) {

        res.status(200).json({
          id: perfilDB.id,
          nombre: perfilDB.nombre,
          apellido: perfilDB.apellidos,
          email: perfilDB.email,
          celular: perfilDB.celular,
          rol: perfilDB.rol,
          descripcion: perfilDB.descripcion,
          imagen: perfilDB.image_url,
          academia: perfilDB.academia,
          linkedin: perfilDB.linkedin_url,
          cv: perfilDB.cv_url,
          views_count: perfilDB.views_count,
          last_viewed: perfilDB.last_viewed,
          activo: perfilDB.activo,
          "status": 200,
          "msg": "ok",
          "endpoint": `/api/edicion-perfil/${perfilDB.email}`
        });
      } else {
        res.status(404).json({ 'msg': 'No hay datos para mostrar' });
      }

    } catch (error) {
      console.log(error);
      res.status(500).json({ 'msg': '500 - Ha ocurrido un error interno' });

    }

  },
  destallesperfil: async (req, res) => {

    try {

      const perfilDB = await db.usuarios.findOne({ where: { email: req.params.perfil } });

      if (perfilDB) {

        res.status(200).json({
          id: perfilDB.id,
          mombre: perfilDB.nombre,
          apellido: perfilDB.apellidos,
          email: perfilDB.email,
          celular: perfilDB.celular,
          rol: perfilDB.rol,
          descripcion: perfilDB.descripcion,
          imagen: perfilDB.image_url,
          academia: perfilDB.academia,
          linkedin: perfilDB.linkedin_url,
          cv: perfilDB.cv_url,
          "status": 200,
          "msg": "ok",
          "endpoint": `/api/destalles-perfil/${perfilDB.nombre}`
        });
      } else {
        res.status(404).json({ 'msg': 'No hay datos para mostrar' });
      }

    } catch (error) {
      console.log(error);
      res.status(500).json({ 'msg': '500 - Ha ocurrido un error interno' });

    }

  }
}

module.exports = controller;
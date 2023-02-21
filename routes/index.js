var express = require('express');
var router = express.Router();
const { index, registro, login, edicionperfil, destallesperfil, destroy, modify, create,} = require("../controllers/indexController")
const {usuario} = require("../middlewares/validacionusuario");
const multer = require("../middlewares/multer");


/* GET page. */
router.get('/', index);
router.get('/registro', registro);
router.get('/login', login);
router.get('/edicion-perfil/:perfil', edicionperfil);
router.get('/destalles-perfil/:perfil', destallesperfil);

/* POST page. */
router.post('/createUser/:id',multer,usuario, create);
router.post('/editUser/:id',multer,usuario, modify);
//router.post('/loginUser', index);
router.post('/delete/:id', destroy);

module.exports = router;

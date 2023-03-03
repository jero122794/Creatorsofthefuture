var express = require('express');
var router = express.Router();
const { index, registro, login, edicionperfil, detallesperfil, destroy, modify, create, log} = require("../controllers/indexController")
const {usuario} = require("../middlewares/validacionusuario");
const multer = require("../middlewares/multer");


/* GET page. */
router.get('/', index);
router.get('/registro', registro);
router.get('/login', login);
router.get('/edicion-perfil/:id', edicionperfil);
router.get('/detalles-perfil/:perfil', detallesperfil);

/* POST page. */
router.post('/createUser/',multer,usuario, create);
router.post('/editUser/:id',multer,usuario, modify);
router.post('/loginUser', log);
router.post('/delete/:id', destroy);

module.exports = router;

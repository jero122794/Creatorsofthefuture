var express = require('express');
var router = express.Router();
const { index, registro, login, edicionperfil, destallesperfil, destroy, modify, create,} = require("../controllers/indexController")

/* GET page. */
router.get('/', index);
router.get('/registro', registro);
router.get('/login', login);
router.get('/edicion-perfil/:perfil', edicionperfil);
router.get('/destalles-perfil/:perfil', destallesperfil);

/* POST page. */
router.post('/createUser/:id', create);
router.post('/editUser/:id', modify);
//router.post('/loginUser', index);
router.post('/delete/:id', destroy);

module.exports = router;

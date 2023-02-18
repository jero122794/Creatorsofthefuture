var express = require('express');
var router = express.Router();
const { home, registro, login, edicionperfil, destallesperfil } = require("../controllers/indexController")
/* GET page. */
router.get('/', home);
/* router.get('/registro', registro);
router.get('/login', login); */
router.get('/edicion-perfil/:perfil', edicionperfil);
router.get('/destalles-perfil/:perfil', destallesperfil);

module.exports = router;

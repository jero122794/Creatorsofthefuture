const {check}=require('express-validator');

const validaciones={
    register:[
        check('nombre')
        .notEmpty().withMessage('DEBES INGRESAR TU NOMBRE.').bail()
        .isLength({min:2}).withMessage("EL NOMBRE DEBE TENER AL MENOS 5 CARACTERES."),
        
        check('apellidos')
        .notEmpty().withMessage('DEBES INGRESAR TU APELLIDO.').bail()
        .isLength({min:2}).withMessage("EL APELLIDO DEBE TENER AL MENOS 5 CARACTERES."),
        
        check('email')
        .notEmpty().withMessage('DEBES INGRESAR TU EMAIL.').bail()
        .isEmail().withMessage('DEBES INGRESAR UN EMAIL VALIDO.'),
        
        check('celular')
        .notEmpty().withMessage('DEBES INGRESAR TU NUMERO DE TELEFONO').bail()
        .isLength({min:10}).withMessage("TU CORREO DEBE TENER AL MENOS 10 DIGITOS.")
        .bail().isInt().withMessage("DEBES INGRESAR NUMEROS."),
    
        check('descripcion')
        .isLength({min:6}).withMessage("LA DESCRIPCION DEBE TENER AL MENOS 10 CARACTERES."),
        
        check('academia')
        .isLength({min:2}).withMessage("EL NOMBRE DE TU ACADEMIA DEBE TENER AL MENOS 5 CARACTERES."),
        
        check('contrasena')
        .notEmpty().withMessage('DEBES INGRESAR TU CONTRASEÑA').bail()
        .isLength({min:8}).withMessage("TU CONTRASEÑA DEBE TENER AL MENOS 8 DIGITOS."),

        check('confirmacioncontrasena')
        .notEmpty().withMessage('DEBES INGRESAR TU CONTRASEÑA DE NUEVO').bail()
        .isLength({min:8}).withMessage("TU CONTRASEÑA DEBE TENER AL MENOS 8 DIGITOS.")
    
    ],
    edit:[
        check('nombre')
        .notEmpty().withMessage('DEBES INGRESAR TU NOMBRE.').bail()
        .isLength({min:2}).withMessage("EL NOMBRE DEBE TENER AL MENOS 5 CARACTERES."),
        
        check('apellidos')
        .notEmpty().withMessage('DEBES INGRESAR TU APELLIDO.').bail()
        .isLength({min:2}).withMessage("EL APELLIDO DEBE TENER AL MENOS 5 CARACTERES."),
        
        check('email')
        .notEmpty().withMessage('DEBES INGRESAR TU EMAIL.').bail()
        .isEmail().withMessage('DEBES INGRESAR UN EMAIL VALIDO.'),
        
        check('celular')
        .notEmpty().withMessage('DEBES INGRESAR TU NUMERO DE TELEFONO').bail()
        .isLength({min:10}).withMessage("TU CORREO DEBE TENER AL MENOS 10 DIGITOS.")
        .bail().isInt().withMessage("DEBES INGRESAR NUMEROS."),
    
        check('descripcion')
        .isLength({min:6}).withMessage("LA DESCRIPCION DEBE TENER AL MENOS 10 CARACTERES."),
        
        check('academia')
        .isLength({min:2}).withMessage("EL NOMBRE DE TU ACADEMIA DEBE TENER AL MENOS 5 CARACTERES."),
        
    ]
}
module.exports = validaciones;
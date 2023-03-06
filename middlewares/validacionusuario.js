const {check}=require('express-validator');

const validaciones={
    usuario:[
        check('nombre')
        .notEmpty().withMessage('DEBES INGRESAR TU NOMBRE.').bail()
        .isLength({min:2}).withMessage("EL NOMBRE DEBE TENER AL MENOS 5 CARACTERES."),
        
        check('apellido')
        .notEmpty().withMessage('DEBES INGRESAR TU APELLIDO.').bail()
        .isLength({min:2}).withMessage("EL APELLIDO DEBE TENER AL MENOS 5 CARACTERES."),
        
        check('correo')
        .notEmpty().withMessage('DEBES INGRESAR TU EMAIL.').bail()
        .isEmail().withMessage('DEBES INGRESAR UN EMAIL VALIDO.'),
        
        check('celular')
        .notEmpty().withMessage('DEBES INGRESAR TU NUMERO DE TELEFONO').bail()
        .isLength({min:10}).withMessage("TU CORREO DEBE TENER AL MENOS 10 DIGITOS.")
        .bail().isInt().withMessage("DEBES INGRESAR NUMEROS."),
    
        check('descripcion')
        .notEmpty().withMessage('DEBES INGRESAR DE NUEVO TU DESCRIPCION').bail()
        .isLength({min:6}).withMessage("LA DESCRIPCION DEBE TENER AL MENOS 10 CARACTERES."),
        
        check('academia')
        .notEmpty().withMessage('DEBES INGRESAR NOMBRE DE TU ACADEMIA.').bail()
        .isLength({min:2}).withMessage("EL NOMBRE DE TU ACADEMIA DEBE TENER AL MENOS 5 CARACTERES."),
        
        check('linkedin')
        .notEmpty().withMessage('DEBES INGRESAR LA URL DE TU LINKEDIN.'),
        
        check('cv')
        .notEmpty().withMessage('DEBES INGRESAR LA URL DE TU CURRICULUM')
    
    ]
}
module.exports = validaciones;
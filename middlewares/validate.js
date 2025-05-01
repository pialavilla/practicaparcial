const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);

  // Si hay errores, respondemos con estado 400 y la lista de errores
if (!errors.isEmpty()) {
    return res.status(400).json({
        success: false,
        errors: errors.array()
    });
}

  // Si no hay errores, pasamos al siguiente middleware o controlador
next();
};

module.exports = validate;

const { body } = require('express-validator');

exports.createProjectValidator = [
    body('nombre').notEmpty().withMessage('El nombre del proyecto es obligatorio'),
    body('descripcion').optional().isString().withMessage('La descripción debe ser texto'),
    body('fechaInicio').notEmpty().withMessage('La fecha de inicio es obligatoria')
    .isISO8601().withMessage('La fecha de inicio debe tener formato válido (YYYY-MM-DD)'),
    body('fechaFinEstimada').optional().isISO8601().withMessage('La fecha estimada debe ser válida'),
    body('estado')
    .notEmpty().withMessage('El estado es obligatorio')
    .isIn(['propuesta', 'en curso', 'finalizado']).withMessage('El estado debe ser: propuesta, en curso o finalizado'),
    body('investigadores').optional().isArray().withMessage('Los investigadores deben ser un arreglo de IDs'),
    body('investigadores.*').isMongoId().withMessage('Cada investigador debe tener un ID válido')
];

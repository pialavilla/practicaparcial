const express = require('express');
const router = express.Router();
const controller = require('../controllers/publicationController');
const { createPublicationValidator } = require('../validators/publicationValidator');
const validate = require('../middlewares/validate');

router.get('/', controller.getAllPublications);
router.get('/:id', controller.getPublicationById);
router.post('/', createPublicationValidator, validate, controller.createPublication);
router.put('/:id', createPublicationValidator, validate, controller.updatePublication);
router.delete('/:id', controller.deletePublication);

module.exports = router;

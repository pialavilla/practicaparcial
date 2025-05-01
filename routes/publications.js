const express = require('express');
const router = express.Router();
const controller = require('../controllers/publicationController');

router.get('/', controller.getAllPublications);
router.get('/:id', controller.getPublicationById);
router.post('/', controller.createPublication);
router.put('/:id', controller.updatePublication);
router.delete('/:id', controller.deletePublication);

module.exports = router;

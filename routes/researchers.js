const express = require('express');
const router = express.Router();
const controller = require('../controllers/researcherController');

router.get('/', controller.getAllResearchers);
router.get('/:id', controller.getResearcherById);
router.post('/', controller.createResearcher);
router.put('/:id', controller.updateResearcher);
router.delete('/:id', controller.deleteResearcher);

module.exports = router;

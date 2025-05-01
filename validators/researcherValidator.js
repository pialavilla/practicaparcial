const express = require('express');
const router = express.Router();
const controller = require('../controllers/researcherController');
const { createResearcherValidator } = require('./researcherValidator');
const validate = require('../middlewares/validate');

router.get('/', controller.getAllResearchers);
router.get('/:id', controller.getResearcherById);
router.post('/', createResearcherValidator, validate, controller.createResearcher);
router.put('/:id', createResearcherValidator, validate, controller.updateResearcher);
router.delete('/:id', controller.deleteResearcher);

module.exports = router;

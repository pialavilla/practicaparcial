const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');
const { createProjectValidator } = require('../validators/projectValidator');
const validate = require('../middlewares/validate');

router.get('/', controller.getAllProjects);
router.get('/:id', controller.getProjectById);
router.post('/', createProjectValidator, validate, controller.createProject);
router.put('/:id', createProjectValidator, validate, controller.updateProject);
router.delete('/:id', controller.deleteProject);
router.put('/:id/add-researcher/:researcherId', controller.addResearcherToProject);

module.exports = router;

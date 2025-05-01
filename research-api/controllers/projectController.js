const Project = require('../models/project');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('researchers');
        res.json(projects);
    } catch (error) {
        console.error('Error en getAllProjects:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


exports.getProjectById = async (req, res) => {
    const project = await Project.findById(req.params.id).populate('researchers');
    res.json(project);
};

exports.createProject = async (req, res) => {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
};

exports.updateProject = async (req, res) => {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Proyecto eliminado' });
};

exports.addResearcherToProject = async (req, res) => {
    const { id, researcherId } = req.params;
    const project = await Project.findById(id);
    project.researchers.push(researcherId);
    await project.save();
    res.json(project);
};

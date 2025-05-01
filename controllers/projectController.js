const Project = require('../models/project');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate({
            path: 'researchers',
            strictPopulate: false
        });
        res.json(projects);
    } catch (error) {
        console.error('Error en getAllProjects:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate({
            path: 'researchers',
            strictPopulate: false
        });
        if (!project) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.json(project);
    } catch (error) {
        console.error('Error en getProjectById:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        console.error('Error en createProject:', error.message);
        res.status(500).json({ error: 'Error al crear el proyecto' });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.json(updated);
    } catch (error) {
        console.error('Error en updateProject:', error.message);
        res.status(500).json({ error: 'Error al actualizar el proyecto' });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const deleted = await Project.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.json({ message: 'Proyecto eliminado' });
    } catch (error) {
        console.error('Error en deleteProject:', error.message);
        res.status(500).json({ error: 'Error al eliminar el proyecto' });
    }
};

exports.addResearcherToProject = async (req, res) => {
    try {
        const { id, researcherId } = req.params;
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        if (!project.researchers.includes(researcherId)) {
            project.researchers.push(researcherId);
            await project.save();
        }
        res.json(project);
    } catch (error) {
        console.error('Error en addResearcherToProject:', error.message);
        res.status(500).json({ error: 'Error al asignar investigador' });
    }
};
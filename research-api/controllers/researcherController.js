const Researcher = require('../models/researcher');

exports.getAllResearchers = async (req, res) => {
    const researchers = await Researcher.find().populate('projects');
    res.json(researchers);
};

exports.getResearcherById = async (req, res) => {
    const researcher = await Researcher.findById(req.params.id).populate('projects');
    res.json(researcher);
};

exports.createResearcher = async (req, res) => {
    const researcher = new Researcher(req.body);
    await researcher.save();
    res.status(201).json(researcher);
};

exports.updateResearcher = async (req, res) => {
    const updated = await Researcher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.deleteResearcher = async (req, res) => {
    await Researcher.findByIdAndDelete(req.params.id);
    res.json({ message: 'Investigador eliminado' });
};

const Publication = require('../models/publication');

exports.getAllPublications = async (req, res) => {
    const publications = await Publication.find().populate('project').populate('authors');
    res.json(publications);
};

exports.getPublicationById = async (req, res) => {
    const publication = await Publication.findById(req.params.id).populate('project').populate('authors');
    res.json(publication);
};

exports.createPublication = async (req, res) => {
    const publication = new Publication(req.body);
    await publication.save();
    res.status(201).json(publication);
};

exports.updatePublication = async (req, res) => {
    const updated = await Publication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.deletePublication = async (req, res) => {
    await Publication.findByIdAndDelete(req.params.id);
    res.json({ message: 'Publicación eliminada' });
};

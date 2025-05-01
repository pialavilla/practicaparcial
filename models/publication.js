const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
    title: { type: String, required: true },
    summary: String,
    publicationDate: { type: Date, required: true },
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    authors: [{ type: Schema.Types.ObjectId, ref: 'Researcher' }],
});

module.exports = mongoose.model('Publication', publicationSchema);

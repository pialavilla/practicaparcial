const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researcherSchema = new Schema({
    fullName: { type: String, required: true },
    specialty: String,
    email: { type: String, required: true, unique: true },
    projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
});

module.exports = mongoose.model('Researcher', researcherSchema);
